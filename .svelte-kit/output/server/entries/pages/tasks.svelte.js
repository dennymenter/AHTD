import { c as create_ssr_component, v as validate_component } from "../../chunks/index-756e41cf.js";
var card_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main.svelte-x3cc91{padding-left:100px;padding-right:100px}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `
<div class="${"main svelte-x3cc91"}"><img src="${"../src/images/task.png"}">

    <div class="${"row"}"><div class="${"card col-md-4"}">
            <div class="${"card-body"}"><h5 class="${"card-title"}">Load an image from CMS</h5>
                <p class="${"card-text"}">I want to make sure that I can use a URL from a CMS content entry ad go get that image. A user should be able to change the image without any IT intervention.</p>
                <p>NOT DONE</p></div></div>
        <div class="${"card col-md-4"}">
            <div class="${"card-body"}"><h5 class="${"card-title"}">Create and style an FAQ page</h5>
                <p class="${"card-text"}">Show that a few FAQs can be modeled and loaded from CMS. Demonstrate how a user would change them.</p>
                <p>NOT DONE</p></div></div>
        <div class="${"card col-md-4"}">
            <div class="${"card-body"}"><h5 class="${"card-title"}">Basic Form</h5>
                <p class="${"card-text"}">Design a basic form.</p>
                <p>NOT DONE</p></div></div>
        <div class="${"card col-md-4"}">
            <div class="${"card-body"}"><h5 class="${"card-title"}">Basic Form - API</h5>
                <p class="${"card-text"}">Submit the form to an API for handling</p>
                <p>NOT DONE</p></div></div>
        <div class="${"card col-md-4"}">
            <div class="${"card-body"}"><h5 class="${"card-title"}">API</h5>
                <p class="${"card-text"}">Make a sample &#39;live&#39; API call and display its data </p>
                <p>NOT DONE</p></div></div>
        <div class="${"card col-md-4"}">
            <div class="${"card-body"}"><h5 class="${"card-title"}">Navbar - header and footer</h5>
                <p class="${"card-text"}">Code the mocked Hope To Dream navbar to see how difficult it is to move CSS from one format to another</p>
                <p>NOT DONE</p></div></div>
        <div class="${"card col-md-4"}">
            <div class="${"card-body"}"><h5 class="${"card-title"}">Interactivity - columns</h5>
                <p class="${"card-text"}">Make a two column page that I can drag a card across (like a sprint board). See https://svelte.dev/tutorial/animate</p>
                <p>NOT DONE</p></div></div>
        <div class="${"card col-md-4"}">
            <div class="${"card-body"}"><h5 class="${"card-title"}">Javascript App</h5>
                <p class="${"card-text"}">Find some sort of javascript app and host it in a page</p>
                <p>NOT DONE</p></div></div>
        <div class="${"card col-md-4"}">
            <div class="${"card-body"}"><h5 class="${"card-title"}">Analytics</h5>
                <p class="${"card-text"}">Insert basic google analytics in a page</p>
                <p>NOT DONE</p></div></div>
        <div class="${"card col-md-4"}">
            <div class="${"card-body"}"><h5 class="${"card-title"}">Multi-lingual</h5>
                <p class="${"card-text"}">Create a simple multi-lingual page and I can switch between English and Spanish</p>
                <p>NOT DONE</p></div></div>
        <div class="${"card col-md-4"}">
            <div class="${"card-body"}"><h5 class="${"card-title"}">Conditional</h5>
                <p class="${"card-text"}">Code some sort of conditional statement for program logic</p>
                <p>NOT DONE</p></div></div>
        <div class="${"card col-md-4"}">
            <div class="${"card-body"}"><h5 class="${"card-title"}">Javascript</h5>
                <p class="${"card-text"}">Include an external javascript file (simple click of a button)</p>
                <p>NOT DONE</p></div></div>
        
        <div class="${"card col-md-4"}">
            <div class="${"card-body"}"><h5 class="${"card-title"}">Deploy</h5>
                <p class="${"card-text"}">Deploy a web site (Azure?)</p>
                <p>NOT DONE</p></div></div>
        <div class="${"card col-md-4"}">
            <div class="${"card-body"}"><h5 class="${"card-title"}">Markdown files - read</h5>
                <p class="${"card-text"}">Read a markdown file from source folder. See https://morioh.com/p/6b8863b52e39 for a possible solution. This might be better https://www.npmjs.com/package/svelte-markdown</p>
                <p>NOT DONE</p></div></div>
        <div class="${"card col-md-4"}">
            <div class="${"card-body"}"><h5 class="${"card-title"}">Build timestamp</h5>
                <p class="${"card-text"}">Figure out a way to have a timestamp update on each new build</p>
                <p>NOT DONE</p></div></div>
        <div class="${"card col-md-4"}">
                <div class="${"card-body"}"><h5 class="${"card-title"}">Load custom font</h5>
                    <p class="${"card-text"}">Load the <a href="${"../nav-font-banner"}">custom font</a> I need for AHTD.</p>
                    <p>DONE</p></div></div></div>
</div>`;
});
const Tasks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>List of tasks</h1>
${validate_component(Card, "Task").$$render($$result, {}, {}, {})}

<p>ALSO</p>
<p>look into svelte HTML tags (head, html, ??)</p>`;
});
export { Tasks as default };
