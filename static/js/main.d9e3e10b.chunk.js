(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[7],{87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),a=n.n(i),s=n(28),o=n.n(s),r=n(10),l=n(4),j=n(9),b=n(11),u=n(25),d=n.n(u),O=Object(b.a)((function(){return n.e(2).then(n.bind(null,89))}),{fallback:Object(c.jsx)(j.e,{})}),h=Object(b.a)((function(){return n.e(6).then(n.bind(null,90))}),{fallback:Object(c.jsx)(d.a,{})}),x=Object(b.a)((function(){return n.e(3).then(n.bind(null,93))}),{fallback:Object(c.jsx)(j.e,{})}),f=Object(b.a)((function(){return n.e(0).then(n.bind(null,94))}),{fallback:Object(c.jsx)(j.e,{})}),p=Object(b.a)((function(){return n.e(1).then(n.bind(null,95))}),{fallback:Object(c.jsx)(j.e,{})}),m=Object(b.a)((function(){return n.e(4).then(n.bind(null,91))}),{fallback:Object(c.jsx)(j.e,{})}),v=Object(b.a)((function(){return n.e(5).then(n.bind(null,96))}),{fallback:Object(c.jsx)(j.e,{})});var g=function(){return Object(c.jsx)("div",{id:"app",children:Object(c.jsxs)(r.BrowserRouter,{children:[Object(c.jsx)(j.f,{}),Object(c.jsxs)(l.g,{children:[Object(c.jsx)(l.d,{exact:!0,path:"/",component:O}),Object(c.jsx)(l.d,{exact:!0,path:"/welcome",component:h}),Object(c.jsx)(l.d,{exact:!0,path:"/hub",component:x}),Object(c.jsx)(l.d,{exact:!0,path:"/education",component:f}),Object(c.jsx)(l.d,{exact:!0,path:"/experience",component:p}),Object(c.jsx)(l.d,{exact:!0,path:"/profile",component:m}),Object(c.jsx)(l.d,{exact:!0,path:"/projects",component:v})]})]})})},k=(n(87),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N=function(e){e&&e instanceof Function&&n.e(10).then(n.bind(null,92)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):w(t,e)}))}}(),N()},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return j})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return m})),n.d(t,"d",(function(){return N})),n.d(t,"b",(function(){return y}));var c=n(1),i=n(14),a=n(0),s=(n(10),n(4)),o=function(){var e=Object(s.k)();return Object(c.jsx)(a.Fragment,{children:Object(c.jsxs)("button",{to:"/hub",className:"app-bar-back",onClick:function(){return e.goBack()},children:[Object(c.jsx)(j,{name:"keyboard_arrow_left",className:"icon-36"}),"Back"]})})},r=n(35),l=function(e){var t=e.back,n=Object(r.a)(60),s=Object(a.useState)(!1),l=Object(i.a)(s,2),j=l[0],b=l[1];return Object(a.useEffect)((function(){b(n>=40)}),[n]),Object(c.jsx)(a.Fragment,{children:Object(c.jsx)("header",{className:"app-bar "+(j?"is-collapsed":""),children:t?Object(c.jsx)(o,{}):Object(c.jsx)("img",{src:"logo192.png",height:"40",width:"40",alt:"app-logo",className:"app-bar-logo"})})})},j=function(e){var t=e.className,n=void 0===t?"":t,i=e.name;return Object(c.jsx)("i",{className:"icon "+n,children:i})},b=n(29),u=n.n(b),d=(n(65),function(e){var t=e.color,n=void 0===t?"#2196F3":t,i=e.height,a=void 0===i?40:i,s=e.width,o=void 0===s?80:s;return Object(c.jsx)("div",{className:"loading",children:Object(c.jsx)("div",{className:"loading-inner",children:Object(c.jsx)(u.a,{type:"Bars",color:n,height:a,width:o})})})}),O=n(30),h=n(31),x=n(36),f=n(34),p=function(e){Object(x.a)(n,e);var t=Object(f.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),n}(a.Component),m=Object(s.o)(p),v=(n(13),n(32),n(81),n(82),n(33)),g=n.n(v),k=(n(83),function(e){return Object(c.jsxs)("div",{className:"launcher-text-animation",children:[Object(c.jsx)("span",{children:"Dream"}),Object(c.jsx)("span",{children:"Design"}),Object(c.jsx)("span",{children:"Develop"})]})}),w=function(e){var t=e.start,n=e.shape;return Object(c.jsxs)("div",{className:"launcher-background "+(t?" is-started":""),children:["squares"===n&&Object(c.jsxs)("ul",{className:"squares",children:[Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{})]}),"circles"===n&&Object(c.jsxs)("ul",{className:"circles",children:[Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{})]}),"rings"===n&&Object(c.jsxs)("ul",{className:"rings",children:[Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{})]})]})},N=function(e){var t=e.title,n=e.className,s=void 0===n?"":n,o=e.subtitle,r=e.logo,l=Object(a.useState)(!1),j=Object(i.a)(l,2),b=j[0],u=j[1];return Object(c.jsxs)("div",{className:"launcher "+s+(b?" is-started":""),children:[Object(c.jsx)(w,{start:b,shape:"squares"}),Object(c.jsxs)("div",{className:"launcher-content",children:[!!r&&Object(c.jsx)("img",{className:"launcher-logo",src:r,alt:"dsk_logo"}),Object(c.jsxs)("h2",{className:"launcher-title",children:[t,!!o&&Object(c.jsx)("small",{className:"launcher-subtitle",children:o})]}),Object(c.jsx)(k,{})]}),Object(c.jsx)("div",{className:"launcher-action",children:Object(c.jsx)(g.a,{delay:9e3,to:"/welcome",clickAction:function(){return u(!0)},replace:!1,children:Object(c.jsx)(y,{icon:"play_arrow",className:"launcher-button center"})})})]})},y=function(e){var t=e.icon,n=e.className,i=void 0===n?"":n,a=e.onClick;return Object(c.jsx)("button",{className:"floating-action-button "+i,onClick:a,children:Object(c.jsx)(j,{name:t})})}}},[[88,8,9]]]);
//# sourceMappingURL=main.d9e3e10b.chunk.js.map