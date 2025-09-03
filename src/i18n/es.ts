import type { Translation } from './types';

const esTranslations: Translation = {
	nav: {
		home: 'Inicio',
		work: 'Proyectos',
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
    },
	testimonials: {
		title: 'Lo que dicen de mí',
		subtitle: 'Aquí tienes algunos testimonios de clientes y colegas con los que he tenido el placer de trabajar.',
		items: [
			{
				id: 'jorge-gaymer',
				name: 'Jorge Gaymer',
				position: 'Jefe Sucursal Virtual',
				company: 'AFC Chile',
				content: 'Quiero agradecer a Álvaro por su espíritu colaborativo y gran capacidad para desarrollar mejoras y automatizaciones a los procesos. Siempre se encuentra al servicio de otros, siendo sumamente empático y receptivo de las necesidades de los equipos, entregando grandes soluciones gracias a su conocimiento y habilidades que le permiten plasmar la verdadera necesidad planteada. Sé que te he puesto desafíos complejos, pero siempre hayas la soluciuón y mejor aún, potenciándola. Gracias por tu trabajo y compromiso !!',
				featured: true,
				date: '2023-05-15'
			},
			{
				id: 'camila-gonzalez',
				name: 'Camila Gonzalez',
				position: 'Comunicaciones Corporativas',
				company: 'AFC Chile',
				content: 'Cuando cumplí un par de meses en AFC, tuve que pedir ayuda a Álvaro en un tema de creación de mailing informativo. Luego de que él solucionase el requerimiento de forma muy profesional y que yo le agradeciera su trabajo, él me explicó que me ayudaba contento pues eso era parte del "espíritu AFC" y esa mención me ha inspirado hasta hoy en mis propias labores diarias. Por eso quiero reconocer hoy a Álvaro, quien en cada requerimiento y ayuda, constantemente tiene una excelente disposición a la colaboración, a entregar buenas ideas, correcciones y siempre hacerlo dentro de los tiempos requeridos, con mucha amabilidad y buen humor. Además, recalco su excelente conocimiento en la gestión de bases de datos y automatización, procesos que han sido vitales en la generación de mailing del área de Comunicaciones Corporativas. Gracias por todo, Álvaro!',
				featured: true,
				date: '2023-03-20'
			},
			{
				id: 'jessica-valdivia',
				name: 'Jessica Valdivia',
				position: 'Jefe Departamento Atención Especializada',
				company: 'AFC Chile',
				content: 'Quiero reconocer y agradecer tu trabajo. Siempre nos apoyas y aportas muy buenas ideas en todas las mejoras que queremos implementar en el DAE. Cada vez que te pido ayuda siempre estás con una excelente disposición, con mucha amabilidad, paciencia y buen humor, me has apoyado mucho con cada cosa que se me ocurre, y por dedicarnos tu tiempo en escuchar y colaborar con nosotros, es un gusto trabajar contigo. Eres un gran profesional. Gracias por siempre ayudarnos. También les quiero agradecer como equipo de Analistas por el excelente trabajo que han realizado. Gracias a ustedes se han podido implementar muchas mejoras en nuestros procesos, pasando de lo manual a sistematizar, sacar estadísticas para tomar decisiones y llevar un mejor control. Nuestros flujos han evolucionado positivamente gracias a su trabajo. Son un equipo increíble. ¡Son secos!',
				featured: true,
				date: '2023-01-10'
			},
			{
				id: 'elinor-relmuan',
				name: 'Elinor Relmuan',
				position: 'Jefa Depto. Empleador',
				company: 'AFC Chile',
				content: 'Quiero reconocer al equipo de Analistas de Servicios, por su excelente disposición, rápido aprendizaje y gran capacidad resolutiva, lo que nos ha permitido avanzar en conjunto en la implementación de soluciones que no necesariamente impactan o benefician a su área. Muchas gracias por ayudarnos a avanzar y compartir sus conocimientos!!',
				featured: true,
				date: '2023-02-15'
			},
			{
				id: 'maria-isabel-bravo',
				name: 'María Isabel Bravo',
				position: 'Asistente DAE',
				company: 'AFC Chile',
				content: 'Quiero agradecer por siempre escuchar, ayudar, por tenerme paciencia. Admiro inmensamente tu profesionalismo, tu mente y la gran persona que eres. Eres un ejemplo a seguir.',
				featured: true,
				date: '2023-02-20'
			},
			{
				id: 'sebastian-quijada',
				name: 'Sebastián Quijada',
				position: 'Analista de Operaciones',
				company: 'AFC Chile',
				content: 'Álvaro, gracias por tu constante apoyo a todas las dudas, además de siempre tener la mejor de las disposiciones y tu excelente buena onda',
				featured: true,
				date: '2023-02-25'
			},
			{
				id: 'camila-gonzalez-2',
				name: 'Camila Gonzalez',
				position: 'Comunicaciones Corporativas',
				company: 'AFC Chile',
				content: 'Quería reconocer el trabajo de analista de Álvaro, quien nos ayudó a generar una base de datos de afiliados que tuviese el objetivo de atraer seguidores a nuestro Instagram. Gracias a su trabajo hemos logrado una cifra que ha superado toda meta inicial. Gracias por tu trabajo Álvaro!',
				featured: true,
				date: '2023-03-20'
			},
			{
				id: 'camila-gonzalez-3',
				name: 'Camila Gonzalez',
				position: 'Comunicaciones Corporativas',
				company: 'AFC Chile',
				content: 'Quiero agradecer a Álvaro Mora por su ayuda al equipo de Comunicaciones para gestionar envíos de mailings. No sólo es profesional y hábil en sus gestiones, sino que siempre destaco su amabilidad y gentileza. Incluso dándose tiempo de enseñar en lo que uno requiera. ¡Gracias Álvaro!',
				featured: true,
				date: '2023-03-20'
			},
			{
				id: 'katia-vergara',
				name: 'Katia Vergara',
				position: 'Supervisor DAE',
				company: 'AFC Chile',
				content: 'Agradecerte por el apoyo en el desarrollo de nuevas herramientas que permiten mejorar nuestro servicio. Siempre ágil y muy, muy proactivo.',
				featured: true,
				date: '2023-03-25'
			},
			{
				id: 'loreto-villota',
				name: 'Loreto Villota',
				position: 'Analista DAE',
				company: 'AFC Chile',
				content: 'Excelente su apoyo y gran disposición',
				featured: true,
				date: '2023-03-30'
			},
			{
				id:'sebastian-miranda',
				name: 'Sebastián Miranda',
				position: 'Jefe Innovación',
				company: 'AFC Chile',
				content: 'Por tener siempre la mejor disposición a colaborar, ya sea con temas que tienen impacto en la subgerencia de la cual son parte, como también de otros equipos externos. Tremenda orientación al servicio y colaboración.',
				featured: true,
				date: '2023-03-25'
			},
			{
				id: 'nancy-alvarez',
				name: 'Nancy Álvarez',
				position: 'Analista DAE',
				company: 'AFC Chile',
				content: 'Por su tremenda contribución y aporte a todos los equipos de la Subgerencia de Servicios, en especial al equipo de Contact Center y los proyectos que hemos abordado en este periodo, destacando por su proactividad, seguimiento y apoyo a sus compañeros.',
				featured: true,
				date: '2023-03-25'
			},
			{
				id: 'soledad-gonzalez',
				name: 'Soledad González',
				position: 'Supervisor Contact Center',
				company: 'AFC Chile',
				content: 'Siempre dispuesto a apoyar, ayudar, desarrollar ideas y colaborar con todo lo que se solicita. Alegre, positivo, alguien con quien se puede contar.',
				featured: true,
				date: '2023-03-25'
			}


		]
	},
} as const satisfies Translation;

export default esTranslations;
