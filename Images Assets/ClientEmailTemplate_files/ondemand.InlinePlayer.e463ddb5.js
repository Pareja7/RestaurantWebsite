(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{"64vW":function(t,e,i){"use strict";var s=i("ERkP");const a=i.n(s).a.createContext({heightsReady:!0});e.a=a},QHXq:function(t,e,i){"use strict";i.r(e),i.d(e,"InlinePlayerContainer",(function(){return $}));var s=i("97Jx"),a=i.n(s),r=i("ERkP"),n=i.n(r),o=i("6rlp"),l=i("H9MA"),c=i("wrlS"),h=i("RqPI"),p=i("yr4d"),d=i("XOJV"),u=i("mqpi"),y=i("rxPX"),_=i("0KEI"),m=i("eXeu");const b=()=>(t,e,{api:i})=>i.getHttpClient(),P=(t,e)=>{const i=e.source&&e.source.videoId;return i&&"tweet"===i.type?i.id:void 0};var g=Object(y.a)().propsFromState((()=>({dataSaverMode:l.c,featureSwitches:c.d,language:h.p,sourceTweet:d.a.createHydratedTweetSelector(P)}))).adjustStateProps((({dataSaverMode:t,featureSwitches:e,language:i,sourceTweet:s})=>({dataSaverMode:t,disableAutoplay:!!s&&Object(u.b)(e,s,u.a.Autoplay),language:i,mediaAvailability:s&&Object(m.c)(s)||void 0,publisherId:s?Object(m.d)(s):void 0}))).propsFromActions((()=>({createLocalApiErrorHandler:Object(_.createLocalApiErrorHandlerWithContextFactory)("INLINE_PLAYER_CONTAINER"),getTwitterAuthedHttpClient:b,logPromotedVideoEvent:o.b,tweetAdProvider:p.b}))).withAnalytics(),v=i("6v1f"),I=i("ZeN/"),C=i("rHpw"),f=i("MWbm");const A=t=>{t.stopPropagation()};var w=({children:t,testID:e})=>n.a.createElement(f.a,{onClick:A,style:C.a.absoluteFill,testID:e},t),S=i("epkG"),E=i("mN6z"),R=(i("kYxP"),i("gZV8")),T=i("ylrv");class k{constructor(t,e,i){this.placement=t,this.obstructions=e,this.layerId=i}getPositionData(){return{percentVisible:this.visibleFraction(),percentOfViewportOccupied:this.placement.viewportOccupiedFraction(),sizesInfo:{viewportSize:this.placement.viewport,mediaSize:this.placement.item}}}visibleFraction(){const t=this.placement.visiblePart();if(!t)return 0;const e=this.layerId?this.obstructions.getObstructionAboveLayer(this.layerId,t):this.obstructions.getTotalObstruction(t),i=T.a.area(this.placement.item),s=(1-e)*T.a.area(t);return i>0?s/i:0}top(){return this.placement.item.top}distanceToCenter(){return this.placement.verticalDistanceToViewportCenter()}distanceToTop(){return this.placement.verticalDistanceToViewportTop()}scrollY(){return this.placement.scrollY}}var O=i("vF3p"),F=i("S4UJ");class H extends n.a.Component{constructor(...t){super(...t),this._handlePageVisibilityChange=()=>{if(this._placement){const{layerId:t,obstructionDetection:e,onPageVisibilityChange:i}=this.props,s=document.visibilityState,a=this._obstructions||e.getObstructions(),r=new k(this._placement,a,t);i&&i(s,r)}},this._handlePlacementChange=t=>{this._updateAndNotify({placement:t},this.props.onChange)},this._handleObstructionChange=()=>{const{obstructionDetection:t,onChange:e}=this.props;this._updateAndNotify({obstructions:t.getObstructions()},e)},this._setPlacementRef=t=>{this._placementRef=t}}sample(t){this._placementRef&&this._placementRef.sample((e=>{this._updateAndNotify({placement:e},t)}))}render(){const{children:t,style:e}=this.props;return n.a.createElement(R.e,{onPlacementChange:this._handlePlacementChange,ref:this._setPlacementRef,style:e,withScrollListener:!0},t)}componentDidMount(){const{obstructionDetection:t}=this.props;this._obstructionSubscription=t.subscribe(this._handleObstructionChange),document.addEventListener("visibilitychange",this._handlePageVisibilityChange)}componentWillUnmount(){this._obstructionSubscription&&(this._obstructionSubscription.unsubscribe(),this._obstructionSubscription=void 0),document.removeEventListener("visibilitychange",this._handlePageVisibilityChange)}_updateAndNotify({obstructions:t,placement:e},i){const{layerId:s,obstructionDetection:a}=this.props;this._placement=e||this._placement,this._obstructions=t||this._obstructions||a.getObstructions(),this._placement?i(new k(this._placement,this._obstructions,s)):this._placementRef&&this._placementRef.sample((t=>{this._placement=t,this._obstructions=this._obstructions||a.getObstructions(),i(new k(t,this._obstructions,s))}))}}H.defaultProps={obstructionDetection:O.a};var L=Object(F.a)(H),x=i("efbI"),M=i("mf9H"),V=i("zHh/"),D="videoPlayer",j=i("v/3V"),U=i("aITJ"),z=i("Zl35"),N=i("9Xij"),q=i("HT/6"),B=i("v6aA"),W=i("iOGT");const X=new S.a({});class J extends n.a.Component{constructor(t,e){super(t,e),this._emitter=null,this._playerInternal=null,this._placementRef=null,this._isLooping=!1,this._isPlayerFullscreen=!1,this._renderHorizonPlayer=t=>{const{accessibilityLabel:e,analytics:i,aspectRatio:s,displayOptions:r,durationMs:o,geolocationPrompt:l,includeBroadcastEventAssociation:c,intentToPlayTime:h,language:p,mediaAvailability:d,noAuthHttpClient:u,playerId:y,publisherId:_,source:{contentId:m,eventId:b,videoId:P,vmapUrl:g},timecode:v,twitterAuthedHttpClient:I,uiStack:C,videoEl:f,videoPlayer:A,viewCount:w}=this.props;return n.a.createElement(x.a.Consumer,null,(({prerollDisplayLocation:S})=>n.a.createElement(z.b,a()({accessibilityLabel:e,adProvider:this._tweetAdProvider(S),analytics:i,aspectRatio:s,basePlayerClass:A,configType:"static",contentId:m,cta:this._getPlayerCTA(),disableHls:this._disableHls,durationMs:o,enableVideoPlayerCaptionRendering:!0,eventId:b,featureProvider:this.context.featureSwitches,geolocationPrompt:l,httpClient:u,includeBroadcastEventAssociation:c,initiallyMutedCaptions:!0,intentToPlayTime:h,language:p,mediaAvailability:d,objectFitVideo:r&&r.objectFitVideo,onApiReady:this._handleApiReady,playbackSessionId:P.id,playerId:y,precache:this._shouldAutoplay,publisherId:_,requestedTimecode:v,twitterAuthedHttpClient:I,videoEl:f,videoId:P,viewCount:w,vmapUrl:g},t),C)))},this._setPlayerApi=t=>{const{customOverlay:e,onMuteChange:i,onSetPlayerApi:s}=this.props;"function"==typeof e&&(this._playerInternal=t,this.forceUpdate()),i&&(t.on("unmute",(()=>i({isPlayerMuted:!1}))),t.on("mute",(()=>i({isPlayerMuted:!0})))),t&&(t.on("fullscreenEntered",(()=>this._handleFullscreenChange({isPlayerFullscreen:!0}))),t.on("fullscreenExited",(()=>this._handleFullscreenChange({isPlayerFullscreen:!1})))),this._setPlayerInternal(t),s&&s(t)},this._getPlayerCTA=()=>{const{cta:t,promotedContent:e}=this.props;return t&&{...t,url:Object(j.a)(this.context.featureSwitches,t.url,null==e?void 0:e.click_tracking_info)}},this._handleApiReady=this._setPlayerApi,this._getLoopingThreshold=()=>{const{loopingThresholdMs:t,source:{videoId:e}}=this.props;return t||"tweet"===e.type&&6e4||7e3},this._handleAutoPlayRequest=()=>{const{onAutoplay:t,shouldAutoplayWithoutMuting:e}=this.props;this._playerInternal&&(e?this._playerInternal.play():this._playerInternal.playPreview(),t&&t())},this._handlePauseRequest=()=>{const{onAutopause:t}=this.props;this._playerInternal&&(this._playerInternal.pause(),t&&t())},this._handlePlacementChange=t=>{this._emitter&&!this._isPlayerFullscreen&&this._emitter.signalPlacementChange(t),this._playerInternal&&!this._isPlayerFullscreen&&this._playerInternal.updatePosition(t.getPositionData())},this._handlePageVisibilityChange=(t,e)=>{const i=e.getPositionData();"hidden"===t&&this._playerInternal?this._playerInternal.updatePosition({percentVisible:0,percentOfViewportOccupied:0,sizesInfo:i.sizesInfo}):"visible"===t&&this._playerInternal&&this._playerInternal.updatePosition(i)},this._handlePlaybackComplete=()=>{const{onPlaybackComplete:t}=this.props;this._emitter&&this._emitter.signalPlaybackFinish(),t&&t()},this._handlePlaybackStarted=()=>{this._emitter&&this._emitter.signalPlay(),this.props.onPlaybackStarted&&this.props.onPlaybackStarted()},this._handlePlaybackPaused=()=>{this._emitter&&this._emitter.signalPause()},this._handlePlayerState=t=>{const{onPlayerState:e,onProgressChange:i}=this.props;e&&e(t);const s=(t.tracks||[]).find((e=>e.id===t.currentTrackId));if(s){const e=(s.currentTimeMs||0)/s.durationMs;i&&i(e,t.tracksFinished)}},this._handleError=t=>{const{onError:e}=this.props,{error:i}=t;i?(this._emitter&&(this._emitter.unregister(),this._emitter=void 0,this._hasInitialPlacementMeasurement=!1,this._lastPlayerError=i),t.errorInfo&&!t.errorInfo.canRetry&&(e&&e(),this._onErrorUnsubscribe&&this._onErrorUnsubscribe())):!this._emitter&&this._lastPlayerError&&(this._registerPlaybackCoordination(),this._submitInitialPlacement(),this._lastPlayerError=void 0)},this._handleFullscreenChange=t=>{const e=this.context.viewport;if(this._isPlayerFullscreen=t.isPlayerFullscreen,e){if(e.temporarilySuppressScrollListeners(2e3),U.b.isChrome()||U.b.isSafari())if(this._isPlayerFullscreen)this._savedScrollPosition={y:e.scrollY(),x:e.scrollX()};else if(this._savedScrollPosition){const{x:t,y:i}=this._savedScrollPosition;this._savedScrollPosition=void 0,e.scrollTo(t,i)}this._isPlayerFullscreen&&this._playerInternal?this._playerInternal.updatePosition({percentVisible:1,percentOfViewportOccupied:1,sizesInfo:{viewportSize:e.getRect2D(),mediaSize:e.getRect2D()}}):!this._isPlayerFullscreen&&this._placementRef&&this._placementRef.sample(this._handlePlacementChange)}const{onFullscreenChange:i}=this.props;i&&i(t),this._emitter&&this._emitter.signalFullscreenChange(t.isPlayerFullscreen)},this._registerPlaybackCoordination=()=>{const{playbackCoordination:t,playbackPriority:e}=this.props,i={onAutoPlayRequest:this._handleAutoPlayRequest,onPauseRequest:this._handlePauseRequest,canAutoplay:this._shouldAutoplay,isLooping:this._isLooping,playbackPriority:e};t&&(this._emitter=t.register(i))},this._setPlayerInternal=t=>{if(this._playerInternal=t,t){const{onPlayerState:e,onProgressChange:i}=this.props;(e||i)&&t.subscribe(this._handlePlayerState),this._onErrorUnsubscribe=t.subscribe(this._handleError),t.on("playbackComplete",this._handlePlaybackComplete),t.on("play",this._handlePlaybackStarted),t.on("pause",this._handlePlaybackPaused),this._registerPlaybackCoordination(),this._submitInitialPlacement()}if(this.props.setPlayer){const t=this._playerInternal&&{play:()=>{this._playerInternal&&this._playerInternal.play()},pause:()=>{this._playerInternal&&this._playerInternal.pause()},replay:()=>{this._playerInternal&&this._playerInternal.replay()}};this.props.setPlayer(t)}},this._setPlacementAPI=t=>{this._placementRef=t,this._submitInitialPlacement()},this._getTweetId=()=>{const{source:{videoId:t}}=this.props;if(t){if("tweet"===t.type)return t.id;if("broadcast"===t.type)return t.tweetId}},this._tweetAdProvider=t=>{const e=this._getTweetId();if(e)return()=>this.props.tweetAdProvider(e,t)};const{autoplay:i,disableAutoplay:s,forwardPivotInfo:r}=t;this._disableHls=!(U.b.isDesktopOS()||U.b.isAndroid()&&this.context.featureSwitches.isTrue("web_video_hls_android_mse_enabled")),this._shouldAutoplay=!s&&Object(V.a)(i,r)}componentDidUpdate(t){const{heightsReady:e,playbackPriority:i}=this.props;!t.heightsReady&&e&&this._submitInitialPlacement(),!Object(E.a)(t.source,this.props.source)&&this._emitter&&this._emitter.reset(),t.playbackPriority!==i&&void 0!==i&&this._emitter&&this._emitter.signalPlaybackPriorityChange(i,this._shouldAutoplay)}render(){const{aspectRatio:t}=this.props;return n.a.createElement(N.a,{ratio:t,style:G.aspectRatio},n.a.createElement(L,{onChange:this._handlePlacementChange,onPageVisibilityChange:this._handlePageVisibilityChange,ref:this._setPlacementAPI,style:C.a.absoluteFill},this._renderPlayer()))}componentWillUnmount(){this._emitter&&(this._emitter.unregister(),this._emitter=null),this._onErrorUnsubscribe&&this._onErrorUnsubscribe()}_renderPlayer(){const{dataSaverMode:t,durationMs:e,forceLoop:i,maxLoopCount:s,poster:a,promotedContent:r,source:{variants:o},videoType:l}=this.props,c="animated_gif"===l,h="vine"===l,p=o&&o.length?c?"gif":"media_entity":"vmap";this._isLooping=!!(i||c||h||e&&e<=this._getLoopingThreshold());const d={bitrateCap:t?I.a.MEDIUM:void 0,contentType:p,loop:this._isLooping,maxLoopCount:this._isLooping?s:void 0,poster:a&&a.url,promotedContext:r&&(r.impression_id||r.disclosure_type)?{impressionId:r.impression_id,disclosureType:r.disclosure_type}:void 0,variants:o&&Object(m.f)(Object(W.b)(o,t?W.a.MEDIUM:W.a.HIGH).map((t=>({src:t.url,type:t.content_type}))))||[]};return n.a.createElement(w,{testID:D},this._renderHorizonPlayer(d))}_submitInitialPlacement(){const{heightsReady:t}=this.props,e=t&&!this._hasInitialPlacementMeasurement;this._emitter&&this._placementRef&&e&&(this._placementRef.sample(this._handlePlacementChange),this._hasInitialPlacementMeasurement=!0)}}J.contextType=B.a,J.defaultProps={autoplay:v.b.Off,playbackCoordination:M.b,playbackPriority:q.a.NORMAL,showControls:!0,dataSaverMode:!1,geolocationPrompt:!0,heightsReady:!0,noAuthHttpClient:X,includeBroadcastEventAssociation:!1};const G=C.a.create({aspectRatio:{zIndex:void 0}});var Y=i("fs1G"),Z=i("64vW"),K=i("gOg7"),Q=i("r1tX");class $ extends n.a.PureComponent{constructor(t,e){super(t,e),this._player=null,this._getBaseItem=t=>{const{analytics:e,includeBroadcastEventAssociation:i,source:{videoId:s}}=this.props,{event_id:a}=e.contextualScribeData;let r;return r="broadcast"===s.type&&s.tweetId?s.tweetId:"broadcast"===s.type&&i&&a?a:s.id,t.find((t=>t.id===r))},this._createAnalytics=t=>{const e={log:this._scribeAction},{analytics:i}=this.props,s={log:this.context.featureSwitches.isTrue("responsive_web_video_promoted_logging_enabled")?this._logPromotedVideoEvent:Y.a},a=i.contextualScribeNamespace,r=i.contextualScribeData,n={scribeContext:{...a},baseScribeItem:Array.isArray(r.items)?this._getBaseItem(r.items):void 0,enableShortFormCompleteLogging:this.context.featureSwitches.isTrue("responsive_web_video_pcomplete_enabled")};return new K.a(e,s,t,n)},this._logPromotedVideoEvent=t=>{const{createLocalApiErrorHandler:e}=this.props;this.props.logPromotedVideoEvent(t).catch(e())},this._scribeAction=t=>{const{category:e,data:i,namespace:s}=t,{analytics:a}=this.props;null!=s&&s.action&&a.scribe({...s,data:{...i,_category_:e}})},this._setPlayer=t=>{if(this._player=t,this.props.setPlayer){const t=this._player&&{play:()=>{this._player&&this._player.play()},pause:()=>{this._player&&this._player.pause()},replay:()=>{this._player&&this._player.replay()}};this.props.setPlayer(t)}},this._twitterAuthedHttpClient=t.getTwitterAuthedHttpClient(),this._analytics=this._createAnalytics(this._twitterAuthedHttpClient)}render(){const{createLocalApiErrorHandler:t,getTwitterAuthedHttpClient:e,playbackPriority:i,tweetAdProvider:s,...r}=this.props;return n.a.createElement(Z.a.Consumer,null,(({heightsReady:t})=>n.a.createElement(Q.a.Consumer,null,(({playbackPriority:e})=>n.a.createElement(J,a()({},r,{analytics:this._analytics,heightsReady:t,playbackPriority:e===q.a.INELIGIBLE?e:i,setPlayer:this._setPlayer,tweetAdProvider:s,twitterAuthedHttpClient:this._twitterAuthedHttpClient}))))))}}$.contextType=B.a;const tt=g($);e.default=tt}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.InlinePlayer.e463ddb5.js.map