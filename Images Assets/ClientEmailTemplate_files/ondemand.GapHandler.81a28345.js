(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{"5bSN":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n("ERkP"),o=n.n(a),r=n("3XMw"),i=n.n(r),s=n("MWbm"),c=n("htQn"),l=n("Qwev"),d=n("h0NW"),p=n("t62R"),u=n("rHpw");const h=i.a.ee8c6c61,m=i.a.i8005e73;function v(e){const{children:t=h,isLoading:n,link:a,onClick:r,isTransparentCursor:i}=e;return o.a.createElement(c.a,{link:a,onClick:r,style:g.root},o.a.createElement(s.a,{style:g.inner},n?o.a.createElement(l.a,{accessibilityLabel:m}):i?o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{containerStyle:g.cursor,items:[{description:"These may include replies that are potentially spammy, harmful, or offensive.",label:"Other replies"}]}),o.a.createElement(p.b,{children:"View Replies",color:"link",style:g.link})):o.a.createElement(p.b,{align:"center",children:t,color:"link"})))}const g=u.a.create((e=>({root:{justifyContent:"center",minHeight:e.spaces.space48,width:"100%"},inner:{flexGrow:1,flexShrink:1,justifyContent:"center"},cursor:{paddingTop:e.spaces.space20,paddingBottom:e.spaces.space16,paddingHorizontal:e.spaces.space16},link:{paddingBottom:e.spaces.space20,paddingHorizontal:e.spaces.space16}})))},EnM6:function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a),r=n("3XMw"),i=n.n(r),s=n("MWbm"),c=n("t62R"),l=n("5mJL"),d=n("PV92"),p=n("htQn"),u=n("rHpw"),h=n("Qwev");const m=i.a.i8005e73,v=u.a.create((e=>({connectors:{zIndex:1},content:{flexGrow:1},conversationConnector:{alignItems:"center",display:"flex",position:"relative",height:e.spaces.space36,flexGrow:0},conversationLine:{backgroundColor:e.colors.gray200,width:e.componentDimensions.conversationLineWidth,height:e.spaces.space8},dot:{display:"block",backgroundColor:e.colors.gray200,height:e.componentDimensions.conversationLineWidth,width:e.componentDimensions.conversationLineWidth},ellipsis:{alignItems:"center",justifyContent:"space-between",height:e.spaces.space16,marginVertical:"auto"},ellipsisWithConversationLines:{height:e.spaces.space12},enlargeTouchTarget:{paddingVertical:e.spaces.space8},gap:{overflow:"hidden"},hoverBox:{flexGrow:1,marginLeft:e.spaces.space12,paddingLeft:e.spaces.space4},hoverBoxIndented:{marginLeft:0},hoverBoxTopLevel:{marginLeft:0},loadingIndicator:{paddingVertical:e.spaces.space4},treeContent:{paddingHorizontal:e.spaces.space4},treeGap:{flexDirection:"row",paddingLeft:e.spaces.space16},treeGapTopLevel:{paddingLeft:0}}))),g=o.a.createElement(h.a,{accessibilityLabel:m,style:v.loadingIndicator});t.a=({indents:e,isLoading:t,label:n,link:a,onClick:r,withConversationLines:i=!1,withElbow:u})=>{const h=o.a.createElement(c.b,{color:"link",style:v.enlargeTouchTarget},n),m=o.a.createElement(l.a,{avatarCell:e?void 0:o.a.createElement(o.a.Fragment,null,i&&o.a.createElement(s.a,{style:v.conversationLine,testID:"conversationLine"}),o.a.createElement(s.a,{style:[v.ellipsis,i&&v.ellipsisWithConversationLines]},o.a.createElement(s.a,{style:v.dot}),o.a.createElement(s.a,{style:v.dot}),o.a.createElement(s.a,{style:v.dot})),i&&o.a.createElement(s.a,{style:v.conversationLine,testID:"conversationLine"})),avatarCellStyle:v.conversationConnector,cellStyle:[v.content,e&&v.treeContent]},t?g:h);return o.a.createElement(s.a,{style:[v.gap,e&&v.treeGap,e&&0===e.length&&v.treeGapTopLevel]},e?o.a.createElement(d.a,{indents:e,paddingTop:5,smallFirstCell:!1,style:v.connectors,wideElbow:1===e.length,withElbow:!!u}):null,r||a?o.a.createElement(p.a,{link:t?void 0:a,onClick:t?void 0:r,style:[v.hoverBox,e&&0===e.length&&v.hoverBoxTopLevel,e&&e.length>1&&v.hoverBoxIndented],withInteractiveStyling:!t},m):m)}},Xl5C:function(e,t,n){"use strict";n.r(t);var a=n("nGQU");const o=Object(a.a)({});t.default=o},aqRH:function(e,t,n){"use strict";n.r(t);var a=n("nGQU");t.default=({withRuxInjections:e})=>Object(a.a)({divider:e=>e.conversationTreeMetadata?{top:!1,bottom:!1}:{top:!0,bottom:!1},withRuxInjections:e})},ex5I:function(e,t,n){"use strict";n.r(t);var a=n("nGQU");const o=Object(a.a)({divider:{top:!1,bottom:!1}});t.default=o},nGQU:function(e,t,n){"use strict";var a=n("ezF+"),o=n("VPAj"),r=n("97Jx"),i=n.n(r),s=n("ERkP"),c=n.n(s),l=n("v6aA"),d=n("MDbM"),p=n("rxPX"),u=n("0KEI");const h=(e,t)=>t.module.selectCursorFetchStatus(e,t.entry);var m=Object(p.a)().propsFromState((()=>({fetchStatus:h}))).adjustStateProps((({fetchStatus:e})=>({isLoading:e===d.a.LOADING}))).propsFromActions((({module:e})=>({fetchCursor:e.fetchCursor,createLocalApiErrorHandler:Object(u.createLocalApiErrorHandlerWithContextFactory)("URT_CURSOR")}))).withAnalytics(),v=n("caTy"),g=n("5bSN"),C=n("EnM6"),w=n("3XMw");const y=n.n(w).a.ee8c6c61;class b extends c.a.PureComponent{render(){const{children:e,conversationTreeMetadata:t,isLoading:n,link:a,onClick:o}=this.props,r=t&&t.ancestorConnector,i=t&&t.indents;return c.a.createElement(C.a,{indents:i,isLoading:n,label:e,link:a,onClick:o,withElbow:i?"side"===r:void 0})}}b.defaultProps={children:y};var T=b;class f extends c.a.PureComponent{render(){const{children:e,conversationTreeMetadata:t,isLoading:n,link:a,onClick:o}=this.props;return t?c.a.createElement(T,this.props):c.a.createElement(g.a,{children:e,isLoading:n,link:a,onClick:o})}}var k=f;n("kYxP");class E extends c.a.PureComponent{constructor(...e){super(...e),this._abusiveQualityCursorText="Show more replies"}render(){const{children:e,isLoading:t,link:n,onClick:a}=this.props;return c.a.createElement(g.a,{children:e,isLoading:t,isTransparentCursor:e!==this._abusiveQualityCursorText,link:n,onClick:a})}}var L=E;class x extends c.a.PureComponent{render(){const{children:e,isLoading:t,link:n,onClick:a}=this.props;return c.a.createElement(g.a,{children:e,isLoading:t,isTransparentCursor:!0,link:n,onClick:a})}}var M=x,S=n("xM7j"),j=n("vWJI");const I={component:"cursor",action:"click"},G={component:"cursor",action:"impression"},R={action:"get_middle"},P={component:"gap",action:"impression"},H={[j.CursorType.ShowMoreThreads]:{event_info:"ShowMoreThreads"},[j.CursorType.ShowMoreThreadsPrompt]:{event_info:"ShowMoreThreadsPrompt"}};let O=!1;const Q=e=>{const{featureSwitches:t}=c.a.useContext(l.a),{analytics:n,createLocalApiErrorHandler:a,entry:o,fetchCursor:r,isLoading:s,withRuxInjections:d}=e,{cursorType:p,displayTreatment:u,url:h}=o.content,m=h&&Object(v.b)(h),C=H[p],w=t.isTrue("responsive_web_deamplification_transparent_cursors_enabled")&&!d;c.a.useEffect((()=>{const e=p===j.CursorType.Gap?P:G;n.scribe({...e,data:C}),p===j.CursorType.ShowMoreThreads&&(O=!0)}),[]);const y=c.a.useCallback((e=>{r(o).then(e).catch(a())}),[a,o,r]),b=c.a.useCallback((()=>{const e=p===j.CursorType.Gap?R:I;n.scribe({...e,data:C})}),[n,p,C]),f={isLoading:s,onClick:c.a.useCallback((()=>{m?b():y(b)}),[m,y,b]),link:m},E={...f,conversationTreeMetadata:o.conversationTreeMetadata},x=(null==u?void 0:u.actionText)||null;switch(p){case j.CursorType.Gap:return c.a.createElement(g.a,f,x);case j.CursorType.ShowMore:return c.a.createElement(T,E,x);case j.CursorType.ShowMoreThreads:{const e=w?M:k;return c.a.createElement(e,E,x)}case j.CursorType.ShowMoreThreadsPrompt:{var Q;const e=w?L:S.a,t=(null==u?void 0:u.labelText)||null,n=O&&w?"Show more replies":t;return c.a.createElement(e,i()({},E,{actionText:null==(Q=o.content.displayTreatment)?void 0:Q.actionText}),n)}default:return null}};var W=m(c.a.memo(Q));t.a=({divider:e,withRuxInjections:t})=>a.b({divider:e||{top:!0,bottom:!0},component:W,isFocusable:Object(o.a)(!0),shouldDisplayBorder:e=>{const{conversationTreeMetadata:t}=e;return!t||!1===t.descendantConnector&&0===t.indents.filter((e=>"line"===e.displayType)).length}}).getHandler((()=>({withRuxInjections:t})))},zXWy:function(e,t,n){"use strict";n.r(t);var a=n("nGQU");t.default=({withRuxInjections:e})=>Object(a.a)({divider:{top:!1,bottom:!1},withRuxInjections:e})}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.GapHandler.81a28345.js.map