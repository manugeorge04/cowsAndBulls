(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{106:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(32),l=a(152),i=a(121),c=Object(l.a)((function(e){return{root:{display:"inline-flex",borderBottom:"0.1rem solid #000"},game:{padding:"0.8rem",color:"#000",marginBottom:"1.2rem",fontFamily:"Comfortaa",fontWeight:300},active:{fontWeight:700}}}));t.a=function(){var e=c(),t=window.location.href.replace(/\/$/,"");return r.a.createElement("div",{className:e.root},r.a.createElement(o.c,{to:"/",exact:!0,style:{textDecoration:"none"}},r.a.createElement(i.a,{className:"#"===t.substr(t.lastIndexOf("/")+1)?"".concat(e.game," ").concat(e.active):"".concat(e.game),style:{borderRight:"0.1rem solid #000",paddingRight:"1.2rem"},variant:"h4"},"Create Game")),r.a.createElement(o.c,{to:"/join",style:{textDecoration:"none"}},r.a.createElement(i.a,{className:"join"===t.substr(t.lastIndexOf("/")+1)?"".concat(e.game," ").concat(e.active):"".concat(e.game),style:{paddingLeft:"1.2rem"},variant:"h4"},"Join Game")))}},111:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(152),l=a(168),i=a(140),c=a(30),m=a.n(c),u=a(27),s=a(157),d=a(156),f=a(158),p=a(159),h=a(121),g=a(173),b=a(80),E=a.n(b),v=a(154),O=a(155),w=a(124),y=a.n(w),C=a(126),j=a.n(C),I=a(125),S=a.n(I),x=a(153),k=Object(o.a)((function(e){var t;return{wrapIcon:{verticalAlign:"middle",display:"inline-flex"},Icon:(t={width:"10%"},E()(t,e.breakpoints.down("sm"),{width:"15%"}),E()(t,"height","auto"),t)}})),N=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(h.a,{variant:"h1"},"Cowputer"),r.a.createElement(h.a,{variant:"h3",paragraph:!0},"Friends being unreliabull!"),r.a.createElement(h.a,{variant:"h4",align:"center",paragraph:!0},"The computer provides the 4-letter word that you, the player must guess. Guess it within 12 turns and you get the round!"))},P=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(h.a,{variant:"h1"},"Bullfight"),r.a.createElement(h.a,{variant:"h3",paragraph:!0},"Get ready for udder chaos!"),r.a.createElement(h.a,{variant:"h4",align:"center",paragraph:!0},"One player selected at random provides the 4-letter word that all other players must guess. It’s a race to the finish as all the players rush to guess the word first, but be careful, each player gets 12 guesses only!"))},B=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(h.a,{variant:"h1"},"Herds"),r.a.createElement(h.a,{variant:"h3",paragraph:!0},"Time for a cowoperation!"),r.a.createElement(h.a,{variant:"h4",align:"center",paragraph:!0},"One random player from each team provides the 4-letter word that the other team must guess. The team that guesses the answer first wins the round. Each team gets 12 guesses in total distributed equally."))},F=function(){var e=k();return r.a.createElement(n.Fragment,null,r.a.createElement(h.a,{variant:"h4",align:"center",paragraph:!0},"Enter a word and you will be told how many COWS and BULLS lie in it. Words having repeated letters will be considered invalid. Eg: HOOF, EYES"),r.a.createElement(h.a,{variant:"h4",align:"center",paragraph:!0,className:e.wrapIcon},r.a.createElement("embed",{className:e.Icon,src:"images/cow.svg"}),"COW is a correct letter in the wrong position. Eg: Ans- HIDE Guess- SKIN I is a COW"),r.a.createElement(h.a,{variant:"h4",align:"center",className:e.wrapIcon},r.a.createElement("embed",{className:e.Icon,src:"images/bull.svg"})," BULL is a correct letter in the correct position. Eg: Ans- CALF Guess- MILK L is a BULL"))},D=Object(o.a)((function(e){return{paper:E()({position:"absolute",display:"flex",width:"50%",height:"80%",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],top:"10%",left:"25%"},e.breakpoints.down("sm"),{width:"90%",top:"10%",left:"5%"}),content:{flexGrow:"2",padding:"2rem 0 2rem"},wrapIcon:{verticalAlign:"middle",display:"inline-flex"},closeButton:E()({position:"absolute",top:"1%",left:"93%",height:"20%",zIndex:"20"},e.breakpoints.down("sm"),{left:"86%"})}})),z=function(e){var t=D();return r.a.createElement(x.a,{direction:e.direction,in:e.in,timeout:{enter:750,exit:450},mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(v.a,{variant:"outlined",className:t.paper},r.a.createElement(O.a,{className:t.button,onClick:e.handleOnBackClick},r.a.createElement(y.a,{fontSize:"large"})),r.a.createElement("div",{className:t.content},3===e.btnId&&r.a.createElement(N,null),2===e.btnId&&r.a.createElement(P,null),1===e.btnId&&r.a.createElement(B,null),r.a.createElement(F,null)),r.a.createElement("div",{className:t.closeButton},r.a.createElement(O.a,{color:"primary",onClick:e.handleOnClose},r.a.createElement(S.a,{fontSize:"large"}))),r.a.createElement(O.a,{className:t.button,onClick:e.handleOnForwardClick},r.a.createElement(j.a,{fontSize:"large"}))))},V=function(e){var t=Object(n.useState)(0),a=m()(t,2),o=a[0],l=a[1],i=Object(n.useState)(0),c=m()(i,2),u=c[0],s=c[1],d=Object(n.useState)("up"),f=m()(d,2),p=f[0],h=f[1],b=Object(n.useState)(!0),E=m()(b,2),v=E[0],O=E[1];Object(n.useEffect)((function(){l(e.Open_BtnId.btnId)}),[e.Open_BtnId.btnId]);var w=function(){s(o),l(o-1==0?3:o-1),h("left"),O(!v)},y=function(){s(o),l(o+1===4?1:o+1),h("right"),O(!v)};return r.a.createElement(g.a,{open:e.Open_BtnId.open,onClose:function(){h("up"),e.handleOnClose()}},r.a.createElement(n.Fragment,null,"    ",r.a.createElement(z,{direction:0==v?"left"===p?"right":"left":p,in:v,btnId:!1===v?u:o,handleOnForwardClick:y,handleOnBackClick:w,handleOnClose:e.handleOnClose}),r.a.createElement(z,{direction:0==v?p:"left"===p?"right":"left",in:!v,btnId:!1==!v?u:o,handleOnForwardClick:y,handleOnBackClick:w,handleOnClose:e.handleOnClose})))},W=Object(o.a)({root:{minWidth:"22.5rem",boxShadow:"0px 0px 17px 1px #1D1F26",backgroundColor:"#fff",border:"0.1rem solid #000",height:function(e){return e.isPC?"50rem":"40rem"}},content:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},button:{fontSize:"2.4rem",width:function(e){return e.isPC?"50%":"80%"},backgroundColor:"#0b5394",color:"#fff",margin:"1.5rem",fontWeight:300,textTransform:"capitalize","&:hover":{backgroundColor:"#073763ff"}},title:{fontSize:function(e){return e.isPC?"2.4rem":"2rem"},fontWeight:500,width:function(e){return e.isPC?"80%":"100%"},paddingBottom:"1.6rem",height:"8rem"}}),L=Object(u.a)((function(e){return{title:{fontWeight:500,paddingBottom:"1.6rem",height:"8rem"},content:{borderBottom:"0.1rem solid #000"},root:{padding:"1.2rem 0",height:"10rem"}}}))(d.a),M=function(e){e.isPC;var t=W(e),a=Object(n.useState)({open:!1,btnId:0}),o=m()(a,2),l=o[0],i=o[1];return r.a.createElement(n.Fragment,null,r.a.createElement(s.a,{className:t.root},r.a.createElement(L,{title:r.a.createElement(h.a,{className:t.title},"Butter read these first, check out our modes")}),r.a.createElement(f.a,{className:t.content},r.a.createElement(p.a,{className:t.button,onClick:function(){return i({open:!0,btnId:1})}},"Herds"),r.a.createElement(p.a,{className:t.button,onClick:function(){return i({open:!0,btnId:2})}},"Bullfight"),r.a.createElement(p.a,{className:t.button,onClick:function(){return i({open:!0,btnId:3})}},"Cowputer"))),r.a.createElement(V,{Open_BtnId:l,handleOnClose:function(){return i({open:!1})}}))},H=a(160),G=a(166),T=Object(o.a)({root:{},inputField:{width:"100%",fontSize:"2.4rem"},error:{color:"red !important"}}),A=function(e){var t=e.name,a=e.label,o=e.defaultValue,l=e.error,i=e.handleInputValues,c=T();return r.a.createElement(n.Fragment,null,r.a.createElement(H.a,{id:t,label:a,name:t,placeholder:o,variant:"outlined",onChange:i,className:"".concat(c.inputField," ").concat(c.root)}),r.a.createElement(G.a,{className:c.error,style:{marginBottom:"1.2rem"}},l))},J=a(172),R=a(164),_=a(163),U=Object(o.a)((function(e){return{formControl:{minWidth:120,width:"100%",marginBottom:"1.2rem","& .MuiSvgIcon-root":{width:"5rem",height:"2.5rem"}},error:{color:"red !important"},select:{" & .MuiInputBase-input":{font:"revert",fontFamily:"Comfortaa"}}}})),K=function(e){var t=e.name,a=e.label,n=e.values,o=e.error,l=e.selectedValue,i=e.handleSelectValues,c=U();return r.a.createElement(_.a,{variant:"outlined",className:c.formControl},r.a.createElement(R.a,{htmlFor:t},a),r.a.createElement(J.a,{native:!0,className:c.select,value:l,onChange:i,label:a,inputProps:{name:t,id:"select-modes"}},r.a.createElement("option",{"aria-label":"None",value:""}),n.map((function(e,t){return r.a.createElement("option",{key:t,value:"".concat(e)},e)}))),r.a.createElement(G.a,{className:c.error,style:{marginLeft:0}},o))},q=a(174),Y=a(179),$=a(167),Q=a(165),X=Object(o.a)((function(e){return{formControl:{minWidth:120,width:"100%",marginBottom:"1.2rem","& .MuiFormGroup-root":{flexDirection:"row"},"& .MuiFormLabel-root":{backgroundColor:"#fff",fontSize:"1.6rem"},"& .MuiTypography-body1":{fontSize:"1.6rem"},"& .MuiSvgIcon-root":{width:"2rem",height:"2rem"},"& .MuiIconButton-label":{width:"5rem"}},error:{color:"red !important"}}})),Z=function(e){var t=e.label,a=e.values,n=e.name,o=e.selectedValue,l=e.handleSelectValues,i=e.error,c=X();return r.a.createElement(_.a,{component:"fieldset",className:c.formControl},r.a.createElement(Q.a,{component:"legend"},t),r.a.createElement(Y.a,{"aria-label":"rounds",name:n,value:o,onChange:l},a.map((function(e,t){return r.a.createElement($.a,{key:t,value:e,name:n,control:r.a.createElement(q.a,null),label:e})}))),r.a.createElement(G.a,{className:c.error},i))};function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(a),!0).forEach((function(t){E()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(a),!0).forEach((function(t){E()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ae(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var re=Object(o.a)({root:{minWidth:"22.5rem",boxShadow:"0px 0px 17px 1px #1D1F26",backgroundColor:"#fff",border:"0.1rem solid #000",height:function(e){return"join"!==e.type||e.isPC?"50rem":"38rem"},"& .MuiTextField-root":{width:"100%",fontSize:"2rem",color:"#000",border:"1px solid white"},"& .MuiFormHelperText-root":{fontSize:"1rem",color:"#000"},"& .MuiInputLabel-root":{fontSize:"1.3rem",backgroundColor:"white",paddingRight:".5rem",color:"#000"},"& .MuiInputBase-input":{fontSize:"1.7rem",backgroundColor:"#f3f3f3ff"}},content:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},textWrapper:{fontSize:"2.4rem",width:function(e){return e.isPC?"60%":"80%"}},inputField:{width:"100%",fontSize:"2.4rem",marginBottom:"1.2rem"},button:{fontSize:"2.4rem",width:function(e){return e.isPC?"30%":"70%"},backgroundColor:"#0b5394",color:"#fff",fontWeight:300,textTransform:"capitalize","&:hover":{backgroundColor:"#073763ff"}},title:{fontSize:"2.8rem",fontWeight:500,width:function(e){return e.isPC?"80%":"100%"},paddingBottom:"1.6rem",height:"8rem"}}),oe=Object(u.a)((function(e){return{title:{fontSize:"2.8rem",fontWeight:500,paddingBottom:"1.6rem",height:"8rem"},content:{borderBottom:"0.1rem solid #000"},root:{padding:"1.2rem 0",height:"10rem"}}}))(d.a),le={name:"Enter your name",mode:"",rounds:"",roomId:""},ie=function(e){var t=e.type,a=(e.isPC,re(e)),o=Object(n.useState)({}),l=m()(o,2),i=l[0],c=l[1],u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=ne({},i);if("name"in e&&(a.name=""===e.name||"Enter your name"===e.name?"Please enter your name":""),"create"===t&&("mode"in e&&(a.mode=""!==e.mode?"":"Please select a game mode"),"rounds"in e&&(a.rounds=""!==e.rounds?"":"Please select number of rounds")),"join"===t&&"roomId"in e&&(a.roomId=""!==e.roomId?"":"Please enter a room ID"),c(ne({},a)),e==g)return Object.values(a).every((function(e){return""===e}))},d=function(e,t,a){var r=Object(n.useState)(e),o=m()(r,2),l=o[0],i=o[1];return{formValues:l,setFormValues:i,handleInputValues:function(e){var n=e.target,r=n.name,o=n.value;i(te(te({},l),{},E()({},r,o))),t&&a(E()({},r,o))},handleSelectValues:function(e){var n=e.target,r=n.name,o=n.value;i(te(te({},l),{},E()({},r,o))),t&&a(E()({},r,o))}}}(le,!0,u),g=d.formValues,b=d.handleInputValues,v=d.handleSelectValues;return r.a.createElement(s.a,{className:a.root},r.a.createElement(oe,{title:r.a.createElement(h.a,{className:a.title},"Hay there!")}),r.a.createElement(f.a,{className:a.content},r.a.createElement("div",{className:a.textWrapper},r.a.createElement(A,{id:"name",label:"Name",name:"name",defaultValue:g.name,error:i.name,variant:"outlined",handleInputValues:b}),"create"===t&&r.a.createElement(K,{name:"mode",label:"Modes",values:["Herds","Bullfight","Cowputer"],error:i.mode,selectedValue:g.mode,handleSelectValues:v}),"create"===t&&r.a.createElement(Z,{name:"rounds",label:"Rounds",values:["3","6","10"],selectedValue:g.rounds,handleSelectValues:v,error:i.rounds}),"join"===t&&r.a.createElement(A,{id:"room-id",name:"roomId",label:"Room ID",defaultValue:"Enter your room ID",error:i.roomId})),r.a.createElement(p.a,{className:a.button,onClick:function(e){e.preventDefault(),u()&&console.log("allow host")}},"join"===t?"Join":"Host")))},ce=Object(o.a)((function(e){return{root:{flexGrow:1,padding:"3.2rem",width:"70%",margin:"0 auto",marginTop:"2.4rem",display:"flex"}}}));t.a=function(e){var t=e.type,a=ce(),n=Object(i.a)("(min-width:768px)",{noSsr:!0});return r.a.createElement(l.a,{container:!0,style:{flexDirection:!n&&"column",padding:!n&&"0"},className:a.root,align:"center",spacing:2},r.a.createElement(l.a,{item:!0,xs:n?6:12},r.a.createElement(M,{isPC:n})),r.a.createElement(l.a,{item:!0,xs:n?6:12},r.a.createElement(ie,{isPC:n,type:t})))}},169:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(106),l=a(111),i=a(12);t.default=function(){var e=Object(n.useContext)(i.a),t=e.subHeader,a=e.setSubHeader;return Object(n.useEffect)((function(){a("Join Page")}),[t]),r.a.createElement("div",null,r.a.createElement(o.a,null),r.a.createElement(l.a,{type:"join"}))}}}]);
//# sourceMappingURL=6.bundle.js.map