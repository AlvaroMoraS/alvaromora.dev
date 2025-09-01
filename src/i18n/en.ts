import type { Translation } from './types';

const enTranslations: Translation = {
	nav: {
		home: 'Home',
		about: 'About',
		contact: 'Contact',
	},
	contactCTA: {
		title: 'Interested in working together?',
		cta: 'Send me a message',
	},
	footer: {
		text: 'Designed & Developed in',
		with: 'with',
	},
	hero: {
		title: 'Hello, I\'m Alvaro Mora',
		subtitle: 'Passionate about solving problems and turning ideas into reality — from automation with Python and SQL to continuous improvement in every project',
	},
    works: {
        title: 'Selected Projects',
        subtitle: 'Take a look below at some of my featured work for clients from the past few years.',
        cta: 'View All',
    }
} as const satisfies Translation;

export default enTranslations;
