import{S as F,i as S,s as z,e as _,t as v,k as j,c as p,a as d,h as q,d as u,m as x,g as h,H as m,j as g,I as y,N as A}from"../chunks/vendor-9d2670dc.js";function k(i,l,o){const a=i.slice();return a[1]=l[o],a}function w(i){let l,o,a=i[1].title+"",c,f,s,t=i[1].body+"",r;return{c(){l=_("p"),o=_("b"),c=v(a),f=j(),s=_("p"),r=v(t)},l(e){l=p(e,"P",{});var n=d(l);o=p(n,"B",{});var b=d(o);c=q(b,a),b.forEach(u),n.forEach(u),f=x(e),s=p(e,"P",{});var E=d(s);r=q(E,t),E.forEach(u)},m(e,n){h(e,l,n),m(l,o),m(o,c),h(e,f,n),h(e,s,n),m(s,r)},p(e,n){n&1&&a!==(a=e[1].title+"")&&g(c,a),n&1&&t!==(t=e[1].body+"")&&g(r,t)},d(e){e&&u(l),e&&u(f),e&&u(s)}}}function C(i){let l,o,a,c,f=i[0],s=[];for(let t=0;t<f.length;t+=1)s[t]=w(k(i,f,t));return{c(){l=_("div");for(let t=0;t<s.length;t+=1)s[t].c();o=j(),a=_("h1"),c=v("Got here - FAQ")},l(t){l=p(t,"DIV",{});var r=d(l);for(let n=0;n<s.length;n+=1)s[n].l(r);r.forEach(u),o=x(t),a=p(t,"H1",{});var e=d(a);c=q(e,"Got here - FAQ"),e.forEach(u)},m(t,r){h(t,l,r);for(let e=0;e<s.length;e+=1)s[e].m(l,null);h(t,o,r),h(t,a,r),m(a,c)},p(t,[r]){if(r&1){f=t[0];let e;for(e=0;e<f.length;e+=1){const n=k(t,f,e);s[e]?s[e].p(n,r):(s[e]=w(n),s[e].c(),s[e].m(l,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=f.length}},i:y,o:y,d(t){t&&u(l),A(s,t),t&&u(o),t&&u(a)}}}async function I({fetch:i}){const l=await i("https://api-eu-west-2.graphcms.com/v2/cl072jsru0z0p01z3e6nye6i6/master"),o=await l.json();return console.log(o),l.ok?{props:{faqs:o}}:(console.log("error"),{status:l.status,error:new Error("error encountered - could not fetch faqs")})}function G(i,l,o){let{faqs:a}=l;return i.$$set=c=>{"faqs"in c&&o(0,a=c.faqs)},[a]}class P extends F{constructor(l){super();S(this,l,G,C,z,{faqs:0})}}export{P as default,I as load};
