if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>i(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(n.map((s=>t[s]||o(s)))).then((s=>(l(...s),u)))}}define(["./workbox-56a10583"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/10-1f1d5677.js",revision:null},{url:"assets/10-63fdcf3d.js",revision:null},{url:"assets/11-d1d494b6.js",revision:null},{url:"assets/404-e895009f.js",revision:null},{url:"assets/about-fdff1ffb.js",revision:null},{url:"assets/display-d235a9a9.js",revision:null},{url:"assets/home-43e15ad3.js",revision:null},{url:"assets/index-31332260.js",revision:null},{url:"assets/index-3d6293b0.js",revision:null},{url:"assets/index-502865ab.css",revision:null},{url:"assets/index-906a368a.js",revision:null},{url:"assets/index-99e56377.js",revision:null},{url:"assets/index-e0c1f826.js",revision:null},{url:"assets/index-e24ec85f.js",revision:null},{url:"assets/index-f86c651e.js",revision:null},{url:"assets/virtual_pwa-register-d32f685d.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"8971f491d0e24741883390e64c8999d9"},{url:"favicon.png",revision:"345902fddb40cfe34b808b0af39e6758"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"pwa-192x192.png",revision:"0ab8522925cd1272f5441a66e1ca8691"},{url:"pwa-512x512.png",revision:"d6b46405646f90e23e94bdd02bc4f98b"},{url:"manifest.webmanifest",revision:"fe0abe97338b3423711ab7f26e3a2118"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
