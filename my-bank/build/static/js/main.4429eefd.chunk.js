(this["webpackJsonpmy-bank"]=this["webpackJsonpmy-bank"]||[]).push([[0],{11:function(e,t,n){},17:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(19),a=n.n(s),j=(n(26),n(27),n(17),n(7)),i=n(0);function u(){return Object(i.jsxs)("div",{className:"navbar",children:[Object(i.jsxs)(j.b,{to:"/",children:[" ",Object(i.jsx)("div",{id:"logo",children:"RV BANK"})]}),Object(i.jsx)("div",{id:"nav-content",children:Object(i.jsxs)("ul",{children:[Object(i.jsxs)(j.b,{to:"/",children:[" ",Object(i.jsx)("li",{children:"Home"})]}),Object(i.jsxs)(j.b,{to:"/add",children:[" ",Object(i.jsx)("li",{children:"Transfer Money"})]}),Object(i.jsxs)(j.b,{to:"/user",children:[" ",Object(i.jsx)("li",{children:"All Transactions"})]})]})})]})}var o=n(2),b=n(8),d=n.n(b),h=n(10),l=n(9);function O(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:e.name,children:e.place}),Object(i.jsx)("input",{type:"text",value:e.val,placeholder:e.place,onChange:function(t){e.datr(t.currentTarget.value)},id:e.name,name:e.name,className:"inp"})]})}function x(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(l.a)(s,2),j=a[0],u=a[1],o=Object(c.useState)(""),b=Object(l.a)(o,2),x=b[0],p=b[1];return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{method:"POST",onSubmit:function(){var e=Object(h.a)(d.a.mark((function e(t){var c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/use",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from:n,to:j,am:x})});case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,console.log(s),window.alert("donecdone"),p(""),u(""),r("");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(i.jsx)("h1",{children:"Add a Transaction"}),Object(i.jsx)(O,{name:"tfrom",place:"Transfer from  ",val:n,datr:r}),Object(i.jsx)(O,{name:"tto",place:"Transfer to  ",val:j,datr:u}),Object(i.jsx)(O,{name:"am",place:"amount  ",val:x,datr:p}),Object(i.jsx)("button",{className:"btn",type:"submit",children:"Submit"})]})})}n(11);function p(){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"From"}),Object(i.jsx)("th",{children:"To"}),Object(i.jsx)("th",{children:"Amount"}),Object(i.jsx)("th",{children:"Transaction History"})]})}function m(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.from}),Object(i.jsx)("td",{children:e.to}),Object(i.jsx)("td",{children:e.am}),Object(i.jsx)("td",{children:Object(i.jsx)(j.b,{to:"/user",children:Object(i.jsx)("button",{class:"btn",children:"Transaction History"})})})]})}function f(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];function s(){return(s=Object(h.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/use/data");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"topic",children:"All Transaction History"}),Object(i.jsxs)("table",{children:[Object(i.jsx)(p,{}),n.map((function(e){return Object(i.jsx)(m,{from:e.from,to:e.to,am:e.am},e._id)}))]})]})}function v(){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Sno."}),Object(i.jsx)("th",{children:"User"}),Object(i.jsx)("th",{children:"Transaction History"})]})}function y(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.sno}),Object(i.jsx)("td",{children:e.user}),Object(i.jsx)("td",{children:Object(i.jsx)(j.b,{to:"/user/".concat(e.user),children:Object(i.jsx)("button",{class:"btn",children:"Transaction History"})})})]})}function k(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];function s(){return(s=Object(h.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/use/data/user");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"topic",children:"Our Current Users"}),Object(i.jsxs)("table",{children:[Object(i.jsx)(v,{}),n.map((function(e){return Object(i.jsx)(y,{sno:e.sno,user:e.user},e._id)}))]})]})}function T(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)([]),j=Object(l.a)(a,2),u=j[0],o=j[1];function b(){return b=Object(h.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.name);case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,s(c[0]),o(c[1]);case 8:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}return Object(c.useEffect)((function(){!function(e){b.apply(this,arguments)}(e)}),[e]),Object(i.jsxs)("div",{children:[Object(i.jsxs)("h1",{className:"topic",children:[e.user.toUpperCase(),"'s Transaction History"]}),Object(i.jsxs)("table",{children:[Object(i.jsx)(p,{}),r.map((function(e){return Object(i.jsx)(m,{from:e.from,to:e.to,am:e.am},e._id)})),u.map((function(e){return Object(i.jsx)(m,{from:e.from,to:e.to,am:e.am},e._id)}))]})]})}var S=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(j.a,{children:[Object(i.jsx)(u,{}),Object(i.jsx)("div",{children:Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{path:"/user/aarav",children:Object(i.jsx)(T,{name:"/api/use/data/aarav",user:"aarav"})}),Object(i.jsx)(o.a,{path:"/user/dev",children:Object(i.jsx)(T,{name:"/api/use/data/dev",user:"dev"})}),Object(i.jsx)(o.a,{path:"/user/hritik",children:Object(i.jsx)(T,{name:"/api/use/data/hritik",user:"hritik"})}),Object(i.jsx)(o.a,{path:"/user/komal",children:Object(i.jsx)(T,{name:"/api/use/data/komal",user:"komal"})}),Object(i.jsx)(o.a,{path:"/user/meena",children:Object(i.jsx)(T,{name:"/api/use/data/meena",user:"meena"})}),Object(i.jsx)(o.a,{path:"/user/nidhi",children:Object(i.jsx)(T,{name:"/api/use/data/nidhi",user:"nidhi"})}),Object(i.jsx)(o.a,{path:"/user/rupin",children:Object(i.jsx)(T,{name:"/api/use/data/rupin",user:"rupin"})}),Object(i.jsx)(o.a,{path:"/user/utkarsh",children:Object(i.jsx)(T,{name:"/api/use/data/utkarsh",user:"utkarsh"})}),Object(i.jsx)(o.a,{path:"/user/vikram",children:Object(i.jsx)(T,{name:"/api/use/data/vikram",user:"vikram"})}),Object(i.jsx)(o.a,{path:"/user/zohra",children:Object(i.jsx)(T,{name:"/api/use/data/zohra",user:"zohra"})}),Object(i.jsx)(o.a,{path:"/user",children:Object(i.jsx)(f,{})}),Object(i.jsx)(o.a,{path:"/add",children:Object(i.jsx)(x,{})}),Object(i.jsx)(o.a,{path:"/",children:Object(i.jsx)(k,{})})]})})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(S,{})}),document.getElementById("root")),g()}},[[35,1,2]]]);
//# sourceMappingURL=main.4429eefd.chunk.js.map