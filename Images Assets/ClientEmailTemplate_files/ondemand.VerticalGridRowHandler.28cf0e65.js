(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{JKhl:function(e,t,n){"use strict";n.r(t);var a=n("ezF+"),o=n("ERkP"),r=n.n(o),s=n("7nmT"),c=n.n(s),i=n("rHpw"),m=n("MWbm");const l=e=>{const{entryToFocus:t,gridItems:n,numColumns:a}=e,o=r.a.useRef(null);return r.a.useEffect((()=>{const e=c.a.findDOMNode(o.current),t=e&&e instanceof window.HTMLElement&&e.querySelector("a, [tabindex='0']")||void 0;t&&t.focus()}),[t,o]),r.a.createElement(m.a,{style:u.root},n.map((e=>r.a.createElement(m.a,{accessibilityRole:"listitem",key:e.key,nativeID:e.nativeID,ref:t===e.nativeID?o:void 0,style:{width:`calc(100% / ${a})`}},r.a.createElement(r.a.Fragment,{key:e.key},e.item)))))};l.defaultProps={numColumns:2};const u=i.a.create((e=>({root:{flexDirection:"row",marginHorizontal:e.spaces.space8}})));var d=l,y=n("VPAj"),p=n("fs1G");const f=a.g({component:d,createProps:({entry:{content:{entryToFocus:e,items:t,moduleEntryId:n,numColumns:a,rowIndex:o},itemMetadata:r},renderEntry:s,scribeNamespace:c})=>({entryToFocus:e,gridItems:t.map(((e,t)=>({item:s(e),key:e.entryId,nativeID:`verticalGridItem-${o*a+t}-${n}`}))),numColumns:a}),isFocusable:Object(y.a)(!0),getBehavioralEventContextOverride:p.a,shouldDisplayBorder:Object(y.a)(!1)});t.default=f}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.VerticalGridRowHandler.28cf0e65.js.map