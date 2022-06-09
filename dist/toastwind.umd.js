(function(p,y){typeof exports=="object"&&typeof module!="undefined"?module.exports=y():typeof define=="function"&&define.amd?define(y):(p=typeof globalThis!="undefined"?globalThis:p||self,p.toastwind=y())})(this,function(){"use strict";function p(){}function y(t){return t()}function A(){return Object.create(null)}function C(t){t.forEach(y)}function q(t){return typeof t=="function"}function F(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function R(t){return Object.keys(t).length===0}function h(t,e){t.appendChild(e)}function L(t,e,r){t.insertBefore(e,r||null)}function _(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function B(){return M(" ")}function D(){return M("")}function G(t,e,r,o){return t.addEventListener(e,r,o),()=>t.removeEventListener(e,r,o)}function c(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function K(t){return Array.from(t.childNodes)}function Q(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let N;function z(t){N=t}const j=[],H=[],S=[],J=[],V=Promise.resolve();let T=!1;function W(){T||(T=!0,V.then(I))}function $(t){S.push(t)}const O=new Set;let E=0;function I(){const t=N;do{for(;E<j.length;){const e=j[E];E++,z(e),X(e.$$)}for(z(null),j.length=0,E=0;H.length;)H.pop()();for(let e=0;e<S.length;e+=1){const r=S[e];O.has(r)||(O.add(r),r())}S.length=0}while(j.length);for(;J.length;)J.pop()();T=!1,O.clear(),z(t)}function X(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}const Y=new Set;function Z(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function tt(t,e,r,o){const{fragment:i,on_mount:f,on_destroy:l,after_update:d}=t.$$;i&&i.m(e,r),o||$(()=>{const a=f.map(y).filter(q);l?l.push(...a):C(a),t.$$.on_mount=[]}),d.forEach($)}function et(t,e){const r=t.$$;r.fragment!==null&&(C(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function rt(t,e){t.$$.dirty[0]===-1&&(j.push(t),W(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(t,e,r,o,i,f,l,d=[-1]){const a=N;z(t);const n=t.$$={fragment:null,ctx:null,props:f,update:p,not_equal:i,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:A(),dirty:d,skip_bound:!1,root:e.target||a.$$.root};l&&l(n.root);let w=!1;if(n.ctx=r?r(t,e.props||{},(s,m,...k)=>{const u=k.length?k[0]:m;return n.ctx&&i(n.ctx[s],n.ctx[s]=u)&&(!n.skip_bound&&n.bound[s]&&n.bound[s](u),w&&rt(t,s)),m}):[],n.update(),w=!0,C(n.before_update),n.fragment=o?o(n.ctx):!1,e.target){if(e.hydrate){const s=K(e.target);n.fragment&&n.fragment.l(s),s.forEach(_)}else n.fragment&&n.fragment.c();e.intro&&Z(t.$$.fragment),tt(t,e.target,e.anchor,e.customElement),I()}z(a)}class nt{$destroy(){et(this,1),this.$destroy=p}$on(e,r){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(r),()=>{const i=o.indexOf(r);i!==-1&&o.splice(i,1)}}$set(e){this.$$set&&!R(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function P(t){let e,r,o,i,f,l,d,a,n,w,s,m;function k(g,v){return g[2].status=="error"?at:it}let u=k(t),b=u(t);return{c(){e=x("div"),r=x("div"),b.c(),o=B(),i=x("div"),f=M(t[1]),l=M("."),d=B(),a=x("button"),a.innerHTML=`<span class="sr-only">Close</span> 
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`,c(i,"class","ml-3 text-sm font-normal"),c(a,"type","button"),c(a,"class","ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"),c(a,"data-dismiss-target","#toast-success"),c(a,"aria-label","Close"),c(r,"id","toast-success"),c(r,"class",n="absolute "+t[3]+" flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"),c(r,"role","alert"),c(e,"class",w=t[2].darkMode?"":"dark")},m(g,v){L(g,e,v),h(e,r),b.m(r,null),h(r,o),h(r,i),h(i,f),h(i,l),h(r,d),h(r,a),s||(m=G(a,"click",t[5]),s=!0)},p(g,v){u!==(u=k(g))&&(b.d(1),b=u(g),b&&(b.c(),b.m(r,o))),v&2&&Q(f,g[1]),v&8&&n!==(n="absolute "+g[3]+" flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800")&&c(r,"class",n),v&4&&w!==(w=g[2].darkMode?"":"dark")&&c(e,"class",w)},d(g){g&&_(e),b.d(),s=!1,m()}}}function it(t){let e;return{c(){e=x("div"),e.innerHTML='<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>',c(e,"class","inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200")},m(r,o){L(r,e,o)},d(r){r&&_(e)}}}function at(t){let e;return{c(){e=x("div"),e.innerHTML='<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>',c(e,"class","inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200")},m(r,o){L(r,e,o)},d(r){r&&_(e)}}}function lt(t){let e,r=t[0]&&P(t);return{c(){r&&r.c(),e=D()},m(o,i){r&&r.m(o,i),L(o,e,i)},p(o,[i]){o[0]?r?r.p(o,i):(r=P(o),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},i:p,o:p,d(o){r&&r.d(o),o&&_(e)}}}function st(t,e,r){let o=!1,i="Congratulation",f={timeout:3e3,status:"success",position:"top right",darkMode:!1},l=JSON.parse(JSON.stringify(f)),d="right-5 top-5",a;function n(s="Congratulation",m=f){l&&typeof l=="object"?Object.keys(l).forEach(u=>{r(2,l[u]=m[u],l)}):r(2,l=JSON.parse(JSON.stringify(f))),r(3,d=""),l.position.split(" ").forEach(u=>{switch(u){case"right":r(3,d+=" right-5 ");break;case"left":r(3,d+=" left-5 ");break;case"bottom":r(3,d+=" bottom-5 ");break;case"top":r(3,d+=" top-5 ");break}}),r(0,o=!0),r(1,i=s),a&&clearTimeout(a),a=setTimeout(()=>{r(0,o=!1)},l.timeout)}return[o,i,l,d,n,()=>{r(0,o=!1)}]}class ct extends nt{constructor(e){super(),ot(this,e,st,lt,F,{show:4})}get show(){return this.$$.ctx[4]}}var dt=(()=>`*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.visible{visibility:visible}.absolute{position:absolute}.right-5{right:1.25rem}.top-5{top:1.25rem}.left-5{left:1.25rem}.bottom-5{bottom:1.25rem}.-mx-1\\.5{margin-left:-.375rem;margin-right:-.375rem}.-my-1\\.5{margin-top:-.375rem;margin-bottom:-.375rem}.-mx-1{margin-left:-.25rem;margin-right:-.25rem}.-my-1{margin-top:-.25rem;margin-bottom:-.25rem}.mb-4{margin-bottom:1rem}.ml-3{margin-left:.75rem}.ml-auto{margin-left:auto}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.h-8{height:2rem}.h-5{height:1.25rem}.w-full{width:100%}.w-8{width:2rem}.w-5{width:1.25rem}.max-w-xs{max-width:20rem}.flex-shrink-0{flex-shrink:0}.items-center{align-items:center}.justify-center{justify-content:center}.rounded-lg{border-radius:.5rem}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity))}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity))}.p-4{padding:1rem}.p-1\\.5{padding:.375rem}.p-1{padding:.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-normal{font-weight:400}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity))}.text-green-500{--tw-text-opacity: 1;color:rgb(34 197 94 / var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.hover\\:text-gray-900:hover{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-gray-300:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity))}.dark .dark\\:bg-gray-800{--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.dark .dark\\:bg-red-800{--tw-bg-opacity: 1;background-color:rgb(153 27 27 / var(--tw-bg-opacity))}.dark .dark\\:bg-green-800{--tw-bg-opacity: 1;background-color:rgb(22 101 52 / var(--tw-bg-opacity))}.dark .dark\\:text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.dark .dark\\:text-red-200{--tw-text-opacity: 1;color:rgb(254 202 202 / var(--tw-text-opacity))}.dark .dark\\:text-green-200{--tw-text-opacity: 1;color:rgb(187 247 208 / var(--tw-text-opacity))}.dark .dark\\:text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.dark .dark\\:hover\\:bg-gray-700:hover{--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.dark .dark\\:hover\\:text-white:hover{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}
`)();const U=new ct({target:document.querySelector("body")});return window.Toast=U,U});
