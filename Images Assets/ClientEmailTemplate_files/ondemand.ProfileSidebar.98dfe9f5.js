(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{hIbf:function(e,t,a){"use strict";a.r(t),a.d(t,"ProfileSidebarContainer",(function(){return D})),a.d(t,"toRelativePath",(function(){return U}));a("kYxP"),a("MvUL");var i=a("ERkP"),r=a.n(i),n=a("k49u"),s=a("es0u"),d=(a("urw/"),a("hqKg")),o=a("8UdT"),c=a("P1r1"),l=a("wrlS"),p=a("XOJV"),h=a("YjVx"),m=a("FLCi"),u=a("zrOZ");const I=(e,t)=>Object(h.a)(e,t),b=[],f=Object(d.createSelector)(((e,t)=>I(Object(l.d)(e),t).selectEntries(e)),p.a.createHydratedSelector,c.k,((e,t,a)=>Object(m.a)(e,(e=>{var i;const r=e.type===o.b.Tweet&&t(e.content.id),n=null!=r&&null!=(i=r.extended_entities)&&i.media?Object(u.a)(r.extended_entities.media.map((e=>{const t=e.sensitive_media_warning;return t?Object.keys(t).filter((e=>t[e])):[]})).flat()):void 0;return!r||r.tombstoneInfo||r.isDeleted||r.possibly_sensitive&&!a||null!=n&&n.size||!r.extended_entities||!r.extended_entities.media?b:r.extended_entities.media.map((t=>({mediaItem:t,entry:e})))})))),w=(e,t)=>I(e,t).fetchInitial();var g=a("MDbM"),M=a("rxPX"),_=a("0KEI");const x=(e,t)=>f(e,t.userId),S=(e,t)=>t.hideMediaModule?g.a.LOADED:((e,t)=>I(Object(l.d)(e),t).selectInitialFetchStatus(e))(e,t.userId)||g.a.LOADING;var E=Object(M.a)().propsFromState((()=>({mediaItemsWithEntry:x,mediaFetchStatus:S}))).adjustStateProps((({mediaFetchStatus:e,mediaItemsWithEntry:t})=>({mediaItems:t.map((e=>({...e.mediaItem}))),mediaItemsWithEntry:t,mediaFetchStatus:e}))).propsFromActions((()=>({createLocalApiErrorHandler:Object(_.createLocalApiErrorHandlerWithContextFactory)("PROFILE_SIDE_BAR"),fetchRecentMediaIfNeeded:w}))),O=a("kGix"),v=a("3XMw"),y=a.n(v),A=a("fs1G"),L=a("q2Cp"),R=a("Qwev"),F=a("rHpw"),j=a("3dad"),k=a("v6aA");const C=y.a.b327c129,P={[n.a.NotAuthorizedToViewUser]:{customAction:A.a}};class D extends r.a.Component{constructor(...e){super(...e),this._fetchRecentUserMedia=()=>{const{createLocalApiErrorHandler:e,fetchRecentMediaIfNeeded:t,hideMediaModule:a,userId:i}=this.props;!a&&t(this.context.featureSwitches,i).catch(e(P))}}componentDidUpdate(e){e.userId===this.props.userId&&e.hideMediaModule===this.props.hideMediaModule||this._fetchRecentUserMedia()}componentDidMount(){this._fetchRecentUserMedia()}render(){const{mediaFetchStatus:e}=this.props;return e&&e!==O.a.LOADING?this._renderSidebar():r.a.createElement(R.a,{accessibilityLabel:"Loading profile sidebar"})}_renderSidebar(){const{hideMediaModule:e,userId:t,userScreenName:a,withTopicsToFollow:i}=this.props,n=this._getImages();return r.a.createElement(s.a,{profileScreenName:a,profileUserId:t,withTopicsToFollow:i},n.length>=2&&!e?r.a.createElement(L.a,{cacheLocationKey:"profileSidebar",images:n,singleImageMaxAspectRatio:F.a.theme.aspectRatios.landscape,singleImageMinAspectRatio:F.a.theme.aspectRatios.landscape}):null)}_getImages(){const{mediaItems:e,mediaItemsWithEntry:t}=this.props;return t.map(((t,a)=>{var i;const{entry:r,mediaItem:n}=t,s={pathname:U(n.expanded_url),state:{mediaItems:{items:e,index:a},forwardPivotInfo:null==(i=r.content)?void 0:i.forwardPivot}},d=j.a.getOriginalImage(n);return d&&{width:d.width,height:d.height,url:d.url,backgroundColor:j.a.getBackgroundColor(n),cropCandidates:j.a.getCropCandidates(n),accessibilityLabel:n.ext_alt_text||C,shouldShowAltLabel:!1,expandedUrl:s}})).filter(Boolean)}}D.contextType=k.a;const U=e=>e.replace("https://twitter.com",""),T=E(D);t.default=T}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ProfileSidebar.98dfe9f5.js.map