import { c as create_ssr_component } from "../../chunks/index-756e41cf.js";
var coltest_svelte_svelte_type_style_lang = "";
const css = {
  code: ".border.svelte-1p2kpt5{border-width:2px !important;border-style:solid}.flex-col.svelte-1p2kpt5{display:flex;flex-direction:column}.flex-row.svelte-1p2kpt5{display:flex;flex-direction:row}@media(max-width:400px){.break-col-1.svelte-1p2kpt5{width:100%;background-color:red}}",
  map: null
};
const Coltest = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<p style="${"margin-top: 10px; border-bottom: solid"}">some testing with columns</p>


    <p>Bootstrap</p>
    <p>Problem with BS is that all columns are same width</p>
    <p>nowrap doesn&#39;t work because then it bleeds into the next column</p>

    <div class="${"row border svelte-1p2kpt5"}" style="${"justify-content: center"}"><div class="${"col-lg-1 border svelte-1p2kpt5"}">Hi</div>
        <div class="${"col-lg-1 border svelte-1p2kpt5"}"><p>This is a very long entry for a column</p>
            <p class="${"text-nowrap"}">This is a very long entry for a column xxxxxxx xxxxxxxxxx xxxxxxxxxx</p></div>
        <div class="${"col-lg-1 border svelte-1p2kpt5"}">TEST</div>
        <div class="${"col-lg-1 border svelte-1p2kpt5"}">TEST</div>
        <div class="${"col-lg-1 border svelte-1p2kpt5"}">TEST</div>
        <div class="${"col-lg-1 border svelte-1p2kpt5"}">TEST</div>
        <div class="${"col-lg-1 border svelte-1p2kpt5"}">TEST</div></div>

    <div style="${"margin-top: 20px; border-top: solid"}">Trying with a flex grid now</div>

    <div class="${"flex-row border svelte-1p2kpt5"}"><div class="${"flex-col border break-col-1 svelte-1p2kpt5"}">Hi
        </div>
        <div style="${"width: 100%"}"></div>
        <div class="${"flex-col border break-col-1 svelte-1p2kpt5"}">Here&#39;s a longer entry for the column
        </div>
        <div class="${"flex-col border break-col-1 svelte-1p2kpt5"}">Medium Length
        </div>
        <div class="${"flex-col border break-col-1  svelte-1p2kpt5"}">And this is a great deal of text that I expect may not wrap if I don&#39;t change anything.
        </div>
    </div>`;
});
export { Coltest as default };
