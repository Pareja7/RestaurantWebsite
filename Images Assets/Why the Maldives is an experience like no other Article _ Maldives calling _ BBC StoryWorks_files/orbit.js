var e={347:function(e){!function(){function t(e,t){document.addEventListener?e.addEventListener("scroll",t,!1):e.attachEvent("scroll",t)}function n(e){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(e)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function o(e,t){e.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+t+";"}function i(e){var t=e.a.offsetWidth,n=t+100;return e.f.style.width=n+"px",e.c.scrollLeft=n,e.b.scrollLeft=e.b.scrollWidth+100,e.g!==t&&(e.g=t,!0)}function r(e,n){function o(){var e=r;i(e)&&e.a.parentNode&&n(e.g)}var r=e;t(e.b,o),t(e.c,o),i(e)}function a(e,t){var n=t||{};this.family=e,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}var s=null,d=null,c=null,l=null;function u(){return null===l&&(l=!!document.fonts),l}function h(){if(null===c){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(e){}c=""!==e.style.font}return c}function f(e,t){return[e.style,e.weight,h()?e.stretch:"","100px",t].join(" ")}a.prototype.load=function(e,t){var i=this,a=e||"BESbswy",c=0,l=t||3e3,h=(new Date).getTime();return new Promise((function(e,t){if(u()&&!function(){if(null===d)if(u()&&/Apple/.test(window.navigator.vendor)){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);d=!!e&&603>parseInt(e[1],10)}else d=!1;return d}()){var m=new Promise((function(e,t){!function n(){(new Date).getTime()-h>=l?t(Error(l+"ms timeout exceeded")):document.fonts.load(f(i,'"'+i.family+'"'),a).then((function(t){1<=t.length?e():setTimeout(n,25)}),t)}()})),p=new Promise((function(e,t){c=setTimeout((function(){t(Error(l+"ms timeout exceeded"))}),l)}));Promise.race([p,m]).then((function(){clearTimeout(c),e(i)}),t)}else!function(e){document.body?e():document.addEventListener?document.addEventListener("DOMContentLoaded",(function t(){document.removeEventListener("DOMContentLoaded",t),e()})):document.attachEvent("onreadystatechange",(function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),e())}))}((function(){function d(){var t;(t=-1!=w&&-1!=b||-1!=w&&-1!=v||-1!=b&&-1!=v)&&((t=w!=b&&w!=v&&b!=v)||(null===s&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),s=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))),t=s&&(w==y&&b==y&&v==y||w==g&&b==g&&v==g||w==x&&b==x&&v==x)),t=!t),t&&(E.parentNode&&E.parentNode.removeChild(E),clearTimeout(c),e(i))}var u=new n(a),m=new n(a),p=new n(a),w=-1,b=-1,v=-1,y=-1,g=-1,x=-1,E=document.createElement("div");E.dir="ltr",o(u,f(i,"sans-serif")),o(m,f(i,"serif")),o(p,f(i,"monospace")),E.appendChild(u.a),E.appendChild(m.a),E.appendChild(p.a),document.body.appendChild(E),y=u.a.offsetWidth,g=m.a.offsetWidth,x=p.a.offsetWidth,function e(){if((new Date).getTime()-h>=l)E.parentNode&&E.parentNode.removeChild(E),t(Error(l+"ms timeout exceeded"));else{var n=document.hidden;!0!==n&&void 0!==n||(w=u.a.offsetWidth,b=m.a.offsetWidth,v=p.a.offsetWidth,d()),c=setTimeout(e,50)}}(),r(u,(function(e){w=e,d()})),o(u,f(i,'"'+i.family+'",sans-serif')),r(m,(function(e){b=e,d()})),o(m,f(i,'"'+i.family+'",serif')),r(p,(function(e){v=e,d()})),o(p,f(i,'"'+i.family+'",monospace'))}))}))},e.exports=a}()},553:function(e,t,n){n.d(t,{Z:function(){return i}});const o=n(347);function i(e,t){const n=new o(e),i=new o(e,{weight:"bold"});return Promise.all([n.load(),i.load()]).then((()=>{document.documentElement.className+=` ${t}`})).catch((t=>{console.error(`Error loading ${e} font: ${t}`)}))}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){const e=n(553).Z;window.bbcuser.isUKCombined().then((e=>{if(!e){const e=document.getElementById("homepage-link");if(e){const t=e.getAttribute("href").replace(".bbc.co.uk",".bbc.com");e.setAttribute("href",t)}}if("#orbit-more-drawer"===window.location.hash)return;const t=e?"orbit-domestic-yes":"orbit-domestic-no";["orb-banner","orbit-more-drawer","orb-footer"].forEach((e=>{const n=document.getElementById(e);n&&n.classList.add(t)}))})),Promise.all([window.bbcpage.isModal(),e("ReithSans","b-reith-sans-loaded")]).then((e=>{window.require.defined&&window.require.defined("orb/features/masthead/_layoutprimarynav")&&!e[0]&&window.require(["orb/features/masthead/_layoutprimarynav"],(e=>e.recalculateLayout()))})),document.documentElement.className.includes("b-reith-serif-font")&&e("ReithSans","b-reith-serif-loaded")}();
//# sourceMappingURL=orbit.js.map