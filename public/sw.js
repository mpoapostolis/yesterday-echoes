if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let i={};const r=e=>a(e,n),d={module:{uri:n},exports:i,require:r};s[n]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-83b758e3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/198-e957485327dbbdd1.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/198-e957485327dbbdd1.js.map",revision:"1b0d83db929aa59a2a7d3eb5d61cc757"},{url:"/_next/static/chunks/226-a11f401658d28514.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/226-a11f401658d28514.js.map",revision:"59c5cbc7a623929d1886e727cdef3225"},{url:"/_next/static/chunks/261-ca858bbccd16443b.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/261-ca858bbccd16443b.js.map",revision:"d1b7ec58d132c4078dd071d2588448b1"},{url:"/_next/static/chunks/31-1a44201bd62a24a1.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/31-1a44201bd62a24a1.js.map",revision:"5e0818760ff81482a1f7e4a3d1428e02"},{url:"/_next/static/chunks/322-15ecf8ec78c56d76.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/322-15ecf8ec78c56d76.js.map",revision:"364e8bacc184e44cc9a82d2e319888ab"},{url:"/_next/static/chunks/438-67f7c274d353f4b2.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/438-67f7c274d353f4b2.js.map",revision:"02aa3be1550f11e65efab4e88e2f76e3"},{url:"/_next/static/chunks/452-f9d4732ba8212fd3.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/452-f9d4732ba8212fd3.js.map",revision:"4f4a88b22b1581608dfb8a1d48e8dd77"},{url:"/_next/static/chunks/483-85f2cd83eebc6ce6.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/483-85f2cd83eebc6ce6.js.map",revision:"3e3d7bea9fa17315213a55ca591f3ed7"},{url:"/_next/static/chunks/492-3e2ebdf1179473b5.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/492-3e2ebdf1179473b5.js.map",revision:"8e4b9b5fbc56ded9e5a0145dd3d96c49"},{url:"/_next/static/chunks/5a1fafb0-1963228353f14316.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/756-20672e4432380c4f.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/756-20672e4432380c4f.js.map",revision:"639e2a8c4bde005608d5c262c57f72e6"},{url:"/_next/static/chunks/839-2c731c52f6f3a84d.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/839-2c731c52f6f3a84d.js.map",revision:"0d740afe95bbc85da8d36968ba95bdca"},{url:"/_next/static/chunks/86-045baba8f48c9f65.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/86-045baba8f48c9f65.js.map",revision:"b8a47b07599b7884452bbe735a68a2d8"},{url:"/_next/static/chunks/8e5a698c-9ce5faf16870534d.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/979-7a792c0e82d5a409.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/979-7a792c0e82d5a409.js.map",revision:"9c9fb15d66ec79c76a263953bf779ea3"},{url:"/_next/static/chunks/9dbc26f1-ceee6d16319f69ac.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/9dbc26f1-ceee6d16319f69ac.js.map",revision:"1b6d9ab9568159b81847273464cf38bd"},{url:"/_next/static/chunks/app/editor/page-22ba182b0c508b6d.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/app/editor/page-22ba182b0c508b6d.js.map",revision:"4cd794e4609cae385d79ba524389d4d2"},{url:"/_next/static/chunks/app/game/page-df0c53420e1fc324.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/app/game/page-df0c53420e1fc324.js.map",revision:"90257ebec8d1a4eafb3a517b69d640bb"},{url:"/_next/static/chunks/app/layout-662752ec554315b5.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/app/layout-662752ec554315b5.js.map",revision:"f6d59e0bd880b930fcd8766e079b588e"},{url:"/_next/static/chunks/app/library/page-5f4cdbccd74669dd.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/app/library/page-5f4cdbccd74669dd.js.map",revision:"130f41e0232984f924db6ea64a434c7d"},{url:"/_next/static/chunks/app/loading-fade030e5a4b03a2.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/app/page-019e7abb24450088.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/app/page-019e7abb24450088.js.map",revision:"9b2461934411c5c1fd182f2f99e1b079"},{url:"/_next/static/chunks/app/policy/page-f9152544f1c73572.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/bce60fc1-0a372a072b73a8f7.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/bce60fc1-0a372a072b73a8f7.js.map",revision:"76bd1ac474e1cd7a4ec5763bccce33fa"},{url:"/_next/static/chunks/framework-c9d5575985066b2b.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/framework-c9d5575985066b2b.js.map",revision:"1c0b73639b9ebee7f496f9aa022fb020"},{url:"/_next/static/chunks/main-app-2e97495a6147a605.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/main-app-2e97495a6147a605.js.map",revision:"e56223958773fb0f9ebd1282c7f816bf"},{url:"/_next/static/chunks/main-f7442b592cdfca60.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/main-f7442b592cdfca60.js.map",revision:"2232142ae204b6c3077abf1a597f5f35"},{url:"/_next/static/chunks/pages/_app-73e538dc8660c960.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/pages/_app-73e538dc8660c960.js.map",revision:"0bfc4ab0436cc268691955eb193659db"},{url:"/_next/static/chunks/pages/_error-3a56c02fd8aa0f62.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/pages/_error-3a56c02fd8aa0f62.js.map",revision:"44d76970eabb7951cd3ea1f7ed04ec76"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-b750ef0aded4428d.js",revision:"oMrz_FztWvO3H6jSx44AG"},{url:"/_next/static/chunks/webpack-b750ef0aded4428d.js.map",revision:"eb086d3a11775fc2f07cbd66ca2a7e3f"},{url:"/_next/static/css/d1cd5d53cdadbe3d.css",revision:"d1cd5d53cdadbe3d"},{url:"/_next/static/css/d1cd5d53cdadbe3d.css.map",revision:"dbdbde775dd47c1f576926cf58d7eca3"},{url:"/_next/static/oMrz_FztWvO3H6jSx44AG/_buildManifest.js",revision:"4a9cb34cbac7e24ea49089ac4d7a0652"},{url:"/_next/static/oMrz_FztWvO3H6jSx44AG/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
//# sourceMappingURL=sw.js.map