module.exports = {
	semi: true,
	singleQuote: true,
	useTabs: true,
	tabWidth: 2,
	plugins: [require('prettier-plugin-astro')],
	overrides: [
		{
			files: '**/*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
