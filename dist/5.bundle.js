(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{104:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),i=(a(7),a(22)),c=a(28),l=a(29),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=o.forwardRef((function(e,t){var a=e.align,c=void 0===a?"inherit":a,u=e.classes,p=e.className,m=e.color,d=void 0===m?"initial":m,f=e.component,h=e.display,v=void 0===h?"initial":h,y=e.gutterBottom,b=void 0!==y&&y,g=e.noWrap,O=void 0!==g&&g,w=e.paragraph,x=void 0!==w&&w,j=e.variant,E=void 0===j?"body1":j,P=e.variantMapping,N=void 0===P?s:P,C=Object(n.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),S=f||(x?"p":N[E]||s[E])||"span";return o.createElement(S,Object(r.a)({className:Object(i.a)(u.root,p,"inherit"!==E&&u[E],"initial"!==d&&u["color".concat(Object(l.a)(d))],O&&u.noWrap,b&&u.gutterBottom,x&&u.paragraph,"inherit"!==c&&u["align".concat(Object(l.a)(c))],"initial"!==v&&u["display".concat(Object(l.a)(v))]),ref:t},C))}));t.a=Object(c.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},120:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(1),n=a(0),o=a(77),i=a(78);function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(o.a)(),c=Object(i.a)({theme:a,name:"MuiUseMediaQuery",props:{}});var l="function"==typeof e?e(a):e;l=l.replace(/^@media( ?)/m,"");var s="undefined"!=typeof window&&void 0!==window.matchMedia,u=Object(r.a)({},c,t),p=u.defaultMatches,m=void 0!==p&&p,d=u.matchMedia,f=void 0===d?s?window.matchMedia:null:d,h=u.noSsr,v=void 0!==h&&h,y=u.ssrMatchMedia,b=void 0===y?null:y,g=n.useState((function(){return v&&s?f(l).matches:b?b(l).matches:m})),O=g[0],w=g[1];return n.useEffect((function(){var e=!0;if(s){var t=f(l),a=function(){e&&w(t.matches)};return a(),t.addListener(a),function(){e=!1,t.removeListener(a)}}}),[l,f,s]),O}},134:function(e,t,a){"use strict";var r=a(3),n=a(1),o=a(0),i=(a(7),a(22)),c=a(28),l=o.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,u=e.square,p=void 0!==u&&u,m=e.elevation,d=void 0===m?1:m,f=e.variant,h=void 0===f?"elevation":f,v=Object(r.a)(e,["classes","className","component","square","elevation","variant"]);return o.createElement(s,Object(n.a)({className:Object(i.a)(a.root,c,"outlined"===h?a.outlined:a["elevation".concat(d)],!p&&a.rounded),ref:t},v))}));t.a=Object(c.a)((function(e){var t={};return e.shadows.forEach((function(e,a){t["elevation".concat(a)]={boxShadow:e}})),Object(n.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(l)},138:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),i=(a(7),a(22)),c=a(134),l=a(28),s=o.forwardRef((function(e,t){var a=e.classes,l=e.className,s=e.raised,u=void 0!==s&&s,p=Object(n.a)(e,["classes","className","raised"]);return o.createElement(c.a,Object(r.a)({className:Object(i.a)(a.root,l),elevation:u?8:1,ref:t},p))}));t.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},139:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(0),i=(a(7),a(22)),c=a(28),l=o.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,u=Object(n.a)(e,["classes","className","component"]);return o.createElement(s,Object(r.a)({className:Object(i.a)(a.root,c),ref:t},u))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},141:function(e,t,a){var r=a(142),n=a(143),o=a(48),i=a(144);e.exports=function(e){return r(e)||n(e)||o(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},142:function(e,t,a){var r=a(49);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},143:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},144:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},179:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(12),i=a(74),c=a(104),l=Object(i.a)((function(e){return{root:{display:"inline-flex",borderBottom:"0.1rem solid #000"},game:{padding:"0.8rem",color:"#000",fontFamily:"Comfortaa",fontWeight:300},active:{fontWeight:700}}})),s=function(e){var t=e.data,a=l();return n.a.createElement("div",{className:a.root},n.a.createElement(c.a,{className:"".concat(a.game),variant:"h4"},t))},u=a(32),p=a.n(u),m=a(141),d=a.n(m),f=a(33),h=a.n(f),v=a(138),y=a(139),b=a(165),g=a(120),O=a(34),w=Object(i.a)((function(e){return{root:{width:"50%",borderRight:"0.2rem solid #000",height:"40rem",padding:"2rem",position:"relative"},team:{backgroundColor:"#f3f3f3ff",padding:"1.5rem"},players:{padding:function(e){return e.isPC?"2rem":"2rem 0"},fontSize:function(e){return!e.isPC&&"1.8rem"}},playerDiv:{position:"absolute",top:"60%",left:"50%",transform:"translate(-50%, -50%)"}}})),x=function(e){var t=e.teamA,a=e.swap,r=e.firstSwap,o=e.isPC,i=w({isPC:o}),l=function(e){e.preventDefault()},s=function(e,t){r(t)},u=function(e,t){a(t)};return n.a.createElement("div",{className:i.root},n.a.createElement(c.a,{variant:"h3",className:i.team},"Team A"),n.a.createElement("div",{className:i.playerDiv},t.length>0&&t.map((function(e,t){return n.a.createElement(c.a,{key:t,variant:"h4",draggable:!0,onDragOver:function(e){return l(e)},onDrop:function(t){return u(0,e)},onDragStart:function(t){return s(0,e)},onTouchStart:function(t){return s(0,e)},onTouchMove:function(e){return l(e)},onTouchEnd:function(t){return u(0,e)},className:i.players},e)}))))},j=Object(i.a)((function(e){return{root:{width:"50%",height:"40rem",padding:"2rem",position:"relative"},team:{backgroundColor:"#f3f3f3ff",padding:"1.5rem"},players:{padding:function(e){return e.isPC?"2rem":"2rem 0"},fontSize:function(e){return!e.isPC&&"1.8rem"}},playerDiv:{position:"absolute",top:"60%",left:"50%",transform:"translate(-50%, -50%)"}}})),E=function(e){var t=e.teamB,a=e.swap,r=e.firstSwap,o=e.isPC,i=j({isPC:o}),l=function(e){e.preventDefault()},s=function(e,t){r(t)},u=function(e,t){a(t)};return n.a.createElement("div",{className:i.root},n.a.createElement(c.a,{variant:"h3",className:i.team,draggable:!0},"Team B"),n.a.createElement("div",{className:i.playerDiv},t.length>0&&t.map((function(e,t){return n.a.createElement(c.a,{key:t,variant:"h4",draggable:!0,onDragOver:function(e){return l(e)},onDrop:function(t){return u(0,e)},onDragStart:function(t){return s(0,e)},onTouchStart:function(t){return s(0,e)},onTouchMove:function(e){return l(e)},onTouchEnd:function(t){return u(0,e)},className:i.players},e)}))))},P=Object(i.a)((function(e){return{root:{padding:function(e){return e.isPC?"2rem":"0"},display:"flex",height:"50rem"},players:{padding:function(e){return e.isPC?"3.5rem":"4rem 3.5rem"}},playerDiv:{width:"50%"}}})),N=function(e){var t=e.players,a=(e.isPC,P(e));return n.a.createElement("div",{className:a.root},n.a.createElement("div",{className:a.playerDiv},t.length>0&&t.slice(0,Math.ceil(t.length/2)).map((function(e,t){return n.a.createElement(c.a,{key:t,variant:"h3",className:a.players},e)}))),n.a.createElement("div",{className:a.playerDiv},t.length>0&&t.slice(Math.ceil(t.length/2),t.length).map((function(e,t){return n.a.createElement(c.a,{key:t,variant:"h3",className:a.players},e)}))))};function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){p()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D=Object(i.a)((function(e){return{root:{width:function(e){return e.isPC?"50%":"90%"},margin:"2rem auto",boxShadow:"0px 0px 17px 1px #1D1F26",backgroundColor:"#fff",border:"0.1rem solid #000",height:function(e){return e.isPC?"50rem":"48rem"},position:"relative"},button:{fontSize:"2.4rem",width:function(e){return e.isPC?"15%":"50%"},backgroundColor:"#0b5394",boxShadow:"0px 0px 11px 1px #1D1F26",color:"#fff",margin:"0 auto",marginBottom:"1.2rem",fontWeight:300,textTransform:"capitalize","&:hover":{backgroundColor:"#073763ff"}},cowputer:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},herds:{display:"flex",flexDirection:"column",padding:0},teamDiv:{borderBottom:"0.2rem solid #000",display:"flex"}}})),M=["Player 1","Player 2","Player 3","Player 4","Player 5","Player 6","Player 7","Player 8"],k=function(e){e.noOfPlayers;var t=e.mode,a=Object(g.a)("(min-width:768px)",{noSsr:!0}),o=D(S(S({},e),{},{isPC:a}));return n.a.createElement(r.Fragment,null,n.a.createElement(v.a,{className:o.root},function(e,t){var a=D({isPc:t}),o=Object(r.useState)(M),i=h()(o,2),l=i[0],s=i[1],u=Object(r.useState)(""),p=h()(u,2),m=p[0],f=p[1],v=function(e){var t=l.indexOf(m),a=l.indexOf(e),r=d()(l),n=[r[a],r[t]];r[t]=n[0],r[a]=n[1],s(r)};return"cowputer"===e?n.a.createElement(y.a,{className:a.cowputer},n.a.createElement(c.a,{variant:"h2"},"All players ready!"),n.a.createElement(c.a,{variant:"h4"},"(It's just you)")):"herds"===e?n.a.createElement(y.a,{className:a.herds},n.a.createElement("div",{className:a.teamDiv},n.a.createElement(x,{teamA:l.slice(0,4),swap:v,firstSwap:f,isPC:t}),n.a.createElement(E,{teamB:l.slice(4,8),swap:v,firstSwap:f,isPC:t})),n.a.createElement(b.a,{className:a.button,onClick:function(){for(var e=d()(l),t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),r=[e[a],e[t]];e[t]=r[0],e[a]=r[1]}s(e)},style:{width:t?"40%":"80%",boxShadow:"none",marginTop:t?"2rem":"1rem"}},"Randomize Herds")):"bullfight"===e?n.a.createElement(y.a,null,n.a.createElement(N,{players:l,isPC:t})):n.a.createElement(y.a,{className:a.cowputer},n.a.createElement(c.a,{variant:"h2"},"Uh oh! Looks like you've navigated to a page that doesn't exist."),n.a.createElement(O.c,{to:"/join",exact:!0,style:{textDecoration:"none"}},n.a.createElement(c.a,{variant:"h4"},"Go back")))}(t,a)),n.a.createElement(b.a,{className:o.button},"Start Game"))};t.default=function(e){var t=Object(r.useContext)(o.a),a=t.subHeader,i=t.setSubHeader;return Object(r.useEffect)((function(){i("Playing ".concat(e.match.params.mode))}),[a]),n.a.createElement("div",null,n.a.createElement(s,{data:"Round Up Room"}),n.a.createElement(k,{noOfPlayers:1,mode:e.match.params.mode}))}}}]);
//# sourceMappingURL=5.bundle.js.map