(window.webpackJsonp=window.webpackJsonp||[]).push([[234,175],{"6l+S":function(e,t,n){"use strict";n.r(t),n.d(t,"FeedbackTombstoneContainer",(function(){return m}));n("kYxP");var o=n("euJ+"),c=n("ERkP"),a=n.n(c),s=n("rxPX"),i=Object(s.a)().propsFromState((()=>({feedbackActions:(e,t)=>t.module.selectFeedbackActions(e),feedbackKey:(e,t)=>t.feedbackKeys.length&&t.feedbackKeys[0]}))).adjustStateProps((e=>{const t=e.feedbackKey?e.feedbackActions[e.feedbackKey]:void 0,n=t&&t.childKeys?t.childKeys.map((t=>({key:t,action:e.feedbackActions[t]}))):[];return{feedbackAction:t,childFeedbackActions:n}})).propsFromActions((({module:e})=>({applyFeedbackAction:e.applyFeedbackAction,undoFeedbackAction:e.undoFeedbackAction}))).withAnalytics({element:"feedback_dontlike"}),r=n("3XMw"),d=n.n(r),l=n("oQhu"),b=n("xM7j");const k=d.a.aaf2c6e9,u=d.a.e2f2b658,p=d.a.gf5e9ea6,f=(e,t)=>e&&o.g(e,t),h=e=>{const{itemMetadata:t}=e;return t&&t.clientEventInfo&&t.clientEventInfo.component},y=Object(l.a)(((e,t,n,o,c)=>(n||[]).map((({action:n,key:a})=>{var s;return{label:null!=(s=n.prompt)?s:"",onClick:()=>{const s=f(n,o),i=h(o),r=(e=>{const{clientEventInfo:t}=e;return t&&t.action})(n);c.scribe({component:i,element:s,action:r||"click"}),t({entry:o,feedbackKeys:[a,...e]})}}}))));class m extends a.a.Component{constructor(...e){super(...e),this._getFollowUpOptions=()=>{const{analytics:e,applyFeedbackAction:t,childFeedbackActions:n,entry:o,feedbackKeys:c}=this.props;return y(c,t,n,o,e)},this._handleUndo=()=>{const{analytics:e,entry:t,feedbackAction:n,feedbackKeys:c,onUndoRichAction:a,undoFeedbackAction:s}=this.props;if(!n)return;s({entry:t,feedbackKeys:c}),a&&a();const i=f(n,t)||"feedback_unknown",r=h(t),d=o.h(n,t);e.scribe({component:r,element:i,action:d})},this._getTombstoneMessage=()=>{var e;const{feedbackAction:t}=this.props;return null!=t&&t.confirmation?t.confirmation:null!=t&&null!=(e=t.richBehavior)&&e.markNotInterestedTopic?u:k}}render(){const{behavioralEventContext:e,carousel:t,conversationPosition:n,conversationTreeMetadata:o,feedbackAction:c}=this.props,s=this._getTombstoneMessage(),i=null==c?void 0:c.hasUndoAction;return a.a.createElement(b.a,{actionText:i?p:void 0,additionalActions:this._getFollowUpOptions(),behavioralEventContext:e,carousel:t,conversationPosition:n,conversationTreeMetadata:o,onClick:i?this._handleUndo:void 0},s)}}m.defaultProps={carousel:!1};const A=i(m);t.default=A},Itzz:function(e,t,n){"use strict";n.r(t);var o=n("ezF+"),c=n("ERkP"),a=n.n(c),s=n("VPAj"),i=n("6l+S");const r=o.d({render:({content:{dismissedEntry:e,feedbackKeys:t}},{module:n})=>a.a.createElement(i.default,{carousel:!0,entry:e,feedbackKeys:t,module:n}),shouldDisplayBorder:Object(s.a)(!1)});t.default=r}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.RichTimelineCarouselTombstoneHandler.7839be85.js.map