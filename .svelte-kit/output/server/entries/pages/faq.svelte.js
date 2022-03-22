import { c as create_ssr_component, a as each, e as escape } from "../../chunks/index-756e41cf.js";
async function load({ fetch }) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
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
const Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { faqs } = $$props;
  if ($$props.faqs === void 0 && $$bindings.faqs && faqs !== void 0)
    $$bindings.faqs(faqs);
  return `










<div>${each(faqs, (faq) => {
    return `<p><b>${escape(faq.title)}</b></p>        
        <p>${escape(faq.body)}</p>`;
  })}</div>`;
});
export { Faq as default, load };
