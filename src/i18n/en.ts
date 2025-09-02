import type { Translation } from './types';

const enTranslations: Translation = {
	nav: {
		home: 'Home',
		work: 'Work',
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
    },
	testimonials: {
		title: 'What People Say',
		subtitle: 'Here are some testimonials from clients and colleagues I\'ve had the pleasure to work with.',
		items: [
  {
    id: 'jorge-gaymer',
    name: 'Jorge Gaymer',
    position: 'Head of Virtual Branch',
    company: 'AFC Chile',
    content: 'I want to thank Álvaro for his collaborative spirit and great ability to develop improvements and process automations. He is always willing to help others, being highly empathetic and receptive to the needs of the teams, delivering great solutions thanks to his knowledge and skills that allow him to capture the true needs raised. I know I have given you complex challenges, but you always find the solution—and even better, you enhance it. Thank you for your work and commitment!!',
    featured: true,
    date: '2023-05-15'
  },
  {
    id: 'camila-gonzalez',
    name: 'Camila Gonzalez',
    position: 'Corporate Communications',
    company: 'AFC Chile',
    content: 'When I had been at AFC for just a couple of months, I had to ask Álvaro for help with creating an informational mailing. After he solved the request very professionally and I thanked him for his work, he explained to me that he was happy to help because that was part of the "AFC spirit," and that mention has inspired me to this day in my own daily work. That’s why I want to recognize Álvaro today, who in every request and instance of support consistently shows an excellent attitude toward collaboration, provides good ideas, corrections, and always delivers within the required timeframes—with great kindness and good humor. I also want to highlight his excellent knowledge of database management and automation, processes that have been vital in generating mailings for the Corporate Communications area. Thank you for everything, Álvaro!',
    featured: true,
    date: '2023-03-20'
  },
  {
    id: 'jessica-valdivia',
    name: 'Jessica Valdivia',
    position: 'Head of Specialized Service Department',
    company: 'AFC Chile',
    content: 'I want to acknowledge and thank you for your work. You always support us and bring very good ideas to all the improvements we want to implement in the DAE. Every time I ask you for help, you are always willing—with kindness, patience, and good humor. You have supported me with every idea I come up with, dedicating your time to listening and collaborating with us. It is a pleasure working with you. You are a great professional. Thank you for always helping us. I also want to thank you as a team of Analysts for the excellent work you have done. Thanks to you, we have been able to implement many improvements in our processes, moving from manual to systematized, generating statistics to make decisions, and achieving better control. Our workflows have evolved positively thanks to your work. You are an incredible team. You’re amazing!',
    featured: true,
    date: '2023-01-10'
  },
  {
    id: 'elinor-relmuan',
    name: 'Elinor Relmuan',
    position: 'Head of Employer Department',
    company: 'AFC Chile',
    content: 'I want to acknowledge the Service Analysts team for their excellent attitude, quick learning, and great problem-solving skills, which have allowed us to move forward together in implementing solutions that don’t necessarily impact or benefit their own area. Thank you very much for helping us move forward and for sharing your knowledge!!',
    featured: true,
    date: '2023-02-15'
  },
  {
    id: 'maria-isabel-bravo',
    name: 'María Isabel Bravo',
    position: 'DAE Assistant',
    company: 'AFC Chile',
    content: 'I want to thank you for always listening, helping, and being patient with me. I greatly admire your professionalism, your mind, and the wonderful person you are. You are a role model to follow.',
    featured: true,
    date: '2023-02-20'
  },
  {
    id: 'sebastian-quijada',
    name: 'Sebastián Quijada',
    position: 'Operations Analyst',
    company: 'AFC Chile',
    content: 'Álvaro, thank you for your constant support with all my questions, and for always having the best attitude and such positive energy.',
    featured: true,
    date: '2023-02-25'
  },
  {
    id: 'camila-gonzalez-2',
    name: 'Camila Gonzalez',
    position: 'Corporate Communications',
    company: 'AFC Chile',
    content: 'I want to acknowledge Álvaro’s work as an analyst, who helped us create a database of members with the goal of attracting followers to our Instagram account. Thanks to his work, we have achieved a number that has exceeded all our initial goals. Thank you for your work, Álvaro!',
    featured: true,
    date: '2023-03-20'
  },
  {
    id: 'camila-gonzalez-3',
    name: 'Camila Gonzalez',
    position: 'Corporate Communications',
    company: 'AFC Chile',
    content: 'I want to thank Álvaro Mora for his help to the Communications team in managing mailing deliveries. Not only is he professional and skilled in his tasks, but I always highlight his kindness and gentleness—even taking the time to teach when needed. Thank you, Álvaro!',
    featured: true,
    date: '2023-03-20'
  },
  {
    id: 'katia-vergara',
    name: 'Katia Vergara',
    position: 'DAE Supervisor',
    company: 'AFC Chile',
    content: 'Thank you for your support in developing new tools that help improve our service. Always fast and very, very proactive.',
    featured: true,
    date: '2023-03-25'
  },
  {
    id: 'loreto-villota',
    name: 'Loreto Villota',
    position: 'DAE Analyst',
    company: 'AFC Chile',
    content: 'Excellent support and great attitude.',
    featured: true,
    date: '2023-03-30'
  },
  {
    id:'sebastian-miranda',
    name: 'Sebastián Miranda',
    position: 'Head of Innovation',
    company: 'AFC Chile',
    content: 'For always having the best attitude to collaborate, whether on matters that impact the department you are part of, or with other external teams as well. Tremendous service orientation and collaboration.',
    featured: true,
    date: '2023-03-25'
  },
  {
    id: 'nancy-alvarez',
    name: 'Nancy Álvarez',
    position: 'DAE Analyst',
    company: 'AFC Chile',
    content: 'For his tremendous contribution and support to all the teams in the Services Sub-management, especially the Contact Center team and the projects we have tackled during this period—standing out for his proactivity, follow-up, and support to his colleagues.',
    featured: true,
    date: '2023-03-25'
  },
  {
    id: 'soledad-gonzalez',
    name: 'Soledad González',
    position: 'Contact Center Supervisor',
    company: 'AFC Chile',
    content: 'Always willing to support, help, develop ideas, and collaborate with everything that is requested. Cheerful, positive, someone you can count on.',
    featured: true,
    date: '2023-03-25'
  }
]
	},
} as const satisfies Translation;

export default enTranslations;
