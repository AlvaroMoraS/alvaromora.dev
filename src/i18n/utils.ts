import esTranslations from './es';
import enTranslations from './en';
import config from '../../astro.config.mjs';

export const languages = {
    es: 'Español',
    en: 'English',
};

// Validación estricta: el sistema debe fallar si no hay configuración válida
function getDefaultLangFromConfig(): keyof typeof languages {
    const defaultLocale = config.i18n?.defaultLocale;
    
    if (!defaultLocale) {
        throw new Error('i18n.defaultLocale is not configured in astro.config.mjs');
    }
    
    if (!(defaultLocale in languages)) {
        throw new Error(`Default locale "${defaultLocale}" is not supported. Available locales: ${Object.keys(languages).join(', ')}`);
    }
    
    return defaultLocale as keyof typeof languages;
}

export const defaultLang = getDefaultLangFromConfig();

const ui = {
    es: esTranslations,
    en: enTranslations,
} as const;

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

// Nueva función para obtener el idioma actual de forma consistente
export function getCurrentLang(astroCurrentLocale?: string, url?: URL): keyof typeof ui {
    // Prioridad 1: Astro.currentLocale (para páginas con getStaticPaths)
    if (astroCurrentLocale && astroCurrentLocale in ui) {
        return astroCurrentLocale as keyof typeof ui;
    }
    
    // Prioridad 2: URL pathname (para páginas dinámicas)
    if (url) {
        return getLangFromUrl(url);
    }
    
    // Fallback: idioma por defecto
    return defaultLang as keyof typeof ui;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: string) {
        const keys = key.split('.');
        let value: any = ui[lang];
        
        for (const k of keys) {
            value = value?.[k];
        }
        
        return value || key;
    }
}