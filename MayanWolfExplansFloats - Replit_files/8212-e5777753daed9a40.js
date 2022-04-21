"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8212],{29072:function(e,t,r){var n=r(65988),a=r.n(n),i=(r(67294),r(5318)),o=r(41850),c=r(35944);t.Z=function(e){return(0,c.BX)("div",{className:"jsx-4026766428 wrap",children:[(0,c.BX)("div",{className:"jsx-4026766428 content",children:[(0,c.BX)("div",{className:"jsx-4026766428 title",children:["Delete ",e.name||e.entityType]}),(0,c.BX)("div",{className:"jsx-4026766428 text",children:["Are you sure you want to delete this ",e.entityType,"? This cannot be undone."]})]}),(0,c.BX)(o.Ug,{spacing:1,justify:"end",children:[(0,c.tZ)(i.Z,{onClick:e.hideModal,autoFocus:!0,children:"Cancel"}),(0,c.BX)(i.Z,{color:"negative",onClick:function(){e.delete(),e.hideModal()},children:["Yes, delete this ",e.entityType]})]}),(0,c.tZ)(a(),{id:"4026766428",children:[".wrap.jsx-4026766428{background-color:var(--background-default);border-radius:var(--border-radius-4);color:var(--foreground-default);}",".title.jsx-4026766428{color:var(--accent-negative-default);font-weight:var(--font-weight-medium);padding-bottom:var(--space-8);}",".wrap.jsx-4026766428{max-width:600px;padding:var(--space-32);display:grid;grid-row-gap:var(--space-16);}",".content.jsx-4026766428{padding-bottom:var(--space-24);}",".buttons.jsx-4026766428{display:grid;grid-row-gap:var(--space-8);}",".title.jsx-4026766428{font-size:20px;}","@media screen and (min-width:400px){.buttons.jsx-4026766428{grid-auto-flow:column;grid-column-gap:var(--space-16);-webkit-box-pack:start;-webkit-justify-content:start;-ms-flex-pack:start;justify-content:start;}.buttons.jsx-4026766428>button:first-child{-webkit-order:1;-ms-flex-order:1;order:1;}}"]})]})}},94910:function(e,t,r){r.d(t,{Z:function(){return _}});var n=r(59499),a=r(17674),i=r(67294),o=r(98883),c=r(10872),l=r(88942),s=r(73133),d=r(41664),u=r(11163),f=r(41951),p=r(2736),m=r(91462),b=r(70917),v=r(42750),g=r(93586),h=r(5318),x=r(35944);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=(0,p.K)("ul"),k=(0,p.K)("li"),O=(0,p.K)("a"),Z=function(e){switch(e){case"small":return 12;case"medium":default:return 16;case"large":return 20}},P=function(e){var t=e.isHighlighted,r=e.isDestructive;return(0,b.iv)([m.l0.rowWithGap(8),m.l0.align.center,m.l0.p(8),m.l0.cursor.pointer,r&&[m.l0.color.accentNegativeDefault],t&&{backgroundColor:v.gU.listItem[":not([disabled])"][":active"].backgroundColor},t&&r&&[m.l0.color.foregroundDefault,m.l0.backgroundColor.accentNegativeDefault]],"","")};function _(e){var t=e.items,r=e.onItemClick,n=e.onOpenChange,b=e.size,v=void 0===b?"medium":b,y=e.orientation,_=(0,u.useRouter)(),N=i.useState(!1),S=(0,a.Z)(N,2),C=S[0],B=S[1],D=(0,g.Z)(n);i.useEffect((function(){D.current&&D.current(C)}),[C,D]);var R=(0,l.L7)({isOpen:C,items:t,onSelectedItemChange:function(e){var t=e.selectedItem;t&&(B(!1),t.link?_.push(t.link.href,t.link.as):r(t))}}),E=R.getToggleButtonProps,I=R.getMenuProps,z=R.highlightedIndex,X=R.getItemProps;return(0,x.BX)(o.Z,{isOpen:C,padding:0,gap:4,zIndex:f.n,placement:"bottom-end",onClickOutside:function(){return B(!1)},children:[(0,x.BX)(p.Z,{children:[(0,x.tZ)(h.Z,j(j({border:!1,filled:!1},E({onClick:function(){return B((function(e){return!e}))}})),{},{children:(0,x.tZ)(c.Z,{size:Z(v),orientation:y})})),(0,x.tZ)(p.Z,j({},I({refKey:"innerRef"})))]}),(0,x.tZ)(w,{css:[m.l0.minWidth(120),m.l0.overflow("hidden"),m.l0.borderRadius(8),"",""],children:t.map((function(e,t){var r=z===t,n=(0,x.BX)(x.HY,{children:[e.icon,(0,x.tZ)(s.x,{css:m.l0.flex.shrink(1),children:e.label})]});return(0,x.tZ)(k,j(j({css:P({isHighlighted:r,isDestructive:e.isDestructive})},X({item:e,index:t,key:"".concat(e.label).concat(t)})),{},{children:e.link?(0,x.tZ)(d.default,j(j({passHref:!0},e.link),{},{children:(0,x.tZ)(O,{css:[m.l0.align.center,m.l0.rowWithGap(8),"color:inherit;"],children:n})})):n}))}))})]})}},88256:function(e,t,r){r.d(t,{Z:function(){return w}});var n=r(17674),a=r(65988),i=r.n(a),o=r(67294),c=r(5318),l=r(41850),s=r(59499),d=r(90116),u=r(50988),f=r(88942),p=r(29060),m=r(94184),b=r.n(m),v=r(54585),g=r(35944);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){var t=e.onTeamSelected,r=e.teamContext,n=(0,u.Dar)(),a=n.data,c=n.loading,l=n.error,s=[];a&&a.currentUser&&(s=[{id:a.currentUser.id,username:a.currentUser.username,image:a.currentUser.image}].concat((0,d.Z)(a.currentUser.teams.filter((function(e){return!e.archived})).filter((function(e){return!e.hideTeamRepls})).map((function(e){var t=e.id,r=e.image,n=e.username,a=e.capabilities;return{id:t,image:r,username:n,isSubscribed:Boolean(null===a||void 0===a?void 0:a.hasValidSubscription)}})))));var m=(0,f.L7)({items:s,onSelectedItemChange:function(e){var r;e.selectedItem&&e.selectedItem.id!==(null===a||void 0===a||null===(r=a.currentUser)||void 0===r?void 0:r.id)?t({id:e.selectedItem.id,hasPrivateRepls:Boolean(e.selectedItem.isSubscribed)}):t(null)}}),h=m.isOpen,y=m.selectedItem,j=m.getToggleButtonProps,w=m.getMenuProps,k=m.highlightedIndex,O=m.getItemProps,Z=m.getLabelProps,P=m.selectItem;return(0,o.useEffect)((function(){if(null!==a&&void 0!==a&&a.currentUser){var e=s.find((function(e){return e.username===r}));P(e||s[0])}}),[null===a||void 0===a?void 0:a.currentUser]),s&&1!==s.length?l?(0,g.BX)("div",{children:["error loading team data $",l]}):c||!y?null:(0,g.BX)("div",{className:"jsx-2768752074 select-team",children:[(0,g.tZ)("label",x(x({},Z()),{},{className:"jsx-2768752074",children:"Select repl owner"})),(0,g.BX)("div",x(x({tabIndex:-1},j()),{},{className:"jsx-2768752074 "+(b()("toggle-button",{open:h})||""),children:[(0,g.BX)("div",{className:"jsx-2768752074 user-item",children:[(0,g.tZ)("div",{className:"jsx-2768752074 icon",children:(0,g.tZ)(p.Z,{url:y.image,size:"inherit"})}),(0,g.tZ)("div",{className:"jsx-2768752074 username",children:y.username})]}),(0,g.tZ)("div",{className:"jsx-2768752074 arrow-icon-wrap",children:(0,g.tZ)(v.e0,{color:"var(--foreground-default)",flipped:h})})]})),(0,g.tZ)("div",x(x({},w()),{},{className:"jsx-2768752074",children:h&&(0,g.tZ)("ul",{className:"jsx-2768752074 menu",children:s.map((function(e,t){return(0,g.BX)("li",x(x({},O({item:e,index:t})),{},{className:"jsx-2768752074 "+(b()("user-item",{focused:t===k,selected:e.id===y.id})||""),children:[(0,g.tZ)("div",{className:"jsx-2768752074 icon",children:(0,g.tZ)(p.Z,{url:e.image,size:"inherit"})}),(0,g.tZ)("div",{className:"jsx-2768752074 username",children:e.username})]}),"".concat(e.id))}))})})),(0,g.tZ)(i(),{id:"2768752074",children:[".select-team.jsx-2768752074{background:var(--background-default);color:var(--foreground-default);width:100%;position:relative;margin-top:var(--space-16);z-index:5;}","label.jsx-2768752074{color:var(--foreground-dimmer);margin-bottom:var(--space-8);display:block;}",".toggle-button.jsx-2768752074{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;cursor:pointer;border:1px solid var(--background-higher);border-radius:var(--border-radius-4);}",".toggle-button.jsx-2768752074:focused{border:1px solid var(--accent-primary-default);}",".toggle-button.open.jsx-2768752074{border:1px solid var(--accent-primary-default);border-bottom:1px solid transparent;border-bottom-right-radius:0;border-bottom-left-radius:0;}",".arrow-icon-wrap.jsx-2768752074{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 10px;width:30px;}",".arrow-icon-wrap.jsx-2768752074>svg{display:block;width:100%;height:auto;}",".menu.jsx-2768752074{max-height:200px;overflow-y:auto;width:100%;margin:0;border:1px solid var(--accent-primary-default);border-top:0;outline:0;position:absolute;z-index:1;padding:var(--space-4);background:var(--background-default);border-bottom-right-radius:var(--border-radius-4);border-bottom-left-radius:var(--border-radius-4);}",".user-item.jsx-2768752074{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:40px;width:100%;cursor:pointer;background:var(--background-default);padding-left:var(--space-8);font-size:var(--font-size-subhead-default);border-radius:var(--border-radius-4);}",".user-item.focused.jsx-2768752074{background:var(--background-highest);color:var(--foreground-default);}",".user-item.selected.jsx-2768752074{background:var(--accent-primary-default);color:var(--white);}",".user-item.jsx-2768752074>.icon.jsx-2768752074{width:24px;min-width:24px;height:24px;min-height:24px;}",".user-item.jsx-2768752074>.username.jsx-2768752074{margin-left:var(--space-16);}"]})]}):null},j=r(84062);function w(e){var t=e.onFork,r=e.hideModal,a=e.initialValue,s=e.teamContext,d=o.useState(null),u=(0,n.Z)(d,2),f=u[0],p=u[1],m=(0,j.Y)(a,(function(e){if(e)return e.length>60?{message:"Must be no longer than 60 characters"}:/[0-9a-zA-Z]/.test(e)?void 0:{message:"Title must contain at least one alphanumeric character"}}));return o.useEffect((function(){m.ref.current&&m.ref.current.focus()}),[m.ref]),(0,g.BX)("form",{onSubmit:function(e){e.preventDefault(),m.error||(t(f,m.value),r())},className:"jsx-4175201198",children:[(0,g.BX)("div",{className:"jsx-4175201198 wrap",children:[(0,g.tZ)("div",{className:"jsx-4175201198 title",children:"Fork Repl"}),(0,g.BX)("div",{className:"jsx-4175201198",children:[(0,g.tZ)("input",{ref:m.ref,placeholder:"Name your repl",onChange:function(e){return m.setValue(e.target.value)},onFocus:function(e){return e.target.select()},value:m.value,onBlur:m.handleBlur,className:"jsx-4175201198 repl-title-input"}),m.error&&(0,g.tZ)("div",{className:"jsx-4175201198 form-error",children:m.error.message})]}),(0,g.tZ)(y,{teamContext:s,onTeamSelected:function(e){p(e?e.id:null)}}),(0,g.BX)(l.Ug,{spacing:1,justify:"end",children:[(0,g.tZ)(c.Z,{onClick:r,autoFocus:!0,children:"Cancel"}),(0,g.tZ)(c.Z,{color:"primary",type:"submit",disabled:!m.value||Boolean(m.error),children:"Confirm"})]})]}),(0,g.tZ)(i(),{id:"4175201198",children:[".wrap.jsx-4175201198{background-color:var(--background-default);border-radius:var(--border-radius-4);color:var(--foreground-default);}",".repl-title-input.jsx-4175201198{-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:var(--font-size-subhead-default);display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:100%;outline:0 none;background-color:transparent;border:1px solid var(--background-highest);margin:0;color:inherit;padding:var(--space-8);border-radius:var(--border-radius-4);-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;}",".form-error.jsx-4175201198{padding-top:7px;color:var(--accent-negative-default);}",".wrap.jsx-4175201198{display:grid;grid-row-gap:25px;}",".title.jsx-4175201198{font-size:var(--font-size-subhead-big);}","@media screen and (min-width:600px){.wrap.jsx-4175201198{padding:75px 50px 75px;}}"]})]})}},40090:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(59499),a=r(17674),i=r(67294),o=r(11163),c=r(3316),l=r(50988),s=r(34324),d=r(86374);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(){var e,t,r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=n.onFork,p=(0,o.useRouter)(),m=(0,c.Z)(),b=m.showError,v=(0,l.BnM)({onCompleted:function(e){var t="Repl"===(null===e||void 0===e?void 0:e.createRepl.__typename)?e.createRepl:null;if(t)if(u&&u(),"/replEnvironment"!==p.pathname&&"/replEnvironmentMobile"!==p.pathname)p.push({pathname:(0,s.Z)(),query:{replUrl:t.url}},{pathname:t.url});else{var r=t.url+(p.query.lite?"?lite=".concat(p.query.lite.toString()):"");window.location.href=r}}}),g=(0,a.Z)(v,2),h=g[0],x=g[1],y="UserError"===(null===(e=x.data)||void 0===e?void 0:e.createRepl.__typename)?null===(t=x.data)||void 0===t?void 0:t.createRepl.message:null===(r=x.error)||void 0===r?void 0:r.message;i.useEffect((function(){y&&b(y)}),[y,b]);var j=i.useCallback((function(e){var t=e.originId,r=e.replReleaseId,n=e.teamId,a=e.title,i=e.trackingData,o=e.forkToPersonal;h({variables:{input:{originId:t,replReleaseId:r,teamId:n,title:a,forkToPersonal:o}}}).then((function(e){var t,n,a,o,c,l="Repl"===(null===(t=e.data)||void 0===t?void 0:t.createRepl.__typename)?e.data.createRepl:null;l&&(0,d.track)(d.events.REPL_CREATED,f(f({isTemplateFork:Boolean(r),isSignup:!1,isOnboarding:!1},i),{},{isForked:!0,isPrivate:l.isPrivate,replId:l.id,isRenamed:!1,language:l.language,isSelfForked:!(null===(n=l.origin)||void 0===n||!n.isOwner),templateReplId:(null===(a=l.source)||void 0===a||null===(o=a.release)||void 0===o||null===(c=o.repl)||void 0===c?void 0:c.id)||void 0}))}))}),[h]),w=!!(x.loading||x.data&&"Repl"===x.data.createRepl.__typename);return[j,{loading:w}]}},84062:function(e,t,r){r.d(t,{Y:function(){return c}});var n=r(17674),a=r(67294),i=r(91296),o=r.n(i);function c(e,t){var r=a.useState(!1),i=(0,n.Z)(r,2),c=i[0],l=i[1],s=a.useState(e),d=(0,n.Z)(s,2),u=d[0],f=d[1],p=a.useState(null),m=(0,n.Z)(p,2),b=m[0],v=m[1],g=a.useState(!1),h=(0,n.Z)(g,2),x=h[0],y=h[1],j=a.useRef(null),w=a.useRef(u);function k(){var e=w.current,r=t(e);return r?(r instanceof Promise?r.then((function(t){w.current===e&&(t?v(t):(v(null),y(!0)))})):v({message:r.message}),r):(v(null),y(!0),r)}var O=a.useRef(o()((function(){return k()}),200));var Z=a.useCallback((function(e){O.current(),O.current.flush()}),[u]);return a.useEffect((function(){return O.current.cancel}),[]),{value:u,error:b,touched:c,setValue:function(e){w.current=e,y(!1),v(null),l(!0),f(e),O.current()},handleBlur:Z,validate:k,isValid:x,setError:function(e){return v({message:e})},ref:j}}},80618:function(e,t,r){r.d(t,{t:function(){return s}});var n,a=r(71383),i=r(51889),o=r(44119),c=r.n(o),l=r(5777),s=(c()(n||(n=(0,a.Z)(["\n  mutation deleteRepl($id: String!) {\n    deleteRepl(id: $id) {\n      id\n    }\n  }\n"]))),function(e){var t=(0,l.Z)({id:e.id,__typename:e.__typename||"Repl"}),r=function(e,r){return r.node.id===t};return(0,i._M)((function(){return[["data",i.Dx,"recentRepls",r],["data",t]]}))})},84470:function(e,t,r){var n=r(50029),a=r(87794),i=r.n(a),o=r(20159);t.Z=function(){var e=(0,n.Z)(i().mark((function e(t,r){var n,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=4;break}n=t.user,e.next=13;break;case 4:if(!((a=r.getState().user)&&a.userInfo.isLoggedIn&&a.userInfo)){e.next=9;break}n=a.userInfo,e.next=13;break;case 9:return e.next=11,(0,o.LK)("/is_authenticated");case 11:(c=e.sent).success&&(n=c.user);case 13:return n&&(t&&(n=JSON.parse(JSON.stringify(n))),r.dispatch({type:"FETCH_USER_INFO_SUCCESS",user:n})),e.abrupt("return",{user:n});case 15:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},42177:function(e,t,r){r.d(t,{QE:function(){return _},ZP:function(){return N},P3:function(){return Z}});var n=r(59499),a=r(17674),i=r(4730),o=r(65988),c=r.n(o),l=r(67294),s=r(94184),d=r.n(s),u=r(16082),f=r(35944);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e){return(0,f.tZ)(u.Z,m(m({filled:!0},e),{},{children:(0,f.tZ)("circle",{cx:"12",cy:"12",r:"4"})}))}var v=r(19463),g=r(76259),h=r(18952),x=r(41850),y=r(99042),j=r(13261),w=["label","description","icon","onChange","large","placeholder","validationResults"];function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z={default:"default",loading:"default",error:"negative",success:"positive"},P=l.forwardRef((function(e,t){var r,n,o,s=e.label,u=e.description,p=e.icon,m=e.onChange,b=e.large,k=e.placeholder,P=void 0===k?"":k,N=e.validationResults,S=(0,i.Z)(e,w),C=l.useState(!1),B=(0,a.Z)(C,2),D=B[0],R=B[1];null!==N&&void 0!==N&&N.some((function(e){return"loading"===e.state}))?(r="loading",n=(0,f.tZ)(j.Z,{style:{width:"24px",height:"24px"}})):null!==N&&void 0!==N&&N.some((function(e){return"error"===e.state}))?(r="error",o="var(--accent-negative-default)",n=(0,f.tZ)(g.Z,{})):null!==N&&void 0!==N&&N.every((function(e){return"success"===e.state}))?(r="success",o="var(--accent-positive-default)",n=(0,f.tZ)(v.Z,{})):r="default";var E=Z[r],I=b?"var(--font-size-subhead-default)":"var(--font-size-default)";return(0,f.BX)("div",{className:c().dynamic([["1522973450",[o,I,S.monospace?"var(--font-family-code)":"var(--font-family-default)",I,p?"var(--space-24)":"auto"]]])+" container",children:[s&&(0,f.BX)(f.HY,{children:[S.required?(0,f.BX)(x.Ug,{spacing:"2px",children:[(0,f.tZ)(h.Z,{tag:"label",foreground:D?1:2,size:b?"small":"xsmall",children:s}),(0,f.tZ)("span",{className:c().dynamic([["1522973450",[o,I,S.monospace?"var(--font-family-code)":"var(--font-family-default)",I,p?"var(--space-24)":"auto"]]])+" required",children:"*"})]}):(0,f.tZ)(h.Z,{tag:"label",foreground:D?1:2,size:b?"small":"xsmall",children:s}),(0,f.tZ)(y.Z,{height:"4px"})]}),(0,f.BX)("div",{className:c().dynamic([["1522973450",[o,I,S.monospace?"var(--font-family-code)":"var(--font-family-default)",I,p?"var(--space-24)":"auto"]]])+" input-container",children:[p&&(0,f.tZ)("div",{className:c().dynamic([["1522973450",[o,I,S.monospace?"var(--font-family-code)":"var(--font-family-default)",I,p?"var(--space-24)":"auto"]]])+" icon-container left",children:p}),(0,f.tZ)("input",O(O({ref:t,"aria-label":s||"input",role:S.role||"search",required:S.required||!1,onChange:m,placeholder:P},S),{},{onFocus:function(e){R(!0),S.onFocus&&S.onFocus(e)},onBlur:function(e){R(!1),S.onBlur&&S.onBlur(e)},className:c().dynamic([["1522973450",[o,I,S.monospace?"var(--font-family-code)":"var(--font-family-default)",I,p?"var(--space-24)":"auto"]]])+" "+(d()(E,S.className)||"")})),n&&(0,f.tZ)("div",{onMouseEnter:function(){return R(!0)},onMouseLeave:function(){return R(!1)},className:c().dynamic([["1522973450",[o,I,S.monospace?"var(--font-family-code)":"var(--font-family-default)",I,p?"var(--space-24)":"auto"]]])+" icon-container right",children:n})]}),u&&(0,f.BX)(f.HY,{children:[(0,f.tZ)(y.Z,{height:"4px"}),(0,f.tZ)(h.Z,{tag:"span",foreground:3,size:b?"medium":"small",children:u})]}),(null===N||void 0===N?void 0:N.some((function(e){return!!e.message})))&&D&&(0,f.tZ)(_,{validationResults:N}),(0,f.tZ)(c(),{id:"1522973450",dynamic:[o,I,S.monospace?"var(--font-family-code)":"var(--font-family-default)",I,p?"var(--space-24)":"auto"],children:[".container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;}",".required.__jsx-style-dynamic-selector{color:var(--accent-negative-default);font-size:var(--font-size-small);}",".spacer.row.__jsx-style-dynamic-selector{width:var(--space-4);}",".spacer.col.__jsx-style-dynamic-selector{height:var(--space-4);}",".input-container.__jsx-style-dynamic-selector{position:relative;}",".icon-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);background-color:var(--background-default);border-radius:100%;padding:var(--space-4);}",".icon-container.right.__jsx-style-dynamic-selector{right:var(--space-8);color:".concat(o,";}"),".icon-container.left.__jsx-style-dynamic-selector{left:var(--space-4);background-color:transparent;color:var(--foreground-dimmest);}","input.__jsx-style-dynamic-selector{font-size:".concat(I,";font-family:").concat(S.monospace?"var(--font-family-code)":"var(--font-family-default)",";line-height:").concat(I,";background-color:var(--background-default);color:var(--foreground-default);padding:var(--space-8);padding-left:").concat(p?"var(--space-24)":"auto",";border:1px solid var(--outline-dimmest);border-radius:var(--border-radius-4);outline:none;width:100%;box-sizing:border-box;-webkit-transition:color 0.1s,background-color 0.1s;transition:color 0.1s,background-color 0.1s;}"),"input.__jsx-style-dynamic-selector:disabled{opacity:0.5;}","input.default.__jsx-style-dynamic-selector:hover{border-color:var(--accent-primary-dimmer);}","input.success.__jsx-style-dynamic-selector{border-color:var(--accent-positive-stronger);}","input.success.__jsx-style-dynamic-selector:hover{border-color:var(--accent-positive-dimmer);}","input.negative.__jsx-style-dynamic-selector{border-color:var(--accent-negative-default);}","input.negative.__jsx-style-dynamic-selector:hover{border-color:var(--accent-negative-dimmer);}","input.__jsx-style-dynamic-selector:active,input.__jsx-style-dynamic-selector:focus{border-color:var(--accent-primary-default);}"]})]})})),_=function(e){var t=e.validationResults;return(0,f.BX)("div",{className:"jsx-3642677892 container",children:[t.map((function(e,t){var r;switch(e.state){case"success":r=(0,f.tZ)(v.Z,{color:"var(--accent-positive-default)"});break;case"error":r=(0,f.tZ)(g.Z,{color:"var(--accent-negative-default)"});break;default:r=(0,f.tZ)(b,{color:"var(--foreground-dimmest)"})}return(0,f.BX)("div",{className:"jsx-3642677892 validation-row",children:[(0,f.tZ)("div",{className:"jsx-3642677892 validation-icon-container",children:r}),(0,f.tZ)(y.Z,{width:"4px"}),(0,f.tZ)(h.Z,{foreground:2,size:"small",children:e.message})]},e.state+t.toString())})),(0,f.tZ)(c(),{id:"3642677892",children:[".container.jsx-3642677892{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:absolute;top:calc(100% + var(--space-4));background-color:var(--background-default);padding:var(--space-8);border-radius:var(--border-radius-4);z-index:9999;box-shadow:var(--shadow-2);}",".validation-row.jsx-3642677892{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;width:100%;padding-bottom:var(--space-4);}",".validation-icon-container.jsx-3642677892{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding-right:var(--space-4);}"]})]})},N=P},83984:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(59499),a=(r(67294),r(16082)),i=r(35944);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e){return(0,i.tZ)(a.Z,c(c({},e),{},{children:(0,i.tZ)("path",{d:"M12 11V17M9 14H15M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z",strokeLinecap:"round",strokeLinejoin:"round"})}))}}}]);
//# sourceMappingURL=8212-e5777753daed9a40.js.map