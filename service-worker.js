if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const d=e=>i(e,n),l={module:{uri:n},exports:o,require:d};s[n]=Promise.all(r.map((e=>l[e]||d(e)))).then((e=>(t(...e),o)))}}define(["./workbox-6716fad7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"d9a7ad2973a4c0df44e133a471b7f08d"},{url:"js/401.8bbadd8d.js",revision:null},{url:"js/401.8bbadd8d.js.LICENSE.txt",revision:"31c5fda93518b20352f504789cfb5a5f"},{url:"js/app.4cc4d825.js",revision:null}],{})}));
