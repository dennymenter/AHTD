import { c as create_ssr_component, v as validate_component } from "../../chunks/index-756e41cf.js";
var global = "";
var nav = "";
const Nav_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<meta charset="${"utf-8"}" data-svelte="svelte-iek16b"><meta name="${"viewport"}" content="${"width=device-width, initial-scale=1"}" data-svelte="svelte-iek16b"><link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"}" data-svelte="svelte-iek16b"><link rel="${"stylesheet"}" href="${"https://use.fontawesome.com/releases/v5.10.2/css/all.css"}" data-svelte="svelte-iek16b"><link href="${"../src/css/Scratchystylesheet.css"}" rel="${"stylesheet"}" data-svelte="svelte-iek16b"><link href="${"../src/css/main.css"}" rel="${"stylesheet"}" data-svelte="svelte-iek16b"><script src="${"https://www.markuptag.com/bootstrap/5/js/bootstrap.bundle.min.js"}" data-svelte="svelte-iek16b"><\/script>`, ""}

    <nav class="${"navbar navbar-expand-lg navbar-dark backColor"}" style="${"padding: 0px"}"><div class="${"container backColor"}" style="${"margin=0px; align-content:left"}"><a class="${"navbar-brand nopadding"}" href="${"/"}"><img src="${"../src/images/AHTDLogo.jpg"}" alt="${"Logo"}" class="${"img-fluid"}"></a>
            <button class="${"navbar-toggler"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#navbarNavDropdown"}" aria-controls="${"navbarNavDropdown"}" aria-expanded="${"false"}" aria-label="${"Toggle navigation"}"><span class="${"navbar-toggler-icon"}"></span></button>
            <div class="${"collapse navbar-collapse"}" id="${"navbarNavDropdown"}"><ul class="${"navbar-nav mx-auto"}"><li class="${"nav-item"}"><a class="${"nav-link active text-nowrap"}" href="${"/"}">Home</a></li>

                    <li class="${"nav-item dropdown"}"><a class="${"nav-link dropdown-toggle"}" href="${"#"}" id="${"navbarDropdownMenuLink"}" role="${"button"}" data-bs-toggle="${"dropdown"}" aria-expanded="${"false"}">More/Tools
                        </a>
                        <ul class="${"dropdown-menu"}" aria-labelledby="${"navbarDropdownMenuLink"}"><li><a class="${"dropdown-item"}" href="${"../tasks"}">Tasks</a></li>
                            <li><a class="${"dropdown-item"}" href="${"../coltest"}">Column Tests</a></li>
                            <li><a class="${"dropdown-item"}" href="${"https://sveltestrap.js.org/?path=/story/components--get-started"}" target="${"_new"}">Svelte Bootstrap</a></li>
                            <li><a class="${"dropdown-item"}" href="${"/nav-font-banner"}">Custom Font Header</a></li>
                            <li><a class="${"dropdown-item"}" href="${"https://www.markuptag.com/bootstrap-5-navbar-with-login-button"}">Basic Navbar Code</a></li></ul></li>
                    <li class="${"nav-item"}"><a class="${"nav-link text-nowrap"}" href="${"../about"}">About Us</a></li>
                    <li class="${"nav-item"}"><a class="${"nav-link"}" href="${"../faq"}">FAQ</a></li>
                    <li class="${"nav-item dropdown"}"><a class="${"nav-link dropdown-toggle text-nowrap"}" href="${"#"}" id="${"navbarDropdownMenuLink"}" role="${"button"}" data-bs-toggle="${"dropdown"}" aria-expanded="${"false"}">View More
                        </a>
                        <ul class="${"dropdown-menu"}" aria-labelledby="${"navbarDropdownMenuLink"}"><li><a class="${"dropdown-item"}" href="${"https://www.markuptag.com/bootstrap-5-navbar-with-login-button"}">Basic Navbar Code</a></li>
                            <li><a class="${"dropdown-item"}" href="${"#"}">Web Designing</a></li>
                            <li><a class="${"dropdown-item"}" href="${"#"}">Android Development</a></li></ul></li>
                    <li class="${"nav-item"}"><a class="${"nav-link text-nowrap"}" href="${"#"}">Contact Us</a></li></ul>
                <div class="${"d-flex"}"><div class="${"dropdown"}"><button class="${"btn btn-light dropdown-toggle"}" type="${"button"}" id="${"dropdownMenuButton"}" data-bs-toggle="${"dropdown"}" aria-expanded="${"false"}">Our Products
                        </button>
                        <ul class="${"dropdown-menu"}" aria-labelledby="${"dropdownMenuButton"}"><li><a class="${"dropdown-item"}" href="${"#"}">Product One</a></li>
                            <li><a class="${"dropdown-item"}" href="${"#"}">Product Two</a></li>
                            <li><a class="${"dropdown-item"}" href="${"#"}">Product Three</a></li></ul></div>
                    <button class="${"btn btn-light ms-3"}">Login</button></div></div></div></nav>`;
});
var Modal_svelte_svelte_type_style_lang = "";
var Offcanvas_svelte_svelte_type_style_lang = "";
const Nav_footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


<p style="${"padding-top: 150px"}">BOOTSTAP VERSION</p>
<container class="${"row container-footer"}" style="${"justify-content: center"}"><div class="${"col-sm-2 footer-header"}">HOME
	</div>
	<div class="${"col-sm-2"}"><p class="${"footer-header"}">WHO WE ARE</p>
		<p class="${"footer-subhead"}">ABOUT H2D</p>
		<p class="${"footer-subhead"}">PARTICIPATING RETAIL STORES</p>
		<p class="${"footer-subhead"}">FAQ</p>
		<p class="${"footer-subhead"}">CONTACT US</p>
		<p class="${"footer-subhead"}">WHO WE ARE</p></div>
	<div class="${"col-sm-2 footer-header"}"><p class="${"footer-header"}">GET INVOLVED</p>
		<p class="${"footer-subhead"}">NOMINATE A CHILD</p>
		<p class="${"footer-subhead"}">DONATE</p></div>
	<div class="${"col-sm-2 footer-header"}"><p class="${"footer-header"}">MEDIA</p>
		<p class="${"footer-subhead"}">GALLERY</p>
		<p class="${"footer-subhead"}">NEWS</p>
		<p class="${"footer-subhead"}">SOCIAL MEDIA</p></div>
	<div class="${"col-sm-2 footer-header"}"><p class="${"footer-header"}">SUPPORT LINKS</p>
		<p class="${"footer-subhead"}">TRANSLATE to ....</p></div>
	<div class="${"col-sm-2 footer-header"}"><a class="${"bottom-nav-item "}" href="${"https://www.facebook.com/HopeToDreamAHS/"}" alt="${"Facebook"}"><img src="${"../src/images/facebook.png"}" width="${"50"}" height="${"60"}"></a>
		<a class="${"bottom-nav-item "}" href="${"https://www.instagram.com/hopetodreamahs/"}" alt="${"Instagram"}"><img src="${"../src/images/instragram.png"}" width="${"51"}" height="${"60"}" alt="${""}"></a>
		<a class="${"bottom-nav-item "}" href="${"https://twitter.com/HopeToDreamAHS"}" alt="${"Twitter"}"><img src="${"../src/images/twitter.png"}" width="${"56"}" height="${"60"}" alt="${""}"></a></div></container>



`;
});
var app = "";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"https://www.markuptag.com/bootstrap/5/css/bootstrap.min.css"}" data-svelte="svelte-1ofeq5w"><link rel="${"stylesheet"}" href="${"https://use.fontawesome.com/releases/v5.10.2/css/all.css"}" data-svelte="svelte-1ofeq5w"><script src="${"https://www.markuptag.com/bootstrap/5/js/bootstrap.bundle.min.js"}" data-svelte="svelte-1ofeq5w"><\/script>`, ""}

<main>${validate_component(Nav_header, "NavHeader").$$render($$result, {}, {}, {})}
    ${slots.default ? slots.default({}) : ``}
    <div style="${"padding-top: 10px"}"></div>
    ${validate_component(Nav_footer, "NavFooter").$$render($$result, {}, {}, {})}</main>`;
});
export { _layout as default };
