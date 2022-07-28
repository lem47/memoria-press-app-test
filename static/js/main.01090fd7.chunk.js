(this["webpackJsonpreact-starter-pack"]=this["webpackJsonpreact-starter-pack"]||[]).push([[0],{52:function(e,s,t){},55:function(e,s,t){},56:function(e,s,t){},57:function(e,s,t){},63:function(e,s,t){},64:function(e,s,t){},65:function(e,s,t){},66:function(e,s,t){},67:function(e,s,t){},68:function(e,s,t){},69:function(e,s,t){},70:function(e,s,t){},71:function(e,s,t){},72:function(e,s,t){},73:function(e,s,t){},77:function(e,s,t){},78:function(e,s,t){"use strict";t.r(s);var c=t(0),l=t(1),a=t(10),n=t.n(a),r=t(9),i=(t(52),t(2)),d=t(16),j=t.n(d),o=t(22),h=t(19),b=Object(h.b)("data/fetchData",function(){var e=Object(o.a)(j.a.mark((function e(s){var t,c,l,a,n,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.page,c=s.size,l=s.search,a=s.sortBy,n=s.sortDir,e.next=3,fetch("https://test-task-j.herokuapp.com/data?page=".concat(t,"&size=").concat(c,"&search=").concat(l,"&sortBy=").concat(a,"&sortDir=").concat(n));case 3:return r=e.sent,e.next=6,r.json();case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}()),x=Object(h.c)({name:"data",initialState:{data:null,page:1,size:10,search:"",sortBy:"",sortDir:-1},reducers:{changePage:function(e,s){var t=s.payload;e.page=t},changeSize:function(e,s){var t=s.payload;e.size=t},changeSearch:function(e,s){var t=s.payload;e.search=t},changeSortBy:function(e,s){var t=s.payload;e.sortBy=t},changeSortDir:function(e,s){var t=s.payload;e.sortDir=t}},extraReducers:Object(i.a)({},b.fulfilled.type,(function(e,s){e.data=s.payload}))}),O=x.actions,u=O.changePage,p=O.changeSize,_=O.changeSearch,w=O.changeSortBy,m=O.changeSortDir,v=x.reducer,g=(t(55),t(56),function(){return Object(c.jsxs)("div",{className:"Header",children:[Object(c.jsxs)("div",{className:"Header__school",children:[Object(c.jsx)("div",{className:"Header__link",children:"School 1"}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M0 0L5 5L10 0H0Z",fill:"#777777"})})]}),Object(c.jsxs)("div",{className:"Header__links",children:[Object(c.jsx)("a",{href:"/analytics",className:"Header__link",children:"Analytics"}),Object(c.jsx)("a",{href:"/gradebooks",className:"Header__link",children:"Gradebooks"}),Object(c.jsx)("a",{href:"/tests",className:"Header__link",children:"Tests"}),Object(c.jsx)("a",{href:"/students",className:"Header__link Header__link-active",children:"Students"}),Object(c.jsx)("a",{href:"/teachers",className:"Header__link",children:"Teachers"}),Object(c.jsx)("a",{href:"/archive",className:"Header__link",children:"Archive"})]}),Object(c.jsxs)("div",{className:"Header__user",children:[Object(c.jsx)("img",{src:"https://freesvg.org/img/abstract-user-flat-1.png",alt:"user avatar",className:"Header__userAvatar"}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M0 0L5 5L10 0H0Z",fill:"#777777"})})]})]})}),f=(t(57),function(){return Object(c.jsxs)("div",{className:"FilterBar",children:[Object(c.jsxs)("div",{className:"FilterBar__params",children:[Object(c.jsxs)("div",{className:"FilterBar__param",children:[Object(c.jsx)("p",{children:"Show all"}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M0 0L5 5L10 0H0Z",fill:"#C0C0C0"})})]}),Object(c.jsxs)("div",{className:"FilterBar__param",children:[Object(c.jsx)("p",{children:"All grades"}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M0 0L5 5L10 0H0Z",fill:"#C0C0C0"})})]}),Object(c.jsxs)("div",{className:"FilterBar__param",children:[Object(c.jsx)("p",{children:"All classes"}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M0 0L5 5L10 0H0Z",fill:"#C0C0C0"})})]}),Object(c.jsxs)("div",{className:"FilterBar__param",children:[Object(c.jsx)("p",{children:"Av.Score"}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M0 0L5 5L10 0H0Z",fill:"#C0C0C0"})})]}),Object(c.jsxs)("div",{className:"FilterBar__param",children:[Object(c.jsx)("p",{children:"Av.Speed"}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M0 0L5 5L10 0H0Z",fill:"#C0C0C0"})})]}),Object(c.jsxs)("div",{className:"FilterBar__param",children:[Object(c.jsx)("p",{children:"All Classes"}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M0 0L5 5L10 0H0Z",fill:"#C0C0C0"})})]})]}),Object(c.jsxs)("div",{className:"FilterBar__clear",children:[Object(c.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M10.1666 1.27337L9.22659 0.333374L5.49992 4.06004L1.77325 0.333374L0.833252 1.27337L4.55992 5.00004L0.833252 8.72671L1.77325 9.66671L5.49992 5.94004L9.22659 9.66671L10.1666 8.72671L6.43992 5.00004L10.1666 1.27337Z",fill:"#C0C0C0"})}),Object(c.jsx)("p",{children:"Clear all"})]})]})}),L=t(4),N=t(35),C=(t(63),function(){var e=Object(l.useState)([]),s=Object(L.a)(e,2),t=s[0],a=s[1],n=function(){var e=Object(o.a)(j.a.mark((function e(){var s,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://test-task-j.herokuapp.com/data?page=1&size=10");case 2:return s=e.sent,e.next=5,s.json();case 5:t=e.sent,a(t.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){n()}),[]),Object(c.jsx)(c.Fragment,{children:(null===t||void 0===t?void 0:t.length)&&Object(c.jsxs)(N.CSVLink,{className:"ExportCSV",headers:[{label:"Name",key:"name"},{label:"ID",key:"id"},{label:"Class",key:"class"},{label:"Score",key:"score"},{label:"Speed",key:"speed"},{label:"Parents",key:"parents"}],data:t,filename:"students.csv",target:"_blank",children:[Object(c.jsx)("svg",{width:"10",height:"12",viewBox:"0 0 10 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M5.00016 0.5L0.333496 5.16667H3.00016V9.16667H7.00016V5.16667H9.66683L5.00016 0.5ZM5.66683 3.83333V7.83333H4.3335V3.83333H3.5535L5.00016 2.38667L6.44683 3.83333H5.66683ZM0.333496 10.5H9.66683V11.8333H0.333496V10.5Z",fill:"#C0C0C0"})}),Object(c.jsx)("p",{children:"Export CSV"})]})})}),R=(t(64),function(){var e=Object(l.useState)(""),s=Object(L.a)(e,2),t=s[0],a=s[1],n=Object(r.b)();return Object(c.jsxs)("div",{className:"SearchBar",children:[Object(c.jsx)("h1",{className:"SearchBar__title",children:"Students"}),Object(c.jsxs)("form",{className:"SearchBar__form",onSubmit:function(e){e.preventDefault(),n(_(t))},children:[Object(c.jsx)("input",{className:"SearchBar__input",placeholder:"Enter Student Name, Parent or ID here",value:t,onChange:function(e){a(e.target.value)}}),0===t.length?Object(c.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"SearchBar__search",onClick:function(){n(_(t))},children:Object(c.jsx)("path",{d:"M8.33333 7.33333H7.80667L7.62 7.15333C8.27333 6.39333 8.66667 5.40667 8.66667 4.33333C8.66667 1.94 6.72667 0 4.33333 0C1.94 0 0 1.94 0 4.33333C0 6.72667 1.94 8.66667 4.33333 8.66667C5.40667 8.66667 6.39333 8.27333 7.15333 7.62L7.33333 7.80667V8.33333L10.6667 11.66L11.66 10.6667L8.33333 7.33333ZM4.33333 7.33333C2.67333 7.33333 1.33333 5.99333 1.33333 4.33333C1.33333 2.67333 2.67333 1.33333 4.33333 1.33333C5.99333 1.33333 7.33333 2.67333 7.33333 4.33333C7.33333 5.99333 5.99333 7.33333 4.33333 7.33333Z",fill:"#C0C0C0"})}):Object(c.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"SearchBar__search",onClick:function(){n(_("")),a("")},children:Object(c.jsx)("path",{d:"M10.1666 1.27337L9.22659 0.333374L5.49992 4.06004L1.77325 0.333374L0.833252 1.27337L4.55992 5.00004L0.833252 8.72671L1.77325 9.66671L5.49992 5.94004L9.22659 9.66671L10.1666 8.72671L6.43992 5.00004L10.1666 1.27337Z",fill:"#C0C0C0"})})]}),Object(c.jsx)(C,{})]})}),B=(t(65),t(8)),y=(t(66),t(115)),H=(t(67),function(e){var s=e.type,t=e.name,l=e.id,a=e.handleClick,n=e.isChecked;return Object(c.jsx)("input",{type:s,name:t,id:l,onChange:a,checked:n,style:{cursor:"pointer"}})}),P=H;H.defaultProps={type:"checkbox",name:"",id:100,handleClick:function(){},isChecked:!1};t(68),t(69),t(70);var k=function(e){var s=e.test,t=e.index,a=Object(l.useState)(!1),n=Object(L.a)(a,2),r=n[0],i=n[1];return Object(c.jsxs)("tr",{onClick:function(){return i(!r)},className:r?"ResultsRow active":"ResultsRow",children:[Object(c.jsx)("td",{className:"ResultsRow",children:"".concat(t,".")}),Object(c.jsx)("td",{className:"ResultsRow",children:s.label}),Object(c.jsx)("td",{className:"ResultsRow",children:s.score?s.score:"NIL"}),Object(c.jsx)("td",{className:"ResultsRow",children:s.speed?s.speed:"NIL"}),Object(c.jsx)("td",{className:"ResultsRow",children:s.total}),Object(c.jsx)("td",{className:"ResultsRow",children:s.expSpeed}),Object(c.jsx)("td",{className:"ResultsRow",children:s.concept}),Object(c.jsx)("td",{className:"ResultsRow",children:s.date}),Object(c.jsx)("td",{className:"ResultsRow",children:s.absent?Object(c.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:50},children:Object(c.jsx)("path",{d:"M13.8333 0.5H2.16667C1.25 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.25 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V2.16667C15.5 1.25 14.75 0.5 13.8333 0.5ZM13.8333 13.8333H2.16667V2.16667H13.8333V13.8333ZM12.9917 5.5L11.8167 4.31667L6.325 9.80833L4.175 7.66667L2.99167 8.84167L6.325 12.1667L12.9917 5.5Z",fill:"#323232"})}):Object(c.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:50},children:Object(c.jsx)("path",{d:"M13.8333 2.16667V13.8333H2.16667V2.16667H13.8333ZM13.8333 0.5H2.16667C1.25 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.25 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V2.16667C15.5 1.25 14.75 0.5 13.8333 0.5Z",fill:"#777777"})})})]})};k.defaultProps={test:{},index:0};var S=function(e){var s=e.student;return Object(c.jsxs)("table",{className:"ResultsTable",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"ResultsTable__header",children:"#"}),Object(c.jsx)("th",{className:"ResultsTable__header",children:"Test Label"}),Object(c.jsx)("th",{className:"ResultsTable__header",children:"Score"}),Object(c.jsx)("th",{className:"ResultsTable__header",children:"Speed"}),Object(c.jsx)("th",{className:"ResultsTable__header",children:"Total Q-ns"}),Object(c.jsx)("th",{className:"ResultsTable__header",children:"Exp. Speed"}),Object(c.jsx)("th",{className:"ResultsTable__header",children:"Concept"}),Object(c.jsx)("th",{className:"ResultsTable__header",children:"Date"}),Object(c.jsx)("th",{className:"ResultsTable__header",style:{width:50},children:"Absent"})]})}),Object(c.jsx)("tbody",{className:"ResultsTable__content",children:s.tests.map((function(e,s){return Object(c.jsx)(k,{test:e,index:s+1},Object(y.a)())}))})]})};S.defaultProps={student:{}};t(71);var V=function(){return Object(c.jsxs)("div",{className:"ResultsSelectors__selectors",children:[Object(c.jsxs)("div",{className:"ResultsSelectors__selector",children:[Object(c.jsx)("p",{className:"ResultsSelectors__selectorTitle",children:"All concepts"}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"ResultsSelectors__arrow",children:Object(c.jsx)("path",{d:"M0.833252 0.833374L4.99992 5.00004L9.16658 0.833374H0.833252Z",fill:"#5B5B5B"})})]}),Object(c.jsxs)("div",{className:"ResultsSelectors__selector",children:[Object(c.jsx)("p",{className:"ResultsSelectors__selectorTitle",children:"All score"}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"ResultsSelectors__arrow",children:Object(c.jsx)("path",{d:"M0.833252 0.833374L4.99992 5.00004L9.16658 0.833374H0.833252Z",fill:"#5B5B5B"})})]}),Object(c.jsxs)("div",{className:"ResultsSelectors__selector",children:[Object(c.jsx)("p",{className:"ResultsSelectors__selectorTitle",children:"All speed"}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"ResultsSelectors__arrow",children:Object(c.jsx)("path",{d:"M0.833252 0.833374L4.99992 5.00004L9.16658 0.833374H0.833252Z",fill:"#5B5B5B"})})]}),Object(c.jsxs)("div",{className:"ResultsSelectors__selectorDate",children:[Object(c.jsx)("p",{className:"ResultsSelectors__selectorDateTitle",children:"Select Period"}),Object(c.jsx)("svg",{width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M4 6.16663H2.66667V7.49996H4V6.16663ZM6.66667 6.16663H5.33333V7.49996H6.66667V6.16663ZM9.33333 6.16663H8V7.49996H9.33333V6.16663ZM10.6667 1.49996H10V0.166626H8.66667V1.49996H3.33333V0.166626H2V1.49996H1.33333C0.979711 1.49996 0.640573 1.64043 0.390524 1.89048C0.140476 2.14053 0 2.47967 0 2.83329V12.1666C0 12.5202 0.140476 12.8594 0.390524 13.1094C0.640573 13.3595 0.979711 13.5 1.33333 13.5H10.6667C11.0203 13.5 11.3594 13.3595 11.6095 13.1094C11.8595 12.8594 12 12.5202 12 12.1666V2.83329C12 2.47967 11.8595 2.14053 11.6095 1.89048C11.3594 1.64043 11.0203 1.49996 10.6667 1.49996ZM10.6667 12.1666H1.33333V4.83329H10.6667V12.1666Z",fill:"#C0C0C0"})})]}),Object(c.jsx)("svg",{width:"16",height:"11",viewBox:"0 0 16 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"ResultsSelectors__refresh",children:Object(c.jsx)("path",{d:"M12.6667 2.83329L10.0001 5.49996H12.0001C12.0001 7.70663 10.2067 9.49996 8.00008 9.49996C7.32675 9.49996 6.68675 9.33329 6.13341 9.03329L5.16008 10.0066C5.98008 10.5266 6.95341 10.8333 8.00008 10.8333C10.9467 10.8333 13.3334 8.44663 13.3334 5.49996H15.3334L12.6667 2.83329ZM4.00008 5.49996C4.00008 3.29329 5.79341 1.49996 8.00008 1.49996C8.67341 1.49996 9.31341 1.66663 9.86675 1.96663L10.8401 0.993292C10.0201 0.473292 9.04675 0.166626 8.00008 0.166626C5.05341 0.166626 2.66675 2.55329 2.66675 5.49996H0.666748L3.33341 8.16663L6.00008 5.49996H4.00008Z",fill:"#C0C0C0"})})]})},M=(t(72),function(){return Object(c.jsxs)("div",{className:"ResultsLegends__legends",children:[Object(c.jsxs)("div",{className:"ResultsLegends__legend",children:[Object(c.jsx)("p",{children:"Score"}),Object(c.jsxs)("div",{className:"ResultsLegends__legendValue",children:[Object(c.jsx)("div",{className:"ResultsLegends__legendPoint",style:{backgroundColor:"#4285F4"}}),Object(c.jsx)("p",{style:{color:"#4285F4"},children:"90%+ accuracy"})]}),Object(c.jsxs)("div",{className:"ResultsLegends__legendValue",children:[Object(c.jsx)("div",{className:"ResultsLegends__legendPoint",style:{backgroundColor:"#0F9D58"}}),Object(c.jsx)("p",{style:{color:"#0F9D58"},children:"80 - 89% accuracy"})]}),Object(c.jsxs)("div",{className:"ResultsLegends__legendValue",children:[Object(c.jsx)("div",{className:"ResultsLegends__legendPoint",style:{backgroundColor:"#E2B534"}}),Object(c.jsx)("p",{style:{color:"#E2B534"},children:"50 - 79% accuracy"})]}),Object(c.jsxs)("div",{className:"ResultsLegends__legendValue",children:[Object(c.jsx)("div",{className:"ResultsLegends__legendPoint",style:{backgroundColor:"#DB4437"}}),Object(c.jsx)("p",{style:{color:"#DB4437"},children:"Below 50% accuracy"})]})]}),Object(c.jsxs)("div",{className:"ResultsLegends__legend",children:[Object(c.jsx)("p",{children:"Speed"}),Object(c.jsxs)("div",{className:"ResultsLegends__legendValue",children:[Object(c.jsx)("div",{className:"ResultsLegends__legendPoint",style:{backgroundColor:"#4285F4"}}),Object(c.jsx)("p",{style:{color:"#4285F4"},children:"Above expected"})]}),Object(c.jsxs)("div",{className:"ResultsLegends__legendValue",children:[Object(c.jsx)("div",{className:"ResultsLegends__legendPoint",style:{backgroundColor:"#0F9D58"}}),Object(c.jsx)("p",{style:{color:"#0F9D58"},children:"As expected"})]}),Object(c.jsxs)("div",{className:"ResultsLegends__legendValue",children:[Object(c.jsx)("div",{className:"ResultsLegends__legendPoint",style:{backgroundColor:"#DB4437"}}),Object(c.jsx)("p",{style:{color:"#DB4437"},children:"Below expected"})]})]})]})}),Z=function(e){var s=e.student;return Object(c.jsx)("td",{className:"PersonResult",colSpan:6,children:Object(c.jsxs)("div",{className:"PersonResult__container",children:[Object(c.jsxs)("div",{className:"PersonResult__title",children:[Object(c.jsx)("p",{className:"PersonResult__titleKey",children:"Student:"}),Object(c.jsx)("p",{className:"PersonResult__titleValue",children:s.name}),Object(c.jsx)("p",{className:"PersonResult__titleKey",children:"ID:"}),Object(c.jsx)("p",{className:"PersonResult__titleValue",children:s.id})]}),Object(c.jsx)(V,{}),Object(c.jsx)("div",{className:"PersonResult__devider"}),Object(c.jsx)(M,{}),Object(c.jsx)(S,{student:s}),Object(c.jsx)("div",{className:"PersonResult__devider",style:{height:2}}),Object(c.jsxs)("div",{className:"PersonResult__average",children:[Object(c.jsx)("p",{children:"Average"}),Object(c.jsxs)("div",{className:"PersonResult__averageScore",children:[s.score.slice(0,-1)>=90&&Object(c.jsx)("p",{style:{color:"#4285F4"},children:s.score}),s.score.slice(0,-1)>=80&&s.score.slice(0,-1)<=89&&Object(c.jsx)("p",{style:{color:"#0F9D58"},children:s.score}),s.score.slice(0,-1)>=50&&s.score.slice(0,-1)<=79&&Object(c.jsx)("p",{style:{color:"#E2B534"},children:s.score}),s.score.slice(0,-1)<=49&&Object(c.jsx)("p",{style:{color:"#DB4437"},children:s.score})]}),Object(c.jsxs)("div",{className:"PersonResult__averageSpeed",children:["Above Expected"===s.speed&&Object(c.jsx)("p",{style:{color:"#4285F4"},children:"Above Expected"}),"As Expected"===s.speed&&Object(c.jsx)("p",{style:{color:"#0F9D58"},children:"As Expected"}),"Below Expected"===s.speed&&Object(c.jsx)("p",{style:{color:"#DB4437"},children:"Below Expected"})]})]})]})})};Z.defaultProps={student:{}};var T=function(e){var s=e.person,t=e.handleClick,a=e.isCheck,n=Object(l.useState)(!1),r=Object(L.a)(n,2),i=r[0],d=r[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("tr",{className:"PersonRow",onClick:function(){return d(!i)},children:[Object(c.jsxs)("td",{className:"PersonRow__check",children:[Object(c.jsx)(P,{type:"checkbox",name:s.name,id:s.id,handleClick:t,isChecked:a.includes(s.id),className:"PersonRow__checkbox"},s.id+100),s.name]}),Object(c.jsx)("td",{className:"PersonRow__value",children:s.id}),Object(c.jsx)("td",{className:"PersonRow__value",children:s.class}),Object(c.jsxs)("td",{className:"PersonRow__value",children:[s.score.slice(0,-1)>=90&&Object(c.jsx)("p",{style:{color:"#4285F4"},children:s.score}),s.score.slice(0,-1)>=80&&s.score.slice(0,-1)<=89&&Object(c.jsx)("p",{style:{color:"#0F9D58"},children:s.score}),s.score.slice(0,-1)>=50&&s.score.slice(0,-1)<=79&&Object(c.jsx)("p",{style:{color:"#E2B534"},children:s.score}),s.score.slice(0,-1)<=49&&Object(c.jsx)("p",{style:{color:"#DB4437"},children:s.score})]}),Object(c.jsxs)("td",{className:"PersonRow__value",children:["Above Expected"===s.speed&&Object(c.jsx)("p",{style:{color:"#4285F4"},children:"Above Expected"}),"As Expected"===s.speed&&Object(c.jsx)("p",{style:{color:"#0F9D58"},children:"As Expected"}),"Below Expected"===s.speed&&Object(c.jsx)("p",{style:{color:"#DB4437"},children:"Below Expected"})]}),Object(c.jsx)("td",{className:"PersonRow__value",children:Object(c.jsxs)("div",{className:"PersonRow__parents",children:[Object(c.jsxs)("div",{className:"PersonRow__parents",children:[Object(c.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"PersonRow__info",children:Object(c.jsx)("path",{d:"M6.33325 10.3334H7.66659V6.33337H6.33325V10.3334ZM6.99992 0.333374C3.31992 0.333374 0.333252 3.32004 0.333252 7.00004C0.333252 10.68 3.31992 13.6667 6.99992 13.6667C10.6799 13.6667 13.6666 10.68 13.6666 7.00004C13.6666 3.32004 10.6799 0.333374 6.99992 0.333374ZM6.99992 12.3334C4.05992 12.3334 1.66659 9.94004 1.66659 7.00004C1.66659 4.06004 4.05992 1.66671 6.99992 1.66671C9.93992 1.66671 12.3333 4.06004 12.3333 7.00004C12.3333 9.94004 9.93992 12.3334 6.99992 12.3334ZM6.33325 5.00004H7.66659V3.66671H6.33325V5.00004Z",fill:"#C0C0C0"})}),s.parents[0],", ",s.parents[1]]}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"PersonRow__arrow",children:i?Object(c.jsx)("path",{d:"M0 5L5 0L10 5H0Z",fill:"#5B5B5B"}):Object(c.jsx)("path",{d:"M0 0L5 5L10 0H0Z",fill:"#C0C0C0"})})]})})]}),Object(c.jsx)("tr",{children:i&&Object(c.jsx)(Z,{student:s})})]})};T.defaultProps={person:{},handleClick:function(){},isCheck:[]};var D=function(){var e=Object(l.useState)(-1),s=Object(L.a)(e,2),t=s[0],a=s[1],n=Object(l.useState)(!1),i=Object(L.a)(n,2),d=i[0],j=i[1],o=Object(l.useState)([]),h=Object(L.a)(o,2),x=h[0],O=h[1],u=Object(l.useState)(!1),p=Object(L.a)(u,2),_=p[0],v=p[1],g=Object(r.b)(),f=Object(r.c)((function(e){return e.data})),N={page:1,size:10,search:"",sortBy:"",sortDir:-1},C=function(e){var s=e.target,t=s.id,c=s.checked;O([].concat(Object(B.a)(x),[+t])),c||O(x.filter((function(e){return e!==+t})))};return Object(c.jsxs)("table",{className:"PeopleTable",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"PeopleTable__headers",style:{width:420},children:Object(c.jsxs)("div",{className:"PeopleTable__header",children:[Object(c.jsxs)("div",{className:"PeopleTable__check",children:[Object(c.jsx)(P,{type:"checkbox",name:"selectAll",id:0,handleClick:function(e){j(!d),O(f.data.map((function(e){return e.id}))),d&&O([])},isChecked:d}),Object(c.jsx)("p",{className:"PeopleTable__name",children:"Name"})]}),Object(c.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"PeopleTable__az",onClick:function(){g(w("name")),a(-1*t),g(m(t)),v(!0)},children:Object(c.jsx)("path",{d:"M8.95998 2.10666L7.38665 0.533325L5.81332 2.10666H8.95998ZM5.92665 10.82H7.15332L4.15998 3.17999H3.06665L0.0666504 10.82H1.29332L1.90665 9.18666H5.31332L5.92665 10.82ZM2.31332 8.09333L3.60665 4.63999L4.89998 8.09333H2.31332ZM7.38665 13.4667L8.93998 11.9133H5.83332L7.38665 13.4667ZM13.44 4.02666V3.18666H7.90665V4.25333H11.8267L7.87998 9.95999V10.82H13.5667V9.75999H9.48665L13.44 4.02666Z",fill:"#C0C0C0"})})]})}),Object(c.jsx)("th",{className:"PeopleTable__headers",style:{width:100},children:Object(c.jsx)("p",{className:"PeopleTable__name",children:"ID"})}),Object(c.jsx)("th",{className:"PeopleTable__headers",style:{width:100},children:Object(c.jsxs)("div",{className:"PeopleTable__header",children:[Object(c.jsx)("p",{className:"PeopleTable__name",children:"Class"}),Object(c.jsx)("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"PeopleTable__arrows",onClick:function(){g(w("class")),a(-1*t),g(m(t)),v(!0)},children:Object(c.jsx)("path",{d:"M4.00006 1.88667L6.1134 4L7.0534 3.06L4.00006 0L0.940063 3.06L1.88673 4L4.00006 1.88667ZM4.00006 10.1133L1.88673 8L0.94673 8.94L4.00006 12L7.06006 8.94L6.1134 8L4.00006 10.1133Z",fill:"#C0C0C0"})})]})}),Object(c.jsx)("th",{className:"PeopleTable__headers",style:{width:130},children:Object(c.jsxs)("div",{className:"PeopleTable__header",children:[Object(c.jsx)("p",{className:"PeopleTable__name",children:"Av. Score, %"}),Object(c.jsx)("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"PeopleTable__arrows",onClick:function(){g(w("score")),a(-1*t),g(m(t)),v(!0)},children:Object(c.jsx)("path",{d:"M4.00006 1.88667L6.1134 4L7.0534 3.06L4.00006 0L0.940063 3.06L1.88673 4L4.00006 1.88667ZM4.00006 10.1133L1.88673 8L0.94673 8.94L4.00006 12L7.06006 8.94L6.1134 8L4.00006 10.1133Z",fill:"#C0C0C0"})})]})}),Object(c.jsx)("th",{className:"PeopleTable__headers",style:{width:140},children:Object(c.jsxs)("div",{className:"PeopleTable__header",children:[Object(c.jsx)("p",{className:"PeopleTable__name",children:"Av. Speed"}),Object(c.jsx)("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"PeopleTable__arrows",onClick:function(){g(w("speed")),a(-1*t),g(m(t)),v(!0)},children:Object(c.jsx)("path",{d:"M4.00006 1.88667L6.1134 4L7.0534 3.06L4.00006 0L0.940063 3.06L1.88673 4L4.00006 1.88667ZM4.00006 10.1133L1.88673 8L0.94673 8.94L4.00006 12L7.06006 8.94L6.1134 8L4.00006 10.1133Z",fill:"#C0C0C0"})})]})}),Object(c.jsx)("th",{className:"PeopleTable__headers",children:Object(c.jsxs)("div",{className:"PeopleTable__header",children:[Object(c.jsx)("p",{className:"PeopleTable__name",children:"Parents"}),_&&Object(c.jsxs)("div",{className:"PeopleTable__clear",onClick:function(){g(b(N)),v(!1)},"aria-hidden":"true",children:[Object(c.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M10.1666 1.27337L9.22659 0.333374L5.49992 4.06004L1.77325 0.333374L0.833252 1.27337L4.55992 5.00004L0.833252 8.72671L1.77325 9.66671L5.49992 5.94004L9.22659 9.66671L10.1666 8.72671L6.43992 5.00004L10.1666 1.27337Z",fill:"#A6192E"})}),Object(c.jsx)("p",{children:"Reset sorting"})]})]})})]})}),Object(c.jsx)("tbody",{className:"PeopleTable__content",children:f.data.map((function(e){return Object(c.jsx)(T,{person:e,handleClick:C,isCheck:x},Object(y.a)())}))})]})},A=t(114);t(73);function F(){var e=Object(r.c)((function(e){return e})),s=e.page,t=e.size,l=Object(r.b)(),a=Object(r.c)((function(e){return e.data}));return Object(c.jsx)("div",{className:"Pagination",children:Object(c.jsx)(A.a,{component:"div",count:a.totalCount,page:s-1,onPageChange:function(e,s){l(u(s+1))},rowsPerPage:t,onRowsPerPageChange:function(e){l(p(parseInt(e.target.value,10)))}})})}t(77);var E=function(){return Object(c.jsxs)("div",{className:"loading-container",children:[Object(c.jsx)("div",{className:"spinner"}),Object(c.jsx)("div",{className:"spinner-center"}),Object(c.jsx)("div",{className:"loading-text",children:"Loading..."})]})},z=function(){var e=Object(r.c)((function(e){return e.data}));return Object(c.jsx)("div",{className:"PeoplePage",children:e?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(D,{}),Object(c.jsx)(F,{})]}):Object(c.jsx)(E,{})})},I=function(){var e=Object(r.b)(),s=Object(r.c)((function(e){return e})),t=s.page,a=s.size,n=s.search,i=s.sortBy,d=s.sortDir;return Object(l.useEffect)((function(){e(b({page:t,size:a,search:n,sortBy:i,sortDir:d}))}),[t,a,n,i,d]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(g,{}),Object(c.jsx)(f,{}),Object(c.jsx)(R,{}),Object(c.jsx)(z,{})]})},J=Object(h.a)({reducer:v});n.a.render(Object(c.jsx)(r.a,{store:J,children:Object(c.jsx)(I,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.01090fd7.chunk.js.map