if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const u=s=>i(s,r),t={module:{uri:r},exports:o,require:u};e[r]=Promise.all(n.map((s=>t[s]||u(s)))).then((s=>(l(...s),o)))}}define(["./workbox-56a10583"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/10-5d50a3c3.js",revision:null},{url:"assets/11-c3a5bb7b.js",revision:null},{url:"assets/404-288f1f45.js",revision:null},{url:"assets/about-abf22048.js",revision:null},{url:"assets/display-a3463ab4.js",revision:null},{url:"assets/home-f22682f3.js",revision:null},{url:"assets/index-00c99492.js",revision:null},{url:"assets/index-43bca6b0.js",revision:null},{url:"assets/index-4d8d53f7.js",revision:null},{url:"assets/index-57457921.js",revision:null},{url:"assets/index-6d52e175.js",revision:null},{url:"assets/index-baef5889.js",revision:null},{url:"assets/index-d0291184.css",revision:null},{url:"assets/index-da514082.js",revision:null},{url:"assets/virtual_pwa-register-f0cf0c59.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"b810b6c002b9718b98a54ccf087ca0a4"},{url:"favicon.png",revision:"345902fddb40cfe34b808b0af39e6758"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"fe0abe97338b3423711ab7f26e3a2118"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
