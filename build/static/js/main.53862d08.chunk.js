(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(9),c=n.n(a),l=(n(15),n(5)),s=n(2),i=(n(16),n(0));var r=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(i.jsxs)("div",{className:"expense-date",children:[Object(i.jsx)("div",{className:"expense-date__month",children:t}),Object(i.jsx)("div",{className:"expense-date__year",children:a}),Object(i.jsx)("div",{className:"expense-date__day",children:n})]})},u=n(1),o=(n(18),function(e){var t="card "+e.className;return Object(i.jsx)("div",{className:t,children:e.children})});n(19);var j=function(e){return Object(i.jsx)("li",{children:Object(i.jsxs)(o,{className:"expense-item",children:[Object(i.jsx)(r,{date:e.date}),Object(i.jsxs)("div",{className:"expense-item__description",children:[Object(i.jsx)("h2",{children:e.title}),Object(i.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},d=(n(20),n(21),function(e){return Object(i.jsx)("div",{className:"expenses-filter",children:Object(i.jsxs)("div",{className:"expenses-filter__control",children:[Object(i.jsx)("label",{children:"Filter by year"}),Object(i.jsxs)("select",{value:e.defaultYear,onChange:function(t){e.onSelectedYear(t.target.value)},children:[Object(i.jsx)("option",{value:"2022",children:"2022"}),Object(i.jsx)("option",{value:"2021",children:"2021"}),Object(i.jsx)("option",{value:"2020",children:"2020"}),Object(i.jsx)("option",{value:"2019",children:"2019"})]})]})})}),b=(n(22),function(e){return 0===e.items.length?Object(i.jsx)("h2",{className:"expenses-list__fallback",children:"No Expenses Found "}):Object(i.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(i.jsx)(j,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),x=n(10),O=(n(23),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(i.jsxs)("div",{className:"chart-bar",children:[Object(i.jsx)("div",{className:"chart-bar__inner",children:Object(i.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(i.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),v=(n(8),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(i.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(i.jsx)(O,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),m=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(i.jsx)(v,{dataPoints:n})};var h=function(e){var t=Object(u.useState)("2021"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(i.jsx)("div",{children:Object(i.jsxs)(o,{className:"expenses",children:[Object(i.jsx)(d,{defaultYear:a,onSelectedYear:function(e){c(e)}}),Object(i.jsx)(m,{expenses:l}),Object(i.jsx)(b,{items:l})]})})},p=n(7),f=(n(24),n(25),function(e){var t=Object(u.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(u.useState)(""),r=Object(s.a)(l,2),o=r[0],j=r[1],d=Object(u.useState)(""),b=Object(s.a)(d,2),x=b[0],O=b[1];return Object(i.jsxs)("form",{action:"",onSubmit:function(t){t.preventDefault();var n={title:a,amount:+o,date:new Date(x)};e.onSavingExpenseForm(n),c(""),j(""),O("")},children:[Object(i.jsxs)("div",{className:"new-expense__controls",children:[Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Title"}),Object(i.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Amount"}),Object(i.jsx)("input",{type:"number",min:"0",step:"0.01",value:o,onChange:function(e){j(e.target.value)}})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Date"}),Object(i.jsx)("input",{type:"Date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){O(e.target.value)}})]})]}),Object(i.jsxs)("div",{className:"new-expense__actions",children:[Object(i.jsx)("button",{type:"button",onClick:e.onCloseForm,children:"Cancel"}),Object(i.jsx)("button",{type:"submit",children:"Add Expense"})]})]})}),N=function(e){var t=Object(u.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(i.jsxs)("div",{className:"new-expense",children:[!a&&Object(i.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expense"}),a&&Object(i.jsx)(f,{onSavingExpenseForm:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),c(!1)},onCloseForm:function(){c(!1)}})]})},_=function(){var e=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],t=Object(u.useState)(e),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(N,{onAddExpense:function(e){c((function(t){return console.log([e].concat(Object(l.a)(t))),[e].concat(Object(l.a)(t))}))}}),Object(i.jsx)(h,{items:a})]})};c.a.render(Object(i.jsx)(_,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.53862d08.chunk.js.map