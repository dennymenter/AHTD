import{S as w,i as x,s as I,e as _,t as q,k as P,c as h,a as p,h as b,d as f,m as S,g as d,H as m,j as y,I as E,N as B}from"../chunks/vendor-9d2670dc.js";function k(n,l,s){const e=n.slice();return e[1]=l[s],e}function j(n){let l,s,e=n[1].title+"",a,r,t,i=n[1].body+"",u;return{c(){l=_("p"),s=_("b"),a=q(e),r=P(),t=_("p"),u=q(i)},l(o){l=h(o,"P",{});var c=p(l);s=h(c,"B",{});var v=p(s);a=b(v,e),v.forEach(f),c.forEach(f),r=S(o),t=h(o,"P",{});var g=p(t);u=b(g,i),g.forEach(f)},m(o,c){d(o,l,c),m(l,s),m(s,a),d(o,r,c),d(o,t,c),m(t,u)},p(o,c){c&1&&e!==(e=o[1].title+"")&&y(a,e),c&1&&i!==(i=o[1].body+"")&&y(u,i)},d(o){o&&f(l),o&&f(r),o&&f(t)}}}function C(n){let l,s=n[0],e=[];for(let a=0;a<s.length;a+=1)e[a]=j(k(n,s,a));return{c(){l=_("div");for(let a=0;a<e.length;a+=1)e[a].c()},l(a){l=h(a,"DIV",{});var r=p(l);for(let t=0;t<e.length;t+=1)e[t].l(r);r.forEach(f)},m(a,r){d(a,l,r);for(let t=0;t<e.length;t+=1)e[t].m(l,null)},p(a,[r]){if(r&1){s=a[0];let t;for(t=0;t<s.length;t+=1){const i=k(a,s,t);e[t]?e[t].p(i,r):(e[t]=j(i),e[t].c(),e[t].m(l,null))}for(;t<e.length;t+=1)e[t].d(1);e.length=s.length}},i:E,o:E,d(a){a&&f(l),B(e,a)}}}async function H({fetch:n}){const l=await n("https://jsonplaceholder.typicode.com/posts"),s=await l.json();return console.log(s),l.ok?{props:{faqs:s}}:(console.log("error"),{status:l.status,error:new Error("error encountered - could not fetch faqs")})}function D(n,l,s){let{faqs:e}=l;return n.$$set=a=>{"faqs"in a&&s(0,e=a.faqs)},[e]}class N extends w{constructor(l){super();x(this,l,D,C,I,{faqs:0})}}export{N as default,H as load};