(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{"5RdJ":function(e,t,i){"use strict";i.r(t);var s=i("97Jx"),o=i.n(s),r=i("ERkP"),n=i.n(r),a=i("+cai"),c=i("nvLZ");t.default=function(e){return n.a.createElement(c.a,o()({},e,{emojiInfo:a.default}))}},VbCG:function(e,t,i){"use strict";i.d(t,"d",(function(){return n})),i.d(t,"e",(function(){return c})),i.d(t,"f",(function(){return l})),i.d(t,"c",(function(){return h})),i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return u}));var s=i("3XMw"),o=i.n(s),r=i("rHpw");const n={None:"none",Light:"light",MediumLight:"medium-light",Medium:"medium",MediumDark:"medium-dark",Dark:"dark"},a={[n.Light]:"1f3fb",[n.MediumLight]:"1f3fc",[n.Medium]:"1f3fd",[n.MediumDark]:"1f3fe",[n.Dark]:"1f3ff"},c={[n.None]:{id:n.None,name:o.a.ff3dd27b,color:"#FFDC5D"},[n.Light]:{codepoint:a[n.Light],id:n.Light,name:o.a.b554fcf3,color:"#F7DECE"},[n.MediumLight]:{codepoint:a[n.MediumLight],id:n.MediumLight,name:o.a.j590b148,color:"#F3D2A2"},[n.Medium]:{codepoint:a[n.Medium],id:n.Medium,name:o.a.e7d4ee85,color:"#D5AB88"},[n.MediumDark]:{codepoint:a[n.MediumDark],id:n.MediumDark,name:o.a.ia423ebb,color:"#AF7E57"},[n.Dark]:{codepoint:a[n.Dark],id:n.Dark,name:o.a.a2cf0941,color:"#7C533E"}},l={search:o.a.j824dc05,notFoundHeader:o.a.e39c4391,notFoundMessage:o.a.f2625275,skintext:o.a.d67ad795,clear:o.a.e6388bfa,recentCategoryName:o.a.j7c67ec9,searchCategoryName:o.a.da539d38},h={EmojiWidth:r.a.theme.spaces.space20,EmojiHeight:r.a.theme.spaces.space20,EmojiGutter:r.a.theme.spaces.space4},d={Search:"search",Recent:"recent",People:"people",Nature:"nature",Foods:"foods",Activity:"activity",Places:"places",Objects:"objects",Symbols:"symbols",Flags:"flags",Custom:"custom"},u=9},a6L8:function(e,t,i){"use strict";var s=i("ERkP"),o=i.n(s),r=i("faxe"),n=i("3rX5"),a=i("VbCG");const c=i("rHpw").a.create((e=>({root:{height:a.c.EmojiHeight,width:a.c.EmojiWidth}})));t.a=function({accessibilityLabel:e,emoji:t,skinTone:i,style:s}){const a=Object(r.b)(t,i);return a?o.a.createElement(n.a,{accessibilityLabel:e,alt:t.name,draggable:!1,resizeMode:"stretch",source:a,style:[c.root,s]}):null}},faxe:function(e,t,i){"use strict";i.d(t,"c",(function(){return r})),i.d(t,"b",(function(){return n})),i.d(t,"d",(function(){return a})),i.d(t,"a",(function(){return c})),i.d(t,"e",(function(){return l}));var s=i("z4Oz");const o=(e,t)=>{const i=t&&t.codepoint;if(!(i&&r(e.skin_variations,i)>1))return i&&e.skin_variations&&e.skin_variations[i]?e.skin_variations[i]:void 0},r=(e={},t)=>{let i=0;for(const s in e)t&&s.indexOf(t)>=0&&(i+=1);return i},n=(e,t)=>{const i=(o(e,t)||e).unified;return s.a.getTwemojiUrl(i)},a=(e,t)=>{const{name:i,short_names:s,text:r}=e,n=o(e,t),a=n?n.unified:e.unified;return{id:e.id||s[0],name:i,text:r||a,unified:a}},c=()=>`emojiPicker-${Math.random()}`;function l(e,t,i=0){if(e&&t){const{height:s,top:o}=e.getBoundingClientRect(),r=o+i,{bottom:n,top:a}=t.getBoundingClientRect(),c=s+o;if(a<r){const t=r-a;e.scrollTop=Math.max(0,e.scrollTop-t)}else if(a>c||n>c){const t=n-c;e.scrollTop=Math.max(0,e.scrollTop+t)}}}},nvLZ:function(e,t,i){"use strict";var s=i("97Jx"),o=i.n(s),r=(i("kYxP"),i("ERkP")),n=i.n(r),a=i("py1r"),c=i("I4+6"),l=i("oLZl"),h=i("rHpw"),d=i("MWbm");const u=c.a.generate({backgroundColor:"transparent",color:h.a.theme.colors.primary});class m extends n.a.PureComponent{constructor(...e){super(...e),this._handleClick=()=>{const{category:e,onClick:t}=this.props;t(e)},this._handleKeyDown=e=>{const{key:t}=e,{altKey:i,ctrlKey:s,metaKey:o}=e;i||s||o||t===l.a.Enter&&(this._handleClick(),e.preventDefault(),e.stopPropagation())}}render(){const{icon:e,isActive:t,isDisabled:i}=this.props;return n.a.createElement(a.a,{disabled:i},(({isFocused:s,isHovered:o,isPressed:r})=>n.a.createElement(d.a,{style:p.container},n.a.createElement(d.a,{accessibilityDisabled:i,accessibilityRole:"button",onClick:this._handleClick,onKeyDown:s?this._handleKeyDown:void 0,style:[p.iconWrapper,o||t?void 0:p.faded,u.transitionStyle,o&&u.hoverStyle,r&&u.pressedStyle,s&&u.focusedStyle]},e),n.a.createElement(d.a,{style:[p.border,t?{backgroundColor:h.a.theme.colors.primary}:null]}))))}}const p=h.a.create((e=>({container:{flex:1},iconWrapper:{width:"100%",alignItems:"center",paddingVertical:e.spaces.space4},border:{height:e.borderWidths.large,width:"100%",borderRadius:e.borderRadii.infinite},faded:{filter:"grayscale(100%) contrast(80%)",opacity:.5}})));var f=m,g=i("a6L8");const _={people:"😀",nature:"🐻",food:"🍔",activity:"⚽️",travel:"🚘",objects:"💡",symbols:"🔣",flags:"🚩",recent:"🕑"};class y extends n.a.PureComponent{render(){const{activeCategory:e,categories:t,disableAll:i,onAnchorClick:s}=this.props;return n.a.createElement(d.a,{style:v.root},t.map((t=>{const{anchorless:o,emojis:r,id:a,name:c}=t,l=r&&0===r.length||i,h=!!e&&t.id===e.id;return o?null:n.a.createElement(f,{category:t,icon:this._getIcon(a,c),isActive:h,isDisabled:l,key:a,onClick:s})})))}_getIcon(e,t){const{emojiData:i}=this.props,s=i[_[e]];return n.a.createElement(g.a,{accessibilityLabel:t,emoji:s})}}const v=h.a.create((e=>({root:{flexDirection:"row",justifyContent:"space-between"}})));var S=y,w=i("t62R"),k=i("/yvb"),j=i("2ZFc"),C=i("VbCG");class b extends n.a.PureComponent{constructor(...e){super(...e),this._handleHover=()=>{const{emoji:e,onHover:t}=this.props;t&&t(e)},this._handleFocus=()=>{const{emoji:e,onFocus:t}=this.props;t&&t(e)},this._getBackgroundPositionStyle=()=>{const{emoji:e,spriteSheetColumns:t,spriteSheetRows:i}=this.props,s=this.props.spritePosition||e.sprite_position,o=100/(i-1);return`${100/(t-1)*s[0]}% ${o*s[1]}%`},this._handleClick=()=>{const{emoji:e,onSelect:t}=this.props;t&&t(e)}}render(){const{ariaDescendantId:e,emoji:t,emojiName:i,spriteUrl:s}=this.props,o={backgroundImage:`url(${s})`,backgroundPosition:this._getBackgroundPositionStyle(),backgroundSize:`${100*this.props.spriteSheetColumns}% ${100*this.props.spriteSheetRows}%`};return n.a.createElement(a.a,{onFocusRingGained:this._handleFocus,onHoverIn:this._handleHover},(({isFocused:s,isHovered:r,isPressed:a})=>n.a.createElement(d.a,{accessibilityLabel:i||t.name,accessibilityRole:"option",accessibilityState:{selected:!!e},nativeID:e,onClick:this._handleClick,style:[R.container,E.transitionStyle,r&&E.hoverStyle,a&&E.pressedStyle,(s||e)&&E.focusedStyle]},n.a.createElement(d.a,{style:[o,R.emoji]}))))}}const E=c.a.generate({backgroundColor:h.a.theme.colors.transparent,color:h.a.theme.colors.gray700}),R=h.a.create((e=>({container:{alignItems:"center",borderRadius:e.borderRadii.small,boxSizing:"border-box",padding:C.c.EmojiGutter},emoji:{display:"inline-block",outlineStyle:"none",height:C.c.EmojiHeight,width:C.c.EmojiWidth}})));var I=b,T=i("FIs5"),P=i("mtvn"),D=i("7nmT"),x=i.n(D);class F extends n.a.PureComponent{render(){const{children:e,style:t,withTopBorder:i}=this.props;return n.a.createElement(d.a,{style:[L.root,i&&L.topBorder,t]},e)}}F.defaultProps={withTopBorder:!1};const L=h.a.create((e=>({root:{backgroundColor:e.colors.cellBackground,borderColor:e.colors.borderColor,padding:e.spaces.space12},topBorder:{borderTopWidth:e.borderWidths.small}})));var O=F,H=i("faxe"),M=i("OiMc");class z extends n.a.PureComponent{constructor(...e){super(...e),this._createDismissOnSelect=e=>t=>{const{onSelect:i}=this.props;e(),i&&i(t)},this._getEmojisForActiveSkinTone=e=>{const{activeSkinTone:t,emoji:i,...s}=this.props,{codepoint:r}=t,{skin_variations:a}=i,c=[n.a.createElement(I,o()({},s,{emoji:{...i},key:"none",onSelect:this._createDismissOnSelect(e),spritePosition:i.sprite_position}))];for(const t in a)if(r&&t.indexOf(r)>=0){const{sprite_position:r,unified:l}=a[t];c.push(n.a.createElement(I,o()({},s,{emoji:{...i,text:l},key:t,onSelect:this._createDismissOnSelect(e),spritePosition:r})))}return c},this.renderEmojis=e=>{const t=((e,t)=>{const i=null==e?0:e.length;if(!i||t<1)return[];let s=0,o=0;const r=new Array(Math.ceil(i/t));for(;s<i;)r[o]=e.slice(s,s+=t),o+=1;return r})(this._getEmojisForActiveSkinTone(e),10);return n.a.createElement(d.a,{style:A.emojisContainer},t.map(((e,t)=>n.a.createElement(d.a,{key:t,style:A.row},e))))}}render(){const{activeSkinTone:e,emoji:t,onSelect:i,...s}=this.props;return n.a.createElement(M.a,{contentStyle:A.contentStyle,renderContent:this.renderEmojis,withArrow:!0},n.a.createElement(I,o()({},s,{emoji:t,spritePosition:t.sprite_position})))}}const A=h.a.create((e=>({row:{flexDirection:"row"},contentStyle:{minWidth:"100%"},emojisContainer:{padding:e.spaces.space12}})));var B=z;var U=function(e){const{activeSkinTone:t,...i}=e,{emoji:s}=e,{skin_variations:r}=s,{codepoint:a}=t,c=Object(H.c)(r,a),l=a&&r&&r[a];return 0!==c||l?1===c&&l?n.a.createElement(I,o()({},i,{spritePosition:l.sprite_position})):n.a.createElement(B,o()({},i,{activeSkinTone:t})):n.a.createElement(I,o()({},i,{spritePosition:s.sprite_position}))},N=n.a.forwardRef((function(e,t){const[i,s]=n.a.useState(!0),r=n.a.useRef({containerRef:null,intersectionObserver:window.IntersectionObserver&&new window.IntersectionObserver(((e,t)=>{const{intersectionObserver:i}=r.current;e.some((e=>e.isIntersecting))&&i&&(i.disconnect(),s(!1))}))});n.a.useLayoutEffect((()=>{i&&e.isActiveCategory&&s(!1)}),[i,e.isActiveCategory]),n.a.useEffect((()=>{const{containerRef:e,intersectionObserver:t}=r.current;e&&t&&t.observe(e)}),[r.current.containerRef,r.current.intersectionObserver]);const a=n.a.useMemo((()=>e=>{const i=x.a.findDOMNode(e);i instanceof HTMLElement?r.current.containerRef=i:r.current.containerRef=null,"function"==typeof t&&t(e)}),[t]);return i?n.a.createElement(K,o()({ref:a},e,{withPlaceholder:!0})):n.a.createElement(K,o()({},e,{ref:t}))}));class K extends n.a.PureComponent{constructor(e){super(e),this._top=0,this._bottom=0,this._renderEmptyState=()=>{const{notFoundHeader:e,notFoundMessage:t}=C.f;return n.a.createElement(T.a,{header:e,message:t})},this.updatePosition=()=>{const e=x.a.findDOMNode(this._containerRef.current),t=e&&e.parentNode;if(e&&e instanceof window.HTMLElement&&t&&t instanceof window.HTMLElement){const{height:i,top:s}=e.getBoundingClientRect(),{top:o}=t.getBoundingClientRect();this._top=s-o+t.scrollTop,this._bottom=this._top+i}},this.getTop=()=>this._top,this.getBottom=()=>this._bottom,this.updateDisplay=e=>{const t=x.a.findDOMNode(this._containerRef.current);t&&t instanceof window.HTMLElement&&t.style&&(t.style.display=e?"flex":"none")},this._containerRef=n.a.createRef()}componentDidMount(){this.updatePosition()}componentDidUpdate(e){e.emojiIDs!==this.props.emojiIDs&&this.updatePosition()}render(){const{emojiIDs:e,headerButton:t,name:i,onStickyHeaderRef:s,withEmptyState:o}=this.props,r=e.length>0||o;return n.a.createElement(d.a,{key:i,ref:this._containerRef},n.a.createElement(d.a,{accessibilityLabel:i,accessibilityRole:"group",key:i,ref:this._containerRef,style:r?V.shown:V.hidden},n.a.createElement(d.a,{ref:s,style:V.headerContainer},n.a.createElement(O,{style:V.headerSection,withTopBorder:!0},n.a.createElement(w.b,{size:"headline2",style:V.header,weight:"bold"},i),t)),o?this._renderEmptyState():n.a.createElement(O,null,this._renderEmojis())))}_renderEmojis(){const{emojiIDs:e,rowSize:t}=this.props,i=Math.ceil(e.length/t),s=Object(P.a)(0,i);return n.a.createElement(d.a,{style:V.emojiGroup},s.map((i=>{const s=e.slice(i*t,(i+1)*t);return n.a.createElement(d.a,{key:`emoji-row-${i}`,style:V.emojiRow},this.props.withPlaceholder?n.a.createElement(d.a,{style:[V.rowItem,V.spacer]}):this._renderRow(s))})))}_renderRow(e){const{activeSkinTone:t,ariaDescendantId:i,data:s,focusedEmojiId:r,onEmojiFocus:a,onEmojiHover:c,onFocusedEmojiRef:l,onSelect:h,rowSize:u,spriteUrl:m}=this.props;return Object(P.a)(0,u).map((u=>{const p=e[u];if(!p)return n.a.createElement(d.a,{key:`row-spacer-${u}`,style:V.rowItem},n.a.createElement(d.a,{style:V.spacer}));const f=s.emojis[p.toLowerCase()];if(!f)return null;const g=!!f.skin_variations,{spriteSheetColumns:_,spriteSheetRows:y}=s,v={ariaDescendantId:p===r?i:void 0,emoji:f,onFocus:a,onHover:c,onSelect:h,spriteUrl:m,spriteSheetRows:y,spriteSheetColumns:_};return n.a.createElement(d.a,{key:f.unified,ref:p===r?l:void 0,style:V.rowItem},g?n.a.createElement(U,o()({},v,{activeSkinTone:t})):n.a.createElement(I,v))}))}}K.defaultProps={headerButton:null,rowSize:C.b,withEmptyState:!1};const V=h.a.create((e=>({emojiGroup:{flexDirection:"column",flexWrap:"wrap"},emojiRow:{flexDirection:"row",justifyContent:"space-between"},header:{paddingHorizontal:e.spaces.space4},headerSection:{alignItems:"center",flexDirection:"row",justifyContent:"space-between"},headerContainer:{position:"sticky",top:0,zIndex:1},hidden:{display:"none"},shown:{display:"flex"},rowItem:{flex:1},spacer:{alignSelf:"center",margin:C.c.EmojiGutter,height:C.c.EmojiHeight,width:C.c.EmojiWidth}})));var W=i("zrc3"),$=i("Myq3"),G=i("EhiH");class J{constructor(e,t,i){this._categories=e,this._rowSize=i,this._emojis=t}getInitialFocus(){const e=Object(W.a)(this._categories,(e=>e.emojis.length>0));return this.formatFocusParams(0,0,this._categories[e])}getCategoryById(e){const t=Object(W.a)(this._categories,(t=>t.id===e));return this._categories[t]}getPreviousCategory(e){if(e===C.a.Search)return;const t=Object(W.a)(this._categories,(t=>t.id===e));return Object($.a)(this._categories.slice(0,t),(e=>e.emojis.length>0))}getNextCategory(e){if(e===C.a.Search)return;const t=Object(W.a)(this._categories,(t=>t.id===e))+1;return Object(G.a)(this._categories.slice(t,this._categories.length),(e=>e.emojis.length>0))}getCategoryLastRow(e){const{length:t}=e.emojis;return t<this._rowSize?0:Math.ceil(t/this._rowSize)-1}getLastRowLength(e){const{length:t}=e.emojis;return t?t%this._rowSize||this._rowSize:0}formatFocusParams(e,t,i){const s=i.emojis[e*this._rowSize+t];return{focusRow:e,focusCol:t,focusCategoryId:i.id,focusItem:s,previewEmoji:this._emojis[s]}}focusCategory(e){return this.formatFocusParams(0,0,this.getCategoryById(e))}focusNextColumn({focusCategoryId:e,focusCol:t,focusRow:i}){if(i<0||t<0||!e)return this.getInitialFocus();let s=i,o=t,r=this.getCategoryById(e);if(s*this._rowSize+o+1>=r.emojis.length){if(r=this.getNextCategory(e),!r)return this.formatFocusParams(i,t,this.getCategoryById(e));s=0,o=0}else s+=o===this._rowSize-1?1:0,o=o===this._rowSize-1?0:o+1;return this.formatFocusParams(s,o,r)}focusPreviousColumn({focusCategoryId:e,focusCol:t,focusRow:i}){if(i<0||t<0||!e)return this.getInitialFocus();let s=i,o=t,r=this.getCategoryById(e);if(s*this._rowSize+o-1<0){if(r=this.getPreviousCategory(e),!r)return this.formatFocusParams(i,t,this.getCategoryById(e));s=this.getCategoryLastRow(r),o=this.getLastRowLength(r)-1}else s-=0===o?1:0,o=0===o?this._rowSize-1:o-1;return this.formatFocusParams(s,o,r)}focusNextRow({focusCategoryId:e,focusCol:t,focusRow:i}){if(i<0||t<0||!e)return this.getInitialFocus();let s=i,o=t,r=this.getCategoryById(e);if(s*this._rowSize+o+this._rowSize>=r.emojis.length)if(s<this.getCategoryLastRow(r))s+=1,o=this.getLastRowLength(r)-1;else{if(r=this.getNextCategory(e),!r)return this.formatFocusParams(i,t,this.getCategoryById(e));s=0,o=Math.min(o,r.emojis.length-1)}else s+=1;return this.formatFocusParams(s,o,r)}focusPreviousRow({focusCategoryId:e,focusCol:t,focusRow:i}){if(i<0||t<0||!e)return this.getInitialFocus();let s=i,o=t,r=this.getCategoryById(e);if(s*this._rowSize+o-this._rowSize<0){if(r=this.getPreviousCategory(e),!r)return this.formatFocusParams(i,t,this.getCategoryById(e));s=this.getCategoryLastRow(r),o=Math.min(o,this.getLastRowLength(r)-1)}else s-=1;return this.formatFocusParams(s,o,r)}}var q=i("xoZN"),Z=i("s1N3"),Y=i("tn7R");function X(e,t){const i=[...t];let s=0,o=e;for(;s<i.length;){const e=o.children[i[s]];if(!e)break;s+=1,o=e}return{node:o,tail:i.slice(s)}}function Q(e,t,i){const{node:s,tail:o}=X(e,t);let r=s;o.forEach(((e,t)=>{const i={results:[],children:{}};r.children[e]=i,r=i})),r.results?r.results.push(i):r.results=[i]}function ee(e,t){const{node:i,tail:s}=X(e,t);if(!i||s.length>0)return[];const o=[];return function e(t){t.results.length&&o.push(...t.results),Object(Y.a)(t.children).forEach((t=>e(t)))}(i),Object(Z.a)(o)}const te=(e,t)=>{const i=Object(Z.a)(e),s=Object(Z.a)(t);return i.filter((e=>s.indexOf(e)>=0))};var ie=class{constructor(e){this._getRelevantEmojis=(e,t)=>{const i={};for(const s in e){const o=e[s],{search:r}=o;-1!==r.indexOf(t)&&(i[s]=o)}return i},this._getScores=(e,t)=>{const i={};for(const s in e){const o=e[s],{search:r}=o;let n=r.indexOf(t)+1;t===s&&(n=0),i[s]=n}return i},this._insertEmojisToTrie=(e,t,i)=>{for(const s in e){Q(i,t,e[s])}},this._data=e,this._index={results:[],children:{}},this._originalEmojis=this._data.emojis}search(e,t){const i=t&&t.maxResults?t.maxResults:75;let s=[];const o=this._originalEmojis,r=this._index;if(e.length){let t=e.toLowerCase().split(/[\s|,|\-|_]+/);t=t.slice(0,2);const i=t.map((e=>{let t=[];const i=ee(r,e),s=this._getRelevantEmojis(o,e),n=this._getScores(s,e);return 0===i.length?(this._insertEmojisToTrie(s,e,r),t=ee(r,e)):t=i,t.sort(((e,t)=>n[e.id]-n[t.id])),t})).filter((e=>!!e));s=i.length>1?te(...i):i.length?i[0]:[]}return s.length>i&&(s=s.slice(0,i)),s}},se=i("6OUF"),oe=i("VwDm"),re=i("fs1G"),ne=i("VY6S");const ae=n.a.forwardRef(((e,t)=>{const{autoFocus:i=!1,maxResults:s=75,onSearch:o=re.a,data:r,ariaActiveDescendant:a,categoriesDomId:c}=e,l=n.a.useState("")[1],h=n.a.useMemo((()=>new ie(r)),[r]),u=n.a.useMemo((()=>Object(ne.a)((function(e){const t=h.search(e,{maxResults:s});o(e,t)}),100)),[h,s,o]),m=n.a.useCallback((e=>{const t=e.target&&e.target.value||"";l(t),u(t)}),[l,u]),p=n.a.useCallback((()=>{l(""),u("")}),[l,u]);return n.a.createElement(d.a,{accessibilityRole:"combobox"},n.a.createElement(se.a,{Icon:oe.a,ariaActiveDescendant:a,ariaControls:c,ariaExpanded:!0,ariaLabel:C.f.search,autoFocus:i,leftAligned:!0,onChange:m,onClear:p,placeholder:C.f.search,ref:t,style:ce.fieldTextInput,styleType:"pill",withClearButton:!0}))})),ce=h.a.create((e=>({fieldTextInput:{margin:e.spaces.space4}})));var le=n.a.memo(ae),he=i("IMYl");class de extends n.a.Component{constructor(...e){super(...e),this._handleFocus=()=>{const{onFocus:e,skinTone:t}=this.props;e&&e(t)},this._handleFocusLost=()=>{const{onFocusLost:e,skinTone:t}=this.props;e&&e(t)},this._handleHover=()=>{const{onHover:e,skinTone:t}=this.props;e&&e(t)},this._handleHoverLeave=()=>{const{onHoverLeave:e,skinTone:t}=this.props;e&&e(t)},this._handleClick=()=>{const{onSelect:e,skinTone:t}=this.props;e&&e(t)},this._handleKeyDown=e=>{const{key:t}=e,{altKey:i,ctrlKey:s,metaKey:o}=e;i||s||o||t===l.a.Enter&&(this._handleClick(),e.preventDefault(),e.stopPropagation())}}render(){const{accessibilityLabel:e,accessibilityRole:t,isSelected:i,skinTone:s,style:o}=this.props,r=c.a.generate({backgroundColor:s.color,color:h.a.theme.colors.white});return n.a.createElement(a.a,{onFocusRingGained:this._handleFocus,onFocusRingLost:this._handleFocusLost,onHoverIn:this._handleHover,onHoverOut:this._handleHoverLeave},(({isFocused:a,isHovered:c,isPressed:l})=>n.a.createElement(d.a,{accessibilityLabel:e,accessibilityRole:t||"button",accessibilityState:{checked:!!i},focusable:!0,onClick:this._handleClick,onKeyDown:a?this._handleKeyDown:void 0,style:o},n.a.createElement(d.a,{style:[ue.root,{backgroundColor:s.color},r.transitionStyle,(c||a)&&r.focusedStyle,(l||i)&&ue.selected]},i?n.a.createElement(he.a,{style:ue.checkmarkIcon}):null))))}}const ue=h.a.create((e=>({outer:{paddingLeft:e.spaces.space4},root:{alignItems:"center",justifyContent:"center",height:"1.25em",width:"1.25em",borderRadius:e.borderRadii.infinite},selected:{boxShadow:`0 0 0 ${e.borderWidths.medium} ${e.colors.primary}`},checkmarkIcon:{height:"1em",width:"1em",color:e.colors.cellBackground}})));var me=de;class pe extends n.a.Component{constructor(...e){super(...e),this.state={showPalette:!1,focusedOption:void 0,hoveredOption:void 0},this._renderPalette=()=>{const{activeSkinTone:e}=this.props;return n.a.createElement(d.a,{accessibilityRole:"radiogroup",style:fe.palette},Object(Y.a)(C.e).map((t=>{const i=t===e;return n.a.createElement(me,{accessibilityLabel:t.name,accessibilityRole:"radio",isSelected:i,key:t.id,onFocus:this._handleSkinToneFocus,onFocusLost:this._handleSkinToneFocusLost,onHover:this._handleSkinToneHover,onHoverLeave:this._handleSkinToneHoverLeave,onSelect:this._handleSkinToneSelectionClick,skinTone:t,style:fe.skinToneOption})})))},this._renderCurrentSkinTone=()=>{const{activeSkinTone:e}=this.props;return n.a.createElement(me,{accessibilityLabel:C.f.skintext,isSelected:!0,onSelect:this._handleShowPaletteClick,skinTone:e})},this._handleShowPaletteClick=()=>{this.setState({showPalette:!0})},this._handleSkinToneSelectionClick=e=>{this.setState({showPalette:!1}),this.props.onSelect(e)},this._handleSkinToneHover=e=>{this.setState({hoveredOption:e},this._handlePreview)},this._handleSkinToneHoverLeave=e=>{this.setState({hoveredOption:void 0},this._handlePreview)},this._handleSkinToneFocus=e=>{this.setState({focusedOption:e},this._handlePreview)},this._handleSkinToneFocusLost=e=>{this.setState({focusedOption:void 0},this._handlePreview)},this._handlePreview=()=>{const{onPreview:e}=this.props;e&&e(this.state.hoveredOption||this.state.focusedOption)}}render(){const{showPalette:e}=this.state,{style:t}=this.props;return n.a.createElement(d.a,{style:t},e?this._renderPalette():this._renderCurrentSkinTone())}}const fe=h.a.create((e=>({palette:{flexDirection:"row"},skinToneOption:{paddingHorizontal:e.spaces.space2}})));var ge=pe,_e=i("r728"),ye=i("Qyxo"),ve=i("Iok7");const Se="emojiPicker2",we=[C.a.Search,C.a.Recent],ke="emoji_picker_categories_dom_id";class je extends n.a.PureComponent{constructor(e){super(e),this._categoryRefs={},this._scrollRef=n.a.createRef(),this._searchRef=n.a.createRef(),this._selectedEmojis=[],this._shouldScrollToFocusedItem=!0,this._shouldUpdateScrollPosition=!1,this._renderAnchors=e=>{const{activeCategory:t,query:i}=this.state;return n.a.createElement(S,{activeCategory:i?void 0:t,categories:e,disableAll:!!i,emojiData:this._uncompressedData.emojis,onAnchorClick:this._handleAnchorClick})},this._renderSearch=()=>n.a.createElement(le,{ariaActiveDescendant:this.state.ariaDescendantId,autoFocus:!0,categoriesDomId:ke,data:this._uncompressedData,onSearch:this._handleSearch,ref:this._searchRef}),this._renderCategories=e=>{const{rowSize:t,spriteUrl:i}=this.props,{activeCategory:s,activeSkinTone:r,ariaDescendantId:a,focusCategoryId:c,focusItem:l,query:h}=this.state;return n.a.createElement(ve.a,{accessibilityRole:"listbox",nativeID:ke,onMouseLeave:this._handleClearPreview,onScroll:this._handleScroll,ref:this._scrollRef,scrollEventThrottle:100,style:Ce.categoriesContainer},e.map(((e,d)=>{const u=c===e.id,m=s&&s.id===e.id,p={activeSkinTone:r,ariaDescendantId:u?a:void 0,data:this._uncompressedData,emojiIDs:e.emojis,focusedEmojiId:u?l:void 0,id:e.id,isActiveCategory:m,name:e.name,onEmojiFocus:this._handleEmojiPreview,onEmojiHover:this._handleEmojiPreview,onFocusedEmojiRef:u?this._handleFocusedItemRef:void 0,onSelect:this._handleSelect,onStickyHeaderRef:m?this._handleStickyHeaderRef:void 0,rowSize:t,spriteUrl:i};return e.id===C.a.Recent&&(p.headerButton=n.a.createElement(k.a,{accessibilityLabel:C.f.clear,onPress:this._handleClearRecent,size:"xSmall",type:"brandText"},C.f.clear)),e.id===C.a.Search&&(p.withEmptyState=!e.emojis.length&&!!h),n.a.createElement(N,o()({},p,{key:e.name,ref:this._setCategoryRef(`category-${e.id}`)}))})))},this._scrollEmojiIntoViewIfNeeded=()=>{this._shouldScrollToFocusedItem&&this._focusedItemRef&&(Object(H.e)(this._getScrollParent(),this._focusedItemRef,this._getStickyHeaderOffset()),this._shouldScrollToFocusedItem=!1)},this._handleStickyHeaderRef=e=>{this._stickyHeaderRef=e,this._stickyHeaderHeight=void 0,this._shouldScrollToFocusedItem=!0},this._handleFocusedItemRef=e=>{this._focusedItemRef=e,this._scrollEmojiIntoViewIfNeeded()},this._getStickyHeaderOffset=()=>{if(void 0===this._stickyHeaderHeight){const e=this._stickyHeaderRef;if(e){const{height:t}=e.getBoundingClientRect();this._stickyHeaderHeight=t}}return this._stickyHeaderHeight||0},this._handleSkinToneSelect=e=>{this.setState({activeSkinTone:e,previewSkinTone:void 0,withDescription:!0}),this._focusSearch()},this._handleSkinTonePreview=e=>{this.setState({previewSkinTone:e,withDescription:!1})},this._renderPreview=()=>{const{activeSkinTone:e,previewEmoji:t,previewSkinTone:i}=this.state,s=t||this._defaultPreviewEmoji,o=i||e;return n.a.createElement(k.a,{accessibilityLabel:s.name,icon:n.a.createElement(g.a,{emoji:s,skinTone:o,style:Ce.twemoji}),onClick:this._handlePreviewClick,type:"brandText"})},this._handlePreviewClick=()=>{const{previewEmoji:e}=this.state,t=e||this._defaultPreviewEmoji;this._handleSelect(t)},this._renderEmojiDescription=()=>{const{previewEmoji:e}=this.state;return e?n.a.createElement(w.b,{align:"left",color:"gray700",numberOfLines:1,size:"subtext2",style:Ce.emojiDescription},e.name):null},this._renderFooter=()=>{const{withDescription:e}=this.state;return n.a.createElement(d.a,{style:Ce.footer},this._renderPreview(),e?this._renderEmojiDescription():null,n.a.createElement(ge,{activeSkinTone:this.state.activeSkinTone,onPreview:this._handleSkinTonePreview,onSelect:this._handleSkinToneSelect,style:Ce.skinTonePicker}))},this._setCategoryRef=e=>t=>{t&&(this._categoryRefs[e]=t)},this._handleKeyDown=e=>{const{key:t}=e,{altKey:i,ctrlKey:s,metaKey:o}=e,{focusCategoryId:r,focusCol:n,focusItem:a,focusRow:c}=this.state,h={focusRow:c,focusCol:n,focusCategoryId:r};if(!(i||s||o))return t===l.a.ArrowDown?(this._updateFocus(this._focusHelper.focusNextRow(h)),void e.preventDefault()):t===l.a.ArrowUp?(this._updateFocus(this._focusHelper.focusPreviousRow(h)),void e.preventDefault()):t===l.a.ArrowRight?(this._updateFocus(this._focusHelper.focusNextColumn(h)),void e.preventDefault()):t===l.a.ArrowLeft?(this._updateFocus(this._focusHelper.focusPreviousColumn(h)),void e.preventDefault()):t===l.a.Enter&&a?(this._handleSelect(this._uncompressedData.emojis[a]),void e.preventDefault()):void 0},this._updateFocus=e=>{const{ariaDescendantId:t,focusItem:i}=this.state,s=i!==e.focusItem;this._shouldScrollToFocusedItem=s,this.setState({...e,ariaDescendantId:s?Object(H.a)():t})},this._handleScroll=()=>{this._updateActiveCategory()},this._handleSearch=(e,t)=>{const i=t?t.map((e=>e.unified)):[];Object(Y.a)(this._categoryRefs).forEach((t=>{t&&"search"!==t.props.id&&t.updateDisplay(!e)})),this.setState({searchResults:i,query:e}),this._scrollTo(0)},this._handleSelect=e=>{const{onSelect:t}=this.props,{activeSkinTone:i}=this.state,s=Object(H.d)(e,i);t&&t(s);const o=[];for(let t=this._selectedEmojis.length;t>=0;t--){const i=t===this._selectedEmojis.length?e.unified:this._selectedEmojis[t];o.indexOf(i)<0&&o.push(i)}this._selectedEmojis=o.reverse()},this._handleClearRecent=e=>{this._selectedEmojis=[],this.setState({recentlyUsed:[],activeCategory:this._staticCategories()[0]},(()=>{this._shouldUpdateScrollPosition=!0}))},this._getActiveCategory=()=>{const e=this._scrollRef.current&&x.a.findDOMNode(this._scrollRef.current);let t=this.state.activeCategory;if(e&&e instanceof window.HTMLElement){const{scrollTop:i}=e;for(let e=0;e<this._categories.length;e++){const s=this._categories[e],o=this._categoryRefs[`category-${s.id}`];if(o&&i>=o.getTop()&&i<o.getBottom()){t=s;break}}}return t},this._updateActiveCategory=()=>{const e=this._getActiveCategory();e!==this.state.activeCategory&&this.setState({activeCategory:e})},this._getUpdatedRecentlyUsedEmojiList=()=>{const{recentlyUsed:e}=this.state,{rowSize:t}=this.props;if(0===this._selectedEmojis.length)return e;const i=-2*t;return[...e.filter((e=>this._selectedEmojis.indexOf(e)<0)),...this._selectedEmojis].slice(i)},this._handleClearPreview=()=>{this.state.previewEmoji&&this.setState({previewEmoji:void 0})},this._handleEmojiPreview=e=>{e!==this.state.previewEmoji&&this.setState({previewEmoji:e})},this._handleAnchorClick=e=>{this._shouldUpdateScrollPosition&&(this._shouldUpdateScrollPosition=!1,Object(Y.a)(this._categoryRefs).forEach((e=>e.updatePosition())));const t=this._categoryRefs[`category-${e.id}`];0!==e.emojis.length&&(this.setState({activeCategory:e}),t&&this._scrollTo(t.getTop()+1),this.state.focusItem&&this._updateFocus(this._focusHelper.focusCategory(e.id))),this._focusSearch()},this._focusSearch=()=>{this._searchRef.current&&this._searchRef.current.focus()},this._scrollTo=e=>{this._scrollRef.current&&this._scrollRef.current.scrollTo({y:e,animated:!1})},this._staticCategories=()=>this._categories.filter((e=>-1===we.indexOf(e.id)));const{emojiInfo:t}=this.props;this._uncompressedData=Object(_e.a)(t||{}),this._categories=this._uncompressedData.categories,this._searchCategoryInitialValue={anchorless:!0,id:C.a.Search,name:C.f.searchCategoryName,emojis:[]},this._recentlyUsedCategoryInitialValue={id:C.a.Recent,name:C.f.recentCategoryName,emojis:[]},this._defaultPreviewEmoji=this._uncompressedData.emojis[this.props.previewEmojiCodepoint],this._categories.unshift(this._recentlyUsedCategoryInitialValue),this._focusHelper=new J(this._categories,this._uncompressedData.emojis,e.rowSize),this.state={activeCategory:this._categories[1],activeSkinTone:C.e[e.defaultSkinTone],ariaDescendantId:Object(H.a)(),categories:[this._searchCategoryInitialValue,...this._categories],focusRow:-1,focusCol:-1,recentlyUsed:[],previewSkinTone:void 0,query:"",searchResults:[],withDescription:!0}}componentWillUnmount(){j.a.set(Se,{recentlyUsed:this._getUpdatedRecentlyUsedEmojiList(),activeSkinToneId:this.state.activeSkinTone.id})}componentDidMount(){j.a.get(Se).then((e=>{if(e&&"object"==typeof e){const{recentlyUsed:t=[],activeSkinToneId:i}=e,s="string"==typeof i&&C.e[i],o=Object.assign({},{recentlyUsed:Array.isArray(t)?Object(ye.a)(t,(e=>"string"==typeof e?e:void 0)):[],activeCategory:this._categories[1]},s?{activeSkinTone:s}:{});this.setState(o),this._shouldUpdateScrollPosition=!0}}))}componentDidUpdate(e,t){const{categories:i,recentlyUsed:s,searchResults:o}=this.state,{rowSize:r}=this.props;if(t.searchResults!==o||t.recentlyUsed!==s){const e={...this._searchCategoryInitialValue,emojis:o},t={...this._recentlyUsedCategoryInitialValue,emojis:s.length?[...s].reverse():[]};this.setState({activeCategory:this._getActiveCategory(),categories:[e,t].concat(this._staticCategories()),focusCategoryId:void 0,focusCol:-1,focusRow:-1,focusItem:void 0})}t.categories===i&&e.rowSize===r||(this._focusHelper=new J(i,this._uncompressedData.emojis,r))}_getScrollParent(){if(!this._scrollParent){const e=x.a.findDOMNode(this._scrollRef.current);this._scrollParent=e instanceof window.Element?e:void 0}return this._scrollParent}render(){const{partialRender:e}=this.props,{recentlyUsed:t,searchResults:i}=this.state,s={...this._searchCategoryInitialValue,emojis:i},o={...this._recentlyUsedCategoryInitialValue,emojis:t.length?[...t].reverse():[]},r=this._staticCategories(),a=[s,o].concat(r),c=[s,o,r[0]];return n.a.createElement(q.a,{onKeyDown:this._handleKeyDown,style:Ce.root},n.a.createElement(O,{style:Ce.searchSection},this._renderSearch()),n.a.createElement(O,{style:Ce.anchorsSection},this._renderAnchors(a)),this._renderCategories(e?c:a),n.a.createElement(O,{style:Ce.footerContainer,withTopBorder:!0},this._renderFooter()))}}je.defaultProps={defaultSkinTone:C.d.None,partialRender:!1,previewEmojiCodepoint:"👋",rowSize:C.b};const Ce=h.a.create((e=>({root:{flexShrink:1,flexGrow:1},categoriesContainer:{flexShrink:1,overflowY:"auto"},searchSection:{borderTopLeftRadius:e.borderRadii.xLarge,borderTopRightRadius:e.borderRadii.xLarge,padding:0},anchorsSection:{padding:0,marginTop:e.spaces.space4},footer:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",overflow:"hidden"},footerContainer:{borderBottomLeftRadius:e.borderRadii.xLarge,borderBottomRightRadius:e.borderRadii.xLarge},emojiDescription:{paddingHorizontal:e.spaces.space12,maxWidth:"180px",flex:1},twemoji:{height:"2em",width:"2em"},skinTonePicker:{marginHorizontal:e.spaces.space12}})));t.a=je},r728:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var s=i("iChn");const o={name:"a",keywords:"j",sprite_position:"k",skin_variations:"l"},r={unified:"key",skin_tone:"d",sprite_position:"k"},n=e=>{const t=[],i=(e,i)=>{e&&(Array.isArray(e)?e:[e]).forEach((e=>{(i?e.split(/[-|_|\s]+/):[e]).forEach((e=>{const i=e.toLowerCase();-1===t.indexOf(i)&&t.push(i)}))}))};return i(e.short_names,!0),i(e.name,!0),i(e.keywords,!1),t.join(",")},a=(e,t)=>{for(const i in t)e[i]=e[t[i]],delete e[t[i]]},c=e=>{const t=JSON.parse(JSON.stringify(e));t.compressed=!1;for(const e in t.emojis){const i=t.emojis[e];a(i,o),i.id=e,i.unified=e,i.short_names=[e],i.text||(i.text=""),i.search=n(i),i.skin_variations&&(i.skin_variations.forEach((e=>{a(e,r)})),i.skin_variations=Object(s.a)(i.skin_variations,(e=>{const{skin_tone:t}=e;let i=t[0];for(let e=1;e<t.length;e++)i+=`+${t[e]}`;return i})))}return t}}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.EmojiPicker.996f31a5.js.map