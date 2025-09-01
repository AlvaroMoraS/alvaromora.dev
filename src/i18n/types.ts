// Definir la estructura base de todas las traducciones
export interface TranslationSchema {
	nav: {
		home: string;
		about: string;
		contact: string;
	};
	contactCTA: {
		title: string;
		cta: string;
	};
	footer: {
		text: string;
		with: string;
	};
	hero: {
		title: string;
		subtitle: string;
	};
    works: {
        title: string;
        subtitle: string;
        cta: string;
    }
}

// Tipo para validar que todas las traducciones cumplan el schema
export type Translation = TranslationSchema;
