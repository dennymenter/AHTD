export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-46ebe05e.js","js":["start-46ebe05e.js","chunks/vendor-9d2670dc.js"],"css":["assets/vendor-28d9e71a.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js')
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "nav-font-banner",
				pattern: /^\/nav-font-banner\/?$/,
				params: null,
				path: "/nav-font-banner",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				key: "testpage",
				pattern: /^\/testpage\/?$/,
				params: null,
				path: "/testpage",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				key: "faqCMS",
				pattern: /^\/faqCMS\/?$/,
				params: null,
				path: "/faqCMS",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				key: "about",
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				key: "tasks",
				pattern: /^\/tasks\/?$/,
				params: null,
				path: "/tasks",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				key: "misc",
				pattern: /^\/misc\/?$/,
				params: null,
				path: "/misc",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				key: "misc/misc",
				pattern: /^\/misc\/misc\/?$/,
				params: null,
				path: "/misc/misc",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				key: "faq",
				pattern: /^\/faq\/?$/,
				params: null,
				path: "/faq",
				shadow: null,
				a: [0,10],
				b: [1]
			}
		]
	}
};
