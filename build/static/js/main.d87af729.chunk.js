(this.webpackJsonpproject4=this.webpackJsonpproject4||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),o=n(7),r=n.n(o),u=n(3),a=n(4),d=(n(12),n(0)),s=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],o=e[1],r=Object(c.useState)(""),s=Object(a.a)(r,2),j=s[0],b=s[1],l=Object(c.useState)(null),O=Object(a.a)(l,2),f=O[0],p=O[1],x=Object(c.useState)(""),h=Object(a.a)(x,2),m=h[0],v=h[1];return i.a.useEffect((function(){var t=localStorage.getItem("todos"),e=JSON.parse(t);e&&o(e)}),[]),i.a.useEffect((function(){var t=JSON.stringify(n);localStorage.setItem("todos",t)}),[n]),Object(d.jsxs)("div",{id:"todo-list",children:[Object(d.jsx)("h1",{children:"Todo List"}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={id:(new Date).getTime(),text:j,completed:!1};o((function(t){return[].concat(Object(u.a)(t),[e])})),b("")},children:[Object(d.jsx)("input",{type:"text",onChange:function(t){return b(t.target.value)},value:j}),Object(d.jsx)("button",{type:"submit",children:"Add Todo"})]}),n.map((function(t){return Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsxs)("div",{className:"todo-text",children:[Object(d.jsx)("input",{type:"checkbox",id:"completed",checked:t.completed,onChange:function(){return function(t){var e=Object(u.a)(n).map((function(e){return e.id===t&&(e.completed=!e.completed),e}));o(e)}(t.id)}}),t.id===f?Object(d.jsx)("input",{type:"text",onChange:function(t){return v(t.target.value)}}):Object(d.jsx)("div",{children:t.text})]}),Object(d.jsxs)("div",{className:"todo-actions",children:[t.id===f?Object(d.jsx)("button",{onClick:function(){return function(t){var e=Object(u.a)(n).map((function(e){return e.id===t&&(e.text=m),e}));o(e),p(null)}(t.id)},children:"Submit Edits"}):Object(d.jsx)("button",{onClick:function(){return p(t.id)},children:"Edit"}),Object(d.jsx)("button",{onClick:function(){return function(t){var e=Object(u.a)(n).filter((function(e){return e.id!==t}));o(e)}(t.id)},children:"Delete"})]})]},t.id)}))]})};var j=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(s,{})})};r.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d87af729.chunk.js.map