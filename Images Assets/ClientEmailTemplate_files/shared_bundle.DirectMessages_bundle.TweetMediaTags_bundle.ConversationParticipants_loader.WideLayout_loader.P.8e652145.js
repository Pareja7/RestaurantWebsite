(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"88ay":function(e,t,o){"use strict";o.d(t,"c",(function(){return F})),o.d(t,"e",(function(){return M})),o.d(t,"f",(function(){return O})),o.d(t,"d",(function(){return H})),o.d(t,"a",(function(){return q}));var r=o("97Jx"),n=o.n(r),a=(o("kYxP"),o("ERkP")),s=o.n(a),i=o("6rlp"),l=o("zh9S"),c=o("G6rE"),d=o("rxPX"),p=o("0KEI");const h=(e,t)=>c.e.select(e,t.userId),u=(e,t)=>t.promotedContent;var m=Object(d.a)().propsFromState((()=>({promotedContent:u,user:h}))).adjustStateProps((({promotedContent:e,user:t})=>({promotedContent:e||(t?t.promoted_content:void 0),user:t}))).propsFromActions((()=>({createLocalApiErrorHandler:Object(p.createLocalApiErrorHandlerWithContextFactory)("USER_CELL_CONTAINER"),log:i.a,scribeAction:l.c}))),C=o("I57f"),b=o("vMjK"),y=o("MWbm"),_=o("IG7M"),g=o("rHpw");const I=e=>{const{children:t,promotedContent:o,user:r}=e;return s.a.createElement(y.a,{style:f.decorationWrapper},t,s.a.createElement(_.a,{renderActionMenu:e=>s.a.createElement(b.b,{onClose:e,promotedContent:o,user:r,view:"follower"}),style:f.actionMenu}))},f=g.a.create((e=>({decorationWrapper:{flexDirection:"row"},actionMenu:{marginLeft:e.spaces.space12}})));var E=o("uIZp"),v=o("mN6z"),S=o("caTy"),k=o("3IPs"),w=o("Rp9C"),x=o("X04g"),U=o("Re5t"),T=o("TnY3"),A=o("hxu0"),L=o("v6aA"),D=o("7JQg"),N=o("nBUg"),R=o("IMA+"),B=o("cFuS");const P=e=>{const{user:t}=e;return t&&t.profile_image_url_https?s.a.createElement(j,n()({},e,{avatarUri:t.profile_image_url_https,description:t.description,entities:t.entities,followRequestReceived:t.follow_request_received,highlightedLabel:t.highlightedLabel,isAutoblocking:t.smart_blocking,isBlockedBy:t.blocked_by,isBlocking:t.blocking,isDeviceFollowing:t.notifications,isFollowedBy:t.followed_by,isFollowing:t.following,isProtected:t.protected,isVerified:t.verified,name:t.name,screenName:t.screen_name,translatorType:t.translator_type,user:t,withheldDescription:t.withheld_description,withheldEntities:t.withheld_entities})):null};P.defaultProps={cellClickable:!0,decoration:null,displayMode:U.a.UserCompact,followRequestReceived:!1,hideBlocked:!1,promotedItemType:B.c.USER,shouldScribeProfileClick:!0,shouldScribeImpression:!1,withFollowsYou:!1};const F=({isDeviceFollowing:e,userId:t})=>s.a.createElement(C.a,{isFollowing:e,style:z.followButton,userId:t}),M=({loggedInUserId:e,promotedContent:t,userId:o})=>e!==o?s.a.createElement(E.a,{promotedContent:t,size:"small",style:z.followButton,userId:o}):null,O=e=>s.a.createElement(I,{promotedContent:e.promotedContent,user:e.user},M(e)),H=e=>s.a.createElement(_.a,{renderActionMenu:t=>s.a.createElement(b.b,{onClose:t,promotedContent:e.promotedContent,user:e.user,view:"rito_flagged_accounts"})});class j extends s.a.Component{constructor(...e){super(...e),this._handleAvatarClick=()=>{const{shouldScribeProfileClick:e}=this.props;this._handleSaveAsRecentSearch(),e&&this._scribeAction({element:"avatar",action:"profile_click"}),this._handleAsyncPromotedEvent(B.b.PROFILE_IMAGE_CLICK)},this._handleCellClick=()=>{const{history:e,onClick:t,screenName:o,user:r}=this.props,n=this._getPromotedTweetState();this._handleSaveAsRecentSearch(),this._handleScreenNameClick(),t?t({user:r,state:n}):e.push({pathname:`/${o}`,state:n||void 0})},this._handleScreenNameClick=()=>{const{shouldScribeProfileClick:e}=this.props;this._handleSaveAsRecentSearch(),e&&this._scribeAction({action:"profile_click"}),this._handleAsyncPromotedEvent(B.b.SCREEN_NAME_CLICK)},this._handleSaveAsRecentSearch=()=>{const{saveAsRecentSearch:e,shouldStoreTypeaheadItem:t,userId:o}=this.props;e&&t&&t(x.a.ItemType.USER)&&e({user:{id:o,type:k.a.User}})},this._scribeAction=e=>{var t;const{promotedContent:o,scribeAction:r,scribeData:n,scribeNamespace:a,user:s,userId:i}=this.props,l=null==n||null==(t=n.items)?void 0:t.find((e=>e.item_type===x.a.ItemType.USER&&e.id===i)),c=n.search_details;r({...a,...e},{items:[{...l,...w.a.getUserItem(s,o)}],profile_id:i,search_details:c})}}componentDidMount(){this._shouldRender()&&this._handleImpression()}shouldComponentUpdate(e){return!Object(v.a)(this.props,e)}render(){const{avatarDecoration:e,bottomControl:t,cellClickable:o,createLocalApiErrorHandler:r,decoration:a,followRequestReceived:i,hideBlocked:l,history:c,isAutoblocking:d,isBlockedBy:p,isBlocking:h,isDeviceFollowing:u,isFollowing:m,isInSidebar:C,location:b,log:y,onClick:_,promotedItemId:g,saveAsRecentSearch:I,scribeAction:f,scribeData:E,scribeNamespace:v,shouldScribeImpression:k,shouldScribeProfileClick:w,shouldStoreTypeaheadItem:x,socialContext:U,user:T,...A}=this.props;return this._shouldRender()?s.a.createElement(N.b.Provider,{value:{socialContextRefreshEnabled:()=>this.context.featureSwitches.isTrue("social_context_and_topic_context_refresh_alignment_enabled")}},s.a.createElement(R.a,n()({},A,{avatarDecoration:e,bottomControl:this._renderBottomControl(),decoration:this._renderDecoration(),highlightedLabel:this._getHighlightedLabel(),isBlocking:T.blocking,onAvatarClick:this._handleAvatarClick,onCellClick:o?this._handleCellClick:void 0,onScreenNameClick:this._handleScreenNameClick,socialContext:U?{contextType:U.contextType,text:U.text,link:U.landingUrl?Object(S.b)(U.landingUrl):void 0}:void 0,withDarkerInteractiveBackground:C}))):null}_renderBottomControl(){return this._renderControl(this.props.bottomControl||null)}_renderDecoration(){return this._renderControl(this.props.decoration)}_renderControl(e){const{loggedInUserId:t}=this.context,{displayMode:o,followRequestReceived:r,isAutoblocking:n,isBlocking:a,isDeviceFollowing:s,isFollowing:i,promotedContent:l,screenName:c,user:d,userId:p}=this.props;return"function"==typeof e?e({displayMode:o,followRequestReceived:r,isAutoblocking:n,isBlocking:a,isDeviceFollowing:!!s,isFollowing:!!i,loggedInUserId:t,promotedContent:l,screenName:c,user:d,userId:p}):e}_shouldRender(){const{hideBlocked:e,isBlockedBy:t,isBlocking:o,screenName:r,userId:n}=this.props;return n&&r&&!(e&&(t||o))}_getHighlightedLabel(){const{highlightedLabel:e}=this.props.user,t="AutomatedLabel"===(null==e?void 0:e.userLabelType),o=!!t&&this.context.featureSwitches.isTrue("account_taxonomy_automated_label_enabled");return!t||o?e:void 0}_getPromotedTweetState(){const{promotedContent:e,promotedItemType:t}=this.props;return e&&t===B.c.TWEET?{promotedTweetState:e}:null}_handleAsyncPromotedEvent(e){const{createLocalApiErrorHandler:t,log:o,promotedContent:r,promotedItemId:n,promotedItemType:a,userId:s}=this.props;if(r){const{disclosure_type:i,impression_id:l}=r;o({disclosureType:i,itemId:n||s,itemType:a,params:{event:e,impression_id:l}}).catch(t())}}_handleImpression(){const{createLocalApiErrorHandler:e,log:t,promotedContent:o,promotedItemType:r,shouldScribeImpression:n,userId:a}=this.props;if(o&&r===B.c.USER){const{disclosure_type:r,impression_id:n}=o;t({disclosureType:r,itemId:a,itemType:B.c.USER,params:{event:B.b.IMPRESSION,impression_id:n}}).catch(e())}else n&&this._scribeAction({action:"impression"})}}j.contextType=L.a,j.defaultProps=P.defaultProps;const z=g.a.create((e=>({followButton:{marginLeft:e.spaces.space12}}))),q=Object(T.a)(Object(A.a)(m(P)));t.b=Object(D.a)({element:"user"})(q)},"IMA+":function(e,t,o){"use strict";var r=o("97Jx"),n=o.n(r),a=(o("kYxP"),o("SV7d")),s=o("ERkP"),i=o.n(s),l=o("TIdA"),c=o("t62R"),d=o("5mJL"),p=o("DNho"),h=o("nBUg"),u=o("qjak"),m=o("ir4X"),C=o("htQn"),b=o("e5HP"),y=o("FBXD"),_=o("Nqmc"),g=o("rHpw"),I=o("oSwX"),f=o("1I0O"),E=o("pBrB"),v=o("jV+4"),S=o("MWbm");const k=Object.freeze({TWEET:"tweets",USER:"users"}),w=Object.freeze({UserCompact:"UserCompact",UserConcise:"UserConcise",UserDetailed:"UserDetailed",ExperimentalUserTypeahead:"ExperimentalUserTypeahead"}),x=l.a.createLayoutCache(),U={viewType:"user_cell"};class T extends i.a.PureComponent{constructor(...e){super(...e),this._renderUserName=()=>{const{badgeContext:e,disabledMessage:t,displayNameLabel:o,isBlocking:r,isDisabled:n,isFollowedBy:a,isProtected:s,isVerified:l,name:d,onScreenNameClick:p,promotedContent:h,promotedItemType:u,screenName:m,screenNameSuffix:C,translatorType:b,withFollowsYou:y,withLink:_}=this.props,g=i.a.createElement(v.a,{badgeContext:e,displayNameLabel:o,isProtected:s,isVerified:l,name:d,onLinkClick:p,promotedContent:u===k.TWEET?h:void 0,screenName:m,screenNameSuffix:C,translatorType:b,withFollowsYou:y&&a,withHoverCard:!r&&!n&&_,withLink:!n&&_,withScreenName:!t,withStackedLayout:!0});return t?i.a.createElement(S.a,{style:A.disabledMessageContainer},g,i.a.createElement(c.b,{color:"gray700"},t)):g},this._renderSocialContext=()=>{const{avatarSize:e,displayMode:t,socialContext:o}=this.props;return o?i.a.createElement(h.b.UseProps,null,(r=>i.a.createElement(_.a,{avatarSize:e,contextType:o.contextType,iconSize:"large",link:o.link,style:A.socialContext,text:o.text,weight:"bold",withLeftPadding:!r.socialContextRefreshEnabled()&&t!==w.ExperimentalUserTypeahead}))):null},this._renderUserTypeaheadSocialContext=()=>{const{socialContext:e}=this.props,{Icon:t,text:o}=e&&Object(u.a)({link:e.link,text:e.text,iconSize:"small",contextType:e.contextType})||{};return e?i.a.createElement(S.a,{style:A.userTypeaheadSocialContext},i.a.createElement(S.a,{style:A.userTypeaheadSocialContextIcon},t),i.a.createElement(c.b,{color:"gray700",numberOfLines:1,style:A.userTypeaheadSocialContextText},o)):null},this._renderHighlightedUserLabel=()=>{const{highlightedLabel:e}=this.props;return e?i.a.createElement(m.a,{label:e}):null},this._isEligibleForBio=()=>{const{displayMode:e}=this.props;return-1!==[w.UserDetailed,w.UserConcise].indexOf(e)},this._handleKeyPress=e=>{e.defaultPrevented||"Enter"!==e.key||this._handleClick(e)},this._handleClick=Object(y.a)((e=>{const{onCellClick:t}=this.props;e.preventDefault(),t&&t()}))}render(){const{accessibilityLabel:e,accessibilityState:t,avatarDecoration:o,avatarSize:r,avatarUri:s,bottomControl:l,decoration:c,displayMode:h,isBlocking:u,isDisabled:m,onAvatarClick:y,onCellClick:_,onScreenNameClick:g,presenceIndicator:E,promotedContent:v,promotedItemType:T,screenName:L,style:D,testID:N,userId:R,withDarkerInteractiveBackground:B,withInteractiveStyling:P,withLink:F,withUsernameCenterAligned:M}=this.props,O=F&&!u,H=h===w.UserCompact||M,j=h===w.ExperimentalUserTypeahead,z=v&&T===k.USER&&"earned"!==(v.disclosure_type&&v.disclosure_type.toLowerCase())?i.a.createElement(b.a,{contentAuthorId:R,promotedContent:v,style:A.promotedIndicator}):null,q={accessibilityHidden:!0,decoration:o,focusable:!1,imageLayoutCache:x,onClick:y,onHoverCardScreenNameClick:g,promotedContent:v,screenName:L,style:A.avatar,uri:s,withHoverCard:O,withLink:F},W=i.a.createElement(p.a.Consumer,null,(({avatarSize:e})=>E?i.a.createElement(f.a,n()({},q,E,{size:e})):i.a.createElement(I.default,n()({size:e},q)))),G=t&&"boolean"==typeof t.checked,J=void 0!==_,K=(G?"radio":J&&"button")||"listitem",Y=this._renderUserName(),V=this._renderHighlightedUserLabel(),X=this._renderBio(),Q=V||X||z||l,Z=i.a.createElement(i.a.Fragment,null,V,X,z,l?i.a.createElement(S.a,{style:A.bottomControl},l):null);return i.a.createElement(a.a,{behavioralEventContext:U},i.a.createElement(C.a,{accessibilityLabel:e,accessibilityRole:K,accessibilityState:t,disabled:!!m,focusable:G||J,onClick:this._handleClick,onKeyPress:this._handleKeyPress,pointerEvents:m?"none":void 0,style:[A.root,D],testID:N,withDarkerInteractiveBackground:B,withInteractiveStyling:null!=P?P:!!_},j?null:this._renderSocialContext(),i.a.createElement(d.a,{avatarCell:W,avatarCellStyle:[A.avatarColumn,H&&A.bodyColumnCentered],avatarSize:j?"xxxLarge":r,cellStyle:[A.bodyColumn,H&&A.bodyColumnCentered]},i.a.createElement(S.a,{style:A.body},Y,c),H?null:Z,j?this._renderUserTypeaheadSocialContext():null),Q&&H?i.a.createElement(d.a,{avatarCell:null,avatarCellStyle:A.avatarColumn,cellStyle:A.bodyColumn},Z):null))}_renderBio(){const{description:e,displayMode:t,entities:o,userId:r,withheldDescription:n,withheldEntities:a}=this.props;return o&&e&&this._isEligibleForBio()?i.a.createElement(E.a,{description:e,entities:o,isConcise:t===w.UserConcise,style:A.bio,userId:r,withheldDescription:n,withheldEntities:a}):null}}T.defaultProps={testID:"UserCell",withLink:!0};const A=g.a.create((e=>({root:{paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical},avatarColumn:{justifyContent:"flex-start"},bodyColumn:{flexGrow:1},bodyColumnCentered:{justifyContent:"center"},avatar:{display:"block",width:"100%"},bio:{paddingTop:e.spaces.space4,whiteSpace:"normal"},socialContext:{marginBottom:e.spaces.space4},userTypeaheadSocialContext:{alignItems:"center",flexDirection:"row",textColor:e.colors.gray700},userTypeaheadSocialContextIcon:{flexShrink:0},userTypeaheadSocialContextText:{paddingLeft:e.spaces.space2},body:{alignItems:"center",flexDirection:"row",justifyContent:"space-between"},promotedIndicator:{margin:0,paddingTop:e.spaces.space4,paddingBottom:0,paddingHorizontal:0},bottomControl:{paddingTop:e.spaces.space4},disabledMessageContainer:{flexShrink:1}})));t.a=T},hqDb:function(e,t,o){"use strict";var r=o("97Jx"),n=o.n(r),a=(o("kYxP"),o("ERkP")),s=o.n(a),i=o("k49u"),l=o("6xIQ"),c=o("kGix"),d=o("G6rE"),p=o("rxPX"),h=o("0KEI");const u=(e,t)=>t.userIds,m=(e,t)=>{const{userIds:o}=t;return o.filter((t=>!!d.e.select(e,t)))},C=(e,t)=>{const{userIds:o}=t;return o.reduce(((t,o)=>{const r=d.e.selectFetchStatus(e,o);return t[o]=r===c.a.NONE?c.a.LOADING:r,t}),{})};var b=Object(p.a)().propsFromState((()=>({availableUserIds:Object(l.a)(m,(e=>e)),fetchStatus:Object(l.a)(m,C,u,((e,t,o)=>{let r=c.a.LOADED;for(let n=0;n<o.length;n++){const a=o[n];if(-1===e.indexOf(a)){const e=t[a]||c.a.LOADING;r=r===c.a.LOADED?e:r}if(r===c.a.LOADED)break}return r}))}))).propsFromActions((()=>({createLocalApiErrorHandler:Object(h.createLocalApiErrorHandlerWithContextFactory)("USERS_LIST_CONTAINER"),fetchUsersIfNeeded:d.e.fetchManyIfNeeded}))),y=o("v//M"),_=o("3XMw"),g=o.n(_),I=o("pQ3Z"),f=o.n(I),E=o("cFuS"),v=o("Re5t"),S=o("MWbm"),k=o("88ay");const w=({displayMode:e,renderUserCell:t,userIds:o,withFinalItemBorder:r,withItemBorder:n})=>s.a.createElement(S.a,null,o.map(((o,r)=>t?t(o):s.a.createElement(k.b,{decoration:k.e,displayMode:e,key:o,promotedItemType:E.c.USER,userId:o,withFollowsYou:!0}))));w.defaultProps={displayMode:v.a.UserDetailed,withFinalItemBorder:!0,withItemBorder:!1};var x=w;const U=g.a.f5b426c2,T={viewType:"user_list"};class A extends s.a.Component{constructor(...e){super(...e),this.state={allUsersUnavailable:!1},this._renderContent=()=>{const{availableUserIds:e,createLocalApiErrorHandler:t,fetchStatus:o,fetchUsersIfNeeded:r,userIds:a,...i}=this.props;return s.a.createElement(x,n()({},i,{userIds:e}))},this._handleFetch=()=>{this._fetchUsersIfNeeded()}}componentDidMount(){this._fetchUsersIfNeeded()}componentDidUpdate(e){f()(e.userIds,this.props.userIds)||this._fetchUsersIfNeeded()}render(){return s.a.createElement(y.a,{accessibilityLabel:U,behavioralEventContext:T,fetchStatus:this.state.allUsersUnavailable?c.a.LOADED:this.props.fetchStatus,onRequestRetry:this._handleFetch,render:this._renderContent,retryable:!1})}_fetchUsersIfNeeded(){const{availableUserIds:e,createLocalApiErrorHandler:t,fetchUsersIfNeeded:o,userIds:r}=this.props;o(r).then((()=>{this.setState({allUsersUnavailable:!1})}),t({[i.a.AddressBookLookupNotFound]:{customAction:()=>{0===e.length&&this.setState({allUsersUnavailable:!0})}},[i.a.OtherUserSuspended]:{customAction:()=>{0===e.length&&this.setState({allUsersUnavailable:!0})}}}))}}const L=b(A);t.a=L},hxu0:function(e,t,o){"use strict";var r=o("97Jx"),n=o.n(r),a=o("ERkP"),s=o.n(a),i=o("vqbU");t.a=e=>t=>s.a.createElement(i.a.Consumer,null,(o=>s.a.createElement(e,n()({},t,{isInSidebar:o}))))}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.DirectMessages~bundle.TweetMediaTags~bundle.ConversationParticipants~loader.WideLayout~loader.P.8e652145.js.map