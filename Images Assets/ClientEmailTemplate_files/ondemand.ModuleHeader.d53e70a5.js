(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{"6vad":function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n("ERkP"),r=n.n(a),o=n("t62R"),l=n("EHV7"),c=n("rHpw");const i=c.a.create((e=>({icon:{color:e.colors.primary,height:e.fontSizes.title4,paddingRight:e.spaces.space12,width:e.fontSizes.title4}})));var s=n("7Mjr"),u=n("I4+6"),m=n("cm6r"),d=n("MWbm");const g=Object.freeze({TopicFilled:"TOPIC_FILLED"});const b=c.a.create((e=>({root:{justifyContent:"space-between",paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical},mainContent:{flexDirection:"row"},subtext:{alignSelf:"flex-start"},withSubtext:{alignSelf:"center"},icon:{alignSelf:"flex-start",height:e.spaces.space20,justifyContent:"center"},iconArrow:{color:e.colors.text},rightControlGroup:{flexDirection:"row",justifyContent:"flex-end",flexGrow:1,alignSelf:"center"}})));t.b=function({icon:e,landingUrl:t,nativeID:n,rightControl:a,style:h,subtext:f,testID:y,text:p}){const C=(e=>{switch(e){case g.TopicFilled:return r.a.createElement(l.a,{style:i.icon});default:return null}})(e),x=f?null:b.withSubtext,E=u.a.generate({backgroundColor:c.a.theme.colors.gray0,color:c.a.theme.colors.cellBackground,customFocusBackgroundColor:c.a.theme.colors.gray0,customHoverBackgroundColor:c.a.theme.colors.gray0,customPressedBackgroundColor:c.a.theme.colors.gray0});return r.a.createElement(m.a,{interactiveStyles:t?E:null,link:null==t?void 0:t.url,nativeID:n,style:[b.root,h],testID:y},r.a.createElement(d.a,{accessibilityLevel:2,accessibilityRole:"heading",style:b.mainContent},r.a.createElement(d.a,{style:b.icon},C),r.a.createElement(o.b,{numberOfLines:3,size:"headline1",style:x,weight:"heavy",withHashflags:!0},p),r.a.createElement(d.a,{style:b.rightControlGroup},t?r.a.createElement(d.a,{style:x},r.a.createElement(s.a,{style:b.iconArrow})):null,a?r.a.createElement(d.a,null,a):null)),f?r.a.createElement(o.b,{color:"gray700",numberOfLines:2,size:"subtext2",style:b.subtext,withHashflags:!0},f):null)}},RoyM:function(e,t,n){"use strict";var a=n("ERkP"),r=n.n(a),o=(n("kYxP"),n("zb92"));var l=Object(o.a)({loader:()=>n.e(174).then(n.bind(null,"ACNv"))}),c=n("4bW+"),i=n("IG7M"),s=n("rHpw"),u=n("Irs7");const m=s.a.create((e=>({curationControl:{marginStart:e.spaces.space20}})));t.a=Object(u.a)((e=>{const{analytics:t,feedbackItems:n,isDisplayedOnMedia:a}=e;if(n&&n.length>0){const e=e=>r.a.createElement(l,{actionItems:n,onClose:e}),o=()=>t.scribe({element:"caret",action:"click"});return r.a.createElement(i.a,{onClick:o,renderActionMenu:e,style:m.curationControl,testID:c.a.caret,withDarkBackground:a})}return null}))},oiEo:function(e,t,n){"use strict";n.r(t);var a=n("ezF+"),r=n("VPAj"),o=n("ERkP"),l=n.n(o),c=n("RoyM"),i=n("Irs7"),s=n("cm6r"),u=n("6vad");const m=({entry:e,feedbackItems:t})=>{const{icon:n,landingUrl:a,renderCustomControl:r,socialContext:o,text:m}=e.content.header,d=Object(i.b)(),g=l.a.useCallback((()=>{d.scribe({element:"header",action:"click"})}),[d]),b=o&&o.generalContext&&o.generalContext.text,h=l.a.useMemo((()=>r?r():l.a.createElement(c.a,{feedbackItems:t})),[t,r]);return l.a.useEffect((()=>{a&&d.scribe({element:"header",action:"impression"})}),[]),a?l.a.createElement(s.a,{interactive:!1,onPress:g},l.a.createElement(u.b,{icon:n,landingUrl:a,rightControl:h,subtext:b,text:m})):l.a.createElement(u.b,{icon:n,landingUrl:a,rightControl:h,subtext:b,text:m})};var d=l.a.memo(m);const g={viewType:"module_header"},b=a.b({component:d,defaultScribeNamespace:{element:"header"},feedbackEntrySelector:e=>e.content.timelineModule,shouldDisplayBorder:Object(r.a)(!1),getBehavioralEventContextOverride:()=>g}).getHandler();t.default=b}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ModuleHeader.d53e70a5.js.map