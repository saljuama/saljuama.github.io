(this["webpackJsonpsaljuama.github.io"]=this["webpackJsonpsaljuama.github.io"]||[]).push([[0],{175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),o=n(27),i=n.n(o),r=n(70),s=n(12),l=n(31),j=Object(l.b)({name:"articles",initialState:{},reducers:{}}).reducer,h=Object(l.a)({reducer:{articles:j}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(3),b=n(67),d=(Object(b.a)(),"HOME"),m="BLOG",g="ABOUT",O={"/":d,"/blog":m,"/about":g},f=(n(81),function(){var e=Object(u.f)(),t=function(t){return t===O[e.pathname]?"NavLink active":"NavLink"};return Object(c.jsxs)("nav",{className:"NavigationBar",children:[Object(c.jsx)(s.b,{to:"/","data-testid":"home-link",className:t(d),children:"Home"}),Object(c.jsx)(s.b,{to:"/blog","data-testid":"blog-link",className:t(m),children:"Blog"}),Object(c.jsx)(s.b,{to:"/about","data-testid":"about-link",className:t(g),children:"About me"})]})}),p=(n(83),function(){return Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"Home page"})})}),x=n(71),v=n(68),k=n.n(v),w=n(30),y=n.n(w),N=(n(43),n(69),function(e){return"/".concat(e.category,"/").concat(e.markdown)}),B=[{category:"high-performing-teams",title:"What is High Performance?",markdown:"what-is-high-performance.md"},{category:"high-performing-teams",title:"The role of diversity in high performing teams",markdown:"how-diversity-contributes-to-high-performance.md"},{category:"agile-engineering",title:"Feature Toggles and You!",markdown:"feature-toggles-and-you.md"},{category:"agile-engineering",title:"Breaking it into small pieces",markdown:"breaking-it-into-small-pieces.md"}],A=(n(175),function(){var e=Object(u.h)().path;return Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:e,component:E}),Object(c.jsx)(u.a,{path:"".concat(e,"/:category/:article"),component:H})]})}),E=function(){var e=Object(u.h)().url,t=B;return Object(c.jsxs)("div",{className:"Blog",children:[Object(c.jsx)("h1",{children:"Blog main page"}),t.map((function(t){var n=N(t);return Object(c.jsx)(s.b,{to:"".concat(e).concat(n),children:t.title},n)}))]})},H=function(){var e=Object(u.g)(),t=e.category,n=e.article,o=Object(a.useState)(void 0),i=Object(x.a)(o,2),r=i[0],s=i[1];return Object(a.useEffect)((function(){y.a.get("https://raw.githubusercontent.com/saljuama/articles/main/".concat(t,"/").concat(n)).then((function(e){return s(e.data)})).catch((function(){return s("# Error")}))}),[r,t,n]),Object(c.jsx)("div",{className:"Article",children:Object(c.jsx)(k.a,{children:r})})},L=(n(176),function(){return Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"About page"})})}),T=function(){return Object(c.jsx)("div",{children:"Not found!"})},W=(n(177),function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(f,{}),Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/",component:p}),Object(c.jsx)(u.a,{path:"/blog",component:A}),Object(c.jsx)(u.a,{path:"/about",component:L}),Object(c.jsx)(u.a,{path:"*",component:T})]})]})});n(178);i.a.render(Object(c.jsx)(r.a,{store:h,children:Object(c.jsx)(s.a,{children:Object(c.jsx)(W,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},81:function(e,t,n){},83:function(e,t,n){}},[[179,1,2]]]);
//# sourceMappingURL=main.7ffb749e.chunk.js.map