import type { Translation } from './types';

const esTranslations: Translation = {
	nav: {
		home: 'Inicio',
		about: 'Acerca de',
		contact: 'Contacto',
	},
	contactCTA: {
		title: '¿Interesado en trabajar juntos?',
		cta: 'Envíame un mensaje',
	},
	footer: {
		text: 'Diseñado & Desarrollado en',
		with: 'con',
	},
	hero: {
		title: 'Hola, soy Álvaro Mora',
		subtitle: 'Apasionado por resolver problemas y convertir ideas en realidad — desde la automatización con Python y SQL hasta la mejora continua en cada proyecto',
	},
    works: {
        title: 'Proyectos seleccionados',
        subtitle: 'Echa un vistazo a algunos de mis trabajos destacados para clientes en los últimos años.',
        cta: 'Ver Todos',
    }
} as const satisfies Translation;

export default esTranslations;
