(this["webpackJsonpreact-starter-pack"]=this["webpackJsonpreact-starter-pack"]||[]).push([[0],{51:function(e,s,t){},54:function(e,s,t){},55:function(e,s,t){},56:function(e,s,t){},62:function(e,s,t){},63:function(e,s,t){},64:function(e,s,t){},65:function(e,s,t){},66:function(e,s,t){},67:function(e,s,t){},71:function(e,s,t){},72:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t(0),l=t(10),n=t.n(l),r=t(9),i=(t(51),t(2)),o=t(16),j=t.n(o),h=t(22),d=t(19),b=Object(d.b)("data/fetchData",function(){var e=Object(h.a)(j.a.mark((function e(s){var t,c,a,l,n,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.page,c=s.size,a=s.search,l=s.sortBy,n=s.sortDir,e.next=3,fetch("https://test-task-j.herokuapp.com/data?page=".concat(t,"&size=").concat(c,"&search=").concat(a,"&sortBy=").concat(l,"&sortDir=").concat(n));case 3:return r=e.sent,e.next=6,r.json();case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}()),x=Object(d.c)({name:"data",initialState:{data:null,page:1,size:10,search:"",sortBy:"",sortDir:-1},reducers:{changePage:function(e,s){var t=s.payload;e.page=t},changeSize:function(e,s){var t=s.payload;e.size=t},changeSearch:function(e,s){var t=s.payload;e.search=t},changeSortBy:function(e,s){var t=s.payload;e.sortBy=t},changeSortDir:function(e,s){var t=s.payload;e.sortDir=t}},extraReducers:Object(i.a)({},b.fulfilled.type,(function(e,s){e.data=s.payload}))}),p=x.actions,O=p.changePage,w=p.changeSize,v=p.changeSearch,g=p.changeSortBy,u=p.changeSortDir,m=x.reducer,f=(t(54),t(55),function(){return Object(c.jsxs)("div",{className:"Header",children:[Object(c.jsxs)("div",{className:"Header__school",children:[Object(c.jsx)("div",{className:"Header__link",children:"School 1"}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M0 0L5 5L10 0H0Z",fill:"#777777"})})]}),Object(c.jsxs)("div",{className:"Header__links",children:[Object(c.jsx)("a",{href:"/analytics",className:"Header__link",children:"Analytics"}),Object(c.jsx)("a",{href:"/gradebooks",className:"Header__link",children:"Gradebooks"}),Object(c.jsx)("a",{href:"/tests",className:"Header__link",children:"Tests"}),Object(c.jsx)("a",{href:"/students",className:"Header__link Header__link-active",children:"Students"}),Object(c.jsx)("a",{href:"/teachers",className:"Header__link",children:"Teachers"}),Object(c.jsx)("a",{href:"/archive",className:"Header__link",children:"Archive"})]}),Object(c.jsxs)("div",{className:"Header__user",children:[Object(c.jsx)("img",{src:"https://freesvg.org/img/abstract-user-flat-1.png",alt:"user avatar",className:"Header__userAvatar"}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M0 0L5 5L10 0H0Z",fill:"#777777"})})]})]})}),_=(t(56),function(){return Object(c.jsxs)("div",{className:"FilterBar",children:[Object(c.jsxs)("div",{className:"FilterBar__params",children:[Object(c.jsxs)("div",{className:"FilterBar__param",children:[Object(c.jsx)("p",{children:"Show all"}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M0 0L5 5L10 0H0Z",fill:"#C0C0C0"})})]}),Object(c.jsxs)("div",{className:"FilterBar__param",children:[Object(c.jsx)("p",{children:"All grades"}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M0 0L5 5L10 0H0Z",fill:"#C0C0C0"})})]}),Object(c.jsxs)("div",{className:"FilterBar__param",children:[Object(c.jsx)("p",{children:"All classes"}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M0 0L5 5L10 0H0Z",fill:"#C0C0C0"})})]}),Object(c.jsxs)("div",{className:"FilterBar__param",children:[Object(c.jsx)("p",{children:"Av.Score"}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M0 0L5 5L10 0H0Z",fill:"#C0C0C0"})})]}),Object(c.jsxs)("div",{className:"FilterBar__param",children:[Object(c.jsx)("p",{children:"Av.Speed"}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M0 0L5 5L10 0H0Z",fill:"#C0C0C0"})})]}),Object(c.jsxs)("div",{className:"FilterBar__param",children:[Object(c.jsx)("p",{children:"All Classes"}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M0 0L5 5L10 0H0Z",fill:"#C0C0C0"})})]})]}),Object(c.jsxs)("div",{className:"FilterBar__clear",children:[Object(c.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M10.1666 1.27337L9.22659 0.333374L5.49992 4.06004L1.77325 0.333374L0.833252 1.27337L4.55992 5.00004L0.833252 8.72671L1.77325 9.66671L5.49992 5.94004L9.22659 9.66671L10.1666 8.72671L6.43992 5.00004L10.1666 1.27337Z",fill:"#C0C0C0"})}),Object(c.jsx)("p",{children:"Clear all"})]})]})}),L=t(5),C=t(35),N=(t(62),function(){var e=Object(a.useState)([]),s=Object(L.a)(e,2),t=s[0],l=s[1],n=function(){var e=Object(h.a)(j.a.mark((function e(){var s,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://test-task-j.herokuapp.com/data?page=1&size=10");case 2:return s=e.sent,e.next=5,s.json();case 5:t=e.sent,l(t.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){n()}),[]),Object(c.jsx)(c.Fragment,{children:(null===t||void 0===t?void 0:t.length)&&Object(c.jsxs)(C.CSVLink,{className:"ExportCSV",headers:[{label:"Name",key:"name"},{label:"ID",key:"id"},{label:"Class",key:"class"},{label:"Score",key:"score"},{label:"Speed",key:"speed"},{label:"Parents",key:"parents"}],data:t,filename:"students.csv",target:"_blank",children:[Object(c.jsx)("svg",{width:"10",height:"12",viewBox:"0 0 10 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M4.99992 0.5L0.333252 5.16667H2.99992V9.16667H6.99992V5. 16667H9.66659L4.99992 0.5ZM5.66659 3.83333V7.83333H4.33325V3. 83333H3.55325L4.99992 2.38667L6.44659 3.83333H5.66659ZM0.333252 10.5H9.66659V11.8333H0.333252V10.5Z",fill:"#C0C0C0"})}),Object(c.jsx)("p",{children:"Export CSV"})]})})}),H=(t(63),function(){var e=Object(a.useState)(""),s=Object(L.a)(e,2),t=s[0],l=s[1],n=Object(r.b)();return Object(c.jsxs)("div",{className:"SearchBar",children:[Object(c.jsx)("h1",{className:"SearchBar__title",children:"Students"}),Object(c.jsxs)("form",{className:"SearchBar__form",onSubmit:function(e){e.preventDefault(),n(v(t))},children:[Object(c.jsx)("input",{className:"SearchBar__input",placeholder:"Enter Student Name, Parent or ID here",value:t,onChange:function(e){l(e.target.value)}}),0===t.length?Object(c.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"SearchBar__search",onClick:function(){n(v(t))},children:Object(c.jsx)("path",{d:"M8.33333 7.33333H7.80667L7.62 7.15333C8.27333 6.39333 8.66667 5.40667 8.66667 4.33333C8.66667 1.94 6.72667 0 4.33333 0C1.94 0 0 1.94 0 4.33333C0 6.72667 1.94 8.66667 4.33333 8.66667C5.40667 8.66667 6.39333 8.27333 7.15333 7.62L7.33333 7.80667V8.33333L10.6667 11.66L11.66 10.6667L8.33333 7.33333ZM4.33333 7.33333C2.67333 7.33333 1.33333 5.99333 1.33333 4.33333C1.33333 2.67333 2.67333 1.33333 4.33333 1.33333C5.99333 1.33333 7.33333 2.67333 7.33333 4.33333C7.33333 5.99333 5.99333 7.33333 4.33333 7.33333Z",fill:"#C0C0C0"})}):Object(c.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"SearchBar__search",onClick:function(){n(v("")),l("")},children:Object(c.jsx)("path",{d:"M10.1666 1.27337L9.22659 0.333374L5.49992 4.06004L1.77325 0.333374L0.833252 1.27337L4.55992 5.00004L0.833252 8.72671L1.77325 9.66671L5.49992 5.94004L9.22659 9.66671L10.1666 8.72671L6.43992 5.00004L10.1666 1.27337Z",fill:"#C0C0C0"})})]}),Object(c.jsx)(N,{})]})}),B=(t(64),t(65),t(66),function(e){var s=e.person;return Object(c.jsxs)("tr",{className:"PersonRow",children:[Object(c.jsxs)("td",{className:"PersonRow__value",children:[Object(c.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"PersonRow__checkbox",children:Object(c.jsx)("path",{d:"M10.6667 1.33333V10.6667H1.33333V1.33333H10.6667ZM10.6667 0H1.33333C0.6 0 0 0.6 0 1.33333V10.6667C0 11.4 0.6 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V1.33333C12 0.6 11.4 0 10.6667 0Z",fill:"#777777"})}),s.name]}),Object(c.jsx)("td",{className:"PersonRow__value",children:s.id}),Object(c.jsx)("td",{className:"PersonRow__value",children:s.class}),Object(c.jsxs)("td",{className:"PersonRow__value",children:[s.score.slice(0,-1)>=90&&Object(c.jsx)("p",{style:{color:"#4285F4"},children:s.score}),s.score.slice(0,-1)>=80&&s.score.slice(0,-1)<=89&&Object(c.jsx)("p",{style:{color:"#0F9D58"},children:s.score}),s.score.slice(0,-1)>=50&&s.score.slice(0,-1)<=79&&Object(c.jsx)("p",{style:{color:"#E2B534"},children:s.score}),s.score.slice(0,-1)<=49&&Object(c.jsx)("p",{style:{color:"#DB4437"},children:s.score})]}),Object(c.jsxs)("td",{className:"PersonRow__value",children:["Above Expected"===s.speed&&Object(c.jsx)("p",{style:{color:"#4285F4"},children:"Above Expected"}),"As Expected"===s.speed&&Object(c.jsx)("p",{style:{color:"#0F9D58"},children:"As Expected"}),"Below Expected"===s.speed&&Object(c.jsx)("p",{style:{color:"#DB4437"},children:"Below Expected"})]}),Object(c.jsx)("td",{className:"PersonRow__value",children:Object(c.jsxs)("div",{className:"PersonRow__parents",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"PersonRow__info",children:Object(c.jsx)("path",{d:"M6.33325 10.3334H7.66659V6.33337H6.33325V10.3334ZM6.99992 0.333374C3.31992 0.333374 0.333252 3.32004 0.333252 7.00004C0.333252 10.68 3.31992 13.6667 6.99992 13.6667C10.6799 13.6667 13.6666 10.68 13.6666 7.00004C13.6666 3.32004 10.6799 0.333374 6.99992 0.333374ZM6.99992 12.3334C4.05992 12.3334 1.66659 9.94004 1.66659 7.00004C1.66659 4.06004 4.05992 1.66671 6.99992 1.66671C9.93992 1.66671 12.3333 4.06004 12.3333 7.00004C12.3333 9.94004 9.93992 12.3334 6.99992 12.3334ZM6.33325 5.00004H7 .66659V3.66671H6.33325V5.00004Z",fill:"#C0C0C0"})}),s.parents[0],", ",s.parents[1]]}),Object(c.jsx)("svg",{width:"10",height:"5",viewBox:"0 0 10 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"PersonRow__arrow",children:Object(c.jsx)("path",{d:"M0 0L5 5L10 0H0Z",fill:"#C0C0C0"})})]})})]})});B.defaultProps={person:{}};var P=function(){var e=Object(a.useState)(-1),s=Object(L.a)(e,2),t=s[0],l=s[1],n=Object(r.b)(),i=Object(r.c)((function(e){return e.data}));return Object(c.jsxs)("table",{className:"PeopleTable",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"PeopleTable__headers",style:{width:420},children:Object(c.jsxs)("div",{className:"PeopleTable__header",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"PeopleTable__checkbox",children:Object(c.jsx)("path",{d:"M10.6667 1.33333V10.6667H1.33333V1.33333H10.6667ZM10.6667 0H1.33333C0.6 0 0 0.6 0 1.33333V10.6667C0 11.4 0.6 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V1.33333C12 0.6 11.4 0 10.6667 0Z",fill:"#777777"})}),Object(c.jsx)("p",{className:"PeopleTable__name",children:"Name"})]}),Object(c.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"PeopleTable__az",onClick:function(){n(g("name")),l(-1*t),n(u(t))},children:Object(c.jsx)("path",{d:"M8.95998 2.10666L7.38665 0.533325L5.81332 2.10666H8.95998ZM5.92665 10.82H7.15332L4.15998 3.17999H3.06665L0.0666504 10.82H1.29332L1.90665 9.18666H5.31332L5.92665 10.82ZM2.31332 8.09333L3.60665 4.63999L4.89998 8.09333H2.31332ZM7.38665 13.4667L8.93998 11.9133H5.83332L7.38665 13.4667ZM13.44 4.02666V3.18666H7. 90665V4.25333H11.8267L7.87998 9.95999V10.82H13.5667V9. 75999H9.48665L13.44 4.02666Z",fill:"#C0C0C0"})})]})}),Object(c.jsx)("th",{className:"PeopleTable__headers",style:{width:100},children:"ID"}),Object(c.jsx)("th",{className:"PeopleTable__headers",style:{width:100},children:Object(c.jsxs)("div",{className:"PeopleTable__header",children:[Object(c.jsx)("p",{className:"PeopleTable__name",children:"Class"}),Object(c.jsx)("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"PeopleTable__arrows",onClick:function(){n(g("class")),l(-1*t),n(u(t))},children:Object(c.jsx)("path",{d:"M4.00006 1.88667L6.1134 4L7.0534 3.06L4.00006 0L0.940063 3.06L1.88673 4L4.00006 1.88667ZM4.00006 10.1133L1.88673 8L0.94673 8.94L4.00006 12L7.06006 8.94L6.1134 8L4.00006 10.1133Z",fill:"#C0C0C0"})})]})}),Object(c.jsx)("th",{className:"PeopleTable__headers",style:{width:130},children:Object(c.jsxs)("div",{className:"PeopleTable__header",children:[Object(c.jsx)("p",{className:"PeopleTable__name",children:"Av. Score, %"}),Object(c.jsx)("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"PeopleTable__arrows",onClick:function(){n(g("score")),l(-1*t),n(u(t))},children:Object(c.jsx)("path",{d:"M4.00006 1.88667L6.1134 4L7.0534 3.06L4.00006 0L0.940063 3.06L1.88673 4L4.00006 1.88667ZM4.00006 10.1133L1.88673 8L0.94673 8.94L4.00006 12L7.06006 8.94L6.1134 8L4.00006 10.1133Z",fill:"#C0C0C0"})})]})}),Object(c.jsx)("th",{className:"PeopleTable__headers",style:{width:140},children:Object(c.jsxs)("div",{className:"PeopleTable__header",children:[Object(c.jsx)("p",{className:"PeopleTable__name",children:"Av. Speed"}),Object(c.jsx)("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"PeopleTable__arrows",onClick:function(){n(g("speed")),l(-1*t),n(u(t))},children:Object(c.jsx)("path",{d:"M4.00006 1.88667L6.1134 4L7.0534 3.06L4.00006 0L0.940063 3.06L1.88673 4L4.00006 1.88667ZM4.00006 10.1133L1.88673 8L0.94673 8.94L4.00006 12L7.06006 8.94L6.1134 8L4.00006 10.1133Z",fill:"#C0C0C0"})})]})}),Object(c.jsx)("th",{className:"PeopleTable__headers",children:"Parents"})]})}),Object(c.jsx)("tbody",{className:"PeopleTable__content",children:i.data.map((function(e){return Object(c.jsx)(B,{person:e},e.id)}))})]})},y=t(108);t(67);function k(){var e=Object(r.c)((function(e){return e})),s=e.page,t=e.size,a=Object(r.b)(),l=Object(r.c)((function(e){return e.data}));return Object(c.jsx)("div",{className:"Pagination",children:Object(c.jsx)(y.a,{component:"div",count:l.totalCount,page:s-1,onPageChange:function(e,s){a(O(s+1))},rowsPerPage:t,onRowsPerPageChange:function(e){a(w(parseInt(e.target.value,10)))}})})}t(71);var M=function(){return Object(c.jsxs)("div",{className:"loading-container",children:[Object(c.jsx)("div",{className:"spinner"}),Object(c.jsx)("div",{className:"spinner-center"}),Object(c.jsx)("div",{className:"loading-text",children:"Loading..."})]})},Z=function(){var e=Object(r.c)((function(e){return e.data}));return Object(c.jsx)("div",{className:"PeoplePage",children:e?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(P,{}),Object(c.jsx)(k,{})]}):Object(c.jsx)(M,{})})},S=function(){var e=Object(r.b)(),s=Object(r.c)((function(e){return e})),t=s.page,l=s.size,n=s.search,i=s.sortBy,o=s.sortDir;return Object(a.useEffect)((function(){e(b({page:t,size:l,search:n,sortBy:i,sortDir:o}))}),[t,l,n,i,o]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(f,{}),Object(c.jsx)(_,{}),Object(c.jsx)(H,{}),Object(c.jsx)(Z,{})]})},V=Object(d.a)({reducer:m});n.a.render(Object(c.jsx)(r.a,{store:V,children:Object(c.jsx)(S,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.2afb8368.chunk.js.map