(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{"+o05":function(e,t,n){"use strict";var r=n("ezF+"),a=Object.freeze({Cell:"Cell",Hero:"Hero",Tile:"Tile"});n("kYxP");const i={loader:()=>n.e(235).then(n.bind(null,"QPD4")),loaderKey:"defaultScoreEventSummaryLoader",strategy:n("XBtf").a.Critical};t.a=r.c({selectDisplayType:e=>e.content.displayType,handlers:{[a.Cell]:i}})},"A+RP":function(e,t,n){"use strict";n.r(t),n.d(t,"UPDATE_INTERVAL",(function(){return S})),n.d(t,"ExploreSidebar",(function(){return P}));n("kYxP");var r=n("ERkP"),a=n.n(r),i=n("FIs5"),o=n("ezF+"),s=n("8UdT"),c=n("iu0J"),d=n("+o05"),u=n("5Y9N"),l=n("XtkE");const p={[s.b.TimelineCursor]:o.e(o.a()),[s.b.Label]:o.e(o.a()),[s.b.Message]:o.e(o.a()),[s.b.News]:o.e(o.a()),[s.b.Trend]:Object(l.a)({withThirdPartyCards:!1,errorContext:"EXPLORE_SIDEBAR"}),[s.b.EventSummary]:Object(c.a)({}),[s.b.ScoreEventSummary]:d.a};var b={...Object(u.a)({isInSidebar:!0}),...p},f=n("3XMw"),h=n.n(f),m=n("oQhu"),_=n("fTQJ"),E=n("b8qQ"),T=n("2g+p"),g=n("MWbm"),w=n("v6aA"),y=n("BxsD");const O=h.a.b8e930fd,v=h.a.ae05f268,S=3e5,C=()=>a.a.createElement(i.a,{message:v}),j=Object(m.a)(((e,t)=>Object(y.c)({featureSwitches:t,displayLocation:y.a.WebSidebar,focalTweetId:e}))),x=Object(m.a)(((e,t)=>Object(y.c)({featureSwitches:t,displayLocation:y.a.WebSidebar,profileUserId:e})));class P extends a.a.Component{constructor(...e){super(...e),this._getModule=()=>{const{focalTweetId:e,profileUserId:t}=this.props;return e?j(e,this.context.featureSwitches):t?x(t,this.context.featureSwitches):Object(y.e)(this.context.featureSwitches)},this._setTimelineRef=e=>{this._timeline=e},this._onAppForegrounded=e=>{"active"===e&&this._fetchUpdates()},this._fetchUpdates=()=>{this._timeline&&"active"===T.a.currentState&&this._timeline.fetchTop({})}}componentDidMount(){T.a.addEventListener("change",this._onAppForegrounded)}componentWillUnmount(){T.a.removeEventListener("change",this._onAppForegrounded)}render(){return a.a.createElement(g.a,null,a.a.createElement(_.a,{entryConfiguration:b,module:this._getModule(),pollingIntervalMsOverride:S,renderUnavailable:C,scroller:E.a,showLoadingFooter:!1,timelineRef:this._setTimelineRef,title:O,withKeyboardShortcuts:!1}))}}P.contextType=w.a;t.default=P},BxsD:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return p})),n.d(t,"f",(function(){return b})),n.d(t,"e",(function(){return f})),n.d(t,"g",(function(){return h}));var r=n("vXCH"),a=n("oQhu"),i=n("ZNT5"),o=n("eR3e");const s=Object.freeze({Trends:"trends"}),c=Object.freeze({WebSidebar:"web_sidebar"}),d="explore-",u=({contentType:e,displayLocation:t,featureSwitches:n,focalTweetId:r,includePageConfiguration:a=!1,initialTabId:o,profileUserId:s}={})=>{const c=e||t||"main",u=r?`${d}${c}-tweet-${r}`:s?`${d}${c}-user-${s}`:`${d}${c}`,p=n.isTrue("responsive_web_behavioral_events_enabled");return Object(i.a)({timelineId:u,formatResponse:l(p),getEndpoint:e=>e.URT.fetchExplore,getEndpointParams:n=>({...n,candidate_source:e,display_location:t,focal_tweet_id:r,include_page_configuration:a,initial_tab_id:o,profile_user_id:s,entity_tokens:p}),context:"FETCH_EXPLORE",perfKey:`${d}${c}`,staleIntervalMs:9e5})},l=e=>t=>{const{pageConfiguration:n}=t;if(e&&n&&n.tabs){const a=n.tabs.tabs.map((t=>{var n,r,a;const i={...null==(n=t.urtEndpoint)||null==(r=n.urtEndpointOptions)?void 0:r.requestParams,entity_tokens:e};return{...t,urtEndpoint:{...t.urtEndpoint,urtEndpointOptions:{...null==(a=t.urtEndpoint)?void 0:a.urtEndpointOptions,requestParams:i}}}})),i={...t,pageConfiguration:{...n,tabs:{...n.tabs,tabs:a}}};return Object(r.a)(i)}return Object(r.a)(t)},p=(e,t)=>u({featureSwitches:e,includePageConfiguration:!0,initialTabId:t}),b=Object(a.a)((e=>u({featureSwitches:e,contentType:s.Trends}))),f=Object(a.a)((e=>u({featureSwitches:e,displayLocation:c.WebSidebar}))),h=()=>(e,t)=>e(Object(o.t)(t()).filter((e=>0===e.indexOf(d))).map((e=>Object(o.g)(e))))},XtkE:function(e,t,n){"use strict";var r=n("ezF+"),a=(n("kYxP"),n("XBtf"));t.a=({errorContext:e,withThirdPartyCards:t=!1})=>r.e({loader:()=>Promise.all([n.e(0),n.e(3),n.e(5),n.e(246)]).then(n.bind(null,"+92Z")),loaderKey:"trendDefaultLoader",loaderOptions:{withThirdPartyCards:t,errorContext:e},strategy:a.a.Critical})}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ExploreSidebar.ad43d9b5.js.map