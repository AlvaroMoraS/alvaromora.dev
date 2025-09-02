// Definir la estructura base de todas las traducciones
export interface TestimonialItem {
	id: string;
	name: string;
	position: string;
	company: string;
	content: string;
	avatar?: string;
	featured?: boolean;
	date?: string;
}

export interface TranslationSchema {
	nav: {
		home: string;
		work: string;
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
    };
	testimonials: {
		title: string;
		subtitle: string;
		items: TestimonialItem[];
	};
}

// Tipo para validar que todas las traducciones cumplan el schema
export type Translation = TranslationSchema;
