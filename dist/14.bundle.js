(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{232:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),i=a(120),c=a(153),l=Object(i.a)((function(e){return{root:{display:"inline-flex",borderBottom:"0.1rem solid #000"},game:{padding:"0.8rem",color:"#000",fontFamily:"Comfortaa",fontWeight:300},active:{fontWeight:700}}})),s=function(e){var t=e.data,a=l();return r.a.createElement("div",{className:a.root},r.a.createElement(c.a,{className:"".concat(a.game),variant:"h4"},t))},u=a(42),m=a.n(u),f=a(149),p=a.n(f),d=a(10),h=a.n(d),v=a(190),g=a(191),b=a(155),y=a(173),E=a(43),w=Object(i.a)((function(e){return{root:{width:"50%",borderRight:"0.2rem solid #000",height:"40rem",padding:"2rem",position:"relative"},team:{backgroundColor:"#f3f3f3ff",padding:"1.5rem"},players:{padding:function(e){return e.isPC?"2rem":"2rem 0"},fontSize:function(e){return!e.isPC&&"1.8rem"}},playerDiv:{position:"absolute",top:"60%",left:"50%",transform:"translate(-50%, -50%)"}}})),O=function(e){var t=e.teamA,a=e.swap,n=e.firstSwap,o=e.isPC,i=w({isPC:o}),l=function(e){e.preventDefault()},s=function(e,t){n(t)},u=function(e,t){a(t)};return r.a.createElement("div",{className:i.root},r.a.createElement(c.a,{variant:"h3",className:i.team},"Team A"),r.a.createElement("div",{className:i.playerDiv},t.length>0&&t.map((function(e,t){return r.a.createElement(c.a,{key:t,variant:"h4",draggable:!0,onDragOver:function(e){return l(e)},onDrop:function(t){return u(0,e)},onDragStart:function(t){return s(0,e)},onTouchStart:function(t){return s(0,e)},onTouchMove:function(e){return l(e)},onTouchEnd:function(t){return u(0,e)},className:i.players},e)}))))},C=Object(i.a)((function(e){return{root:{width:"50%",height:"40rem",padding:"2rem",position:"relative"},team:{backgroundColor:"#f3f3f3ff",padding:"1.5rem"},players:{padding:function(e){return e.isPC?"2rem":"2rem 0"},fontSize:function(e){return!e.isPC&&"1.8rem"}},playerDiv:{position:"absolute",top:"60%",left:"50%",transform:"translate(-50%, -50%)"}}})),P=function(e){var t=e.teamB,a=e.swap,n=e.firstSwap,o=e.isPC,i=C({isPC:o}),l=function(e){e.preventDefault()},s=function(e,t){n(t)},u=function(e,t){a(t)};return r.a.createElement("div",{className:i.root},r.a.createElement(c.a,{variant:"h3",className:i.team,draggable:!0},"Team B"),r.a.createElement("div",{className:i.playerDiv},t.length>0&&t.map((function(e,t){return r.a.createElement(c.a,{key:t,variant:"h4",draggable:!0,onDragOver:function(e){return l(e)},onDrop:function(t){return u(0,e)},onDragStart:function(t){return s(0,e)},onTouchStart:function(t){return s(0,e)},onTouchMove:function(e){return l(e)},onTouchEnd:function(t){return u(0,e)},className:i.players},e)}))))},D=Object(i.a)((function(e){return{root:{padding:function(e){return e.isPC?"2rem":"0"},display:"flex",height:"50rem"},players:{padding:function(e){return e.isPC?"3.5rem":"4rem 3.5rem"}},playerDiv:{width:"50%"}}})),x=function(e){var t=e.players,a=(e.isPC,D(e));return r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.playerDiv},t.length>0&&t.slice(0,Math.ceil(t.length/2)).map((function(e,t){return r.a.createElement(c.a,{key:t,variant:"h3",className:a.players},e)}))),r.a.createElement("div",{className:a.playerDiv},t.length>0&&t.slice(Math.ceil(t.length/2),t.length).map((function(e,t){return r.a.createElement(c.a,{key:t,variant:"h3",className:a.players},e)}))))};function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S=Object(i.a)((function(e){return{root:{width:function(e){return e.isPC?"50%":"90%"},margin:"2rem auto",boxShadow:"0px 0px 17px 1px #1D1F26",backgroundColor:"#fff",border:"0.1rem solid #000",height:function(e){return e.isPC?"50rem":"48rem"},position:"relative"},button:{fontSize:"2.4rem",width:function(e){return e.isPC?"45%":"50%"},backgroundColor:"#0b5394",boxShadow:"0px 0px 11px 1px #1D1F26",color:"#fff",marginBottom:"1.2rem",fontWeight:300,textTransform:"capitalize","&:hover":{backgroundColor:"#073763ff"}},cowputer:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},herds:{display:"flex",flexDirection:"column",padding:0},teamDiv:{borderBottom:"0.2rem solid #000",display:"flex"},buttonDiv:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"50%",margin:"0 auto",marginBottom:"1.2rem",flexDirection:function(e){return!e.isPC&&"column"}}}})),k=function(e){var t=Object(n.useContext)(o.a),a=t.socket,i=t.currentGame,l=t.setCurrentGame,s=e.players,u=e.mode,m=e.roomId,f=Object(y.a)("(min-width:768px)",{noSsr:!0}),d=S(N(N({},e),{},{isPC:f}));return r.a.createElement(n.Fragment,null,r.a.createElement(v.a,{className:d.root},function(e,t,a){var o=S({isPc:t}),i=Object(n.useState)([]),l=h()(i,2),s=l[0],u=l[1],m=Object(n.useState)(""),f=h()(m,2),d=f[0],v=f[1];Object(n.useEffect)((function(){u(a)}),[a]);var y=function(e){var t=s.indexOf(d),a=s.indexOf(e),n=p()(s),r=[n[a],n[t]];n[t]=r[0],n[a]=r[1],u(n)};return"cowputer"===e?r.a.createElement(g.a,{className:o.cowputer},r.a.createElement(c.a,{variant:"h2"},"All players ready!"),r.a.createElement(c.a,{variant:"h4"},"(It's just you)")):"herds"===e?r.a.createElement(g.a,{className:o.herds},r.a.createElement("div",{className:o.teamDiv},r.a.createElement(O,{teamA:s.slice(0,4),swap:y,firstSwap:v,isPC:t}),r.a.createElement(P,{teamB:s.slice(4,8),swap:y,firstSwap:v,isPC:t})),r.a.createElement(b.a,{className:o.button,onClick:function(){for(var e=p()(s),t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}u(e)},style:{width:t?"40%":"80%",boxShadow:"none",margin:"0 auto",marginTop:t?"2rem":"1rem"}},"Randomize Herds")):"bullfight"===e?r.a.createElement(g.a,null,s.length>0&&r.a.createElement(x,{players:s,isPC:t})):r.a.createElement(g.a,{className:o.cowputer},r.a.createElement(c.a,{variant:"h2"},"Uh oh! Looks like you've navigated to a page that doesn't exist."),r.a.createElement(E.c,{to:"/join",exact:!0,style:{textDecoration:"none"}},r.a.createElement(c.a,{variant:"h4"},"Go back")))}(u,f,s)),r.a.createElement("div",{className:d.buttonDiv},r.a.createElement(b.a,{className:d.button,component:E.b,to:"/"},"Leave Lobby"),r.a.createElement(b.a,{className:d.button,component:E.b,to:"/".concat(u,"/").concat(m),onClick:function(){return function(e,t,a){"cowputer"===e&&(l(N(N({},i),{},{currentRound:1})),a.emit("createWord",t))}(u,m,a)}},"Start Game")))};t.default=function(e){var t=Object(n.useContext)(o.a),a=t.subHeader,i=t.setSubHeader,c=t.users;return Object(n.useEffect)((function(){i("Playing ".concat(e.match.params.mode))}),[a]),r.a.createElement("div",null,r.a.createElement(s,{data:"Round Up Room"}),r.a.createElement(k,{players:c,mode:e.match.params.mode,roomId:e.match.params.roomId}))}}}]);
//# sourceMappingURL=14.bundle.js.map