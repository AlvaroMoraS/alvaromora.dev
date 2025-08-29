// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
	output: 'server',
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en'],
		routing: {
			prefixDefaultLocale: false,
			redirectToDefaultLocale: false,
		},
	},
});
