(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5240],{41532:function(e,t,n){"use strict";var r=n(59499),i=n(17674),l=n(65988),o=n.n(l),a=n(67294),c=n(41850),u=n(2929),s=n(35944);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.title,n=void 0===t?"Sign up":t,r=e.description,l=void 0===r?"Code, create, and learn together on Replit":r,d=e.onSuccess,p=void 0===d?function(){}:d,h=e.onFailure,m=void 0===h?function(){}:h,g=e.onAnonSuccess,Z=void 0===g?function(){}:g,v=e.showLoginFirst,y=void 0!==v&&v,b=e.isTeacher,x=void 0!==b&&b,w=e.toggleTeacher,j=void 0===w?function(){}:w,O=e.allowAnon,k=void 0!==O&&O,S=e.source,C=a.useState(y),B=(0,i.Z)(C,2),P=B[0],T=B[1];return(0,s.BX)("div",{className:"jsx-845344649 auth-modal",children:[(0,s.BX)(c.gC,{align:"center",spacing:2,children:[(0,s.tZ)("div",{className:"jsx-845344649 auth-modal-title",children:n}),(0,s.tZ)("div",{className:"jsx-845344649 auth-modal-description",children:l}),(0,s.tZ)(u.Z,{onChangeAuth:function(){T(!P)},isTeacher:x,isLogin:P,onSubmit:function(e){"error"in e?m(e):"user"in e&&p(f(f({},e),{},{isLogin:P}))},toggleTeacher:j,source:S}),k&&(0,s.tZ)("div",{className:"jsx-845344649 auth-modal-anon",children:(0,s.tZ)("a",{onClick:Z,className:"jsx-845344649",children:"continue as Anonymous"})})]}),(0,s.tZ)(o(),{id:"845344649",children:[".auth-modal.jsx-845344649{max-width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:var(--space-32) var(--space-16);}",".title-container.jsx-845344649{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:var(--space-16);}",".auth-modal-title.jsx-845344649{text-align:center;color:var(--foreground-default);font-size:var(--font-size-header-big);font-weight:var(--font-weight-medium);}",".auth-modal-description.jsx-845344649{text-align:center;color:var(--foreground-dimmer);font-size:var(--font-size-subhead-default);}",".auth-modal-anon.jsx-845344649{margin-top:14px;font-size:14px;}",".auth-modal-anon.jsx-845344649 a.jsx-845344649{color:var(--accent-primary-default);-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}"]})]})}},74501:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(17674),i=n(67294);function l(e,t){var n=i.useState(e),l=(0,r.Z)(n,2),o=l[0],a=l[1];return i.useEffect((function(){var n=setTimeout((function(){a(e)}),t);return function(){clearTimeout(n)}}),[e]),o}},14902:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r=n(50029),i=n(87794),l=n.n(i),o=n(67294),a=n(84470),c=n(90682),u=n(89788),s=n(2736),d=n(91462),f=n(90116),p=n(11163),h=n(50988),m=n(74501),g=n(62837);function Z(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){a=!0,l=e},f:function(){try{o||null==n.return||n.return()}finally{if(a)throw l}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=n(59499),b=n(41664),x=n(73133),w=n(35944);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,y.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=(0,s.K)("a");function S(e){var t=e.categories,n=e.activeCategory;return(0,w.tZ)(s.Z,{css:[d.l0.flex.row,d.l0.justify.center,{margin:"calc(".concat(-1*d.TV.space4,")"),flexWrap:"wrap"},"",""],children:t.map((function(e){return(0,w.tZ)(s.Z,{css:[d.l0.p(4),""],children:(0,w.tZ)(b.default,O(O({passHref:!0},e.link),{},{children:(0,w.tZ)(k,{children:(0,w.tZ)(u.Z,{elevated:!0,css:[d.l0.p(8),d.l0.minWidth(42),d.l0.borderRadius(16),d.l0.align.center,"color:inherit;",n===e.slug&&{backgroundColor:d.TV.foregroundDefault,color:d.TV.backgroundDefault},""],children:(0,w.tZ)(x.x,{children:e.title})})})}))},e.slug)}))})}var C=n(70917),B=n(42750),P=n(7903),T=n(99996),A=n(34399),I=n(13634),V=(0,s.K)("input"),X=(0,C.iv)([B.gU.filled,d.l0.p(8),{color:d.TV.foregroundDefault,border:"0 none",outline:"0 none",fontSize:d.TV.fontSizeDefault,lineHeight:"16px",display:"block",width:"100%","::placeholder":{color:d.TV.foregroundDimmer},":not([disabled])":{cursor:"text"}}],"","");function E(e){var t,n=e.searchInputValue,r=e.setSearchInputValue;return(0,w.BX)(s.Z,{css:(0,C.iv)((t={},(0,y.Z)(t,"@media (max-width: ".concat(T.j.mobileMax,"px)"),[d.l0.colWithGap(16)]),(0,y.Z)(t,"@media (min-width: ".concat(T.j.mobileMax+1,"px)"),[d.l0.rowWithGap(8),d.l0.align.start,d.l0.justify.spaceBetween]),t),"",""),children:[(0,w.BX)(s.Z,{css:[d.l0.flex.growAndShrink(1),d.l0.colWithGap(4),"",""],children:[(0,w.tZ)(x.x,{variant:"headerBig",children:"Templates"}),(0,w.tZ)(x.x,{variant:"subheadBig",color:"dimmer",multiline:!0,children:"Use templates as the starting point for your next project"})]}),(0,w.BX)(s.Z,{css:(0,C.iv)((0,y.Z)({position:"relative"},"@media (min-width: ".concat(T.j.mobileMax+1,"px)"),[d.l0.flex.row,d.l0.align.start,d.l0.justify.end,d.l0.width(220)]),"",""),children:[(0,w.tZ)(V,{value:n,onChange:function(e){return r(e.currentTarget.value)},placeholder:"Search templates",css:X}),(0,w.tZ)(s.Z,{css:[d.l0.center,d.l0.pr(n?4:8),"position:absolute;top:0;right:0;height:100%;",""],children:n?(0,w.tZ)(I.Z,{alt:"Clear",onClick:function(){return r("")},children:(0,w.tZ)(A.Z,{})}):(0,w.tZ)(P.Z,{})})]})]})}var W=n(20820),_=n(94830),D=n(53200),L=n(61790);function G(e){var t,n=e.title,r=e.isOfficial,i=e.repls,l=e.isExpandlable,a=e.onReplLinkClick,c=(0,o.useState)(!1),u=c[0],f=c[1],p=u||!l?i:i.slice(0,6);return(0,w.BX)(s.Z,{css:[d.l0.colWithGap(32),"",""],children:[(0,w.BX)(s.Z,{css:[d.l0.colWithGap(16),"",""],children:[(0,w.BX)(s.Z,{css:[d.l0.rowWithGap(8),d.l0.align.center,"",""],children:[(0,w.tZ)(x.x,{variant:"subheadBig",children:n}),r?(0,w.tZ)(D.Z,{big:!0}):null]}),(0,w.tZ)(s.Z,{css:[d.l0.flex.growAndShrink(1),{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:d.TV.space32,gridAutoFlow:"dense"},"",""],children:p.map((function(e){return(0,w.tZ)(W.Z,{repl:e,onReplLinkClick:function(t){return a(t,e)}},e.id)}))})]}),(0,w.tZ)(s.Z,{css:[d.l0.center,"",""],children:i.length>p.length||i.length>6&&u?(0,w.BX)(s.Z,{css:[d.l0.colWithGap(4),d.l0.center,d.l0.width("100%"),(t={},(0,y.Z)(t,"@media (min-width: ".concat(T.j.mobileMax,"px)"),d.l0.maxWidth("50%")),(0,y.Z)(t,"@media (min-width: ".concat(T.j.tabletMin,"px)"),d.l0.maxWidth("calc(33% - ".concat(d.TV.space16,")"))),t),"",""],children:[u?(0,w.tZ)(I.Z,{tooltipHidden:!0,alt:"Show less",onClick:function(){return f(!1)},children:(0,w.tZ)(L.Z,{rotate:180})}):null,(0,w.tZ)(_.zx,{css:[d.l0.justify.center,"",""],outlined:!0,stretch:!0,onClick:function(){return f((function(e){return!e}))},text:u?"Show less":"Show more"}),u?null:(0,w.tZ)(I.Z,{tooltipHidden:!0,alt:"Show more",onClick:function(){return f(!0)},children:(0,w.tZ)(L.Z,{})})]}):null})]})}var N=n(5699),R=n(58435),z=n(59259),M=n(41532);function q(){var e=function(){var e=(0,o.useState)(""),t=e[0],n=e[1],r=(0,h.B_i)(),i=r.data,l=r.loading,a=r.error,c=(0,p.useRouter)(),u=c.query.category?c.query.category.toString():"all",s=(0,o.useMemo)((function(){if(!i)return null;var e,t=[],n=[],r=Z(i.templateRepls);try{for(r.s();!(e=r.n()).done;){var l,o=e.value;"Repl"===o.__typename&&("replit"===(null===(l=o.owner)||void 0===l?void 0:l.username)?t.push(o):n.push(o))}}catch(a){r.e(a)}finally{r.f()}return{official:t,community:n}}),[i]),d=(0,o.useMemo)((function(){return s?[{slug:"all",title:"All",link:{href:{pathname:c.pathname},as:{pathname:c.asPath.split("?")[0]}}}].concat((0,f.Z)(Array.from(new Set([].concat((0,f.Z)(s.official),(0,f.Z)(s.community)).map((function(e){return e.templateCategory})))).filter((function(e){return Boolean(e)})).map((function(e){return{slug:e,title:(0,g.Z)(e),link:{href:{pathname:c.pathname,query:{category:e}},as:{pathname:c.asPath.split("?")[0],query:{category:e}}}}})))):[]}),[s,c]),v=(0,m.Z)(t,200),y=(0,o.useMemo)((function(){if(!s)return null;var e=v?v.toLowerCase():null,t=function(t){return("all"===u||t.templateCategory===u)&&(!e||t.title.toLowerCase().includes(e)||Boolean(null===(n=t.description)||void 0===n?void 0:n.toLowerCase().includes(e)));var n};return[{title:"Official templates",repls:s.official.filter(t),isExpanded:!1,isOfficial:!0},{title:"Community templates",repls:s.community.filter(t),isExpanded:!1,isOfficial:!1}].filter((function(e){return e.repls.length}))}),[s,v,u]);return{setSearchInputValue:n,searchInputValue:t,activeCategory:u,categories:d,sections:y,loading:l,error:a,isLoggedIn:Boolean(null===i||void 0===i?void 0:i.currentUser)}}(),t=e.categories,n=e.activeCategory,r=e.sections,i=e.loading,l=e.error,a=e.searchInputValue,v=e.setSearchInputValue,y=e.isLoggedIn,b=(0,o.useState)(null),j=b[0],O=b[1];return(0,w.tZ)(c.Z,{title:"Templates",description:"Kickstart your website, app, or game by remixing templates",children:(0,w.BX)(u.Z,{css:[d.l0.py(32),d.l0.px(16),d.l0.align.center,"",""],children:[(0,w.BX)(s.Z,{css:[d.l0.colWithGap(32),d.l0.maxWidth(1e3),d.l0.width("100%"),"",""],children:[(0,w.BX)(s.Z,{css:[d.l0.colWithGap(16),"",""],children:[(0,w.tZ)(S,{categories:t,activeCategory:n}),(0,w.tZ)(E,{setSearchInputValue:v,searchInputValue:a})]}),(0,w.BX)(s.Z,{css:[d.l0.colWithGap(32),"",""],children:[i?(0,w.tZ)(s.Z,{css:[d.l0.center,d.l0.py(64),"",""],children:(0,w.tZ)(N.Z,{size:24})}):null,l?(0,w.tZ)(s.Z,{css:[d.l0.center,d.l0.py(64),"",""],children:(0,w.tZ)(x.x,{multiline:!0,children:l.message})}):null,r?r.map((function(e){var t=e.title,r=e.repls,i=e.isOfficial;return(0,w.tZ)(G,{title:t,repls:r,isOfficial:i,isExpandlable:"all"===n&&!a,onReplLinkClick:function(e,t){e.preventDefault(),O({replId:t.id,needsAuth:!y})}},t)})):null]})]}),(0,w.BX)(z.Z,{onRequestClose:function(){return O(null)},isOpen:null!==j,children:[null!==j&&void 0!==j&&j.needsAuth?(0,w.tZ)(M.Z,{title:"Sign up or log in to use this template",onSuccess:function(){O({replId:j.replId,needsAuth:!1})},source:"templates"}):null,!j||null!==j&&void 0!==j&&j.needsAuth?null:(0,w.tZ)(R.Z,{initialSelectedLanguageOrReplId:j.replId})]})]})})}q.getInitialProps=function(){var e=(0,r.Z)(l().mark((function e(t){var n,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.req,r=t.store,e.next=3,(0,a.Z)(n,r);case 3:return e.abrupt("return",{});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var H=q},52525:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/templates",function(){return n(14902)}])}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[5762,8350,4012,7262,8966,682,4686,2929,9774,2888,179],(function(){return t(54310),t(52525)}));var n=e.O();_N_E=n}]);
//# sourceMappingURL=templates-41a3b272623813b7.js.map