(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Zd=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ru={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),i.push(n[l],n[h],n[d],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(iu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||u==null||h==null)throw new ef;const d=s<<2|a>>4;if(i.push(d),u!==64){const g=a<<4&240|u>>2;if(i.push(g),h!==64){const T=u<<6&192|h;i.push(T)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ef extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tf=function(t){const e=iu(t);return ru.encodeByteArray(e,!0)},Ai=function(t){return tf(t).replace(/\./g,"")},su=function(t){try{return ru.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=()=>nf().__FIREBASE_DEFAULTS__,sf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},of=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&su(t[1]);return e&&JSON.parse(e)},Xs=()=>{try{return rf()||sf()||of()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ou=t=>{var e,n;return(n=(e=Xs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},af=t=>{const e=ou(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},cf=()=>{var t;return(t=Xs())===null||t===void 0?void 0:t.config},au=t=>{var e;return(e=Xs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ai(JSON.stringify(n)),Ai(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(re())}function cu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function df(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ff(){const t=re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uu(){try{return typeof indexedDB=="object"}catch{return!1}}function lu(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function pf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="FirebaseError";class Ie extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=gf,Object.setPrototypeOf(this,Ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vt.prototype.create)}}class vt{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?mf(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ie(r,a,i)}}function mf(t,e){return t.replace(yf,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const yf=/\{\$([^}]+)}/g;function vf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function In(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Ia(s)&&Ia(o)){if(!In(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Ia(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function rn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function sn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wf(t,e){const n=new If(t,e);return n.subscribe.bind(n)}class If{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Ef(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Mr),r.error===void 0&&(r.error=Mr),r.complete===void 0&&(r.complete=Mr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ef(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mr(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=1e3,_f=2,Sf=4*60*60*1e3,Af=.5;function Ea(t,e=Tf,n=_f){const i=e*Math.pow(n,t),r=Math.round(Af*i*(Math.random()-.5)*2);return Math.min(Sf,i+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t){return t&&t._delegate?t._delegate:t}class me{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new uf;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kf(e))try{this.getOrInitializeService({instanceIdentifier:nt})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nt){return this.instances.has(e)}getOptions(e=nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:bf(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=nt){return this.component?this.component.multipleInstances?e:nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bf(t){return t===nt?void 0:t}function kf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Cf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(D||(D={}));const Df={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Nf=D.INFO,Of={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Pf=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=Of[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zi{constructor(e){this.name=e,this._logLevel=Nf,this._logHandler=Pf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Df[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const Lf=(t,e)=>e.some(n=>t instanceof n);let Ta,_a;function Mf(){return Ta||(Ta=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xf(){return _a||(_a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hu=new WeakMap,ds=new WeakMap,du=new WeakMap,xr=new WeakMap,Js=new WeakMap;function Ff(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ge(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hu.set(n,t)}).catch(()=>{}),Js.set(e,t),e}function Uf(t){if(ds.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ds.set(t,e)}let fs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ds.get(t);if(e==="objectStoreNames")return t.objectStoreNames||du.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ge(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vf(t){fs=t(fs)}function $f(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Fr(this),e,...n);return du.set(i,e.sort?e.sort():[e]),Ge(i)}:xf().includes(t)?function(...e){return t.apply(Fr(this),e),Ge(hu.get(this))}:function(...e){return Ge(t.apply(Fr(this),e))}}function Bf(t){return typeof t=="function"?$f(t):(t instanceof IDBTransaction&&Uf(t),Lf(t,Mf())?new Proxy(t,fs):t)}function Ge(t){if(t instanceof IDBRequest)return Ff(t);if(xr.has(t))return xr.get(t);const e=Bf(t);return e!==t&&(xr.set(t,e),Js.set(e,t)),e}const Fr=t=>Js.get(t);function jf(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Ge(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Ge(o.result),c.oldVersion,c.newVersion,Ge(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const qf=["get","getKey","getAll","getAllKeys","count"],Hf=["put","add","delete","clear"],Ur=new Map;function Sa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ur.get(e))return Ur.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Hf.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||qf.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Ur.set(e,s),s}Vf(t=>({...t,get:(e,n,i)=>Sa(e,n)||t.get(e,n,i),has:(e,n)=>!!Sa(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kf(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Kf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ps="@firebase/app",Aa="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new Zi("@firebase/app"),Gf="@firebase/app-compat",Wf="@firebase/analytics-compat",Qf="@firebase/analytics",Yf="@firebase/app-check-compat",Xf="@firebase/app-check",Jf="@firebase/auth",Zf="@firebase/auth-compat",ep="@firebase/database",tp="@firebase/database-compat",np="@firebase/functions",ip="@firebase/functions-compat",rp="@firebase/installations",sp="@firebase/installations-compat",op="@firebase/messaging",ap="@firebase/messaging-compat",cp="@firebase/performance",up="@firebase/performance-compat",lp="@firebase/remote-config",hp="@firebase/remote-config-compat",dp="@firebase/storage",fp="@firebase/storage-compat",pp="@firebase/firestore",gp="@firebase/firestore-compat",mp="firebase",yp="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="[DEFAULT]",vp={[ps]:"fire-core",[Gf]:"fire-core-compat",[Qf]:"fire-analytics",[Wf]:"fire-analytics-compat",[Xf]:"fire-app-check",[Yf]:"fire-app-check-compat",[Jf]:"fire-auth",[Zf]:"fire-auth-compat",[ep]:"fire-rtdb",[tp]:"fire-rtdb-compat",[np]:"fire-fn",[ip]:"fire-fn-compat",[rp]:"fire-iid",[sp]:"fire-iid-compat",[op]:"fire-fcm",[ap]:"fire-fcm-compat",[cp]:"fire-perf",[up]:"fire-perf-compat",[lp]:"fire-rc",[hp]:"fire-rc-compat",[dp]:"fire-gcs",[fp]:"fire-gcs-compat",[pp]:"fire-fst",[gp]:"fire-fst-compat","fire-js":"fire-js",[mp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Map,ms=new Map;function wp(t,e){try{t.container.addComponent(e)}catch(n){ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ce(t){const e=t.name;if(ms.has(e))return ut.debug(`There were multiple attempts to register component ${e}.`),!1;ms.set(e,t);for(const n of Ci.values())wp(n,t);return!0}function wt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},We=new vt("app","Firebase",Ip);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new me("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw We.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=yp;function fu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:gs,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw We.create("bad-app-name",{appName:String(r)});if(n||(n=cf()),!n)throw We.create("no-options");const s=Ci.get(r);if(s){if(In(n,s.options)&&In(i,s.config))return s;throw We.create("duplicate-app",{appName:r})}const o=new Rf(r);for(const c of ms.values())o.addComponent(c);const a=new Ep(n,i,o);return Ci.set(r,a),a}function Zs(t=gs){const e=Ci.get(t);if(!e&&t===gs)return fu();if(!e)throw We.create("no-app",{appName:t});return e}function pe(t,e,n){var i;let r=(i=vp[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ut.warn(a.join(" "));return}Ce(new me(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="firebase-heartbeat-database",_p=1,En="firebase-heartbeat-store";let Vr=null;function pu(){return Vr||(Vr=jf(Tp,_p,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(En)}}}).catch(t=>{throw We.create("idb-open",{originalErrorMessage:t.message})})),Vr}async function Sp(t){try{return(await pu()).transaction(En).objectStore(En).get(gu(t))}catch(e){if(e instanceof Ie)ut.warn(e.message);else{const n=We.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ut.warn(n.message)}}}async function Ca(t,e){try{const i=(await pu()).transaction(En,"readwrite");return await i.objectStore(En).put(e,gu(t)),i.done}catch(n){if(n instanceof Ie)ut.warn(n.message);else{const i=We.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ut.warn(i.message)}}}function gu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=1024,Cp=30*24*60*60*1e3;class bp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rp(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ba();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Cp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ba(),{heartbeatsToSend:n,unsentEntries:i}=kp(this._heartbeatsCache.heartbeats),r=Ai(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ba(){return new Date().toISOString().substring(0,10)}function kp(t,e=Ap){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),ka(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ka(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Rp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uu()?lu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ca(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ca(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ka(t){return Ai(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t){Ce(new me("platform-logger",e=>new zf(e),"PRIVATE")),Ce(new me("heartbeat",e=>new bp(e),"PRIVATE")),pe(ps,Aa,t),pe(ps,Aa,"esm2017"),pe("fire-js","")}Dp("");var Np="firebase",Op="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pe(Np,Op,"app");var Pp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,eo=eo||{},S=Pp||self;function bi(){}function er(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Un(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Lp(t){return Object.prototype.hasOwnProperty.call(t,$r)&&t[$r]||(t[$r]=++Mp)}var $r="closure_uid_"+(1e9*Math.random()>>>0),Mp=0;function xp(t,e,n){return t.call.apply(t.bind,arguments)}function Fp(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function te(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?te=xp:te=Fp,te.apply(null,arguments)}function ai(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function G(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function et(){this.s=this.s,this.o=this.o}var Up=0;et.prototype.s=!1;et.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),Up!=0)&&Lp(this)};et.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function to(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Ra(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(er(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function ne(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ne.prototype.h=function(){this.defaultPrevented=!0};var Vp=function(){if(!S.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{S.addEventListener("test",bi,e),S.removeEventListener("test",bi,e)}catch{}return t}();function ki(t){return/^[\s\xa0]*$/.test(t)}var Da=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Br(t,e){return t<e?-1:t>e?1:0}function tr(){var t=S.navigator;return t&&(t=t.userAgent)?t:""}function Ee(t){return tr().indexOf(t)!=-1}function no(t){return no[" "](t),t}no[" "]=bi;function yu(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var $p=Ee("Opera"),Mt=Ee("Trident")||Ee("MSIE"),vu=Ee("Edge"),ys=vu||Mt,wu=Ee("Gecko")&&!(tr().toLowerCase().indexOf("webkit")!=-1&&!Ee("Edge"))&&!(Ee("Trident")||Ee("MSIE"))&&!Ee("Edge"),Bp=tr().toLowerCase().indexOf("webkit")!=-1&&!Ee("Edge");function Iu(){var t=S.document;return t?t.documentMode:void 0}var Ri;e:{var jr="",qr=function(){var t=tr();if(wu)return/rv:([^\);]+)(\)|;)/.exec(t);if(vu)return/Edge\/([\d\.]+)/.exec(t);if(Mt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Bp)return/WebKit\/(\S+)/.exec(t);if($p)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(qr&&(jr=qr?qr[1]:""),Mt){var Hr=Iu();if(Hr!=null&&Hr>parseFloat(jr)){Ri=String(Hr);break e}}Ri=jr}var jp={};function qp(){return yu(jp,9,function(){let t=0;const e=Da(String(Ri)).split("."),n=Da("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=Br(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||Br(r[2].length==0,s[2].length==0)||Br(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}var vs;if(S.document&&Mt){var Na=Iu();vs=Na||parseInt(Ri,10)||void 0}else vs=void 0;var Hp=vs;function Tn(t,e){if(ne.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(wu){e:{try{no(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:zp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Tn.$.h.call(this)}}G(Tn,ne);var zp={2:"touch",3:"pen",4:"mouse"};Tn.prototype.h=function(){Tn.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Vn="closure_listenable_"+(1e6*Math.random()|0),Kp=0;function Gp(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++Kp,this.fa=this.ia=!1}function nr(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function io(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Eu(t){const e={};for(const n in t)e[n]=t[n];return e}const Oa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tu(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<Oa.length;s++)n=Oa[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ir(t){this.src=t,this.g={},this.h=0}ir.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Is(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Gp(e,this.src,s,!!i,r),e.ia=n,t.push(e)),e};function ws(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=mu(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(nr(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Is(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}var ro="closure_lm_"+(1e6*Math.random()|0),zr={};function _u(t,e,n,i,r){if(i&&i.once)return Au(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)_u(t,e[s],n,i,r);return null}return n=ao(n),t&&t[Vn]?t.O(e,n,Un(i)?!!i.capture:!!i,r):Su(t,e,n,!1,i,r)}function Su(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=Un(r)?!!r.capture:!!r,a=oo(t);if(a||(t[ro]=a=new ir(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=Wp(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Vp||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(bu(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Wp(){function t(n){return e.call(t.src,t.listener,n)}const e=Qp;return t}function Au(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Au(t,e[s],n,i,r);return null}return n=ao(n),t&&t[Vn]?t.P(e,n,Un(i)?!!i.capture:!!i,r):Su(t,e,n,!0,i,r)}function Cu(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Cu(t,e[s],n,i,r);else i=Un(i)?!!i.capture:!!i,n=ao(n),t&&t[Vn]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Is(s,n,i,r),-1<n&&(nr(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=oo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Is(e,n,i,r)),(n=-1<t?e[t]:null)&&so(n))}function so(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Vn])ws(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(bu(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=oo(e))?(ws(n,t),n.h==0&&(n.src=null,e[ro]=null)):nr(t)}}}function bu(t){return t in zr?zr[t]:zr[t]="on"+t}function Qp(t,e){if(t.fa)t=!0;else{e=new Tn(e,this);var n=t.listener,i=t.la||t.src;t.ia&&so(t),t=n.call(i,e)}return t}function oo(t){return t=t[ro],t instanceof ir?t:null}var Kr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ao(t){return typeof t=="function"?t:(t[Kr]||(t[Kr]=function(e){return t.handleEvent(e)}),t[Kr])}function K(){et.call(this),this.i=new ir(this),this.S=this,this.J=null}G(K,et);K.prototype[Vn]=!0;K.prototype.removeEventListener=function(t,e,n,i){Cu(this,t,e,n,i)};function Y(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new ne(e,t);else if(e instanceof ne)e.target=e.target||t;else{var r=e;e=new ne(i,t),Tu(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=ci(o,i,!0,e)&&r}if(o=e.g=t,r=ci(o,i,!0,e)&&r,r=ci(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=ci(o,i,!1,e)&&r}K.prototype.N=function(){if(K.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)nr(n[i]);delete t.g[e],t.h--}}this.J=null};K.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};K.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function ci(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ws(t.i,o),r=a.call(c,i)!==!1&&r}}return r&&!i.defaultPrevented}var co=S.JSON.stringify;function Yp(){var t=Du;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Xp{constructor(){this.h=this.g=null}add(e,n){const i=ku.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var ku=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Jp,t=>t.reset());class Jp{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Zp(t){S.setTimeout(()=>{throw t},0)}function Ru(t,e){Es||eg(),Ts||(Es(),Ts=!0),Du.add(t,e)}var Es;function eg(){var t=S.Promise.resolve(void 0);Es=function(){t.then(tg)}}var Ts=!1,Du=new Xp;function tg(){for(var t;t=Yp();){try{t.h.call(t.g)}catch(n){Zp(n)}var e=ku;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ts=!1}function rr(t,e){K.call(this),this.h=t||1,this.g=e||S,this.j=te(this.qb,this),this.l=Date.now()}G(rr,K);m=rr.prototype;m.ga=!1;m.T=null;m.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Y(this,"tick"),this.ga&&(uo(this),this.start()))}};m.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function uo(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}m.N=function(){rr.$.N.call(this),uo(this),delete this.g};function lo(t,e,n){if(typeof t=="function")n&&(t=te(t,n));else if(t&&typeof t.handleEvent=="function")t=te(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:S.setTimeout(t,e||0)}function Nu(t){t.g=lo(()=>{t.g=null,t.i&&(t.i=!1,Nu(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class ng extends et{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Nu(this)}N(){super.N(),this.g&&(S.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _n(t){et.call(this),this.h=t,this.g={}}G(_n,et);var Pa=[];function Ou(t,e,n,i){Array.isArray(n)||(n&&(Pa[0]=n.toString()),n=Pa);for(var r=0;r<n.length;r++){var s=_u(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Pu(t){io(t.g,function(e,n){this.g.hasOwnProperty(n)&&so(e)},t),t.g={}}_n.prototype.N=function(){_n.$.N.call(this),Pu(this)};_n.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sr(){this.g=!0}sr.prototype.Ea=function(){this.g=!1};function ig(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function rg(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function bt(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+og(t,n)+(i?" "+i:"")})}function sg(t,e){t.info(function(){return"TIMEOUT: "+e})}sr.prototype.info=function(){};function og(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return co(n)}catch{return e}}var It={},La=null;function or(){return La=La||new K}It.Ta="serverreachability";function Lu(t){ne.call(this,It.Ta,t)}G(Lu,ne);function Sn(t){const e=or();Y(e,new Lu(e))}It.STAT_EVENT="statevent";function Mu(t,e){ne.call(this,It.STAT_EVENT,t),this.stat=e}G(Mu,ne);function oe(t){const e=or();Y(e,new Mu(e,t))}It.Ua="timingevent";function xu(t,e){ne.call(this,It.Ua,t),this.size=e}G(xu,ne);function $n(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return S.setTimeout(function(){t()},e)}var ar={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Fu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ho(){}ho.prototype.h=null;function Ma(t){return t.h||(t.h=t.i())}function Uu(){}var Bn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function fo(){ne.call(this,"d")}G(fo,ne);function po(){ne.call(this,"c")}G(po,ne);var _s;function cr(){}G(cr,ho);cr.prototype.g=function(){return new XMLHttpRequest};cr.prototype.i=function(){return{}};_s=new cr;function jn(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new _n(this),this.P=ag,t=ys?125:void 0,this.V=new rr(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new Vu}function Vu(){this.i=null,this.g="",this.h=!1}var ag=45e3,Ss={},Di={};m=jn.prototype;m.setTimeout=function(t){this.P=t};function As(t,e,n){t.L=1,t.v=lr(Le(e)),t.s=n,t.S=!0,$u(t,null)}function $u(t,e){t.G=Date.now(),qn(t),t.A=Le(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),Wu(n.i,"t",i),t.C=0,n=t.l.I,t.h=new Vu,t.g=gl(t.l,n?e:null,!t.s),0<t.O&&(t.M=new ng(te(t.Pa,t,t.g),t.O)),Ou(t.U,t.g,"readystatechange",t.nb),e=t.I?Eu(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Sn(),ig(t.j,t.u,t.A,t.m,t.W,t.s)}m.nb=function(t){t=t.target;const e=this.M;e&&ke(t)==3?e.l():this.Pa(t)};m.Pa=function(t){try{if(t==this.g)e:{const l=ke(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||ys||this.g&&(this.h.h||this.g.ja()||Va(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Sn(3):Sn(2)),ur(this);var n=this.g.da();this.aa=n;t:if(Bu(this)){var i=Va(this.g);t="";var r=i.length,s=ke(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){it(this),hn(this);var o="";break t}this.h.i=new S.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,rg(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ki(a)){var u=a;break t}}u=null}if(n=u)bt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cs(this,n);else{this.i=!1,this.o=3,oe(12),it(this),hn(this);break e}}this.S?(ju(this,l,o),ys&&this.i&&l==3&&(Ou(this.U,this.V,"tick",this.mb),this.V.start())):(bt(this.j,this.m,o,null),Cs(this,o)),l==4&&it(this),this.i&&!this.J&&(l==4?hl(this.l,this):(this.i=!1,qn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,oe(12)):(this.o=0,oe(13)),it(this),hn(this)}}}catch{}finally{}};function Bu(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function ju(t,e,n){let i=!0,r;for(;!t.J&&t.C<n.length;)if(r=cg(t,n),r==Di){e==4&&(t.o=4,oe(14),i=!1),bt(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Ss){t.o=4,oe(15),bt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else bt(t.j,t.m,r,null),Cs(t,r);Bu(t)&&r!=Di&&r!=Ss&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,oe(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Eo(e),e.L=!0,oe(11))):(bt(t.j,t.m,n,"[Invalid Chunked Response]"),it(t),hn(t))}m.mb=function(){if(this.g){var t=ke(this.g),e=this.g.ja();this.C<e.length&&(ur(this),ju(this,t,e),this.i&&t!=4&&qn(this))}};function cg(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Di:(n=Number(e.substring(n,i)),isNaN(n)?Ss:(i+=1,i+n>e.length?Di:(e=e.substr(i,n),t.C=i+n,e)))}m.cancel=function(){this.J=!0,it(this)};function qn(t){t.Y=Date.now()+t.P,qu(t,t.P)}function qu(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=$n(te(t.lb,t),e)}function ur(t){t.B&&(S.clearTimeout(t.B),t.B=null)}m.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(sg(this.j,this.A),this.L!=2&&(Sn(),oe(17)),it(this),this.o=2,hn(this)):qu(this,this.Y-t)};function hn(t){t.l.H==0||t.J||hl(t.l,t)}function it(t){ur(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,uo(t.V),Pu(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Cs(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||bs(n.h,t))){if(!t.K&&bs(n.h,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Pi(n),fr(n);else break e;Io(n),oe(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.M&&n.A==0&&!n.v&&(n.v=$n(te(n.ib,n),6e3));if(1>=Xu(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else rt(n,11)}else if((t.K||n.g==t)&&Pi(n),!ki(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.J=u[1],n.oa=u[2];const l=u[3];l!=null&&(n.qa=l,n.j.info("VER="+n.qa));const h=u[4];h!=null&&(n.Ga=h,n.j.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.K=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const g=t.g;if(g){const T=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var s=i.h;s.g||T.indexOf("spdy")==-1&&T.indexOf("quic")==-1&&T.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(go(s,s.h),s.h=null))}if(i.F){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(i.Da=I,M(i.G,i.F,I))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=pl(i,i.I?i.oa:null,i.Y),o.K){Ju(i.h,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(ur(a),qn(a)),i.g=o}else ul(i);0<n.i.length&&pr(n)}else u[0]!="stop"&&u[0]!="close"||rt(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?rt(n,7):wo(n):u[0]!="noop"&&n.l&&n.l.Aa(u),n.A=0)}}Sn(4)}catch{}}function ug(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(er(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function lg(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(er(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Hu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(er(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=lg(t),i=ug(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var zu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hg(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function at(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof at){this.h=e!==void 0?e:t.h,Ni(this,t.j),this.s=t.s,this.g=t.g,Oi(this,t.m),this.l=t.l,e=t.i;var n=new An;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),xa(this,n),this.o=t.o}else t&&(n=String(t).match(zu))?(this.h=!!e,Ni(this,n[1]||"",!0),this.s=on(n[2]||""),this.g=on(n[3]||"",!0),Oi(this,n[4]),this.l=on(n[5]||"",!0),xa(this,n[6]||"",!0),this.o=on(n[7]||"")):(this.h=!!e,this.i=new An(null,this.h))}at.prototype.toString=function(){var t=[],e=this.j;e&&t.push(an(e,Fa,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(an(e,Fa,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(an(n,n.charAt(0)=="/"?pg:fg,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",an(n,mg)),t.join("")};function Le(t){return new at(t)}function Ni(t,e,n){t.j=n?on(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Oi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function xa(t,e,n){e instanceof An?(t.i=e,yg(t.i,t.h)):(n||(e=an(e,gg)),t.i=new An(e,t.h))}function M(t,e,n){t.i.set(e,n)}function lr(t){return M(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function on(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function an(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,dg),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function dg(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Fa=/[#\/\?@]/g,fg=/[#\?:]/g,pg=/[#\?]/g,gg=/[#\?@]/g,mg=/#/g;function An(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tt(t){t.g||(t.g=new Map,t.h=0,t.i&&hg(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}m=An.prototype;m.add=function(t,e){tt(this),this.i=null,t=Ht(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ku(t,e){tt(t),e=Ht(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Gu(t,e){return tt(t),e=Ht(t,e),t.g.has(e)}m.forEach=function(t,e){tt(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};m.sa=function(){tt(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};m.Z=function(t){tt(this);let e=[];if(typeof t=="string")Gu(this,t)&&(e=e.concat(this.g.get(Ht(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};m.set=function(t,e){return tt(this),this.i=null,t=Ht(this,t),Gu(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};m.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Wu(t,e,n){Ku(t,e),0<n.length&&(t.i=null,t.g.set(Ht(t,e),to(n)),t.h+=n.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function Ht(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function yg(t,e){e&&!t.j&&(tt(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(Ku(this,i),Wu(this,r,n))},t)),t.j=e}var vg=class{constructor(t,e){this.h=t,this.g=e}};function Qu(t){this.l=t||wg,S.PerformanceNavigationTiming?(t=S.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(S.g&&S.g.Ka&&S.g.Ka()&&S.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wg=10;function Yu(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Xu(t){return t.h?1:t.g?t.g.size:0}function bs(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function go(t,e){t.g?t.g.add(e):t.h=e}function Ju(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Qu.prototype.cancel=function(){if(this.i=Zu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Zu(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return to(t.i)}function mo(){}mo.prototype.stringify=function(t){return S.JSON.stringify(t,void 0)};mo.prototype.parse=function(t){return S.JSON.parse(t,void 0)};function Ig(){this.g=new mo}function Eg(t,e,n){const i=n||"";try{Hu(t,function(r,s){let o=r;Un(r)&&(o=co(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function Tg(t,e){const n=new sr;if(S.Image){const i=new Image;i.onload=ai(ui,n,i,"TestLoadImage: loaded",!0,e),i.onerror=ai(ui,n,i,"TestLoadImage: error",!1,e),i.onabort=ai(ui,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=ai(ui,n,i,"TestLoadImage: timeout",!1,e),S.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function ui(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function Hn(t){this.l=t.fc||null,this.j=t.ob||!1}G(Hn,ho);Hn.prototype.g=function(){return new hr(this.l,this.j)};Hn.prototype.i=function(t){return function(){return t}}({});function hr(t,e){K.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=yo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G(hr,K);var yo=0;m=hr.prototype;m.open=function(t,e){if(this.readyState!=yo)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Cn(this)};m.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||S).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zn(this)),this.readyState=yo};m.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof S.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;el(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function el(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}m.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zn(this):Cn(this),this.readyState==3&&el(this)}};m.Za=function(t){this.g&&(this.response=this.responseText=t,zn(this))};m.Ya=function(t){this.g&&(this.response=t,zn(this))};m.ka=function(){this.g&&zn(this)};function zn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Cn(t)}m.setRequestHeader=function(t,e){this.v.append(t,e)};m.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Cn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(hr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var _g=S.JSON.parse;function U(t){K.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tl,this.L=this.M=!1}G(U,K);var tl="",Sg=/^https?$/i,Ag=["POST","PUT"];m=U.prototype;m.Oa=function(t){this.M=t};m.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():_s.g(),this.C=this.u?Ma(this.u):Ma(_s),this.g.onreadystatechange=te(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Ua(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=S.FormData&&t instanceof S.FormData,!(0<=mu(Ag,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{rl(this),0<this.B&&((this.L=Cg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=te(this.ua,this)):this.A=lo(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ua(this,s)}};function Cg(t){return Mt&&qp()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}m.ua=function(){typeof eo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Y(this,"timeout"),this.abort(8))};function Ua(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,nl(t),dr(t)}function nl(t){t.F||(t.F=!0,Y(t,"complete"),Y(t,"error"))}m.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Y(this,"complete"),Y(this,"abort"),dr(this))};m.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),dr(this,!0)),U.$.N.call(this)};m.La=function(){this.s||(this.G||this.v||this.l?il(this):this.kb())};m.kb=function(){il(this)};function il(t){if(t.h&&typeof eo<"u"&&(!t.C[1]||ke(t)!=4||t.da()!=2)){if(t.v&&ke(t)==4)lo(t.La,0,t);else if(Y(t,"readystatechange"),ke(t)==4){t.h=!1;try{const a=t.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.I).match(zu)[1]||null;if(!r&&S.self&&S.self.location){var s=S.self.location.protocol;r=s.substr(0,s.length-1)}i=!Sg.test(r?r.toLowerCase():"")}n=i}if(n)Y(t,"complete"),Y(t,"success");else{t.m=6;try{var o=2<ke(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",nl(t)}}finally{dr(t)}}}}function dr(t,e){if(t.g){rl(t);const n=t.g,i=t.C[0]?bi:null;t.g=null,t.C=null,e||Y(t,"ready");try{n.onreadystatechange=i}catch{}}}function rl(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(S.clearTimeout(t.A),t.A=null)}function ke(t){return t.g?t.g.readyState:0}m.da=function(){try{return 2<ke(this)?this.g.status:-1}catch{return-1}};m.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),_g(e)}};function Va(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case tl:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}m.Ia=function(){return this.m};m.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function sl(t){let e="";return io(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function vo(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=sl(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):M(t,e,n))}function tn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ol(t){this.Ga=0,this.i=[],this.j=new sr,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=tn("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=tn("baseRetryDelayMs",5e3,t),this.hb=tn("retryDelaySeedMs",1e4,t),this.eb=tn("forwardChannelMaxRetries",2,t),this.xa=tn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new Qu(t&&t.concurrentRequestLimit),this.Ja=new Ig,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}m=ol.prototype;m.qa=8;m.H=1;function wo(t){if(al(t),t.H==3){var e=t.W++,n=Le(t.G);M(n,"SID",t.J),M(n,"RID",e),M(n,"TYPE","terminate"),Kn(t,n),e=new jn(t,t.j,e,void 0),e.L=2,e.v=lr(Le(n)),n=!1,S.navigator&&S.navigator.sendBeacon&&(n=S.navigator.sendBeacon(e.v.toString(),"")),!n&&S.Image&&(new Image().src=e.v,n=!0),n||(e.g=gl(e.l,null),e.g.ha(e.v)),e.G=Date.now(),qn(e)}fl(t)}function fr(t){t.g&&(Eo(t),t.g.cancel(),t.g=null)}function al(t){fr(t),t.u&&(S.clearTimeout(t.u),t.u=null),Pi(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&S.clearTimeout(t.m),t.m=null)}function pr(t){Yu(t.h)||t.m||(t.m=!0,Ru(t.Na,t),t.C=0)}function bg(t,e){return Xu(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=$n(te(t.Na,t,e),dl(t,t.C)),t.C++,!0)}m.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new jn(this,this.j,t,void 0);let s=this.s;if(this.U&&(s?(s=Eu(s),Tu(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=cl(this,r,e),n=Le(this.G),M(n,"RID",t),M(n,"CVER",22),this.F&&M(n,"X-HTTP-Session-Id",this.F),Kn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(sl(s)))+"&"+e:this.o&&vo(n,this.o,s)),go(this.h,r),this.bb&&M(n,"TYPE","init"),this.P?(M(n,"$req",e),M(n,"SID","null"),r.ba=!0,As(r,n,null)):As(r,n,e),this.H=2}}else this.H==3&&(t?$a(this,t):this.i.length==0||Yu(this.h)||$a(this))};function $a(t,e){var n;e?n=e.m:n=t.W++;const i=Le(t.G);M(i,"SID",t.J),M(i,"RID",n),M(i,"AID",t.V),Kn(t,i),t.o&&t.s&&vo(i,t.o,t.s),n=new jn(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=cl(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),go(t.h,n),As(n,i,e)}function Kn(t,e){t.ma&&io(t.ma,function(n,i){M(e,i,n)}),t.l&&Hu({},function(n,i){M(e,i,n)})}function cl(t,e,n){n=Math.min(t.i.length,n);var i=t.l?te(t.l.Va,t.l,t):null;e:{var r=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=s,0>u)s=Math.max(0,r[c].h-100),a=!1;else try{Eg(l,o,"req"+u+"_")}catch{i&&i(l)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,i}function ul(t){t.g||t.u||(t.ba=1,Ru(t.Ma,t),t.A=0)}function Io(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=$n(te(t.Ma,t),dl(t,t.A)),t.A++,!0)}m.Ma=function(){if(this.u=null,ll(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=$n(te(this.jb,this),t)}};m.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,oe(10),fr(this),ll(this))};function Eo(t){t.B!=null&&(S.clearTimeout(t.B),t.B=null)}function ll(t){t.g=new jn(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Le(t.wa);M(e,"RID","rpc"),M(e,"SID",t.J),M(e,"CI",t.M?"0":"1"),M(e,"AID",t.V),M(e,"TYPE","xmlhttp"),Kn(t,e),t.o&&t.s&&vo(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=lr(Le(e)),n.s=null,n.S=!0,$u(n,t)}m.ib=function(){this.v!=null&&(this.v=null,fr(this),Io(this),oe(19))};function Pi(t){t.v!=null&&(S.clearTimeout(t.v),t.v=null)}function hl(t,e){var n=null;if(t.g==e){Pi(t),Eo(t),t.g=null;var i=2}else if(bs(t.h,e))n=e.F,Ju(t.h,e),i=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;i=or(),Y(i,new xu(i,n)),pr(t)}else ul(t);else if(r=e.o,r==3||r==0&&0<t.ta||!(i==1&&bg(t,e)||i==2&&Io(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:rt(t,5);break;case 4:rt(t,10);break;case 3:rt(t,6);break;default:rt(t,2)}}}function dl(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function rt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=te(t.pb,t);n||(n=new at("//www.google.com/images/cleardot.gif"),S.location&&S.location.protocol=="http"||Ni(n,"https"),lr(n)),Tg(n.toString(),i)}else oe(2);t.H=0,t.l&&t.l.za(e),fl(t),al(t)}m.pb=function(t){t?(this.j.info("Successfully pinged google.com"),oe(2)):(this.j.info("Failed to ping google.com"),oe(1))};function fl(t){if(t.H=0,t.pa=[],t.l){const e=Zu(t.h);(e.length!=0||t.i.length!=0)&&(Ra(t.pa,e),Ra(t.pa,t.i),t.h.i.length=0,to(t.i),t.i.length=0),t.l.ya()}}function pl(t,e,n){var i=n instanceof at?Le(n):new at(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),Oi(i,i.m);else{var r=S.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new at(null,void 0);i&&Ni(s,i),e&&(s.g=e),r&&Oi(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&M(i,n,e),M(i,"VER",t.qa),Kn(t,i),i}function gl(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new U(new Hn({ob:!0})):new U(t.va),e.Oa(t.I),e}function ml(){}m=ml.prototype;m.Ba=function(){};m.Aa=function(){};m.za=function(){};m.ya=function(){};m.Va=function(){};function Li(){if(Mt&&!(10<=Number(Hp)))throw Error("Environmental error: no available transport.")}Li.prototype.g=function(t,e){return new he(t,e)};function he(t,e){K.call(this),this.g=new ol(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ki(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ki(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new zt(this)}G(he,K);he.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;oe(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=pl(t,null,t.Y),pr(t)};he.prototype.close=function(){wo(this.g)};he.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=co(t),t=n);e.i.push(new vg(e.fb++,t)),e.H==3&&pr(e)};he.prototype.N=function(){this.g.l=null,delete this.j,wo(this.g),delete this.g,he.$.N.call(this)};function yl(t){fo.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}G(yl,fo);function vl(){po.call(this),this.status=1}G(vl,po);function zt(t){this.g=t}G(zt,ml);zt.prototype.Ba=function(){Y(this.g,"a")};zt.prototype.Aa=function(t){Y(this.g,new yl(t))};zt.prototype.za=function(t){Y(this.g,new vl)};zt.prototype.ya=function(){Y(this.g,"b")};function kg(){this.blockSize=-1}function ye(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}G(ye,kg);ye.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Gr(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^s)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}ye.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(r==0)for(;s<=n;)Gr(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){Gr(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){Gr(this,i),r=0;break}}this.h=r,this.i+=e};ye.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function O(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=t[r]|0;i&&s==e||(n[r]=s,i=!1)}this.g=n}var Rg={};function To(t){return-128<=t&&128>t?yu(Rg,t,function(e){return new O([e|0],0>e?-1:0)}):new O([t|0],0>t?-1:0)}function Te(t){if(isNaN(t)||!isFinite(t))return Rt;if(0>t)return Q(Te(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=ks;return new O(e,0)}function wl(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Q(wl(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Te(Math.pow(e,8)),i=Rt,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+s),e);8>s?(s=Te(Math.pow(e,s)),i=i.R(s).add(Te(o))):(i=i.R(n),i=i.add(Te(o)))}return i}var ks=4294967296,Rt=To(0),Rs=To(1),Ba=To(16777216);m=O.prototype;m.ea=function(){if(de(this))return-Q(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:ks+i)*e,e*=ks}return t};m.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Re(this))return"0";if(de(this))return"-"+Q(this).toString(t);for(var e=Te(Math.pow(t,6)),n=this,i="";;){var r=xi(n,e).g;n=Mi(n,r.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Re(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};m.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Re(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function de(t){return t.h==-1}m.X=function(t){return t=Mi(this,t),de(t)?-1:Re(t)?0:1};function Q(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new O(n,~t.h).add(Rs)}m.abs=function(){return de(this)?Q(this):this};m.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(this.D(r)&65535)+(t.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new O(n,n[n.length-1]&-2147483648?-1:0)};function Mi(t,e){return t.add(Q(e))}m.R=function(t){if(Re(this)||Re(t))return Rt;if(de(this))return de(t)?Q(this).R(Q(t)):Q(Q(this).R(t));if(de(t))return Q(this.R(Q(t)));if(0>this.X(Ba)&&0>t.X(Ba))return Te(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*i+2*r]+=o*c,li(n,2*i+2*r),n[2*i+2*r+1]+=s*c,li(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,li(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,li(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new O(n,0)};function li(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function nn(t,e){this.g=t,this.h=e}function xi(t,e){if(Re(e))throw Error("division by zero");if(Re(t))return new nn(Rt,Rt);if(de(t))return e=xi(Q(t),e),new nn(Q(e.g),Q(e.h));if(de(e))return e=xi(t,Q(e)),new nn(Q(e.g),e.h);if(30<t.g.length){if(de(t)||de(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Rs,i=e;0>=i.X(t);)n=ja(n),i=ja(i);var r=St(n,1),s=St(i,1);for(i=St(i,2),n=St(n,2);!Re(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=St(i,1),n=St(n,1)}return e=Mi(t,r.R(e)),new nn(r,e)}for(r=Rt;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=Te(n),o=s.R(e);de(o)||0<o.X(t);)n-=i,s=Te(n),o=s.R(e);Re(s)&&(s=Rs),r=r.add(s),t=Mi(t,o)}return new nn(r,t)}m.gb=function(t){return xi(this,t).h};m.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new O(n,this.h&t.h)};m.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new O(n,this.h|t.h)};m.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new O(n,this.h^t.h)};function ja(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new O(n,t.h)}function St(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new O(r,t.h)}Li.prototype.createWebChannel=Li.prototype.g;he.prototype.send=he.prototype.u;he.prototype.open=he.prototype.m;he.prototype.close=he.prototype.close;ar.NO_ERROR=0;ar.TIMEOUT=8;ar.HTTP_ERROR=6;Fu.COMPLETE="complete";Uu.EventType=Bn;Bn.OPEN="a";Bn.CLOSE="b";Bn.ERROR="c";Bn.MESSAGE="d";K.prototype.listen=K.prototype.O;U.prototype.listenOnce=U.prototype.P;U.prototype.getLastError=U.prototype.Sa;U.prototype.getLastErrorCode=U.prototype.Ia;U.prototype.getStatus=U.prototype.da;U.prototype.getResponseJson=U.prototype.Wa;U.prototype.getResponseText=U.prototype.ja;U.prototype.send=U.prototype.ha;U.prototype.setWithCredentials=U.prototype.Oa;ye.prototype.digest=ye.prototype.l;ye.prototype.reset=ye.prototype.reset;ye.prototype.update=ye.prototype.j;O.prototype.add=O.prototype.add;O.prototype.multiply=O.prototype.R;O.prototype.modulo=O.prototype.gb;O.prototype.compare=O.prototype.X;O.prototype.toNumber=O.prototype.ea;O.prototype.toString=O.prototype.toString;O.prototype.getBits=O.prototype.D;O.fromNumber=Te;O.fromString=wl;var Dg=function(){return new Li},Ng=function(){return or()},Wr=ar,Og=Fu,Pg=It,qa={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Lg=Hn,hi=Uu,Mg=U,xg=ye,Dt=O;const Ha="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kt="9.21.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new Zi("@firebase/firestore");function za(){return lt.logLevel}function v(t,...e){if(lt.logLevel<=D.DEBUG){const n=e.map(_o);lt.debug(`Firestore (${Kt}): ${t}`,...n)}}function Me(t,...e){if(lt.logLevel<=D.ERROR){const n=e.map(_o);lt.error(`Firestore (${Kt}): ${t}`,...n)}}function xt(t,...e){if(lt.logLevel<=D.WARN){const n=e.map(_o);lt.warn(`Firestore (${Kt}): ${t}`,...n)}}function _o(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t="Unexpected state"){const e=`FIRESTORE (${Kt}) INTERNAL ASSERTION FAILED: `+t;throw Me(e),new Error(e)}function L(t,e){t||_()}function C(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Ie{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Fg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(J.UNAUTHENTICATED))}shutdown(){}}class Ug{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Vg{constructor(e){this.t=e,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let s=new Oe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Oe,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Oe)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(L(typeof i.accessToken=="string"),new Il(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return L(e===null||typeof e=="string"),new J(e)}}class $g{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=J.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Bg{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new $g(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(J.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qg{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=s=>{s.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?r(s):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(L(typeof n.token=="string"),this.T=n.token,new jg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=Hg(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function N(t,e){return t<e?-1:t>e?1:0}function Ft(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return H.fromMillis(Date.now())}static fromDate(e){return H.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new H(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?N(this.nanoseconds,e.nanoseconds):N(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.timestamp=e}static fromTimestamp(e){return new A(e)}static min(){return new A(new H(0,0))}static max(){return new A(new H(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n,i){n===void 0?n=0:n>e.length&&_(),i===void 0?i=e.length-n:i>e.length-n&&_(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return bn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bn?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class P extends bn{construct(e,n,i){return new P(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new P(n)}static emptyPath(){return new P([])}}const zg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ee extends bn{construct(e,n,i){return new ee(e,n,i)}static isValidIdentifier(e){return zg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ee(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new y(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new y(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ee(n)}static emptyPath(){return new ee([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.path=e}static fromPath(e){return new w(P.fromString(e))}static fromName(e){return new w(P.fromString(e).popFirst(5))}static empty(){return new w(P.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&P.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return P.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new w(new P(e.slice()))}}function Kg(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=A.fromTimestamp(i===1e9?new H(n+1,0):new H(n,i));return new Xe(r,w.empty(),e)}function Gg(t){return new Xe(t.readTime,t.key,-1)}class Xe{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Xe(A.min(),w.empty(),-1)}static max(){return new Xe(A.max(),w.empty(),-1)}}function Wg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=w.comparator(t.documentKey,e.documentKey),n!==0?n:N(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(t){if(t.code!==f.FAILED_PRECONDITION||t.message!==Qg)throw t;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new p((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):p.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):p.reject(n)}static resolve(e){return new p((n,i)=>{n(e)})}static reject(e){return new p((n,i)=>{i(e)})}static waitFor(e){return new p((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},c=>i(c))}),o=!0,s===r&&n()})}static or(e){let n=p.resolve(!1);for(const i of e)n=n.next(r=>r?p.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(e,n){return new p((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===s&&i(o)},l=>r(l))}})}static doWhile(e,n){return new p((i,r)=>{const s=()=>{e()===!0?n().next(()=>{s()},r):i()};s()})}}function Wn(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}So.ct=-1;function gr(t){return t==null}function Fi(t){return t===0&&1/t==-1/0}function Xg(t){return typeof t=="number"&&Number.isInteger(t)&&!Fi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Tl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,n){this.comparator=e,this.root=n||W.EMPTY}insert(e,n){return new x(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,W.BLACK,null,null))}remove(e){return new x(this.comparator,this.root.remove(e,this.comparator).copy(null,null,W.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new di(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new di(this.root,e,this.comparator,!1)}getReverseIterator(){return new di(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new di(this.root,e,this.comparator,!0)}}class di{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class W{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??W.RED,this.left=r??W.EMPTY,this.right=s??W.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new W(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return W.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return W.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,W.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,W.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _();const e=this.left.check();if(e!==this.right.check())throw _();return e+(this.isRed()?0:1)}}W.EMPTY=null,W.RED=!0,W.BLACK=!1;W.EMPTY=new class{constructor(){this.size=0}get key(){throw _()}get value(){throw _()}get color(){throw _()}get left(){throw _()}get right(){throw _()}copy(t,e,n,i,r){return this}insert(t,e,n){return new W(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.comparator=e,this.data=new x(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ga(this.data.getIterator())}getIteratorFrom(e){return new Ga(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof ie)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ie(this.comparator);return n.data=e,n}}class Ga{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.fields=e,e.sort(ee.comparator)}static empty(){return new ge([])}unionWith(e){let n=new ie(ee.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new ge(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ft(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new _l("Invalid base64 string: "+r):r}}(e);return new se(n)}static fromUint8Array(e){const n=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new se(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return N(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}se.EMPTY_BYTE_STRING=new se("");const Jg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Je(t){if(L(!!t),typeof t=="string"){let e=0;const n=Jg.exec(t);if(L(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:B(t.seconds),nanos:B(t.nanos)}}function B(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ht(t){return typeof t=="string"?se.fromBase64String(t):se.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Co(t){const e=t.mapValue.fields.__previous_value__;return Ao(e)?Co(e):e}function kn(t){const e=Je(t.mapValue.fields.__local_write_time__.timestampValue);return new H(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n,i,r,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Rn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Rn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Rn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function dt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ao(t)?4:em(t)?9007199254740991:10:_()}function be(t,e){if(t===e)return!0;const n=dt(t);if(n!==dt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return kn(t).isEqual(kn(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=Je(i.timestampValue),o=Je(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return ht(i.bytesValue).isEqual(ht(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return B(i.geoPointValue.latitude)===B(r.geoPointValue.latitude)&&B(i.geoPointValue.longitude)===B(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return B(i.integerValue)===B(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=B(i.doubleValue),o=B(r.doubleValue);return s===o?Fi(s)===Fi(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ft(t.arrayValue.values||[],e.arrayValue.values||[],be);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(Ka(s)!==Ka(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!be(s[a],o[a])))return!1;return!0}(t,e);default:return _()}}function Dn(t,e){return(t.values||[]).find(n=>be(n,e))!==void 0}function Ut(t,e){if(t===e)return 0;const n=dt(t),i=dt(e);if(n!==i)return N(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(t.booleanValue,e.booleanValue);case 2:return function(r,s){const o=B(r.integerValue||r.doubleValue),a=B(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Wa(t.timestampValue,e.timestampValue);case 4:return Wa(kn(t),kn(e));case 5:return N(t.stringValue,e.stringValue);case 6:return function(r,s){const o=ht(r),a=ht(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=N(o[c],a[c]);if(u!==0)return u}return N(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const o=N(B(r.latitude),B(s.latitude));return o!==0?o:N(B(r.longitude),B(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Ut(o[c],a[c]);if(u)return u}return N(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){if(r===fi.mapValue&&s===fi.mapValue)return 0;if(r===fi.mapValue)return 1;if(s===fi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=N(a[l],u[l]);if(h!==0)return h;const d=Ut(o[a[l]],c[u[l]]);if(d!==0)return d}return N(a.length,u.length)}(t.mapValue,e.mapValue);default:throw _()}}function Wa(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return N(t,e);const n=Je(t),i=Je(e),r=N(n.seconds,i.seconds);return r!==0?r:N(n.nanos,i.nanos)}function Vt(t){return Ds(t)}function Ds(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=Je(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ht(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,w.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=Ds(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ds(i.fields[a])}`;return s+"}"}(t.mapValue):_();var e,n}function Qa(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ns(t){return!!t&&"integerValue"in t}function bo(t){return!!t&&"arrayValue"in t}function Ya(t){return!!t&&"nullValue"in t}function Xa(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yi(t){return!!t&&"mapValue"in t}function dn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gt(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=dn(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=dn(t.arrayValue.values[n]);return e}return Object.assign({},t)}function em(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.value=e}static empty(){return new fe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!yi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=dn(n)}setAll(e){let n=ee.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=dn(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());yi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return be(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];yi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){Gt(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new fe(dn(this.value))}}function Sl(t){const e=[];return Gt(t.fields,(n,i)=>{const r=new ee([n]);if(yi(i)){const s=Sl(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new ge(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,n,i,r,s,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Z(e,0,A.min(),A.min(),A.min(),fe.empty(),0)}static newFoundDocument(e,n,i,r){return new Z(e,1,n,A.min(),i,r,0)}static newNoDocument(e,n){return new Z(e,2,n,A.min(),A.min(),fe.empty(),0)}static newUnknownDocument(e,n){return new Z(e,3,n,A.min(),A.min(),fe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(A.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=A.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Z&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Z(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.position=e,this.inclusive=n}}function Ja(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=w.comparator(w.fromName(o.referenceValue),n.key):i=Ut(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Za(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!be(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n="asc"){this.field=e,this.dir=n}}function tm(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{}class j extends Al{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new im(e,n,i):n==="array-contains"?new om(e,i):n==="in"?new am(e,i):n==="not-in"?new cm(e,i):n==="array-contains-any"?new um(e,i):new j(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new rm(e,i):new sm(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ut(n,this.value)):n!==null&&dt(this.value)===dt(n)&&this.matchesComparison(Ut(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ve extends Al{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ve(e,n)}matches(e){return Cl(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Cl(t){return t.op==="and"}function bl(t){return nm(t)&&Cl(t)}function nm(t){for(const e of t.filters)if(e instanceof ve)return!1;return!0}function Os(t){if(t instanceof j)return t.field.canonicalString()+t.op.toString()+Vt(t.value);if(bl(t))return t.filters.map(e=>Os(e)).join(",");{const e=t.filters.map(n=>Os(n)).join(",");return`${t.op}(${e})`}}function kl(t,e){return t instanceof j?function(n,i){return i instanceof j&&n.op===i.op&&n.field.isEqual(i.field)&&be(n.value,i.value)}(t,e):t instanceof ve?function(n,i){return i instanceof ve&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((r,s,o)=>r&&kl(s,i.filters[o]),!0):!1}(t,e):void _()}function Rl(t){return t instanceof j?function(e){return`${e.field.canonicalString()} ${e.op} ${Vt(e.value)}`}(t):t instanceof ve?function(e){return e.op.toString()+" {"+e.getFilters().map(Rl).join(" ,")+"}"}(t):"Filter"}class im extends j{constructor(e,n,i){super(e,n,i),this.key=w.fromName(i.referenceValue)}matches(e){const n=w.comparator(e.key,this.key);return this.matchesComparison(n)}}class rm extends j{constructor(e,n){super(e,"in",n),this.keys=Dl("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sm extends j{constructor(e,n){super(e,"not-in",n),this.keys=Dl("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Dl(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>w.fromName(i.referenceValue))}class om extends j{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bo(n)&&Dn(n.arrayValue,this.value)}}class am extends j{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Dn(this.value.arrayValue,n)}}class cm extends j{constructor(e,n){super(e,"not-in",n)}matches(e){if(Dn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Dn(this.value.arrayValue,n)}}class um extends j{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Dn(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function ec(t,e=null,n=[],i=[],r=null,s=null,o=null){return new lm(t,e,n,i,r,s,o)}function ko(t){const e=C(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Os(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),gr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Vt(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Vt(i)).join(",")),e.ft=n}return e.ft}function Ro(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tm(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!kl(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Za(t.startAt,e.startAt)&&Za(t.endAt,e.endAt)}function Ps(t){return w.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function hm(t,e,n,i,r,s,o,a){return new Qn(t,e,n,i,r,s,o,a)}function Do(t){return new Qn(t)}function tc(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Nl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function No(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Ol(t){return t.collectionGroup!==null}function Nt(t){const e=C(t);if(e.dt===null){e.dt=[];const n=No(e),i=Nl(e);if(n!==null&&i===null)n.isKeyField()||e.dt.push(new fn(n)),e.dt.push(new fn(ee.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new fn(ee.keyField(),s))}}}return e.dt}function xe(t){const e=C(t);if(!e._t)if(e.limitType==="F")e._t=ec(e.path,e.collectionGroup,Nt(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Nt(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new fn(s.field,o))}const i=e.endAt?new Ui(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ui(e.startAt.position,e.startAt.inclusive):null;e._t=ec(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e._t}function Ls(t,e){e.getFirstInequalityField(),No(t);const n=t.filters.concat([e]);return new Qn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ms(t,e,n){return new Qn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mr(t,e){return Ro(xe(t),xe(e))&&t.limitType===e.limitType}function Pl(t){return`${ko(xe(t))}|lt:${t.limitType}`}function xs(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Rl(i)).join(", ")}]`),gr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Vt(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Vt(i)).join(",")),`Target(${n})`}(xe(t))}; limitType=${t.limitType})`}function yr(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):w.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of Nt(n))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(r,s,o){const a=Ja(r,s,o);return r.inclusive?a<=0:a<0}(n.startAt,Nt(n),i)||n.endAt&&!function(r,s,o){const a=Ja(r,s,o);return r.inclusive?a>=0:a>0}(n.endAt,Nt(n),i))}(t,e)}function dm(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ll(t){return(e,n)=>{let i=!1;for(const r of Nt(t)){const s=fm(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function fm(t,e,n){const i=t.field.isKeyField()?w.comparator(e.key,n.key):function(r,s,o){const a=s.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ut(a,c):_()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return _()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Gt(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return Tl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=new x(w.comparator);function Fe(){return pm}const Ml=new x(w.comparator);function cn(...t){let e=Ml;for(const n of t)e=e.insert(n.key,n);return e}function xl(t){let e=Ml;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function st(){return pn()}function Fl(){return pn()}function pn(){return new Wt(t=>t.toString(),(t,e)=>t.isEqual(e))}const gm=new x(w.comparator),mm=new ie(w.comparator);function b(...t){let e=mm;for(const n of t)e=e.add(n);return e}const ym=new ie(N);function vm(){return ym}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fi(e)?"-0":e}}function Vl(t){return{integerValue:""+t}}function wm(t,e){return Xg(e)?Vl(e):Ul(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this._=void 0}}function Im(t,e,n){return t instanceof Vi?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Ao(r)&&(r=Co(r)),r&&(s.fields.__previous_value__=r),{mapValue:s}}(n,e):t instanceof Nn?Bl(t,e):t instanceof On?jl(t,e):function(i,r){const s=$l(i,r),o=nc(s)+nc(i.wt);return Ns(s)&&Ns(i.wt)?Vl(o):Ul(i.serializer,o)}(t,e)}function Em(t,e,n){return t instanceof Nn?Bl(t,e):t instanceof On?jl(t,e):n}function $l(t,e){return t instanceof $i?Ns(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Vi extends vr{}class Nn extends vr{constructor(e){super(),this.elements=e}}function Bl(t,e){const n=ql(e);for(const i of t.elements)n.some(r=>be(r,i))||n.push(i);return{arrayValue:{values:n}}}class On extends vr{constructor(e){super(),this.elements=e}}function jl(t,e){let n=ql(e);for(const i of t.elements)n=n.filter(r=>!be(r,i));return{arrayValue:{values:n}}}class $i extends vr{constructor(e,n){super(),this.serializer=e,this.wt=n}}function nc(t){return B(t.integerValue||t.doubleValue)}function ql(t){return bo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Tm(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Nn&&i instanceof Nn||n instanceof On&&i instanceof On?Ft(n.elements,i.elements,be):n instanceof $i&&i instanceof $i?be(n.wt,i.wt):n instanceof Vi&&i instanceof Vi}(t.transform,e.transform)}class _m{constructor(e,n){this.version=e,this.transformResults=n}}class Pe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pe}static exists(e){return new Pe(void 0,e)}static updateTime(e){return new Pe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wr{}function Hl(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Kl(t.key,Pe.none()):new Yn(t.key,t.data,Pe.none());{const n=t.data,i=fe.empty();let r=new ie(ee.comparator);for(let s of e.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new Et(t.key,i,new ge(r.toArray()),Pe.none())}}function Sm(t,e,n){t instanceof Yn?function(i,r,s){const o=i.value.clone(),a=rc(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Et?function(i,r,s){if(!vi(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=rc(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(zl(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function gn(t,e,n,i){return t instanceof Yn?function(r,s,o,a){if(!vi(r.precondition,s))return o;const c=r.value.clone(),u=sc(r.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,i):t instanceof Et?function(r,s,o,a){if(!vi(r.precondition,s))return o;const c=sc(r.fieldTransforms,a,s),u=s.data;return u.setAll(zl(r)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,i):function(r,s,o){return vi(r.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Am(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=$l(i.transform,r||null);s!=null&&(n===null&&(n=fe.empty()),n.set(i.field,s))}return n||null}function ic(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ft(n,i,(r,s)=>Tm(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yn extends wr{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Et extends wr{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function zl(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function rc(t,e,n){const i=new Map;L(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,Em(o,a,n[r]))}return i}function sc(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,Im(s,o,e))}return i}class Kl extends wr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cm extends wr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&Sm(s,e,i[r])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=gn(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=gn(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=Fl();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const c=Hl(o,a);c!==null&&i.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(A.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),b())}isEqual(e){return this.batchId===e.batchId&&Ft(this.mutations,e.mutations,(n,i)=>ic(n,i))&&Ft(this.baseMutations,e.baseMutations,(n,i)=>ic(n,i))}}class Oo{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){L(e.mutations.length===i.length);let r=gm;const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new Oo(e,n,i,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $,R;function Dm(t){switch(t){default:return _();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Gl(t){if(t===void 0)return Me("GRPC error has no .code"),f.UNKNOWN;switch(t){case $.OK:return f.OK;case $.CANCELLED:return f.CANCELLED;case $.UNKNOWN:return f.UNKNOWN;case $.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case $.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case $.INTERNAL:return f.INTERNAL;case $.UNAVAILABLE:return f.UNAVAILABLE;case $.UNAUTHENTICATED:return f.UNAUTHENTICATED;case $.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case $.NOT_FOUND:return f.NOT_FOUND;case $.ALREADY_EXISTS:return f.ALREADY_EXISTS;case $.PERMISSION_DENIED:return f.PERMISSION_DENIED;case $.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case $.ABORTED:return f.ABORTED;case $.OUT_OF_RANGE:return f.OUT_OF_RANGE;case $.UNIMPLEMENTED:return f.UNIMPLEMENTED;case $.DATA_LOSS:return f.DATA_LOSS;default:return _()}}(R=$||($={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return pi}static getOrCreateInstance(){return pi===null&&(pi=new Po),pi}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let pi=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=new Dt([4294967295,4294967295],0);function oc(t){const e=Nm().encode(t),n=new xg;return n.update(e),new Uint8Array(n.digest())}function ac(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Dt([n,i],0),new Dt([r,s],0)]}class Lo{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new un(`Invalid padding: ${n}`);if(i<0)throw new un(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new un(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new un(`Invalid padding when bitmap length is 0: ${n}`);this.yt=8*e.length-n,this.It=Dt.fromNumber(this.yt)}Tt(e,n,i){let r=e.add(n.multiply(Dt.fromNumber(i)));return r.compare(Om)===1&&(r=new Dt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.It).toNumber()}Et(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}At(e){if(this.yt===0)return!1;const n=oc(e),[i,r]=ac(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(i,r,s);if(!this.Et(o))return!1}return!0}static create(e,n,i){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Lo(s,r,n);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.yt===0)return;const n=oc(e),[i,r]=ac(n);for(let s=0;s<this.hashCount;s++){const o=this.Tt(i,r,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const r=new Map;return r.set(e,Xn.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Ir(A.min(),r,new x(N),Fe(),b())}}class Xn{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Xn(i,n,b(),b(),b())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n,i,r){this.vt=e,this.removedTargetIds=n,this.key=i,this.Pt=r}}class Wl{constructor(e,n){this.targetId=e,this.bt=n}}class Ql{constructor(e,n,i=se.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class cc{constructor(){this.Vt=0,this.St=lc(),this.Dt=se.EMPTY_BYTE_STRING,this.Ct=!1,this.xt=!0}get current(){return this.Ct}get resumeToken(){return this.Dt}get Nt(){return this.Vt!==0}get kt(){return this.xt}Mt(e){e.approximateByteSize()>0&&(this.xt=!0,this.Dt=e)}Ot(){let e=b(),n=b(),i=b();return this.St.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:_()}}),new Xn(this.Dt,this.Ct,e,n,i)}$t(){this.xt=!1,this.St=lc()}Ft(e,n){this.xt=!0,this.St=this.St.insert(e,n)}Bt(e){this.xt=!0,this.St=this.St.remove(e)}Lt(){this.Vt+=1}qt(){this.Vt-=1}Ut(){this.xt=!0,this.Ct=!0}}class Pm{constructor(e){this.Kt=e,this.Gt=new Map,this.Qt=Fe(),this.jt=uc(),this.zt=new x(N)}Wt(e){for(const n of e.vt)e.Pt&&e.Pt.isFoundDocument()?this.Ht(n,e.Pt):this.Jt(n,e.key,e.Pt);for(const n of e.removedTargetIds)this.Jt(n,e.key,e.Pt)}Yt(e){this.forEachTarget(e,n=>{const i=this.Xt(n);switch(e.state){case 0:this.Zt(n)&&i.Mt(e.resumeToken);break;case 1:i.qt(),i.Nt||i.$t(),i.Mt(e.resumeToken);break;case 2:i.qt(),i.Nt||this.removeTarget(n);break;case 3:this.Zt(n)&&(i.Ut(),i.Mt(e.resumeToken));break;case 4:this.Zt(n)&&(this.te(n),i.Mt(e.resumeToken));break;default:_()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Gt.forEach((i,r)=>{this.Zt(r)&&n(r)})}ee(e){var n;const i=e.targetId,r=e.bt.count,s=this.ne(i);if(s){const o=s.target;if(Ps(o))if(r===0){const a=new w(o.path);this.Jt(i,a,Z.newNoDocument(a,A.min()))}else L(r===1);else{const a=this.se(i);if(a!==r){const c=this.ie(e,a);if(c!==0){this.te(i);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.zt=this.zt.insert(i,u)}(n=Po.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,l,h){var d,g,T,I,k,F;const q={localCacheCount:l,existenceFilterCount:h.count},V=h.unchangedNames;return V&&(q.bloomFilter={applied:u===0,hashCount:(d=V==null?void 0:V.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(I=(T=(g=V==null?void 0:V.bits)===null||g===void 0?void 0:g.bitmap)===null||T===void 0?void 0:T.length)!==null&&I!==void 0?I:0,padding:(F=(k=V==null?void 0:V.bits)===null||k===void 0?void 0:k.padding)!==null&&F!==void 0?F:0}),q}(c,a,e.bt))}}}}ie(e,n){const{unchangedNames:i,count:r}=e.bt;if(!i||!i.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=i;let c,u;try{c=ht(s).toUint8Array()}catch(l){if(l instanceof _l)return xt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{u=new Lo(c,o,a)}catch(l){return xt(l instanceof un?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return u.yt===0?1:r!==n-this.re(e.targetId,u)?2:0}re(e,n){const i=this.Kt.getRemoteKeysForTarget(e);let r=0;return i.forEach(s=>{const o=this.Kt.oe(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.At(a)||(this.Jt(e,s,null),r++)}),r}ue(e){const n=new Map;this.Gt.forEach((s,o)=>{const a=this.ne(o);if(a){if(s.current&&Ps(a.target)){const c=new w(a.target.path);this.Qt.get(c)!==null||this.ce(o,c)||this.Jt(o,c,Z.newNoDocument(c,e))}s.kt&&(n.set(o,s.Ot()),s.$t())}});let i=b();this.jt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.ne(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(s))}),this.Qt.forEach((s,o)=>o.setReadTime(e));const r=new Ir(e,n,this.zt,this.Qt,i);return this.Qt=Fe(),this.jt=uc(),this.zt=new x(N),r}Ht(e,n){if(!this.Zt(e))return;const i=this.ce(e,n.key)?2:0;this.Xt(e).Ft(n.key,i),this.Qt=this.Qt.insert(n.key,n),this.jt=this.jt.insert(n.key,this.ae(n.key).add(e))}Jt(e,n,i){if(!this.Zt(e))return;const r=this.Xt(e);this.ce(e,n)?r.Ft(n,1):r.Bt(n),this.jt=this.jt.insert(n,this.ae(n).delete(e)),i&&(this.Qt=this.Qt.insert(n,i))}removeTarget(e){this.Gt.delete(e)}se(e){const n=this.Xt(e).Ot();return this.Kt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Lt(e){this.Xt(e).Lt()}Xt(e){let n=this.Gt.get(e);return n||(n=new cc,this.Gt.set(e,n)),n}ae(e){let n=this.jt.get(e);return n||(n=new ie(N),this.jt=this.jt.insert(e,n)),n}Zt(e){const n=this.ne(e)!==null;return n||v("WatchChangeAggregator","Detected inactive target",e),n}ne(e){const n=this.Gt.get(e);return n&&n.Nt?null:this.Kt.he(e)}te(e){this.Gt.set(e,new cc),this.Kt.getRemoteKeysForTarget(e).forEach(n=>{this.Jt(e,n,null)})}ce(e,n){return this.Kt.getRemoteKeysForTarget(e).has(n)}}function uc(){return new x(w.comparator)}function lc(){return new x(w.comparator)}const Lm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Mm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),xm=(()=>({and:"AND",or:"OR"}))();class Fm{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Fs(t,e){return t.useProto3Json||gr(e)?e:{value:e}}function Bi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yl(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Um(t,e){return Bi(t,e.toTimestamp())}function _e(t){return L(!!t),A.fromTimestamp(function(e){const n=Je(e);return new H(n.seconds,n.nanos)}(t))}function Mo(t,e){return function(n){return new P(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Xl(t){const e=P.fromString(t);return L(th(e)),e}function Us(t,e){return Mo(t.databaseId,e.path)}function Qr(t,e){const n=Xl(e);if(n.get(1)!==t.databaseId.projectId)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new w(Jl(n))}function Vs(t,e){return Mo(t.databaseId,e)}function Vm(t){const e=Xl(t);return e.length===4?P.emptyPath():Jl(e)}function $s(t){return new P(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Jl(t){return L(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function hc(t,e,n){return{name:Us(t,e),fields:n.value.mapValue.fields}}function $m(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:_()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(L(u===void 0||typeof u=="string"),se.fromBase64String(u||"")):(L(u===void 0||u instanceof Uint8Array),se.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:Gl(c.code);return new y(u,c.message||"")}(o);n=new Ql(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Qr(t,i.document.name),s=_e(i.document.updateTime),o=i.document.createTime?_e(i.document.createTime):A.min(),a=new fe({mapValue:{fields:i.document.fields}}),c=Z.newFoundDocument(r,s,o,a),u=i.targetIds||[],l=i.removedTargetIds||[];n=new wi(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Qr(t,i.document),s=i.readTime?_e(i.readTime):A.min(),o=Z.newNoDocument(r,s),a=i.removedTargetIds||[];n=new wi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Qr(t,i.document),s=i.removedTargetIds||[];n=new wi([],s,r,null)}else{if(!("filter"in e))return _();{e.filter;const i=e.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,o=new Rm(r,s),a=i.targetId;n=new Wl(a,o)}}return n}function Bm(t,e){let n;if(e instanceof Yn)n={update:hc(t,e.key,e.value)};else if(e instanceof Kl)n={delete:Us(t,e.key)};else if(e instanceof Et)n={update:hc(t,e.key,e.data),updateMask:Ym(e.fieldMask)};else{if(!(e instanceof Cm))return _();n={verify:Us(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof Vi)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Nn)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof On)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof $i)return{fieldPath:s.field.canonicalString(),increment:o.wt};throw _()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:Um(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:_()}(t,e.precondition)),n}function jm(t,e){return t&&t.length>0?(L(e!==void 0),t.map(n=>function(i,r){let s=i.updateTime?_e(i.updateTime):_e(r);return s.isEqual(A.min())&&(s=_e(r)),new _m(s,i.transformResults||[])}(n,e))):[]}function qm(t,e){return{documents:[Vs(t,e.path)]}}function Hm(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=Vs(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Vs(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(c){if(c.length!==0)return eh(ve.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:At(l.field),direction:Gm(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Fs(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function zm(t){let e=Vm(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){L(i===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let s=[];n.where&&(s=function(l){const h=Zl(l);return h instanceof ve&&bl(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new fn(Ct(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,gr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Ui(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Ui(d,h)}(n.endAt)),hm(e,r,o,s,a,"F",c,u)}function Km(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Zl(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ct(e.unaryFilter.field);return j.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Ct(e.unaryFilter.field);return j.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ct(e.unaryFilter.field);return j.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ct(e.unaryFilter.field);return j.create(s,"!=",{nullValue:"NULL_VALUE"});default:return _()}}(t):t.fieldFilter!==void 0?function(e){return j.create(Ct(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ve.create(e.compositeFilter.filters.map(n=>Zl(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return _()}}(e.compositeFilter.op))}(t):_()}function Gm(t){return Lm[t]}function Wm(t){return Mm[t]}function Qm(t){return xm[t]}function At(t){return{fieldPath:t.canonicalString()}}function Ct(t){return ee.fromServerFormat(t.fieldPath)}function eh(t){return t instanceof j?function(e){if(e.op==="=="){if(Xa(e.value))return{unaryFilter:{field:At(e.field),op:"IS_NAN"}};if(Ya(e.value))return{unaryFilter:{field:At(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Xa(e.value))return{unaryFilter:{field:At(e.field),op:"IS_NOT_NAN"}};if(Ya(e.value))return{unaryFilter:{field:At(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:At(e.field),op:Wm(e.op),value:e.value}}}(t):t instanceof ve?function(e){const n=e.getFilters().map(i=>eh(i));return n.length===1?n[0]:{compositeFilter:{op:Qm(e.op),filters:n}}}(t):_()}function Ym(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function th(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n,i,r,s=A.min(),o=A.min(),a=se.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ke(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ke(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ke(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ke(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e){this.le=e}}function Jm(t){const e=zm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ms(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.sn=new ey}addToCollectionParentIndex(e,n){return this.sn.add(n),p.resolve()}getCollectionParents(e,n){return p.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return p.resolve()}deleteFieldIndex(e,n){return p.resolve()}getDocumentsMatchingTarget(e,n){return p.resolve(null)}getIndexType(e,n){return p.resolve(0)}getFieldIndexes(e,n){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,n){return p.resolve(Xe.min())}getMinOffsetFromCollectionGroup(e,n){return p.resolve(Xe.min())}updateCollectionGroup(e,n,i){return p.resolve()}updateIndexEntries(e,n){return p.resolve()}}class ey{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new ie(P.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new ie(P.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new $t(0)}static kn(){return new $t(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(){this.changes=new Wt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Z.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?p.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n,i,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(i!==null&&gn(i.mutation,r,ge.empty(),H.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,b()).next(()=>i))}getLocalViewOfDocuments(e,n,i=b()){const r=st();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,i).next(s=>{let o=cn();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=st();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,b()))}populateOverlays(e,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,r){let s=Fe();const o=pn(),a=pn();return n.forEach((c,u)=>{const l=i.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof Et)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),gn(l.mutation,u,l.mutation.getFieldMask(),H.now())):o.set(u.key,ge.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new ny(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=pn();let r=new x((o,a)=>o-a),s=b();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=i.get(c)||ge.empty();l=a.applyToLocalView(u,l),i.set(c,l);const h=(r.get(a.batchId)||b()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Fl();l.forEach(d=>{if(!s.has(d)){const g=Hl(n.get(d),i.get(d));g!==null&&h.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return p.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return w.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ol(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,r-s.size):p.resolve(st());let a=-1,c=s;return o.next(u=>p.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?p.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,b())).next(l=>({batchId:a,changes:xl(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new w(n)).next(i=>{let r=cn();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const r=n.collectionGroup;let s=cn();return this.indexManager.getCollectionParents(e,r).next(o=>p.forEach(o,a=>{const c=function(u,l){return new Qn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,i).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r))).next(s=>{r.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,Z.newInvalidDocument(u)))});let o=cn();return s.forEach((a,c)=>{const u=r.get(a);u!==void 0&&gn(u.mutation,c,ge.empty(),H.now()),yr(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return p.resolve(this.us.get(n))}saveBundleMetadata(e,n){var i;return this.us.set(n.id,{id:(i=n).id,version:i.version,createTime:_e(i.createTime)}),p.resolve()}getNamedQuery(e,n){return p.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(i){return{name:i.name,query:Jm(i.bundledQuery),readTime:_e(i.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(){this.overlays=new x(w.comparator),this.hs=new Map}getOverlay(e,n){return p.resolve(this.overlays.get(n))}getOverlays(e,n){const i=st();return p.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((r,s)=>{this.de(e,n,s)}),p.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.hs.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.hs.delete(i)),p.resolve()}getOverlaysForCollection(e,n,i){const r=st(),s=n.length+1,o=new w(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>i&&r.set(c.getKey(),c)}return p.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let s=new x((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let l=s.get(u.largestBatchId);l===null&&(l=st(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=st(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return p.resolve(a)}de(e,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.hs.get(r.largestBatchId).delete(i.key);this.hs.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new km(n,i));let s=this.hs.get(n);s===void 0&&(s=b(),this.hs.set(n,s)),this.hs.set(n,s.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.ls=new ie(z.fs),this.ds=new ie(z._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const i=new z(e,n);this.ls=this.ls.add(i),this.ds=this.ds.add(i)}ws(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.gs(new z(e,n))}ys(e,n){e.forEach(i=>this.removeReference(i,n))}ps(e){const n=new w(new P([])),i=new z(n,e),r=new z(n,e+1),s=[];return this.ds.forEachInRange([i,r],o=>{this.gs(o),s.push(o.key)}),s}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new w(new P([])),i=new z(n,e),r=new z(n,e+1);let s=b();return this.ds.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new z(e,0),i=this.ls.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class z{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return w.comparator(e.key,n.key)||N(e.Es,n.Es)}static _s(e,n){return N(e.Es,n.Es)||w.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new ie(z.fs)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,r){const s=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bm(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new z(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,n){return p.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.Ps(i),s=r<0?0:r;return p.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new z(n,0),r=new z(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([i,r],o=>{const a=this.vs(o.Es);s.push(a)}),p.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new ie(N);return n.forEach(r=>{const s=new z(r,0),o=new z(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{i=i.add(a.Es)})}),p.resolve(this.bs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;w.isDocumentKey(s)||(s=s.child(""));const o=new z(new w(s),0);let a=new ie(N);return this.Rs.forEachWhile(c=>{const u=c.key.path;return!!i.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.Es)),!0)},o),p.resolve(this.bs(a))}bs(e){const n=[];return e.forEach(i=>{const r=this.vs(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){L(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Rs;return p.forEach(n.mutations,r=>{const s=new z(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=i})}Dn(e){}containsKey(e,n){const i=new z(n,0),r=this.Rs.firstAfterOrEqual(i);return p.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e){this.Ss=e,this.docs=new x(w.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.Ss(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return p.resolve(i?i.document.mutableCopy():Z.newInvalidDocument(n))}getEntries(e,n){let i=Fe();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():Z.newInvalidDocument(r))}),p.resolve(i)}getDocumentsMatchingQuery(e,n,i,r){let s=Fe();const o=n.path,a=new w(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Wg(Gg(l),i)<=0||(r.has(l.key)||yr(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return p.resolve(s)}getAllFromCollectionGroup(e,n,i,r){_()}Ds(e,n){return p.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new cy(this)}getSize(e){return p.resolve(this.size)}}class cy extends ty{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.rs.addEntry(e,r)):this.rs.removeEntry(i)}),p.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.persistence=e,this.Cs=new Wt(n=>ko(n),Ro),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.xs=0,this.Ns=new xo,this.targetCount=0,this.ks=$t.Nn()}forEachTarget(e,n){return this.Cs.forEach((i,r)=>n(r)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.xs&&(this.xs=n),p.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new $t(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,p.resolve()}updateTargetData(e,n){return this.$n(n),p.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.Cs.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Cs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),p.waitFor(s).next(()=>r)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,n){const i=this.Cs.get(n)||null;return p.resolve(i)}addMatchingKeys(e,n,i){return this.Ns.ws(n,i),p.resolve()}removeMatchingKeys(e,n,i){this.Ns.ys(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),p.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),p.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Ns.Ts(n);return p.resolve(i)}containsKey(e,n){return p.resolve(this.Ns.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n){this.Ms={},this.overlays={},this.Os=new So(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new uy(this),this.indexManager=new Zm,this.remoteDocumentCache=function(i){return new ay(i)}(i=>this.referenceDelegate.Bs(i)),this.serializer=new Xm(n),this.Ls=new ry(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sy,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Ms[e.toKey()];return i||(i=new oy(n,this.referenceDelegate),this.Ms[e.toKey()]=i),i}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,i){v("MemoryPersistence","Starting transaction:",e);const r=new hy(this.Os.next());return this.referenceDelegate.qs(),i(r).next(s=>this.referenceDelegate.Us(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Ks(e,n){return p.or(Object.values(this.Ms).map(i=>()=>i.containsKey(e,n)))}}class hy extends Yg{constructor(e){super(),this.currentSequenceNumber=e}}class Fo{constructor(e){this.persistence=e,this.Gs=new xo,this.Qs=null}static js(e){return new Fo(e)}get zs(){if(this.Qs)return this.Qs;throw _()}addReference(e,n,i){return this.Gs.addReference(i,n),this.zs.delete(i.toString()),p.resolve()}removeReference(e,n,i){return this.Gs.removeReference(i,n),this.zs.add(i.toString()),p.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),p.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(r=>this.zs.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.zs.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.zs,i=>{const r=w.fromPath(i);return this.Ws(e,r).next(s=>{s||n.removeEntry(r,A.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(i=>{i?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return p.or([()=>p.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.$i=i,this.Fi=r}static Bi(e,n){let i=b(),r=b();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Uo(e,n.fromCache,i,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,i,r){return this.Ui(e,n).next(s=>s||this.Ki(e,n,r,i)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(tc(n))return p.resolve(null);let i=xe(n);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Ms(n,null,"F"),i=xe(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=b(...s);return this.qi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const u=this.Qi(n,a);return this.ji(n,u,o,c.readTime)?this.Ui(e,Ms(n,null,"F")):this.zi(e,u,n,c)}))})))}Ki(e,n,i,r){return tc(n)||r.isEqual(A.min())?this.Gi(e,n):this.qi.getDocuments(e,i).next(s=>{const o=this.Qi(n,s);return this.ji(n,o,i,r)?this.Gi(e,n):(za()<=D.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),xs(n)),this.zi(e,o,n,Kg(r,-1)))})}Qi(e,n){let i=new ie(Ll(e));return n.forEach((r,s)=>{yr(e,s)&&(i=i.add(s))}),i}ji(e,n,i,r){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Gi(e,n){return za()<=D.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",xs(n)),this.qi.getDocumentsMatchingQuery(e,n,Xe.min())}zi(e,n,i,r){return this.qi.getDocumentsMatchingQuery(e,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n,i,r){this.persistence=e,this.Wi=n,this.serializer=r,this.Hi=new x(N),this.Ji=new Wt(s=>ko(s),Ro),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(i)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iy(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function py(t,e,n,i){return new fy(t,e,n,i)}async function nh(t,e){const n=C(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.Zi(e),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let c=b();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(i,c).next(u=>({tr:u,removedBatchIds:o,addedBatchIds:a}))})})}function gy(t,e){const n=C(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=p.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(T=>{const I=c.docVersions.get(g);L(I!==null),T.version.compareTo(I)<0&&(l.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),u.addEntry(T)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=b();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,r))})}function ih(t){const e=C(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function my(t,e){const n=C(t),i=e.snapshotVersion;let r=n.Hi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});r=n.Hi;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Fs.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.Fs.addMatchingKeys(s,l.addedDocuments,h)));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(se.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,i)),r=r.insert(h,g),function(T,I,k){return T.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,g,l)&&a.push(n.Fs.updateTargetData(s,g))});let c=Fe(),u=b();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(yy(s,o,e.documentUpdates).next(l=>{c=l.er,u=l.nr})),!i.isEqual(A.min())){const l=n.Fs.getLastRemoteSnapshotVersion(s).next(h=>n.Fs.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(l)}return p.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.Hi=r,s))}function yy(t,e,n){let i=b(),r=b();return n.forEach(s=>i=i.add(s)),e.getEntries(t,i).next(s=>{let o=Fe();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(A.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{er:o,nr:r}})}function vy(t,e){const n=C(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function wy(t,e){const n=C(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Fs.getTargetData(i,e).next(s=>s?(r=s,p.resolve(r)):n.Fs.allocateTargetId(i).next(o=>(r=new Ke(e,o,"TargetPurposeListen",i.currentSequenceNumber),n.Fs.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.Hi.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Hi=n.Hi.insert(i.targetId,i),n.Ji.set(e,i.targetId)),i})}async function Bs(t,e,n){const i=C(t),r=i.Hi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Wn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Hi=i.Hi.remove(e),i.Ji.delete(r.target)}function dc(t,e,n){const i=C(t);let r=A.min(),s=b();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=C(a),h=l.Ji.get(u);return h!==void 0?p.resolve(l.Hi.get(h)):l.Fs.getTargetData(c,u)}(i,o,xe(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Fs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>i.Wi.getDocumentsMatchingQuery(o,e,n?r:A.min(),n?s:b())).next(a=>(Iy(i,dm(e),a),{documents:a,sr:s})))}function Iy(t,e,n){let i=t.Yi.get(e)||A.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),t.Yi.set(e,i)}class fc{constructor(){this.activeTargetIds=vm()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ey{constructor(){this.Wr=new fc,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,i){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new fc,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{Jr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gi=null;function Yr(){return gi===null?gi=268435456+Math.round(2147483648*Math.random()):gi++,"0x"+gi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X="WebChannelConnection";class Ay extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,i,r,s){const o=Yr(),a=this.Io(e,n);v("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const c={};return this.To(c,r,s),this.Eo(e,a,c,i).then(u=>(v("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw xt("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",i),u})}Ao(e,n,i,r,s,o){return this.po(e,n,i,r,s)}To(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+Kt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r)}Io(e,n){const i=_y[e];return`${this.wo}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,i,r){const s=Yr();return new Promise((o,a)=>{const c=new Mg;c.setWithCredentials(!0),c.listenOnce(Og.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Wr.NO_ERROR:const l=c.getResponseJson();v(X,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case Wr.TIMEOUT:v(X,`RPC '${e}' ${s} timed out`),a(new y(f.DEADLINE_EXCEEDED,"Request time out"));break;case Wr.HTTP_ERROR:const h=c.getStatus();if(v(X,`RPC '${e}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const T=function(I){const k=I.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(k)>=0?k:f.UNKNOWN}(g.status);a(new y(T,g.message))}else a(new y(f.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new y(f.UNAVAILABLE,"Connection failed."));break;default:_()}}finally{v(X,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(r);v(X,`RPC '${e}' ${s} sending request:`,r),c.send(n,"POST",u,i,15)})}Ro(e,n,i){const r=Yr(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Dg(),a=Ng(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new Lg({})),this.To(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const u=s.join("");v(X,`Creating RPC '${e}' stream ${r}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,d=!1;const g=new Sy({io:I=>{d?v(X,`Not sending because RPC '${e}' stream ${r} is closed:`,I):(h||(v(X,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),v(X,`RPC '${e}' stream ${r} sending:`,I),l.send(I))},ro:()=>l.close()}),T=(I,k,F)=>{I.listen(k,q=>{try{F(q)}catch(V){setTimeout(()=>{throw V},0)}})};return T(l,hi.EventType.OPEN,()=>{d||v(X,`RPC '${e}' stream ${r} transport opened.`)}),T(l,hi.EventType.CLOSE,()=>{d||(d=!0,v(X,`RPC '${e}' stream ${r} transport closed`),g.fo())}),T(l,hi.EventType.ERROR,I=>{d||(d=!0,xt(X,`RPC '${e}' stream ${r} transport errored:`,I),g.fo(new y(f.UNAVAILABLE,"The operation could not be completed")))}),T(l,hi.EventType.MESSAGE,I=>{var k;if(!d){const F=I.data[0];L(!!F);const q=F,V=q.error||((k=q[0])===null||k===void 0?void 0:k.error);if(V){v(X,`RPC '${e}' stream ${r} received error:`,V);const Ve=V.status;let $e=function(si){const oi=$[si];if(oi!==void 0)return Gl(oi)}(Ve),_t=V.message;$e===void 0&&($e=f.INTERNAL,_t="Unknown error status: "+Ve+" with message "+V.message),d=!0,g.fo(new y($e,_t)),l.close()}else v(X,`RPC '${e}' stream ${r} received:`,F),g._o(F)}}),T(a,Pg.STAT_EVENT,I=>{I.stat===qa.PROXY?v(X,`RPC '${e}' stream ${r} detected buffering proxy`):I.stat===qa.NOPROXY&&v(X,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.lo()},0),g}}function Xr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t){return new Fm(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n,i=1e3,r=1.5,s=6e4){this.si=e,this.timerId=n,this.vo=i,this.Po=r,this.bo=s,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),i=Math.max(0,Date.now()-this.Do),r=Math.max(0,n-i);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,r,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n,i,r,s,o,a,c){this.si=e,this.Mo=i,this.Oo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new rh(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(Me(n.toString()),Me("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.$o===n&&this.Xo(i,r)},i=>{e(()=>{const r=new y(f.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Zo(r)})})}Xo(e,n){const i=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{i(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(r=>{i(()=>this.Zo(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Cy extends sh{constructor(e,n,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}tu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.Lo.reset();const n=$m(this.serializer,e),i=function(r){if(!("targetChange"in r))return A.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?A.min():s.readTime?_e(s.readTime):A.min()}(e);return this.listener.eu(n,i)}nu(e){const n={};n.database=$s(this.serializer),n.addTarget=function(r,s){let o;const a=s.target;if(o=Ps(a)?{documents:qm(r,a)}:{query:Hm(r,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=Yl(r,s.resumeToken);const c=Fs(r,s.expectedCount);c!==null&&(o.expectedCount=c)}else if(s.snapshotVersion.compareTo(A.min())>0){o.readTime=Bi(r,s.snapshotVersion.toTimestamp());const c=Fs(r,s.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const i=Km(this.serializer,e);i&&(n.labels=i),this.zo(n)}su(e){const n={};n.database=$s(this.serializer),n.removeTarget=e,this.zo(n)}}class by extends sh{constructor(e,n,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(L(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=jm(e.writeResults,e.commitTime),i=_e(e.commitTime);return this.listener.uu(i,n)}return L(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=$s(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>Bm(this.serializer,i))};this.zo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky extends class{}{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.hu=!1}lu(){if(this.hu)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,i){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.po(e,n,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(f.UNKNOWN,r.toString())})}Ao(e,n,i,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ao(e,n,i,s,o,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(f.UNKNOWN,s.toString())})}terminate(){this.hu=!0}}class Ry{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Me(n),this.wu=!1):v("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=s,this.vu.Jr(o=>{i.enqueueAndForget(async()=>{Tt(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=C(a);c.Au.add(4),await Jn(c),c.Pu.set("Unknown"),c.Au.delete(4),await Tr(c)}(this))})}),this.Pu=new Ry(i,r)}}async function Tr(t){if(Tt(t))for(const e of t.Ru)await e(!0)}async function Jn(t){for(const e of t.Ru)await e(!1)}function oh(t,e){const n=C(t);n.Eu.has(e.targetId)||(n.Eu.set(e.targetId,e),Bo(n)?$o(n):Qt(n).Uo()&&Vo(n,e))}function ah(t,e){const n=C(t),i=Qt(n);n.Eu.delete(e),i.Uo()&&ch(n,e),n.Eu.size===0&&(i.Uo()?i.Qo():Tt(n)&&n.Pu.set("Unknown"))}function Vo(t,e){if(t.bu.Lt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(A.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qt(t).nu(e)}function ch(t,e){t.bu.Lt(e),Qt(t).su(e)}function $o(t){t.bu=new Pm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),he:e=>t.Eu.get(e)||null,oe:()=>t.datastore.serializer.databaseId}),Qt(t).start(),t.Pu.mu()}function Bo(t){return Tt(t)&&!Qt(t).qo()&&t.Eu.size>0}function Tt(t){return C(t).Au.size===0}function uh(t){t.bu=void 0}async function Ny(t){t.Eu.forEach((e,n)=>{Vo(t,e)})}async function Oy(t,e){uh(t),Bo(t)?(t.Pu.pu(e),$o(t)):t.Pu.set("Unknown")}async function Py(t,e,n){if(t.Pu.set("Online"),e instanceof Ql&&e.state===2&&e.cause)try{await async function(i,r){const s=r.cause;for(const o of r.targetIds)i.Eu.has(o)&&(await i.remoteSyncer.rejectListen(o,s),i.Eu.delete(o),i.bu.removeTarget(o))}(t,e)}catch(i){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await ji(t,i)}else if(e instanceof wi?t.bu.Wt(e):e instanceof Wl?t.bu.ee(e):t.bu.Yt(e),!n.isEqual(A.min()))try{const i=await ih(t.localStore);n.compareTo(i)>=0&&await function(r,s){const o=r.bu.ue(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.Eu.get(c);u&&r.Eu.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,c)=>{const u=r.Eu.get(a);if(!u)return;r.Eu.set(a,u.withResumeToken(se.EMPTY_BYTE_STRING,u.snapshotVersion)),ch(r,a);const l=new Ke(u.target,a,c,u.sequenceNumber);Vo(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){v("RemoteStore","Failed to raise snapshot:",i),await ji(t,i)}}async function ji(t,e,n){if(!Wn(e))throw e;t.Au.add(1),await Jn(t),t.Pu.set("Offline"),n||(n=()=>ih(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Tr(t)})}function lh(t,e){return e().catch(n=>ji(t,n,e))}async function _r(t){const e=C(t),n=Ze(e);let i=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;Ly(e);)try{const r=await vy(e.localStore,i);if(r===null){e.Tu.length===0&&n.Qo();break}i=r.batchId,My(e,r)}catch(r){await ji(e,r)}hh(e)&&dh(e)}function Ly(t){return Tt(t)&&t.Tu.length<10}function My(t,e){t.Tu.push(e);const n=Ze(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function hh(t){return Tt(t)&&!Ze(t).qo()&&t.Tu.length>0}function dh(t){Ze(t).start()}async function xy(t){Ze(t).au()}async function Fy(t){const e=Ze(t);for(const n of t.Tu)e.ou(n.mutations)}async function Uy(t,e,n){const i=t.Tu.shift(),r=Oo.from(i,e,n);await lh(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await _r(t)}async function Vy(t,e){e&&Ze(t).ru&&await async function(n,i){if(r=i.code,Dm(r)&&r!==f.ABORTED){const s=n.Tu.shift();Ze(n).Go(),await lh(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await _r(n)}var r}(t,e),hh(t)&&dh(t)}async function gc(t,e){const n=C(t);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const i=Tt(n);n.Au.add(3),await Jn(n),i&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Tr(n)}async function $y(t,e){const n=C(t);e?(n.Au.delete(2),await Tr(n)):e||(n.Au.add(2),await Jn(n),n.Pu.set("Unknown"))}function Qt(t){return t.Vu||(t.Vu=function(e,n,i){const r=C(e);return r.lu(),new Cy(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{oo:Ny.bind(null,t),co:Oy.bind(null,t),eu:Py.bind(null,t)}),t.Ru.push(async e=>{e?(t.Vu.Go(),Bo(t)?$o(t):t.Pu.set("Unknown")):(await t.Vu.stop(),uh(t))})),t.Vu}function Ze(t){return t.Su||(t.Su=function(e,n,i){const r=C(e);return r.lu(),new by(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{oo:xy.bind(null,t),co:Vy.bind(null,t),cu:Fy.bind(null,t),uu:Uy.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await _r(t)):(await t.Su.stop(),t.Tu.length>0&&(v("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Oe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new jo(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qo(t,e){if(Me("AsyncQueue",`${e}: ${t}`),Wn(t))return new y(f.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.comparator=e?(n,i)=>e(n,i)||w.comparator(n.key,i.key):(n,i)=>w.comparator(n.key,i.key),this.keyedMap=cn(),this.sortedSet=new x(this.comparator)}static emptySet(e){return new Ot(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ot)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Ot;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this.Du=new x(w.comparator)}track(e){const n=e.doc.key,i=this.Du.get(n);i?e.type!==0&&i.type===3?this.Du=this.Du.insert(n,e):e.type===3&&i.type!==1?this.Du=this.Du.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Du=this.Du.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Du=this.Du.remove(n):e.type===1&&i.type===2?this.Du=this.Du.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Du=this.Du.insert(n,{type:2,doc:e.doc}):_():this.Du=this.Du.insert(n,e)}Cu(){const e=[];return this.Du.inorderTraversal((n,i)=>{e.push(i)}),e}}class Bt{constructor(e,n,i,r,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,i,r,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Bt(e,n,Ot.emptySet(n),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.xu=void 0,this.listeners=[]}}class jy{constructor(){this.queries=new Wt(e=>Pl(e),mr),this.onlineState="Unknown",this.Nu=new Set}}async function fh(t,e){const n=C(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new By),r)try{s.xu=await n.onListen(i)}catch(o){const a=qo(o,`Initialization of query '${xs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.listeners.push(e),e.ku(n.onlineState),s.xu&&e.Mu(s.xu)&&Ho(n)}async function ph(t,e){const n=C(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function qy(t,e){const n=C(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Mu(r)&&(i=!0);o.xu=r}}i&&Ho(n)}function Hy(t,e,n){const i=C(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function Ho(t){t.Nu.forEach(e=>{e.next()})}class gh{constructor(e,n,i){this.query=e,this.Ou=n,this.$u=!1,this.Fu=null,this.onlineState="Unknown",this.options=i||{}}Mu(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new Bt(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.$u?this.Bu(e)&&(this.Ou.next(e),n=!0):this.Lu(e,this.onlineState)&&(this.qu(e),n=!0),this.Fu=e,n}onError(e){this.Ou.error(e)}ku(e){this.onlineState=e;let n=!1;return this.Fu&&!this.$u&&this.Lu(this.Fu,e)&&(this.qu(this.Fu),n=!0),n}Lu(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.Uu||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Bu(e){if(e.docChanges.length>0)return!0;const n=this.Fu&&this.Fu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qu(e){e=Bt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.$u=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e){this.key=e}}class yh{constructor(e){this.key=e}}class zy{constructor(e,n){this.query=e,this.Ju=n,this.Yu=null,this.hasCachedResults=!1,this.current=!1,this.Xu=b(),this.mutatedKeys=b(),this.Zu=Ll(e),this.tc=new Ot(this.Zu)}get ec(){return this.Ju}nc(e,n){const i=n?n.sc:new mc,r=n?n.tc:this.tc;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),g=yr(this.query,h)?h:null,T=!!d&&this.mutatedKeys.has(d.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;d&&g?d.data.isEqual(g.data)?T!==I&&(i.track({type:3,doc:g}),k=!0):this.ic(d,g)||(i.track({type:2,doc:g}),k=!0,(c&&this.Zu(g,c)>0||u&&this.Zu(g,u)<0)&&(a=!0)):!d&&g?(i.track({type:0,doc:g}),k=!0):d&&!g&&(i.track({type:1,doc:d}),k=!0,(c||u)&&(a=!0)),k&&(g?(o=o.add(g),s=I?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),i.track({type:1,doc:l})}return{tc:o,sc:i,ji:a,mutatedKeys:s}}ic(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const r=this.tc;this.tc=e.tc,this.mutatedKeys=e.mutatedKeys;const s=e.sc.Cu();s.sort((u,l)=>function(h,d){const g=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _()}};return g(h)-g(d)}(u.type,l.type)||this.Zu(u.doc,l.doc)),this.rc(i);const o=n?this.oc():[],a=this.Xu.size===0&&this.current?1:0,c=a!==this.Yu;return this.Yu=a,s.length!==0||c?{snapshot:new Bt(this.query,e.tc,r,s,e.mutatedKeys,a===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),uc:o}:{uc:o}}ku(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tc:this.tc,sc:new mc,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{uc:[]}}cc(e){return!this.Ju.has(e)&&!!this.tc.has(e)&&!this.tc.get(e).hasLocalMutations}rc(e){e&&(e.addedDocuments.forEach(n=>this.Ju=this.Ju.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ju=this.Ju.delete(n)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Xu;this.Xu=b(),this.tc.forEach(i=>{this.cc(i.key)&&(this.Xu=this.Xu.add(i.key))});const n=[];return e.forEach(i=>{this.Xu.has(i)||n.push(new yh(i))}),this.Xu.forEach(i=>{e.has(i)||n.push(new mh(i))}),n}ac(e){this.Ju=e.sr,this.Xu=b();const n=this.nc(e.documents);return this.applyChanges(n,!0)}hc(){return Bt.fromInitialDocuments(this.query,this.tc,this.mutatedKeys,this.Yu===0,this.hasCachedResults)}}class Ky{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class Gy{constructor(e){this.key=e,this.lc=!1}}class Wy{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fc={},this.dc=new Wt(a=>Pl(a),mr),this._c=new Map,this.wc=new Set,this.mc=new x(w.comparator),this.gc=new Map,this.yc=new xo,this.Ic={},this.Tc=new Map,this.Ec=$t.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function Qy(t,e){const n=sv(t);let i,r;const s=n.dc.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.hc();else{const o=await wy(n.localStore,xe(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await Yy(n,e,i,a==="current",o.resumeToken),n.isPrimaryClient&&oh(n.remoteStore,o)}return r}async function Yy(t,e,n,i,r){t.Rc=(h,d,g)=>async function(T,I,k,F){let q=I.view.nc(k);q.ji&&(q=await dc(T.localStore,I.query,!1).then(({documents:$e})=>I.view.nc($e,q)));const V=F&&F.targetChanges.get(I.targetId),Ve=I.view.applyChanges(q,T.isPrimaryClient,V);return vc(T,I.targetId,Ve.uc),Ve.snapshot}(t,h,d,g);const s=await dc(t.localStore,e,!0),o=new zy(e,s.sr),a=o.nc(s.documents),c=Xn.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);vc(t,n,u.uc);const l=new Ky(e,n,o);return t.dc.set(e,l),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function Xy(t,e){const n=C(t),i=n.dc.get(e),r=n._c.get(i.targetId);if(r.length>1)return n._c.set(i.targetId,r.filter(s=>!mr(s,e))),void n.dc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Bs(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),ah(n.remoteStore,i.targetId),js(n,i.targetId)}).catch(Gn)):(js(n,i.targetId),await Bs(n.localStore,i.targetId,!0))}async function Jy(t,e,n){const i=ov(t);try{const r=await function(s,o){const a=C(s),c=H.now(),u=o.reduce((d,g)=>d.add(g.key),b());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Fe(),T=b();return a.Xi.getEntries(d,u).next(I=>{g=I,g.forEach((k,F)=>{F.isValidDocument()||(T=T.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(I=>{l=I;const k=[];for(const F of o){const q=Am(F,l.get(F.key).overlayedDocument);q!=null&&k.push(new Et(F.key,q,Sl(q.value.mapValue),Pe.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,k,o)}).next(I=>{h=I;const k=I.applyToLocalDocumentSet(l,T);return a.documentOverlayCache.saveOverlays(d,I.batchId,k)})}).then(()=>({batchId:h.batchId,changes:xl(l)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(s,o,a){let c=s.Ic[s.currentUser.toKey()];c||(c=new x(N)),c=c.insert(o,a),s.Ic[s.currentUser.toKey()]=c}(i,r.batchId,n),await Zn(i,r.changes),await _r(i.remoteStore)}catch(r){const s=qo(r,"Failed to persist write");n.reject(s)}}async function vh(t,e){const n=C(t);try{const i=await my(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.gc.get(s);o&&(L(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.lc=!0:r.modifiedDocuments.size>0?L(o.lc):r.removedDocuments.size>0&&(L(o.lc),o.lc=!1))}),await Zn(n,i,e)}catch(i){await Gn(i)}}function yc(t,e,n){const i=C(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.dc.forEach((s,o)=>{const a=o.view.ku(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=C(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.ku(o)&&(c=!0)}),c&&Ho(a)}(i.eventManager,e),r.length&&i.fc.eu(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Zy(t,e,n){const i=C(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.gc.get(e),s=r&&r.key;if(s){let o=new x(w.comparator);o=o.insert(s,Z.newNoDocument(s,A.min()));const a=b().add(s),c=new Ir(A.min(),new Map,new x(N),o,a);await vh(i,c),i.mc=i.mc.remove(s),i.gc.delete(e),zo(i)}else await Bs(i.localStore,e,!1).then(()=>js(i,e,n)).catch(Gn)}async function ev(t,e){const n=C(t),i=e.batch.batchId;try{const r=await gy(n.localStore,e);Ih(n,i,null),wh(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Zn(n,r)}catch(r){await Gn(r)}}async function tv(t,e,n){const i=C(t);try{const r=await function(s,o){const a=C(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(L(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(i.localStore,e);Ih(i,e,n),wh(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Zn(i,r)}catch(r){await Gn(r)}}function wh(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function Ih(t,e,n){const i=C(t);let r=i.Ic[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.Ic[i.currentUser.toKey()]=r}}function js(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t._c.get(e))t.dc.delete(i),n&&t.fc.vc(i,n);t._c.delete(e),t.isPrimaryClient&&t.yc.ps(e).forEach(i=>{t.yc.containsKey(i)||Eh(t,i)})}function Eh(t,e){t.wc.delete(e.path.canonicalString());const n=t.mc.get(e);n!==null&&(ah(t.remoteStore,n),t.mc=t.mc.remove(e),t.gc.delete(n),zo(t))}function vc(t,e,n){for(const i of n)i instanceof mh?(t.yc.addReference(i.key,e),nv(t,i)):i instanceof yh?(v("SyncEngine","Document no longer in limbo: "+i.key),t.yc.removeReference(i.key,e),t.yc.containsKey(i.key)||Eh(t,i.key)):_()}function nv(t,e){const n=e.key,i=n.path.canonicalString();t.mc.get(n)||t.wc.has(i)||(v("SyncEngine","New document in limbo: "+n),t.wc.add(i),zo(t))}function zo(t){for(;t.wc.size>0&&t.mc.size<t.maxConcurrentLimboResolutions;){const e=t.wc.values().next().value;t.wc.delete(e);const n=new w(P.fromString(e)),i=t.Ec.next();t.gc.set(i,new Gy(n)),t.mc=t.mc.insert(n,i),oh(t.remoteStore,new Ke(xe(Do(n.path)),i,"TargetPurposeLimboResolution",So.ct))}}async function Zn(t,e,n){const i=C(t),r=[],s=[],o=[];i.dc.isEmpty()||(i.dc.forEach((a,c)=>{o.push(i.Rc(c,e,n).then(u=>{if((u||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Uo.Bi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),i.fc.eu(r),await async function(a,c){const u=C(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,h=>p.forEach(h.$i,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>p.forEach(h.Fi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Wn(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Hi.get(h),g=d.snapshotVersion,T=d.withLastLimboFreeSnapshotVersion(g);u.Hi=u.Hi.insert(h,T)}}}(i.localStore,s))}async function iv(t,e){const n=C(t);if(!n.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const i=await nh(n.localStore,e);n.currentUser=e,function(r,s){r.Tc.forEach(o=>{o.forEach(a=>{a.reject(new y(f.CANCELLED,s))})}),r.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Zn(n,i.tr)}}function rv(t,e){const n=C(t),i=n.gc.get(e);if(i&&i.lc)return b().add(i.key);{let r=b();const s=n._c.get(e);if(!s)return r;for(const o of s){const a=n.dc.get(o);r=r.unionWith(a.view.ec)}return r}}function sv(t){const e=C(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Zy.bind(null,e),e.fc.eu=qy.bind(null,e.eventManager),e.fc.vc=Hy.bind(null,e.eventManager),e}function ov(t){const e=C(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ev.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tv.bind(null,e),e}class wc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Er(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return py(this.persistence,new dy,e.initialUser,this.serializer)}createPersistence(e){return new ly(Fo.js,this.serializer)}createSharedClientState(e){return new Ey}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class av{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>yc(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=iv.bind(null,this.syncEngine),await $y(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new jy}createDatastore(e){const n=Er(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new Ay(r));var r;return function(s,o,a,c){return new ky(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>yc(this.syncEngine,a,0),o=pc.D()?new pc:new Ty,new Dy(n,i,r,s,o);var n,i,r,s,o}createSyncEngine(e,n){return function(i,r,s,o,a,c,u){const l=new Wy(i,r,s,o,a,c);return u&&(l.Ac=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=C(e);v("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Jn(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Vc(this.observer.next,e)}error(e){this.observer.error?this.Vc(this.observer.error,e):Me("Uncaught Error in snapshot listener:",e.toString())}Sc(){this.muted=!0}Vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=J.UNAUTHENTICATED,this.clientId=El.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{v("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(v("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Oe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=qo(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Jr(t,e){t.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await nh(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ic(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lv(t);v("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>gc(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>gc(e.remoteStore,s)),t._onlineComponents=e}function uv(t){return t.name==="FirebaseError"?t.code===f.FAILED_PRECONDITION||t.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function lv(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){v("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jr(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!uv(n))throw n;xt("Error using user provided cache. Falling back to memory cache: "+n),await Jr(t,new wc)}}else v("FirestoreClient","Using default OfflineComponentProvider"),await Jr(t,new wc);return t._offlineComponents}async function _h(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(v("FirestoreClient","Using user provided OnlineComponentProvider"),await Ic(t,t._uninitializedComponentsProvider._online)):(v("FirestoreClient","Using default OnlineComponentProvider"),await Ic(t,new av))),t._onlineComponents}function hv(t){return _h(t).then(e=>e.syncEngine)}async function Sh(t){const e=await _h(t),n=e.eventManager;return n.onListen=Qy.bind(null,e.syncEngine),n.onUnlisten=Xy.bind(null,e.syncEngine),n}function dv(t,e,n={}){const i=new Oe;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,c){const u=new Th({next:h=>{s.enqueueAndForget(()=>ph(r,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new y(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new y(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new gh(Do(o.path),u,{includeMetadataChanges:!0,Uu:!0});return fh(r,l)}(await Sh(t),t.asyncQueue,e,n,i)),i.promise}function fv(t,e,n={}){const i=new Oe;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,c){const u=new Th({next:h=>{s.enqueueAndForget(()=>ph(r,l)),h.fromCache&&a.source==="server"?c.reject(new y(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new gh(o,u,{includeMetadataChanges:!0,Uu:!0});return fh(r,l)}(await Sh(t),t.asyncQueue,e,n,i)),i.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(t,e,n){if(!n)throw new y(f.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pv(t,e,n,i){if(e===!0&&i===!0)throw new y(f.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tc(t){if(!w.isDocumentKey(t))throw new y(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _c(t){if(w.isDocumentKey(t))throw new y(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Sr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_()}function ft(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new y(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sr(t);throw new y(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new y(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sc(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Fg;switch(n.type){case"firstParty":return new Bg(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new y(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ec.get(e);n&&(v("ComponentProvider","Removing Datastore"),Ec.delete(e),n.terminate())}(this),Promise.resolve()}}function gv(t,e,n,i={}){var r;const s=(t=ft(t,Ar))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&xt("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=J.MOCK_USER;else{o=lf(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new y(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new J(c)}t._authCredentials=new Ug(new Il(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ce(this.firestore,e,this._key)}}class Yt{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Yt(this.firestore,e,this._query)}}class Qe extends Yt{constructor(e,n,i){super(e,n,Do(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ce(this.firestore,null,new w(e))}withConverter(e){return new Qe(this.firestore,e,this._path)}}function Ch(t,e,...n){if(t=ae(t),Ah("collection","path",e),t instanceof Ar){const i=P.fromString(e,...n);return _c(i),new Qe(t,null,i)}{if(!(t instanceof ce||t instanceof Qe))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(P.fromString(e,...n));return _c(i),new Qe(t.firestore,null,i)}}function Cr(t,e,...n){if(t=ae(t),arguments.length===1&&(e=El.A()),Ah("doc","path",e),t instanceof Ar){const i=P.fromString(e,...n);return Tc(i),new ce(t,null,new w(i))}{if(!(t instanceof ce||t instanceof Qe))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(P.fromString(e,...n));return Tc(i),new ce(t.firestore,t instanceof Qe?t.converter:null,new w(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new rh(this,"async_queue_retry"),this.Yc=()=>{const n=Xr();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=Xr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=Xr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Oe;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!Wn(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(i=>{this.zc=i,this.Wc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Me("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Wc=!1,i))));return this.Kc=n,n}enqueueAfterDelay(e,n,i){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const r=jo.createAndSchedule(this,e,n,i,s=>this.ea(s));return this.jc.push(r),r}Xc(){this.zc&&_()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class br extends Ar{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new mv,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||bh(this),this._firestoreClient.terminate()}}function yv(t,e){const n=typeof t=="object"?t:Zs(),i=typeof t=="string"?t:e||"(default)",r=wt(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=af("firestore");s&&gv(r,...s)}return r}function Ko(t){return t._firestoreClient||bh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function bh(t){var e,n,i;const r=t._freezeSettings(),s=function(o,a,c,u){return new Zg(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new cv(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jt(se.fromBase64String(e))}catch(n){throw new y(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jt(se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new y(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new y(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new y(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return N(this._lat,e._lat)||N(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=/^__.*__$/;class wv{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Et(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yn(e,this.data,n,this.fieldTransforms)}}function Rh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _()}}class Qo{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.oa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new Qo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:i,ha:!1});return r.la(e),r}fa(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ca({path:i,ha:!1});return r.oa(),r}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return qi(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Rh(this.ua)&&vv.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Iv{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Er(e)}ga(e,n,i,r=!1){return new Qo({ua:e,methodName:n,ma:i,path:ee.emptyPath(),ha:!1,wa:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dh(t){const e=t._freezeSettings(),n=Er(t._databaseId);return new Iv(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ev(t,e,n,i,r,s={}){const o=t.ga(s.merge||s.mergeFields?2:0,e,n,r);Ph("Data must be an object, but it was:",o,i);const a=Nh(i,o);let c,u;if(s.merge)c=new ge(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=_v(e,h,n);if(!o.contains(d))throw new y(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Av(l,d)||l.push(d)}c=new ge(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new wv(new fe(a),c,u)}function Tv(t,e,n,i=!1){return Yo(n,t.ga(i?4:3,e))}function Yo(t,e){if(Oh(t=ae(t)))return Ph("Unsupported field value:",e,t),Nh(t,e);if(t instanceof kh)return function(n,i){if(!Rh(i.ua))throw i._a(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,i){const r=[];let s=0;for(const o of n){let a=Yo(o,i.da(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=ae(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return wm(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=H.fromDate(n);return{timestampValue:Bi(i.serializer,r)}}if(n instanceof H){const r=new H(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Bi(i.serializer,r)}}if(n instanceof Wo)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof jt)return{bytesValue:Yl(i.serializer,n._byteString)};if(n instanceof ce){const r=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(r))throw i._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Mo(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i._a(`Unsupported field value: ${Sr(n)}`)}(t,e)}function Nh(t,e){const n={};return Tl(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gt(t,(i,r)=>{const s=Yo(r,e.aa(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function Oh(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof H||t instanceof Wo||t instanceof jt||t instanceof ce||t instanceof kh)}function Ph(t,e,n){if(!Oh(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Sr(n);throw i==="an object"?e._a(t+" a custom object"):e._a(t+" "+i)}}function _v(t,e,n){if((e=ae(e))instanceof Go)return e._internalPath;if(typeof e=="string")return Lh(t,e);throw qi("Field path arguments must be of type string or ",t,!1,void 0,n)}const Sv=new RegExp("[~\\*/\\[\\]]");function Lh(t,e,n){if(e.search(Sv)>=0)throw qi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Go(...e.split("."))._internalPath}catch{throw qi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qi(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new y(f.INVALID_ARGUMENT,a+t+c)}function Av(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Cv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Cv extends Mh{data(){return super.data()}}function Xo(t,e){return typeof e=="string"?Lh(t,e):e instanceof Go?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new y(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jo{}class kv extends Jo{}function Rv(t,e,...n){let i=[];e instanceof Jo&&i.push(e),i=i.concat(n),function(r){const s=r.filter(a=>a instanceof Zo).length,o=r.filter(a=>a instanceof kr).length;if(s>1||s>0&&o>0)throw new y(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)t=r._apply(t);return t}class kr extends kv{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new kr(e,n,i)}_apply(e){const n=this._parse(e);return xh(e._query,n),new Yt(e.firestore,e.converter,Ls(e._query,n))}_parse(e){const n=Dh(e.firestore);return function(r,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new y(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Cc(l,u);const d=[];for(const g of l)d.push(Ac(a,r,g));h={arrayValue:{values:d}}}else h=Ac(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Cc(l,u),h=Tv(o,s,l,u==="in"||u==="not-in");return j.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Dv(t,e,n){const i=e,r=Xo("where",t);return kr._create(r,i,n)}class Zo extends Jo{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Zo(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:ve.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,r){let s=i;const o=r.getFlattenedFilters();for(const a of o)xh(s,a),s=Ls(s,a)}(e._query,n),new Yt(e.firestore,e.converter,Ls(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ac(t,e,n){if(typeof(n=ae(n))=="string"){if(n==="")throw new y(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ol(e)&&n.indexOf("/")!==-1)throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(P.fromString(n));if(!w.isDocumentKey(i))throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Qa(t,new w(i))}if(n instanceof ce)return Qa(t,n._key);throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sr(n)}.`)}function Cc(t,e){if(!Array.isArray(t)||t.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xh(t,e){if(e.isInequality()){const i=No(t),r=e.field;if(i!==null&&!i.isEqual(r))throw new y(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${r.toString()}'`);const s=Nl(t);s!==null&&Nv(t,r,s)}const n=function(i,r){for(const s of i)for(const o of s.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Nv(t,e,n){if(!n.isEqual(e))throw new y(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Ov{convertValue(e,n="none"){switch(dt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return B(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ht(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw _()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return Gt(e,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(e){return new Wo(B(e.latitude),B(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Co(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(kn(e));default:return null}}convertTimestamp(e){const n=Je(e);return new H(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=P.fromString(e);L(th(i));const r=new Rn(i.get(1),i.get(3)),s=new w(i.popFirst(5));return r.isEqual(n)||Me(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fh extends Mh{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ii(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Xo("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Ii extends Fh{data(e={}){return super.data(e)}}class Lv{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new ln(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Ii(this._firestore,this._userDataWriter,i.key,i,new ln(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(o=>{const a=new Ii(i._firestore,i._userDataWriter,o.doc.key,o.doc,new ln(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ii(i._firestore,i._userDataWriter,o.doc.key,o.doc,new ln(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:Mv(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Mv(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t){t=ft(t,ce);const e=ft(t.firestore,br);return dv(Ko(e),t._key).then(n=>Uv(e,t,n))}class Uh extends Ov{constructor(e){super(),this.firestore=e}convertBytes(e){return new jt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ce(this.firestore,null,n)}}function Vh(t){t=ft(t,Yt);const e=ft(t.firestore,br),n=Ko(e),i=new Uh(e);return bv(t._query),fv(n,t._query).then(r=>new Lv(e,i,t,r))}function ea(t,e,n){t=ft(t,ce);const i=ft(t.firestore,br),r=Pv(t.converter,e,n);return Fv(i,[Ev(Dh(i),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Pe.none())])}function Fv(t,e){return function(n,i){const r=new Oe;return n.asyncQueue.enqueueAndForget(async()=>Jy(await hv(n),i,r)),r.promise}(Ko(t),e)}function Uv(t,e,n){const i=n.docs.get(e._key),r=new Uh(t);return new Fh(t,r,e._key,i,new ln(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Kt=n})(qt),Ce(new me("firestore",(n,{instanceIdentifier:i,options:r})=>{const s=n.getProvider("app").getImmediate(),o=new br(new Vg(n.getProvider("auth-internal")),new qg(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new y(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rn(a.options.projectId,c)}(s,i),s);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),pe(Ha,"3.11.0",t),pe(Ha,"3.11.0","esm2017")})();const Vv=(t,e)=>e.some(n=>t instanceof n);let bc,kc;function $v(){return bc||(bc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bv(){return kc||(kc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $h=new WeakMap,qs=new WeakMap,Bh=new WeakMap,Zr=new WeakMap,ta=new WeakMap;function jv(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ye(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$h.set(n,t)}).catch(()=>{}),ta.set(e,t),e}function qv(t){if(qs.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qs.set(t,e)}let Hs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ye(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Hv(t){Hs=t(Hs)}function zv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(es(this),e,...n);return Bh.set(i,e.sort?e.sort():[e]),Ye(i)}:Bv().includes(t)?function(...e){return t.apply(es(this),e),Ye($h.get(this))}:function(...e){return Ye(t.apply(es(this),e))}}function Kv(t){return typeof t=="function"?zv(t):(t instanceof IDBTransaction&&qv(t),Vv(t,$v())?new Proxy(t,Hs):t)}function Ye(t){if(t instanceof IDBRequest)return jv(t);if(Zr.has(t))return Zr.get(t);const e=Kv(t);return e!==t&&(Zr.set(t,e),ta.set(e,t)),e}const es=t=>ta.get(t);function Gv(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Ye(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Ye(o.result),c.oldVersion,c.newVersion,Ye(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Wv=["get","getKey","getAll","getAllKeys","count"],Qv=["put","add","delete","clear"],ts=new Map;function Rc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ts.get(e))return ts.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Qv.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Wv.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return ts.set(e,s),s}Hv(t=>({...t,get:(e,n,i)=>Rc(e,n)||t.get(e,n,i),has:(e,n)=>!!Rc(e,n)||t.has(e,n)}));const jh="@firebase/installations",na="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=1e4,Hh=`w:${na}`,zh="FIS_v2",Yv="https://firebaseinstallations.googleapis.com/v1",Xv=60*60*1e3,Jv="installations",Zv="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},pt=new vt(Jv,Zv,ew);function Kh(t){return t instanceof Ie&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh({projectId:t}){return`${Yv}/projects/${t}/installations`}function Wh(t){return{token:t.token,requestStatus:2,expiresIn:nw(t.expiresIn),creationTime:Date.now()}}async function Qh(t,e){const i=(await e.json()).error;return pt.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Yh({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function tw(t,{refreshToken:e}){const n=Yh(t);return n.append("Authorization",iw(e)),n}async function Xh(t){const e=await t();return e.status>=500&&e.status<600?t():e}function nw(t){return Number(t.replace("s","000"))}function iw(t){return`${zh} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=Gh(t),r=Yh(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:n,authVersion:zh,appId:t.appId,sdkVersion:Hh},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Xh(()=>fetch(i,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Wh(u.authToken)}}else throw await Qh("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=/^[cdef][\w-]{21}$/,zs="";function aw(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=cw(t);return ow.test(n)?n:zs}catch{return zs}}function cw(t){return sw(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=new Map;function ed(t,e){const n=Rr(t);td(n,e),uw(n,e)}function td(t,e){const n=Zh.get(t);if(n)for(const i of n)i(e)}function uw(t,e){const n=lw();n&&n.postMessage({key:t,fid:e}),hw()}let ot=null;function lw(){return!ot&&"BroadcastChannel"in self&&(ot=new BroadcastChannel("[Firebase] FID Change"),ot.onmessage=t=>{td(t.data.key,t.data.fid)}),ot}function hw(){Zh.size===0&&ot&&(ot.close(),ot=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="firebase-installations-database",fw=1,gt="firebase-installations-store";let ns=null;function ia(){return ns||(ns=Gv(dw,fw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gt)}}})),ns}async function Hi(t,e){const n=Rr(t),r=(await ia()).transaction(gt,"readwrite"),s=r.objectStore(gt),o=await s.get(n);return await s.put(e,n),await r.done,(!o||o.fid!==e.fid)&&ed(t,e.fid),e}async function nd(t){const e=Rr(t),i=(await ia()).transaction(gt,"readwrite");await i.objectStore(gt).delete(e),await i.done}async function Dr(t,e){const n=Rr(t),r=(await ia()).transaction(gt,"readwrite"),s=r.objectStore(gt),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&ed(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(t){let e;const n=await Dr(t.appConfig,i=>{const r=pw(i),s=gw(t,r);return e=s.registrationPromise,s.installationEntry});return n.fid===zs?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function pw(t){const e=t||{fid:aw(),registrationStatus:0};return id(e)}function gw(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(pt.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=mw(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:yw(t)}:{installationEntry:e}}async function mw(t,e){try{const n=await rw(t,e);return Hi(t.appConfig,n)}catch(n){throw Kh(n)&&n.customData.serverCode===409?await nd(t.appConfig):await Hi(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function yw(t){let e=await Dc(t.appConfig);for(;e.registrationStatus===1;)await Jh(100),e=await Dc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await ra(t);return i||n}return e}function Dc(t){return Dr(t,e=>{if(!e)throw pt.create("installation-not-found");return id(e)})}function id(t){return vw(t)?{fid:t.fid,registrationStatus:0}:t}function vw(t){return t.registrationStatus===1&&t.registrationTime+qh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww({appConfig:t,heartbeatServiceProvider:e},n){const i=Iw(t,n),r=tw(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:Hh,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Xh(()=>fetch(i,a));if(c.ok){const u=await c.json();return Wh(u)}else throw await Qh("Generate Auth Token",c)}function Iw(t,{fid:e}){return`${Gh(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(t,e=!1){let n;const i=await Dr(t.appConfig,s=>{if(!rd(s))throw pt.create("not-registered");const o=s.authToken;if(!e&&_w(o))return s;if(o.requestStatus===1)return n=Ew(t,e),s;{if(!navigator.onLine)throw pt.create("app-offline");const a=Aw(s);return n=Tw(t,a),a}});return n?await n:i.authToken}async function Ew(t,e){let n=await Nc(t.appConfig);for(;n.authToken.requestStatus===1;)await Jh(100),n=await Nc(t.appConfig);const i=n.authToken;return i.requestStatus===0?sa(t,e):i}function Nc(t){return Dr(t,e=>{if(!rd(e))throw pt.create("not-registered");const n=e.authToken;return Cw(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Tw(t,e){try{const n=await ww(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await Hi(t.appConfig,i),n}catch(n){if(Kh(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await nd(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Hi(t.appConfig,i)}throw n}}function rd(t){return t!==void 0&&t.registrationStatus===2}function _w(t){return t.requestStatus===2&&!Sw(t)}function Sw(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Xv}function Aw(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Cw(t){return t.requestStatus===1&&t.requestTime+qh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw(t){const e=t,{installationEntry:n,registrationPromise:i}=await ra(e);return i?i.catch(console.error):sa(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kw(t,e=!1){const n=t;return await Rw(n),(await sa(n,e)).token}async function Rw(t){const{registrationPromise:e}=await ra(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(t){if(!t||!t.options)throw is("App Configuration");if(!t.name)throw is("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw is(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function is(t){return pt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="installations",Nw="installations-internal",Ow=t=>{const e=t.getProvider("app").getImmediate(),n=Dw(e),i=wt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Pw=t=>{const e=t.getProvider("app").getImmediate(),n=wt(e,sd).getImmediate();return{getId:()=>bw(n),getToken:r=>kw(n,r)}};function Lw(){Ce(new me(sd,Ow,"PUBLIC")),Ce(new me(Nw,Pw,"PRIVATE"))}Lw();pe(jh,na);pe(jh,na,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="analytics",Mw="firebase_id",xw="origin",Fw=60*1e3,Uw="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",oa="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new Zi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},le=new vt("analytics","Analytics",Vw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(t){if(!t.startsWith(oa)){const e=le.create("invalid-gtag-resource",{gtagURL:t});return ue.warn(e.message),""}return t}function od(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Bw(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function jw(t,e){const n=Bw("firebase-js-sdk-policy",{createScriptURL:$w}),i=document.createElement("script"),r=`${oa}?l=${t}&id=${e}`;i.src=n?n==null?void 0:n.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function qw(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Hw(t,e,n,i,r,s){const o=i[r];try{if(o)await e[o];else{const c=(await od(n)).find(u=>u.measurementId===r);c&&await e[c.appId]}}catch(a){ue.error(a)}t("config",r,s)}async function zw(t,e,n,i,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await od(n);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&e[u.appId];if(l)s.push(l);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",i,r||{})}catch(s){ue.error(s)}}function Kw(t,e,n,i){async function r(s,...o){try{if(s==="event"){const[a,c]=o;await zw(t,e,n,a,c)}else if(s==="config"){const[a,c]=o;await Hw(t,e,n,i,a,c)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,c,u]=o;t("get",a,c,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){ue.error(a)}}return r}function Gw(t,e,n,i,r){let s=function(...o){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=Kw(s,t,e,n),{gtagCore:s,wrappedGtag:window[r]}}function Ww(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(oa)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=30,Yw=1e3;class Xw{constructor(e={},n=Yw){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ad=new Xw;function Jw(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Zw(t){var e;const{appId:n,apiKey:i}=t,r={method:"GET",headers:Jw(i)},s=Uw.replace("{app-id}",n),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw le.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function eI(t,e=ad,n){const{appId:i,apiKey:r,measurementId:s}=t.options;if(!i)throw le.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw le.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new iI;return setTimeout(async()=>{a.abort()},n!==void 0?n:Fw),cd({appId:i,apiKey:r,measurementId:s},o,a,e)}async function cd(t,{throttleEndTimeMillis:e,backoffCount:n},i,r=ad){var s;const{appId:o,measurementId:a}=t;try{await tI(i,e)}catch(c){if(a)return ue.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Zw(t);return r.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!nI(u)){if(r.deleteThrottleMetadata(o),a)return ue.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const l=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Ea(n,r.intervalMillis,Qw):Ea(n,r.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return r.setThrottleMetadata(o,h),ue.debug(`Calling attemptFetch again in ${l} millis`),cd(t,h,i,r)}}function tI(t,e){return new Promise((n,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(s),i(le.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function nI(t){if(!(t instanceof Ie)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class iI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function rI(t,e,n,i,r){if(r&&r.global){t("event",n,i);return}else{const s=await e,o=Object.assign(Object.assign({},i),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(){if(uu())try{await lu()}catch(t){return ue.warn(le.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ue.warn(le.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function oI(t,e,n,i,r,s,o){var a;const c=eI(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&ue.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ue.error(g)),e.push(c);const u=sI().then(g=>{if(g)return i.getId()}),[l,h]=await Promise.all([c,u]);Ww(s)||jw(s,l.measurementId),r("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[xw]="firebase",d.update=!0,h!=null&&(d[Mw]=h),r("config",l.measurementId,d),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.app=e}_delete(){return delete mn[this.app.options.appId],Promise.resolve()}}let mn={},Oc=[];const Pc={};let rs="dataLayer",cI="gtag",Lc,ud,Mc=!1;function uI(){const t=[];if(cu()&&t.push("This is a browser extension environment."),pf()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=le.create("invalid-analytics-context",{errorInfo:e});ue.warn(n.message)}}function lI(t,e,n){uI();const i=t.options.appId;if(!i)throw le.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ue.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw le.create("no-api-key");if(mn[i]!=null)throw le.create("already-exists",{id:i});if(!Mc){qw(rs);const{wrappedGtag:s,gtagCore:o}=Gw(mn,Oc,Pc,rs,cI);ud=s,Lc=o,Mc=!0}return mn[i]=oI(t,Oc,Pc,e,Lc,rs,n),new aI(t)}function hI(t=Zs()){t=ae(t);const e=wt(t,zi);return e.isInitialized()?e.getImmediate():dI(t)}function dI(t,e={}){const n=wt(t,zi);if(n.isInitialized()){const r=n.getImmediate();if(In(e,n.getOptions()))return r;throw le.create("already-initialized")}return n.initialize({options:e})}function fI(t,e,n,i){t=ae(t),rI(ud,mn[t.app.options.appId],e,n,i).catch(r=>ue.error(r))}const xc="@firebase/analytics",Fc="0.10.0";function pI(){Ce(new me(zi,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return lI(i,r,n)},"PUBLIC")),Ce(new me("analytics-internal",t,"PRIVATE")),pe(xc,Fc),pe(xc,Fc,"esm2017");function t(e){try{const n=e.getProvider(zi).getImmediate();return{logEvent:(i,r,s)=>fI(n,i,r,s)}}catch(n){throw le.create("interop-component-reg-failed",{reason:n})}}}pI();function aa(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function ld(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gI=ld,hd=new vt("auth","Firebase",ld());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new Zi("@firebase/auth");function mI(t,...e){Ki.logLevel<=D.WARN&&Ki.warn(`Auth (${qt}): ${t}`,...e)}function Ei(t,...e){Ki.logLevel<=D.ERROR&&Ki.error(`Auth (${qt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t,...e){throw ca(t,...e)}function Se(t,...e){return ca(t,...e)}function yI(t,e,n){const i=Object.assign(Object.assign({},gI()),{[e]:n});return new vt("auth","Firebase",i).create(e,{appName:t.name})}function ca(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return hd.create(t,...e)}function E(t,e,...n){if(!t)throw ca(e,...n)}function De(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ei(e),new Error(e)}function Ue(t,e){t||De(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vI(){return Uc()==="http:"||Uc()==="https:"}function Uc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vI()||cu()||"connection"in navigator)?navigator.onLine:!0}function II(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ue(n>e,"Short delay should be less than long delay!"),this.isMobile=hf()||df()}get(){return wI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t,e){Ue(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;De("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;De("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;De("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=new ei(3e4,6e4);function Xt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jt(t,e,n,i,r={}){return fd(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Fn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),dd.fetch()(pd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function fd(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},EI),e);try{const r=new _I(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw mi(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw mi(t,"user-disabled",o);const l=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw yI(t,l,u);we(t,l)}}catch(r){if(r instanceof Ie)throw r;we(t,"network-request-failed",{message:String(r)})}}async function ti(t,e,n,i,r={}){const s=await Jt(t,e,n,i,r);return"mfaPendingCredential"in s&&we(t,"multi-factor-auth-required",{_serverResponse:s}),s}function pd(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?ua(t.config,r):`${t.config.apiScheme}://${r}`}class _I{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(Se(this.auth,"network-request-failed")),TI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mi(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Se(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SI(t,e){return Jt(t,"POST","/v1/accounts:delete",e)}async function AI(t,e){return Jt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CI(t,e=!1){const n=ae(t),i=await n.getIdToken(e),r=la(i);E(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:yn(ss(r.auth_time)),issuedAtTime:yn(ss(r.iat)),expirationTime:yn(ss(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ss(t){return Number(t)*1e3}function la(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Ei("JWT malformed, contained fewer than 3 sections"),null;try{const r=su(n);return r?JSON.parse(r):(Ei("Failed to decode base64 JWT payload"),null)}catch(r){return Ei("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function bI(t){const e=la(t);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Ie&&kI(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function kI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yn(this.lastLoginAt),this.creationTime=yn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Pn(t,AI(n,{idToken:i}));E(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?OI(s.providerUserInfo):[],a=NI(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gd(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function DI(t){const e=ae(t);await Gi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NI(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function OI(t){return t.map(e=>{var{providerId:n}=e,i=aa(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PI(t,e){const n=await fd(t,{},async()=>{const i=Fn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=pd(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",dd.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return E(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await PI(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Ln;return i&&(E(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(E(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(E(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ln,this.toJSON())}_performRefresh(){return De("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t,e){E(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ct{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=aa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Pn(this,this.stsTokenManager.getToken(this.auth,e));return E(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CI(this,e)}reload(){return DI(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ct(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Gi(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pn(this,SI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,c,u,l;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,F=(u=n.createdAt)!==null&&u!==void 0?u:void 0,q=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:V,emailVerified:Ve,isAnonymous:$e,providerData:_t,stsTokenManager:si}=n;E(V&&si,e,"internal-error");const oi=Ln.fromJSON(this.name,si);E(typeof V=="string",e,"internal-error"),Be(h,e.name),Be(d,e.name),E(typeof Ve=="boolean",e,"internal-error"),E(typeof $e=="boolean",e,"internal-error"),Be(g,e.name),Be(T,e.name),Be(I,e.name),Be(k,e.name),Be(F,e.name),Be(q,e.name);const Lr=new ct({uid:V,auth:e,email:d,emailVerified:Ve,displayName:h,isAnonymous:$e,photoURL:T,phoneNumber:g,tenantId:I,stsTokenManager:oi,createdAt:F,lastLoginAt:q});return _t&&Array.isArray(_t)&&(Lr.providerData=_t.map(Jd=>Object.assign({},Jd))),k&&(Lr._redirectEventId=k),Lr}static async _fromIdTokenResponse(e,n,i=!1){const r=new Ln;r.updateFromServerResponse(n);const s=new ct({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Gi(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=new Map;function Ne(t){Ue(t instanceof Function,"Expected a class definition");let e=Vc.get(t);return e?(Ue(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}md.type="NONE";const $c=md;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t,e,n){return`firebase:${t}:${e}:${n}`}class Pt{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Ti(this.userKey,r.apiKey,s),this.fullPersistenceKey=Ti("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ct._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Pt(Ne($c),e,i);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||Ne($c);const o=Ti(i,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=ct._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Pt(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Pt(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ed(e))return"Blackberry";if(Td(e))return"Webos";if(ha(e))return"Safari";if((e.includes("chrome/")||vd(e))&&!e.includes("edge/"))return"Chrome";if(Id(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function yd(t=re()){return/firefox\//i.test(t)}function ha(t=re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vd(t=re()){return/crios\//i.test(t)}function wd(t=re()){return/iemobile/i.test(t)}function Id(t=re()){return/android/i.test(t)}function Ed(t=re()){return/blackberry/i.test(t)}function Td(t=re()){return/webos/i.test(t)}function Nr(t=re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LI(t=re()){var e;return Nr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function MI(){return ff()&&document.documentMode===10}function _d(t=re()){return Nr(t)||Id(t)||Td(t)||Ed(t)||/windows phone/i.test(t)||wd(t)}function xI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t,e=[]){let n;switch(t){case"Browser":n=Bc(re());break;case"Worker":n=`${Bc(re())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qt}/${i}`}async function Ad(t,e){return Jt(t,"GET","/v2/recaptchaConfig",Xt(t,e))}function jc(t){return t!==void 0&&t.enterprise!==void 0}class Cd{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function bd(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=Se("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",FI().appendChild(i)})}function UI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const VI="https://www.google.com/recaptcha/enterprise.js?render=",$I="recaptcha-enterprise",BI="NO_RECAPTCHA";class kd{constructor(e){this.type=$I,this.auth=Zt(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Ad(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Cd(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(s,o,a){const c=window.grecaptcha;jc(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(BI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&jc(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}bd(VI+a).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Wi(t,e,n,i=!1){const r=new kd(t);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qc(this),this.idTokenSubscription=new qc(this),this.beforeStateQueue=new jI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ne(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Pt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=II()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ae(e):null;return n&&E(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ne(e))})}async initializeRecaptchaConfig(){const e=await Ad(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Cd(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new kd(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vt("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ne(e)||this._popupRedirectResolver;E(n,this,"argument-error"),this.redirectPersistenceManager=await Pt.create(this,[Ne(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return E(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zt(t){return ae(t)}class qc{constructor(e){this.auth=e,this.observer=null,this.addObserver=wf(n=>this.observer=n)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t,e){const n=wt(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(In(s,e??{}))return r;we(r,"already-initialized")}return n.initialize({options:e})}function zI(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ne);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function KI(t,e,n){const i=Zt(t);E(i._canInitEmulator,i,"emulator-config-failed"),E(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=Rd(e),{host:o,port:a}=GI(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||WI()}function Rd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GI(t){const e=Rd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Hc(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Hc(o)}}}function Hc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return De("not implemented")}_getIdTokenResponse(e){return De("not implemented")}_linkToIdToken(e,n){return De("not implemented")}_getReauthenticationResolver(e){return De("not implemented")}}async function QI(t,e){return Jt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(t,e){return ti(t,"POST","/v1/accounts:signInWithPassword",Xt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YI(t,e){return ti(t,"POST","/v1/accounts:signInWithEmailLink",Xt(t,e))}async function XI(t,e){return ti(t,"POST","/v1/accounts:signInWithEmailLink",Xt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends da{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Mn(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Mn(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await Wi(e,i,"signInWithPassword");return os(e,r)}else return os(e,i).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Wi(e,i,"signInWithPassword");return os(e,s)}else return Promise.reject(r)});case"emailLink":return YI(e,{email:this._email,oobCode:this._password});default:we(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return QI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return XI(e,{idToken:n,email:this._email,oobCode:this._password});default:we(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(t,e){return ti(t,"POST","/v1/accounts:signInWithIdp",Xt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="http://localhost";class mt extends da{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):we("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=aa(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new mt(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Lt(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Lt(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Lt(e,n)}buildRequest(){const e={requestUri:JI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eE(t){const e=rn(sn(t)).link,n=e?rn(sn(e)).deep_link_id:null,i=rn(sn(t)).deep_link_id;return(i?rn(sn(i)).link:null)||i||n||e||t}class fa{constructor(e){var n,i,r,s,o,a;const c=rn(sn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(i=c.oobCode)!==null&&i!==void 0?i:null,h=ZI((r=c.mode)!==null&&r!==void 0?r:null);E(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=eE(e);try{return new fa(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(){this.providerId=en.PROVIDER_ID}static credential(e,n){return Mn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=fa.parseLink(n);return E(i,"argument-error"),Mn._fromEmailAndCode(e,i.code,i.tenantId)}}en.PROVIDER_ID="password";en.EMAIL_PASSWORD_SIGN_IN_METHOD="password";en.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Dd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends ni{constructor(){super("facebook.com")}static credential(e){return mt._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return je.credential(e.oauthAccessToken)}catch{return null}}}je.FACEBOOK_SIGN_IN_METHOD="facebook.com";je.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mt._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return qe.credential(n,i)}catch{return null}}}qe.GOOGLE_SIGN_IN_METHOD="google.com";qe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends ni{constructor(){super("github.com")}static credential(e){return mt._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return He.credential(e.oauthAccessToken)}catch{return null}}}He.GITHUB_SIGN_IN_METHOD="github.com";He.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends ni{constructor(){super("twitter.com")}static credential(e,n){return mt._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ze.credential(n,i)}catch{return null}}}ze.TWITTER_SIGN_IN_METHOD="twitter.com";ze.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e){return ti(t,"POST","/v1/accounts:signUp",Xt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await ct._fromIdTokenResponse(e,i,r),o=zc(i);return new yt({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=zc(i);return new yt({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function zc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends Ie{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Qi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Qi(e,n,i,r)}}function Nd(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qi._fromErrorAndOperation(t,s,e,i):s})}async function tE(t,e,n=!1){const i=await Pn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yt._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nE(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Pn(t,Nd(i,r,e,t),n);E(s.idToken,i,"internal-error");const o=la(s.idToken);E(o,i,"internal-error");const{sub:a}=o;return E(t.uid===a,i,"user-mismatch"),yt._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&we(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Od(t,e,n=!1){const i="signIn",r=await Nd(t,i,e),s=await yt._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function iE(t,e){return Od(Zt(t),e)}async function rE(t,e,n){var i;const r=Zt(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const u=await Wi(r,s,"signUpPassword");o=as(r,u)}else o=as(r,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await Wi(r,s,"signUpPassword");return as(r,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await yt._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function sE(t,e,n){return iE(ae(t),en.credential(e,n))}function oE(t,e,n,i){return ae(t).onIdTokenChanged(e,n,i)}function aE(t,e,n){return ae(t).beforeAuthStateChanged(e,n)}const Yi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yi,"1"),this.storage.removeItem(Yi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(){const t=re();return ha(t)||Nr(t)}const uE=1e3,lE=10;class Ld extends Pd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cE()&&xI(),this.fallbackToPolling=_d(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);MI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,lE):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},uE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ld.type="LOCAL";const hE=Ld;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md extends Pd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Md.type="SESSION";const xd=Md;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Or(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await dE(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Or.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=pa("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return window}function pE(t){Ae().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(){return typeof Ae().WorkerGlobalScope<"u"&&typeof Ae().importScripts=="function"}async function gE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yE(){return Fd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="firebaseLocalStorageDb",vE=1,Xi="firebaseLocalStorage",Vd="fbase_key";class ii{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pr(t,e){return t.transaction([Xi],e?"readwrite":"readonly").objectStore(Xi)}function wE(){const t=indexedDB.deleteDatabase(Ud);return new ii(t).toPromise()}function Gs(){const t=indexedDB.open(Ud,vE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Xi,{keyPath:Vd})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Xi)?e(i):(i.close(),await wE(),e(await Gs()))})})}async function Kc(t,e,n){const i=Pr(t,!0).put({[Vd]:e,value:n});return new ii(i).toPromise()}async function IE(t,e){const n=Pr(t,!1).get(e),i=await new ii(n).toPromise();return i===void 0?null:i.value}function Gc(t,e){const n=Pr(t,!0).delete(e);return new ii(n).toPromise()}const EE=800,TE=3;class $d{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>TE)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Or._getInstance(yE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gE(),!this.activeServiceWorker)return;this.sender=new fE(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gs();return await Kc(e,Yi,"1"),await Gc(e,Yi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Kc(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>IE(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Pr(r,!1).getAll();return new ii(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$d.type="LOCAL";const _E=$d;new ei(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(t,e){return e?Ne(e):(E(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends da{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Lt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Lt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AE(t){return Od(t.auth,new ga(t),t.bypassAuthState)}function CE(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),nE(n,new ga(t),t.bypassAuthState)}async function bE(t){const{auth:e,user:n}=t;return E(n,e,"internal-error"),tE(n,new ga(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AE;case"linkViaPopup":case"linkViaRedirect":return bE;case"reauthViaPopup":case"reauthViaRedirect":return CE;default:we(this.auth,"internal-error")}}resolve(e){Ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=new ei(2e3,1e4);class kt extends Bd{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,kt.currentPopupAction&&kt.currentPopupAction.cancel(),kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){Ue(this.filter.length===1,"Popup operations only handle one event");const e=pa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Se(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Se(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Se(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kE.get())};e()}}kt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="pendingRedirect",_i=new Map;class DE extends Bd{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=_i.get(this.auth._key());if(!e){try{const i=await NE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}_i.set(this.auth._key(),e)}return this.bypassAuthState||_i.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NE(t,e){const n=LE(e),i=PE(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function OE(t,e){_i.set(t._key(),e)}function PE(t){return Ne(t._redirectPersistence)}function LE(t){return Ti(RE,t.config.apiKey,t.name)}async function ME(t,e,n=!1){const i=Zt(t),r=SE(i,e),o=await new DE(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=10*60*1e3;class FE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!jd(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(Se(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wc(e))}saveEventToCache(e){this.cachedEventUids.add(Wc(e)),this.lastProcessedEventTime=Date.now()}}function Wc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VE(t,e={}){return Jt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BE=/^https?/;async function jE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VE(t);for(const n of e)try{if(qE(n))return}catch{}we(t,"unauthorized-domain")}function qE(t){const e=Ks(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!BE.test(n))return!1;if($E.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=new ei(3e4,6e4);function Qc(){const t=Ae().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zE(t){return new Promise((e,n)=>{var i,r,s;function o(){Qc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qc(),n(Se(t,"network-request-failed"))},timeout:HE.get()})}if(!((r=(i=Ae().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Ae().gapi)===null||s===void 0)&&s.load)o();else{const a=UI("iframefcb");return Ae()[a]=()=>{gapi.load?o():n(Se(t,"network-request-failed"))},bd(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Si=null,e})}let Si=null;function KE(t){return Si=Si||zE(t),Si}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=new ei(5e3,15e3),WE="__/auth/iframe",QE="emulator/auth/iframe",YE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JE(t){const e=t.config;E(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ua(e,QE):`https://${t.config.authDomain}/${WE}`,i={apiKey:e.apiKey,appName:t.name,v:qt},r=XE.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Fn(i).slice(1)}`}async function ZE(t){const e=await KE(t),n=Ae().gapi;return E(n,t,"internal-error"),e.open({where:document.body,url:JE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YE,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=Se(t,"network-request-failed"),a=Ae().setTimeout(()=>{s(o)},GE.get());function c(){Ae().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},t0=500,n0=600,i0="_blank",r0="http://localhost";class Yc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function s0(t,e,n,i=t0,r=n0){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},e0),{width:i.toString(),height:r.toString(),top:s,left:o}),u=re().toLowerCase();n&&(a=vd(u)?i0:n),yd(u)&&(e=e||r0,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[g,T])=>`${d}${g}=${T},`,"");if(LI(u)&&a!=="_self")return o0(e||"",a),new Yc(null);const h=window.open(e||"",a,l);E(h,t,"popup-blocked");try{h.focus()}catch{}return new Yc(h)}function o0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="__/auth/handler",c0="emulator/auth/handler",u0=encodeURIComponent("fac");async function Xc(t,e,n,i,r,s){E(t.config.authDomain,t,"auth-domain-config-required"),E(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:qt,eventId:r};if(e instanceof Dd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof ni){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await t._getAppCheckToken(),u=c?`#${u0}=${encodeURIComponent(c)}`:"";return`${l0(t)}?${Fn(a).slice(1)}${u}`}function l0({config:t}){return t.emulator?ua(t,c0):`https://${t.authDomain}/${a0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="webStorageSupport";class h0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xd,this._completeRedirectFn=ME,this._overrideRedirectResult=OE}async _openPopup(e,n,i,r){var s;Ue((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Xc(e,n,i,Ks(),r);return s0(e,o,pa())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await Xc(e,n,i,Ks(),r);return pE(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Ue(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await ZE(e),i=new FE(e);return n.register("authEvent",r=>(E(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cs,{type:cs},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[cs];o!==void 0&&n(!!o),we(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _d()||ha()||Nr()}}const d0=h0;var Jc="@firebase/auth",Zc="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function g0(t){Ce(new me("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;E(o&&!o.includes(":"),"invalid-api-key",{appName:i.name}),E(!(a!=null&&a.includes(":")),"argument-error",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sd(t)},u=new qI(i,r,s,c);return zI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ce(new me("auth-internal",e=>{const n=Zt(e.getProvider("auth").getImmediate());return(i=>new f0(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pe(Jc,Zc,p0(t)),pe(Jc,Zc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=5*60,y0=au("authIdTokenMaxAge")||m0;let eu=null;const v0=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>y0)return;const r=n==null?void 0:n.token;eu!==r&&(eu=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function w0(t=Zs()){const e=wt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HI(t,{popupRedirectResolver:d0,persistence:[_E,hE,xd]}),i=au("authTokenSyncURL");if(i){const s=v0(i);aE(n,s,()=>s(n.currentUser)),oE(n,o=>s(o))}const r=ou("auth");return r&&KI(n,`http://${r}`),n}g0("Browser");const I0={apiKey:"AIzaSyDx3w5kr631maqzI1s4jHh15DiK8Gk3_9s",authDomain:"encuestagame-7c759.firebaseapp.com",projectId:"encuestagame-7c759",storageBucket:"encuestagame-7c759.appspot.com",messagingSenderId:"843365311501",appId:"1:843365311501:web:01e7e875fc1b255bcd6144",measurementId:"G-2EDJPYRL0J"},ma=fu(I0),ri=yv(ma),ya=w0(ma);hI(ma);console.log("Firestore Load");const qd=Ch(ri,"Stages");let tu,Hd,zd;function E0(){return Hd}function T0(){return zd}function va(){return ya.currentUser}function _0(t,e,n){console.log("Create User"),rE(ya,t,e).then(i=>{const r=i.user;A0(r.uid,r.email),n()}).catch(i=>{Gd(i)})}function S0(t,e,n){console.log("Login"),sE(ya,t,e).then(i=>{i.user,n()}).catch(i=>{Gd(i)})}async function A0(t,e){await ea(Cr(ri,"Users",t),{Email:e})}function C0(t){k0(),Vh(qd).then(e=>{tu=e.docs.map(n=>({id:n.id,...n.data()})),t(tu)})}function b0(t,e){const n=Cr(qd,e);xv(n).then(i=>{zd={id:i.id,...i.data()},t()})}function k0(){const t=Rv(Ch(ri,`Users/${va().uid}/Stages`),Dv("Complete","==",!0));Vh(t).then(e=>{Hd=e.docs.map(n=>({id:n.id,...n.data()}))})}async function Kd(t,e){await ea(Cr(ri,`Users/${va().uid}/Stages`,e),{Complete:t})}async function R0(t,e,n){await ea(Cr(ri,`Users/${va().uid}/Stages/${n}/listQuestions`,t.toString()),{Complete:e})}function Gd(t){console.log(t),console.log(`Error Code => ${t.code}`),console.log(`Error Message => ${t.message}`)}const D0=`@import"https://fonts.googleapis.com/css2?family=Hanken+Grotesk&family=Outfit:wght@800&display=swap";stage-card{background-color:#65b8a6;border-radius:1rem;width:256px;height:300px}stage-card.complete{filter:saturate(2);pointer-events:none}.StageCard h3.title{font-size:3rem;font-family:Outfit,sans-serif!important;color:#f0f7da}.StageCard p{color:#b5e8c3;font-family:Hanken Grotesk,sans-serif!important}
`;class N0 extends HTMLElement{constructor(){super(),this.stageId="",this.name="",this.info="",this.level="",this.imgBackground=""}static get observedAttributes(){return["stageId","name","info","level","imgBackground"]}attributeChangedCallback(e,n,i){switch(e){case"stageId":this.stageId=i;break;case"name":this.name=i;break;case"info":this.info=i;break;case"level":this.level=i;break;case"imgBackground":this.imgBackground=i;break}}connectedCallback(){const e=document.createElement("style");e.textContent=D0;let n=this.attachShadow({mode:"open"});n.innerHTML=`
        <div class="StageCard">
            <h3 class="title">${this.name}</h3>
            <p>${this.info}</p>
        </div>
        `,n.appendChild(e)}}window.customElements.define("stage-card",N0);let Ws="",vn="",Ji,wa,wn=0;function O0(t){Ji=t,b0(P0,Ji)}function P0(){wa=T0(),Wd()}function Wd(){Ws||(Ws=document.querySelector(".StageCardContainer")),vn||(vn=document.querySelector(".StageView"));let t="";const e=wa.listQuestions[wn],n=F0(e.answers),i=`AnswerQuestion${e.number}`,r=`FormQuestion_${e.number}`;e.answers.forEach(c=>{t+=x0(c,i)});const s=`
    <button class="close-btn">X</button>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/FJ-w0tf3d_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <div class="StageView_question">
      <h3>${e.title}</h3>
      <p>${e.description}</p>
        <form id="${r}">
            ${t}
            <input class="submitBtn" type="submit" value="Continuar">
        </form>
      <div class="ResultAlert hidden">
        <p>Repuesta Incorrecta</p>
      </div>
    </div>
    `;vn.innerHTML=s,document.querySelector(".StageView .close-btn").addEventListener("click",function(){Qd()});const a=document.getElementById(r);a.addEventListener("submit",function(c){c.preventDefault();const u=a.querySelector(`input[name="${i}"]:checked`).value,l=M0(n,u),h=document.querySelector(".StageView_question .ResultAlert");h&&h.classList.toggle("hidden",l),R0(wn,l,Ji),l&&L0()})}function L0(){wn++,wn<wa.listQuestions.length?Wd():(j0(),Kd(!0,Ji),Qd(),wn=0)}function M0(t,e){return t.number.toString()===e}function Qd(){vn.classList.add("hidden"),Ws.classList.remove("hidden"),vn.innerHTML=""}function x0(t,e){return`
    <label>
        <input type="radio" name="${e}" value="${t.number}">
        ${t.text}
    </label>`}function F0(t){return t.find(function(e){return e.correct===!0})}let us="",Qs="",Yd="",Xd;const xn="complete";async function U0(){C0(V0)}function V0(t){let e="";const n=E0();console.log(n),Qs=document.querySelector(".StageCardContainer"),Yd=document.querySelector(".StageView"),t.forEach(i=>{const r=n.find(o=>o.id===i.id);let s="Nocomplete";r&&r.Complete&&(console.log(`userStage => ${r.Complete}`),s=xn),e+=`
        <stage-card class="${s}"
        stageId="${i.id}" 
        name="${i.name}" 
        info="${i.info}" 
        level="${i.level}" 
        imgBackground="${i.imgBackground}">
        </stage-card>`}),Qs.innerHTML=e,$0()}function $0(){document.querySelectorAll("stage-card").forEach(function(e){e.className!==xn&&e.addEventListener("click",function(){B0(e)})})}function B0(t){console.log(t.className!==xn),t.className!==xn&&(Xd=t,us=t.getAttribute("stageId"),t.getAttribute("name"),Qs.classList.add("hidden"),Yd.classList.remove("hidden"),O0(us),Kd(!1,us))}function j0(){Xd.classList.add(xn)}let Ys="",ls,hs;q0();function q0(){Ys=document.getElementById("LoginApp");const t=`
    <div class="Login">
        <form id="loginForm">
            <div>
                <label for="userEmail">Email:</label>
                <input type="email" id="userEmail" name="userEmail" required>
            </div>
            
            <div>
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required>
            </div>

            <div class="ButtonsContainer">
                <button type="submit" id="loginButton">Iniciar Sesión</button>
                <button type="button" id="createUser">Crear Cuenta</button>
            </div>
        </form>
    </div>
    `;Ys.innerHTML=t;const e=document.getElementById("loginForm"),n=document.getElementById("createUser"),i=document.getElementById("userEmail"),r=document.getElementById("password");i.addEventListener("input",s=>{ls=s.target.value}),r.addEventListener("input",s=>{hs=s.target.value}),n.addEventListener("click",()=>{_0(ls,hs,nu)}),e.addEventListener("submit",s=>{s.preventDefault(),S0(ls,hs,nu)})}function nu(){U0(),H0()}function H0(){Ys.classList.add("hidden"),document.getElementById("app").classList.remove("hidden"),document.querySelector(".StageCardContainer").classList.remove("hidden")}document.querySelector("#app").innerHTML=`
<div id="StageContainer">
    <div class="StageCardContainer hidden">
    </div>
    <div class="StageView hidden">
    </div>
</div>
`;
