(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(8),s=n.n(i),a=(n(14),n(7)),o=n(2),j=(n(4),n(0));function u(e){var t=Object(c.useState)(e.index),n=Object(o.a)(t,2),r=n[0];n[1];return Object(j.jsxs)("div",{style:{backgroundColor:"grey"},children:[Object(j.jsxs)("span",{style:{backgroundColor:"grey",fontSize:"14px",fontWeight:"bold"},children:[" ",e.newp," ",e.newpn]}),Object(j.jsx)("button",{onClick:function(){e.del(r)},style:{color:"red"},children:"x"})]})}function l(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2);n[0],n[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"header",children:[e.but3,Object(j.jsx)("p",{className:"myS",children:"My Shop!"}),e.but4]}),e.change]})}function b(e){return Object(j.jsx)("div",{className:"himep",children:Object(j.jsxs)("div",{className:"homepage",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:e.name1}),Object(j.jsxs)("span",{style:{position:"relative",left:"50px"},children:[e.price," "]})]}),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:[e.post,Object(j.jsxs)("span",{style:{position:"relative",left:"50px"},children:[" ",e.post1]}),Object(j.jsx)("button",{onClick:function(){return e.addne(e.post,e.post1)},style:{color:"green",backgroundColor:"red",position:"relative",left:"114px"},children:"+"})]})})]})})}var d=n.p+"static/media/ed.904c8456.png",p=n.p+"static/media/ed12.1f4409cc.png",O=n(9);var h=function(){var e=Object(c.useState)([{name:"human",price:"15000"},{name:"Computer ",price:"100"},{name:"pool ",price:"500"},{name:"car ",price:"100000"}]),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),s=Object(o.a)(i,2),h=s[0],x=s[1],m=function(e,t){x([].concat(Object(a.a)(h),[{name:e,price:t}]))},f=function(){var e=x([]);return alert("Thank you For Buy!"),e},g=function(e){var t=h.filter((function(t,n){return n!=e}));x(t)},v=function(){var e=0;return h.forEach((function(t){e+=Number(t.price)})),e},y=Object(c.useState)(!1),C=Object(o.a)(y,2),k=C[0],S=C[1],N=Object(c.useState)(""),w=Object(o.a)(N,2),A=w[0],B=w[1],F=Object(c.useState)(""),P=Object(o.a)(F,2),E=P[0],I=P[1],T=function(e){B(e.target.value)},J=function(e){I(e.target.value)},L=Object(j.jsx)("img",{className:"cartima",src:p,onClick:function(){return S(!1)}}),M=Object(j.jsx)("img",{className:"cartima",src:d,onClick:function(){return S(!0)}}),W=function(e,t){r([].concat(Object(a.a)(n),[{name:e,price:t}])),B(""),I(""),document.getElementById("name1").value="",document.getElementById("price1").value=""};return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(l,{change:function(){if(!1===k){return Object(j.jsxs)("div",{children:["name:price:",n.map((function(e){return Object(j.jsx)(b,{post:e.name,post1:e.price,addne:m})})),Object(j.jsxs)("h5",{children:["   AddNewProudct:",Object(j.jsx)("br",{}),"   Name:",Object(j.jsx)("input",{id:"name1",style:{backgroundColor:"white"},onChange:T}),Object(j.jsx)("br",{}),"Price: ",Object(j.jsx)(O.a,{onChange:J,id:"price1",style:{backgroundColor:"white"},isAllowed:function(e){if(e.value>=0)return e}}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{style:{fontWeight:"bold"},onClick:function(){W(A,E)},children:"Add"})]})]})}return Object(j.jsxs)("div",{children:[h.map((function(e,t){return Object(j.jsx)("div",{children:Object(j.jsx)(u,{newp:e.name,newpn:e.price,index:t,del:g})})})),Object(j.jsxs)("h5",{style:{backgroundColor:"grey"},children:["Total Price:",v()," ",Object(j.jsx)("button",{onClick:f,children:"buy!"})]})]})}(),but3:L,but4:M})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root")),x()},4:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.db7f8417.chunk.js.map