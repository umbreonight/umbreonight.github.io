(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[5],{18:function(e,c,t){"use strict";t.d(c,"a",(function(){return i})),t.d(c,"b",(function(){return a})),t.d(c,"c",(function(){return B})),t.d(c,"d",(function(){return l})),t.d(c,"e",(function(){return O})),t.d(c,"f",(function(){return h})),t.d(c,"g",(function(){return k})),t.d(c,"h",(function(){return w})),t.d(c,"i",(function(){return D}));var n=t(1),s=t(0),i=(t(8),function(e){var c=e.logo,t=e.icon;return Object(n.jsx)(s.Fragment,{children:Object(n.jsxs)("header",{className:"app-bar",children:[!!c&&Object(n.jsx)("img",{src:c,alt:"app-logo",className:"app-bar-logo"}),!!t&&Object(n.jsx)(l,{name:"code",className:"icon-36"})]})})}),a=function(e){var c=e.image,t=e.overline,s=e.caption,i=e.title,a=e.children;return Object(n.jsx)("article",{className:"article",children:Object(n.jsxs)("div",{className:"article-header",children:[!!c&&Object(n.jsx)("div",{className:"article-image",children:Object(n.jsx)("img",{src:c,alt:"article-image"})}),Object(n.jsxs)("div",{className:"article-content",children:[!!t&&Object(n.jsx)("span",{className:"overline",children:t}),!!i&&Object(n.jsx)("span",{className:"article-title",children:i}),!!s&&Object(n.jsx)("span",{className:"caption",children:s}),a]})]})})},l=function(e){var c=e.className,t=void 0===c?"":c,s=e.name;return Object(n.jsx)("i",{className:"icon "+t,children:s})},r=t(24),j=t(29),o=t.n(j),b=function(e){return Object(n.jsxs)("div",{className:"launcher-text-animation",children:[Object(n.jsx)("span",{children:"Dream"}),Object(n.jsx)("span",{children:"Design"}),Object(n.jsx)("span",{children:"Develop"})]})},d=function(e){var c=e.start,t=e.shape;return Object(n.jsxs)("div",{className:"launcher-background "+(c?" is-started":""),children:["squares"===t&&Object(n.jsxs)("ul",{className:"squares",children:[Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{})]}),"circles"===t&&Object(n.jsxs)("ul",{className:"circles",children:[Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{})]}),"rings"===t&&Object(n.jsxs)("ul",{className:"rings",children:[Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{}),Object(n.jsx)("li",{})]})]})},O=function(e){var c=e.title,t=e.className,i=void 0===t?"":t,a=e.subtitle,l=e.logo,j=Object(s.useState)(!1),O=Object(r.a)(j,2),u=O[0],x=O[1];return Object(n.jsxs)("div",{className:"launcher "+i+(u?" is-started":""),children:[Object(n.jsx)(d,{start:u,shape:"squares"}),Object(n.jsxs)("div",{className:"launcher-content",children:[!!l&&Object(n.jsx)("img",{className:"launcher-logo",src:l,alt:"dsk_logo"}),Object(n.jsxs)("h2",{className:"launcher-title",children:[c,!!a&&Object(n.jsx)("small",{className:"launcher-subtitle",children:a})]}),Object(n.jsx)(b,{})]}),Object(n.jsx)("div",{className:"launcher-action",children:Object(n.jsx)(o.a,{delay:9e3,to:"/welcome",clickAction:function(){return x(!0)},replace:!1,children:Object(n.jsx)(B,{icon:"play_arrow",className:"launcher-button center"})})})]})},u=t(30),x=t.n(u),h=(t(66),function(e){var c=e.color,t=void 0===c?"#2196F3":c,s=e.height,i=void 0===s?40:s,a=e.width,l=void 0===a?80:a;return Object(n.jsx)("div",{className:"loading",children:Object(n.jsx)("div",{className:"loading-inner",children:Object(n.jsx)(x.a,{type:"Bars",color:t,height:i,width:l})})})}),p=(t(34),t(31)),m=t(32),f=t(36),v=t(35),g=t(4),N=function(e){Object(f.a)(t,e);var c=Object(v.a)(t);function t(){return Object(p.a)(this,t),c.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),t}(s.Component),k=Object(g.o)(N),w=function(e){var c=e.heading;return Object(n.jsx)(s.Fragment,{children:Object(n.jsxs)("div",{className:"section-title",children:[Object(n.jsx)("h2",{children:c}),Object(n.jsx)("div",{className:"section-title-divider"})]})})},C=t(13),y=t(33),F=t.n(y),S=(t(83),t(84),function(e){var c=e.onClick;return Object(n.jsx)("i",{className:"icon icon-36 slick-arrow slick-prev",onClick:c,children:"chevron_left"})}),T=function(e){var c=e.onClick;return Object(n.jsx)("i",{className:"icon icon-36 slick-arrow slick-next",onClick:c,children:"chevron_right"})},D=function(e){var c=e.children,t=e.options,s={dots:!0,infinite:!1,arrows:!1,speed:300,swipe:!0,slidesToShow:1,slidesToScroll:1,autoplay:!1,fade:!1,prevArrow:Object(n.jsx)(S,{}),nextArrow:Object(n.jsx)(T,{}),centerMode:!0,centerPadding:"60px",mobileFirst:!0,responsive:[{breakpoint:940,settings:{centerMode:!0,centerPadding:"60px",slidesToShow:3}},{breakpoint:640,settings:{slidesToShow:1,swipeToSlide:!0}}]},i=Object(C.a)(Object(C.a)({},s),t);return Object(n.jsx)("div",{className:"slider",children:Object(n.jsx)(F.a,Object(C.a)(Object(C.a)({},i),{},{children:c}))})},B=function(e){var c=e.icon,t=e.className,s=void 0===t?"":t,i=e.onClick;return Object(n.jsx)("button",{className:"floating-action-button "+s,onClick:i,children:Object(n.jsx)(l,{name:c})})}},42:function(e,c,t){},87:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t(0),i=t.n(s),a=t(28),l=t.n(a),r=(t(42),t(8)),j=t(4),o=t(18),b=t(11),d=t(10),O=t.n(d),u=Object(b.a)((function(){return t.e(1).then(t.bind(null,88))}),{fallback:Object(n.jsx)(O.a,{})}),x=Object(b.a)((function(){return t.e(4).then(t.bind(null,89))}),{fallback:Object(n.jsx)(O.a,{})}),h=Object(b.a)((function(){return t.e(0).then(t.bind(null,90))}),{fallback:Object(n.jsx)(O.a,{})}),p=Object(b.a)((function(){return t.e(2).then(t.bind(null,93))}),{fallback:Object(n.jsx)(O.a,{})}),m=Object(b.a)((function(){return t.e(3).then(t.bind(null,91))}),{fallback:Object(n.jsx)(O.a,{})});var f=function(){return Object(n.jsx)("div",{id:"app",children:Object(n.jsxs)(r.BrowserRouter,{children:[Object(n.jsx)(o.g,{}),Object(n.jsx)(o.a,{icon:"heart"}),Object(n.jsxs)(j.g,{children:[Object(n.jsx)(j.d,{exact:!0,path:"/",component:u}),Object(n.jsx)(j.d,{exact:!0,path:"/welcome",component:x}),Object(n.jsx)(j.d,{exact:!0,path:"/hub",component:p}),Object(n.jsx)(j.d,{exact:!0,path:"/article",component:h}),Object(n.jsx)(j.d,{exact:!0,path:"/profile",component:m})]})]})})},v=function(e){e&&e instanceof Function&&t.e(8).then(t.bind(null,92)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,i=c.getLCP,a=c.getTTFB;t(e),n(e),s(e),i(e),a(e)}))};l.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),v()}},[[87,6,7]]]);
//# sourceMappingURL=main.4b918011.chunk.js.map