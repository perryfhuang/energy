(this["webpackJsonpmomentum-clone"]=this["webpackJsonpmomentum-clone"]||[]).push([[0],{30:function(e,t,n){e.exports=n(60)},35:function(e,t,n){},36:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),c=n.n(o),l=(n(35),n(2)),i=(n(36),n(9)),u=n(8),p=n.n(u),m=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),o=n[0],c=n[1];Object(a.useEffect)((function(){p()({url:"https://api.unsplash.com/photos/random",method:"GET",params:{collections:"1065396"},headers:{Authorization:"Client-ID yk23mYmfN4Xl5vnoDvdHhIw3F_VRVUHH3ITwz-EzRrk"}}).then((function(e){return c(e.data.urls.regular)&&console.log(e)})).catch(console.error)}),[]);var l={background:"black url(".concat(o,") no-repeat center center/cover"),position:"fixed",width:"100%",height:"100%",top:"0",left:"0",padding:"0",margin:"0",display:"flex",alignItems:"center",justifyContent:"center"};return r.a.createElement("div",{style:l},e.children)},s=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),o=n[0],c=n[1];Object(a.useEffect)((function(){p()("https://api.openweathermap.org/data/2.5/weather?id=4930956&units=imperial&appid=781a567418681e7ce8ccb1e883108120").then((function(e){return c(e.data.main.temp)})).catch(console.error)}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{fontSize:"23.4px",color:"white",position:"fixed",top:"11.5px",right:"20px",padding:"0",margin:"0",textShadow:"2px 2px 4px #000000"}},Math.round(o),"\xb0F"),r.a.createElement("p",{style:{color:"white",fontSize:"11.7px",position:"fixed",top:"40px",right:"20px",padding:"0",margin:"0",textShadow:"2px 2px 4px #000000"}},"Boston"))},h=n(28),d=n.n(h),f={color:"white",fontSize:"121px",textShadow:"5px 5px 4px #000000"},x=function(){return r.a.createElement("h1",{style:f},d()().format("h:mm A"))},E=n(62),b=n(63),g=n(64),w=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(),l=Object(i.a)(c,2),u=l[0],m=l[1];Object(a.useEffect)((function(){p()({url:"https://type.fit/api/quotes",method:"GET"}).then((function(e){var t=Math.ceil(1644*Math.random());o(e.data[t].text),m(e.data[t].author)})).catch(console.error)}),[]);return r.a.createElement(E.a,null,r.a.createElement(b.a,null,r.a.createElement(g.a,null,r.a.createElement("p",{style:{color:"white",position:"absolute",left:"25%",fontSize:"18px",bottom:"20px",margin:"0 auto",width:"50%",textAlign:"center",textShadow:"2px 2px 4px #000000"}},' "',n,'" ',r.a.createElement("br",null),u?r.a.createElement("span",{style:{color:"e3e3e3",fontSize:"14px",textShadow:"2px 2px 4px #000000"}},"- ",u):null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{onClick:function(){document.querySelector("i").classList.add("newQuote"),setTimeout((function(){return document.querySelector("i").classList.remove("newQuote")}),200),p()({url:"https://type.fit/api/quotes",method:"GET"}).then((function(e){var t=Math.ceil(1644*Math.random());o(e.data[t].text),m(e.data[t].author)})).catch(console.error)}},r.a.createElement("i",{className:"fas fa-redo"}))))))};var S=function(){return r.a.createElement("div",null,r.a.createElement(l.a,{exact:!0,path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null,r.a.createElement(x,null)),r.a.createElement(s,null),r.a.createElement(w,null))}}))},v=n(14);c.a.render(r.a.createElement(v.a,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.f6c4c5a7.chunk.js.map