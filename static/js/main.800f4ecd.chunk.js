(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{21:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var a=c(12),s=c.n(a),n=c(4),r=c(0),i=c(2),o=c(1),d=function(){return Object(o.jsx)("div",{className:"navbar",children:Object(o.jsxs)("nav",{className:"navbar-brand",children:[Object(o.jsx)(n.c,{to:"/",className:function(e){return e.isActive?"navbar-item is-tab is-active":"navbar-item is-tab"},children:"Home"}),Object(o.jsx)(n.c,{to:"/people",className:function(e){return e.isActive?"navbar-item is-tab is-active":"navbar-item is-tab"},children:"People"})]})})},l=c.p+"static/media/404.c78d6dd6.png",j=(c(21),function(){return Object(o.jsx)("div",{className:"errorPage",children:Object(o.jsxs)("div",{className:"errorPage__content",children:[Object(o.jsx)("img",{className:"errorPage__image",src:l,alt:"404 Page not found"}),Object(o.jsx)("p",{children:"404 Page Not Found"})]})})}),b=function(){return Object(o.jsx)("h1",{children:"Home Page"})},h=c(13),u=c(5),m=c(8),x=c.n(m),O=c(14),p=c.n(O),g=c(15),f=c.n(g),v="../../images/sort_both.png",N="../../images/sort_asc.png",k="../../images/sort_desc.png",y=function(e){var t=e.people,c=e.onChange,a=e.selectedId,s=e.sortOrder,r=Object(i.e)(),d=r.search,l=r.pathname,j=function(e){var c=t.find((function(t){return t.name===e}));return null===c||void 0===c?void 0:c.slug};return Object(o.jsxs)("table",{className:"table is-striped is-hoverable is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsxs)("th",{id:"name",className:"name"===a?"has-background-grey-light":"",onClick:c,children:[Object(o.jsx)("img",{src:"asc"===s&&"name"===a?N:"desc"===s&&"name"===a?k:v,alt:"sort"}),"Name"]}),Object(o.jsxs)("th",{id:"sex",className:"sex"===a?"has-background-grey-light":"",onClick:c,children:[Object(o.jsx)("img",{src:"asc"===s&&"sex"===a?N:"desc"===s&&"sex"===a?k:v,alt:"sort"}),"Sex"]}),Object(o.jsxs)("th",{id:"born",className:"born"===a?"has-background-grey-light":"",onClick:c,children:[Object(o.jsx)("img",{src:"asc"===s&&"born"===a?N:"desc"===s&&"born"===a?k:v,alt:"sort"}),"Born"]}),Object(o.jsxs)("th",{id:"died",className:"died"===a?"has-background-grey-light":"",onClick:c,children:[Object(o.jsx)("img",{src:"asc"===s&&"died"===a?N:"desc"===s&&"died"===a?k:v,alt:"sort"}),"Died"]}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{className:f()({"is-selected":l.includes(e.slug)}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(n.b,{to:{pathname:"".concat(e.slug),search:d},children:e.name})}),Object(o.jsx)("td",{children:e.sex}),Object(o.jsx)("td",{children:e.born}),Object(o.jsx)("td",{children:e.died}),Object(o.jsx)("td",{children:j(e.motherName)?Object(o.jsx)(n.b,{className:"has-text-danger",to:{pathname:"".concat(j(e.motherName)),search:d},children:e.motherName}):Object(o.jsx)("p",{children:e.motherName||"Unknown"})}),Object(o.jsx)("td",{children:j(e.fatherName)?Object(o.jsx)(n.b,{className:"has-text-link",to:{pathname:"".concat(j(e.fatherName)),search:d},children:e.fatherName}):Object(o.jsx)("p",{children:e.fatherName||"Unknown"})})]},e.name)}))})]})},C=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)(""),n=Object(u.a)(s,2),d=n[0],l=n[1],j=Object(i.f)(),b=Object(i.e)(),m=new URLSearchParams(b.search),O=m.get("query")||"",g=Object(r.useState)(O),f=Object(u.a)(g,2),v=f[0],N=f[1],k=m.get("sortBy")||"",C=m.get("sortOrder")||"",w=Object(r.useCallback)(p()((function(e){e?m.set("query",e):m.delete("query"),j({search:m.toString()})}),500),[]),P=c;if(O){var _=O.toLowerCase();P=P.filter((function(e){var t,c;return e.name.toLowerCase().includes(_)||(null===(t=e.motherName)||void 0===t?void 0:t.toLowerCase().includes(_))||(null===(c=e.fatherName)||void 0===c?void 0:c.toLowerCase().includes(_))}))}return k&&P.sort((function(e,t){switch(k){case"name":return"asc"===C?e.name.localeCompare(t.name):t.name.localeCompare(e.name);case"sex":return"asc"===C?e.sex.localeCompare(t.sex):t.sex.localeCompare(e.sex);case"born":return"asc"===C?e.born-t.born:t.born-e.born;case"died":return"asc"===C?e.died-t.died:t.died-e.died;default:return 0}})),Object(r.useEffect)((function(){var e=function(){var e=Object(h.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}));case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{children:"People Page"}),Object(o.jsx)("input",{value:v,className:"input",type:"text",placeholder:"Type text",onChange:function(e){N(e.target.value),w(e.target.value)}}),Object(o.jsx)(y,{people:P,onChange:function(e){var t=e.target.id;l(t),t?m.set("sortBy",t):m.delete("sortBy"),C&&C&&"asc"===C?m.set("sortOrder","desc"):m.set("sortOrder","asc"),j({search:m.toString()})},selectedId:d,sortOrder:C})]})},w=(c(34),function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{}),Object(o.jsx)("div",{children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"/",element:Object(o.jsx)(b,{})}),Object(o.jsx)(i.a,{path:"/home",element:Object(o.jsx)(b,{})}),Object(o.jsx)(i.a,{path:"/people",element:Object(o.jsx)(C,{}),children:Object(o.jsx)(i.a,{path:":slug",element:Object(o.jsx)(C,{})})}),Object(o.jsx)(i.a,{path:"*",element:Object(o.jsx)(j,{})})]})})]})});s.a.render(Object(o.jsx)(n.a,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.800f4ecd.chunk.js.map