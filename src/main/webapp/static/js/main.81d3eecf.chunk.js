(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{37:function(e,t,n){},72:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),i=n.n(r),a=n(5),c=n.n(a),s=(n(37),n(25)),l=n(26),u=n(30),h=n(29);function f(){return Object(o.jsx)("h2",{style:{fontFamily:"monospace",fontWeight:"bolder",fontSize:"250%",textDecoration:"underline overline",color:"#A35CFF",backgroundColor:"#F3FFE1"},align:"center",id:"authors",children:"Mike Lavlinskiy and Olga Ilinskaya production, var. 67125, P3214"})}var d=n(11),j=n(14),g={login:localStorage.getItem("login")};var b=Object(j.b)((function(e,t){switch(t.type){case"change":return localStorage.setItem("login",t.value),{login:t.value};default:return e}}),g),p=n(20),v=n(10);var x=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)(""),c=Object(d.a)(a,2),s=c[0],l=c[1];return Object(o.jsx)("div",{className:"login_form",children:Object(o.jsxs)("form",{style:{fontFamily:"monospace",fontWeight:"bolder",fontSize:"170%",color:"#1e154a"},children:["Username=",Object(o.jsx)(p.InputText,{type:"text",id:"username",value:n,onChange:function(e){return i(e.target.value)}}),"Password=",Object(o.jsx)(p.InputText,{type:"password",id:"password",value:s,onChange:function(e){return l(e.target.value)}}),Object(o.jsx)(v.Button,{type:"button",onClick:function(e){var t={login:n,password:s},o=[];for(var r in t)o.push(r+"="+t[r]);console.log(o),o="?"+o.join("&"),fetch("/register"+o,{method:"POST"}).then((function(e){return e.json().then((function(t){e.ok?(console.log(t),console.log(t.login)):alert("\u041e\u0448\u0438\u0431\u043a\u0430!")}))}))},children:"Sign Up"}),Object(o.jsx)(v.Button,{type:"button",onClick:function(e){var t={login:n,password:s},o=[];for(var r in t)o.push(r+"="+t[r]);console.log(o),o="?"+o.join("&"),fetch("/login"+o,{method:"POST"}).then((function(e){return e.json().then((function(t){e.ok?(console.log(t),console.log(t.login),b.dispatch({type:"change",value:t.login})):alert("\u041e\u0448\u0438\u0431\u043a\u0430!")}))}))},children:"Log In"})]})})},m=n(15);var O=function(e){return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{id:"form",children:["X=",Object(o.jsx)(m.InputNumber,{value:e.x_form,onValueChange:function(t){return e.setX(t.value)},mode:"decimal",min:-3,max:3,minFractionDigits:1,maxFractionDigits:5,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 X(-3 .. 3)"}),"Y=",Object(o.jsx)(m.InputNumber,{value:e.y_form,onValueChange:function(t){return e.setY(t.value)},mode:"decimal",min:-3,max:3,minFractionDigits:1,maxFractionDigits:5,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 Y(-3 .. 3)"}),"R=",Object(o.jsx)(m.InputNumber,{value:e.r_form,onValueChange:function(t){return e.setR(t.value)},mode:"decimal",min:0,max:3,minFractionDigits:1,maxFractionDigits:5,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 R(0 .. 3)"}),Object(o.jsx)(v.Button,{type:"button",onClick:function(){var t={login:b.getState().login,x:e.x_form,y:e.y_form,r:e.r_form},n=[];for(var o in t)n.push(o+"="+t[o]);console.log(n),n="?"+n.join("&"),e.validate()&&fetch("/point"+n,{method:"POST"}).then((function(t){return t.text().then((function(t){console.log(JSON.parse(t)),e.setChecks(JSON.parse(t))}))}))},icon:"pi",children:"OK"})]})})};var k=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(x,{})})};var y=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("button",{id:"but",type:"button",onClick:function(e){b.dispatch({type:"change",value:null}),console.log("\u0431\u0430\u0431\u0430\u043b\u0438\u0442\u0438")},children:"logout"})})},S=n(28),F=n(12);n(71);var T=function(e){var t=Object(o.jsx)(v.Button,{id:"button1",type:"button",icon:"pi pi-cloud",children:"\u25c0\ufe0f"}),n=Object(o.jsx)(v.Button,{id:"button2",type:"button",icon:"pi pi-cloud",children:"\u25b6\ufe0f"});return Object(o.jsxs)(S.DataTable,{id:"resultTable",value:e.checks,paginator:!0,rows:5,paginatorLeft:t,paginatorRight:n,children:[Object(o.jsx)(F.Column,{header:"X",field:"x"}),Object(o.jsx)(F.Column,{header:"Y",field:"y"}),Object(o.jsx)(F.Column,{header:"R",field:"r"}),Object(o.jsx)(F.Column,{header:"Hit or miss?",field:"result"})]})};function C(e,t,n){e.canvas.width=e.canvas.offsetWidth,e.canvas.height=e.canvas.offsetHeight;var o=e.canvas.width,r=e.canvas.height,i=t+"",a=t/2+"";e.clearRect(0,0,o,r),e.fillStyle="#E8D7FF",e.fillRect(150,50,100,200),e.beginPath(),e.moveTo(250,250),e.lineTo(350,250),e.lineTo(250,50),e.fill(),e.moveTo(250,250),e.arc(250,250,100,Math.PI/2,Math.PI),e.fill(),e.beginPath(),e.strokeStyle="#FF47A0",e.lineWidth=2,e.moveTo(0,250),e.lineTo(500,250),e.stroke(),e.beginPath(),e.strokeStyle="#FF47A0",e.lineWidth=2,e.moveTo(250,500),e.lineTo(250,0),e.stroke(),e.strokeText(a,350,250),e.strokeText(i,450,250),e.strokeText(a,250,350),e.strokeText(i,250,450),e.strokeText(a,150,250),e.strokeText(a,250,150),e.strokeText(i,250,50),e.strokeText(a,350,250),e.strokeText(i,50,250),e.strokeText("Y",250,10),e.strokeText("X",490,250),function(e,t,n){if(null===t)return;var o=t;if(0===o.length)return;for(var r=0;r<o.length;r++)w(o[r].x,o[r].y,o[r].r,o[r].result,e,n)}(i,n,e)}function w(e,t,n,o,r,i){void 0!==e&&void 0!==t&&void 0!==r&&void 0!==n&&(e=e.replace(",","."),t=t.replace(",","."),r=r.replace(",","."),n=n.replace(",","."));var a=parseFloat(r),c=parseFloat(e),s=parseFloat(t),l=parseFloat(n),u=250+200*c/a,h=250-200*s/a;i.fillStyle="false"===o?"#FF2A1F":"#5FFF33",l===a&&(i.beginPath(),i.arc(u,h,5,0,2*Math.PI),i.fill(),i.stroke(),i.closePath())}var I=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){C(t.current.getContext("2d"),e.r,e.checks)}),[C,e]),Object(o.jsx)("div",{children:Object(o.jsx)("canvas",{id:"canvas",ref:t,onClick:function(t){!function(e,t,n,o){var r=parseFloat(t);isNaN(r)&&(r=1);var i=document.getElementById("canvas"),a=(e.pageX-i.offsetLeft-250)*t/200,c=(250-(e.pageY-i.offsetTop))*t/200,s=function(e,t,n){return e>t&&e<n};if(s(r,0,3)&&s(a,-3,3)&&s(c,-3,3)){var l={login:b.getState().login,x:a,y:c,r:r},u=[];for(var h in l)u.push(h+"="+l[h]);console.log(u),u="?"+u.join("&"),fetch("/point"+u,{method:"POST"}).then((function(e){return e.text().then((function(e){console.log(JSON.parse(e)),n(JSON.parse(e))}))}))}}(t,e.r,e.setChecks,e.checks)},style:{width:"500px",height:"500px",textAlign:"center",margin:"0 auto"}})})};n(72);var P=function(){var e=function(e,t,n){return e>t&&e<n},t=Object(r.useState)("0"),n=Object(d.a)(t,2),i=n[0],a=n[1],c=Object(r.useState)("0"),s=Object(d.a)(c,2),l=s[0],u=s[1],h=Object(r.useState)("1"),f=Object(d.a)(h,2),j=f[0],g=f[1],b=Object(r.useState)("null"),p=Object(d.a)(b,2),v=p[0],x=p[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(y,{}),Object(o.jsx)(I,{r:j,setChecks:x,checks:v}),Object(o.jsx)(O,{validate:function(){return e(i,-3,3)&&e(l,-3,3)&&e(j,0,3)},x_form:i,y_form:l,r_form:j,setX:a,setY:u,setR:g,setChecks:x,checks:v,showChecks:void console.log(v)}),Object(o.jsx)(T,{checks:v})]})},N=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.store.subscribe((function(){e.setState({reduxState:e.props.store.getState()})}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"firstPage",style:{backgroundImage:"url(images/wallpaper.jpg)",backgroundSize:"45%",backgroundRepeat:"repeat"},children:[Object(o.jsx)(f,{}),Object(o.jsx)("br",{}),console.log(this.props.store.login),";",null==this.props.store.getState().login?Object(o.jsx)(k,{}):Object(o.jsx)(P,{})]})}}]),n}(r.Component);n(74),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(N,{store:b})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[76,1,2]]]);
//# sourceMappingURL=main.81d3eecf.chunk.js.map