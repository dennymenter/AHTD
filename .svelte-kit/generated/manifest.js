const c = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\nav-font-banner.svelte"),
	() => import("..\\..\\src\\routes\\testpage.svelte"),
	() => import("..\\..\\src\\routes\\coltest.svelte"),
	() => import("..\\..\\src\\routes\\faqCMS.svelte"),
	() => import("..\\..\\src\\routes\\about.svelte"),
	() => import("..\\..\\src\\routes\\tasks.svelte"),
	() => import("..\\..\\src\\routes\\misc\\index.svelte"),
	() => import("..\\..\\src\\routes\\misc\\misc.svelte"),
	() => import("..\\..\\src\\routes\\faq.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/nav-font-banner.svelte
	[/^\/nav-font-banner\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/testpage.svelte
	[/^\/testpage\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/coltest.svelte
	[/^\/coltest\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/faqCMS.svelte
	[/^\/faqCMS\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/tasks.svelte
	[/^\/tasks\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/misc/index.svelte
	[/^\/misc\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/misc/misc.svelte
	[/^\/misc\/misc\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/faq.svelte
	[/^\/faq\/?$/, [c[0], c[11]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];