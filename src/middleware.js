import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
	const url = context.url;
	const pathname = url.pathname;

	// Si ya está en una ruta de idioma, continuar
	if (pathname.startsWith('/en/') || pathname.startsWith('/es/')) {
		return next();
	}

	// Solo redirigir en la página raíz
	if (pathname === '/') {
		const acceptLanguage = context.request.headers.get('accept-language') || '';

		// Obtener el idioma principal (el primero en la lista)
		const primaryLanguage = acceptLanguage
			.split(',')[0]
			.split('-')[0]
			.toLowerCase();

		// Solo redirigir si el idioma PRINCIPAL es español
		if (primaryLanguage === 'es') {
			return next(); //continúa en la página en español
		} else {
			return context.redirect('/en/');
		}
	}

	// Continuar normalmente (español por defecto)
	return next();
});
