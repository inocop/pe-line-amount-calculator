(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{87:function(e,t,c){"use strict";c.r(t);var r=c(110),n=c(0),a=c(63),i=c.n(a),j=c(111),s=c(67),l=c(5),o=c(64),u=n.createContext(null),b=n.createContext(null),d=c(3),m=Object(o.a)((function(e,t){switch(t.type){case"commitFormValue":e.formValue=t.value;break;default:return e}})),h=function(e){var t=e.children,c=n.useReducer(m,{formValue:{peSize:"",amount:""}}),r=Object(l.a)(c,2),a=r[0],i=function(e){return{saveFormValue:function(t){e({type:"commitFormValue",value:t})},clearFormValue:function(){e({type:"commitFormValue",value:{peSize:"",amount:""}})}}}(r[1]);return Object(d.jsx)(u.Provider,{value:a,children:Object(d.jsx)(b.Provider,{value:i,children:t})})},O=c(109),x=c(112),p=c(98),f=c(99),g=c(100),v=c(101),S=function(e){var t=e.item;return Object(d.jsxs)(p.g,{children:[Object(d.jsxs)(p.d,{children:[t.peSize,"\u53f7"]}),Object(d.jsx)(p.d,{isNumeric:!0,paddingX:0,children:t.referenceSpec&&Object(d.jsxs)(d.Fragment,{children:[t.referenceSpec.lb,"lb (",t.referenceSpec.kg,"kg)"]})}),Object(d.jsxs)(p.d,{isNumeric:!0,children:[t.amount,"m"]})]})},z=c(66),C=function(){var e=Object(n.useContext)(u).formValue,t=function(e){var t=e.peSize,c=e.amount;return t&&c?new z.PeLineAmountCalculator({peSize:t,amount:c}).run():[]}({peSize:e.peSize,amount:e.amount});return 0===t.length?null:Object(d.jsxs)(p.a,{variant:"simple",children:[Object(d.jsx)(p.f,{children:Object(d.jsxs)(p.g,{children:[Object(d.jsx)(p.e,{children:"\u53f7\u6570"}),Object(d.jsxs)(p.e,{paddingX:0,children:["\u53c2\u8003\u5f37\u5ea6",Object(d.jsx)("br",{}),Object(d.jsx)(f.a,{color:"teal.400",href:"https://fishing.sunline.co.jp/line/184/",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)(g.a,{fontSize:"x-small",children:"\u203bSUNLINE SIGLON PEx8"})})]}),Object(d.jsx)(p.e,{isNumeric:!0,children:"\u7cf8\u5dfb\u91cf(m)"})]})}),Object(d.jsx)(p.c,{children:t.map((function(e){return Object(d.jsx)(S,{item:e},e.peSize)}))}),Object(d.jsxs)(p.b,{children:["\u8a08\u7b97\u7d50\u679c\u306f",Object(d.jsx)(f.a,{color:"teal.400",href:"http://www.jaftma.or.jp/standard/",target:"_blank",rel:"noopener noreferrer",children:"JAFTMA\uff08\u65e5\u672c\u91e3\u7528\u54c1\u5de5\u696d\u4f1a\uff09"}),"\u306b\u3088\u308bPE\u7cf8\u306e\u592a\u3055\u6a19\u6e96\u898f\u683c",Object(d.jsx)(v.a,{children:"1\u53f7=200d(\u30c7\u30cb\u30fc\u30eb)"}),"\u3092\u524d\u63d0\u3068\u3057\u305f\u53c2\u8003\u5024\u306b\u306a\u308a\u307e\u3059\u3002"]})]})},k=c(2),w=c(36),V=c(11),y=c(37),F=c(104),P=c(114),A=c(71),E=function(){var e=Object(n.useContext)(b).saveFormValue,t=Object(n.useState)({peSize:"",amount:""}),c=Object(l.a)(t,2),r=c[0],a=c[1],i=function(e){a(Object(w.a)(Object(w.a)({},r),{},Object(k.a)({},e.currentTarget.name,e.currentTarget.value)))};return Object(d.jsx)(V.a.form,{onSubmit:function(t){t.preventDefault(),e(r)},children:Object(d.jsxs)(x.b,{spacing:4,children:[Object(d.jsx)(g.a,{children:"\u304a\u624b\u6301\u3061\u306e\u30ea\u30fc\u30eb\u306b\u8a18\u8f09\u3055\u308c\u3066\u3044\u308bPE\u30e9\u30a4\u30f3\u306e\u7cf8\u5dfb\u91cf\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),Object(d.jsxs)(y.a,{id:"peSize",isRequired:!0,children:[Object(d.jsx)(F.a,{children:"\u53f7\u6570"}),Object(d.jsx)(P.a,{name:"peSize",type:"text",inputMode:"numeric",placeholder:"e.g. 0.8",value:r.peSize,onChange:i})]}),Object(d.jsxs)(y.a,{id:"amount",isRequired:!0,children:[Object(d.jsx)(F.a,{children:"\u7cf8\u5dfb\u91cf(m)"}),Object(d.jsx)(P.a,{name:"amount",type:"text",inputMode:"numeric",pattern:"\\d*",placeholder:"e.g. 200",value:r.amount,onChange:i})]}),Object(d.jsx)(A.a,{type:"submit",children:"\u8a08\u7b97"})]})})},N=c(106),L=c(113),M=c(107),R=c(108),T=c(90),I=c(105),J=c(55),q=function(e){var t=Object(T.b)().toggleColorMode,c=Object(T.c)("dark","light"),r=Object(T.c)(J.a,J.b);return Object(d.jsx)(I.a,Object(w.a)({size:"md",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(d.jsx)(r,{}),"aria-label":"Switch to ".concat(c," mode")},e))},X=function(){return Object(d.jsxs)(N.a,{h:"100%",justify:"center",align:"center",children:[Object(d.jsx)(L.a,{borderRadius:"full",boxSize:"32px",src:"".concat("/pe-line-amount-calculator","/favicon.ico")}),Object(d.jsx)(M.a,{as:"h1",size:"md",marginLeft:"4",isTruncated:!0,children:"PE\u30e9\u30a4\u30f3\u7cf8\u5dfb\u91cf\u8a08\u7b97\u30c4\u30fc\u30eb"}),Object(d.jsx)(R.a,{}),Object(d.jsx)(q,{})]})},_=function(){return Object(d.jsxs)(O.a,{minH:"100vh",templateRows:"72px 1fr",templateColumns:{base:"1fr",md:"1fr 2fr 1fr"},templateAreas:{base:'"header"               "main"',md:'"header      header header"             "left-space  main   right-space"'},children:[Object(d.jsx)(O.b,{gridArea:"header",margin:"4",children:Object(d.jsx)(X,{})}),Object(d.jsx)(O.b,{gridArea:"main",margin:"4",children:Object(d.jsxs)(x.a,{spacing:6,children:[Object(d.jsx)(E,{}),Object(d.jsx)(C,{})]})})]})},B=function(){return Object(d.jsx)(j.a,{theme:s.theme,children:Object(d.jsx)(h,{children:Object(d.jsx)(_,{})})})};i.a.render(Object(d.jsxs)(n.StrictMode,{children:[Object(d.jsx)(r.a,{}),Object(d.jsx)(B,{})]}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.d7e5da91.chunk.js.map