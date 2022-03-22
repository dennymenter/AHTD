import { c as create_ssr_component, a as each, e as escape } from "../../chunks/index-756e41cf.js";
async function load({ fetch }) {
  const response = await fetch("https://api-eu-west-2.graphcms.com/v2/cl072jsru0z0p01z3e6nye6i6/master");
  const faqs = await response.json();
  console.log(faqs);
  if (response.ok) {
    return { props: { faqs } };
  }
  console.log("error");
  return {
    status: response.status,
    error: new Error("error encountered - could not fetch faqs")
  };
}
const FaqCMS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { faqs } = $$props;
  if ($$props.faqs === void 0 && $$bindings.faqs && faqs !== void 0)
    $$bindings.faqs(faqs);
  return `












<div>${each(faqs, (faq) => {
    return `<p><b>${escape(faq.title)}</b></p>        
        <p>${escape(faq.body)}</p>`;
  })}</div>



<h1>Got here - FAQ</h1>`;
});
export { FaqCMS as default, load };
