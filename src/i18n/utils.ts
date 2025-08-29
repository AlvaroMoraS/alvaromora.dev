import es from './es.json';
import en from './en.json';

const translations = { es, en };

export function getLocaleFromUrl(url: URL) {
	const [, locale] = url.pathname.split('/');
	if (locale in translations) return locale as keyof typeof translations;
	return 'es'; // idioma por defecto
}

export function useTranslations(locale: keyof typeof translations) {
	return function t(key: string) {
		const keys = key.split('.');
		let value: any = translations[locale];
		for (const k of keys) {
			value = value?.[k];
		}
		return value || key;
	};
}
