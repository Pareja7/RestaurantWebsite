(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{"3ukl":function(e,t,a){"use strict";a.r(t);var n=a("ezF+"),o=a("EIk2"),r=a("ERkP"),i=a.n(r),s=a("IMYl"),c=a("hOZg");const l=e=>"IconCheckmark"===e?i.a.createElement(s.a,null):"IconClose"===e?i.a.createElement(c.a,null):void 0,p=Object.freeze({Compact:"Compact",Normal:"Normal",Large:"Large",ThumbsUpAndDown:"ThumbsUpAndDown"});var d=a("Irs7"),m=a("MWbm"),u=a("PbQQ"),y=a("/yvb"),g=a("t62R");const h=a("rHpw").a.create((e=>({button:{margin:"1ex"},buttonContainer:{display:"grid",gridTemplateColumns:"repeat(2,1fr)"},secondHalf:{width:"50%",display:"grid",justifyContent:"end"},firstHalf:{width:"50%",flexDirection:"column",justifyContent:"center"},root:{flexDirection:"row",justifyContent:"space-between"},promptContainer:{paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical,borderBottomColor:e.colors.borderColor,borderBottomStyle:"solid",borderBottomWidth:e.borderWidths.small},survey:{display:"flex",borderRadius:e.spaces.space8,padding:e.spaces.space12,backgroundColor:e.colors.orange0,alignItems:"center",minHeight:e.spaces.space64},icon:{marginLeft:e.spaces.space12}})));var b=e=>{const{confirmation:t,displayType:a,isRelevantIcon:n,isRelevantOnClick:o,isRelevantText:r,notRelevantIcon:s,notRelevantOnClick:c,notRelevantText:b,onIsRelevant:C,showConfirmation:f,title:I}=e,E=Object(d.b)(),x=a===p.ThumbsUpAndDown,k=x,v=u.b.useOpaqueIdentifier(),R=()=>{E.scribe({element:"is_relevant",action:"click"}),C&&C(),o()},w=()=>{E.scribe({element:"not_relevant",action:"click"}),c()},T=(e,t,a)=>i.a.createElement(y.a,{accessibilityLabel:t,icon:a?l(a):void 0,onPress:e,size:a?"medium":"xSmall",style:a?h.icon:h.button,type:x?"primaryOutlined":"brandFilled"},a?null:t);return i.a.createElement(m.a,{accessibilityLabelledBy:v,accessibilityRole:"group",style:h.promptContainer},f?i.a.createElement(m.a,{accessibilityRole:"alert"},i.a.createElement(g.b,{style:x&&h.survey},t)):i.a.createElement(m.a,{style:[h.root,x&&h.survey]},i.a.createElement(m.a,{style:h.firstHalf},i.a.createElement(g.b,{nativeID:v},I)),i.a.createElement(m.a,{style:h.secondHalf},i.a.createElement(m.a,{style:h.buttonContainer},k?i.a.createElement(i.a.Fragment,null,T(R,r,n),T(w,b,s)):i.a.createElement(i.a.Fragment,null,T(w,b,s),T(R,r,n))))))},C=a("zh9S"),f=a("Rp9C"),I=a("pbku"),E=a("0KEI");const x=(e,t)=>{if(e&&e===p.ThumbsUpAndDown)return t?"IconCheckmark":"IconClose"},k=n.g({component:b,bindActions:({module:e})=>({createLocalApiErrorHandler:Object(E.createLocalApiErrorHandlerWithContextFactory)("RELEVANCE_PROMPT"),scribe:C.c,processCallback:o.a,applyReactionInstructions:e.applyReactionInstructions,updateEntry:e.updateEntry}),createProps:({actions:{applyReactionInstructions:e,createLocalApiErrorHandler:t,processCallback:a,scribe:n,updateEntry:o},entry:r})=>{const{content:i}=r,s=null!=i&&i.relevancePrompt?i.relevancePrompt:null;if(!s)return null;return{onIsRelevant:()=>{e({entry:r,triggerName:I.a.ON_IS_RELEVANT})},title:s.title,confirmation:s.confirmation,isRelevantText:s.isRelevantText,notRelevantText:s.notRelevantText,isRelevantIcon:x(s.displayType,!0),notRelevantIcon:x(s.displayType,!1),isRelevantOnClick:()=>{o(r.entryId,{relevancePrompt:{...s,showConfirmation:!0}}),a(s.isRelevantCallback).catch(t())},notRelevantOnClick:()=>{o(r.entryId,{relevancePrompt:{...s,showConfirmation:!0}}),a(s.notRelevantCallback).catch(t())},displayType:s.displayType,showConfirmation:s.showConfirmation}},getScribeDataItem:e=>f.a.forRelevancePrompt(e.itemMetadata.clientEventInfo),onImpression:({actions:{scribe:e},scribeData:t,scribeNamespace:a})=>{e({...a,element:"relevance_prompt",action:"impression"},t)}});t.default=k},EycW:function(e,t,a){"use strict";var n=a("ERkP"),o=a.n(n),r=a("t62R"),i=a("uCrx"),s=a("PnKw"),c=a("rHpw"),l="onboardingLikesGuide-emptyHeart",p="onboardingLikesGuide-filledHeart",d=a("MWbm");const m=o.a.memo((()=>o.a.createElement(i.a,{style:y.emptyHeart,testID:l}))),u=o.a.memo((()=>o.a.createElement(i.a,{style:y.filledHeart,testID:p}))),y=c.a.create((e=>({actionContext:{marginLeft:e.spaces.space8,display:"inline"},actionGuide:{display:"flex",flexDirection:"row",paddingLeft:e.spaces.space16,paddingRight:e.spaces.space16},actionGuideLeft:{flexGrow:"1",display:"flex",flexDirection:"row",alignItems:"center"},actionGuideRight:{flexGrow:"1",display:"block",textAlign:"right"},actionIcon:{display:"inline",marginLeft:e.spaces.space8},container:{position:"relative",marginTop:e.spaces.space4},headerText:{marginTop:e.spaces.space8,marginBottom:e.spaces.space8},actionContextIconContainer:{display:"inline"},actionContextIcon:{color:e.colors.magenta500,width:`calc(${e.spaces.space16} - ${e.spaces.space2})`,height:`calc(${e.spaces.space16} - ${e.spaces.space2})`},actionContextIconHighlight:{display:"flex",flexDirection:"row",backgroundColor:e.colors.magenta50,borderRadius:"50%",width:`calc(${e.spaces.space32} - ${e.spaces.space4})`,height:`calc(${e.spaces.space32} - ${e.spaces.space4})`,justifyContent:"center",alignItems:"center"},iconImage:{width:e.spaces.space64,height:e.spaces.space72},bodyText:{color:e.colors.gray700,marginBottom:e.spaces.space16},iconContainer:{display:"block"},rightControl:{position:"absolute",top:"0px",right:"0px"},emptyHeart:{color:e.colors.gray100,width:e.spaces.space20,height:e.spaces.space20},filledHeart:{color:e.colors.magenta500,width:e.spaces.space20,height:e.spaces.space20}})));t.a=({bodyText:e,currentLikeCount:t,headerIconUrl:a,headerText:n,likeContext:c,rightControl:l,totalLikeCount:p})=>{const g=[];for(let e=0;e<p;e++)g.push(e<t?o.a.createElement(u,null):o.a.createElement(m,null));return o.a.createElement(d.a,{style:y.container},o.a.createElement(s.a,{headline:n,image:a?{url:a,width:68,height:68,isCentered:!0}:void 0,isCompact:!0,rightControl:l,subtext:e}),o.a.createElement(d.a,{style:y.actionGuide},o.a.createElement(d.a,{accessibilityLabel:c,style:y.actionGuideLeft},o.a.createElement(d.a,{style:y.actionContextIconContainer},o.a.createElement(d.a,{style:y.actionContextIconHighlight},o.a.createElement(i.a,{style:y.actionContextIcon}))),o.a.createElement(d.a,{style:y.actionContext},o.a.createElement(r.b,{size:"subtext2",weight:"bold"},c))),o.a.createElement(d.a,{accessibilityLabel:c,accessibilityLiveRegion:"polite",style:y.actionGuideRight},g.map(((e,t)=>o.a.createElement(d.a,{key:`action-icon-${t}`,style:y.actionIcon},e))))))}},PnKw:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));a("kYxP");var n=a("ERkP"),o=a.n(n),r=a("TIdA"),i=a("t62R"),s=a("A91F"),c=a("/yvb"),l=a("rHpw"),p="inlinePrompt",d="inlinePrompt-primaryAction",m="inlinePrompt-secondaryAction",u="inlinePrompt-centeredImageContainer",y=a("MWbm");class g extends o.a.Component{constructor(...e){super(...e),this._renderImage=(e,t)=>{const a=o.a.createElement(r.a,{accessibilityLabel:"",aspectMode:s.a.exact(e.width/e.height),backgroundColor:e.backgroundColor,customVariants:t,image:e});return e.isCentered?o.a.createElement(y.a,{style:h.centeredImage,testID:u},o.a.createElement(y.a,{style:{width:`${e.width}px`,height:`${e.height}px`}},a)):a},this._renderTitle=()=>{const{headline:e}=this.props;return e?o.a.createElement(i.b,{accessibilityRole:"heading",align:"left",size:"title3",style:h.flexGrow,weight:"heavy",withHashflags:!0},e):null},this._renderBodyText=()=>{const{subtext:e}=this.props;return e?o.a.createElement(i.b,{align:"left",color:"gray700",style:this.styles.body,withHashflags:!0},e):null},this._renderAction=({action:e,buttonSize:t,buttonType:a,style:n,testID:r})=>{const{secondaryAction:i}=this.props,{link:s,onClick:l,text:p}=e;return o.a.createElement(y.a,{style:[this.styles.actionContainer,n,{justifyContent:"flex-start"}],testID:r},o.a.createElement(c.a,{link:s,onPress:l,size:t,style:{width:i?"100%":"auto"},type:a},p))}}render(){const{image:e,imageVariants:t,primaryAction:a,rightControl:n,secondaryAction:r,shouldRenderBorder:i}=this.props;return o.a.createElement(y.a,{style:i?[b.root,b.rootMargin]:h.root},o.a.createElement(o.a.Fragment,null,e?this._renderImage(e,t):null,o.a.createElement(y.a,{style:this.styles.rootPadding,testID:p},this._renderTitle(),this._renderBodyText(),a?this._renderAction({action:a,buttonType:"primaryFilled",style:this.styles.primaryAction,buttonSize:"large",testID:d}):null,r?this._renderAction({action:r,buttonType:"primaryOutlined",style:this.styles.secondaryAction,buttonSize:"large",testID:m}):null)),n?o.a.createElement(y.a,{style:h.rightControl},n):null)}get styles(){return this.props.isCompact?f:C}}g.defaultProps={shouldRenderBorder:!1};const h=l.a.create((e=>({root:{backgroundColor:e.colors.cellBackground},flexGrow:{flexGrow:1},centeredImage:{display:"flex",flexDirection:"row",justifyContent:"center"},rightControl:{paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical,position:"absolute",right:0,top:0}}))),b=l.a.create((e=>({root:{borderColor:e.colors.nestedBorderColor,borderWidth:e.borderWidths.small,borderRadius:e.borderRadii.xLarge,overflow:"hidden"},rootMargin:{marginLeft:e.spaces.space16,marginRight:e.spaces.space16}}))),C=l.a.create((e=>({rootPadding:{padding:e.spaces.space32},body:{marginTop:e.spaces.space8},actionContainer:{flexDirection:"row"},primaryAction:{marginTop:e.spaces.space28},secondaryAction:{marginTop:e.spaces.space16}}))),f=l.a.create((e=>({rootPadding:{padding:e.spaces.space16},body:{marginTop:e.spaces.space2},actionContainer:{flexDirection:"row"},primaryAction:{marginTop:e.spaces.space4},secondaryAction:{marginTop:e.spaces.space2}})))},RoyM:function(e,t,a){"use strict";var n=a("ERkP"),o=a.n(n),r=(a("kYxP"),a("zb92"));var i=Object(r.a)({loader:()=>a.e(174).then(a.bind(null,"ACNv"))}),s=a("4bW+"),c=a("IG7M"),l=a("rHpw"),p=a("Irs7");const d=l.a.create((e=>({curationControl:{marginStart:e.spaces.space20}})));t.a=Object(p.a)((e=>{const{analytics:t,feedbackItems:a,isDisplayedOnMedia:n}=e;if(a&&a.length>0){const e=e=>o.a.createElement(i,{actionItems:a,onClose:e}),r=()=>t.scribe({element:"caret",action:"click"});return o.a.createElement(c.a,{onClick:r,renderActionMenu:e,style:d.curationControl,testID:s.a.caret,withDarkBackground:n})}return null}))},YIsX:function(e,t,a){"use strict";a.r(t);var n=a("ezF+"),o=a("ERkP"),r=a.n(o),i=a("RoyM"),s=a("3XMw"),c=a.n(s),l=a("EycW"),p=a("zh9S"),d=a("G6rE");const m=c.a.a682906d,u=n.g({component:l.a,bindActions:({module:e})=>({scribe:p.c}),selectData:()=>({loggedInUser:e=>d.e.selectLoggedInUser(e)}),createProps:({data:{loggedInUser:e},entry:t,feedbackItems:a})=>{var n,o;const{content:s}=t,c=null!=s&&s.onboardingLikesStartPrompt?null==s?void 0:s.onboardingLikesStartPrompt:null;if(!c)return null;const l=(null==e?void 0:e.favourites_count)||0,p=c.likesNeededToCompleteOnboarding,d=Math.max(0,p-l);return{bodyText:null==(n=c.bodyRichText)?void 0:n.text,currentLikeCount:l,headerIconUrl:c.headerIconUrl,headerText:null==(o=c.headerRichText)?void 0:o.text,likeContext:m({count:d}),rightControl:a.length?r.a.createElement(i.a,{feedbackItems:a}):void 0,totalLikeCount:p}},onImpression:({actions:{scribe:e},scribeNamespace:t})=>{e({...t,action:"impression"})}});t.default=u},pbku:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=Object.freeze({ON_LINGER:"onLinger",ON_IS_RELEVANT:"onIsRelevant",ON_SHOW_MORE:"onShowMore",ON_LIKE:"onLike"})}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.promptHandler.9b2b4275.js.map