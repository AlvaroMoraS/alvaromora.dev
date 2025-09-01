export interface SiteConfig {
	personal: {
		name: string;
		fullName: string;
		email: string;
		phone: string;
		location: string;
		urlLocation: string;
	};
	site: {
		title: string;
		description: string;
		url: string;
		language: string;
	};
	social: {
		instagram: string;
		github: string;
		linkedIn: string;
		whatsapp: string;
		telegram: string;
	};
}

export const SITE_CONFIG: SiteConfig = {
	personal: {
		name: 'Alvaro Mora',
		fullName: 'Alvaro Mora Sepúlveda',
		email: 'alvaro.mora.sep@gmail.com',
		phone: '+56 9 6140 1353',
		location: 'Santiago, Chile',
		urlLocation:
			'https://www.google.com/maps/place/Santiago,+Regi%C3%B3n+Metropolitana/',
	},
	site: {
		title: 'Álvaro Mora Website',
		description:
			'Bienvenido a mi portafolio web, dedicado al maravilloso mundo de la programación.',
		url: 'https://alvaromora.dev',
		language: 'es',
	},
	social: {
		instagram: 'https://www.instagram.com/alvaro_mora_s/',
		github: 'https://github.com/alvaromoras',
		linkedIn: 'https://www.linkedin.com/in/alvaromorasepulveda/',
		whatsapp: 'https://wa.me/56961401353',
		telegram: 'https://t.me/alvaromoras',
	},
};
