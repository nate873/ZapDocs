var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var S={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function C(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return C(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var T=/\/+/g;function E(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+E(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(T,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(T,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+E(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+E(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ne.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return C(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ne.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return C(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),S.T=t}},e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useEffectEvent=function(e){return S.H.useEffectEvent(e)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&E(x,t.startTime-e)}}}var ee=!1,te=-1,S=5,ne=-1;function C(){return g?!0:!(e.unstable_now()-ne<S)}function re(){if(g=!1,ee){var t=e.unstable_now();ne=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(te),te=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&C());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&E(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,T=ie.port2;ie.port1.onmessage=re,w=function(){T.postMessage(null)}}else w=function(){_(re,0)};function E(t,n){te=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):S=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(te),te=-1):h=!0,E(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=C,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),te=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),ne=Symbol.for(`react.suspense`),C=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),T=Symbol.for(`react.memo_cache_sentinel`),E=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=E&&e[E]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ne:return`Suspense`;case C:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case te:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function pe(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function k(e,t){de++,ue[de]=e.current,e.current=t}var me=fe(null),he=fe(null),ge=fe(null),_e=fe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}pe(me),k(me,e)}function ye(){pe(me),pe(he),pe(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(pe(me),pe(he)),_e.current===e&&(pe(_e),Qf._currentValue=le)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,A=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,j=t.unstable_IdlePriority,ze=t.log,Be=t.unstable_setDisableYieldValue,Ve=null,He=null;function Ue(e){if(typeof ze==`function`&&Be(e),He&&typeof He.setStrictMode==`function`)try{He.setStrictMode(Ve,e)}catch{}}var We=Math.clz32?Math.clz32:qe,Ge=Math.log,Ke=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ge(e)/Ke|0)|0}var Je=256,Ye=262144,Xe=4194304;function Ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ze(n))):i=Ze(o):i=Ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ze(n))):i=Ze(o)):i=Ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Xe;return Xe<<=1,!(Xe&62914560)&&(Xe=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-We(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-We(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function dt(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[pt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Et(e){e[bt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return ke.call(Nt,e)?!0:ke.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(bu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function M(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dn=M(En),On=h({},En,{view:0,detail:0}),kn=M(On),An,jn,Mn,Nn=h({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Mn&&(Mn&&e.type===`mousemove`?(An=e.screenX-Mn.screenX,jn=e.screenY-Mn.screenY):jn=An=0,Mn=e),An)},movementY:function(e){return`movementY`in e?e.movementY:jn}}),Pn=M(Nn),Fn=M(h({},Nn,{dataTransfer:0})),In=M(h({},On,{relatedTarget:0})),Ln=M(h({},En,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=M(h({},En,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),zn=M(h({},En,{data:0})),Bn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Vn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Hn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Un(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hn[e])?!!t[e]:!1}function Wn(){return Un}var Gn=M(h({},On,{key:function(e){if(e.key){var t=Bn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Vn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Kn=M(h({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),qn=M(h({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn})),Jn=M(h({},En,{propertyName:0,elapsedTime:0,pseudoElement:0})),Yn=M(h({},Nn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Xn=M(h({},En,{newState:0,oldState:0})),Zn=[9,13,27,32],Qn=gn&&`CompositionEvent`in window,$n=null;gn&&`documentMode`in document&&($n=document.documentMode);var er=gn&&`TextEvent`in window&&!$n,tr=gn&&(!Qn||$n&&8<$n&&11>=$n),nr=` `,rr=!1;function ir(e,t){switch(e){case`keyup`:return Zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var or=!1;function sr(e,t){switch(e){case`compositionend`:return ar(t);case`keypress`:return t.which===32?(rr=!0,nr):null;case`textInput`:return e=t.data,e===nr&&rr?null:e;default:return null}}function cr(e,t){if(or)return e===`compositionend`||!Qn&&ir(e,t)?(e=Sn(),xn=bn=yn=null,or=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!lr[e.type]:t===`textarea`}function dr(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Ed(t,`onChange`),0<t.length&&(n=new Dn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var fr=null,pr=null;function mr(e){yd(e,0)}function hr(e){if(Ht(wt(e)))return e}function gr(e,t){if(e===`change`)return t}var _r=!1;if(gn){var vr;if(gn){var yr=`oninput`in document;if(!yr){var br=document.createElement(`div`);br.setAttribute(`oninput`,`return;`),yr=typeof br.oninput==`function`}vr=yr}else vr=!1;_r=vr&&(!document.documentMode||9<document.documentMode)}function xr(){fr&&(fr.detachEvent(`onpropertychange`,Sr),pr=fr=null)}function Sr(e){if(e.propertyName===`value`&&hr(pr)){var t=[];dr(t,pr,e,ln(e)),mn(mr,t)}}function Cr(e,t,n){e===`focusin`?(xr(),fr=t,pr=n,fr.attachEvent(`onpropertychange`,Sr)):e===`focusout`&&xr()}function wr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return hr(pr)}function Tr(e,t){if(e===`click`)return hr(t)}function Er(e,t){if(e===`input`||e===`change`)return hr(t)}function Dr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Or=typeof Object.is==`function`?Object.is:Dr;function kr(e,t){if(Or(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!Or(e[i],t[i]))return!1}return!0}function Ar(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var n=Ar(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ar(n)}}function Mr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Fr=gn&&`documentMode`in document&&11>=document.documentMode,Ir=null,Lr=null,Rr=null,zr=!1;function Br(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zr||Ir==null||Ir!==Ut(r)||(r=Ir,`selectionStart`in r&&Pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&kr(Rr,r)||(Rr=r,r=Ed(Lr,`onSelect`),0<r.length&&(t=new Dn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Hr={animationend:Vr(`Animation`,`AnimationEnd`),animationiteration:Vr(`Animation`,`AnimationIteration`),animationstart:Vr(`Animation`,`AnimationStart`),transitionrun:Vr(`Transition`,`TransitionRun`),transitionstart:Vr(`Transition`,`TransitionStart`),transitioncancel:Vr(`Transition`,`TransitionCancel`),transitionend:Vr(`Transition`,`TransitionEnd`)},Ur={},Wr={};gn&&(Wr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),`TransitionEvent`in window||delete Hr.transitionend.transition);function Gr(e){if(Ur[e])return Ur[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wr)return Ur[e]=t[n];return e}var Kr=Gr(`animationend`),qr=Gr(`animationiteration`),N=Gr(`animationstart`),Jr=Gr(`transitionrun`),Yr=Gr(`transitionstart`),Xr=Gr(`transitioncancel`),Zr=Gr(`transitionend`),Qr=new Map,$r=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);$r.push(`scrollEnd`);function ei(e,t){Qr.set(e,t),kt(t,[e])}var ti=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ni=[],ri=0,ii=0;function ai(){for(var e=ri,t=ii=ri=0;t<e;){var n=ni[t];ni[t++]=null;var r=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var a=ni[t];if(ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&li(n,i,a)}}function oi(e,t,n,r){ni[ri++]=e,ni[ri++]=t,ni[ri++]=n,ni[ri++]=r,ii|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function si(e,t,n,r){return oi(e,t,n,r),ui(e)}function ci(e,t){return oi(e,null,null,t),ui(e)}function li(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-We(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ui(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var di={};function fi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,t,n,r){return new fi(e,t,n,r)}function mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hi(e,t){var n=e.alternate;return n===null?(n=pi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _i(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)mi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=pi(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return vi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=pi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ne:return e=pi(13,n,t,a),e.elementType=ne,e.lanes=o,e;case C:return e=pi(19,n,t,a),e.elementType=C,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case te:s=10;break a;case ee:s=9;break a;case S:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=pi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function vi(e,t,n,r){return e=pi(7,e,r,t),e.lanes=n,e}function yi(e,t,n){return e=pi(6,e,null,t),e.lanes=n,e}function bi(e){var t=pi(18,null,null,0);return t.stateNode=e,t}function xi(e,t,n){return t=pi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Si=new WeakMap;function Ci(e,t){if(typeof e==`object`&&e){var n=Si.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},Si.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var wi=[],Ti=0,Ei=null,Di=0,Oi=[],ki=0,Ai=null,ji=1,Mi=``;function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Ei,Ei=e,Di=t}function Pi(e,t,n){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,Ai=e;var r=ji;e=Mi;var i=32-We(r)-1;r&=~(1<<i),n+=1;var a=32-We(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ji=1<<32-We(t)+i|n<<i|r,Mi=a+e}else ji=1<<a|n<<i|r,Mi=e}function Fi(e){e.return!==null&&(Ni(e,1),Pi(e,1,0))}function Ii(e){for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null;for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,Mi=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null}function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,ji=t.id,Mi=t.overflow,Ai=e}var Ri=null,P=null,F=!1,zi=null,Bi=!1,Vi=Error(i(519));function Hi(e){throw qi(Ci(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Vi}function Ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Hi(e,!0)}function I(e){for(Ri=e.return;Ri;)switch(Ri.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Ri=Ri.return}}function Wi(e){if(e!==Ri)return!1;if(!F)return I(e),F=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&P&&Hi(e),I(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));P=uf(e)}else t===27?(t=P,Zd(e.type)?(e=lf,lf=null,P=e):P=t):P=Ri?cf(e.stateNode.nextSibling):null;return!0}function Gi(){P=Ri=null,F=!1}function Ki(){var e=zi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),zi=null),e}function qi(e){zi===null?zi=[e]:zi.push(e)}var Ji=fe(null),Yi=null,Xi=null;function Zi(e,t,n){k(Ji,t._currentValue),t._currentValue=n}function Qi(e){e._currentValue=Ji.current,pe(Ji)}function $i(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ea(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),$i(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),$i(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ta(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Or(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ea(t,e,n,r),t.flags|=262144}function na(e){for(e=e.firstContext;e!==null;){if(!Or(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ra(e){Yi=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ia(e){return oa(Yi,e)}function aa(e,t){return Yi===null&&ra(e),oa(e,t)}function oa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Xi===null){if(e===null)throw Error(i(308));Xi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xi=Xi.next=t;return n}var sa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ca=t.unstable_scheduleCallback,la=t.unstable_NormalPriority,ua={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function da(){return{controller:new sa,data:new Map,refCount:0}}function fa(e){e.refCount--,e.refCount===0&&ca(la,function(){e.controller.abort()})}var pa=null,ma=0,ha=0,ga=null;function _a(e,t){if(pa===null){var n=pa=[];ma=0,ha=dd(),ga={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ma++,t.then(va,va),t}function va(){if(--ma===0&&pa!==null){ga!==null&&(ga.status=`fulfilled`);var e=pa;pa=null,ha=0,ga=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ya(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ba=D.S;D.S=function(e,t){eu=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&_a(e,t),ba!==null&&ba(e,t)};var xa=fe(null);function Sa(){var e=xa.current;return e===null?q.pooledCache:e}function Ca(e,t){t===null?k(xa,xa.current):k(xa,t.pool)}function wa(){var e=Sa();return e===null?null:{parent:ua._currentValue,pool:e}}var Ta=Error(i(460)),Ea=Error(i(474)),Da=Error(i(542)),Oa={then:function(){}};function ka(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Aa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Pa(e),e}throw Ma=t,Ta}}function ja(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ma=e,Ta):e}}var Ma=null;function Na(){if(Ma===null)throw Error(i(459));var e=Ma;return Ma=null,e}function Pa(e){if(e===Ta||e===Da)throw Error(i(483))}var Fa=null,Ia=0;function La(e){var t=Ia;return Ia+=1,Fa===null&&(Fa=[]),Aa(Fa,e,t)}function Ra(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function za(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ba(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=hi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&ja(i)===t.type)?(t=a(t,n.props),Ra(t,n),t.return=e,t):(t=_i(n.type,n.key,n.props,null,e.mode,r),Ra(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=vi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=yi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=_i(t.type,t.key,t.props,null,e.mode,n),Ra(n,t),n.return=e,n;case v:return t=xi(t,e.mode,n),t.return=e,t;case w:return t=ja(t),f(e,t,n)}if(ce(t)||ae(t))return t=vi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,La(t),n);if(t.$$typeof===te)return f(e,aa(e,t),n);za(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=ja(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,La(n),r);if(n.$$typeof===te)return p(e,t,aa(e,n),r);za(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=ja(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,La(r),i);if(r.$$typeof===te)return m(e,t,n,aa(t,r),i);za(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),F&&Ni(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return F&&Ni(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),F&&Ni(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),F&&Ni(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return F&&Ni(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),F&&Ni(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&ja(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ra(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=vi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=_i(o.type,o.key,o.props,null,e.mode,c),Ra(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=xi(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=ja(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,La(o),c);if(o.$$typeof===te)return b(e,r,aa(e,o),c);za(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=yi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ia=0;var i=b(e,t,n,r);return Fa=null,i}catch(t){if(t===Ta||t===Da)throw t;var a=pi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Va=Ba(!0),Ha=Ba(!1),Ua=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ga(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ui(e),li(e,null,n),t}return oi(e,r,t,n),ui(e)}function Ja(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function Ya(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Xa=!1;function Za(){if(Xa){var e=ga;if(e!==null)throw e}}function Qa(e,t,n,r){Xa=!1;var i=e.updateQueue;Ua=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ha&&(Xa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ua=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function $a(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function eo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$a(n[e],t)}var to=fe(null),no=fe(0);function ro(e,t){e=Ul,k(no,e),k(to,t),Ul=e|t.baseLanes}function io(){k(no,Ul),k(to,to.current)}function ao(){Ul=no.current,pe(to),pe(no)}var oo=fe(null),so=null;function co(e){var t=e.alternate;k(R,R.current&1),k(oo,e),so===null&&(t===null||to.current!==null||t.memoizedState!==null)&&(so=e)}function lo(e){k(R,R.current),k(oo,e),so===null&&(so=e)}function uo(e){e.tag===22?(k(R,R.current),k(oo,e),so===null&&(so=e)):L(e)}function L(){k(R,R.current),k(oo,oo.current)}function fo(e){pe(oo),so===e&&(so=null),pe(R)}var R=fe(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=0,z=null,B=null,ho=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function V(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Or(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return mo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Bs:Vs,vo=!1,a=n(r,i),vo=!1,_o&&(a=Eo(t,n,r,i)),To(e),a}function To(e){D.H=zs;var t=B!==null&&B.next!==null;if(mo=0,ho=B=z=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&na(e)&&(ic=!0))}function Eo(e,t,n,r){z=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,ho=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Hs,o=t(n,r)}while(_o);return o}function Do(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?Po(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function Oo(){var e=yo!==0;return yo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}mo=0,ho=B=z=null,_o=!1,bo=yo=0,xo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ho===null?z.memoizedState=ho=e:ho=ho.next=e,ho}function Mo(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=ho===null?z.memoizedState:ho.next;if(t!==null)ho=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},ho===null?z.memoizedState=ho=e:ho=ho.next=e}return ho}function No(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Po(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=Aa(xo,e,t),t=z,(ho===null?t.memoizedState:ho.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Bs:Vs),e}function Fo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Po(e);if(e.$$typeof===te)return ia(e)}throw Error(i(438,String(e)))}function Io(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=No(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=T;return t.index++,n}function Lo(e,t){return typeof t==`function`?t(e):t}function Ro(e){return zo(Mo(),B,e)}function zo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(mo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ha&&(d=!0);else if((mo&p)===p){u=u.next,p===ha&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,Gl|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Or(o,e.memoizedState)&&(ic=!0,d&&(n=ga,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Bo(e){var t=Mo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Or(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Vo(e,t,n){var r=z,a=Mo(),o=F;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Or((B||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,fs(Wo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ho!==null&&ho.memoizedState.tag&1){if(r.flags|=2048,ss(9,{destroy:void 0},Uo.bind(null,r,a,n,t),null),q===null)throw Error(i(349));o||mo&127||Ho(r,t,n)}return n}function Ho(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=No(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uo(e,t,n,r){t.value=n,t.getSnapshot=r,Go(t)&&Ko(e)}function Wo(e,t,n){return n(function(){Go(t)&&Ko(e)})}function Go(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Or(e,n)}catch{return!0}}function Ko(e){var t=ci(e,2);t!==null&&hu(t,e,2)}function qo(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),vo){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:e},t}function Jo(e,t,n,r){return e.baseState=n,zo(e,B,typeof r==`function`?r:Lo)}function Yo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Xo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Xo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Zo(e,t,s)}catch(n){$o(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Zo(e,t,a)}catch(n){$o(e,t,n)}}function Zo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Qo(e,t,n)},function(n){return $o(e,t,n)}):Qo(e,t,n)}function Qo(e,t,n){t.status=`fulfilled`,t.value=n,es(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Xo(e,n)))}function $o(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,es(t),t=t.next;while(t!==r)}e.action=null}function es(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ts(e,t){return t}function ns(e,t){if(F){var n=q.formState;if(n!==null){a:{var r=z;if(F){if(P){b:{for(var i=P,a=Bi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){P=cf(i.nextSibling),r=i.data===`F!`;break a}}Hi(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:t},n.queue=r,n=Ns.bind(null,z,r),r.dispatch=n,r=qo(!1),a=Fs.bind(null,z,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Yo.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function rs(e){return is(Mo(),B,e)}function is(e,t,n){if(t=zo(e,t,ts)[0],e=Ro(Lo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Po(t)}catch(e){throw e===Ta?Da:e}else r=t;t=Mo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,ss(9,{destroy:void 0},as.bind(null,i,n),null)),[r,a,e]}function as(e,t){e.action=t}function os(e){var t=Mo(),n=B;if(n!==null)return is(t,n,e);Mo(),t=t.memoizedState,n=Mo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ss(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=No(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function cs(){return Mo().memoizedState}function ls(e,t,n,r){var i=jo();z.flags|=e,i.memoizedState=ss(1|t,{destroy:void 0},n,r===void 0?null:r)}function us(e,t,n,r){var i=Mo();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&Co(r,B.memoizedState.deps)?i.memoizedState=ss(t,a,n,r):(z.flags|=e,i.memoizedState=ss(1|t,a,n,r))}function ds(e,t){ls(8390656,8,e,t)}function fs(e,t){us(2048,8,e,t)}function ps(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=No(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function H(e){var t=Mo().memoizedState;return ps({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return us(4,2,e,t)}function hs(e,t){return us(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),us(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=Mo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=Mo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),vo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||mo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),z.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Or(n,t)?n:to.current===null?!(mo&42)||mo&1073741824&&!(Y&261930)?(ic=!0,e.memoizedState=n):(e=mu(),z.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Or(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Fs(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,ya(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,le,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return ia(Qf)}function ks(){return Mo().memoizedState}function As(){return Mo().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ka(n);var r=qa(t,e,n);r!==null&&(hu(r,t,n),Ja(r,t,n)),t={cache:da()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=si(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Or(s,o))return oi(e,t,i,0),q===null&&ai(),!1}catch{}if(n=si(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=si(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===z||t!==null&&t===z}function Ls(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var zs={readContext:ia,use:Fo,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};zs.useEffectEvent=V;var Bs={readContext:ia,use:Fo,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:ia,useEffect:ds,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ls(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ls(4194308,4,e,t)},useInsertionEffect:function(e,t){ls(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(vo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(vo){Ue(!0);try{n(t)}finally{Ue(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=qo(e);var t=e.queue,n=Ns.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(jo(),e,t)},useTransition:function(){var e=qo(!1);return e=Cs.bind(null,z,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=jo();if(F){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||Ho(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ds(Wo.bind(null,r,o,e),[e]),r.flags|=2048,ss(9,{destroy:void 0},Uo.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=q.identifierPrefix;if(F){var n=Mi,r=ji;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:Io,useCacheRefresh:function(){return jo().memoizedState=js.bind(null,z)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:ia,use:Fo,useCallback:ys,useContext:ia,useEffect:fs,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Ro,useRef:cs,useState:function(){return Ro(Lo)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(Mo(),B.memoizedState,e,t)},useTransition:function(){var e=Ro(Lo)[0],t=Mo().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Vo,useId:ks,useHostTransitionStatus:Os,useFormState:rs,useActionState:rs,useOptimistic:function(e,t){return Jo(Mo(),B,e,t)},useMemoCache:Io,useCacheRefresh:As};Vs.useEffectEvent=H;var Hs={readContext:ia,use:Fo,useCallback:ys,useContext:ia,useEffect:fs,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Bo,useRef:cs,useState:function(){return Bo(Lo)},useDebugValue:vs,useDeferredValue:function(e,t){var n=Mo();return B===null?xs(n,e,t):Ss(n,B.memoizedState,e,t)},useTransition:function(){var e=Bo(Lo)[0],t=Mo().memoizedState;return[typeof e==`boolean`?e:Po(e),t]},useSyncExternalStore:Vo,useId:ks,useHostTransitionStatus:Os,useFormState:os,useActionState:os,useOptimistic:function(e,t){var n=Mo();return B===null?(n.baseState=e,[e,n.queue.dispatch]):Jo(n,B,e,t)},useMemoCache:Io,useCacheRefresh:As};Hs.useEffectEvent=H;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ka(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=qa(e,i,r),t!==null&&(hu(t,e,r),Ja(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ka(n);r.tag=2,t!=null&&(r.callback=t),t=qa(e,r,n),t!==null&&(hu(t,e,n),Ja(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){ti(e)}function Ys(e){console.error(e)}function Xs(e){ti(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ka(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ka(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ta(t,n,a,!0),n=oo.current,n!==null){switch(n.tag){case 31:case 13:return so===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Oa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(F)return t=oo.current,t===null?(r!==Vi&&(t=Error(i(423),{cause:r}),qi(Ci(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ci(r,n),a=$s(e.stateNode,r,a),Ya(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Vi&&(e=Error(i(422),{cause:r}),qi(Ci(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ci(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=Ci(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ya(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ya(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function U(e,t,n,r){t.child=e===null?Ha(t,null,n,r):Va(t,e.child,n,r)}function ac(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ra(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!ic?(ko(e,t,i),kc(e,t,i)):(F&&s&&Fi(t),t.flags|=1,U(e,t,r,i),t.child)}function oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!mi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,sc(e,t,a,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ac(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?kr:n,n(o,r)&&e.ref===t.ref)return kc(e,t,i)}return t.flags|=1,e=hi(a,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(kr(a,r)&&e.ref===t.ref){if(ic=!1,t.pendingProps=r=a,Ac(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,kc(e,t,i)}}return hc(e,t,n,r,i)}function cc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return uc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ca(t,a===null?null:a.cachePool),a===null?io():ro(t,a),uo(t);else return r=t.lanes=536870912,uc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ca(t,null),io(),L(t)):(Ca(t,a.cachePool),ro(t,a),L(t),t.memoizedState=null);return U(e,t,i,n),t.child}function lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function uc(e,t,n,r,i){var a=Sa();return a=a===null?null:{parent:ua._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ca(t,null),io(),uo(t),e!==null&&ta(e,t,r,!0),t.childLanes=i,null}function dc(e,t){return t=wc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function fc(e,t,n){return Va(t,e.child,null,n),e=dc(t,t.pendingProps),e.flags|=2,fo(t),t.memoizedState=null,e}function pc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(F){if(r.mode===`hidden`)return e=dc(t,r),t.lanes=536870912,lc(null,e);if(lo(t),(e=P)?(e=rf(e,Bi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Hi(t);return t.lanes=536870912,null}return dc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(lo(t),a){if(t.flags&256)t.flags&=-257,t=fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(ic||ta(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=q,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ci(e,s),hu(r,e,s),rc;Du(),t=fc(e,t,n)}else e=o.treeContext,P=cf(s.nextSibling),Ri=t,F=!0,zi=null,Bi=!1,e!==null&&Li(t,e),t=dc(t,r),t.flags|=4096;return t}return e=hi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function mc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hc(e,t,n,r,i){return ra(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!ic?(ko(e,t,i),kc(e,t,i)):(F&&r&&Fi(t),t.flags|=1,U(e,t,n,i),t.child)}function gc(e,t,n,r,i,a){return ra(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!ic?(ko(e,t,a),kc(e,t,a)):(F&&r&&Fi(t),t.flags|=1,U(e,t,n,a),t.child)}function _c(e,t,n,r,i){if(ra(t),t.stateNode===null){var a=di,o=n.contextType;typeof o==`object`&&o&&(a=ia(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Wa(t),o=n.contextType,a.context=typeof o==`object`&&o?ia(o):di,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Qa(t,r,a,i),Za(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=di,typeof u==`object`&&u&&(o=ia(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ua=!1;var f=t.memoizedState;a.state=f,Qa(t,r,a,i),Za(),l=t.memoizedState,s||f!==l||Ua?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ua||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ga(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=di,typeof l==`object`&&l&&(c=ia(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ua=!1,f=t.memoizedState,a.state=f,Qa(t,r,a,i),Za();var p=t.memoizedState;o!==d||f!==p||Ua||e!==null&&e.dependencies!==null&&na(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ua||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&na(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,mc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Va(t,e.child,null,i),t.child=Va(t,null,n,i)):U(e,t,n,i),t.memoizedState=a.state,e=t.child):e=kc(e,t,i),e}function vc(e,t,n,r){return Gi(),t.flags|=256,U(e,t,n,r),t.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bc(e){return{baseLanes:e,cachePool:wa()}}function xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Sc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(R.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(F){if(a?co(t):L(t),(e=P)?(e=rf(e,Bi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,P=null)):e=null,e===null)throw Hi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(L(t),a=t.mode,c=wc({mode:`hidden`,children:c},a),r=vi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(null,r)):(co(t),Cc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(co(t),t.flags&=-257,t=Tc(e,t,n)):t.memoizedState===null?(L(t),c=r.fallback,a=t.mode,r=wc({mode:`visible`,children:r.children},a),c=vi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Va(t,e.child,null,n),r=t.child,r.memoizedState=bc(n),r.childLanes=xc(e,s,n),t.memoizedState=yc,t=lc(null,r)):(L(t),t.child=e.child,t.flags|=128,t=null);else if(co(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,qi({value:r,source:null,stack:null}),t=Tc(e,t,n)}else if(ic||ta(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=q,s!==null&&(r=st(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ci(e,r),hu(s,e,r),rc;af(c)||Du(),t=Tc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,P=cf(c.nextSibling),Ri=t,F=!0,zi=null,Bi=!1,e!==null&&Li(t,e),t=Cc(t,r.children),t.flags|=4096);return t}return a?(L(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=hi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=vi(c,a,n,null),c.flags|=2):c=hi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,lc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=bc(n):(a=c.cachePool,a===null?a=wa():(l=ua._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=xc(e,s,n),t.memoizedState=yc,lc(e.child,r)):(co(t),n=e.child,e=n.sibling,n=hi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Cc(e,t){return t=wc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function wc(e,t){return e=pi(22,e,null,t),e.lanes=0,e}function Tc(e,t,n){return Va(t,e.child,null,n),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$i(e.return,t,n)}function Dc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Oc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=R.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,k(R,o),U(e,t,r,n),r=F?Di:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ec(e,n,t);else if(e.tag===19)Ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Dc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Dc(t,!0,n,null,a,r);break;case`together`:Dc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function kc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ta(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=hi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&na(e)))}function jc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),Zi(t,ua,e.memoizedState.cache),Gi();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:Zi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(co(t),e=kc(e,t,n),e===null?null:e.sibling):Sc(e,t,n):(co(t),t.flags|=128,null);co(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ta(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Oc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(R,R.current),r)break;return null;case 22:return t.lanes=0,cc(e,t,n,t.pendingProps);case 24:Zi(t,ua,e.memoizedState.cache)}return kc(e,t,n)}function Mc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!Ac(e,n)&&!(t.flags&128))return ic=!1,jc(e,t,n);ic=!!(e.flags&131072)}}else ic=!1,F&&t.flags&1048576&&Pi(t,Di,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ja(t.elementType),t.type=e,typeof e==`function`)mi(e)?(r=qs(e,r),t.tag=1,t=_c(null,t,e,r,n)):(t.tag=0,t=hc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===S){t.tag=11,t=ac(null,t,e,r,n);break a}if(a===re){t.tag=14,t=oc(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return hc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),_c(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ga(e,t),Qa(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Zi(t,ua,r),r!==o.cache&&ea(t,[ua],n,!0),Za(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=vc(e,t,r,n);break a}if(r!==a){a=Ci(Error(i(424)),t),qi(a),t=vc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(P=cf(e.firstChild),Ri=t,F=!0,zi=null,Bi=!0,n=Ha(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Gi(),r===a){t=kc(e,t,n);break a}U(e,t,r,n)}t=t.child}return t;case 26:return mc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:F||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[pt]=t,r[mt]=e,Pd(r,n,e),Et(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&F&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Ri=t,Bi=!0,a=P,Zd(t.type)?(lf=a,P=cf(r.firstChild)):P=a),U(e,t,t.pendingProps.children,n),mc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((a=r=P)&&(r=tf(r,t.type,t.pendingProps,Bi),r===null?a=!1:(t.stateNode=r,Ri=t,P=cf(r.firstChild),Bi=!1,a=!0)),a||Hi(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Do,null,null,n),Qf._currentValue=a),mc(e,t),U(e,t,r,n),t.child;case 6:return e===null&&F&&((e=n=P)&&(n=nf(n,t.pendingProps,Bi),n===null?e=!1:(t.stateNode=n,Ri=t,P=null,e=!0)),e||Hi(t)),null;case 13:return Sc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Va(t,null,r,n):U(e,t,r,n),t.child;case 11:return ac(e,t,t.type,t.pendingProps,n);case 7:return U(e,t,t.pendingProps,n),t.child;case 8:return U(e,t,t.pendingProps.children,n),t.child;case 12:return U(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Zi(t,t.type,r.value),U(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ra(t),a=ia(a),r=r(a),t.flags|=1,U(e,t,r,n),t.child;case 14:return oc(e,t,t.type,t.pendingProps,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 19:return Oc(e,t,n);case 31:return pc(e,t,n);case 22:return cc(e,t,n,t.pendingProps);case 24:return ra(t),r=ia(ua),e===null?(a=Sa(),a===null&&(a=q,o=da(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Wa(t),Zi(t,ua,a)):((e.lanes&n)!==0&&(Ga(e,t),Qa(t,null,null,n),Za()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Zi(t,ua,r),r!==a.cache&&ea(t,[ua],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Zi(t,ua,r))),U(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Nc(e){e.flags|=4}function Pc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ma=Oa,Ea}}else e.flags&=-16777217}function Fc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Ma=Oa,Ea}}function Ic(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,Yl|=t)}function Lc(e,t){if(!F)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rc(e,t,n){var r=t.pendingProps;switch(Ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Qi(ua),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Wi(t)?Nc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ki())),W(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Nc(t),o===null?(W(t),Pc(t,a,null,r,n)):(W(t),Fc(t,o))):o?o===e.memoizedState?(W(t),t.flags&=-16777217):(Nc(t),W(t),Fc(t,o)):(e=e.memoizedProps,e!==r&&Nc(t),W(t),Pc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}e=me.current,Wi(t)?Ui(t,e):(e=ff(a,r,n),t.stateNode=e,Nc(t))}return W(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),null}if(o=me.current,Wi(t))Ui(t,o);else{var s=Bd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Nc(t)}}return W(t),Pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Wi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ri,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Hi(t,!0)}else e=Bd(e).createTextNode(r),e[pt]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Wi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fo(t),t):(fo(t),null);if(t.flags&128)throw Error(i(558))}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Wi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),a=!1}else a=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(fo(t),t):(fo(t),null)}return fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ic(t,t.updateQueue),W(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),W(t),null;case 10:return Qi(t.type),W(t),null;case 19:if(pe(R),r=t.memoizedState,r===null)return W(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Lc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=po(e),o!==null){for(t.flags|=128,Lc(r,!1),e=o.updateQueue,t.updateQueue=e,Ic(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gi(n,e),n=n.sibling;return k(R,R.current&1|2),F&&Ni(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>tu&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ic(t,e),Lc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!F)return W(t),null}else 2*Ne()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Lc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(W(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,n=R.current,k(R,a?n&1|2:n&1),F&&Ni(t,r.treeForkCount),e);case 22:case 23:return fo(t),ao(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&Ic(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&pe(xa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Qi(ua),W(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function zc(e,t){switch(Ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qi(ua),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(fo(t),t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(R),null;case 4:return ye(),null;case 10:return Qi(t.type),null;case 22:case 23:return fo(t),ao(),e!==null&&pe(xa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qi(ua),null;case 25:return null;default:return null}}function Bc(e,t){switch(Ii(t),t.tag){case 3:Qi(ua),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&fo(t);break;case 13:fo(t);break;case 19:pe(R);break;case 10:Qi(t.type);break;case 22:case 23:fo(t),ao(),e!==null&&pe(xa);break;case 24:Qi(ua)}}function Vc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Hc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Uc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{eo(t,n)}catch(t){Z(e,e.return,t)}}}function Wc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Gc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[mt]=t}catch(t){Z(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[pt]=e,t[mt]=n}catch(t){Z(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,Rd=sp,e=Nr(e),Pr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:bl(e,n),r&4&&Vc(5,n);break;case 1:if(bl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Uc(n),r&512&&Gc(n,n.return);break;case 3:if(bl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{eo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:bl(e,n),t===null&&r&4&&qc(n),r&512&&Gc(n,n.return);break;case 12:bl(e,n);break;case 31:bl(e,n),r&4&&dl(e,n);break;case 13:bl(e,n),r&4&&fl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?Sl(e,n,!!(n.subtreeFlags&8772)):bl(e,n),el=i,tl=a}break;case 30:break;default:bl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var G=null,cl=!1;function ll(e,t,n){for(n=n.child;n!==null;)ul(e,t,n),n=n.sibling}function ul(e,t,n){if(He&&typeof He.onCommitFiberUnmount==`function`)try{He.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:tl||Kc(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||Kc(n,t);var r=G,i=cl;Zd(n.type)&&(G=n.stateNode,cl=!1),ll(e,t,n),pf(n.stateNode),G=r,cl=i;break;case 5:tl||Kc(n,t);case 6:if(r=G,i=cl,G=null,ll(e,t,n),G=r,cl=i,G!==null){if(cl)try{(G.nodeType===9?G.body:G.nodeName===`HTML`?G.ownerDocument.body:G).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{G.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:G!==null&&(cl?(e=G,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(G,n.stateNode));break;case 4:r=G,i=cl,G=n.stateNode.containerInfo,cl=!0,ll(e,t,n),G=r,cl=i;break;case 0:case 11:case 14:case 15:Hc(2,n,t),tl||Hc(4,n,t),ll(e,t,n);break;case 1:tl||(Kc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Wc(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ll(e,t,n),tl=r;break;default:ll(e,t,n)}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function pl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(i(435,e.tag))}}function ml(e,t){var n=pl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function hl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){G=c.stateNode,cl=!1;break a}break;case 5:G=c.stateNode,cl=!1;break a;case 3:case 4:G=c.stateNode.containerInfo,cl=!0;break a}c=c.return}if(G===null)throw Error(i(160));ul(o,s,a),G=null,cl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)_l(t,e),t=t.sibling}var gl=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hl(t,e),vl(e),r&4&&(Hc(3,e,e.return),Vc(3,e),Hc(5,e,e.return));break;case 1:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=gl;if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[pt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[pt]=e,Et(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[pt]=e,Et(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(hl(t,e),vl(e),r&512&&(tl||n===null||Kc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Jc(e,a,n===null?a:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(hl(t,e),vl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=gl,gl=gf(t.containerInfo),hl(t,e),gl=a,vl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}nl&&(nl=!1,yl(e));break;case 4:r=gl,gl=gf(e.stateNode.containerInfo),hl(t,e),vl(e),gl=r;break;case 12:hl(t,e),vl(e);break;case 31:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 13:hl(t,e),vl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Ne()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||a,tl=d||l,hl(t,e),tl=d,el=u,vl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||el||tl||xl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ml(e,n))));break;case 19:hl(t,e),vl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ml(e,r)));break;case 30:break;case 21:break;default:hl(t,e),vl(e)}}function vl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Qc(e,Xc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Qt(o,``),n.flags&=-33),Qc(e,Xc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Zc(e,Xc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function xl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hc(4,t,t.return),xl(t);break;case 1:Kc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Wc(t,t.return,n),xl(t);break;case 27:pf(t.stateNode);case 26:case 5:Kc(t,t.return),xl(t);break;case 22:t.memoizedState===null&&xl(t);break;case 30:xl(t);break;default:xl(t)}e=e.sibling}}function Sl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Sl(i,a,n),Vc(4,a);break;case 1:if(Sl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)$a(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Uc(a),Gc(a,a.return);break;case 27:$c(a);case 26:case 5:Sl(i,a,n),n&&r===null&&o&4&&qc(a),Gc(a,a.return);break;case 12:Sl(i,a,n);break;case 31:Sl(i,a,n),n&&o&4&&dl(i,a);break;case 13:Sl(i,a,n),n&&o&4&&fl(i,a);break;case 22:a.memoizedState===null&&Sl(i,a,n),Gc(a,a.return);break;case 30:break;default:Sl(i,a,n)}t=t.sibling}}function Cl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&fa(n))}function wl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e))}function Tl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)El(e,t,n,r),t=t.sibling}function El(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Tl(e,t,n,r),i&2048&&Vc(9,t);break;case 1:Tl(e,t,n,r);break;case 3:Tl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&fa(e)));break;case 12:if(i&2048){Tl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Tl(e,t,n,r);break;case 31:Tl(e,t,n,r);break;case 13:Tl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Tl(e,t,n,r):(a._visibility|=2,Dl(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?Tl(e,t,n,r):Ol(e,t),i&2048&&Cl(o,t);break;case 24:Tl(e,t,n,r),i&2048&&wl(t.alternate,t);break;default:Tl(e,t,n,r)}}function Dl(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Dl(a,o,s,c,i),Vc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Dl(a,o,s,c,i)):u._visibility&2?Dl(a,o,s,c,i):Ol(a,o),i&&l&2048&&Cl(o.alternate,o);break;case 24:Dl(a,o,s,c,i),i&&l&2048&&wl(o.alternate,o);break;default:Dl(a,o,s,c,i)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ol(n,r),i&2048&&Cl(r.alternate,r);break;case 24:Ol(n,r),i&2048&&wl(r.alternate,r);break;default:Ol(n,r)}t=t.sibling}}var kl=8192;function Al(e,t,n){if(e.subtreeFlags&kl)for(e=e.child;e!==null;)jl(e,t,n),e=e.sibling}function jl(e,t,n){switch(e.tag){case 26:Al(e,t,n),e.flags&kl&&e.memoizedState!==null&&Gf(n,gl,e.memoizedState,e.memoizedProps);break;case 5:Al(e,t,n);break;case 3:case 4:var r=gl;gl=gf(e.stateNode.containerInfo),Al(e,t,n),gl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=kl,kl=16777216,Al(e,t,n),kl=r):Al(e,t,n));break;default:Al(e,t,n)}}function Ml(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pl(e),e=e.sibling}function Pl(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Hc(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Fl(e)):Nl(e);break;default:Nl(e)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Ml(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hc(8,t,t.return),Fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Fl(t));break;default:Fl(t)}e=e.sibling}}function Il(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Hc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:fa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Ll={getCacheForType:function(e){var t=ia(ua),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ia(ua).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return K&2&&Y!==0?Y&-Y:D.T===null?ut():dd()}function mu(){if(Jl===0){if(!(Y&536870912)||F){var e=Ye;Ye<<=1,!(Ye&3932160)&&(Ye=262144),Jl=e}else Jl=536870912}return e=oo.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),rt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||$e(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Ne(),10<a)){if(yu(r,t,Jl,!Bl),Qe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},jl(t,a,d);var m=(a&62914560)===a?$l-Ne():(a&4194048)===a?eu-Ne():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Or(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-We(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function bu(){return K&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Xi=Yi=null,Ao(e),Fa=null,Ia=0,e=J;for(;e!==null;)Bc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),q=e,J=n=hi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=$e(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-We(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,ai(),n}function Cu(e,t){z=null,D.H=zs,t===Ta||t===Da?(t=Na(),X=3):t===Ea?(t=Na(),X=4):X=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Zs(e,Ci(t,e.current)))}function wu(){var e=oo.current;return e===null?!0:(Y&4194048)===Y?so===null:(Y&62914560)===Y||Y&536870912?e===so:!1}function Tu(){var e=D.H;return D.H=zs,e===null?zs:e}function Eu(){var e=D.A;return D.A=Ll,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&oo.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||q===null||yu(q,Y,Jl,!1)}function Ou(e,t,n){var r=K;K|=2;var i=Tu(),a=Eu();(q!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:oo.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Xi=Yi=null,K=r,D.H=i,D.A=a,J===null&&(q=null,Y=0,ai()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=K;K|=2;var r=Tu(),a=Eu();q!==e||Y!==t?(nu=null,tu=Ne()+500,Su(e,t)):Vl=$e(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(ka(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:ka(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Xi=Yi=null,D.H=r,D.A=a,K=n,J===null?(q=null,Y=0,ai(),Wl):0}function ju(){for(;J!==null&&!Me();)Mu(J)}function Mu(e){var t=Mc(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=gc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Ao(t);default:Bc(n,t),t=J=gi(t,Ul),t=Mc(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Xi=Yi=null,Ao(t),Fa=null,Ia=0;var i=t.return;try{if(nc(e,i,t,n,Y)){Wl=1,Zs(e,Ci(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Zs(e,Ci(n,e.current)),J=null;return}t.flags&32768?(F||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=oo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Rc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=zc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ii,it(e,n,o,s,c,l),e===q&&(J=q=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Le,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=K,K|=4;try{al(e,t,n)}finally{K=s,O.p=a,D.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=K;K|=4;try{_l(t,e);var a=zd,o=Nr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Mr(s.ownerDocument.documentElement,s)){if(c!==null&&Pr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=jr(s,h),v=jr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,O.p=r,D.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=K;K|=4;try{ol(e,t.alternate,t)}finally{K=i,O.p=r,D.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,A();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),lt(n),t=t.stateNode,He&&typeof He.onCommitFiberRoot==`function`)try{He.onCommitFiberRoot(Ve,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,fa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=lt(su),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,K&6)throw Error(i(331));var c=K;if(K|=4,Pl(o.current),El(o,o.current,s,n),K=c,id(0,!1),He&&typeof He.onPostCommitFiberRoot==`function`)try{He.onPostCommitFiberRoot(Ve,o)}catch{}return!0}finally{O.p=a,D.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ci(n,t),t=$s(e.stateNode,t,2),e=qa(e,t,2),e!==null&&(rt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ci(n,e),n=ec(2),r=qa(t,n,2),r!==null&&(tc(n,r,t,e),rt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>Ne()-$l?!(K&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=tt()),e=ci(e,t),e!==null&&(rt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-We(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Qe(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ne(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-We(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),lt(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=j;break;default:n=Le}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Qe(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){K&6?Ae(Fe,ad):od()})}function dd(){if(nd===0){var e=ha;e===0&&(e=Je,Je<<=1,!(Je&261888)&&(Je=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Dn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<$r.length;hd++){var gd=$r[hd];ei(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ei(Kr,`onAnimationEnd`),ei(qr,`onAnimationIteration`),ei(N,`onAnimationStart`),ei(`dblclick`,`onDoubleClick`),ei(`focusin`,`onFocus`),ei(`focusout`,`onBlur`),ei(Jr,`onTransitionRun`),ei(Yr,`onTransitionStart`),ei(Xr,`onTransitionCancel`),ei(Zr,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=Qr.get(e);if(c!==void 0){var l=Dn,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Gn;break;case`focusin`:u=`focus`,l=In;break;case`focusout`:u=`blur`,l=In;break;case`beforeblur`:case`afterblur`:l=In;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Pn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Fn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=qn;break;case Kr:case qr:case N:l=Ln;break;case Zr:l=Jn;break;case`scroll`:case`scrollend`:l=kn;break;case`wheel`:l=Yn;break;case`copy`:case`cut`:case`paste`:l=Rn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Kn;break;case`toggle`:case`beforetoggle`:l=Xn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Pn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Kn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=gr;else if(ur(c)){if(_r)v=Er;else{v=wr;var y=Cr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=gr):v=Tr;if(v&&=v(e,r)){dr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(ur(y)||y.contentEditable===`true`)&&(Ir=y,Lr=r,Rr=null);break;case`focusout`:Rr=Lr=Ir=null;break;case`mousedown`:zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:zr=!1,Br(s,n,i);break;case`selectionchange`:if(Fr)break;case`keydown`:case`keyup`:Br(s,n,i)}var b;if(Qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else or?ir(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(tr&&n.locale!==`ko`&&(or||x!==`onCompositionStart`?x===`onCompositionEnd`&&or&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,or=!0)),y=Ed(r,x),0<y.length&&(x=new zn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ar(n),b!==null&&(x.data=b)))),(b=er?sr(e,n):cr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new zn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=hn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Et(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Tt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Et(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Tt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Tt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Tt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Gt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Et(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Gt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,Et(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Et(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Et(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Et(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Et(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Et(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Et(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Et(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:te,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=pi(3,null,null,t),e.current=a,a.stateNode=e,t=da(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Wa(a),e}function tp(e){return e?(e=di,e):di}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ka(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=qa(e,r,t),n!==null&&(hu(n,e,t),Ja(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ct(t);var n=ci(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-We(o);s.entanglements[1]|=c,o&=~c}rd(a),!(K&6)&&(tu=Ne()+500,id(0,!1))}}break;case 31:case 13:s=ci(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=ln(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case j:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=Ct(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ht]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ve=zp.inject(Rp),He=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ht]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),b=o(((e,t)=>{t.exports=y()}))(),x={"Product overview":[`layers`,`Explore the ZapDocs platform`,`#315cff`],"Loan workflow":[`flow`,`From loan data to closing documents`,`#0899ae`],"Private lenders":[`home`,`Prepare private lending packages`,`#315cff`],"Loan originators":[`file`,`Capture terms and prepare documents`,`#a34be7`],"Servicing teams":[`calendar`,`Organize payment and servicing details`,`#0899ae`],"Broker workflows":[`case`,`Streamline broker and investor paperwork`,`#e76d50`],"Loan preparation workflow":[`flow`,`See how loan preparation works`,`#315cff`],"Book a Demo":[`calendar`,`See ZapDocs in action`,`#0899ae`],"Document outputs":[`layers`,`Explore available loan documents`,`#a34be7`],"Document generation":[`file`,`Prepare state-specific documents`,`#315cff`],"View pricing plans":[`price`,`Compare plans and package costs`,`#315cff`],Privacy:[`shield`,`Learn how information is handled`,`#0899ae`],Terms:[`file`,`Review website and service terms`,`#a34be7`]},ee={layers:`M12 3 3 8l9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5`,flow:`M3 4h7v6H3zM14 14h7v6h-7zM7 10v7h7M11 14l3 3-3 3`,home:`m3 11 9-8 9 8M5 10v11h14V10M10 21v-7h4v7`,file:`M5 3h9l5 5v13H5zM14 3v6h5M8 13h8M8 17h8`,calendar:`M4 5h16v16H4zM8 3v4M16 3v4M4 10h16M8 14h2M14 14h2M8 18h2`,case:`M3 7h18v13H3zM8 7V4h8v3M3 12h18M10 12v2h4v-2`,price:`M12 2v20M17 6H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H7`,shield:`m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6zM8 12l3 3 5-5`};function te({name:e,color:t}){return(0,b.jsx)(`span`,{className:`zap-menu-icon`,style:{color:t},"aria-hidden":`true`,children:(0,b.jsx)(`svg`,{width:`21`,height:`21`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,b.jsx)(`path`,{d:ee[e]||ee.file})})})}function S(){return(0,b.jsxs)(`svg`,{width:`17`,height:`17`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,b.jsx)(`circle`,{cx:`12`,cy:`8`,r:`4`}),(0,b.jsx)(`path`,{d:`M4 21v-2a8 8 0 0 1 16 0v2`})]})}function ne(){return(0,b.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 16 16`,fill:`none`,"aria-hidden":`true`,children:(0,b.jsx)(`path`,{d:`m4 6 4 4 4-4`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinecap:`round`,strokeLinejoin:`round`})})}function C({onLaunch:e,onPricing:t,onDemo:n,onHome:r}={}){let[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(null),c=(0,_.useRef)(null),l=(0,_.useRef)(null),u=()=>{clearTimeout(l.current)},d=(e,t)=>{t.pointerType!==`mouse`||i||(u(),s(e))},f=e=>{e.pointerType!==`mouse`||i||(u(),l.current=setTimeout(()=>{s(null)},220))};(0,_.useEffect)(()=>{let e=e=>{c.current?.contains(e.target)||(clearTimeout(l.current),s(null),a(!1))},t=e=>{e.key===`Escape`&&(clearTimeout(l.current),s(null),a(!1))};return document.addEventListener(`pointerdown`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`pointerdown`,e),document.removeEventListener(`keydown`,t),clearTimeout(l.current)}},[]);let p=(e,t)=>{u(),s(null),a(!1),typeof t==`function`?t():window.location.assign(e)},m=()=>p(`/app`,e),h=()=>p(`/pricing`,t),g=()=>p(`/demo`,n),v=()=>{u(),s(null),a(!1),window.location.pathname===`/`?window.scrollTo({top:0,behavior:`smooth`}):p(`/`,r)},y=e=>{u(),s(null),a(!1);let t=window.location.pathname===`/`&&document.getElementById(e);t?t.scrollIntoView({behavior:`smooth`}):window.location.assign(`/#`+e)},ee=[[`Platform`,[[`Product overview`,()=>y(`platform`)],[`Loan workflow`,()=>y(`workflow`)]]],[`Lenders`,[[`Private lenders`,()=>p(`/private-lenders`)],[`Loan originators`,()=>p(`/loan-originators`)],[`Servicing teams`,()=>p(`/servicing-teams`)],[`Broker workflows`,()=>p(`/broker-workflows`)]]],[`How it works`,[[`Loan preparation workflow`,()=>y(`workflow`)],[`Book a Demo`,g]]],[`Documents`,[[`Document outputs`,()=>y(`outputs`)],[`Document generation`,()=>y(`workflow`)]]],[`Pricing`,[[`View pricing plans`,h],[`Book a Demo`,g]]],[`Company`,[[`Book a Demo`,g],[`Privacy`,()=>p(`/privacy`)],[`Terms`,()=>p(`/terms`)]]]],C=()=>ee.map(([e,t])=>(0,b.jsxs)(`div`,{className:`zap-header-menu`,onPointerEnter:t=>d(e,t),onPointerLeave:f,children:[(0,b.jsxs)(`button`,{type:`button`,className:`zap-link zap-header-trigger`,"aria-expanded":o===e,onClick:()=>{u(),s(t=>t===e?null:e)},children:[e,(0,b.jsx)(ne,{})]}),(0,b.jsxs)(`div`,{className:`zap-header-dropdown`,"data-open":o===e,inert:o!==e||void 0,"aria-hidden":o!==e,children:[(0,b.jsx)(`div`,{className:`zap-dropdown-label`,children:e}),t.map(([e,t])=>{let[n,r,i]=x[e]||[`file`,``,`#315cff`];return(0,b.jsxs)(`button`,{type:`button`,onClick:t,className:`zap-dropdown-entry`,children:[(0,b.jsx)(te,{name:n,color:i}),(0,b.jsxs)(`span`,{className:`zap-dropdown-copy`,children:[(0,b.jsx)(`strong`,{children:e}),(0,b.jsx)(`small`,{children:r})]})]},e)})]})]},e));return(0,b.jsxs)(`header`,{className:`zap-nav-wrap`,ref:c,children:[(0,b.jsx)(`style`,{children:`

        /* ==============================
           ZAPDOCS HEADER
        ============================== */

        .zap-nav-wrap {
          --zap-ink: #0e1035;
          --zap-blue: #315cff;
          --zap-green: #3cdb87;
          --zap-green-hover: #2bcb75;
          --zap-line: #e7e9ef;
          --zap-muted: #64748b;

          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          background: #ffffff;
          border-top: 7px solid #10102f;
          color: var(--zap-ink);
          font-family: inherit;
          text-align: left;
        }

        .zap-nav-wrap * {
          box-sizing: border-box;
        }

        .zap-nav-wrap button {
          font-family: inherit;
        }

        /* ==============================
           HEADER CONTAINER
        ============================== */

        .zap-nav-wrap .zap-nav {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 42px 22px;
          min-height: 124px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          grid-template-rows: 36px 66px;
          column-gap: 36px;
          align-items: center;
        }

        /* ==============================
           BRAND
        ============================== */

        .zap-nav-wrap .zap-brand {
          grid-column: 1;
          grid-row: 2;
          display: inline-flex;
          align-items: center;
          gap: 11px;
          padding: 0;
          border: 0;
          background: transparent;
          color: var(--zap-ink);
          font-size: 27px;
          font-weight: 800;
          letter-spacing: -1.3px;
          line-height: 1;
          white-space: nowrap;
          cursor: pointer;
        }

        .zap-nav-wrap .zap-brand-mark {
          width: 45px;
          height: 45px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .zap-nav-wrap .zap-brand-mark svg {
          width: 45px;
          height: 45px;
          display: block;
        }

        /* ==============================
           TOP LOGIN
        ============================== */

        .zap-nav-wrap .zap-top-actions {
          grid-column: 3;
          grid-row: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-top: 8px;
          padding-right: 3px;
        }

        .zap-nav-wrap .zap-login-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border: 0;
          background: transparent;
          padding: 5px 0;
          color: var(--zap-ink);
          font-size: 14px;
          font-weight: 400;
          white-space: nowrap;
          cursor: pointer;
          transition: color .18s ease;
        }

        .zap-nav-wrap .zap-login-link:hover {
          color: var(--zap-blue);
        }

        /* ==============================
           MAIN NAVIGATION
        ============================== */

        .zap-nav-wrap .zap-nav-links {
          grid-column: 2;
          grid-row: 2;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: clamp(16px, 2.2vw, 32px);
          min-width: 0;
        }

        .zap-nav-wrap .zap-link {
          border: 0;
          background: transparent;
          padding: 14px 0;
          color: var(--zap-ink);
          font-size: 15px;
          font-weight: 550;
          line-height: 1.4;
          white-space: nowrap;
          cursor: pointer;
          transition: color .18s ease;
        }

        .zap-nav-wrap .zap-link:hover,
        .zap-nav-wrap .zap-header-trigger[aria-expanded="true"] {
          color: var(--zap-blue);
        }

        .zap-nav-wrap .zap-header-menu {
          position: relative;
        }

        .zap-nav-wrap .zap-header-trigger {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .zap-nav-wrap .zap-header-trigger svg {
          flex-shrink: 0;
          transition: transform .24s ease;
        }

        .zap-nav-wrap .zap-header-trigger[aria-expanded="true"] svg {
          transform: rotate(180deg);
        }

        /* ==============================
           DEMO BUTTON
        ============================== */

        .zap-nav-wrap .zap-nav-actions {
          grid-column: 3;
          grid-row: 2;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
        }

        .zap-nav-wrap .zap-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          border: 0;
          border-radius: 999px;
          padding: 0 33px;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.3;
          white-space: nowrap;
          cursor: pointer;
          transition:
            background .18s ease,
            transform .18s ease;
        }

        .zap-nav-wrap .zap-btn-primary {
          min-width: 182px;
          background: var(--zap-green);
          color: var(--zap-ink);
          box-shadow: none;
        }

        .zap-nav-wrap .zap-btn-primary:hover {
          background: var(--zap-green-hover);
          transform: translateY(-1px);
        }

        /* ==============================
           DROPDOWN MENUS
        ============================== */

        .zap-nav-wrap .zap-header-dropdown {
          position: absolute;
          top: calc(100% + 5px);
          left: -18px;
          width: 330px;
          min-width: 220px;
          padding: 18px 12px;
          background: #ffffff;
          border: 1px solid var(--zap-line);
          border-radius: 14px;
          box-shadow: 0 16px 45px rgba(14, 16, 53, .10);
          z-index: 110;

          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(8px);

          transition:
            opacity .2s ease,
            transform .24s cubic-bezier(.2,.75,.25,1),
            visibility .24s;
        }

        .zap-nav-wrap .zap-header-dropdown[data-open="true"] {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
        }

        .zap-nav-wrap .zap-header-menu:nth-last-child(-n+2)
        .zap-header-dropdown {
          left: auto;
          right: -12px;
        }

        .zap-nav-wrap .zap-dropdown-label {
          padding: 0 12px 10px;
          color: var(--zap-muted);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .12em;
        }

        .zap-nav-wrap .zap-dropdown-entry {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          width: 100%;
          padding: 12px;
          border: 0;
          border-radius: 8px;
          background: transparent;
          color: var(--zap-ink);
          text-align: left;
          cursor: pointer;
          transition: background .16s ease;
        }

        .zap-nav-wrap .zap-dropdown-entry:hover {
          background: #f1f5ff;
        }

        .zap-nav-wrap .zap-menu-icon {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          border-radius: 8px;
          background: color-mix(
            in srgb,
            currentColor 9%,
            white
          );
        }

        .zap-nav-wrap .zap-dropdown-copy {
          display: block;
          min-width: 0;
        }

        .zap-nav-wrap .zap-dropdown-copy strong {
          display: block;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
        }

        .zap-nav-wrap .zap-dropdown-copy small {
          display: block;
          margin-top: 4px;
          color: var(--zap-muted);
          font-size: 12px;
          font-weight: 400;
          line-height: 1.5;
        }

        /* ==============================
           MOBILE MENU BUTTON
        ============================== */

        .zap-nav-wrap .zap-menu-btn {
          display: none;
          place-items: center;
          width: 42px;
          height: 42px;
          padding: 0;
          border: 1px solid var(--zap-line);
          border-radius: 9px;
          background: #ffffff;
          color: var(--zap-ink);
          cursor: pointer;
        }

        .zap-nav-wrap .zap-mobile-menu {
          display: none;
        }

        .zap-nav-wrap button:focus-visible {
          outline: 2px solid var(--zap-blue);
          outline-offset: 4px;
        }

        /* ==============================
           SMALLER DESKTOPS
        ============================== */

        @media (max-width: 1250px) {
          .zap-nav-wrap .zap-nav {
            padding-left: 28px;
            padding-right: 28px;
            column-gap: 24px;
          }

          .zap-nav-wrap .zap-nav-links {
            gap: 18px;
          }

          .zap-nav-wrap .zap-link {
            font-size: 14px;
          }

          .zap-nav-wrap .zap-brand {
            font-size: 25px;
          }

          .zap-nav-wrap .zap-btn-primary {
            min-width: 160px;
            padding: 0 25px;
          }
        }

        /* ==============================
           TABLETS AND MOBILE
        ============================== */

        @media (max-width: 1100px) {
          .zap-nav-wrap .zap-nav {
            min-height: 84px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 24px;
            gap: 16px;
          }

          .zap-nav-wrap .zap-brand {
            font-size: 24px;
          }

          .zap-nav-wrap .zap-brand-mark,
          .zap-nav-wrap .zap-brand-mark svg {
            width: 39px;
            height: 39px;
          }

          .zap-nav-wrap .zap-nav-links,
          .zap-nav-wrap .zap-top-actions {
            display: none;
          }

          .zap-nav-wrap .zap-menu-btn {
            display: grid;
          }

          .zap-nav-wrap .zap-btn-primary {
            min-height: 44px;
            min-width: 145px;
            padding: 0 22px;
            font-size: 14px;
          }

          .zap-nav-wrap .zap-mobile-menu {
            display: block;
            position: absolute;
            top: calc(100% + 6px);
            left: 16px;
            right: 16px;
            padding: 14px;
            background: #ffffff;
            border: 1px solid var(--zap-line);
            border-radius: 14px;
            box-shadow: 0 16px 40px rgba(14,16,53,.12);
            max-height: calc(100dvh - 110px);
            overflow-y: auto;
          }

          .zap-nav-wrap .zap-mobile-menu .zap-link {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 13px 10px;
            text-align: left;
            font-size: 15px;
          }

          .zap-nav-wrap .zap-mobile-menu
          .zap-header-dropdown {
            position: static;
            width: 100%;
            min-width: 0;
            margin-bottom: 8px;
            box-shadow: none;
            transform: none;
          }

          .zap-nav-wrap .zap-mobile-menu
          .zap-header-dropdown[data-open="false"] {
            display: none;
          }

          .zap-nav-wrap .zap-mobile-menu
          .zap-header-dropdown[data-open="true"] {
            display: block;
          }

          .zap-nav-wrap .zap-mobile-actions {
            display: flex;
            flex-direction: column;
            gap: 12px;
            padding: 16px 10px 8px;
            margin-top: 8px;
            border-top: 1px solid var(--zap-line);
          }

          .zap-nav-wrap .zap-mobile-actions
          .zap-btn-primary {
            width: 100%;
          }

          .zap-nav-wrap .zap-mobile-actions
          .zap-login-link {
            justify-content: center;
            padding: 10px;
          }
        }

        @media (max-width: 600px) {
          .zap-nav-wrap {
            border-top-width: 5px;
          }

          .zap-nav-wrap .zap-nav {
            min-height: 72px;
            padding: 10px 18px;
          }

          .zap-nav-wrap .zap-brand {
            font-size: 23px;
            gap: 8px;
          }

          .zap-nav-wrap .zap-brand-mark,
          .zap-nav-wrap .zap-brand-mark svg {
            width: 36px;
            height: 36px;
          }

          .zap-nav-wrap .zap-nav-actions
          .zap-btn-primary {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zap-nav-wrap * {
            transition: none !important;
          }
        }

      `}),(0,b.jsxs)(`nav`,{className:`zap-nav`,"aria-label":`Main navigation`,children:[(0,b.jsxs)(`button`,{type:`button`,className:`zap-brand`,onClick:v,"aria-label":`ZapDocs home`,children:[(0,b.jsx)(`span`,{className:`zap-brand-mark`,children:(0,b.jsxs)(`svg`,{width:`45`,height:`45`,viewBox:`0 0 48 48`,"aria-hidden":`true`,children:[(0,b.jsx)(`path`,{fill:`#315cff`,d:`M24 1 47 14v20L24 47 1 34V14Z`}),(0,b.jsx)(`path`,{fill:`#fff`,d:`M10 14h14l12 6-12 6 10 5v7h-9v-7L10 22Z`})]})}),(0,b.jsx)(`span`,{children:`ZapDocs`})]}),(0,b.jsx)(`div`,{className:`zap-top-actions`,children:(0,b.jsxs)(`button`,{type:`button`,className:`zap-login-link`,onClick:m,children:[(0,b.jsx)(S,{}),`Log in`]})}),(0,b.jsx)(`div`,{className:`zap-nav-links`,children:C()}),(0,b.jsxs)(`div`,{className:`zap-nav-actions`,children:[(0,b.jsx)(`button`,{type:`button`,className:`zap-btn zap-btn-primary`,onClick:g,children:`Book a Demo`}),(0,b.jsx)(`button`,{type:`button`,className:`zap-menu-btn`,onClick:()=>{u(),s(null),a(e=>!e)},"aria-label":i?`Close menu`:`Open menu`,"aria-expanded":i,children:(0,b.jsx)(`svg`,{width:`21`,height:`21`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.7`,strokeLinecap:`round`,"aria-hidden":`true`,children:i?(0,b.jsx)(`path`,{d:`M6 6l12 12M18 6 6 18`}):(0,b.jsx)(`path`,{d:`M4 6h16M4 12h16M4 18h16`})})})]}),i&&(0,b.jsxs)(`div`,{className:`zap-mobile-menu`,children:[C(),(0,b.jsxs)(`div`,{className:`zap-mobile-actions`,children:[(0,b.jsx)(`button`,{type:`button`,className:`zap-btn zap-btn-primary`,onClick:g,children:`Book a Demo`}),(0,b.jsxs)(`button`,{type:`button`,className:`zap-login-link`,onClick:m,children:[(0,b.jsx)(S,{}),`Log in`]})]})]})]})]})}var re=``,w=``,ie=(()=>{try{return new URL(re).protocol===`https:`}catch{return!1}})(),T=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(w),E=[[`Experience the loan workflow`,`Create a sample transaction and explore how ZapDocs organizes loan information into a coordinated document package.`],[`Explore state-specific documents`,`Review California and Florida document preparation workflows, payment schedules and supported outputs.`],[`Discover your workspace`,`Explore saved loan records, reusable lending profiles and document preparation controls.`],[`Find the right plan`,`Discuss your monthly loan volume, business requirements, pricing and access to ZapDocs.`]],ae=[[`▦`,`Private Lenders`,`Explore a centralized approach to managing loan records and preparing private lending documents.`,`/private-lenders`],[`▤`,`Loan Originators`,`Discover how to capture transaction terms and reduce repetitive document preparation.`,`/loan-originators`],[`◎`,`Servicing Professionals`,`Explore reusable servicing information and supported standalone document outputs.`,`/servicing-teams`]],oe=[[`How long is the demo?`,`Your personalized ZapDocs walkthrough is scheduled for approximately 30 minutes.`],[`Do I need to create an account?`,`No. You can book a product demonstration without creating a ZapDocs account.`],[`Is the demonstration free?`,`Yes. The product walkthrough is complimentary and does not require a credit card.`],[`What should I prepare before the meeting?`,`Consider your monthly loan volume, the states where you operate and your current document preparation process. Please do not share confidential borrower information.`],[`Can multiple members of my company attend?`,`You are welcome to invite relevant members of your lending team to the walkthrough.`]];function se({type:e}){return(0,b.jsx)(`svg`,{width:`19`,height:`19`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.7`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:e===`clock`?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`}),(0,b.jsx)(`path`,{d:`M12 7v5l3 2`})]}):e===`video`?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`rect`,{x:`3`,y:`6`,width:`13`,height:`12`,rx:`2`}),(0,b.jsx)(`path`,{d:`m16 10 5-3v10l-5-3`})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`circle`,{cx:`12`,cy:`7`,r:`4`}),(0,b.jsx)(`path`,{d:`M4 21v-3a8 8 0 0 1 16 0v3`})]})})}function ce({onHome:e,onLaunch:t,onPricing:n,onDemo:r}={}){(0,_.useEffect)(()=>{let e=document.title;return document.title=`Book a Demo | ZapDocs`,()=>{document.title=e}},[]);let i=`mailto:${w}?subject=ZapDocs%20demo%20request&body=Hi%20ZapDocs%2C%0A%0AI'd%20like%20to%20request%20a%20demo.%0A%0AName%3A%0ACompany%3A%0AMonthly%20loan%20volume%3A%0APreferred%20times%20and%20time%20zone%3A%0A`;return(0,b.jsxs)(`div`,{className:`zd-demo-page`,children:[(0,b.jsxs)(`main`,{children:[(0,b.jsx)(`section`,{className:`zd-demo-hero`,children:(0,b.jsxs)(`div`,{className:`zd-demo-container zd-demo-hero-grid`,children:[(0,b.jsxs)(`div`,{className:`zd-demo-content`,children:[(0,b.jsxs)(`div`,{className:`zd-demo-eyebrow`,children:[(0,b.jsx)(`span`,{className:`zd-demo-dot`}),` PERSONALIZED PRODUCT WALKTHROUGH`]}),(0,b.jsxs)(`h1`,{children:[`See ZapDocs `,(0,b.jsx)(`span`,{children:`in action.`})]}),(0,b.jsx)(`p`,{className:`zd-demo-description`,children:`Discover how your private lending team can turn loan information into coordinated, editable closing document packages without rebuilding the same paperwork for every deal.`}),(0,b.jsx)(`div`,{className:`zd-demo-feature-list`,children:E.map(([e,t])=>(0,b.jsxs)(`div`,{className:`zd-demo-feature-row`,children:[(0,b.jsx)(`span`,{className:`zd-demo-check`,"aria-hidden":`true`,children:`✓`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{children:e}),(0,b.jsx)(`p`,{children:t})]})]},e))}),(0,b.jsxs)(`div`,{className:`zd-demo-support`,children:[(0,b.jsx)(`span`,{children:`✓ No obligation`}),(0,b.jsx)(`span`,{children:`✓ No credit card`}),(0,b.jsx)(`span`,{children:`✓ Personalized walkthrough`})]})]}),(0,b.jsxs)(`div`,{className:`zd-demo-panel`,children:[(0,b.jsxs)(`div`,{className:`zd-demo-card`,children:[(0,b.jsxs)(`div`,{className:`zd-demo-card-top`,children:[(0,b.jsx)(`div`,{className:`zd-demo-calendar-icon`,children:(0,b.jsxs)(`svg`,{width:`27`,height:`27`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.7`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,b.jsx)(`rect`,{x:`3`,y:`5`,width:`18`,height:`16`,rx:`2`}),(0,b.jsx)(`path`,{d:`M16 3v4M8 3v4M3 10h18m6 5 2 2 4-4`})]})}),(0,b.jsx)(`span`,{className:`zd-demo-card-tag`,children:`Complimentary demo`})]}),(0,b.jsx)(`div`,{className:`zd-demo-kicker`,children:`BOOK YOUR DEMONSTRATION`}),(0,b.jsx)(`h2`,{children:`Let's talk about your lending workflow.`}),(0,b.jsx)(`p`,{className:`zd-demo-card-description`,children:`A one-on-one product walkthrough tailored to your private lending business.`}),(0,b.jsx)(`div`,{className:`zd-demo-meeting-details`,children:[[`clock`,`30 minutes`],[`video`,`Online meeting`],[`user`,`One-on-one walkthrough`]].map(([e,t])=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(se,{type:e}),(0,b.jsx)(`span`,{children:t})]},e))}),(0,b.jsx)(`div`,{className:`zd-demo-divider`}),(0,b.jsx)(`h3`,{className:`zd-demo-booking-title`,children:`Schedule your walkthrough`}),(0,b.jsx)(`p`,{className:`zd-demo-booking-description`,children:`Find a convenient time to explore ZapDocs and discuss your business requirements.`}),ie?(0,b.jsxs)(`a`,{className:`zd-demo-cta`,href:re,target:`_blank`,rel:`noopener noreferrer`,children:[`Choose a Time `,(0,b.jsx)(`span`,{children:`↗`})]}):T?(0,b.jsxs)(`a`,{className:`zd-demo-cta`,href:i,children:[`Request a Demo by Email `,(0,b.jsx)(`span`,{children:`→`})]}):(0,b.jsx)(`div`,{className:`zd-demo-unavailable`,role:`status`,children:`Online scheduling is not available yet. Please check back soon.`}),(0,b.jsx)(`div`,{className:`zd-demo-note`,children:`No payment or account required. Please do not share confidential borrower information when booking.`})]}),(0,b.jsx)(`div`,{className:`zd-demo-panel-footer`,children:`Built for private lending professionals.`})]})]})}),(0,b.jsx)(`section`,{className:`zd-demo-benefits`,children:(0,b.jsx)(`div`,{className:`zd-demo-container zd-demo-benefit-grid`,children:[[`Built for private lending`,`Designed around real lending workflows.`],[`Florida & California`,`Explore state-specific document preparation.`],[`One centralized workspace`,`Manage loan information and document outputs.`]].map(([e,t])=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))})}),(0,b.jsx)(`section`,{className:`zd-demo-section`,children:(0,b.jsxs)(`div`,{className:`zd-demo-container`,children:[(0,b.jsxs)(`div`,{className:`zd-demo-section-heading`,children:[(0,b.jsx)(`div`,{className:`zd-demo-kicker`,children:`WHAT TO EXPECT`}),(0,b.jsx)(`h2`,{children:`A walkthrough built around your business.`}),(0,b.jsx)(`p`,{children:`Explore the platform, understand the document preparation process and discover where ZapDocs fits into your existing workflow.`})]}),(0,b.jsx)(`div`,{className:`zd-demo-agenda-grid`,children:E.map(([e,t],n)=>(0,b.jsxs)(`article`,{className:`zd-demo-agenda-card`,children:[(0,b.jsx)(`div`,{className:`zd-demo-agenda-number`,children:String(n+1).padStart(2,`0`)}),(0,b.jsx)(`h3`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))})]})}),(0,b.jsx)(`section`,{className:`zd-demo-muted-section`,children:(0,b.jsxs)(`div`,{className:`zd-demo-container`,children:[(0,b.jsxs)(`div`,{className:`zd-demo-section-heading`,children:[(0,b.jsx)(`div`,{className:`zd-demo-kicker`,children:`DESIGNED FOR YOUR INDUSTRY`}),(0,b.jsx)(`h2`,{children:`Built for lending professionals.`})]}),(0,b.jsx)(`div`,{className:`zd-demo-industry-grid`,children:ae.map(([e,t,n,r])=>(0,b.jsxs)(`a`,{className:`zd-demo-industry-card`,href:r,children:[(0,b.jsx)(`div`,{className:`zd-demo-industry-icon`,"aria-hidden":`true`,children:e}),(0,b.jsx)(`h3`,{children:t}),(0,b.jsx)(`p`,{children:n}),(0,b.jsx)(`span`,{children:`Learn more →`})]},t))})]})}),(0,b.jsx)(`section`,{className:`zd-demo-section`,children:(0,b.jsxs)(`div`,{className:`zd-demo-container zd-demo-faq-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`zd-demo-kicker`,children:`FREQUENTLY ASKED QUESTIONS`}),(0,b.jsx)(`h2`,{className:`zd-demo-large-heading`,children:`Before your demonstration.`}),(0,b.jsx)(`p`,{className:`zd-demo-body-text`,children:`Everything you need to know before scheduling your personalized ZapDocs product walkthrough.`}),(0,b.jsx)(`a`,{href:`/help-center`,className:`zd-demo-text-link`,children:`Visit the Help Center →`})]}),(0,b.jsx)(`div`,{className:`zd-demo-faq-list`,children:oe.map(([e,t])=>(0,b.jsxs)(`details`,{className:`zd-demo-faq-item`,children:[(0,b.jsx)(`summary`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))})]})}),(0,b.jsx)(`section`,{className:`zd-demo-bottom-section`,children:(0,b.jsx)(`div`,{className:`zd-demo-container`,children:(0,b.jsxs)(`div`,{className:`zd-demo-bottom-cta`,children:[(0,b.jsx)(`div`,{className:`zd-demo-bottom-label`,children:`EXPLORE THE PLATFORM`}),(0,b.jsxs)(`h2`,{children:[`A better way to prepare`,(0,b.jsx)(`br`,{}),`private lending documents.`]}),(0,b.jsx)(`p`,{children:`Learn how ZapDocs brings your transaction information and document preparation workflow together.`}),(0,b.jsxs)(`div`,{className:`zd-demo-bottom-actions`,children:[(0,b.jsx)(`a`,{href:`/platform`,className:`zd-demo-bottom-primary`,children:`Explore the Platform →`}),(0,b.jsx)(`a`,{href:`/pricing`,className:`zd-demo-bottom-secondary`,onClick:typeof n==`function`?e=>{e.preventDefault(),n()}:void 0,children:`View Pricing`})]})]})})})]}),(0,b.jsx)(`footer`,{className:`zd-demo-footer`,children:(0,b.jsxs)(`div`,{className:`zd-demo-container`,children:[(0,b.jsxs)(`div`,{className:`zd-demo-footer-top`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{children:`ZapDocs`}),(0,b.jsx)(`p`,{children:`Document preparation software built for private lending professionals.`})]}),(0,b.jsxs)(`div`,{className:`zd-demo-footer-links`,children:[(0,b.jsx)(`a`,{href:`/platform`,children:`Platform`}),(0,b.jsx)(`a`,{href:`/pricing`,children:`Pricing`}),(0,b.jsx)(`a`,{href:`/help-center`,children:`Help Center`}),(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy`}),(0,b.jsx)(`a`,{href:`/terms`,children:`Terms`})]})]}),(0,b.jsxs)(`div`,{className:`zd-demo-footer-bottom`,children:[(0,b.jsxs)(`span`,{children:[`© `,new Date().getFullYear(),` ZapDocs. All rights reserved.`]}),(0,b.jsx)(`span`,{children:`ZapDocs is not a law firm and does not provide legal advice.`})]})]})}),(0,b.jsx)(`style`,{children:`
        .zd-demo-page{min-height:100vh;background:#fff;color:#101c32;font-family:Inter,system-ui,Arial,sans-serif;line-height:1.6}
        .zd-demo-page *{box-sizing:border-box}
        .zd-demo-container{width:min(1200px,calc(100% - 64px));margin:0 auto}
        .zd-demo-hero{background:linear-gradient(135deg,#fff 0%,#f4f7fc 65%,#eaf0ff 100%);padding:90px 0}
        .zd-demo-hero-grid{display:grid;grid-template-columns:1fr .95fr;gap:85px;align-items:center}
        .zd-demo-eyebrow{display:inline-flex;align-items:center;gap:9px;padding:9px 15px;border:1px solid #dfe5ee;border-radius:30px;background:#fff;color:#526278;font-size:10px;font-weight:750;letter-spacing:1.1px;margin-bottom:23px}
        .zd-demo-dot{width:7px;height:7px;background:#3d63f5;border-radius:50%;flex-shrink:0}
        .zd-demo-content h1{font-size:clamp(46px,5.5vw,76px);line-height:1.05;font-weight:750;letter-spacing:-3.5px;color:#101c32;margin:0 0 27px}
        .zd-demo-content h1 span{display:block;color:#3d63f5}
        .zd-demo-description{color:#637287;font-size:17px;line-height:1.85;margin:0 0 32px;max-width:550px}
        .zd-demo-feature-list{display:grid;gap:22px}.zd-demo-feature-row{display:flex;align-items:flex-start;gap:13px}
        .zd-demo-check{width:25px;height:25px;display:grid;place-items:center;border-radius:50%;background:#e5f8ed;color:#16834c;font-size:13px;font-weight:750;flex-shrink:0;margin-top:2px}
        .zd-demo-feature-row h3{font-size:15px;font-weight:650;color:#101c32;margin:0 0 5px}.zd-demo-feature-row p{font-size:13px;line-height:1.7;color:#64748b;margin:0}
        .zd-demo-support{display:flex;flex-wrap:wrap;gap:16px;padding-top:27px;border-top:1px solid #e1e7ef;margin-top:30px;color:#64748b;font-size:11px;font-weight:600}
        .zd-demo-panel{background:#e4eaf6;border:1px solid #dfe6f2;border-radius:25px;padding:20px;box-shadow:0 25px 65px #172b4520;min-width:0}
        .zd-demo-card{background:#fff;border:1px solid #dce3ed;border-radius:17px;padding:35px}.zd-demo-card-top{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:30px}
        .zd-demo-calendar-icon{width:58px;height:58px;background:#edf2ff;color:#3d63f5;border-radius:13px;display:grid;place-items:center;flex-shrink:0}
        .zd-demo-card-tag{background:#e5f8ed;color:#16834c;font-size:10px;font-weight:650;padding:7px 12px;border-radius:20px}
        .zd-demo-kicker{color:#3d63f5;font-size:11px;font-weight:750;letter-spacing:1.6px;margin-bottom:17px}
        .zd-demo-card h2{color:#101c32;font-size:32px;line-height:1.18;letter-spacing:-1.2px;margin:0 0 15px}
        .zd-demo-card-description{color:#64748b;font-size:14px;line-height:1.8;margin:0 0 24px}
        .zd-demo-meeting-details{background:#f8fafc;border:1px solid #e1e7ef;border-radius:10px;padding:19px;display:grid;gap:17px}.zd-demo-meeting-details>div{display:flex;align-items:center;gap:12px;color:#526278;font-size:13px;font-weight:550}.zd-demo-meeting-details svg{color:#3d63f5;flex-shrink:0}
        .zd-demo-divider{height:1px;background:#e1e7ef;margin:27px 0}.zd-demo-booking-title{color:#101c32;font-size:17px;font-weight:700;margin:0 0 9px}.zd-demo-booking-description{color:#64748b;font-size:13px;line-height:1.8;margin:0 0 22px}
        .zd-demo-cta{display:flex;align-items:center;justify-content:center;gap:12px;width:100%;background:#3d63f5;border:1px solid #3d63f5;border-radius:11px;color:#fff;padding:16px 20px;text-decoration:none;font-size:14px;font-weight:700;transition:background .2s ease}.zd-demo-cta:hover{background:#284ce1;color:#fff}
        .zd-demo-unavailable{background:#f6f8fc;border:1px solid #dfe5ed;border-radius:9px;padding:15px;color:#64748b;font-size:13px;text-align:center}.zd-demo-note{color:#8491a4;font-size:11px;line-height:1.7;text-align:center;margin-top:18px}.zd-demo-panel-footer{color:#64748b;font-size:11px;font-weight:550;text-align:center;padding:17px 0 0}
        .zd-demo-benefits{background:#fff;border-top:1px solid #e5eaf0;border-bottom:1px solid #e5eaf0;padding:35px 0}.zd-demo-benefit-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:25px;text-align:center}.zd-demo-benefit-grid h3{font-size:16px;margin:0 0 7px}.zd-demo-benefit-grid p{color:#64748b;font-size:13px;margin:0}
        .zd-demo-section,.zd-demo-muted-section{padding:90px 0}.zd-demo-muted-section{background:#f6f8fc;border-top:1px solid #e5eaf1;border-bottom:1px solid #e5eaf1}.zd-demo-section-heading{max-width:760px;text-align:center;margin:0 auto 45px}.zd-demo-section-heading h2,.zd-demo-large-heading{color:#101c32;font-size:clamp(30px,4vw,44px);letter-spacing:-1.6px;line-height:1.2;margin:0 0 20px}.zd-demo-section-heading p,.zd-demo-body-text{font-size:16px;line-height:1.85;color:#64748b}
        .zd-demo-agenda-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px}.zd-demo-agenda-card,.zd-demo-industry-card{background:#fff;border:1px solid #dfe5ed;border-radius:15px;padding:28px;transition:all .25s ease}.zd-demo-agenda-card:hover,.zd-demo-industry-card:hover{transform:translateY(-4px);border-color:#a8b8f8;box-shadow:0 15px 35px #172b4510}
        .zd-demo-agenda-number,.zd-demo-industry-icon{width:47px;height:47px;display:grid;place-items:center;background:#edf2ff;color:#3d63f5;border-radius:10px;font-size:18px;font-weight:750;margin-bottom:24px}.zd-demo-agenda-card h3,.zd-demo-industry-card h3{font-size:19px;line-height:1.4;color:#101c32;margin:0 0 13px}.zd-demo-agenda-card p,.zd-demo-industry-card p{color:#64748b;font-size:14px;line-height:1.8;margin:0}
        .zd-demo-industry-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.zd-demo-industry-card{display:block;text-decoration:none}.zd-demo-industry-icon{font-size:24px}.zd-demo-industry-card>span{display:inline-block;color:#3d63f5;font-size:13px;font-weight:650;margin-top:23px}
        .zd-demo-faq-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:75px;align-items:start}.zd-demo-text-link{display:inline-block;color:#3d63f5;font-size:14px;font-weight:650;text-decoration:none;margin-top:15px}.zd-demo-text-link:hover{text-decoration:underline}.zd-demo-faq-list{display:grid;gap:13px}.zd-demo-faq-item{background:#fff;border:1px solid #dfe5ed;border-radius:11px;padding:19px}.zd-demo-faq-item summary{color:#101c32;font-size:14px;font-weight:650;cursor:pointer}.zd-demo-faq-item p{color:#64748b;font-size:13px;line-height:1.8;margin:15px 0 0}
        .zd-demo-bottom-section{padding:0 0 85px}.zd-demo-bottom-cta{background:linear-gradient(135deg,#101c32,#172b52);color:#fff;border-radius:22px;padding:70px 25px;text-align:center}.zd-demo-bottom-label{color:#a6b9ff;font-size:11px;font-weight:750;letter-spacing:1.8px;margin-bottom:22px}.zd-demo-bottom-cta h2{color:#fff;font-size:clamp(32px,4vw,46px);line-height:1.2;letter-spacing:-1.5px;margin:0 0 22px}.zd-demo-bottom-cta p{color:#c1cce0;font-size:16px;line-height:1.8;max-width:650px;margin:0 auto 28px}.zd-demo-bottom-actions{display:flex;justify-content:center;flex-wrap:wrap;gap:13px}.zd-demo-bottom-primary,.zd-demo-bottom-secondary{display:inline-flex;align-items:center;justify-content:center;padding:14px 26px;border-radius:11px;font-size:14px;font-weight:650;text-decoration:none;transition:all .2s ease}.zd-demo-bottom-primary{background:#3d63f5;color:#fff}.zd-demo-bottom-primary:hover{background:#284ce1;color:#fff}.zd-demo-bottom-secondary{color:#fff;border:1px solid #ffffff50}.zd-demo-bottom-secondary:hover{background:#ffffff15;color:#fff}
        .zd-demo-footer{background:#f8fafc;border-top:1px solid #e2e7ef;padding:45px 0 25px}.zd-demo-footer-top{display:flex;justify-content:space-between;flex-wrap:wrap;gap:25px}.zd-demo-footer-top h3{font-size:23px;margin:0 0 10px}.zd-demo-footer-top p{color:#64748b;font-size:13px;line-height:1.7;max-width:350px;margin:0}.zd-demo-footer-links{display:flex;align-items:center;flex-wrap:wrap;gap:23px}.zd-demo-footer-links a{color:#526278;font-size:13px;text-decoration:none}.zd-demo-footer-links a:hover{color:#3d63f5}.zd-demo-footer-bottom{display:flex;justify-content:space-between;flex-wrap:wrap;gap:15px;border-top:1px solid #dfe5ed;padding-top:23px;margin-top:30px;font-size:11px;color:#64748b}
        .zd-demo-page a:focus-visible,.zd-demo-page summary:focus-visible{outline:3px solid #3d63f5;outline-offset:4px}
        @media(max-width:1050px){.zd-demo-hero-grid,.zd-demo-faq-grid{gap:40px}.zd-demo-agenda-grid{grid-template-columns:repeat(2,1fr)}.zd-demo-panel{padding:13px}.zd-demo-card{padding:26px}}
        @media(max-width:800px){.zd-demo-container{width:calc(100% - 36px)}.zd-demo-hero-grid,.zd-demo-faq-grid{grid-template-columns:1fr}.zd-demo-hero{padding:60px 0}.zd-demo-content h1{font-size:52px;letter-spacing:-2px}.zd-demo-panel{max-width:600px;width:100%;margin:0 auto}.zd-demo-benefit-grid,.zd-demo-industry-grid{grid-template-columns:1fr}.zd-demo-benefit-grid{gap:30px}.zd-demo-section,.zd-demo-muted-section{padding:60px 0}.zd-demo-bottom-section{padding-bottom:50px}}
        @media(max-width:480px){.zd-demo-content h1{font-size:44px}.zd-demo-agenda-grid{grid-template-columns:1fr}.zd-demo-card{padding:21px}.zd-demo-card h2{font-size:27px}.zd-demo-agenda-card,.zd-demo-industry-card{padding:23px}.zd-demo-bottom-cta{padding:45px 20px}}
        @media(prefers-reduced-motion:reduce){.zd-demo-agenda-card,.zd-demo-industry-card,.zd-demo-cta,.zd-demo-bottom-primary,.zd-demo-bottom-secondary{transition:none}}
      `})]})}var D=[{tag:`For small lenders`,name:`Pay As You Go`,price:99,unit:`/ package`,desc:`For occasional transactions and independent brokers.`,features:[`One loan document package`,`No subscription commitment`,`California and Florida workflows`,`Downloadable loan documents`]},{tag:`For recurring volume`,name:`Professional`,price:399,unit:`/ month`,desc:`For active private lenders and mortgage brokers.`,featured:!0,badge:`Best Value`,features:[`Up to 10 new loan packages per month`,`Monthly subscription`,`Saved loan records`,`California and Florida workflows`]},{tag:`For larger lenders`,name:`Business`,price:799,unit:`/ month`,desc:`For lending teams with higher monthly volume.`,features:[`Up to 25 new loan packages per month`,`Monthly subscription`,`Saved loan records`,`California and Florida workflows`]}],O=e=>new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`,maximumFractionDigits:0}).format(e);function le({onLaunch:e}){let[t,n]=(0,_.useState)(null),[r,i]=(0,_.useState)(10),[a,o]=(0,_.useState)(500),s=r<=4?D[0]:r<=10?D[1]:D[2],c=r<=4?r*99:s.price,l=r*a,u=l-c,d=Math.max(l,c,1);return(0,b.jsxs)(`div`,{className:`zp-page`,children:[(0,b.jsx)(`style`,{children:`
      .zp-page{--ink:#0b1d2c;--navy:#0a2238;--blue:#3f6df6;--muted:#5f6f7c;--line:#dbe2e8;min-height:100vh;background:#f7f8f6;color:var(--ink);font-family:Inter,system-ui,sans-serif;line-height:1.5}
      .zp-page *{box-sizing:border-box}.zp-page button,.zp-page input{font:inherit}.zp-page button{cursor:pointer}.zp-page a{color:#2d55cf}.zp-wrap{max-width:1220px;margin:auto;padding:0 28px}.zp-btn{border:1px solid var(--line);background:white;color:var(--ink);border-radius:999px;padding:12px 20px;font-weight:750!important;text-decoration:none;display:inline-block;text-align:center}.zp-primary{background:var(--blue);color:white!important;border-color:var(--blue)}.zp-btn:hover{filter:brightness(.96)}.zp-page :focus-visible{outline:3px solid #7ca4ff;outline-offset:4px}.zp-hero{text-align:center;padding:78px 0 42px;background:radial-gradient(ellipse at 50% 0%,#dce9ff 0,transparent 65%)}.zp-kicker{font-size:12px;text-transform:uppercase;letter-spacing:.11em;font-weight:800;color:#3155c2}.zp-hero h1{font-size:clamp(42px,6vw,76px);line-height:1;letter-spacing:-.06em;margin:16px auto;max-width:900px}.zp-hero p{max-width:680px;margin:20px auto;color:var(--muted);font-size:18px}.zp-beta{display:flex;justify-content:space-between;align-items:center;gap:24px;padding:24px 30px;border:1px solid #cbdcd7;background:#eaf5ef;border-radius:20px;margin-bottom:30px}.zp-beta h2{margin:0 0 4px;font-size:24px}.zp-beta p{margin:0;color:#415d55}.zp-plans{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.zp-plan{background:white;border:1px solid var(--line);border-radius:22px;padding:30px;display:flex;flex-direction:column;position:relative}.zp-plan.featured{border:1px solid var(--line);box-shadow:0 12px 32px #0a22380b}.zp-plan h2{font-size:22px;margin:0}.zp-price{font-size:54px;letter-spacing:-.055em;font-weight:800;line-height:1.2;margin:18px 0 4px}.zp-price small{font-size:14px;color:var(--muted);letter-spacing:0;font-weight:500}.zp-plan p{color:var(--muted);min-height:48px}.zp-plan ul{list-style:none;padding:20px 0;margin:0;border-top:1px solid var(--line);flex:1}.zp-plan li{margin:12px 0;font-size:14px}.zp-plan li::before{content:'✓';color:#23865a;font-weight:800;margin-right:9px}.zp-tag{font-size:11px;font-weight:800;color:#3155c2;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px}.zp-enterprise{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:24px 0;color:var(--muted)}.zp-enterprise strong{color:var(--ink)}.zp-section{padding:65px 0}.zp-section h2{font-size:clamp(30px,4vw,50px);line-height:1.1;letter-spacing:-.045em;margin:10px 0 16px}.zp-calc{background:var(--navy);color:white;border-radius:26px;padding:36px;display:grid;grid-template-columns:1fr 1fr;gap:40px}.zp-calc .zp-kicker{color:#a9c1ff}.zp-calc p{color:#c4d2dd}.zp-calc label{display:block;font-weight:700;margin:20px 0 8px}.zp-calc input[type=range]{width:100%;accent-color:#91b1ff}.zp-calc input[type=number]{width:150px;padding:10px 12px;border-radius:8px;border:1px solid #c9d4dd;background:white;color:var(--ink)}.zp-range-labels,.zp-bar-label{display:flex;justify-content:space-between;gap:10px}.zp-range-labels{font-size:12px;color:#b8c7d2}.zp-results{background:#fff;border-radius:18px;padding:25px;color:var(--ink);align-self:center;min-width:0}.zp-track{height:19px;background:#edf1f6;border-radius:5px;overflow:hidden;margin:8px 0 20px}.zp-fill{height:100%;border-radius:5px;transition:width .2s;background:var(--blue)}.zp-fill.other{background:#9daebc}.zp-saving{font-size:38px;font-weight:800;letter-spacing:-.04em;color:#176b50;margin:8px 0}.zp-saving.negative{color:var(--ink)}.zp-results small{color:var(--muted)}.zp-footnote{font-size:12px;color:var(--muted);line-height:1.7;margin:16px 0}.zp-table-wrap{overflow-x:auto;border:1px solid var(--line);border-radius:18px;background:white}.zp-table{border-collapse:collapse;width:100%;min-width:530px;text-align:left}.zp-table th,.zp-table td{padding:18px;border-bottom:1px solid var(--line)}.zp-table tr:last-child td{border-bottom:0}.zp-table thead{background:#eef2f6}.zp-faq{max-width:850px;margin:auto}.zp-faq details{border-bottom:1px solid var(--line);padding:19px 0}.zp-faq summary{cursor:pointer;font-weight:750}.zp-faq p{color:var(--muted)}.zp-footer{border-top:1px solid var(--line);padding:28px 0;color:var(--muted);font-size:13px}.zp-footer .zp-wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}.zp-footer a{margin-left:12px}
      @media(max-width:850px){.zp-plans,.zp-calc{grid-template-columns:1fr}.zp-plan p{min-height:0}.zp-hero{padding-top:48px}.zp-beta,.zp-enterprise{align-items:flex-start;flex-direction:column}.zp-calc{padding:24px;gap:22px}}@media(max-width:480px){.zp-wrap{padding:0 16px}.zp-plan,.zp-beta{padding:22px}.zp-results{padding:18px}.zp-section{padding:44px 0}}

      /* Interactive pricing cards: no layout shift, with keyboard support. */
      .zp-plan{transition:transform .24s ease,box-shadow .24s ease,border-color .24s ease;isolation:isolate}
      .zp-plan .zp-btn{transition:background-color .24s ease,color .24s ease,border-color .24s ease,box-shadow .24s ease}
      .zp-plan:focus-within{border-color:var(--line);box-shadow:0 18px 42px rgba(40,76,180,.15)}
      @media(hover:hover) and (pointer:fine){
        .zp-plan:hover{transform:translateY(-8px);border-color:var(--line);box-shadow:0 22px 48px rgba(40,76,180,.17);z-index:1}
        .zp-plan:hover .zp-btn{background:var(--blue);color:white;border-color:var(--blue);box-shadow:0 6px 16px rgba(63,109,246,.18)}
      }
      @media(prefers-reduced-motion:reduce){.zp-plan,.zp-plan .zp-btn{transition:none}.zp-plan:hover{transform:none}}

      /* Refined comparison table */
      .zp-table-wrap{border-radius:22px;box-shadow:0 12px 36px #0a22380b}
      .zp-table{min-width:620px;font-variant-numeric:tabular-nums}
      .zp-table thead{background:var(--navy);color:white}
      .zp-table th{font-size:13px;letter-spacing:.025em;font-weight:700;padding:20px 24px}
      .zp-table td{padding:20px 24px;transition:background-color .2s ease}
      .zp-table tbody tr:nth-child(even){background:#f8fafc}
      .zp-table tbody td:nth-child(3){background:#edf3ff;color:#234fce}
      .zp-table thead th:nth-child(3){background:#315bd8}
      .zp-table tbody tr:hover td{background:#eef4ff}
      .zp-table tbody tr:hover td:nth-child(3){background:#dfeaff}
      .zp-volume-chip{display:inline-grid;place-items:center;min-width:38px;height:34px;padding:0 10px;border-radius:9px;background:#edf1f6;font-weight:750}
      .zp-difference{display:inline-block;background:#e5f4ec;color:#176b50;border-radius:8px;padding:7px 12px;font-weight:750;white-space:nowrap}
      .zp-difference.negative{background:#fff0ed;color:#a33b29}
      /* Accessible animated FAQ cards */
      .zp-faq{max-width:900px}
      .zp-faq>.zp-kicker,.zp-faq>h2{text-align:center}
      .zp-faq>h2{margin-bottom:32px}
      .zp-faq-card{background:white;border:1px solid var(--line);border-radius:16px;margin:12px 0;box-shadow:0 4px 14px #0a223805;transition:border-color .25s,box-shadow .25s}
      .zp-faq-card:hover,.zp-faq-card.is-open{border-color:#a6baff;box-shadow:0 8px 24px #3452eb0d}
      .zp-faq-toggle{display:flex;align-items:center;justify-content:space-between;gap:18px;width:100%;padding:20px 24px;text-align:left;background:transparent;border:0;color:var(--ink);font-weight:750!important;border-radius:16px}
      .zp-faq-icon{display:grid;place-items:center;width:34px;height:34px;flex-shrink:0;border-radius:50%;background:#edf3ff;color:#315bd8;transition:transform .3s ease,background .3s ease,color .3s ease}
      .zp-faq-card.is-open .zp-faq-icon{transform:rotate(180deg);background:var(--blue);color:white}
      .zp-faq-answer{display:grid;grid-template-rows:0fr;opacity:0;transition:grid-template-rows .32s ease,opacity .25s ease;visibility:hidden;transition-property:grid-template-rows,opacity,visibility}
      .zp-faq-card.is-open .zp-faq-answer{grid-template-rows:1fr;opacity:1;visibility:visible}
      .zp-faq-answer>div{overflow:hidden;min-height:0}
      .zp-faq-answer p{margin:0 24px 24px;padding-top:2px;line-height:1.7}
      @media(max-width:480px){.zp-faq-toggle{padding:16px}.zp-faq-answer p{margin:0 16px 18px}.zp-table th,.zp-table td{padding:16px}}
      @media(prefers-reduced-motion:reduce){.zp-faq-card,.zp-faq-answer,.zp-faq-icon,.zp-table td{transition:none}}

      /* Floating recommendation badge */
      .zp-plans{padding-top:18px}
      .zp-plan{overflow:visible}
      .zp-value-badge{position:absolute;top:0;left:50%;transform:translate(-50%,-50%);display:inline-flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#16834b,#08713b);color:#fff;border:2px solid #fff;border-radius:999px;padding:7px 20px;font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;white-space:nowrap;line-height:1.4;box-shadow:0 5px 15px #16834b35;z-index:2}
      @media(max-width:850px){.zp-plans{gap:30px}}
    `}),(0,b.jsx)(`section`,{className:`zp-hero`,children:(0,b.jsxs)(`div`,{className:`zp-wrap`,children:[(0,b.jsx)(`div`,{className:`zp-kicker`,children:`Transparent pricing · Early access`}),(0,b.jsxs)(`h1`,{children:[`Built for lenders.`,(0,b.jsx)(`br`,{}),`Priced for your volume.`]}),(0,b.jsx)(`p`,{children:`Choose the plan that fits your lending operation. Flexible document generation without an annual commitment.`}),(0,b.jsx)(`p`,{style:{fontSize:13},children:`Proposed commercial pricing. Paid plans are not available during beta.`})]})}),(0,b.jsxs)(`main`,{className:`zp-wrap`,children:[(0,b.jsxs)(`section`,{className:`zp-beta`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`zp-kicker`,children:`Early access program`}),(0,b.jsx)(`h2`,{children:`Try ZapDocs during beta — free.`}),(0,b.jsx)(`p`,{children:`Explore the document workflow with sample or redacted loan information. No payment required.`})]}),(0,b.jsx)(`button`,{className:`zp-btn zp-primary`,onClick:e,children:`Explore beta →`})]}),(0,b.jsx)(`section`,{className:`zp-plans`,"aria-label":`Proposed pricing plans`,children:D.map(t=>(0,b.jsxs)(`article`,{className:`zp-plan${t.featured?` featured`:``}`,children:[t.badge&&(0,b.jsx)(`div`,{className:`zp-value-badge`,children:t.badge}),(0,b.jsx)(`div`,{className:`zp-tag`,children:t.tag}),(0,b.jsx)(`h2`,{children:t.name}),(0,b.jsxs)(`div`,{className:`zp-price`,children:[`$`,t.price,(0,b.jsxs)(`small`,{children:[` `,t.unit]})]}),(0,b.jsx)(`p`,{children:t.desc}),(0,b.jsx)(`ul`,{children:t.features.map(e=>(0,b.jsx)(`li`,{children:e},e))}),(0,b.jsx)(`button`,{className:`zp-btn${t.featured?` zp-primary`:``}`,onClick:e,children:`Select`})]},t.name))}),(0,b.jsxs)(`div`,{className:`zp-enterprise`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Enterprise · 26+ packages per month`}),(0,b.jsx)(`br`,{}),`Custom pricing for higher-volume operations.`]}),(0,b.jsx)(`span`,{children:`Enterprise plans coming after beta.`})]}),(0,b.jsxs)(`section`,{className:`zp-section`,"aria-labelledby":`zp-compare`,children:[(0,b.jsxs)(`div`,{className:`zp-calc`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`zp-kicker`,children:`Cost comparison`}),(0,b.jsx)(`h2`,{id:`zp-compare`,children:`See the difference in document costs.`}),(0,b.jsx)(`p`,{children:`Compare proposed ZapDocs pricing with an illustrative Lightning Docs per-package rate, or enter your own quoted rate.`}),(0,b.jsxs)(`label`,{htmlFor:`zp-volume`,children:[`Monthly loan packages: `,r]}),(0,b.jsx)(`input`,{id:`zp-volume`,type:`range`,min:`1`,max:`25`,step:`1`,value:r,onChange:e=>i(Number(e.target.value))}),(0,b.jsxs)(`div`,{className:`zp-range-labels`,children:[(0,b.jsx)(`span`,{children:`1`}),(0,b.jsx)(`span`,{children:`10`}),(0,b.jsx)(`span`,{children:`25`})]}),(0,b.jsx)(`label`,{htmlFor:`zp-rate`,children:`Lightning Docs rate per package ($)`}),(0,b.jsx)(`input`,{id:`zp-rate`,type:`number`,min:`0`,max:`100000`,value:a,onChange:e=>o(Math.max(0,Math.min(1e5,Number(e.target.value)||0)))})]}),(0,b.jsxs)(`div`,{className:`zp-results`,"aria-live":`polite`,children:[(0,b.jsxs)(`div`,{className:`zp-bar-label`,children:[(0,b.jsx)(`strong`,{children:`Lightning Docs*`}),(0,b.jsx)(`strong`,{children:O(l)})]}),(0,b.jsx)(`div`,{className:`zp-track`,children:(0,b.jsx)(`div`,{className:`zp-fill other`,style:{width:`${l/d*100}%`}})}),(0,b.jsxs)(`div`,{className:`zp-bar-label`,children:[(0,b.jsxs)(`strong`,{children:[`ZapDocs · `,s.name]}),(0,b.jsx)(`strong`,{children:O(c)})]}),(0,b.jsx)(`div`,{className:`zp-track`,children:(0,b.jsx)(`div`,{className:`zp-fill`,style:{width:`${c/d*100}%`}})}),(0,b.jsx)(`small`,{children:u>=0?`Illustrative monthly savings`:`Additional monthly cost with ZapDocs`}),(0,b.jsx)(`div`,{className:`zp-saving${u<0?` negative`:``}`,children:O(Math.abs(u))}),(0,b.jsxs)(`small`,{children:[u>=0?`Annualized savings`:`Annualized additional cost`,`: `,O(Math.abs(u)*12),` at constant volume.`]})]})]}),(0,b.jsxs)(`p`,{className:`zp-footnote`,children:[`* The default $500 rate is based on a `,(0,b.jsx)(`a`,{href:`https://www.biggerpockets.com/forums/49/topics/1208496-private-lenders-how-much-do-you-pay-for-loan-documents`,target:`_blank`,rel:`noreferrer`,children:`public customer report`}),`, not a verified current quote. Lightning Docs `,(0,b.jsx)(`a`,{href:`https://lightningdocs.ai/faq/`,target:`_blank`,rel:`noreferrer`,children:`offers volume-based discounts`}),`. Actual pricing, services and document scope may differ. Calculation uses proposed standalone ZapDocs tiers (1–4 pay-as-you-go, 5–10 Professional, 11–25 Business), excludes taxes and additional services, and does not guarantee savings.`]})]}),(0,b.jsxs)(`section`,{"aria-label":`Illustrative monthly costs`,children:[(0,b.jsx)(`div`,{className:`zp-kicker`,children:`Side by side`}),(0,b.jsx)(`h2`,{children:`Compare monthly costs`}),(0,b.jsx)(`div`,{className:`zp-table-wrap`,children:(0,b.jsxs)(`table`,{className:`zp-table`,children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:`Monthly packages`}),(0,b.jsx)(`th`,{children:`Lightning Docs*`}),(0,b.jsx)(`th`,{children:`ZapDocs`}),(0,b.jsx)(`th`,{children:`Monthly difference`})]})}),(0,b.jsx)(`tbody`,{children:[1,5,10,15,25].map(e=>{let t=e<=4?e*99:e<=10?399:799;return(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsx)(`span`,{className:`zp-volume-chip`,children:e})}),(0,b.jsx)(`td`,{children:O(e*a)}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`strong`,{children:O(t)})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`span`,{className:`zp-difference${e*a-t<0?` negative`:``}`,children:O(e*a-t)})})]},e)})})]})}),(0,b.jsx)(`p`,{className:`zp-footnote`,children:`* Uses the editable benchmark above. Positive differences indicate lower proposed ZapDocs cost. ZapDocs currently focuses on California and Florida; Lightning Docs advertises nationwide coverage. This is a price illustration, not a claim of equivalent features or legal services.`})]}),(0,b.jsxs)(`section`,{className:`zp-section zp-faq`,children:[(0,b.jsx)(`div`,{className:`zp-kicker`,children:`Frequently asked questions`}),(0,b.jsx)(`h2`,{children:`Pricing questions, answered.`}),[[`Can I purchase a single package?`,`The proposed pay-as-you-go plan is $99 per new loan package, with no monthly subscription.`],[`Is billing available now?`,`No. ZapDocs is in beta. Prices shown are proposed commercial pricing and may change before paid plans launch.`],[`What if I need more than 25 packages?`,`Enterprise pricing is planned for higher-volume lenders. Final terms and usage policies will be announced before billing launches.`],[`Which states are supported?`,`The current document workflows focus on California and Florida.`],[`Do generated documents replace legal review?`,`No. ZapDocs is a document automation tool, not a law firm. Generated documents should be independently reviewed by qualified counsel before use. During beta, use fictional or redacted data.`]].map(([e,r],i)=>(0,b.jsxs)(`div`,{className:`zp-faq-card${t===i?` is-open`:``}`,children:[(0,b.jsxs)(`button`,{type:`button`,className:`zp-faq-toggle`,"aria-expanded":t===i,"aria-controls":`zp-faq-answer-${i}`,id:`zp-faq-question-${i}`,onClick:()=>n(t===i?null:i),children:[(0,b.jsx)(`span`,{children:e}),(0,b.jsx)(`span`,{className:`zp-faq-icon`,"aria-hidden":`true`,children:(0,b.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,b.jsx)(`path`,{d:`m6 9 6 6 6-6`})})})]}),(0,b.jsx)(`div`,{id:`zp-faq-answer-${i}`,role:`region`,"aria-labelledby":`zp-faq-question-${i}`,"aria-hidden":t!==i,className:`zp-faq-answer`,children:(0,b.jsx)(`div`,{children:(0,b.jsx)(`p`,{children:r})})})]},e))]})]}),(0,b.jsx)(`footer`,{className:`zp-footer`,children:(0,b.jsxs)(`div`,{className:`zp-wrap`,children:[(0,b.jsx)(`span`,{children:`© 2026 ZapDocs · Loan document automation`}),(0,b.jsxs)(`nav`,{"aria-label":`Legal`,children:[(0,b.jsx)(`a`,{href:`/terms`,children:`Terms`}),(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy`}),(0,b.jsx)(`a`,{href:`/accessibility`,children:`Accessibility`})]})]})})]})}function ue({supabase:e,onHome:t,onLaunch:n,onPricing:r,onDemo:i}={}){let[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(``);(0,_.useEffect)(()=>{document.title=`Start Your Free Trial | ZapDocs`,window.scrollTo(0,0)},[]);async function d(t){if(t.preventDefault(),a)return;let n=new FormData(t.currentTarget);if(!n.get(`accept`))return u(`Please accept the Terms of Use and acknowledge the Privacy Policy.`);if(!e)return u(`Account registration is currently unavailable. Please contact support.`);o(!0),u(``),c(``);try{let{data:t,error:r}=await e.auth.signUp({email:String(n.get(`email`)).trim(),password:String(n.get(`password`)),options:{emailRedirectTo:window.location.origin+`/app`,data:{first_name:String(n.get(`first_name`)).trim(),last_name:String(n.get(`last_name`)).trim(),company:String(n.get(`company`)).trim(),role:n.get(`role`),lending_state:n.get(`state`),terms_acknowledged_at:new Date().toISOString(),terms_source:`/terms`}}});if(r)throw r;t?.session?window.location.assign(`/app`):c(`Check your inbox for an account confirmation email, if required. Then sign in to ZapDocs.`)}catch(e){u(e.message||`Unable to register. Please try again.`)}finally{o(!1)}}return(0,b.jsxs)(`div`,{className:`ztrial`,children:[(0,b.jsx)(`style`,{children:`
    
    .ztrial{font-family:Inter,system-ui,sans-serif;color:#101c32;background:#fff;min-height:100vh;line-height:1.6}
    .ztrial *{box-sizing:border-box}
    .ztrial main a,.ztrial footer a{color:#315cff;text-underline-offset:3px}
    .ztrial main :is(a,button,input,select,summary):focus-visible{outline:3px solid #315cff;outline-offset:3px}
    .ztrial .wrap{width:min(1200px,calc(100% - 64px));margin:auto}
    .ztrial .hero{background:linear-gradient(135deg,#fff 0%,#f4f7fc 60%,#eaf0ff 100%);padding:76px 0 82px}
    .ztrial .split{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:72px;align-items:center}
    .ztrial .eyebrow{font-size:11px;font-weight:750;color:#315cff;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:18px}
    .ztrial .hero .eyebrow{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #dfe5ee;border-radius:30px;padding:8px 14px}
    .ztrial .hero .eyebrow:before{content:'';width:7px;height:7px;border-radius:50%;background:#315cff}
    .ztrial h1{font-size:clamp(42px,5vw,68px);line-height:1.08;letter-spacing:-.055em;margin:0 0 24px;font-weight:750}
    .ztrial h1 span{display:block;color:#315cff}
    .ztrial h2{font-size:clamp(26px,3vw,40px);line-height:1.18;letter-spacing:-.035em;margin:0 0 18px}
    .ztrial h3{font-size:19px;line-height:1.4;margin:12px 0 8px}
    .ztrial p{color:#64748b;margin:0 0 18px;line-height:1.75}
    .ztrial .lead{font-size:18px;max-width:530px}
    .ztrial .benefits{list-style:none;padding:0;margin:32px 0}
    .ztrial .benefits li{display:flex;gap:12px;margin:17px 0;align-items:center;font-size:15px;font-weight:550;color:#334155}
    .ztrial .tick{width:26px;height:26px;display:grid;place-items:center;border-radius:50%;background:#e5f8ed;color:#16834c;font-weight:750;flex-shrink:0}
    .ztrial .hero-copy>.small{border-top:1px solid #dfe5ed;padding-top:20px;max-width:520px}
    .ztrial .formpanel{background:#e4eaf6;border:1px solid #dfe6f2;border-radius:25px;padding:18px;box-shadow:0 25px 65px #172b451a;min-width:0}
    .ztrial .formcard{background:white;border:1px solid #dce3ed;border-radius:17px;padding:32px}
    .ztrial .formcard h2{font-size:29px;margin:0 0 8px}
    .ztrial .formcard>p{font-size:14px;margin-bottom:25px}
    .ztrial .form-label{color:#315cff;font-size:10px;font-weight:750;letter-spacing:1.4px;margin-bottom:12px}
    .ztrial .fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:17px}
    .ztrial .field{display:flex;flex-direction:column;gap:7px;min-width:0;font-size:13px;font-weight:650;color:#334155}
    .ztrial .wide{grid-column:1/-1}
    .ztrial input:not([type=checkbox]),.ztrial select{width:100%;border:1px solid #cbd5e1;border-radius:9px;padding:11px 12px;font:inherit;font-size:14px;font-weight:400;background:white;color:#101c32;min-height:46px}
    .ztrial input::placeholder{color:#94a3b8}
    .ztrial .consent{display:flex;gap:10px;align-items:flex-start;font-size:12px;font-weight:400;color:#526278;line-height:1.7}
    .ztrial .consent input{margin-top:4px;flex-shrink:0;accent-color:#315cff;width:16px;height:16px}
    .ztrial .small{font-size:12px;font-weight:400;color:#64748b}
    .ztrial .btn{display:inline-flex;align-items:center;justify-content:center;border:1px solid #3f6df6;border-radius:10px;background:#3f6df6;color:#fff;padding:14px 22px;font:inherit;font-size:14px;font-weight:700;text-decoration:none;cursor:pointer;transition:background .2s ease}
    .ztrial .btn:hover:not(:disabled){background:#2d55cf}
    .ztrial .btn:disabled{opacity:.6;cursor:wait}
    .ztrial .signin{text-align:center;margin:0}
    .ztrial .section{padding:84px 0}
    .ztrial .three{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;margin-top:32px}
    .ztrial .tile{border:1px solid #dfe5ed;border-radius:16px;padding:28px;background:#fff}
    .ztrial .tile p{font-size:14px;margin-bottom:0}
    .ztrial .step{display:grid;place-items:center;width:46px;height:46px;border-radius:12px;background:#edf2ff;color:#315cff;font-weight:750;margin-bottom:22px}
    .ztrial .dark{background:#101c32;color:white}
    .ztrial .dark p{color:#d5dbea}
    .ztrial .faq{background:#f6f8fc;border-top:1px solid #e5eaf1}
    .ztrial .faq details{padding:19px 22px;border:1px solid #dfe5ed;border-radius:11px;background:white;margin:12px 0}
    .ztrial summary{cursor:pointer;font-weight:650;font-size:15px}
    .ztrial details p{margin:12px 0 0;font-size:14px}
    .ztrial footer{border-top:1px solid #dfe4ec;background:#f8fafc}
    .ztrial .foot{display:flex;gap:20px;flex-wrap:wrap;align-items:center;padding-block:25px;font-size:12px;color:#64748b}
    .ztrial .foot a{color:#526278;text-decoration:none}
    .ztrial .alert,.ztrial .success{border-radius:8px;padding:12px;margin:0;font-size:13px}
    .ztrial .alert{color:#a51c15;background:#fff1f0;border:1px solid #f6d4d0}
    .ztrial .success{color:#176b50;background:#eaf8f0;border:1px solid #cdebdc}
    @media(max-width:1000px){.ztrial .split{gap:35px}.ztrial .formcard{padding:25px}}
    @media(max-width:850px){.ztrial .split,.ztrial .three{grid-template-columns:1fr;gap:30px}.ztrial .hero,.ztrial .section{padding:60px 0}.ztrial .wrap{width:calc(100% - 36px)}.ztrial .formpanel{max-width:620px;width:100%;margin:auto}}
    @media(max-width:480px){.ztrial .fields{grid-template-columns:1fr}.ztrial .formpanel{padding:10px}.ztrial .formcard{padding:20px}.ztrial h1{font-size:40px}}
    @media(prefers-reduced-motion:reduce){.ztrial .btn{transition:none}}
  `}),(0,b.jsx)(C,{onHome:t,onLaunch:n,onPricing:r,onDemo:i}),(0,b.jsxs)(`main`,{children:[(0,b.jsx)(`section`,{className:`hero`,children:(0,b.jsxs)(`div`,{className:`wrap split`,children:[(0,b.jsxs)(`div`,{className:`hero-copy`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`EXPERIENCE ZAPDOCS`}),(0,b.jsxs)(`h1`,{children:[`Start your `,(0,b.jsx)(`span`,{children:`free trial.`})]}),(0,b.jsx)(`p`,{className:`lead`,children:`Discover a simpler way to prepare private lending documents. Build your first loan record and explore your document workflow from start to finish.`}),(0,b.jsx)(`ul`,{className:`benefits`,children:[`California and Florida loan document workflows`,`Custom interest-only payments, prepaid interest and balloon amounts`,`Servicing agreements and lender disclosures`,`Document previews and reusable loan information`].map(e=>(0,b.jsxs)(`li`,{children:[(0,b.jsx)(`span`,{className:`tick`,"aria-hidden":`true`,children:`✓`}),e]},e))}),(0,b.jsx)(`p`,{className:`small`,children:`For private lenders, mortgage brokers and loan professionals. Use fictional loan data while evaluating the platform.`})]}),(0,b.jsx)(`div`,{className:`formpanel`,children:(0,b.jsxs)(`div`,{className:`formcard`,children:[(0,b.jsx)(`div`,{className:`form-label`,children:`CREATE YOUR WORKSPACE`}),(0,b.jsx)(`h2`,{children:`Create your trial account`}),(0,b.jsx)(`p`,{children:`Enter your business details to get started.`}),(0,b.jsx)(`form`,{onSubmit:d,children:(0,b.jsxs)(`div`,{className:`fields`,children:[(0,b.jsxs)(`label`,{className:`field`,children:[`First name`,(0,b.jsx)(`input`,{name:`first_name`,placeholder:`First name`,autoComplete:`given-name`,required:!0,maxLength:100})]}),(0,b.jsxs)(`label`,{className:`field`,children:[`Last name`,(0,b.jsx)(`input`,{name:`last_name`,placeholder:`Last name`,autoComplete:`family-name`,required:!0,maxLength:100})]}),(0,b.jsxs)(`label`,{className:`field wide`,children:[`Business email`,(0,b.jsx)(`input`,{type:`email`,name:`email`,placeholder:`you@company.com`,autoComplete:`email`,required:!0})]}),(0,b.jsxs)(`label`,{className:`field wide`,children:[`Company name`,(0,b.jsx)(`input`,{name:`company`,placeholder:`Your company`,autoComplete:`organization`,required:!0,maxLength:200})]}),(0,b.jsxs)(`label`,{className:`field`,children:[`Your role`,(0,b.jsxs)(`select`,{name:`role`,required:!0,defaultValue:``,children:[(0,b.jsx)(`option`,{value:``,disabled:!0,children:`Select role`}),(0,b.jsx)(`option`,{children:`Private lender`}),(0,b.jsx)(`option`,{children:`Mortgage broker`}),(0,b.jsx)(`option`,{children:`Loan originator`}),(0,b.jsx)(`option`,{children:`Servicing professional`}),(0,b.jsx)(`option`,{children:`Other`})]})]}),(0,b.jsxs)(`label`,{className:`field`,children:[`Lending market`,(0,b.jsxs)(`select`,{name:`state`,required:!0,defaultValue:``,children:[(0,b.jsx)(`option`,{value:``,disabled:!0,children:`Select market`}),(0,b.jsx)(`option`,{children:`Florida`}),(0,b.jsx)(`option`,{children:`California`}),(0,b.jsx)(`option`,{children:`Both`}),(0,b.jsx)(`option`,{children:`Other`})]})]}),(0,b.jsxs)(`label`,{className:`field wide`,children:[`Password`,(0,b.jsx)(`input`,{name:`password`,placeholder:`Create a password`,type:`password`,autoComplete:`new-password`,minLength:8,required:!0}),(0,b.jsx)(`span`,{className:`small`,children:`At least 8 characters.`})]}),(0,b.jsxs)(`label`,{className:`consent wide`,children:[(0,b.jsx)(`input`,{type:`checkbox`,name:`accept`,required:!0}),(0,b.jsxs)(`span`,{children:[`I agree to the `,(0,b.jsx)(`a`,{href:`/terms`,target:`_blank`,rel:`noopener noreferrer`,children:`Terms of Use`}),` and acknowledge the `,(0,b.jsx)(`a`,{href:`/privacy`,target:`_blank`,rel:`noopener noreferrer`,children:`Privacy Policy`}),`.`]})]}),l&&(0,b.jsx)(`p`,{className:`alert wide`,role:`alert`,children:l}),s&&(0,b.jsx)(`p`,{className:`success wide`,role:`status`,children:s}),(0,b.jsx)(`button`,{className:`btn wide`,type:`submit`,disabled:a,children:a?`Creating account…`:`Start Free Trial`}),(0,b.jsxs)(`p`,{className:`small wide signin`,children:[`Already have an account? `,(0,b.jsx)(`a`,{href:`/app`,children:`Sign in`}),`.`]})]})})]})})]})}),(0,b.jsx)(`section`,{className:`section`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`How it works`}),(0,b.jsx)(`h2`,{children:`From loan information to documents in three steps.`}),(0,b.jsx)(`div`,{className:`three`,children:[[`Create your account`,`Register and confirm your email if required.`],[`Build a sample loan`,`Choose your state and enter fictional borrower, lender, property and payment details.`],[`Preview and generate`,`Review the loan terms and explore the available document outputs.`]].map(([e,t],n)=>(0,b.jsxs)(`article`,{className:`tile`,children:[(0,b.jsx)(`div`,{className:`step`,children:n+1}),(0,b.jsx)(`h3`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))})]})}),(0,b.jsx)(`section`,{className:`section dark`,children:(0,b.jsxs)(`div`,{className:`wrap split`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`eyebrow`,style:{color:`#a9bfff`},children:`What to expect`}),(0,b.jsx)(`h2`,{children:`Built around your lending workflow.`}),(0,b.jsx)(`p`,{children:`Explore a centralized workspace for entering loan terms, preparing documents and reviewing outputs. ZapDocs supports document preparation, not legal advice or loan approval.`})]}),(0,b.jsx)(`div`,{children:[[`Loan customization`,`Work with payment tiers and manually controlled balloon amounts.`],[`Reusable information`,`Explore saved loan records and reusable profiles.`],[`Document preparation`,`Generate available closing packages and standalone documents for supported workflows.`]].map(([e,t])=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))})]})}),(0,b.jsx)(`section`,{className:`section faq`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsx)(`h2`,{children:`Frequently asked questions`}),[[`Do I need a credit card?`,`This registration form does not collect payment card information.`],[`Which states are supported?`,`ZapDocs currently focuses on California and Florida.`],[`Can I use actual borrower information?`,`For trial evaluation, use fictional or appropriately redacted records. Review the Privacy Policy and your obligations before submitting real borrower information.`],[`Can I get help?`,`Visit the Help Center or Contact Support for assistance.`]].map(([e,t])=>(0,b.jsxs)(`details`,{children:[(0,b.jsx)(`summary`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e)),(0,b.jsxs)(`p`,{style:{marginTop:25},children:[(0,b.jsx)(`a`,{href:`/help-center`,children:`Help Center`}),` · `,(0,b.jsx)(`a`,{href:`/contact-support`,children:`Contact Support`})]})]})})]}),(0,b.jsx)(`footer`,{children:(0,b.jsxs)(`div`,{className:`wrap foot`,children:[(0,b.jsxs)(`span`,{children:[`© `,new Date().getFullYear(),` ZapDocs. All rights reserved.`]}),(0,b.jsx)(`a`,{href:`/terms`,children:`Terms`}),(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy Policy`}),(0,b.jsx)(`a`,{href:`/accessibility`,children:`Accessibility`}),(0,b.jsx)(`a`,{href:`/`,children:`Home`})]})})]})}var de={record:{title:`One structured loan record`,fields:[[`Loan amount`,`$425,000`],[`Interest rate`,`9.50%`],[`Loan term`,`12 months`],[`State`,`California`]],rows:[`Borrower & property`,`Lender & brokerage`,`Servicing details`]},terms:{title:`Flexible financing terms`,fields:[[`Payment structure`,`Interest only`],[`Monthly estimate`,`$3,364.58`],[`Payment tiers`,`Configurable`],[`Balloon`,`Review required`]],rows:[`Prepaid interest`,`Deferred interest`,`Payment schedule`]},documents:{title:`Coordinated document outputs`,fields:[[`State`,`California`],[`Format`,`Editable Word`],[`Preview`,`Where available`],[`Status`,`Draft for review`]],rows:[`Closing package`,`Servicing agreement`,`Lender disclosure`]}},fe=[[`record`,`One loan record`,`Keep borrower, property, lender, brokerage and servicing details together. Reopen the record whenever negotiated terms change.`],[`terms`,`Flexible loan terms`,`Support interest-only schedules, multiple payment tiers, prepaid interest and deferred interest. Review automatic estimates and retain control of the balloon amount.`],[`documents`,`From loan terms to documents`,`Generate state-specific closing packages, separate servicing agreements and lender disclosures where applicable. Preview available outputs before downloading.`]];function pe({type:e}){return(0,b.jsx)(`svg`,{viewBox:`0 0 48 48`,width:`36`,height:`36`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.3`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:{record:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`rect`,{x:`8`,y:`7`,width:`32`,height:`34`,rx:`5`}),(0,b.jsx)(`path`,{d:`M15 17h18M15 25h18M15 33h11`})]}),terms:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`path`,{d:`M7 12h34M7 24h34M7 36h34`}),(0,b.jsx)(`circle`,{cx:`17`,cy:`12`,r:`4`,fill:`white`}),(0,b.jsx)(`circle`,{cx:`30`,cy:`24`,r:`4`,fill:`white`}),(0,b.jsx)(`circle`,{cx:`20`,cy:`36`,r:`4`,fill:`white`})]}),documents:(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(`path`,{d:`M13 5h15l9 9v29H13Z M28 5v10h9M19 23h12M19 30h12M19 37h8`})})}[e]})}function k({showHeader:e=!0,onLaunch:t,onDemo:n,onHome:r}={}){let[i,a]=(0,_.useState)(`record`),o=de[i];return(0,_.useEffect)(()=>{let e=document.title;return document.title=`Product Overview | ZapDocs`,()=>{document.title=e}},[]),(0,b.jsxs)(b.Fragment,{children:[e&&(0,b.jsx)(C,{onLaunch:t,onDemo:n,onHome:r}),(0,b.jsxs)(`main`,{className:`zpo`,children:[(0,b.jsx)(`style`,{children:`
      .zpo{font-family:Inter,system-ui,sans-serif;color:#090e36;background:white;line-height:1.55;text-align:left;overflow:hidden}.zpo *{box-sizing:border-box}.zpo h1,.zpo h2,.zpo h3,.zpo p{margin:0}.zpo a{text-decoration:none}.zpo .wrap{max-width:1250px;margin:auto;padding:0 32px}.zpo .eyebrow{font-size:13px;font-weight:800;letter-spacing:.14em;color:#315cff;text-transform:uppercase;margin-bottom:20px}.zpo h1{font-size:clamp(42px,5.2vw,76px);letter-spacing:-.055em;line-height:1.05;font-weight:780}.zpo h2{font-size:clamp(30px,3.5vw,48px);letter-spacing:-.045em;line-height:1.16;font-weight:750}.zpo p{color:#505b76;font-size:16px}.zpo .btn{display:inline-flex;align-items:center;justify-content:center;border-radius:100px;background:#3f6df6;color:white;font-weight:750;padding:15px 27px;min-height:52px}.zpo .btn:hover{background:#2d55cf}.zpo a:focus-visible{outline:3px solid #315cff;outline-offset:4px}.zpo .hero{background:#eaf0f6;position:relative}.zpo .hero-grid{display:grid;grid-template-columns:1fr 1fr;align-items:center;min-height:530px;gap:40px}.zpo .hero-copy{padding:68px 0;position:relative;z-index:2}.zpo .hero-copy p{font-size:18px;max-width:530px;margin:23px 0 29px}.zpo .actions{display:flex;flex-wrap:wrap;gap:22px;align-items:center}.zpo .textlink{font-weight:700;color:#315cff}.zpo .art{position:relative;min-height:530px;display:grid;place-items:center;isolation:isolate}.zpo .art:before{content:'';position:absolute;inset:0 -100vw 0 -50px;background:#c9f1e5;clip-path:polygon(95px 0,100% 0,100% 100%,0 100%,95px 54%,0 0);z-index:-3}.zpo .art:after{content:'';position:absolute;width:290px;height:290px;right:-90px;top:-35px;background:#11c9d6;transform:rotate(30deg);border-radius:30px;z-index:-2}.zpo .shape{position:absolute;width:220px;height:220px;bottom:-26px;left:5px;border-radius:28px;background:#315cff;transform:rotate(35deg);z-index:-1}.zpo .mock{width:min(100%,490px);background:white;border:1px solid #dce3ee;border-radius:20px;box-shadow:0 26px 70px #142b5040;overflow:hidden;transform:rotate(-2deg)}.zpo .mock-top{background:#f6f8fb;padding:14px 18px;font-size:12px;color:#64748b;border-bottom:1px solid #e4e9f0;display:flex;justify-content:space-between}.zpo .mock-body{padding:25px}.zpo .mock-body h3{font-size:22px;margin-bottom:6px}.zpo .mock-body p{font-size:12px}.zpo .mock-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:20px 0}.zpo .mock-field{border:1px solid #e0e6ee;border-radius:9px;padding:12px}.zpo .mock-field small{display:block;color:#64748b;font-size:10px}.zpo .mock-field strong{font-size:17px}.zpo .mock-doc{display:flex;justify-content:space-between;gap:10px;border-top:1px solid #e5e9ef;padding:12px 0;font-size:12px}.zpo .mock-doc span{color:#168354}.zpo .mock-button{background:#315cff;color:white;text-align:center;font-weight:700;padding:12px;border-radius:8px;margin-top:9px;font-size:13px}.zpo .section{padding:86px 0}.zpo .section-intro{max-width:880px}.zpo .section-intro p{margin-top:18px}.zpo .benefits{display:grid;grid-template-columns:repeat(3,1fr);gap:38px;margin-top:38px}.zpo .benefit-icon{width:62px;height:62px;display:grid;place-items:center;border-radius:14px;color:#315cff;background:#eaf0ff;margin-bottom:20px}.zpo .benefit:nth-child(2) .benefit-icon{color:#008b9a;background:#e0f9fa}.zpo .benefit:nth-child(3) .benefit-icon{color:#9548d7;background:#f4e8ff}.zpo .benefit h3{font-size:21px;letter-spacing:-.025em;margin-bottom:12px}.zpo .soft{background:#f2f5fa}.zpo .split{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:75px}.zpo .split p{margin:20px 0}.zpo .doc-stack{background:#0b1745;border-radius:24px;padding:35px;position:relative;overflow:hidden}.zpo .doc-stack:before{content:'';position:absolute;right:-65px;top:-70px;width:220px;height:220px;background:#315cff;border-radius:40px;transform:rotate(30deg)}.zpo .doc-item{position:relative;background:white;border-radius:12px;padding:18px;margin:12px 0;display:flex;gap:14px;align-items:center;box-shadow:0 8px 25px #0002}.zpo .doc-item svg{color:#315cff;width:30px;height:30px;flex:none}.zpo .doc-item small{display:block;color:#64748b}.zpo .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:35px}.zpo .step{border-top:2px solid #dce4f1;padding-top:20px}.zpo .step b{color:#315cff;font-size:13px}.zpo .step h3{margin:12px 0 8px;font-size:20px}.zpo .final{background:#0b1745;color:white;padding:65px 0}.zpo .final .wrap{display:flex;justify-content:space-between;align-items:center;gap:28px}.zpo .final p{color:#d0d9ee;margin-top:14px}.zpo .final .btn{flex:none}.zpo footer{padding:24px 0;font-size:13px;color:#63708a}.zpo footer a{color:#315cff;margin-left:16px}.zpo .legal{font-size:13px;margin-top:30px;color:#64748b}
      @media(max-width:850px){.zpo .hero-grid,.zpo .split{grid-template-columns:1fr;gap:20px}.zpo .hero-copy{padding:48px 0 0}.zpo .art{min-height:450px}.zpo .benefits,.zpo .steps{grid-template-columns:1fr 1fr}.zpo .section{padding:58px 0}.zpo .final .wrap{align-items:flex-start;flex-direction:column}}@media(max-width:540px){.zpo .wrap{padding:0 20px}.zpo .benefits,.zpo .steps{grid-template-columns:1fr}.zpo .mock-body{padding:17px}.zpo .art{min-height:410px}.zpo .doc-stack{padding:18px}.zpo .mock-field strong{font-size:14px}}
    `}),(0,b.jsx)(`style`,{children:`
      .zpo .hero{background:#f6f8fc}.zpo .art:before{background:linear-gradient(135deg,#e1edff,#c9f1e5)}.zpo .art:after{background:#a4c2ff}.zpo .mock{transform:none}.zpo .mock-doc{align-items:center}.zpo .mock-doc svg{width:23px;height:23px;color:#315cff;flex:none}.zpo .mock-doc strong{flex:1;font-size:13px}.zpo .state-tabs{display:flex;gap:8px;margin:17px 0}.zpo .state-tabs button{font:inherit;font-size:13px;font-weight:700;padding:10px 15px;border:1px solid #dce3ee;background:#fff;border-radius:9px;color:#314452;cursor:pointer}.zpo .state-tabs button[aria-pressed=true]{background:#315cff;color:white;border-color:#315cff}.zpo button:focus-visible{outline:3px solid #315cff;outline-offset:3px}.zpo .mock-note{margin-top:10px;color:#64748b;font-size:11px}.zpo .state-cards{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:30px}.zpo .state-card{background:white;border:1px solid #dce3ee;border-radius:20px;padding:28px}.zpo .state-card h3{font-size:25px;margin:12px 0}.zpo .state-card ul{list-style:none;padding:0;margin:20px 0 0}.zpo .state-card li{display:flex;align-items:center;gap:10px;border-top:1px solid #e5e9ef;padding:12px 0;font-size:14px}.zpo .state-card li svg{color:#315cff;width:23px;height:23px;flex:none}.zpo .pill{display:inline-block;background:#edf2ff;color:#315cff;font-size:12px;font-weight:800;padding:7px 12px;border-radius:100px}.zpo .state-card:nth-child(2) .pill{background:#e1f8ef;color:#168354}@media(max-width:650px){.zpo .state-cards{grid-template-columns:1fr}.zpo .art{min-height:530px}}
    `}),(0,b.jsx)(`style`,{children:`
      .zpo .hero h1 span{color:#3f6df6}.zpo .mock-grid{margin:14px 0}.zpo .mock-field strong{display:block;overflow-wrap:anywhere}.zpo .state-tabs{flex-wrap:wrap}.zpo .mock-doc strong{flex:1}.zpo .mock-body .mock-note{margin-top:14px}.zpo .art:after{background:#b2caff}.zpo .art:before{clip-path:polygon(10% 0,100% 0,100% 100%,0 100%,8% 55%,0 0)}.zpo .doc-stack .doc-item{color:#090e36}.zpo .doc-stack .doc-item svg{flex-shrink:0}.zpo .state-card a{display:inline-block;margin-top:18px}.zpo .mock-button{background:#e1f8ef;color:#176c4c}.zpo .mock-top span:last-child{white-space:nowrap}.zpo .mock-top{gap:8px}.zpo .benefit p{max-width:360px}
    `}),(0,b.jsx)(`section`,{className:`hero`,children:(0,b.jsxs)(`div`,{className:`wrap hero-grid`,children:[(0,b.jsxs)(`div`,{className:`hero-copy`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`Platform / Product overview`}),(0,b.jsxs)(`h1`,{children:[`Private lending documents, `,(0,b.jsx)(`span`,{children:`without repetitive data entry.`})]}),(0,b.jsx)(`p`,{children:`Enter the transaction once and prepare a coordinated package for Florida or California. Keep negotiated terms, party details and document outputs together in one workflow.`}),(0,b.jsxs)(`div`,{className:`actions`,children:[(0,b.jsx)(`a`,{className:`btn`,href:`/demo`,children:`Book a Demo →`}),(0,b.jsx)(`a`,{className:`textlink`,href:`/pricing`,children:`Explore pricing →`})]})]}),(0,b.jsxs)(`div`,{className:`art`,children:[(0,b.jsx)(`div`,{className:`shape`}),(0,b.jsxs)(`div`,{className:`mock`,children:[(0,b.jsxs)(`div`,{className:`mock-top`,children:[(0,b.jsx)(`span`,{children:`● ● ● \xA0 ZapDocs / Workspace`}),(0,b.jsx)(`span`,{children:`Sample loan`})]}),(0,b.jsxs)(`div`,{className:`mock-body`,children:[(0,b.jsx)(`h3`,{children:o.title}),(0,b.jsx)(`p`,{children:`Explore the platform using a fictional transaction.`}),(0,b.jsx)(`div`,{className:`state-tabs`,"aria-label":`Explore workspace features`,children:[[`record`,`Loan record`],[`terms`,`Payment terms`],[`documents`,`Documents`]].map(([e,t])=>(0,b.jsx)(`button`,{type:`button`,"aria-pressed":i===e,onClick:()=>a(e),children:t},e))}),(0,b.jsx)(`div`,{className:`mock-grid`,children:o.fields.map(([e,t])=>(0,b.jsxs)(`div`,{className:`mock-field`,children:[(0,b.jsx)(`small`,{children:e}),(0,b.jsx)(`strong`,{children:t})]},e))}),o.rows.map(e=>(0,b.jsxs)(`div`,{className:`mock-doc`,children:[(0,b.jsx)(pe,{type:i}),(0,b.jsx)(`strong`,{children:e})]},e)),(0,b.jsx)(`div`,{className:`mock-button`,children:`One record · Coordinated workflow`}),(0,b.jsx)(`p`,{className:`mock-note`,children:`Illustrative workspace only. No loan data is saved or documents generated here.`})]})]})]})]})}),(0,b.jsx)(`section`,{className:`section`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsxs)(`div`,{className:`section-intro`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`A connected platform`}),(0,b.jsx)(`h2`,{children:`Everything starts with one loan record.`}),(0,b.jsx)(`p`,{children:`Bring the transaction details, financing structure and document preparation together without re-entering the same information.`})]}),(0,b.jsx)(`div`,{className:`benefits`,children:fe.map(([e,t,n])=>(0,b.jsxs)(`article`,{className:`benefit`,children:[(0,b.jsx)(`div`,{className:`benefit-icon`,children:(0,b.jsx)(pe,{type:e})}),(0,b.jsx)(`h3`,{children:t}),(0,b.jsx)(`p`,{children:n})]},t))})]})}),(0,b.jsx)(`section`,{className:`section soft`,children:(0,b.jsxs)(`div`,{className:`wrap split`,children:[(0,b.jsx)(`div`,{className:`doc-stack`,children:[[`Loan record`,`Borrower, property, lender and brokerage`],[`Payment terms`,`Interest-only, prepaid and deferred interest`],[`Document outputs`,`Closing package and standalone documents`]].map(([e,t],n)=>(0,b.jsxs)(`div`,{className:`doc-item`,children:[(0,b.jsx)(pe,{type:[`record`,`terms`,`documents`][n]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:e}),(0,b.jsx)(`small`,{children:t})]})]},e))}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`Built for review`}),(0,b.jsx)(`h2`,{children:`Keep your closing team in control.`}),(0,b.jsx)(`p`,{children:`Review automatic payment estimates and verify the agreed balloon amount. Update the source record when negotiated terms change and regenerate the relevant documents.`}),(0,b.jsx)(`p`,{children:`Bring your closing professionals into the review process outside the software. ZapDocs does not replace legal advice or independently approve a loan.`}),(0,b.jsx)(`a`,{className:`textlink`,href:`/document-generation`,children:`Explore document generation →`})]})]})}),(0,b.jsx)(`section`,{className:`section`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`Supported states`}),(0,b.jsx)(`h2`,{children:`State-specific document workflows.`}),(0,b.jsx)(`div`,{className:`state-cards`,children:[[`FL`,`Florida`,`Prepare mortgage-based closing packages and configured supporting documents.`],[`CA`,`California`,`Prepare deed-of-trust-based closing packages and applicable standalone disclosures.`]].map(([e,t,n])=>(0,b.jsxs)(`article`,{className:`state-card`,children:[(0,b.jsxs)(`span`,{className:`pill`,children:[e,` DOCUMENTS`]}),(0,b.jsx)(`h3`,{children:t}),(0,b.jsx)(`p`,{children:n}),(0,b.jsx)(`a`,{className:`textlink`,href:`/document-generation`,children:`Explore available outputs →`})]},e))})]})}),(0,b.jsx)(`section`,{className:`section soft`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`How it works`}),(0,b.jsx)(`h2`,{children:`From a sample loan to a reviewed package.`}),(0,b.jsx)(`div`,{className:`steps`,children:[[`Create a fictional loan`,`Start with sample information when exploring the platform.`],[`Enter financing and party details`,`Capture the negotiated terms and the parties to the transaction.`],[`Review terms and documents`,`Check estimates and available document previews.`],[`Download for professional review`,`Export editable documents and coordinate independent review.`]].map(([e,t],n)=>(0,b.jsxs)(`article`,{className:`step`,children:[(0,b.jsxs)(`b`,{children:[`0`,n+1]}),(0,b.jsx)(`h3`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))}),(0,b.jsx)(`p`,{className:`legal`,children:`ZapDocs is document preparation software. Confirm applicable templates, disclosures and legal requirements with qualified professionals before using generated documents.`})]})}),(0,b.jsx)(`section`,{className:`final`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h2`,{children:`See the ZapDocs platform in action.`}),(0,b.jsx)(`p`,{children:`Book a personalized walkthrough for your private lending business.`})]}),(0,b.jsx)(`a`,{className:`btn`,href:`/demo`,children:`Book a Demo →`})]})}),(0,b.jsx)(`footer`,{children:(0,b.jsxs)(`div`,{className:`wrap`,children:[`© `,new Date().getFullYear(),` ZapDocs `,(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy`}),(0,b.jsx)(`a`,{href:`/terms`,children:`Terms`})]})})]})]})}var me=[{number:`01`,title:`Create your loan`,description:`Select the applicable state and enter the loan amount, interest rate, lien position and maturity date.`,icon:`＋`},{number:`02`,title:`Complete transaction details`,description:`Enter borrower vesting, property information, lender details, guarantors, brokerage and servicing information.`,icon:`◎`},{number:`03`,title:`Review payment terms`,description:`Review monthly payments, prepaid interest, payment tiers, deferred interest and the final balloon payment.`,icon:`✓`},{number:`04`,title:`Generate documents`,description:`Save the transaction and generate a coordinated, state-specific loan document package for professional review.`,icon:`↗`}];function he(){return(0,_.useEffect)(()=>{document.title=`Loan Workflow | ZapDocs`},[]),(0,b.jsxs)(`div`,{className:`workflow-page`,children:[(0,b.jsx)(C,{}),(0,b.jsxs)(`main`,{children:[(0,b.jsx)(`section`,{className:`workflow-hero`,children:(0,b.jsxs)(`div`,{className:`workflow-container workflow-hero-grid`,children:[(0,b.jsxs)(`div`,{className:`workflow-hero-content`,children:[(0,b.jsx)(`div`,{className:`workflow-eyebrow`,children:`PLATFORM / LOAN WORKFLOW`}),(0,b.jsxs)(`h1`,{children:[`From loan terms to`,(0,b.jsx)(`span`,{children:` closing documents.`})]}),(0,b.jsx)(`p`,{children:`A streamlined workflow for private lenders, loan originators and servicing professionals. Enter transaction information once and prepare coordinated loan documents from a single workspace.`}),(0,b.jsxs)(`div`,{className:`workflow-actions`,children:[(0,b.jsx)(`a`,{href:`/demo`,className:`workflow-primary`,children:`Book a demo →`}),(0,b.jsx)(`a`,{href:`/platform`,className:`workflow-secondary`,children:`Explore the platform`})]}),(0,b.jsxs)(`div`,{className:`workflow-support`,children:[(0,b.jsx)(`span`,{children:`✓ Florida`}),(0,b.jsx)(`span`,{children:`✓ California`}),(0,b.jsx)(`span`,{children:`✓ Reusable loan records`})]})]}),(0,b.jsx)(`div`,{className:`workflow-preview`,children:(0,b.jsxs)(`div`,{className:`workflow-window`,children:[(0,b.jsxs)(`div`,{className:`workflow-window-header`,children:[(0,b.jsxs)(`div`,{className:`workflow-dots`,children:[(0,b.jsx)(`span`,{}),(0,b.jsx)(`span`,{}),(0,b.jsx)(`span`,{})]}),(0,b.jsx)(`span`,{children:`Loan Workspace`}),(0,b.jsx)(`div`,{className:`workflow-status`,children:`In review`})]}),(0,b.jsxs)(`div`,{className:`workflow-window-body`,children:[(0,b.jsx)(`div`,{className:`workflow-preview-label`,children:`SAMPLE TRANSACTION`}),(0,b.jsx)(`h3`,{children:`Loan #1048`}),(0,b.jsx)(`p`,{children:`Florida · First Position · Bridge Loan`}),(0,b.jsxs)(`div`,{className:`workflow-metrics`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`small`,{children:`Loan amount`}),(0,b.jsx)(`strong`,{children:`$450,000`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`small`,{children:`Interest rate`}),(0,b.jsx)(`strong`,{children:`10.50%`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`small`,{children:`Loan term`}),(0,b.jsx)(`strong`,{children:`12 months`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`small`,{children:`Monthly payment`}),(0,b.jsx)(`strong`,{children:`$3,937.50`})]})]}),(0,b.jsx)(`div`,{className:`workflow-checklist`,children:[[`Loan information`,!0],[`Borrower and property`,!0],[`Lender and servicing`,!0],[`Payment schedule`,!0],[`Document review`,!1]].map(([e,t])=>(0,b.jsxs)(`div`,{className:`workflow-check-row`,children:[(0,b.jsx)(`div`,{className:t?`workflow-check complete`:`workflow-check pending`,children:t?`✓`:`○`}),(0,b.jsx)(`span`,{children:e}),(0,b.jsx)(`small`,{children:t?`Complete`:`Pending`})]},e))}),(0,b.jsx)(`div`,{className:`workflow-generate`,children:`Generate loan package →`}),(0,b.jsx)(`div`,{className:`workflow-demo-note`,children:`Illustrative workspace · Fictional loan data`})]})]})})]})}),(0,b.jsx)(`section`,{className:`workflow-benefits`,children:(0,b.jsxs)(`div`,{className:`workflow-container workflow-benefit-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`One workspace`}),(0,b.jsx)(`span`,{children:`Centralized transaction information`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Coordinated documents`}),(0,b.jsx)(`span`,{children:`Consistent loan and party details`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Flexible loan structures`}),(0,b.jsx)(`span`,{children:`Support for complex payment terms`})]})]})}),(0,b.jsx)(`section`,{className:`workflow-process`,children:(0,b.jsxs)(`div`,{className:`workflow-container`,children:[(0,b.jsxs)(`div`,{className:`workflow-section-heading`,children:[(0,b.jsx)(`div`,{className:`workflow-eyebrow`,children:`HOW IT WORKS`}),(0,b.jsx)(`h2`,{children:`Four steps. One coordinated workflow.`}),(0,b.jsx)(`p`,{children:`Move from agreed loan terms to document preparation without repeatedly entering the same transaction information.`})]}),(0,b.jsx)(`div`,{className:`workflow-step-grid`,children:me.map(e=>(0,b.jsxs)(`article`,{className:`workflow-step-card`,children:[(0,b.jsxs)(`div`,{className:`workflow-step-top`,children:[(0,b.jsx)(`div`,{className:`workflow-step-icon`,children:e.icon}),(0,b.jsxs)(`span`,{children:[`STEP `,e.number]})]}),(0,b.jsx)(`h3`,{children:e.title}),(0,b.jsx)(`p`,{children:e.description})]},e.number))})]})}),(0,b.jsx)(`section`,{className:`workflow-features`,children:(0,b.jsxs)(`div`,{className:`workflow-container workflow-feature-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`workflow-eyebrow`,children:`BUILT FOR PRIVATE LENDING`}),(0,b.jsx)(`h2`,{children:`Your transaction information, working together.`}),(0,b.jsx)(`p`,{children:`Private lending transactions frequently involve changing terms, multiple parties and complex payment arrangements. ZapDocs brings these details into a centralized document preparation workflow.`}),(0,b.jsx)(`a`,{href:`/document-generation`,className:`workflow-text-link`,children:`Explore document generation →`})]}),(0,b.jsx)(`div`,{className:`workflow-feature-list`,children:[[`Centralized loan information`,`Maintain borrower, lender, property and financing details within a single loan record.`],[`Reusable profiles`,`Reuse saved lender, brokerage and servicing information across transactions.`],[`Flexible payment schedules`,`Prepare interest-only, tiered, prepaid and deferred interest arrangements.`],[`State-specific document packages`,`Generate supported Florida and California documents using the applicable transaction information.`],[`Professional review`,`Review generated documents before execution and coordinate with your closing professionals.`]].map(([e,t])=>(0,b.jsxs)(`div`,{className:`workflow-feature-item`,children:[(0,b.jsx)(`div`,{className:`workflow-feature-check`,children:`✓`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{children:e}),(0,b.jsx)(`p`,{children:t})]})]},e))})]})}),(0,b.jsx)(`section`,{className:`workflow-cta-section`,children:(0,b.jsx)(`div`,{className:`workflow-container`,children:(0,b.jsxs)(`div`,{className:`workflow-cta`,children:[(0,b.jsx)(`div`,{className:`workflow-cta-eyebrow`,children:`THE NEXT STEP IN PRIVATE LENDING`}),(0,b.jsxs)(`h2`,{children:[`Less repetitive work.`,(0,b.jsx)(`br`,{}),`More time for your next loan.`]}),(0,b.jsx)(`p`,{children:`Discover how ZapDocs can simplify your loan document preparation workflow.`}),(0,b.jsx)(`a`,{href:`/demo`,className:`workflow-primary`,children:`Book a demo →`})]})})})]}),(0,b.jsx)(`footer`,{className:`workflow-footer`,children:(0,b.jsxs)(`div`,{className:`workflow-container`,children:[(0,b.jsxs)(`div`,{className:`workflow-footer-top`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{children:`ZapDocs`}),(0,b.jsx)(`p`,{children:`Document preparation software for private lending professionals.`})]}),(0,b.jsxs)(`div`,{className:`workflow-footer-links`,children:[(0,b.jsx)(`a`,{href:`/platform`,children:`Platform`}),(0,b.jsx)(`a`,{href:`/pricing`,children:`Pricing`}),(0,b.jsx)(`a`,{href:`/help-center`,children:`Help Center`}),(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy`}),(0,b.jsx)(`a`,{href:`/terms`,children:`Terms`})]})]}),(0,b.jsxs)(`div`,{className:`workflow-footer-bottom`,children:[(0,b.jsxs)(`span`,{children:[`© `,new Date().getFullYear(),` ZapDocs. All rights reserved.`]}),(0,b.jsx)(`span`,{children:`ZapDocs is not a law firm and does not provide legal advice.`})]})]})}),(0,b.jsx)(`style`,{children:`
        .workflow-page {
          font-family: Inter, Arial, sans-serif;
          background: #ffffff;
          color: #14243a;
          min-height: 100vh;
        }

        .workflow-page * {
          box-sizing: border-box;
        }

        .workflow-container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .workflow-hero {
          padding: 100px 0 90px;
          background: linear-gradient(
            135deg,
            #ffffff 10%,
            #f3f7fc 100%
          );
        }

        .workflow-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 65px;
          align-items: center;
        }

        .workflow-eyebrow {
          color: #2563eb;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.8px;
          margin-bottom: 22px;
        }

        .workflow-hero h1 {
          font-size: clamp(42px, 5vw, 66px);
          line-height: 1.08;
          letter-spacing: -3px;
          margin: 0 0 25px;
          font-weight: 750;
          color: #10233d;
        }

        .workflow-hero h1 span {
          color: #2563eb;
        }

        .workflow-hero-content > p {
          color: #64748b;
          font-size: 18px;
          line-height: 1.8;
          max-width: 540px;
        }

        .workflow-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        .workflow-primary,
        .workflow-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 25px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .workflow-primary {
          background: #16a34a;
          color: white;
          border: 1px solid #16a34a;
        }

        .workflow-primary:hover {
          background: #15803d;
          transform: translateY(-2px);
        }

        .workflow-secondary {
          background: white;
          color: #172b45;
          border: 1px solid #dbe3ed;
        }

        .workflow-secondary:hover {
          background: #f1f5f9;
        }

        .workflow-support {
          display: flex;
          flex-wrap: wrap;
          gap: 17px;
          margin-top: 25px;
          font-size: 12px;
          color: #64748b;
          font-weight: 600;
        }

        .workflow-preview {
          background: #e6edf7;
          padding: 25px;
          border-radius: 24px;
          box-shadow: 0 25px 70px #14243a12;
        }

        .workflow-window {
          background: white;
          border: 1px solid #dce5f0;
          border-radius: 13px;
          overflow: hidden;
        }

        .workflow-window-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 17px;
          border-bottom: 1px solid #e8edf3;
          font-size: 12px;
          font-weight: 700;
        }

        .workflow-dots {
          display: flex;
          gap: 5px;
        }

        .workflow-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #cbd5e1;
        }

        .workflow-status {
          background: #eff6ff;
          color: #2563eb;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 10px;
        }

        .workflow-window-body {
          padding: 25px;
        }

        .workflow-preview-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.2px;
          color: #94a3b8;
        }

        .workflow-window-body > h3 {
          font-size: 25px;
          margin: 9px 0;
        }

        .workflow-window-body > p {
          color: #64748b;
          font-size: 12px;
          margin: 0 0 22px;
        }

        .workflow-metrics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .workflow-metrics > div {
          background: #f8fafc;
          border: 1px solid #e8edf3;
          padding: 15px;
          border-radius: 8px;
        }

        .workflow-metrics small {
          display: block;
          font-size: 11px;
          color: #64748b;
          margin-bottom: 8px;
        }

        .workflow-metrics strong {
          font-size: 20px;
          color: #10233d;
        }

        .workflow-checklist {
          margin: 22px 0;
        }

        .workflow-check-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 0;
          border-bottom: 1px solid #edf1f5;
          font-size: 12px;
          font-weight: 600;
        }

        .workflow-check-row small {
          margin-left: auto;
          color: #94a3b8;
          font-size: 10px;
        }

        .workflow-check {
          width: 23px;
          height: 23px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .workflow-check.complete {
          background: #dcfce7;
          color: #15803d;
        }

        .workflow-check.pending {
          background: #f1f5f9;
          color: #94a3b8;
        }

        .workflow-generate {
          background: #2563eb;
          color: white;
          padding: 14px;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 700;
          text-align: center;
        }

        .workflow-demo-note {
          margin-top: 12px;
          color: #94a3b8;
          text-align: center;
          font-size: 10px;
        }

        .workflow-benefits {
          border-top: 1px solid #e5eaf0;
          border-bottom: 1px solid #e5eaf0;
          padding: 33px 0;
        }

        .workflow-benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .workflow-benefit-grid > div {
          text-align: center;
        }

        .workflow-benefit-grid strong {
          display: block;
          font-size: 17px;
          margin-bottom: 8px;
        }

        .workflow-benefit-grid span {
          font-size: 13px;
          color: #64748b;
        }

        .workflow-process {
          padding: 95px 0;
        }

        .workflow-section-heading {
          max-width: 720px;
          text-align: center;
          margin: 0 auto 45px;
        }

        .workflow-section-heading h2,
        .workflow-features h2 {
          font-size: clamp(30px, 4vw, 43px);
          letter-spacing: -1.7px;
          line-height: 1.2;
          margin: 0 0 18px;
        }

        .workflow-section-heading p,
        .workflow-features p {
          color: #64748b;
          line-height: 1.8;
          font-size: 16px;
        }

        .workflow-step-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .workflow-step-card {
          padding: 27px;
          border: 1px solid #dfe6ee;
          border-radius: 13px;
          background: white;
          transition: 0.2s ease;
        }

        .workflow-step-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px #10233d0c;
          border-color: #93b4ed;
        }

        .workflow-step-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }

        .workflow-step-top > span {
          font-size: 10px;
          letter-spacing: 1px;
          color: #94a3b8;
          font-weight: 700;
        }

        .workflow-step-icon {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: #eff6ff;
          color: #2563eb;
          font-size: 24px;
          font-weight: 700;
        }

        .workflow-step-card h3 {
          font-size: 18px;
          line-height: 1.4;
          margin: 0 0 13px;
        }

        .workflow-step-card p {
          font-size: 14px;
          color: #64748b;
          line-height: 1.8;
          margin: 0;
        }

        .workflow-features {
          background: #f7f9fc;
          border-top: 1px solid #e8edf3;
          border-bottom: 1px solid #e8edf3;
          padding: 85px 0;
        }

        .workflow-feature-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 85px;
          align-items: center;
        }

        .workflow-text-link {
          color: #2563eb;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          margin-top: 15px;
          font-size: 14px;
        }

        .workflow-feature-list {
          display: grid;
          gap: 22px;
        }

        .workflow-feature-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
        }

        .workflow-feature-check {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: #dcfce7;
          color: #15803d;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          font-weight: 700;
        }

        .workflow-feature-item h3 {
          font-size: 16px;
          margin: 3px 0 6px;
        }

        .workflow-feature-item p {
          font-size: 14px;
          margin: 0;
          line-height: 1.7;
        }

        .workflow-cta-section {
          padding: 75px 0;
        }

        .workflow-cta {
          border-radius: 22px;
          background: #10233d;
          color: white;
          padding: 65px 25px;
          text-align: center;
        }

        .workflow-cta-eyebrow {
          font-size: 11px;
          letter-spacing: 2px;
          color: #93c5fd;
          font-weight: 700;
          margin-bottom: 22px;
        }

        .workflow-cta h2 {
          font-size: clamp(32px, 4vw, 46px);
          letter-spacing: -1.5px;
          line-height: 1.2;
          margin: 0;
        }

        .workflow-cta p {
          color: #b8c7db;
          font-size: 16px;
          line-height: 1.7;
          margin: 22px 0 30px;
        }

        .workflow-footer {
          border-top: 1px solid #e5eaf0;
          background: #f8fafc;
          padding: 40px 0 22px;
        }

        .workflow-footer-top {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          flex-wrap: wrap;
        }

        .workflow-footer-top h3 {
          margin: 0 0 10px;
          font-size: 22px;
        }

        .workflow-footer-top p {
          color: #64748b;
          font-size: 13px;
        }

        .workflow-footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          align-items: center;
        }

        .workflow-footer-links a {
          text-decoration: none;
          color: #475569;
          font-size: 13px;
          font-weight: 600;
        }

        .workflow-footer-bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 30px;
          padding-top: 22px;
          border-top: 1px solid #dfe6ee;
          color: #64748b;
          font-size: 11px;
        }

        @media (max-width: 1000px) {
          .workflow-step-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .workflow-hero-grid,
          .workflow-feature-grid {
            gap: 40px;
          }

          .workflow-preview {
            padding: 15px;
          }
        }

        @media (max-width: 760px) {
          .workflow-container {
            width: calc(100% - 32px);
          }

          .workflow-hero {
            padding: 65px 0;
          }

          .workflow-hero-grid,
          .workflow-feature-grid {
            grid-template-columns: 1fr;
          }

          .workflow-hero h1 {
            letter-spacing: -2px;
          }

          .workflow-benefit-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .workflow-process,
          .workflow-features {
            padding: 60px 0;
          }

          .workflow-step-grid {
            grid-template-columns: 1fr;
          }

          .workflow-window-body {
            padding: 18px;
          }

          .workflow-cta-section {
            padding: 45px 0;
          }

          .workflow-cta {
            padding: 45px 20px;
          }
        }
      `})]})}var ge={FL:{name:`Florida`,docs:[`Secured promissory note`,`Mortgage`,`Related agreements`,`Guaranty`,`Configured supporting documents`]},CA:{name:`California`,docs:[`Promissory note`,`Deed of trust`,`Related agreements`,`Configured supporting documents`]}},_e=[[`layers`,`State-specific packages`,`Prepare Florida mortgages or California deeds of trust, notes and configured supporting documents from your loan record.`],[`file`,`Standalone documents`,`Generate servicing agreements and lender disclosures separately where applicable. Verify the correct form and language for each transaction.`],[`eye`,`Preview and download`,`Review available previews, export editable Word files or the full package, and regenerate after updating the source record.`]];function ve({type:e}){return(0,b.jsx)(`svg`,{viewBox:`0 0 48 48`,width:`36`,height:`36`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.3`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:{layers:(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(`path`,{d:`m24 7 17 9-17 9-17-9 17-9ZM7 24l17 9 17-9M7 32l17 9 17-9`})}),file:(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(`path`,{d:`M13 5h15l9 9v29H13Z M28 5v10h9M19 23h12M19 30h12M19 37h8`})}),eye:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`path`,{d:`M5 24s7-13 19-13 19 13 19 13-7 13-19 13S5 24 5 24Z`}),(0,b.jsx)(`circle`,{cx:`24`,cy:`24`,r:`5`})]})}[e]})}function ye({showHeader:e=!0,onLaunch:t,onDemo:n,onHome:r}={}){let[i,a]=(0,_.useState)(`FL`);return(0,_.useEffect)(()=>{let e=document.title;return document.title=`Loan Document Generation | ZapDocs`,()=>{document.title=e}},[]),(0,b.jsxs)(b.Fragment,{children:[e&&(0,b.jsx)(C,{onLaunch:t,onDemo:n,onHome:r}),(0,b.jsxs)(`main`,{className:`zdg`,children:[(0,b.jsx)(`style`,{children:`
      .zdg{font-family:Inter,system-ui,sans-serif;color:#090e36;background:white;line-height:1.55;text-align:left;overflow:hidden}.zdg *{box-sizing:border-box}.zdg h1,.zdg h2,.zdg h3,.zdg p{margin:0}.zdg a{text-decoration:none}.zdg .wrap{max-width:1250px;margin:auto;padding:0 32px}.zdg .eyebrow{font-size:13px;font-weight:800;letter-spacing:.14em;color:#315cff;text-transform:uppercase;margin-bottom:20px}.zdg h1{font-size:clamp(42px,5.2vw,76px);letter-spacing:-.055em;line-height:1.05;font-weight:780}.zdg h2{font-size:clamp(30px,3.5vw,48px);letter-spacing:-.045em;line-height:1.16;font-weight:750}.zdg p{color:#505b76;font-size:16px}.zdg .btn{display:inline-flex;align-items:center;justify-content:center;border-radius:100px;background:#3f6df6;color:white;font-weight:750;padding:15px 27px;min-height:52px}.zdg .btn:hover{background:#2d55cf}.zdg a:focus-visible{outline:3px solid #315cff;outline-offset:4px}.zdg .hero{background:#eaf0f6;position:relative}.zdg .hero-grid{display:grid;grid-template-columns:1fr 1fr;align-items:center;min-height:530px;gap:40px}.zdg .hero-copy{padding:68px 0;position:relative;z-index:2}.zdg .hero-copy p{font-size:18px;max-width:530px;margin:23px 0 29px}.zdg .actions{display:flex;flex-wrap:wrap;gap:22px;align-items:center}.zdg .textlink{font-weight:700;color:#315cff}.zdg .art{position:relative;min-height:530px;display:grid;place-items:center;isolation:isolate}.zdg .art:before{content:'';position:absolute;inset:0 -100vw 0 -50px;background:#c9f1e5;clip-path:polygon(95px 0,100% 0,100% 100%,0 100%,95px 54%,0 0);z-index:-3}.zdg .art:after{content:'';position:absolute;width:290px;height:290px;right:-90px;top:-35px;background:#11c9d6;transform:rotate(30deg);border-radius:30px;z-index:-2}.zdg .shape{position:absolute;width:220px;height:220px;bottom:-26px;left:5px;border-radius:28px;background:#315cff;transform:rotate(35deg);z-index:-1}.zdg .mock{width:min(100%,490px);background:white;border:1px solid #dce3ee;border-radius:20px;box-shadow:0 26px 70px #142b5040;overflow:hidden;transform:rotate(-2deg)}.zdg .mock-top{background:#f6f8fb;padding:14px 18px;font-size:12px;color:#64748b;border-bottom:1px solid #e4e9f0;display:flex;justify-content:space-between}.zdg .mock-body{padding:25px}.zdg .mock-body h3{font-size:22px;margin-bottom:6px}.zdg .mock-body p{font-size:12px}.zdg .mock-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:20px 0}.zdg .mock-field{border:1px solid #e0e6ee;border-radius:9px;padding:12px}.zdg .mock-field small{display:block;color:#64748b;font-size:10px}.zdg .mock-field strong{font-size:17px}.zdg .mock-doc{display:flex;justify-content:space-between;gap:10px;border-top:1px solid #e5e9ef;padding:12px 0;font-size:12px}.zdg .mock-doc span{color:#168354}.zdg .mock-button{background:#315cff;color:white;text-align:center;font-weight:700;padding:12px;border-radius:8px;margin-top:9px;font-size:13px}.zdg .section{padding:86px 0}.zdg .section-intro{max-width:880px}.zdg .section-intro p{margin-top:18px}.zdg .benefits{display:grid;grid-template-columns:repeat(3,1fr);gap:38px;margin-top:38px}.zdg .benefit-icon{width:62px;height:62px;display:grid;place-items:center;border-radius:14px;color:#315cff;background:#eaf0ff;margin-bottom:20px}.zdg .benefit:nth-child(2) .benefit-icon{color:#008b9a;background:#e0f9fa}.zdg .benefit:nth-child(3) .benefit-icon{color:#9548d7;background:#f4e8ff}.zdg .benefit h3{font-size:21px;letter-spacing:-.025em;margin-bottom:12px}.zdg .soft{background:#f2f5fa}.zdg .split{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:75px}.zdg .split p{margin:20px 0}.zdg .doc-stack{background:#0b1745;border-radius:24px;padding:35px;position:relative;overflow:hidden}.zdg .doc-stack:before{content:'';position:absolute;right:-65px;top:-70px;width:220px;height:220px;background:#315cff;border-radius:40px;transform:rotate(30deg)}.zdg .doc-item{position:relative;background:white;border-radius:12px;padding:18px;margin:12px 0;display:flex;gap:14px;align-items:center;box-shadow:0 8px 25px #0002}.zdg .doc-item svg{color:#315cff;width:30px;height:30px;flex:none}.zdg .doc-item small{display:block;color:#64748b}.zdg .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:35px}.zdg .step{border-top:2px solid #dce4f1;padding-top:20px}.zdg .step b{color:#315cff;font-size:13px}.zdg .step h3{margin:12px 0 8px;font-size:20px}.zdg .final{background:#0b1745;color:white;padding:65px 0}.zdg .final .wrap{display:flex;justify-content:space-between;align-items:center;gap:28px}.zdg .final p{color:#d0d9ee;margin-top:14px}.zdg .final .btn{flex:none}.zdg footer{padding:24px 0;font-size:13px;color:#63708a}.zdg footer a{color:#315cff;margin-left:16px}.zdg .legal{font-size:13px;margin-top:30px;color:#64748b}
      @media(max-width:850px){.zdg .hero-grid,.zdg .split{grid-template-columns:1fr;gap:20px}.zdg .hero-copy{padding:48px 0 0}.zdg .art{min-height:450px}.zdg .benefits,.zdg .steps{grid-template-columns:1fr 1fr}.zdg .section{padding:58px 0}.zdg .final .wrap{align-items:flex-start;flex-direction:column}}@media(max-width:540px){.zdg .wrap{padding:0 20px}.zdg .benefits,.zdg .steps{grid-template-columns:1fr}.zdg .mock-body{padding:17px}.zdg .art{min-height:410px}.zdg .doc-stack{padding:18px}.zdg .mock-field strong{font-size:14px}}
    `}),(0,b.jsx)(`style`,{children:`
      .zdg .hero{background:#f6f8fc}.zdg .art:before{background:linear-gradient(135deg,#e1edff,#c9f1e5)}.zdg .art:after{background:#a4c2ff}.zdg .mock{transform:none}.zdg .mock-doc{align-items:center}.zdg .mock-doc svg{width:23px;height:23px;color:#315cff;flex:none}.zdg .mock-doc strong{flex:1;font-size:13px}.zdg .state-tabs{display:flex;gap:8px;margin:17px 0}.zdg .state-tabs button{font:inherit;font-size:13px;font-weight:700;padding:10px 15px;border:1px solid #dce3ee;background:#fff;border-radius:9px;color:#314452;cursor:pointer}.zdg .state-tabs button[aria-pressed=true]{background:#315cff;color:white;border-color:#315cff}.zdg button:focus-visible{outline:3px solid #315cff;outline-offset:3px}.zdg .mock-note{margin-top:10px;color:#64748b;font-size:11px}.zdg .state-cards{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:30px}.zdg .state-card{background:white;border:1px solid #dce3ee;border-radius:20px;padding:28px}.zdg .state-card h3{font-size:25px;margin:12px 0}.zdg .state-card ul{list-style:none;padding:0;margin:20px 0 0}.zdg .state-card li{display:flex;align-items:center;gap:10px;border-top:1px solid #e5e9ef;padding:12px 0;font-size:14px}.zdg .state-card li svg{color:#315cff;width:23px;height:23px;flex:none}.zdg .pill{display:inline-block;background:#edf2ff;color:#315cff;font-size:12px;font-weight:800;padding:7px 12px;border-radius:100px}.zdg .state-card:nth-child(2) .pill{background:#e1f8ef;color:#168354}@media(max-width:650px){.zdg .state-cards{grid-template-columns:1fr}.zdg .art{min-height:530px}}
    `}),(0,b.jsx)(`section`,{className:`hero`,children:(0,b.jsxs)(`div`,{className:`wrap hero-grid`,children:[(0,b.jsxs)(`div`,{className:`hero-copy`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`Platform / Document generation`}),(0,b.jsx)(`h1`,{children:`Prepare your loan documents in one place.`}),(0,b.jsx)(`p`,{children:`Choose the appropriate state, enter your negotiated terms and generate editable documents for review. Keep your closing package connected to one structured loan record.`}),(0,b.jsxs)(`div`,{className:`actions`,children:[(0,b.jsx)(`a`,{className:`btn`,href:`/demo`,children:`Book a Demo →`}),(0,b.jsx)(`a`,{className:`textlink`,href:`/pricing`,children:`Explore pricing →`})]})]}),(0,b.jsxs)(`div`,{className:`art`,children:[(0,b.jsx)(`div`,{className:`shape`}),(0,b.jsxs)(`div`,{className:`mock`,children:[(0,b.jsxs)(`div`,{className:`mock-top`,children:[(0,b.jsx)(`span`,{children:`● ● ● \xA0 ZapDocs / Document generation`}),(0,b.jsx)(`span`,{children:`Preview`})]}),(0,b.jsxs)(`div`,{className:`mock-body`,children:[(0,b.jsx)(`h3`,{children:`Build your closing package`}),(0,b.jsx)(`p`,{children:`Explore an illustrative document list by state.`}),(0,b.jsx)(`div`,{className:`state-tabs`,"aria-label":`Illustrative package state`,children:Object.entries(ge).map(([e,t])=>(0,b.jsx)(`button`,{type:`button`,"aria-pressed":i===e,onClick:()=>a(e),children:t.name},e))}),ge[i].docs.map(e=>(0,b.jsxs)(`div`,{className:`mock-doc`,children:[(0,b.jsx)(ve,{type:`file`}),(0,b.jsx)(`strong`,{children:e}),(0,b.jsx)(`span`,{children:`DOCX`})]},e)),(0,b.jsxs)(`div`,{className:`mock-button`,children:[ge[i].name,` closing package`]}),(0,b.jsx)(`p`,{className:`mock-note`,children:`Interactive illustration only. No documents are generated here.`})]})]})]})]})}),(0,b.jsx)(`section`,{className:`section`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsxs)(`div`,{className:`section-intro`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`One record. Multiple outputs.`}),(0,b.jsx)(`h2`,{children:`Document preparation built around your closing workflow.`}),(0,b.jsx)(`p`,{children:`Reduce repetitive entry while keeping the review of each document under your team's control.`})]}),(0,b.jsx)(`div`,{className:`benefits`,children:_e.map(([e,t,n])=>(0,b.jsxs)(`article`,{className:`benefit`,children:[(0,b.jsx)(`div`,{className:`benefit-icon`,children:(0,b.jsx)(ve,{type:e})}),(0,b.jsx)(`h3`,{children:t}),(0,b.jsx)(`p`,{children:n})]},t))})]})}),(0,b.jsx)(`section`,{className:`section soft`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`Supported states`}),(0,b.jsx)(`h2`,{children:`Choose the package for your transaction.`}),(0,b.jsx)(`div`,{className:`state-cards`,children:Object.entries(ge).map(([e,t])=>(0,b.jsxs)(`article`,{className:`state-card`,children:[(0,b.jsxs)(`span`,{className:`pill`,children:[e,` DOCUMENTS`]}),(0,b.jsxs)(`h3`,{children:[t.name,` loan packages`]}),(0,b.jsx)(`p`,{children:e===`FL`?`Prepare the secured note, mortgage and configured supporting agreements.`:`Prepare the note, deed of trust and configured supporting agreements. Verify which disclosures apply.`}),(0,b.jsx)(`ul`,{children:t.docs.map(e=>(0,b.jsxs)(`li`,{children:[(0,b.jsx)(ve,{type:`file`}),e]},e))})]},e))}),(0,b.jsx)(`p`,{className:`legal`,children:`Package contents depend on the transaction and configured templates; confirm all required documents with your closing professionals.`})]})}),(0,b.jsx)(`section`,{className:`section`,children:(0,b.jsxs)(`div`,{className:`wrap split`,children:[(0,b.jsx)(`div`,{className:`doc-stack`,children:[[`Servicing agreement`,`Standalone output, where applicable`],[`Lender disclosure`,`Standalone output, where applicable`],[`Full loan package`,`Editable Word files`]].map(([e,t])=>(0,b.jsxs)(`div`,{className:`doc-item`,children:[(0,b.jsx)(ve,{type:`file`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:e}),(0,b.jsx)(`small`,{children:t})]})]},e))}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`Flexible document outputs`}),(0,b.jsx)(`h2`,{children:`Generate the package or the document you need.`}),(0,b.jsx)(`p`,{children:`Prepare servicing agreements and lender disclosures separately from the closing package. Review available previews and download your documents for review.`}),(0,b.jsx)(`p`,{children:`Arrange for legal descriptions and other required attachments. Regenerate your documents after changing the underlying loan record.`}),(0,b.jsx)(`a`,{className:`textlink`,href:`/demo`,children:`See the platform in action →`})]})]})}),(0,b.jsx)(`section`,{className:`section soft`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`How it works`}),(0,b.jsx)(`h2`,{children:`From loan information to document delivery.`}),(0,b.jsx)(`div`,{className:`steps`,children:[[`Select state`,`Choose the applicable Florida or California workflow.`],[`Enter loan information`,`Capture the terms, parties and property details.`],[`Preview documents`,`Review available previews and verify the terms.`],[`Download package`,`Export editable documents for independent review.`]].map(([e,t],n)=>(0,b.jsxs)(`article`,{className:`step`,children:[(0,b.jsxs)(`b`,{children:[`0`,n+1]}),(0,b.jsx)(`h3`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))}),(0,b.jsx)(`p`,{className:`legal`,children:`ZapDocs is document preparation software, not a law firm. Verify applicable disclosures, template language and legal requirements with qualified professionals before using generated documents.`})]})}),(0,b.jsx)(`section`,{className:`final`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h2`,{children:`See your document workflow in action.`}),(0,b.jsx)(`p`,{children:`Book a personalized walkthrough of ZapDocs.`})]}),(0,b.jsx)(`a`,{className:`btn`,href:`/demo`,children:`Book a Demo →`})]})}),(0,b.jsx)(`footer`,{children:(0,b.jsxs)(`div`,{className:`wrap`,children:[`© `,new Date().getFullYear(),` ZapDocs `,(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy`}),(0,b.jsx)(`a`,{href:`/terms`,children:`Terms`})]})})]})]})}var be=[{icon:`▤`,title:`Centralized loan records`,description:`Maintain borrower, lender, property and financing information in one organized workspace.`},{icon:`▧`,title:`Consistent documentation`,description:`Reduce repetitive data entry across your loan document packages.`},{icon:`◎`,title:`Reusable profiles`,description:`Save frequently used lender, brokerage, trustee and servicing information.`},{icon:`↻`,title:`Flexible loan management`,description:`Reopen saved transactions, revise negotiated terms and regenerate documents.`},{icon:`✓`,title:`Document preparation`,description:`Generate coordinated Florida and California loan document packages.`},{icon:`↗`,title:`Streamlined review`,description:`Prepare transaction information and documents for review by closing professionals.`}],xe=[{id:`1048`,borrower:`Oakwood Investments LLC`,state:`Florida`,amount:`$450,000`,status:`Ready for review`,color:`green`},{id:`1047`,borrower:`Pacific Property Group LLC`,state:`California`,amount:`$725,000`,status:`In progress`,color:`blue`},{id:`1046`,borrower:`Summit Capital LLC`,state:`Florida`,amount:`$280,000`,status:`Generated`,color:`gray`}];function Se(){return(0,_.useEffect)(()=>{document.title=`Team Workspace | ZapDocs`},[]),(0,b.jsxs)(`div`,{className:`tw-page`,children:[(0,b.jsx)(C,{}),(0,b.jsxs)(`main`,{children:[(0,b.jsx)(`section`,{className:`tw-hero`,children:(0,b.jsxs)(`div`,{className:`tw-container tw-hero-grid`,children:[(0,b.jsxs)(`div`,{className:`tw-hero-content`,children:[(0,b.jsxs)(`div`,{className:`tw-eyebrow`,children:[(0,b.jsx)(`span`,{className:`tw-dot`}),`PLATFORM / TEAM WORKSPACE`]}),(0,b.jsxs)(`h1`,{children:[`Your entire lending workflow.`,(0,b.jsx)(`span`,{children:`One workspace.`})]}),(0,b.jsx)(`p`,{children:`Organize loan records, manage transaction information, reuse lending profiles and prepare coordinated loan documents from a centralized workspace built for private lending professionals.`}),(0,b.jsxs)(`div`,{className:`tw-actions`,children:[(0,b.jsx)(`a`,{href:`/demo`,className:`tw-primary`,children:`Book a Demo →`}),(0,b.jsx)(`a`,{href:`/loan-workflow`,className:`tw-secondary`,children:`Explore Workflow`})]}),(0,b.jsxs)(`div`,{className:`tw-support`,children:[(0,b.jsx)(`span`,{children:`✓ Centralized records`}),(0,b.jsx)(`span`,{children:`✓ Reusable profiles`}),(0,b.jsx)(`span`,{children:`✓ State-specific documents`})]})]}),(0,b.jsx)(`div`,{className:`tw-preview`,children:(0,b.jsxs)(`div`,{className:`tw-window`,children:[(0,b.jsxs)(`div`,{className:`tw-window-header`,children:[(0,b.jsxs)(`div`,{className:`tw-brand`,children:[(0,b.jsx)(`div`,{className:`tw-logo`,children:`Z`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`ZapDocs`}),(0,b.jsx)(`small`,{children:`Loan Workspace`})]})]}),(0,b.jsx)(`span`,{className:`tw-preview-tag`,children:`Preview`})]}),(0,b.jsxs)(`div`,{className:`tw-window-body`,children:[(0,b.jsx)(`div`,{className:`tw-small-label`,children:`WORKSPACE OVERVIEW`}),(0,b.jsxs)(`div`,{className:`tw-dashboard-heading`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h2`,{children:`Your Loans`}),(0,b.jsx)(`p`,{children:`Manage your lending transactions.`})]}),(0,b.jsx)(`span`,{className:`tw-new-loan`,children:`+ New Loan`})]}),(0,b.jsx)(`div`,{className:`tw-metrics`,children:[[`Total loans`,`24`],[`In progress`,`8`],[`Generated`,`16`]].map(([e,t])=>(0,b.jsxs)(`div`,{className:`tw-metric`,children:[(0,b.jsx)(`small`,{children:e}),(0,b.jsx)(`strong`,{children:t})]},e))}),(0,b.jsxs)(`div`,{className:`tw-loan-list`,children:[(0,b.jsx)(`div`,{className:`tw-list-heading`,children:`Recent Transactions`}),xe.map(e=>(0,b.jsxs)(`div`,{className:`tw-loan`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`small`,{children:[`LOAN #`,e.id,` · `,e.state]}),(0,b.jsx)(`h4`,{children:e.borrower}),(0,b.jsx)(`p`,{children:e.amount})]}),(0,b.jsx)(`span`,{className:`tw-status ${e.color}`,children:e.status})]},e.id))]}),(0,b.jsx)(`div`,{className:`tw-preview-note`,children:`Illustrative workspace · Fictional loan data`})]})]})})]})}),(0,b.jsx)(`section`,{className:`tw-benefits`,children:(0,b.jsx)(`div`,{className:`tw-container tw-benefit-grid`,children:[[`One centralized workspace`,`Keep transaction information together.`],[`Less repetitive data entry`,`Reuse information across documents.`],[`Built for private lending`,`Designed around lending transactions.`]].map(([e,t])=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))})}),(0,b.jsx)(`section`,{className:`tw-section`,children:(0,b.jsxs)(`div`,{className:`tw-container`,children:[(0,b.jsxs)(`div`,{className:`tw-section-heading`,children:[(0,b.jsx)(`div`,{className:`tw-label`,children:`WORKSPACE CAPABILITIES`}),(0,b.jsx)(`h2`,{children:`Everything starts with organized information.`}),(0,b.jsx)(`p`,{children:`Manage the information behind your loan documents without relying on disconnected spreadsheets or repetitive forms.`})]}),(0,b.jsx)(`div`,{className:`tw-feature-grid`,children:be.map((e,t)=>(0,b.jsxs)(`article`,{className:`tw-feature-card`,children:[(0,b.jsxs)(`div`,{className:`tw-feature-top`,children:[(0,b.jsx)(`div`,{className:`tw-feature-icon`,children:e.icon}),(0,b.jsx)(`small`,{children:String(t+1).padStart(2,`0`)})]}),(0,b.jsx)(`h3`,{children:e.title}),(0,b.jsx)(`p`,{children:e.description})]},e.title))})]})}),(0,b.jsx)(`section`,{className:`tw-profile-section`,children:(0,b.jsxs)(`div`,{className:`tw-container tw-profile-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`tw-label`,children:`REUSABLE LENDING PROFILES`}),(0,b.jsx)(`h2`,{children:`Stop entering the same information twice.`}),(0,b.jsx)(`p`,{children:`Private lenders frequently work with the same lenders, brokers, trustees and servicing companies. Save commonly used information and retrieve it when preparing your next loan.`}),(0,b.jsx)(`a`,{href:`/loan-workflow`,className:`tw-text-link`,children:`Discover the loan workflow →`})]}),(0,b.jsxs)(`div`,{className:`tw-profile-window`,children:[(0,b.jsxs)(`div`,{className:`tw-profile-heading`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{children:`Saved Profiles`}),(0,b.jsx)(`p`,{children:`Reusable transaction information`})]}),(0,b.jsx)(`span`,{children:`+ New Profile`})]}),[[`L`,`Lender Profiles`,`Lender vesting and mailing addresses`],[`B`,`Brokerage Profiles`,`Company and representative information`],[`S`,`Servicing Profiles`,`Servicer contact information`],[`T`,`Trustee Profiles`,`California trustee information`]].map(([e,t,n])=>(0,b.jsxs)(`div`,{className:`tw-profile-row`,children:[(0,b.jsx)(`div`,{className:`tw-profile-icon`,children:e}),(0,b.jsxs)(`div`,{className:`tw-profile-info`,children:[(0,b.jsx)(`h4`,{children:t}),(0,b.jsx)(`p`,{children:n})]}),(0,b.jsx)(`span`,{className:`tw-profile-arrow`,children:`→`})]},t)),(0,b.jsx)(`div`,{className:`tw-preview-note`,children:`Illustrative profile interface`})]})]})}),(0,b.jsx)(`section`,{className:`tw-section`,children:(0,b.jsxs)(`div`,{className:`tw-container`,children:[(0,b.jsxs)(`div`,{className:`tw-section-heading`,children:[(0,b.jsx)(`div`,{className:`tw-label`,children:`BUILT FOR YOUR BUSINESS`}),(0,b.jsx)(`h2`,{children:`Designed for lending professionals.`})]}),(0,b.jsx)(`div`,{className:`tw-industry-grid`,children:[[`Private Lenders`,`Organize lending transactions and prepare consistent document packages.`,`/private-lenders`],[`Loan Originators`,`Maintain transaction information and streamline document preparation.`,`/loan-originators`],[`Servicing Professionals`,`Maintain reusable servicing information and prepare supported servicing documents.`,`/servicing-teams`]].map(([e,t,n])=>(0,b.jsxs)(`a`,{className:`tw-industry-card`,href:n,children:[(0,b.jsx)(`h3`,{children:e}),(0,b.jsx)(`p`,{children:t}),(0,b.jsx)(`span`,{children:`Learn more →`})]},e))})]})}),(0,b.jsx)(`section`,{className:`tw-cta-section`,children:(0,b.jsx)(`div`,{className:`tw-container`,children:(0,b.jsxs)(`div`,{className:`tw-cta`,children:[(0,b.jsx)(`div`,{className:`tw-cta-label`,children:`EXPERIENCE ZAPDOCS`}),(0,b.jsxs)(`h2`,{children:[`A better workspace.`,(0,b.jsx)(`br`,{}),`A simpler lending process.`]}),(0,b.jsx)(`p`,{children:`Discover how ZapDocs helps private lending professionals organize transactions and streamline loan document preparation.`}),(0,b.jsxs)(`div`,{className:`tw-cta-actions`,children:[(0,b.jsx)(`a`,{href:`/demo`,className:`tw-primary`,children:`Book a Demo →`}),(0,b.jsx)(`a`,{href:`/pricing`,className:`tw-cta-secondary`,children:`View Pricing`})]})]})})})]}),(0,b.jsx)(`footer`,{className:`tw-footer`,children:(0,b.jsxs)(`div`,{className:`tw-container`,children:[(0,b.jsxs)(`div`,{className:`tw-footer-top`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{children:`ZapDocs`}),(0,b.jsx)(`p`,{children:`Document preparation software built for private lending professionals.`})]}),(0,b.jsxs)(`div`,{className:`tw-footer-links`,children:[(0,b.jsx)(`a`,{href:`/platform`,children:`Platform`}),(0,b.jsx)(`a`,{href:`/pricing`,children:`Pricing`}),(0,b.jsx)(`a`,{href:`/help-center`,children:`Help Center`}),(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy`}),(0,b.jsx)(`a`,{href:`/terms`,children:`Terms`})]})]}),(0,b.jsxs)(`div`,{className:`tw-footer-bottom`,children:[(0,b.jsxs)(`span`,{children:[`© `,new Date().getFullYear(),` ZapDocs. All rights reserved.`]}),(0,b.jsx)(`span`,{children:`ZapDocs is not a law firm and does not provide legal advice.`})]})]})}),(0,b.jsx)(`style`,{children:`
        .tw-page {
          background: #ffffff;
          color: #101c32;
          font-family: Inter, Arial, sans-serif;
          min-height: 100vh;
        }

        .tw-page * {
          box-sizing: border-box;
        }

        .tw-container {
          width: min(1200px, calc(100% - 64px));
          margin: 0 auto;
        }

        .tw-hero {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #f4f7fc 65%,
            #eaf0ff 100%
          );
          padding: 95px 0;
          overflow: hidden;
        }

        .tw-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 65px;
        }

        .tw-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 9px 15px;
          background: white;
          border: 1px solid #dfe5ee;
          border-radius: 30px;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1.3px;
          color: #526278;
          margin-bottom: 24px;
        }

        .tw-dot {
          width: 7px;
          height: 7px;
          background: #3d63f5;
          border-radius: 50%;
        }

        .tw-hero h1 {
          font-size: clamp(40px, 4.6vw, 62px);
          line-height: 1.1;
          font-weight: 750;
          letter-spacing: -2.8px;
          margin: 0 0 26px;
          color: #101c32;
        }

        .tw-hero h1 span {
          display: block;
          color: #3d63f5;
          margin-top: 4px;
        }

        .tw-hero-content > p {
          font-size: 17px;
          line-height: 1.85;
          color: #637287;
          max-width: 550px;
          margin: 0 0 30px;
        }

        .tw-actions,
        .tw-cta-actions {
          display: flex;
          gap: 13px;
          flex-wrap: wrap;
          align-items: center;
        }

        .tw-primary,
        .tw-secondary,
        .tw-cta-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 26px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 650;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .tw-primary {
          color: white;
          background: #3d63f5;
          border: 1px solid #3d63f5;
          box-shadow: 0 8px 18px #3d63f526;
        }

        .tw-primary:hover {
          background: #284ce1;
          color: white;
          transform: translateY(-2px);
        }

        .tw-secondary {
          color: #17233b;
          background: white;
          border: 1px solid #d6deea;
        }

        .tw-secondary:hover {
          background: #f1f5fa;
        }

        .tw-support {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          color: #64748b;
          font-size: 11px;
          font-weight: 600;
          margin-top: 28px;
        }

        .tw-preview {
          padding: 20px;
          background: #e4eaf6;
          border: 1px solid #dfe6f2;
          border-radius: 25px;
          box-shadow: 0 25px 65px #172b4520;
          min-width: 0;
        }

        .tw-window {
          border: 1px solid #dce3ed;
          background: white;
          border-radius: 15px;
          overflow: hidden;
        }

        .tw-window-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 17px 20px;
          border-bottom: 1px solid #e5eaf1;
        }

        .tw-brand {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .tw-logo {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          background: #3d63f5;
          color: white;
          font-weight: 800;
          font-size: 18px;
        }

        .tw-brand strong {
          display: block;
          font-size: 13px;
        }

        .tw-brand small {
          display: block;
          font-size: 10px;
          color: #8491a4;
          margin-top: 3px;
        }

        .tw-preview-tag {
          background: #eff3f9;
          color: #637287;
          padding: 6px 12px;
          font-size: 10px;
          border-radius: 20px;
          font-weight: 600;
        }

        .tw-window-body {
          padding: 23px;
        }

        .tw-small-label {
          color: #8491a4;
          letter-spacing: 1.2px;
          font-weight: 700;
          font-size: 10px;
          margin-bottom: 10px;
        }

        .tw-dashboard-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 23px;
        }

        .tw-dashboard-heading h2 {
          font-size: 24px;
          margin: 0 0 5px;
        }

        .tw-dashboard-heading p {
          font-size: 11px;
          color: #8491a4;
          margin: 0;
        }

        .tw-new-loan {
          background: #3d63f5;
          color: white;
          border-radius: 7px;
          padding: 10px 13px;
          font-size: 11px;
          font-weight: 650;
          white-space: nowrap;
        }

        .tw-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 23px;
        }

        .tw-metric {
          border: 1px solid #e1e7ef;
          background: #f8fafc;
          border-radius: 10px;
          padding: 15px;
        }

        .tw-metric small {
          display: block;
          color: #64748b;
          font-size: 10px;
          margin-bottom: 10px;
        }

        .tw-metric strong {
          font-size: 25px;
          color: #101c32;
        }

        .tw-loan-list {
          border: 1px solid #e1e7ef;
          border-radius: 10px;
          overflow: hidden;
        }

        .tw-list-heading {
          background: #f8fafc;
          padding: 13px 15px;
          color: #637287;
          font-size: 11px;
          font-weight: 650;
          border-bottom: 1px solid #e1e7ef;
        }

        .tw-loan {
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          border-bottom: 1px solid #edf1f5;
        }

        .tw-loan:last-child {
          border-bottom: 0;
        }

        .tw-loan small {
          font-size: 9px;
          color: #94a3b8;
        }

        .tw-loan h4 {
          font-size: 12px;
          margin: 5px 0;
          font-weight: 650;
        }

        .tw-loan p {
          color: #64748b;
          font-size: 11px;
          margin: 0;
        }

        .tw-status {
          padding: 5px 9px;
          border-radius: 20px;
          font-size: 9px;
          font-weight: 650;
          text-align: center;
          white-space: nowrap;
        }

        .tw-status.green {
          background: #e5f8ed;
          color: #16834c;
        }

        .tw-status.blue {
          background: #eaf0ff;
          color: #3d63f5;
        }

        .tw-status.gray {
          background: #eff2f6;
          color: #64748b;
        }

        .tw-preview-note {
          font-size: 9px;
          text-align: center;
          margin-top: 17px;
          color: #94a3b8;
        }

        .tw-benefits {
          background: white;
          padding: 35px 0;
          border-top: 1px solid #e5eaf0;
          border-bottom: 1px solid #e5eaf0;
        }

        .tw-benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          text-align: center;
        }

        .tw-benefit-grid h3 {
          font-size: 17px;
          margin: 0 0 8px;
        }

        .tw-benefit-grid p {
          color: #64748b;
          font-size: 13px;
          margin: 0;
        }

        .tw-section {
          padding: 95px 0;
          background: white;
        }

        .tw-section-heading {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 45px;
        }

        .tw-label {
          font-size: 11px;
          letter-spacing: 1.7px;
          color: #3d63f5;
          font-weight: 750;
          margin-bottom: 19px;
        }

        .tw-section-heading h2,
        .tw-profile-grid h2 {
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1.18;
          letter-spacing: -1.6px;
          margin: 0 0 20px;
        }

        .tw-section-heading p,
        .tw-profile-grid > div > p {
          color: #64748b;
          line-height: 1.85;
          font-size: 16px;
        }

        .tw-feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .tw-feature-card {
          border: 1px solid #dfe5ed;
          border-radius: 15px;
          padding: 30px;
          background: white;
          transition: all 0.25s ease;
        }

        .tw-feature-card:hover,
        .tw-industry-card:hover {
          border-color: #a8b8f8;
          box-shadow: 0 15px 35px #172b4510;
          transform: translateY(-4px);
        }

        .tw-feature-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .tw-feature-icon {
          background: #edf2ff;
          color: #3d63f5;
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          font-weight: 700;
          font-size: 25px;
        }

        .tw-feature-top small {
          color: #94a3b8;
          font-weight: 650;
          font-size: 12px;
        }

        .tw-feature-card h3,
        .tw-industry-card h3 {
          color: #101c32;
          font-size: 19px;
          margin: 0 0 13px;
        }

        .tw-feature-card p,
        .tw-industry-card p {
          font-size: 14px;
          color: #64748b;
          line-height: 1.8;
          margin: 0;
        }

        .tw-profile-section {
          padding: 90px 0;
          background: #f6f8fc;
          border-top: 1px solid #e5eaf1;
          border-bottom: 1px solid #e5eaf1;
        }

        .tw-profile-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 85px;
          align-items: center;
        }

        .tw-text-link {
          color: #3d63f5;
          font-weight: 650;
          font-size: 14px;
          text-decoration: none;
          display: inline-block;
          margin-top: 15px;
        }

        .tw-text-link:hover {
          text-decoration: underline;
        }

        .tw-profile-window {
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 16px;
          padding: 25px;
          box-shadow: 0 10px 35px #172b4508;
        }

        .tw-profile-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 23px;
        }

        .tw-profile-heading h3 {
          margin: 0 0 5px;
          font-size: 20px;
        }

        .tw-profile-heading p {
          color: #64748b;
          font-size: 12px;
          margin: 0;
        }

        .tw-profile-heading > span {
          background: #edf2ff;
          color: #3d63f5;
          font-size: 10px;
          border-radius: 7px;
          padding: 9px 12px;
          font-weight: 700;
          white-space: nowrap;
        }

        .tw-profile-row {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 16px;
          border: 1px solid #e2e7ef;
          border-radius: 10px;
          margin-bottom: 12px;
        }

        .tw-profile-icon {
          width: 42px;
          height: 42px;
          background: #edf2ff;
          color: #3d63f5;
          border-radius: 9px;
          display: grid;
          place-items: center;
          font-weight: 700;
          flex-shrink: 0;
        }

        .tw-profile-info {
          flex: 1;
        }

        .tw-profile-info h4 {
          font-size: 13px;
          margin: 0 0 6px;
        }

        .tw-profile-info p {
          font-size: 11px;
          color: #64748b;
          margin: 0;
        }

        .tw-profile-arrow {
          color: #94a3b8;
        }

        .tw-industry-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .tw-industry-card {
          display: block;
          text-decoration: none;
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 15px;
          padding: 30px;
          transition: all 0.25s ease;
        }

        .tw-industry-card span {
          display: inline-block;
          color: #3d63f5;
          font-size: 13px;
          font-weight: 650;
          margin-top: 22px;
        }

        .tw-cta-section {
          padding: 0 0 85px;
          background: white;
        }

        .tw-cta {
          background: linear-gradient(
            135deg,
            #101c32,
            #172b52
          );
          color: white;
          padding: 70px 28px;
          border-radius: 22px;
          text-align: center;
        }

        .tw-cta-label {
          font-size: 11px;
          letter-spacing: 1.8px;
          color: #a6b9ff;
          font-weight: 750;
          margin-bottom: 22px;
        }

        .tw-cta h2 {
          font-size: clamp(32px, 4vw, 46px);
          line-height: 1.2;
          letter-spacing: -1.5px;
          color: white;
          margin: 0 0 22px;
        }

        .tw-cta p {
          color: #c1cce0;
          max-width: 650px;
          margin: 0 auto 28px;
          line-height: 1.8;
          font-size: 16px;
        }

        .tw-cta-actions {
          justify-content: center;
        }

        .tw-cta-secondary {
          border: 1px solid #ffffff50;
          color: white;
        }

        .tw-cta-secondary:hover {
          background: #ffffff15;
          color: white;
        }

        .tw-footer {
          background: #f8fafc;
          border-top: 1px solid #e2e7ef;
          padding: 45px 0 25px;
        }

        .tw-footer-top {
          display: flex;
          justify-content: space-between;
          gap: 25px;
          flex-wrap: wrap;
        }

        .tw-footer-top h3 {
          font-size: 23px;
          margin: 0 0 10px;
        }

        .tw-footer-top p {
          color: #64748b;
          font-size: 13px;
          max-width: 350px;
          line-height: 1.7;
        }

        .tw-footer-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 23px;
        }

        .tw-footer-links a {
          font-size: 13px;
          text-decoration: none;
          color: #526278;
        }

        .tw-footer-links a:hover {
          color: #3d63f5;
        }

        .tw-footer-bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          border-top: 1px solid #dfe5ed;
          margin-top: 30px;
          padding-top: 23px;
          color: #64748b;
          font-size: 11px;
        }

        @media (max-width: 1050px) {
          .tw-hero-grid,
          .tw-profile-grid {
            gap: 35px;
          }

          .tw-preview {
            padding: 12px;
          }

          .tw-feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .tw-hero h1 {
            font-size: 44px;
          }
        }

        @media (max-width: 800px) {
          .tw-container {
            width: calc(100% - 36px);
          }

          .tw-hero-grid,
          .tw-profile-grid {
            grid-template-columns: 1fr;
          }

          .tw-hero {
            padding: 60px 0;
          }

          .tw-hero h1 {
            font-size: 42px;
            letter-spacing: -1.8px;
          }

          .tw-preview {
            max-width: 600px;
            width: 100%;
            margin: 0 auto;
          }

          .tw-benefit-grid,
          .tw-industry-grid {
            grid-template-columns: 1fr;
          }

          .tw-section,
          .tw-profile-section {
            padding: 60px 0;
          }

          .tw-benefit-grid {
            gap: 30px;
          }

          .tw-cta-section {
            padding-bottom: 50px;
          }
        }

        @media (max-width: 480px) {
          .tw-feature-grid {
            grid-template-columns: 1fr;
          }

          .tw-hero h1 {
            font-size: 36px;
          }

          .tw-window-body {
            padding: 14px;
          }

          .tw-metric {
            padding: 10px;
          }

          .tw-metric strong {
            font-size: 20px;
          }

          .tw-loan {
            padding: 11px;
            flex-wrap: wrap;
          }

          .tw-profile-window {
            padding: 16px;
          }

          .tw-feature-card,
          .tw-industry-card {
            padding: 24px;
          }

          .tw-cta {
            padding: 45px 20px;
          }
        }
      `})]})}var Ce=[[`shield`,`Consistent document preparation`,`Carry the same loan information across supported documents, reducing repetitive entry and helping your team review a consistent package.`],[`sliders`,`Flexible financing terms`,`Prepare supported interest-only loans with negotiated rates, payment tiers, prepaid interest and deferred interest where appropriate.`],[`file`,`State-specific packages`,`Generate California and Florida loan documents, including applicable notes, security instruments and supporting disclosures.`]];function we({type:e}){return(0,b.jsx)(`svg`,{viewBox:`0 0 48 48`,width:`40`,height:`40`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.3`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:{shield:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`path`,{d:`M24 7 39 13v12c0 9-8 15-15 19C17 40 9 34 9 25V13Z`}),(0,b.jsx)(`path`,{d:`m17 25 5 5 10-11`})]}),sliders:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`path`,{d:`M8 13h32M8 24h32M8 35h32`}),(0,b.jsx)(`circle`,{cx:`18`,cy:`13`,r:`4`,fill:`white`}),(0,b.jsx)(`circle`,{cx:`31`,cy:`24`,r:`4`,fill:`white`}),(0,b.jsx)(`circle`,{cx:`21`,cy:`35`,r:`4`,fill:`white`})]}),file:(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(`path`,{d:`M13 5h15l9 9v29H13Z M28 5v10h9M19 23h12M19 30h12M19 37h8`})})}[e]})}function Te({showHeader:e=!0}){return(0,_.useEffect)(()=>{let e=document.title;return document.title=`Private Lending Loan Documents | ZapDocs`,()=>{document.title=e}},[]),(0,b.jsxs)(b.Fragment,{children:[e&&(0,b.jsx)(C,{}),(0,b.jsxs)(`main`,{className:`zpl`,children:[(0,b.jsx)(`style`,{children:`
      .zpl{font-family:Inter,system-ui,sans-serif;color:#090e36;background:white;line-height:1.55;text-align:left;overflow:hidden}.zpl *{box-sizing:border-box}.zpl h1,.zpl h2,.zpl h3,.zpl p{margin:0}.zpl a{text-decoration:none}.zpl .wrap{max-width:1250px;margin:auto;padding:0 32px}.zpl .eyebrow{font-size:13px;font-weight:800;letter-spacing:.14em;color:#315cff;text-transform:uppercase;margin-bottom:20px}.zpl h1{font-size:clamp(42px,5.2vw,76px);letter-spacing:-.055em;line-height:1.05;font-weight:780}.zpl h2{font-size:clamp(30px,3.5vw,48px);letter-spacing:-.045em;line-height:1.16;font-weight:750}.zpl p{color:#505b76;font-size:16px}.zpl .btn{display:inline-flex;align-items:center;justify-content:center;border-radius:100px;background:#36d991;color:#090e36;font-weight:750;padding:15px 27px;min-height:52px}.zpl .btn:hover{background:#25c982}.zpl a:focus-visible{outline:3px solid #315cff;outline-offset:4px}.zpl .hero{background:#eaf0f6;position:relative}.zpl .hero-grid{display:grid;grid-template-columns:1fr 1fr;align-items:center;min-height:530px;gap:40px}.zpl .hero-copy{padding:68px 0;position:relative;z-index:2}.zpl .hero-copy p{font-size:18px;max-width:530px;margin:23px 0 29px}.zpl .actions{display:flex;flex-wrap:wrap;gap:22px;align-items:center}.zpl .textlink{font-weight:700;color:#315cff}.zpl .art{position:relative;min-height:530px;display:grid;place-items:center;isolation:isolate}.zpl .art:before{content:'';position:absolute;inset:0 -100vw 0 -50px;background:#c9f1e5;clip-path:polygon(95px 0,100% 0,100% 100%,0 100%,95px 54%,0 0);z-index:-3}.zpl .art:after{content:'';position:absolute;width:290px;height:290px;right:-90px;top:-35px;background:#11c9d6;transform:rotate(30deg);border-radius:30px;z-index:-2}.zpl .shape{position:absolute;width:220px;height:220px;bottom:-26px;left:5px;border-radius:28px;background:#315cff;transform:rotate(35deg);z-index:-1}.zpl .mock{width:min(100%,490px);background:white;border:1px solid #dce3ee;border-radius:20px;box-shadow:0 26px 70px #142b5040;overflow:hidden;transform:rotate(-2deg)}.zpl .mock-top{background:#f6f8fb;padding:14px 18px;font-size:12px;color:#64748b;border-bottom:1px solid #e4e9f0;display:flex;justify-content:space-between}.zpl .mock-body{padding:25px}.zpl .mock-body h3{font-size:22px;margin-bottom:6px}.zpl .mock-body p{font-size:12px}.zpl .mock-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:20px 0}.zpl .mock-field{border:1px solid #e0e6ee;border-radius:9px;padding:12px}.zpl .mock-field small{display:block;color:#64748b;font-size:10px}.zpl .mock-field strong{font-size:17px}.zpl .mock-doc{display:flex;justify-content:space-between;gap:10px;border-top:1px solid #e5e9ef;padding:12px 0;font-size:12px}.zpl .mock-doc span{color:#168354}.zpl .mock-button{background:#315cff;color:white;text-align:center;font-weight:700;padding:12px;border-radius:8px;margin-top:9px;font-size:13px}.zpl .section{padding:86px 0}.zpl .section-intro{max-width:880px}.zpl .section-intro p{margin-top:18px}.zpl .benefits{display:grid;grid-template-columns:repeat(3,1fr);gap:38px;margin-top:38px}.zpl .benefit-icon{width:62px;height:62px;display:grid;place-items:center;border-radius:14px;color:#315cff;background:#eaf0ff;margin-bottom:20px}.zpl .benefit:nth-child(2) .benefit-icon{color:#008b9a;background:#e0f9fa}.zpl .benefit:nth-child(3) .benefit-icon{color:#9548d7;background:#f4e8ff}.zpl .benefit h3{font-size:21px;letter-spacing:-.025em;margin-bottom:12px}.zpl .soft{background:#f2f5fa}.zpl .split{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:75px}.zpl .split p{margin:20px 0}.zpl .doc-stack{background:#0b1745;border-radius:24px;padding:35px;position:relative;overflow:hidden}.zpl .doc-stack:before{content:'';position:absolute;right:-65px;top:-70px;width:220px;height:220px;background:#315cff;border-radius:40px;transform:rotate(30deg)}.zpl .doc-item{position:relative;background:white;border-radius:12px;padding:18px;margin:12px 0;display:flex;gap:14px;align-items:center;box-shadow:0 8px 25px #0002}.zpl .doc-item svg{color:#315cff;width:30px;height:30px;flex:none}.zpl .doc-item small{display:block;color:#64748b}.zpl .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:35px}.zpl .step{border-top:2px solid #dce4f1;padding-top:20px}.zpl .step b{color:#315cff;font-size:13px}.zpl .step h3{margin:12px 0 8px;font-size:20px}.zpl .final{background:#0b1745;color:white;padding:65px 0}.zpl .final .wrap{display:flex;justify-content:space-between;align-items:center;gap:28px}.zpl .final p{color:#d0d9ee;margin-top:14px}.zpl .final .btn{flex:none}.zpl footer{padding:24px 0;font-size:13px;color:#63708a}.zpl footer a{color:#315cff;margin-left:16px}.zpl .legal{font-size:13px;margin-top:30px;color:#64748b}
      @media(max-width:850px){.zpl .hero-grid,.zpl .split{grid-template-columns:1fr;gap:20px}.zpl .hero-copy{padding:48px 0 0}.zpl .art{min-height:450px}.zpl .benefits,.zpl .steps{grid-template-columns:1fr 1fr}.zpl .section{padding:58px 0}.zpl .final .wrap{align-items:flex-start;flex-direction:column}}@media(max-width:540px){.zpl .wrap{padding:0 20px}.zpl .benefits,.zpl .steps{grid-template-columns:1fr}.zpl .mock-body{padding:17px}.zpl .art{min-height:410px}.zpl .doc-stack{padding:18px}.zpl .mock-field strong{font-size:14px}}
    `}),(0,b.jsx)(`section`,{className:`hero`,children:(0,b.jsxs)(`div`,{className:`wrap hero-grid`,children:[(0,b.jsxs)(`div`,{className:`hero-copy`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`Solutions / Private lending`}),(0,b.jsx)(`h1`,{children:`Built for private lenders.`}),(0,b.jsx)(`p`,{children:`Prepare state-specific closing documents for collateral-backed loans without rebuilding the same package for every transaction. Bring your loan terms, borrower details and lender information into one repeatable workflow.`}),(0,b.jsxs)(`div`,{className:`actions`,children:[(0,b.jsx)(`a`,{className:`btn`,href:`/demo`,children:`Book a Demo →`}),(0,b.jsx)(`a`,{className:`textlink`,href:`/pricing`,children:`Explore pricing →`})]})]}),(0,b.jsxs)(`div`,{className:`art`,children:[(0,b.jsx)(`div`,{className:`shape`}),(0,b.jsxs)(`div`,{className:`mock`,"aria-label":`Illustrative loan document workspace`,children:[(0,b.jsxs)(`div`,{className:`mock-top`,children:[(0,b.jsx)(`span`,{children:`● ● ● \xA0 ZapDocs / Loan workspace`}),(0,b.jsx)(`span`,{children:`Sample`})]}),(0,b.jsxs)(`div`,{className:`mock-body`,children:[(0,b.jsx)(`h3`,{children:`Investment property loan`}),(0,b.jsx)(`p`,{children:`Illustrative transaction · California`}),(0,b.jsx)(`div`,{className:`mock-grid`,children:[[`Loan amount`,`$450,000`],[`Interest rate`,`10.50%`],[`Loan term`,`12 months`],[`Lien position`,`First`]].map(([e,t])=>(0,b.jsxs)(`div`,{className:`mock-field`,children:[(0,b.jsx)(`small`,{children:e}),(0,b.jsx)(`strong`,{children:t})]},e))}),[`Promissory note`,`Deed of trust`,`Supporting documents`].map(e=>(0,b.jsxs)(`div`,{className:`mock-doc`,children:[e,(0,b.jsx)(`span`,{children:`✓ Package item`})]},e)),(0,b.jsx)(`div`,{className:`mock-button`,children:`Generate loan documents`})]})]})]})]})}),(0,b.jsx)(`section`,{className:`section`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsxs)(`div`,{className:`section-intro`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`Designed around your workflow`}),(0,b.jsx)(`h2`,{children:`Spend less time preparing documents. More time working on your loans.`}),(0,b.jsx)(`p`,{children:`ZapDocs brings repeatable document preparation to private money lenders, hard money lenders and mortgage brokers.`})]}),(0,b.jsx)(`div`,{className:`benefits`,children:Ce.map(([e,t,n])=>(0,b.jsxs)(`article`,{className:`benefit`,children:[(0,b.jsx)(`div`,{className:`benefit-icon`,children:(0,b.jsx)(we,{type:e})}),(0,b.jsx)(`h3`,{children:t}),(0,b.jsx)(`p`,{children:n})]},t))})]})}),(0,b.jsx)(`section`,{className:`section soft`,children:(0,b.jsxs)(`div`,{className:`wrap split`,children:[(0,b.jsx)(`div`,{className:`doc-stack`,children:[[`Promissory note`,`Financing terms and payment schedule`],[`Mortgage / Deed of trust`,`State-specific security instrument`],[`Lender disclosures`,`Where applicable`],[`Servicing agreement`,`Where applicable`]].map(([e,t])=>(0,b.jsxs)(`div`,{className:`doc-item`,children:[(0,b.jsx)(we,{type:`file`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:e}),(0,b.jsx)(`small`,{children:t})]})]},e))}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`One loan. One workflow.`}),(0,b.jsx)(`h2`,{children:`From negotiated terms to a closing package.`}),(0,b.jsx)(`p`,{children:`Enter the collateral, borrower vesting, lender details and financing terms. Prepare supported documents for California or Florida and download editable Word files for review by your closing team.`}),(0,b.jsx)(`p`,{children:`Support for payment tiers and lender-specific information helps accommodate the structures common in private lending.`}),(0,b.jsx)(`a`,{className:`textlink`,href:`/demo`,children:`See the platform in action →`})]})]})}),(0,b.jsx)(`section`,{className:`section`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`How it works`}),(0,b.jsx)(`h2`,{children:`A simpler document preparation process.`}),(0,b.jsx)(`div`,{className:`steps`,children:[[`Enter collateral`,`Add property and borrower information.`],[`Set financing terms`,`Enter rates, maturity and payment structure.`],[`Generate documents`,`Prepare your supported state-specific package.`],[`Review before funding`,`Confirm legal terms and closing requirements with your professionals.`]].map(([e,t],n)=>(0,b.jsxs)(`article`,{className:`step`,children:[(0,b.jsxs)(`b`,{children:[`0`,n+1]}),(0,b.jsx)(`h3`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))}),(0,b.jsx)(`p`,{className:`legal`,children:`ZapDocs is document preparation software, not a lender, underwriter or law firm. Generated documents require independent review for suitability and legal compliance before use.`})]})}),(0,b.jsx)(`section`,{className:`final`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h2`,{children:`See what ZapDocs can do for your lending business.`}),(0,b.jsx)(`p`,{children:`Book a personalized walkthrough of the loan document workflow.`})]}),(0,b.jsx)(`a`,{className:`btn`,href:`/demo`,children:`Book a Demo →`})]})}),(0,b.jsx)(`footer`,{children:(0,b.jsxs)(`div`,{className:`wrap`,children:[`© `,new Date().getFullYear(),` ZapDocs `,(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy`}),(0,b.jsx)(`a`,{href:`/terms`,children:`Terms`})]})})]})]})}var Ee={label:`Loan origination`,headline:`From agreed terms to closing documents.`,lead:`Give originators a repeatable way to capture negotiated private loan terms, organize party information and prepare documents for the closing team.`,accent:`#c9e4ff`,shape:`#11c9d6`,sample:`Originator workspace`,sub:`Illustrative transaction · Florida`,fields:[[`Loan amount`,`$600,000`],[`Interest rate`,`10.25%`],[`Term`,`12 months`],[`Commission`,`2.00%`]],items:[`Borrower and lender details`,`Payment schedule`,`Closing package`],benefitTitle:`Keep your origination workflow moving.`,benefits:[[`sliders`,`Capture negotiated terms`,`Record the agreed loan amount, interest rate, term, commission and payment schedule in one structured record.`],[`shield`,`Keep party details consistent`,`Use legal borrower, lender and brokerage names, signer capacity and addresses throughout supported documents.`],[`file`,`Prepare supporting documents`,`Generate available agreements and disclosures according to the selected state and transaction structure.`]],splitTitle:`A cleaner handoff to your closing team.`,splitCopy:`Prepare editable documents from your loan record and coordinate review with escrow, title and counsel before closing.`,docs:[[`Promissory note`,`Agreed financing terms`],[`Mortgage / deed of trust`,`State-specific collateral document`],[`Supporting agreements`,`Where applicable`],[`Lender disclosures`,`Where applicable`]],steps:[[`Capture terms`,`Record agreed financing terms.`],[`Verify parties`,`Confirm legal names and signing authority.`],[`Generate`,`Prepare supported documents.`],[`Review handoff`,`Coordinate review with escrow, title and counsel.`]],legal:`ZapDocs does not replace licensing, disclosure, underwriting or legal obligations.`,cta:`See how ZapDocs fits your origination workflow.`};function De({type:e}){return(0,b.jsx)(`svg`,{viewBox:`0 0 48 48`,width:`40`,height:`40`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.3`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:{shield:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`path`,{d:`M24 7 39 13v12c0 9-8 15-15 19C17 40 9 34 9 25V13Z`}),(0,b.jsx)(`path`,{d:`m17 25 5 5 10-11`})]}),sliders:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`path`,{d:`M8 13h32M8 24h32M8 35h32`}),(0,b.jsx)(`circle`,{cx:`18`,cy:`13`,r:`4`,fill:`white`}),(0,b.jsx)(`circle`,{cx:`31`,cy:`24`,r:`4`,fill:`white`}),(0,b.jsx)(`circle`,{cx:`21`,cy:`35`,r:`4`,fill:`white`})]}),file:(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(`path`,{d:`M13 5h15l9 9v29H13Z M28 5v10h9M19 23h12M19 30h12M19 37h8`})})}[e]})}function Oe({showHeader:e=!0}){return(0,_.useEffect)(()=>{let e=document.title;return document.title=Ee.label+` | ZapDocs`,()=>{document.title=e}},[]),(0,b.jsxs)(b.Fragment,{children:[e&&(0,b.jsx)(C,{}),(0,b.jsxs)(`main`,{className:`zpl`,children:[(0,b.jsx)(`style`,{children:`
      .zpl{font-family:Inter,system-ui,sans-serif;color:#090e36;background:white;line-height:1.55;text-align:left;overflow:hidden}.zpl *{box-sizing:border-box}.zpl h1,.zpl h2,.zpl h3,.zpl p{margin:0}.zpl a{text-decoration:none}.zpl .wrap{max-width:1250px;margin:auto;padding:0 32px}.zpl .eyebrow{font-size:13px;font-weight:800;letter-spacing:.14em;color:#315cff;text-transform:uppercase;margin-bottom:20px}.zpl h1{font-size:clamp(42px,5.2vw,76px);letter-spacing:-.055em;line-height:1.05;font-weight:780}.zpl h2{font-size:clamp(30px,3.5vw,48px);letter-spacing:-.045em;line-height:1.16;font-weight:750}.zpl p{color:#505b76;font-size:16px}.zpl .btn{display:inline-flex;align-items:center;justify-content:center;border-radius:100px;background:#36d991;color:#090e36;font-weight:750;padding:15px 27px;min-height:52px}.zpl .btn:hover{background:#25c982}.zpl a:focus-visible{outline:3px solid #315cff;outline-offset:4px}.zpl .hero{background:#eaf0f6;position:relative}.zpl .hero-grid{display:grid;grid-template-columns:1fr 1fr;align-items:center;min-height:530px;gap:40px}.zpl .hero-copy{padding:68px 0;position:relative;z-index:2}.zpl .hero-copy p{font-size:18px;max-width:530px;margin:23px 0 29px}.zpl .actions{display:flex;flex-wrap:wrap;gap:22px;align-items:center}.zpl .textlink{font-weight:700;color:#315cff}.zpl .art{position:relative;min-height:530px;display:grid;place-items:center;isolation:isolate}.zpl .art:before{content:'';position:absolute;inset:0 -100vw 0 -50px;background:#c9e4ff;clip-path:polygon(95px 0,100% 0,100% 100%,0 100%,95px 54%,0 0);z-index:-3}.zpl .art:after{content:'';position:absolute;width:290px;height:290px;right:-90px;top:-35px;background:#11c9d6;transform:rotate(30deg);border-radius:30px;z-index:-2}.zpl .shape{position:absolute;width:220px;height:220px;bottom:-26px;left:5px;border-radius:28px;background:#315cff;transform:rotate(35deg);z-index:-1}.zpl .mock{width:min(100%,490px);background:white;border:1px solid #dce3ee;border-radius:20px;box-shadow:0 26px 70px #142b5040;overflow:hidden;transform:rotate(-2deg)}.zpl .mock-top{background:#f6f8fb;padding:14px 18px;font-size:12px;color:#64748b;border-bottom:1px solid #e4e9f0;display:flex;justify-content:space-between}.zpl .mock-body{padding:25px}.zpl .mock-body h3{font-size:22px;margin-bottom:6px}.zpl .mock-body p{font-size:12px}.zpl .mock-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:20px 0}.zpl .mock-field{border:1px solid #e0e6ee;border-radius:9px;padding:12px}.zpl .mock-field small{display:block;color:#64748b;font-size:10px}.zpl .mock-field strong{font-size:17px}.zpl .mock-doc{display:flex;justify-content:space-between;gap:10px;border-top:1px solid #e5e9ef;padding:12px 0;font-size:12px}.zpl .mock-doc span{color:#168354}.zpl .mock-button{background:#315cff;color:white;text-align:center;font-weight:700;padding:12px;border-radius:8px;margin-top:9px;font-size:13px}.zpl .section{padding:86px 0}.zpl .section-intro{max-width:880px}.zpl .section-intro p{margin-top:18px}.zpl .benefits{display:grid;grid-template-columns:repeat(3,1fr);gap:38px;margin-top:38px}.zpl .benefit-icon{width:62px;height:62px;display:grid;place-items:center;border-radius:14px;color:#315cff;background:#eaf0ff;margin-bottom:20px}.zpl .benefit:nth-child(2) .benefit-icon{color:#008b9a;background:#e0f9fa}.zpl .benefit:nth-child(3) .benefit-icon{color:#9548d7;background:#f4e8ff}.zpl .benefit h3{font-size:21px;letter-spacing:-.025em;margin-bottom:12px}.zpl .soft{background:#f2f5fa}.zpl .split{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:75px}.zpl .split p{margin:20px 0}.zpl .doc-stack{background:#0b1745;border-radius:24px;padding:35px;position:relative;overflow:hidden}.zpl .doc-stack:before{content:'';position:absolute;right:-65px;top:-70px;width:220px;height:220px;background:#315cff;border-radius:40px;transform:rotate(30deg)}.zpl .doc-item{position:relative;background:white;border-radius:12px;padding:18px;margin:12px 0;display:flex;gap:14px;align-items:center;box-shadow:0 8px 25px #0002}.zpl .doc-item svg{color:#315cff;width:30px;height:30px;flex:none}.zpl .doc-item small{display:block;color:#64748b}.zpl .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:35px}.zpl .step{border-top:2px solid #dce4f1;padding-top:20px}.zpl .step b{color:#315cff;font-size:13px}.zpl .step h3{margin:12px 0 8px;font-size:20px}.zpl .final{background:#0b1745;color:white;padding:65px 0}.zpl .final .wrap{display:flex;justify-content:space-between;align-items:center;gap:28px}.zpl .final p{color:#d0d9ee;margin-top:14px}.zpl .final .btn{flex:none}.zpl footer{padding:24px 0;font-size:13px;color:#63708a}.zpl footer a{color:#315cff;margin-left:16px}.zpl .legal{font-size:13px;margin-top:30px;color:#64748b}
      @media(max-width:850px){.zpl .hero-grid,.zpl .split{grid-template-columns:1fr;gap:20px}.zpl .hero-copy{padding:48px 0 0}.zpl .art{min-height:450px}.zpl .benefits,.zpl .steps{grid-template-columns:1fr 1fr}.zpl .section{padding:58px 0}.zpl .final .wrap{align-items:flex-start;flex-direction:column}}@media(max-width:540px){.zpl .wrap{padding:0 20px}.zpl .benefits,.zpl .steps{grid-template-columns:1fr}.zpl .mock-body{padding:17px}.zpl .art{min-height:410px}.zpl .doc-stack{padding:18px}.zpl .mock-field strong{font-size:14px}}
    `}),(0,b.jsx)(`section`,{className:`hero`,children:(0,b.jsxs)(`div`,{className:`wrap hero-grid`,children:[(0,b.jsxs)(`div`,{className:`hero-copy`,children:[(0,b.jsxs)(`div`,{className:`eyebrow`,children:[`Solutions / `,Ee.label]}),(0,b.jsx)(`h1`,{children:Ee.headline}),(0,b.jsx)(`p`,{children:Ee.lead}),(0,b.jsxs)(`div`,{className:`actions`,children:[(0,b.jsx)(`a`,{className:`btn`,href:`/demo`,children:`Book a Demo →`}),(0,b.jsx)(`a`,{className:`textlink`,href:`/pricing`,children:`Explore pricing →`})]})]}),(0,b.jsxs)(`div`,{className:`art`,children:[(0,b.jsx)(`div`,{className:`shape`}),(0,b.jsxs)(`div`,{className:`mock`,"aria-label":`Illustrative workspace`,children:[(0,b.jsxs)(`div`,{className:`mock-top`,children:[(0,b.jsxs)(`span`,{children:[`● ● ● \xA0 ZapDocs / `,Ee.label]}),(0,b.jsx)(`span`,{children:`Sample`})]}),(0,b.jsxs)(`div`,{className:`mock-body`,children:[(0,b.jsx)(`h3`,{children:Ee.sample}),(0,b.jsx)(`p`,{children:Ee.sub}),(0,b.jsx)(`div`,{className:`mock-grid`,children:Ee.fields.map(([e,t])=>(0,b.jsxs)(`div`,{className:`mock-field`,children:[(0,b.jsx)(`small`,{children:e}),(0,b.jsx)(`strong`,{children:t})]},e))}),Ee.items.map(e=>(0,b.jsxs)(`div`,{className:`mock-doc`,children:[e,(0,b.jsx)(`span`,{children:`✓ Review item`})]},e)),(0,b.jsx)(`div`,{className:`mock-button`,children:`Prepare documents`})]})]})]})]})}),(0,b.jsx)(`section`,{className:`section`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsxs)(`div`,{className:`section-intro`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`Designed around your workflow`}),(0,b.jsx)(`h2`,{children:Ee.benefitTitle})]}),(0,b.jsx)(`div`,{className:`benefits`,children:Ee.benefits.map(([e,t,n])=>(0,b.jsxs)(`article`,{className:`benefit`,children:[(0,b.jsx)(`div`,{className:`benefit-icon`,children:(0,b.jsx)(De,{type:e})}),(0,b.jsx)(`h3`,{children:t}),(0,b.jsx)(`p`,{children:n})]},t))})]})}),(0,b.jsx)(`section`,{className:`section soft`,children:(0,b.jsxs)(`div`,{className:`wrap split`,children:[(0,b.jsx)(`div`,{className:`doc-stack`,children:Ee.docs.map(([e,t])=>(0,b.jsxs)(`div`,{className:`doc-item`,children:[(0,b.jsx)(De,{type:`file`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:e}),(0,b.jsx)(`small`,{children:t})]})]},e))}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`One loan. One workflow.`}),(0,b.jsx)(`h2`,{children:Ee.splitTitle}),(0,b.jsx)(`p`,{children:Ee.splitCopy}),(0,b.jsx)(`a`,{className:`textlink`,href:`/demo`,children:`See the platform in action →`})]})]})}),(0,b.jsx)(`section`,{className:`section`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`How it works`}),(0,b.jsx)(`h2`,{children:`A simpler document preparation process.`}),(0,b.jsx)(`div`,{className:`steps`,children:Ee.steps.map(([e,t],n)=>(0,b.jsxs)(`article`,{className:`step`,children:[(0,b.jsxs)(`b`,{children:[`0`,n+1]}),(0,b.jsx)(`h3`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))}),(0,b.jsxs)(`p`,{className:`legal`,children:[Ee.legal,` Generated documents require independent review before use.`]})]})}),(0,b.jsx)(`section`,{className:`final`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h2`,{children:Ee.cta}),(0,b.jsx)(`p`,{children:`Book a personalized walkthrough of the loan document workflow.`})]}),(0,b.jsx)(`a`,{className:`btn`,href:`/demo`,children:`Book a Demo →`})]})}),(0,b.jsx)(`footer`,{children:(0,b.jsxs)(`div`,{className:`wrap`,children:[`© `,new Date().getFullYear(),` ZapDocs `,(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy`}),(0,b.jsx)(`a`,{href:`/terms`,children:`Terms`})]})})]})]})}var ke={label:`Servicing teams`,headline:`A smoother transition from closing to servicing.`,lead:`Organize payment schedules, lender details and servicing instructions before the first payment is due. Give the designated servicer a reviewed documentation package.`,accent:`#c9f1e5`,shape:`#00b7c8`,sample:`Servicing handoff`,sub:`Illustrative transaction · California`,fields:[[`Monthly payment`,`$4,500`],[`First payment`,`02/01/2027`],[`Maturity`,`01/01/2028`],[`Prepaid period`,`1 month`]],items:[`Payment schedule`,`Servicer information`,`Lender payment details`],benefitTitle:`Prepare for servicing before the loan closes.`,benefits:[[`sliders`,`Payment dates and amounts`,`Review first payment, maturity, monthly installments and any prepaid period.`],[`file`,`Servicing agreements`,`Enter the designated servicer, address and applicable terms, then generate the standalone agreement where available.`],[`shield`,`Lender payment information`,`Record ownership share and lender-specific yield or payment amounts where applicable. Borrower and lender payments may differ.`]],splitTitle:`Give the designated servicer a clear starting point.`,splitCopy:`Review the loan schedule and supporting documentation, then provide the reviewed documents to your servicing team through secure channels.`,docs:[[`Payment schedule`,`Installments and maturity`],[`Servicing agreement`,`Designated servicing terms`],[`Lender payment details`,`Ownership and applicable amounts`],[`Closing documents`,`For operational handoff`]],steps:[[`Confirm schedule`,`Review dates, amounts and prepaid periods.`],[`Enter servicer`,`Confirm designated servicer information.`],[`Generate agreement`,`Prepare applicable standalone documents.`],[`Handoff`,`Share reviewed documents securely.`]],legal:`ZapDocs is document preparation software, not a payment processing, collection or live loan servicing platform.`,cta:`See how ZapDocs supports your servicing handoff.`};function Ae({type:e}){return(0,b.jsx)(`svg`,{viewBox:`0 0 48 48`,width:`40`,height:`40`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.3`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:{shield:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`path`,{d:`M24 7 39 13v12c0 9-8 15-15 19C17 40 9 34 9 25V13Z`}),(0,b.jsx)(`path`,{d:`m17 25 5 5 10-11`})]}),sliders:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`path`,{d:`M8 13h32M8 24h32M8 35h32`}),(0,b.jsx)(`circle`,{cx:`18`,cy:`13`,r:`4`,fill:`white`}),(0,b.jsx)(`circle`,{cx:`31`,cy:`24`,r:`4`,fill:`white`}),(0,b.jsx)(`circle`,{cx:`21`,cy:`35`,r:`4`,fill:`white`})]}),file:(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(`path`,{d:`M13 5h15l9 9v29H13Z M28 5v10h9M19 23h12M19 30h12M19 37h8`})})}[e]})}function je({showHeader:e=!0}){return(0,_.useEffect)(()=>{let e=document.title;return document.title=ke.label+` | ZapDocs`,()=>{document.title=e}},[]),(0,b.jsxs)(b.Fragment,{children:[e&&(0,b.jsx)(C,{}),(0,b.jsxs)(`main`,{className:`zpl`,children:[(0,b.jsx)(`style`,{children:`
      .zpl{font-family:Inter,system-ui,sans-serif;color:#090e36;background:white;line-height:1.55;text-align:left;overflow:hidden}.zpl *{box-sizing:border-box}.zpl h1,.zpl h2,.zpl h3,.zpl p{margin:0}.zpl a{text-decoration:none}.zpl .wrap{max-width:1250px;margin:auto;padding:0 32px}.zpl .eyebrow{font-size:13px;font-weight:800;letter-spacing:.14em;color:#315cff;text-transform:uppercase;margin-bottom:20px}.zpl h1{font-size:clamp(42px,5.2vw,76px);letter-spacing:-.055em;line-height:1.05;font-weight:780}.zpl h2{font-size:clamp(30px,3.5vw,48px);letter-spacing:-.045em;line-height:1.16;font-weight:750}.zpl p{color:#505b76;font-size:16px}.zpl .btn{display:inline-flex;align-items:center;justify-content:center;border-radius:100px;background:#36d991;color:#090e36;font-weight:750;padding:15px 27px;min-height:52px}.zpl .btn:hover{background:#25c982}.zpl a:focus-visible{outline:3px solid #315cff;outline-offset:4px}.zpl .hero{background:#eaf0f6;position:relative}.zpl .hero-grid{display:grid;grid-template-columns:1fr 1fr;align-items:center;min-height:530px;gap:40px}.zpl .hero-copy{padding:68px 0;position:relative;z-index:2}.zpl .hero-copy p{font-size:18px;max-width:530px;margin:23px 0 29px}.zpl .actions{display:flex;flex-wrap:wrap;gap:22px;align-items:center}.zpl .textlink{font-weight:700;color:#315cff}.zpl .art{position:relative;min-height:530px;display:grid;place-items:center;isolation:isolate}.zpl .art:before{content:'';position:absolute;inset:0 -100vw 0 -50px;background:#c9f1e5;clip-path:polygon(95px 0,100% 0,100% 100%,0 100%,95px 54%,0 0);z-index:-3}.zpl .art:after{content:'';position:absolute;width:290px;height:290px;right:-90px;top:-35px;background:#00b7c8;transform:rotate(30deg);border-radius:30px;z-index:-2}.zpl .shape{position:absolute;width:220px;height:220px;bottom:-26px;left:5px;border-radius:28px;background:#315cff;transform:rotate(35deg);z-index:-1}.zpl .mock{width:min(100%,490px);background:white;border:1px solid #dce3ee;border-radius:20px;box-shadow:0 26px 70px #142b5040;overflow:hidden;transform:rotate(-2deg)}.zpl .mock-top{background:#f6f8fb;padding:14px 18px;font-size:12px;color:#64748b;border-bottom:1px solid #e4e9f0;display:flex;justify-content:space-between}.zpl .mock-body{padding:25px}.zpl .mock-body h3{font-size:22px;margin-bottom:6px}.zpl .mock-body p{font-size:12px}.zpl .mock-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:20px 0}.zpl .mock-field{border:1px solid #e0e6ee;border-radius:9px;padding:12px}.zpl .mock-field small{display:block;color:#64748b;font-size:10px}.zpl .mock-field strong{font-size:17px}.zpl .mock-doc{display:flex;justify-content:space-between;gap:10px;border-top:1px solid #e5e9ef;padding:12px 0;font-size:12px}.zpl .mock-doc span{color:#168354}.zpl .mock-button{background:#315cff;color:white;text-align:center;font-weight:700;padding:12px;border-radius:8px;margin-top:9px;font-size:13px}.zpl .section{padding:86px 0}.zpl .section-intro{max-width:880px}.zpl .section-intro p{margin-top:18px}.zpl .benefits{display:grid;grid-template-columns:repeat(3,1fr);gap:38px;margin-top:38px}.zpl .benefit-icon{width:62px;height:62px;display:grid;place-items:center;border-radius:14px;color:#315cff;background:#eaf0ff;margin-bottom:20px}.zpl .benefit:nth-child(2) .benefit-icon{color:#008b9a;background:#e0f9fa}.zpl .benefit:nth-child(3) .benefit-icon{color:#9548d7;background:#f4e8ff}.zpl .benefit h3{font-size:21px;letter-spacing:-.025em;margin-bottom:12px}.zpl .soft{background:#f2f5fa}.zpl .split{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:75px}.zpl .split p{margin:20px 0}.zpl .doc-stack{background:#0b1745;border-radius:24px;padding:35px;position:relative;overflow:hidden}.zpl .doc-stack:before{content:'';position:absolute;right:-65px;top:-70px;width:220px;height:220px;background:#315cff;border-radius:40px;transform:rotate(30deg)}.zpl .doc-item{position:relative;background:white;border-radius:12px;padding:18px;margin:12px 0;display:flex;gap:14px;align-items:center;box-shadow:0 8px 25px #0002}.zpl .doc-item svg{color:#315cff;width:30px;height:30px;flex:none}.zpl .doc-item small{display:block;color:#64748b}.zpl .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:35px}.zpl .step{border-top:2px solid #dce4f1;padding-top:20px}.zpl .step b{color:#315cff;font-size:13px}.zpl .step h3{margin:12px 0 8px;font-size:20px}.zpl .final{background:#0b1745;color:white;padding:65px 0}.zpl .final .wrap{display:flex;justify-content:space-between;align-items:center;gap:28px}.zpl .final p{color:#d0d9ee;margin-top:14px}.zpl .final .btn{flex:none}.zpl footer{padding:24px 0;font-size:13px;color:#63708a}.zpl footer a{color:#315cff;margin-left:16px}.zpl .legal{font-size:13px;margin-top:30px;color:#64748b}
      @media(max-width:850px){.zpl .hero-grid,.zpl .split{grid-template-columns:1fr;gap:20px}.zpl .hero-copy{padding:48px 0 0}.zpl .art{min-height:450px}.zpl .benefits,.zpl .steps{grid-template-columns:1fr 1fr}.zpl .section{padding:58px 0}.zpl .final .wrap{align-items:flex-start;flex-direction:column}}@media(max-width:540px){.zpl .wrap{padding:0 20px}.zpl .benefits,.zpl .steps{grid-template-columns:1fr}.zpl .mock-body{padding:17px}.zpl .art{min-height:410px}.zpl .doc-stack{padding:18px}.zpl .mock-field strong{font-size:14px}}
    `}),(0,b.jsx)(`section`,{className:`hero`,children:(0,b.jsxs)(`div`,{className:`wrap hero-grid`,children:[(0,b.jsxs)(`div`,{className:`hero-copy`,children:[(0,b.jsxs)(`div`,{className:`eyebrow`,children:[`Solutions / `,ke.label]}),(0,b.jsx)(`h1`,{children:ke.headline}),(0,b.jsx)(`p`,{children:ke.lead}),(0,b.jsxs)(`div`,{className:`actions`,children:[(0,b.jsx)(`a`,{className:`btn`,href:`/demo`,children:`Book a Demo →`}),(0,b.jsx)(`a`,{className:`textlink`,href:`/pricing`,children:`Explore pricing →`})]})]}),(0,b.jsxs)(`div`,{className:`art`,children:[(0,b.jsx)(`div`,{className:`shape`}),(0,b.jsxs)(`div`,{className:`mock`,"aria-label":`Illustrative workspace`,children:[(0,b.jsxs)(`div`,{className:`mock-top`,children:[(0,b.jsxs)(`span`,{children:[`● ● ● \xA0 ZapDocs / `,ke.label]}),(0,b.jsx)(`span`,{children:`Sample`})]}),(0,b.jsxs)(`div`,{className:`mock-body`,children:[(0,b.jsx)(`h3`,{children:ke.sample}),(0,b.jsx)(`p`,{children:ke.sub}),(0,b.jsx)(`div`,{className:`mock-grid`,children:ke.fields.map(([e,t])=>(0,b.jsxs)(`div`,{className:`mock-field`,children:[(0,b.jsx)(`small`,{children:e}),(0,b.jsx)(`strong`,{children:t})]},e))}),ke.items.map(e=>(0,b.jsxs)(`div`,{className:`mock-doc`,children:[e,(0,b.jsx)(`span`,{children:`✓ Review item`})]},e)),(0,b.jsx)(`div`,{className:`mock-button`,children:`Prepare documents`})]})]})]})]})}),(0,b.jsx)(`section`,{className:`section`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsxs)(`div`,{className:`section-intro`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`Designed around your workflow`}),(0,b.jsx)(`h2`,{children:ke.benefitTitle})]}),(0,b.jsx)(`div`,{className:`benefits`,children:ke.benefits.map(([e,t,n])=>(0,b.jsxs)(`article`,{className:`benefit`,children:[(0,b.jsx)(`div`,{className:`benefit-icon`,children:(0,b.jsx)(Ae,{type:e})}),(0,b.jsx)(`h3`,{children:t}),(0,b.jsx)(`p`,{children:n})]},t))})]})}),(0,b.jsx)(`section`,{className:`section soft`,children:(0,b.jsxs)(`div`,{className:`wrap split`,children:[(0,b.jsx)(`div`,{className:`doc-stack`,children:ke.docs.map(([e,t])=>(0,b.jsxs)(`div`,{className:`doc-item`,children:[(0,b.jsx)(Ae,{type:`file`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:e}),(0,b.jsx)(`small`,{children:t})]})]},e))}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`One loan. One workflow.`}),(0,b.jsx)(`h2`,{children:ke.splitTitle}),(0,b.jsx)(`p`,{children:ke.splitCopy}),(0,b.jsx)(`a`,{className:`textlink`,href:`/demo`,children:`See the platform in action →`})]})]})}),(0,b.jsx)(`section`,{className:`section`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`How it works`}),(0,b.jsx)(`h2`,{children:`A simpler document preparation process.`}),(0,b.jsx)(`div`,{className:`steps`,children:ke.steps.map(([e,t],n)=>(0,b.jsxs)(`article`,{className:`step`,children:[(0,b.jsxs)(`b`,{children:[`0`,n+1]}),(0,b.jsx)(`h3`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))}),(0,b.jsxs)(`p`,{className:`legal`,children:[ke.legal,` Generated documents require independent review before use.`]})]})}),(0,b.jsx)(`section`,{className:`final`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h2`,{children:ke.cta}),(0,b.jsx)(`p`,{children:`Book a personalized walkthrough of the loan document workflow.`})]}),(0,b.jsx)(`a`,{className:`btn`,href:`/demo`,children:`Book a Demo →`})]})}),(0,b.jsx)(`footer`,{children:(0,b.jsxs)(`div`,{className:`wrap`,children:[`© `,new Date().getFullYear(),` ZapDocs `,(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy`}),(0,b.jsx)(`a`,{href:`/terms`,children:`Terms`})]})})]})]})}var Me={label:`Broker workflows`,headline:`Broker and investor paperwork, without the repetition.`,lead:`Bring brokerage details, negotiated loan terms and lender information together in one workflow for private lending document preparation.`,accent:`#e4ddff`,shape:`#a16cf0`,sample:`Brokerage workspace`,sub:`Illustrative transaction · California`,fields:[[`Loan amount`,`$350,000`],[`Commission`,`3.00%`],[`Lien position`,`Second`],[`Lender share`,`100%`]],items:[`Brokerage information`,`Lender disclosure`,`Servicing agreement`],benefitTitle:`Spend more time arranging loans, less time retyping details.`,benefits:[[`shield`,`Consistent brokerage information`,`Use brokerage profiles for legal names, addresses and applicable licensing details.`],[`sliders`,`Capture loan arrangements`,`Record commissions and negotiated terms and prepare applicable agreements to procure a lender.`],[`file`,`Investor disclosures`,`Enter lender ownership, payment and collateral information. Verify the required disclosure for the jurisdiction and loan type.`]],splitTitle:`Generate the documents your transaction calls for.`,splitCopy:`Prepare the borrower closing package or generate available servicing agreements and lender disclosures independently, according to the transaction structure.`,docs:[[`Agreement to procure lender`,`Where applicable`],[`Lender disclosure`,`Applicable investor information`],[`Servicing agreement`,`Standalone output where available`],[`Borrower closing package`,`State-specific documents`]],steps:[[`Enter broker details`,`Confirm brokerage and licensing information.`],[`Confirm terms`,`Record negotiated terms and commissions.`],[`Prepare disclosures`,`Select applicable supporting documents.`],[`Review package`,`Confirm requirements with your closing professionals.`]],legal:`ZapDocs does not replace broker licensing, disclosure obligations or independent legal review.`,cta:`See how ZapDocs fits your brokerage.`};function A({type:e}){return(0,b.jsx)(`svg`,{viewBox:`0 0 48 48`,width:`40`,height:`40`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.3`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:{shield:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`path`,{d:`M24 7 39 13v12c0 9-8 15-15 19C17 40 9 34 9 25V13Z`}),(0,b.jsx)(`path`,{d:`m17 25 5 5 10-11`})]}),sliders:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`path`,{d:`M8 13h32M8 24h32M8 35h32`}),(0,b.jsx)(`circle`,{cx:`18`,cy:`13`,r:`4`,fill:`white`}),(0,b.jsx)(`circle`,{cx:`31`,cy:`24`,r:`4`,fill:`white`}),(0,b.jsx)(`circle`,{cx:`21`,cy:`35`,r:`4`,fill:`white`})]}),file:(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(`path`,{d:`M13 5h15l9 9v29H13Z M28 5v10h9M19 23h12M19 30h12M19 37h8`})})}[e]})}function Ne({showHeader:e=!0}){return(0,_.useEffect)(()=>{let e=document.title;return document.title=Me.label+` | ZapDocs`,()=>{document.title=e}},[]),(0,b.jsxs)(b.Fragment,{children:[e&&(0,b.jsx)(C,{}),(0,b.jsxs)(`main`,{className:`zpl`,children:[(0,b.jsx)(`style`,{children:`
      .zpl{font-family:Inter,system-ui,sans-serif;color:#090e36;background:white;line-height:1.55;text-align:left;overflow:hidden}.zpl *{box-sizing:border-box}.zpl h1,.zpl h2,.zpl h3,.zpl p{margin:0}.zpl a{text-decoration:none}.zpl .wrap{max-width:1250px;margin:auto;padding:0 32px}.zpl .eyebrow{font-size:13px;font-weight:800;letter-spacing:.14em;color:#315cff;text-transform:uppercase;margin-bottom:20px}.zpl h1{font-size:clamp(42px,5.2vw,76px);letter-spacing:-.055em;line-height:1.05;font-weight:780}.zpl h2{font-size:clamp(30px,3.5vw,48px);letter-spacing:-.045em;line-height:1.16;font-weight:750}.zpl p{color:#505b76;font-size:16px}.zpl .btn{display:inline-flex;align-items:center;justify-content:center;border-radius:100px;background:#36d991;color:#090e36;font-weight:750;padding:15px 27px;min-height:52px}.zpl .btn:hover{background:#25c982}.zpl a:focus-visible{outline:3px solid #315cff;outline-offset:4px}.zpl .hero{background:#eaf0f6;position:relative}.zpl .hero-grid{display:grid;grid-template-columns:1fr 1fr;align-items:center;min-height:530px;gap:40px}.zpl .hero-copy{padding:68px 0;position:relative;z-index:2}.zpl .hero-copy p{font-size:18px;max-width:530px;margin:23px 0 29px}.zpl .actions{display:flex;flex-wrap:wrap;gap:22px;align-items:center}.zpl .textlink{font-weight:700;color:#315cff}.zpl .art{position:relative;min-height:530px;display:grid;place-items:center;isolation:isolate}.zpl .art:before{content:'';position:absolute;inset:0 -100vw 0 -50px;background:#e4ddff;clip-path:polygon(95px 0,100% 0,100% 100%,0 100%,95px 54%,0 0);z-index:-3}.zpl .art:after{content:'';position:absolute;width:290px;height:290px;right:-90px;top:-35px;background:#a16cf0;transform:rotate(30deg);border-radius:30px;z-index:-2}.zpl .shape{position:absolute;width:220px;height:220px;bottom:-26px;left:5px;border-radius:28px;background:#315cff;transform:rotate(35deg);z-index:-1}.zpl .mock{width:min(100%,490px);background:white;border:1px solid #dce3ee;border-radius:20px;box-shadow:0 26px 70px #142b5040;overflow:hidden;transform:rotate(-2deg)}.zpl .mock-top{background:#f6f8fb;padding:14px 18px;font-size:12px;color:#64748b;border-bottom:1px solid #e4e9f0;display:flex;justify-content:space-between}.zpl .mock-body{padding:25px}.zpl .mock-body h3{font-size:22px;margin-bottom:6px}.zpl .mock-body p{font-size:12px}.zpl .mock-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:20px 0}.zpl .mock-field{border:1px solid #e0e6ee;border-radius:9px;padding:12px}.zpl .mock-field small{display:block;color:#64748b;font-size:10px}.zpl .mock-field strong{font-size:17px}.zpl .mock-doc{display:flex;justify-content:space-between;gap:10px;border-top:1px solid #e5e9ef;padding:12px 0;font-size:12px}.zpl .mock-doc span{color:#168354}.zpl .mock-button{background:#315cff;color:white;text-align:center;font-weight:700;padding:12px;border-radius:8px;margin-top:9px;font-size:13px}.zpl .section{padding:86px 0}.zpl .section-intro{max-width:880px}.zpl .section-intro p{margin-top:18px}.zpl .benefits{display:grid;grid-template-columns:repeat(3,1fr);gap:38px;margin-top:38px}.zpl .benefit-icon{width:62px;height:62px;display:grid;place-items:center;border-radius:14px;color:#315cff;background:#eaf0ff;margin-bottom:20px}.zpl .benefit:nth-child(2) .benefit-icon{color:#008b9a;background:#e0f9fa}.zpl .benefit:nth-child(3) .benefit-icon{color:#9548d7;background:#f4e8ff}.zpl .benefit h3{font-size:21px;letter-spacing:-.025em;margin-bottom:12px}.zpl .soft{background:#f2f5fa}.zpl .split{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:75px}.zpl .split p{margin:20px 0}.zpl .doc-stack{background:#0b1745;border-radius:24px;padding:35px;position:relative;overflow:hidden}.zpl .doc-stack:before{content:'';position:absolute;right:-65px;top:-70px;width:220px;height:220px;background:#315cff;border-radius:40px;transform:rotate(30deg)}.zpl .doc-item{position:relative;background:white;border-radius:12px;padding:18px;margin:12px 0;display:flex;gap:14px;align-items:center;box-shadow:0 8px 25px #0002}.zpl .doc-item svg{color:#315cff;width:30px;height:30px;flex:none}.zpl .doc-item small{display:block;color:#64748b}.zpl .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-top:35px}.zpl .step{border-top:2px solid #dce4f1;padding-top:20px}.zpl .step b{color:#315cff;font-size:13px}.zpl .step h3{margin:12px 0 8px;font-size:20px}.zpl .final{background:#0b1745;color:white;padding:65px 0}.zpl .final .wrap{display:flex;justify-content:space-between;align-items:center;gap:28px}.zpl .final p{color:#d0d9ee;margin-top:14px}.zpl .final .btn{flex:none}.zpl footer{padding:24px 0;font-size:13px;color:#63708a}.zpl footer a{color:#315cff;margin-left:16px}.zpl .legal{font-size:13px;margin-top:30px;color:#64748b}
      @media(max-width:850px){.zpl .hero-grid,.zpl .split{grid-template-columns:1fr;gap:20px}.zpl .hero-copy{padding:48px 0 0}.zpl .art{min-height:450px}.zpl .benefits,.zpl .steps{grid-template-columns:1fr 1fr}.zpl .section{padding:58px 0}.zpl .final .wrap{align-items:flex-start;flex-direction:column}}@media(max-width:540px){.zpl .wrap{padding:0 20px}.zpl .benefits,.zpl .steps{grid-template-columns:1fr}.zpl .mock-body{padding:17px}.zpl .art{min-height:410px}.zpl .doc-stack{padding:18px}.zpl .mock-field strong{font-size:14px}}
    `}),(0,b.jsx)(`section`,{className:`hero`,children:(0,b.jsxs)(`div`,{className:`wrap hero-grid`,children:[(0,b.jsxs)(`div`,{className:`hero-copy`,children:[(0,b.jsxs)(`div`,{className:`eyebrow`,children:[`Solutions / `,Me.label]}),(0,b.jsx)(`h1`,{children:Me.headline}),(0,b.jsx)(`p`,{children:Me.lead}),(0,b.jsxs)(`div`,{className:`actions`,children:[(0,b.jsx)(`a`,{className:`btn`,href:`/demo`,children:`Book a Demo →`}),(0,b.jsx)(`a`,{className:`textlink`,href:`/pricing`,children:`Explore pricing →`})]})]}),(0,b.jsxs)(`div`,{className:`art`,children:[(0,b.jsx)(`div`,{className:`shape`}),(0,b.jsxs)(`div`,{className:`mock`,"aria-label":`Illustrative workspace`,children:[(0,b.jsxs)(`div`,{className:`mock-top`,children:[(0,b.jsxs)(`span`,{children:[`● ● ● \xA0 ZapDocs / `,Me.label]}),(0,b.jsx)(`span`,{children:`Sample`})]}),(0,b.jsxs)(`div`,{className:`mock-body`,children:[(0,b.jsx)(`h3`,{children:Me.sample}),(0,b.jsx)(`p`,{children:Me.sub}),(0,b.jsx)(`div`,{className:`mock-grid`,children:Me.fields.map(([e,t])=>(0,b.jsxs)(`div`,{className:`mock-field`,children:[(0,b.jsx)(`small`,{children:e}),(0,b.jsx)(`strong`,{children:t})]},e))}),Me.items.map(e=>(0,b.jsxs)(`div`,{className:`mock-doc`,children:[e,(0,b.jsx)(`span`,{children:`✓ Review item`})]},e)),(0,b.jsx)(`div`,{className:`mock-button`,children:`Prepare documents`})]})]})]})]})}),(0,b.jsx)(`section`,{className:`section`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsxs)(`div`,{className:`section-intro`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`Designed around your workflow`}),(0,b.jsx)(`h2`,{children:Me.benefitTitle})]}),(0,b.jsx)(`div`,{className:`benefits`,children:Me.benefits.map(([e,t,n])=>(0,b.jsxs)(`article`,{className:`benefit`,children:[(0,b.jsx)(`div`,{className:`benefit-icon`,children:(0,b.jsx)(A,{type:e})}),(0,b.jsx)(`h3`,{children:t}),(0,b.jsx)(`p`,{children:n})]},t))})]})}),(0,b.jsx)(`section`,{className:`section soft`,children:(0,b.jsxs)(`div`,{className:`wrap split`,children:[(0,b.jsx)(`div`,{className:`doc-stack`,children:Me.docs.map(([e,t])=>(0,b.jsxs)(`div`,{className:`doc-item`,children:[(0,b.jsx)(A,{type:`file`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:e}),(0,b.jsx)(`small`,{children:t})]})]},e))}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`One loan. One workflow.`}),(0,b.jsx)(`h2`,{children:Me.splitTitle}),(0,b.jsx)(`p`,{children:Me.splitCopy}),(0,b.jsx)(`a`,{className:`textlink`,href:`/demo`,children:`See the platform in action →`})]})]})}),(0,b.jsx)(`section`,{className:`section`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:`How it works`}),(0,b.jsx)(`h2`,{children:`A simpler document preparation process.`}),(0,b.jsx)(`div`,{className:`steps`,children:Me.steps.map(([e,t],n)=>(0,b.jsxs)(`article`,{className:`step`,children:[(0,b.jsxs)(`b`,{children:[`0`,n+1]}),(0,b.jsx)(`h3`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))}),(0,b.jsxs)(`p`,{className:`legal`,children:[Me.legal,` Generated documents require independent review before use.`]})]})}),(0,b.jsx)(`section`,{className:`final`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h2`,{children:Me.cta}),(0,b.jsx)(`p`,{children:`Book a personalized walkthrough of the loan document workflow.`})]}),(0,b.jsx)(`a`,{className:`btn`,href:`/demo`,children:`Book a Demo →`})]})}),(0,b.jsx)(`footer`,{children:(0,b.jsxs)(`div`,{className:`wrap`,children:[`© `,new Date().getFullYear(),` ZapDocs `,(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy`}),(0,b.jsx)(`a`,{href:`/terms`,children:`Terms`})]})})]})]})}var Pe=[{number:`01`,icon:`+`,title:`Create a loan`,description:`Create a new loan record and select Florida or California. Enter the basic financing terms and property information.`,items:[`Select the applicable state`,`Enter loan amount and interest rate`,`Identify the property and lien position`,`Establish loan and payment dates`]},{number:`02`,icon:`✓`,title:`Complete and review`,description:`Complete the transaction details, review your payment calculations and confirm the information before generating documents.`,items:[`Enter borrower and lender information`,`Load reusable lending profiles`,`Review monthly payment amounts`,`Confirm prepaid interest and balloon payment`]},{number:`03`,icon:`↗`,title:`Generate documents`,description:`Save your transaction and generate a coordinated, state-specific loan document package for professional review.`,items:[`Save your loan record`,`Preview available documents`,`Generate the appropriate loan package`,`Download documents for review`]}];function Fe(){return(0,_.useEffect)(()=>{document.title=`How It Works | ZapDocs`},[]),(0,b.jsxs)(`div`,{className:`hiw-page`,children:[(0,b.jsx)(C,{}),(0,b.jsxs)(`main`,{children:[(0,b.jsx)(`section`,{className:`hiw-hero`,children:(0,b.jsxs)(`div`,{className:`hiw-container hiw-hero-grid`,children:[(0,b.jsxs)(`div`,{className:`hiw-hero-content`,children:[(0,b.jsxs)(`div`,{className:`hiw-eyebrow`,children:[(0,b.jsx)(`span`,{className:`hiw-dot`}),`DISCOVER ZAPDOCS`]}),(0,b.jsxs)(`h1`,{children:[`From loan information`,(0,b.jsx)(`span`,{children:`to closing documents.`})]}),(0,b.jsx)(`p`,{children:`Preparing private lending documents shouldn't require entering the same information over and over again. With ZapDocs, move from agreed loan terms to a coordinated document package in three simple steps.`}),(0,b.jsxs)(`div`,{className:`hiw-actions`,children:[(0,b.jsx)(`a`,{href:`/demo`,className:`hiw-primary`,children:`Book a Demo →`}),(0,b.jsx)(`a`,{href:`#process`,className:`hiw-secondary`,children:`See How It Works`})]}),(0,b.jsxs)(`div`,{className:`hiw-support`,children:[(0,b.jsx)(`span`,{children:`✓ Florida`}),(0,b.jsx)(`span`,{children:`✓ California`}),(0,b.jsx)(`span`,{children:`✓ Built for private lending`})]})]}),(0,b.jsx)(`div`,{className:`hiw-preview`,children:(0,b.jsxs)(`div`,{className:`hiw-window`,children:[(0,b.jsxs)(`div`,{className:`hiw-window-header`,children:[(0,b.jsxs)(`div`,{className:`hiw-brand`,children:[(0,b.jsx)(`div`,{className:`hiw-logo`,children:`Z`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`ZapDocs`}),(0,b.jsx)(`small`,{children:`Document Preparation`})]})]}),(0,b.jsx)(`span`,{className:`hiw-preview-tag`,children:`Preview`})]}),(0,b.jsxs)(`div`,{className:`hiw-window-body`,children:[(0,b.jsx)(`div`,{className:`hiw-window-label`,children:`YOUR LOAN WORKFLOW`}),(0,b.jsx)(`h2`,{children:`Prepare your loan package`}),(0,b.jsx)(`p`,{className:`hiw-window-description`,children:`Complete your transaction information and prepare your documents.`}),(0,b.jsxs)(`div`,{className:`hiw-progress`,children:[(0,b.jsxs)(`div`,{className:`hiw-progress-item`,children:[(0,b.jsx)(`div`,{className:`hiw-progress-circle complete`,children:`✓`}),(0,b.jsx)(`span`,{children:`Create`})]}),(0,b.jsx)(`div`,{className:`hiw-progress-line`}),(0,b.jsxs)(`div`,{className:`hiw-progress-item`,children:[(0,b.jsx)(`div`,{className:`hiw-progress-circle complete`,children:`✓`}),(0,b.jsx)(`span`,{children:`Review`})]}),(0,b.jsx)(`div`,{className:`hiw-progress-line`}),(0,b.jsxs)(`div`,{className:`hiw-progress-item`,children:[(0,b.jsx)(`div`,{className:`hiw-progress-circle active`,children:`3`}),(0,b.jsx)(`span`,{children:`Generate`})]})]}),(0,b.jsxs)(`div`,{className:`hiw-loan-summary`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`small`,{children:`Loan amount`}),(0,b.jsx)(`strong`,{children:`$500,000`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`small`,{children:`Interest rate`}),(0,b.jsx)(`strong`,{children:`10.50%`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`small`,{children:`Property state`}),(0,b.jsx)(`strong`,{children:`Florida`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`small`,{children:`Monthly payment`}),(0,b.jsx)(`strong`,{children:`$4,375.00`})]})]}),(0,b.jsx)(`div`,{className:`hiw-document-heading`,children:`Loan documents`}),(0,b.jsx)(`div`,{className:`hiw-document-list`,children:[`Promissory Note`,`Mortgage`,`Loan Agreement`,`Supporting Disclosures`].map(e=>(0,b.jsxs)(`div`,{className:`hiw-document-row`,children:[(0,b.jsx)(`div`,{className:`hiw-document-icon`,children:`▤`}),(0,b.jsx)(`span`,{children:e}),(0,b.jsx)(`small`,{children:`Included`})]},e))}),(0,b.jsx)(`div`,{className:`hiw-generate-button`,children:`Generate Loan Package →`}),(0,b.jsx)(`div`,{className:`hiw-preview-note`,children:`Illustrative workflow · Fictional loan data`})]})]})})]})}),(0,b.jsx)(`section`,{className:`hiw-benefits`,children:(0,b.jsxs)(`div`,{className:`hiw-container hiw-benefit-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Enter information once`}),(0,b.jsx)(`p`,{children:`Reduce repetitive transaction data entry.`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Review your loan terms`}),(0,b.jsx)(`p`,{children:`Maintain control over financing details.`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Generate coordinated documents`}),(0,b.jsx)(`p`,{children:`Prepare documents from one loan record.`})]})]})}),(0,b.jsx)(`section`,{className:`hiw-process`,id:`process`,children:(0,b.jsxs)(`div`,{className:`hiw-container`,children:[(0,b.jsxs)(`div`,{className:`hiw-section-heading`,children:[(0,b.jsx)(`div`,{className:`hiw-label`,children:`SIMPLE BY DESIGN`}),(0,b.jsx)(`h2`,{children:`Three steps to your first loan package.`}),(0,b.jsx)(`p`,{children:`A repeatable document preparation process designed around the needs of private lending professionals.`})]}),(0,b.jsx)(`div`,{className:`hiw-step-grid`,children:Pe.map(e=>(0,b.jsxs)(`article`,{className:`hiw-step-card`,children:[(0,b.jsxs)(`div`,{className:`hiw-step-top`,children:[(0,b.jsx)(`div`,{className:`hiw-step-icon`,children:e.icon}),(0,b.jsxs)(`span`,{children:[`STEP `,e.number]})]}),(0,b.jsx)(`h3`,{children:e.title}),(0,b.jsx)(`p`,{children:e.description}),(0,b.jsx)(`div`,{className:`hiw-step-divider`}),(0,b.jsx)(`div`,{className:`hiw-step-list`,children:e.items.map(e=>(0,b.jsxs)(`div`,{className:`hiw-step-list-item`,children:[(0,b.jsx)(`span`,{children:`✓`}),(0,b.jsx)(`p`,{children:e})]},e))})]},e.number))})]})}),(0,b.jsx)(`section`,{className:`hiw-details-section`,children:(0,b.jsxs)(`div`,{className:`hiw-container hiw-details-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`hiw-label`,children:`FROM DATA TO DOCUMENTS`}),(0,b.jsx)(`h2`,{children:`One loan record. Multiple coordinated documents.`}),(0,b.jsx)(`p`,{children:`Your transaction information serves as the foundation for the documents you prepare. Instead of repeatedly entering borrower names, property addresses and financing terms, ZapDocs uses the information from your saved loan record.`}),(0,b.jsx)(`p`,{children:`When negotiated terms change, reopen your transaction, update the relevant fields and generate a revised document package.`}),(0,b.jsx)(`a`,{href:`/document-generation`,className:`hiw-text-link`,children:`Explore document generation →`})]}),(0,b.jsxs)(`div`,{className:`hiw-flow-card`,children:[(0,b.jsxs)(`div`,{className:`hiw-flow-source`,children:[(0,b.jsx)(`div`,{className:`hiw-flow-source-icon`,children:`▤`}),(0,b.jsx)(`strong`,{children:`Saved Loan Record`}),(0,b.jsx)(`small`,{children:`Financing · Property · Parties`})]}),(0,b.jsx)(`div`,{className:`hiw-flow-arrow`,children:`↓`}),(0,b.jsxs)(`div`,{className:`hiw-flow-engine`,children:[(0,b.jsx)(`strong`,{children:`ZapDocs`}),(0,b.jsx)(`small`,{children:`State-specific document preparation`})]}),(0,b.jsx)(`div`,{className:`hiw-flow-arrow`,children:`↓`}),(0,b.jsx)(`div`,{className:`hiw-flow-output`,children:[`Promissory Note`,`Security Instrument`,`Agreements`,`Disclosures`].map(e=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{children:`▤`}),(0,b.jsx)(`small`,{children:e})]},e))}),(0,b.jsx)(`div`,{className:`hiw-preview-note`,children:`Documents vary by state and transaction.`})]})]})}),(0,b.jsx)(`section`,{className:`hiw-review-section`,children:(0,b.jsxs)(`div`,{className:`hiw-container`,children:[(0,b.jsxs)(`div`,{className:`hiw-section-heading`,children:[(0,b.jsx)(`div`,{className:`hiw-label`,children:`AFTER GENERATING`}),(0,b.jsx)(`h2`,{children:`Your documents. Your final review.`}),(0,b.jsx)(`p`,{children:`Maintain control of your transaction throughout the document preparation process.`})]}),(0,b.jsx)(`div`,{className:`hiw-review-grid`,children:[{icon:`✓`,title:`Review the transaction`,description:`Confirm that the generated documents reflect the agreed financing terms, party information, dates and payment amounts.`},{icon:`↻`,title:`Make necessary revisions`,description:`Update your saved loan record and regenerate documents whenever transaction information changes. Previously downloaded files are not automatically updated.`},{icon:`◎`,title:`Coordinate professional review`,description:`Provide the prepared documents to your attorneys, escrow officers, title companies or other closing professionals as appropriate.`}].map(e=>(0,b.jsxs)(`article`,{className:`hiw-review-card`,children:[(0,b.jsx)(`div`,{className:`hiw-step-icon`,children:e.icon}),(0,b.jsx)(`h3`,{children:e.title}),(0,b.jsx)(`p`,{children:e.description})]},e.title))})]})}),(0,b.jsx)(`section`,{className:`hiw-faq-section`,children:(0,b.jsxs)(`div`,{className:`hiw-container hiw-faq-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`hiw-label`,children:`FREQUENTLY ASKED QUESTIONS`}),(0,b.jsx)(`h2`,{children:`Getting started with ZapDocs.`}),(0,b.jsx)(`p`,{children:`Learn more about preparing your first private lending document package.`}),(0,b.jsx)(`a`,{href:`/help-center`,className:`hiw-text-link`,children:`Visit the Help Center →`})]}),(0,b.jsx)(`div`,{className:`hiw-faq-list`,children:[[`Which states does ZapDocs support?`,`ZapDocs currently supports document preparation for Florida and California private lending transactions.`],[`Can I save a loan and return to it later?`,`Yes. Save your transaction information and reopen your loan record when additional information or revised financing terms become available.`],[`Can I update documents after generating them?`,`You can revise the saved loan record and generate a new package. Previously downloaded documents will not automatically reflect these changes.`],[`Can I test the platform with fictional information?`,`Yes. We recommend exploring the preparation workflow with a fictional transaction before entering confidential borrower or lender information.`],[`Does ZapDocs replace an attorney?`,`No. ZapDocs is document preparation software. It does not provide legal advice or replace independent professional review.`]].map(([e,t])=>(0,b.jsxs)(`details`,{className:`hiw-faq-item`,children:[(0,b.jsx)(`summary`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))})]})}),(0,b.jsx)(`section`,{className:`hiw-cta-section`,children:(0,b.jsx)(`div`,{className:`hiw-container`,children:(0,b.jsxs)(`div`,{className:`hiw-cta`,children:[(0,b.jsx)(`div`,{className:`hiw-cta-label`,children:`EXPERIENCE ZAPDOCS`}),(0,b.jsxs)(`h2`,{children:[`Your next loan package`,(0,b.jsx)(`br`,{}),`starts here.`]}),(0,b.jsx)(`p`,{children:`Discover a simpler way to prepare private lending documents, manage transaction information and reduce repetitive data entry.`}),(0,b.jsxs)(`div`,{className:`hiw-cta-actions`,children:[(0,b.jsx)(`a`,{href:`/demo`,className:`hiw-primary`,children:`Book a Demo →`}),(0,b.jsx)(`a`,{href:`/pricing`,className:`hiw-cta-secondary`,children:`View Pricing`})]})]})})})]}),(0,b.jsx)(`footer`,{className:`hiw-footer`,children:(0,b.jsxs)(`div`,{className:`hiw-container`,children:[(0,b.jsxs)(`div`,{className:`hiw-footer-top`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{children:`ZapDocs`}),(0,b.jsx)(`p`,{children:`Document preparation software built for private lending professionals.`})]}),(0,b.jsxs)(`div`,{className:`hiw-footer-links`,children:[(0,b.jsx)(`a`,{href:`/platform`,children:`Platform`}),(0,b.jsx)(`a`,{href:`/pricing`,children:`Pricing`}),(0,b.jsx)(`a`,{href:`/help-center`,children:`Help Center`}),(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy`}),(0,b.jsx)(`a`,{href:`/terms`,children:`Terms`})]})]}),(0,b.jsxs)(`div`,{className:`hiw-footer-bottom`,children:[(0,b.jsxs)(`span`,{children:[`© `,new Date().getFullYear(),` ZapDocs. All rights reserved.`]}),(0,b.jsx)(`span`,{children:`ZapDocs is not a law firm and does not provide legal advice.`})]})]})}),(0,b.jsx)(`style`,{children:`
        .hiw-page {
          background: #ffffff;
          color: #101c32;
          font-family: Inter, Arial, sans-serif;
          min-height: 100vh;
        }

        .hiw-page * {
          box-sizing: border-box;
        }

        .hiw-container {
          width: min(1200px, calc(100% - 64px));
          margin: 0 auto;
        }

        .hiw-hero {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #f4f7fc 65%,
            #eaf0ff 100%
          );
          padding: 95px 0;
        }

        .hiw-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 65px;
          align-items: center;
        }

        .hiw-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border: 1px solid #dfe5ee;
          border-radius: 30px;
          background: white;
          padding: 9px 15px;
          color: #526278;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1.3px;
          margin-bottom: 25px;
        }

        .hiw-dot {
          width: 7px;
          height: 7px;
          background: #3d63f5;
          border-radius: 50%;
        }

        .hiw-hero h1 {
          font-size: clamp(40px, 4.6vw, 62px);
          font-weight: 750;
          line-height: 1.1;
          letter-spacing: -2.8px;
          margin: 0 0 25px;
          color: #101c32;
        }

        .hiw-hero h1 span {
          display: block;
          color: #3d63f5;
          margin-top: 5px;
        }

        .hiw-hero-content > p {
          color: #637287;
          font-size: 17px;
          line-height: 1.85;
          max-width: 550px;
          margin: 0 0 30px;
        }

        .hiw-actions,
        .hiw-cta-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 13px;
        }

        .hiw-primary,
        .hiw-secondary,
        .hiw-cta-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 26px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 650;
          font-size: 14px;
          transition: all 0.2s ease;
        }

        .hiw-primary {
          background: #3d63f5;
          color: white;
          border: 1px solid #3d63f5;
          box-shadow: 0 8px 18px #3d63f526;
        }

        .hiw-primary:hover {
          background: #284ce1;
          color: white;
          transform: translateY(-2px);
        }

        .hiw-secondary {
          background: white;
          color: #101c32;
          border: 1px solid #d6deea;
        }

        .hiw-secondary:hover {
          background: #f1f5fa;
        }

        .hiw-support {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          margin-top: 27px;
          color: #64748b;
          font-weight: 600;
          font-size: 11px;
        }

        .hiw-preview {
          background: #e4eaf6;
          padding: 20px;
          border-radius: 25px;
          border: 1px solid #dfe6f2;
          box-shadow: 0 25px 65px #172b4520;
          min-width: 0;
        }

        .hiw-window {
          background: white;
          border: 1px solid #dce3ed;
          border-radius: 15px;
          overflow: hidden;
        }

        .hiw-window-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 17px 20px;
          border-bottom: 1px solid #e5eaf1;
        }

        .hiw-brand {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .hiw-logo {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          color: white;
          background: #3d63f5;
          border-radius: 9px;
          font-weight: 800;
          font-size: 18px;
        }

        .hiw-brand strong {
          display: block;
          font-size: 13px;
        }

        .hiw-brand small {
          display: block;
          color: #8491a4;
          font-size: 10px;
          margin-top: 3px;
        }

        .hiw-preview-tag {
          background: #eff3f9;
          color: #637287;
          padding: 6px 12px;
          font-size: 10px;
          border-radius: 20px;
          font-weight: 600;
        }

        .hiw-window-body {
          padding: 24px;
        }

        .hiw-window-label {
          font-size: 10px;
          color: #8491a4;
          letter-spacing: 1.2px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .hiw-window-body > h2 {
          font-size: 23px;
          margin: 0 0 8px;
        }

        .hiw-window-description {
          color: #8491a4;
          font-size: 11px;
          line-height: 1.6;
          margin: 0;
        }

        .hiw-progress {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin: 28px 0;
        }

        .hiw-progress-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          min-width: 55px;
        }

        .hiw-progress-item > span {
          color: #637287;
          font-size: 10px;
          font-weight: 650;
        }

        .hiw-progress-circle {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 13px;
          font-weight: 700;
        }

        .hiw-progress-circle.complete {
          background: #e5f8ed;
          color: #16834c;
        }

        .hiw-progress-circle.active {
          background: #3d63f5;
          color: white;
          box-shadow: 0 0 0 5px #edf2ff;
        }

        .hiw-progress-line {
          flex: 1;
          height: 2px;
          background: #dce5f7;
          margin-top: 17px;
        }

        .hiw-loan-summary {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 11px;
          margin-bottom: 24px;
        }

        .hiw-loan-summary > div {
          background: #f8fafc;
          border: 1px solid #e1e7ef;
          border-radius: 9px;
          padding: 14px;
        }

        .hiw-loan-summary small {
          display: block;
          color: #64748b;
          font-size: 10px;
          margin-bottom: 8px;
        }

        .hiw-loan-summary strong {
          font-size: 20px;
          color: #101c32;
        }

        .hiw-document-heading {
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .hiw-document-list {
          border: 1px solid #e1e7ef;
          border-radius: 10px;
          overflow: hidden;
        }

        .hiw-document-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 14px;
          border-bottom: 1px solid #edf1f5;
        }

        .hiw-document-row:last-child {
          border-bottom: 0;
        }

        .hiw-document-icon {
          width: 27px;
          height: 30px;
          border-radius: 5px;
          background: #edf2ff;
          color: #3d63f5;
          display: grid;
          place-items: center;
          font-weight: 700;
          flex-shrink: 0;
        }

        .hiw-document-row > span {
          font-size: 11px;
          font-weight: 600;
        }

        .hiw-document-row small {
          margin-left: auto;
          color: #16834c;
          font-size: 9px;
          font-weight: 600;
        }

        .hiw-generate-button {
          background: #3d63f5;
          color: white;
          padding: 14px;
          font-size: 12px;
          font-weight: 700;
          text-align: center;
          border-radius: 8px;
          margin-top: 20px;
        }

        .hiw-preview-note {
          font-size: 9px;
          text-align: center;
          margin-top: 15px;
          color: #94a3b8;
        }

        .hiw-benefits {
          padding: 35px 0;
          border-top: 1px solid #e5eaf0;
          border-bottom: 1px solid #e5eaf0;
        }

        .hiw-benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          text-align: center;
        }

        .hiw-benefit-grid strong {
          font-size: 16px;
        }

        .hiw-benefit-grid p {
          font-size: 13px;
          color: #64748b;
          margin: 9px 0 0;
        }

        .hiw-process,
        .hiw-review-section {
          padding: 95px 0;
          scroll-margin-top: 100px;
        }

        .hiw-section-heading {
          max-width: 760px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .hiw-label {
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 1.7px;
          color: #3d63f5;
          margin-bottom: 20px;
        }

        .hiw-section-heading h2,
        .hiw-details-grid h2,
        .hiw-faq-grid h2 {
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1.18;
          letter-spacing: -1.6px;
          margin: 0 0 20px;
          color: #101c32;
        }

        .hiw-section-heading p,
        .hiw-details-grid > div > p,
        .hiw-faq-grid > div > p {
          color: #64748b;
          line-height: 1.85;
          font-size: 16px;
        }

        .hiw-step-grid,
        .hiw-review-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .hiw-step-card,
        .hiw-review-card {
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 16px;
          padding: 30px;
          transition: all 0.25s ease;
        }

        .hiw-step-card:hover,
        .hiw-review-card:hover {
          transform: translateY(-4px);
          border-color: #a8b8f8;
          box-shadow: 0 15px 35px #172b4510;
        }

        .hiw-step-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
        }

        .hiw-step-top > span {
          color: #94a3b8;
          font-size: 10px;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .hiw-step-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: #edf2ff;
          color: #3d63f5;
          font-size: 25px;
          font-weight: 700;
        }

        .hiw-step-card h3,
        .hiw-review-card h3 {
          font-size: 21px;
          color: #101c32;
          margin: 0 0 15px;
        }

        .hiw-step-card > p,
        .hiw-review-card > p {
          font-size: 14px;
          color: #64748b;
          line-height: 1.8;
          margin: 0;
        }

        .hiw-step-divider {
          height: 1px;
          background: #e5eaf0;
          margin: 25px 0;
        }

        .hiw-step-list {
          display: grid;
          gap: 15px;
        }

        .hiw-step-list-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .hiw-step-list-item > span {
          color: #16834c;
          font-weight: 700;
          font-size: 13px;
        }

        .hiw-step-list-item p {
          font-size: 12px;
          line-height: 1.6;
          color: #526278;
          margin: 0;
        }

        .hiw-details-section,
        .hiw-faq-section {
          padding: 90px 0;
          background: #f6f8fc;
          border-top: 1px solid #e5eaf1;
          border-bottom: 1px solid #e5eaf1;
        }

        .hiw-details-grid,
        .hiw-faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 85px;
        }

        .hiw-text-link {
          color: #3d63f5;
          font-weight: 650;
          font-size: 14px;
          text-decoration: none;
          display: inline-block;
          margin-top: 15px;
        }

        .hiw-text-link:hover {
          text-decoration: underline;
        }

        .hiw-flow-card {
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 10px 35px #172b4508;
        }

        .hiw-flow-source {
          background: #f8fafc;
          border: 1px solid #e1e7ef;
          border-radius: 12px;
          padding: 22px;
          text-align: center;
        }

        .hiw-flow-source-icon {
          width: 38px;
          height: 38px;
          background: #edf2ff;
          color: #3d63f5;
          font-size: 22px;
          display: grid;
          place-items: center;
          border-radius: 9px;
          margin: 0 auto 12px;
        }

        .hiw-flow-source strong,
        .hiw-flow-engine strong {
          display: block;
          font-size: 16px;
          margin-bottom: 7px;
        }

        .hiw-flow-source small {
          color: #64748b;
          font-size: 11px;
        }

        .hiw-flow-arrow {
          text-align: center;
          font-size: 27px;
          color: #3d63f5;
          padding: 9px 0;
        }

        .hiw-flow-engine {
          padding: 22px;
          border-radius: 12px;
          background: #3d63f5;
          color: white;
          text-align: center;
        }

        .hiw-flow-engine small {
          font-size: 11px;
          color: #dce5ff;
        }

        .hiw-flow-output {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .hiw-flow-output > div {
          background: #f8fafc;
          border: 1px solid #e1e7ef;
          border-radius: 8px;
          text-align: center;
          padding: 15px 5px;
        }

        .hiw-flow-output span {
          display: block;
          font-size: 25px;
          color: #3d63f5;
          margin-bottom: 10px;
        }

        .hiw-flow-output small {
          font-size: 9px;
          color: #526278;
          line-height: 1.5;
        }

        .hiw-review-card .hiw-step-icon {
          margin-bottom: 22px;
        }

        .hiw-faq-grid {
          align-items: start;
        }

        .hiw-faq-list {
          display: grid;
          gap: 13px;
        }

        .hiw-faq-item {
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 11px;
          padding: 19px;
        }

        .hiw-faq-item summary {
          cursor: pointer;
          font-size: 14px;
          font-weight: 650;
          color: #101c32;
        }

        .hiw-faq-item p {
          color: #64748b;
          font-size: 13px;
          line-height: 1.8;
          margin: 15px 0 0;
        }

        .hiw-cta-section {
          padding: 80px 0;
        }

        .hiw-cta {
          background: linear-gradient(
            135deg,
            #101c32,
            #172b52
          );
          color: white;
          padding: 70px 25px;
          border-radius: 22px;
          text-align: center;
        }

        .hiw-cta-label {
          font-size: 11px;
          color: #a6b9ff;
          font-weight: 750;
          letter-spacing: 1.8px;
          margin-bottom: 22px;
        }

        .hiw-cta h2 {
          font-size: clamp(32px, 4vw, 46px);
          line-height: 1.2;
          letter-spacing: -1.5px;
          margin: 0 0 22px;
          color: white;
        }

        .hiw-cta p {
          color: #c1cce0;
          font-size: 16px;
          line-height: 1.8;
          max-width: 650px;
          margin: 0 auto 28px;
        }

        .hiw-cta-actions {
          justify-content: center;
        }

        .hiw-cta-secondary {
          border: 1px solid #ffffff50;
          color: white;
        }

        .hiw-cta-secondary:hover {
          background: #ffffff15;
          color: white;
        }

        .hiw-footer {
          background: #f8fafc;
          border-top: 1px solid #e2e7ef;
          padding: 45px 0 25px;
        }

        .hiw-footer-top {
          display: flex;
          justify-content: space-between;
          gap: 25px;
          flex-wrap: wrap;
        }

        .hiw-footer-top h3 {
          font-size: 23px;
          margin: 0 0 10px;
        }

        .hiw-footer-top p {
          color: #64748b;
          font-size: 13px;
          max-width: 350px;
          line-height: 1.7;
        }

        .hiw-footer-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 23px;
        }

        .hiw-footer-links a {
          color: #526278;
          font-size: 13px;
          text-decoration: none;
        }

        .hiw-footer-links a:hover {
          color: #3d63f5;
        }

        .hiw-footer-bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          color: #64748b;
          font-size: 11px;
          border-top: 1px solid #dfe5ed;
          padding-top: 23px;
          margin-top: 30px;
        }

        @media (max-width: 1050px) {
          .hiw-hero-grid,
          .hiw-details-grid,
          .hiw-faq-grid {
            gap: 35px;
          }

          .hiw-preview {
            padding: 12px;
          }

          .hiw-step-card,
          .hiw-review-card {
            padding: 23px;
          }

          .hiw-hero h1 {
            font-size: 44px;
          }
        }

        @media (max-width: 800px) {
          .hiw-container {
            width: calc(100% - 36px);
          }

          .hiw-hero-grid,
          .hiw-details-grid,
          .hiw-faq-grid {
            grid-template-columns: 1fr;
          }

          .hiw-hero {
            padding: 60px 0;
          }

          .hiw-hero h1 {
            font-size: 42px;
            letter-spacing: -1.8px;
          }

          .hiw-preview {
            max-width: 600px;
            width: 100%;
            margin: 0 auto;
          }

          .hiw-step-grid,
          .hiw-review-grid,
          .hiw-benefit-grid {
            grid-template-columns: 1fr;
          }

          .hiw-process,
          .hiw-details-section,
          .hiw-review-section,
          .hiw-faq-section {
            padding: 60px 0;
          }

          .hiw-benefit-grid {
            gap: 30px;
          }

          .hiw-cta-section {
            padding: 50px 0;
          }
        }

        @media (max-width: 480px) {
          .hiw-hero h1 {
            font-size: 36px;
          }

          .hiw-window-body {
            padding: 15px;
          }

          .hiw-loan-summary strong {
            font-size: 17px;
          }

          .hiw-flow-card {
            padding: 17px;
          }

          .hiw-flow-output {
            grid-template-columns: repeat(2, 1fr);
          }

          .hiw-cta {
            padding: 45px 20px;
          }
        }
      `})]})}var Ie={Florida:[{name:`Promissory Note`,category:`Core financing document`},{name:`Mortgage`,category:`Security instrument`},{name:`Agreement to Procure Lender`,category:`Brokerage agreement`},{name:`Personal Guaranty`,category:`Supporting agreement`},{name:`Default Rate Addendum`,category:`Supporting document`},{name:`Oral Disclosure`,category:`Disclosure`}],California:[{name:`Promissory Note`,category:`Core financing document`},{name:`Deed of Trust`,category:`Security instrument`},{name:`Supporting Loan Agreements`,category:`Supporting documents`},{name:`Oral Disclosure`,category:`Disclosure`}]},Le=[{icon:`▤`,title:`Core financing documents`,description:`Prepare promissory notes and applicable security instruments using the financing and property information entered into your loan record.`},{icon:`▧`,title:`Supporting agreements`,description:`Generate configured supporting agreements, addenda and disclosures based on the applicable state and transaction.`},{icon:`◎`,title:`Standalone documents`,description:`Prepare supported servicing agreements and lender disclosures individually when applicable.`},{icon:`↓`,title:`Editable Word documents`,description:`Download documents in an editable Word format for further review and transaction-specific revisions.`},{icon:`✓`,title:`Document previews`,description:`Preview available generated documents before downloading, subject to document rendering availability.`},{icon:`↻`,title:`Regenerate revised packages`,description:`Update your saved transaction information and prepare a revised package when loan terms change.`}];function Re(){let[e,t]=(0,_.useState)(`Florida`);return(0,_.useEffect)(()=>{document.title=`Document Outputs | ZapDocs`},[]),(0,b.jsxs)(`div`,{className:`dout-page`,children:[(0,b.jsx)(C,{}),(0,b.jsxs)(`main`,{children:[(0,b.jsx)(`section`,{className:`dout-hero`,children:(0,b.jsxs)(`div`,{className:`dout-container dout-hero-grid`,children:[(0,b.jsxs)(`div`,{className:`dout-hero-content`,children:[(0,b.jsxs)(`div`,{className:`dout-eyebrow`,children:[(0,b.jsx)(`span`,{className:`dout-dot`}),`ZAPDOCS / DOCUMENT OUTPUTS`]}),(0,b.jsxs)(`h1`,{children:[`Your loan documents.`,(0,b.jsx)(`span`,{children:`Ready for review.`})]}),(0,b.jsx)(`p`,{children:`Generate coordinated private lending documents from a single transaction record. Explore state-specific financing documents, supporting agreements and standalone disclosures built around your lending workflow.`}),(0,b.jsxs)(`div`,{className:`dout-actions`,children:[(0,b.jsx)(`a`,{href:`/demo`,className:`dout-primary`,children:`Book a Demo →`}),(0,b.jsx)(`a`,{href:`#document-packages`,className:`dout-secondary`,children:`Explore Documents`})]}),(0,b.jsxs)(`div`,{className:`dout-support`,children:[(0,b.jsx)(`span`,{children:`✓ Florida & California`}),(0,b.jsx)(`span`,{children:`✓ Editable Word documents`}),(0,b.jsx)(`span`,{children:`✓ Coordinated packages`})]})]}),(0,b.jsx)(`div`,{className:`dout-preview`,children:(0,b.jsxs)(`div`,{className:`dout-window`,children:[(0,b.jsxs)(`div`,{className:`dout-window-header`,children:[(0,b.jsxs)(`div`,{className:`dout-brand`,children:[(0,b.jsx)(`div`,{className:`dout-logo`,children:`Z`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`ZapDocs`}),(0,b.jsx)(`small`,{children:`Document Center`})]})]}),(0,b.jsx)(`span`,{className:`dout-preview-tag`,children:`Preview`})]}),(0,b.jsxs)(`div`,{className:`dout-window-body`,children:[(0,b.jsx)(`div`,{className:`dout-small-label`,children:`DOCUMENT PACKAGE`}),(0,b.jsx)(`h2`,{children:`Explore your documents`}),(0,b.jsx)(`p`,{className:`dout-window-description`,children:`Select a state to explore example outputs.`}),(0,b.jsx)(`div`,{className:`dout-state-selector`,children:[`Florida`,`California`].map(n=>(0,b.jsx)(`button`,{type:`button`,"aria-pressed":e===n,onClick:()=>t(n),className:e===n?`dout-state-button active`:`dout-state-button`,children:n},n))}),(0,b.jsxs)(`div`,{className:`dout-package-summary`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`small`,{children:`Selected workflow`}),(0,b.jsx)(`strong`,{children:e})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`small`,{children:`Output format`}),(0,b.jsx)(`strong`,{children:`DOCX`})]})]}),(0,b.jsx)(`div`,{className:`dout-list-heading`,children:`Example package contents`}),(0,b.jsx)(`div`,{className:`dout-document-list`,children:Ie[e].map(e=>(0,b.jsxs)(`div`,{className:`dout-document-row`,children:[(0,b.jsx)(`div`,{className:`dout-file-icon`,children:(0,b.jsxs)(`svg`,{width:`19`,height:`23`,viewBox:`0 0 24 28`,fill:`none`,"aria-hidden":`true`,children:[(0,b.jsx)(`path`,{d:`M5 2H15L21 8V25H5V2Z`,stroke:`currentColor`,strokeWidth:`1.7`,strokeLinejoin:`round`}),(0,b.jsx)(`path`,{d:`M15 2V9H21M9 14H17M9 18H17M9 22H14`,stroke:`currentColor`,strokeWidth:`1.7`,strokeLinecap:`round`})]})}),(0,b.jsxs)(`div`,{className:`dout-document-info`,children:[(0,b.jsx)(`strong`,{children:e.name}),(0,b.jsx)(`small`,{children:e.category})]}),(0,b.jsx)(`span`,{className:`dout-file-format`,children:`DOCX`})]},e.name))}),(0,b.jsx)(`a`,{href:`/demo`,className:`dout-download-preview`,children:`Explore ZapDocs in a Demo →`}),(0,b.jsx)(`div`,{className:`dout-preview-note`,children:`Illustrative document inventory. Actual outputs vary by configuration.`})]})]})})]})}),(0,b.jsx)(`section`,{className:`dout-benefits`,children:(0,b.jsxs)(`div`,{className:`dout-container dout-benefit-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`State-specific workflows`}),(0,b.jsx)(`p`,{children:`Configured Florida and California documents.`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Coordinated loan packages`}),(0,b.jsx)(`p`,{children:`Prepare documents from one transaction record.`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Editable document outputs`}),(0,b.jsx)(`p`,{children:`Maintain control of your final closing materials.`})]})]})}),(0,b.jsx)(`section`,{id:`document-packages`,className:`dout-section`,children:(0,b.jsxs)(`div`,{className:`dout-container`,children:[(0,b.jsxs)(`div`,{className:`dout-section-heading`,children:[(0,b.jsx)(`div`,{className:`dout-label`,children:`DOCUMENT CAPABILITIES`}),(0,b.jsx)(`h2`,{children:`More than a single loan document.`}),(0,b.jsx)(`p`,{children:`Prepare coordinated financing documents and supporting materials without repeatedly entering the same transaction information.`})]}),(0,b.jsx)(`div`,{className:`dout-feature-grid`,children:Le.map((e,t)=>(0,b.jsxs)(`article`,{className:`dout-feature-card`,children:[(0,b.jsxs)(`div`,{className:`dout-feature-top`,children:[(0,b.jsx)(`div`,{className:`dout-feature-icon`,children:e.icon}),(0,b.jsx)(`span`,{children:String(t+1).padStart(2,`0`)})]}),(0,b.jsx)(`h3`,{children:e.title}),(0,b.jsx)(`p`,{children:e.description})]},e.title))})]})}),(0,b.jsx)(`section`,{className:`dout-states-section`,children:(0,b.jsxs)(`div`,{className:`dout-container`,children:[(0,b.jsxs)(`div`,{className:`dout-section-heading`,children:[(0,b.jsx)(`div`,{className:`dout-label`,children:`STATE-SPECIFIC DOCUMENTATION`}),(0,b.jsx)(`h2`,{children:`Different states. Different requirements.`}),(0,b.jsx)(`p`,{children:`Explore document preparation workflows designed around the configured financing documents for Florida and California.`})]}),(0,b.jsxs)(`div`,{className:`dout-state-grid`,children:[(0,b.jsxs)(`article`,{className:`dout-state-card`,children:[(0,b.jsxs)(`div`,{className:`dout-state-card-top`,children:[(0,b.jsx)(`div`,{className:`dout-state-abbreviation`,children:`FL`}),(0,b.jsx)(`span`,{className:`dout-state-tag`,children:`Supported workflow`})]}),(0,b.jsx)(`h3`,{children:`Florida loan documents`}),(0,b.jsx)(`p`,{children:`Prepare a coordinated Florida private lending package using your saved loan information.`}),(0,b.jsx)(`div`,{className:`dout-state-document-list`,children:[`Promissory Note`,`Mortgage`,`Agreement to Procure Lender`,`Personal Guaranty`,`Default Rate Addendum`,`Supporting disclosures and documents`].map(e=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{children:`✓`}),e]},e))}),(0,b.jsx)(`div`,{className:`dout-state-footnote`,children:`Actual package contents depend on the configured workflow and transaction.`})]}),(0,b.jsxs)(`article`,{className:`dout-state-card`,children:[(0,b.jsxs)(`div`,{className:`dout-state-card-top`,children:[(0,b.jsx)(`div`,{className:`dout-state-abbreviation`,children:`CA`}),(0,b.jsx)(`span`,{className:`dout-state-tag`,children:`Supported workflow`})]}),(0,b.jsx)(`h3`,{children:`California loan documents`}),(0,b.jsx)(`p`,{children:`Prepare California private lending documents using the applicable deed of trust workflow.`}),(0,b.jsx)(`div`,{className:`dout-state-document-list`,children:[`Promissory Note`,`Deed of Trust`,`Supporting loan agreements`,`Oral Disclosure`,`Additional configured documents`].map(e=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{children:`✓`}),e]},e))}),(0,b.jsx)(`div`,{className:`dout-state-footnote`,children:`Standalone servicing agreements and lender disclosures may also be available.`})]})]})]})}),(0,b.jsx)(`section`,{className:`dout-section`,children:(0,b.jsxs)(`div`,{className:`dout-container dout-split-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`dout-label`,children:`STANDALONE DOCUMENT GENERATION`}),(0,b.jsx)(`h2`,{className:`dout-large-heading`,children:`Generate the documents you need.`}),(0,b.jsx)(`p`,{className:`dout-body-text`,children:`Not every transaction requires generating an entirely new closing package. ZapDocs provides supported standalone document outputs for specific lending and servicing needs.`}),(0,b.jsx)(`p`,{className:`dout-body-text`,children:`Reuse the information from your loan record and prepare applicable documents without entering the transaction from scratch.`}),(0,b.jsx)(`a`,{href:`/document-generation`,className:`dout-text-link`,children:`Explore document generation →`})]}),(0,b.jsxs)(`div`,{className:`dout-standalone-window`,children:[(0,b.jsxs)(`div`,{className:`dout-standalone-heading`,children:[(0,b.jsx)(`h3`,{children:`Standalone Documents`}),(0,b.jsx)(`p`,{children:`Select an applicable document type.`})]}),[{title:`Servicing Agreement`,description:`Prepare supported loan servicing documentation.`},{title:`Lender Disclosure`,description:`Prepare applicable lender disclosure forms.`}].map(e=>(0,b.jsxs)(`div`,{className:`dout-standalone-card`,children:[(0,b.jsx)(`div`,{className:`dout-standalone-icon`,children:`▤`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h4`,{children:e.title}),(0,b.jsx)(`p`,{children:e.description})]}),(0,b.jsx)(`span`,{className:`dout-standalone-format`,children:`DOCX`})]},e.title)),(0,b.jsx)(`div`,{className:`dout-preview-note`,children:`Illustrative standalone document selection.`})]})]})}),(0,b.jsx)(`section`,{className:`dout-formats-section`,children:(0,b.jsxs)(`div`,{className:`dout-container`,children:[(0,b.jsxs)(`div`,{className:`dout-section-heading`,children:[(0,b.jsx)(`div`,{className:`dout-label`,children:`FLEXIBLE DOCUMENT OUTPUTS`}),(0,b.jsx)(`h2`,{children:`Documents that fit your closing process.`}),(0,b.jsx)(`p`,{children:`Prepare your documents for further review, revisions and coordination with closing professionals.`})]}),(0,b.jsxs)(`div`,{className:`dout-format-grid`,children:[(0,b.jsxs)(`article`,{className:`dout-format-card`,children:[(0,b.jsx)(`div`,{className:`dout-format-icon word`,children:`W`}),(0,b.jsx)(`h3`,{children:`Editable Word documents`}),(0,b.jsx)(`p`,{children:`Download DOCX files that can be opened and reviewed using Microsoft Word or compatible document editing software.`}),(0,b.jsx)(`span`,{className:`dout-format-extension`,children:`.DOCX`})]}),(0,b.jsxs)(`article`,{className:`dout-format-card`,children:[(0,b.jsx)(`div`,{className:`dout-format-icon pdf`,children:`PDF`}),(0,b.jsx)(`h3`,{children:`PDF document previews`}),(0,b.jsx)(`p`,{children:`Review rendered document previews where available before downloading the prepared documents.`}),(0,b.jsx)(`span`,{className:`dout-format-extension`,children:`PDF PREVIEW`})]}),(0,b.jsxs)(`article`,{className:`dout-format-card`,children:[(0,b.jsx)(`div`,{className:`dout-format-icon package`,children:`▧`}),(0,b.jsx)(`h3`,{children:`Full loan packages`}),(0,b.jsx)(`p`,{children:`Prepare the configured closing package using the information from your saved transaction record.`}),(0,b.jsx)(`span`,{className:`dout-format-extension`,children:`FULL PACKAGE`})]})]})]})}),(0,b.jsx)(`section`,{className:`dout-section`,children:(0,b.jsxs)(`div`,{className:`dout-container`,children:[(0,b.jsxs)(`div`,{className:`dout-section-heading`,children:[(0,b.jsx)(`div`,{className:`dout-label`,children:`YOUR DOCUMENT WORKFLOW`}),(0,b.jsx)(`h2`,{children:`From generation to final review.`})]}),(0,b.jsx)(`div`,{className:`dout-process-grid`,children:[[`01`,`Select your output`,`Choose the applicable document package or supported standalone document.`],[`02`,`Preview documents`,`Review available previews and confirm transaction information.`],[`03`,`Download your files`,`Download your prepared document output for further review.`],[`04`,`Complete final review`,`Coordinate with closing professionals and attach any additional required materials.`]].map(([e,t,n])=>(0,b.jsxs)(`article`,{className:`dout-process-card`,children:[(0,b.jsx)(`div`,{className:`dout-process-number`,children:e}),(0,b.jsx)(`h3`,{children:t}),(0,b.jsx)(`p`,{children:n})]},e))})]})}),(0,b.jsx)(`section`,{className:`dout-review-section`,children:(0,b.jsxs)(`div`,{className:`dout-container dout-split-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`dout-label`,children:`FINAL CLOSING MATERIALS`}),(0,b.jsx)(`h2`,{className:`dout-large-heading`,children:`Your closing package may require more.`}),(0,b.jsx)(`p`,{className:`dout-body-text`,children:`Every private lending transaction is different. Additional materials may need to be obtained from title companies, escrow officers, attorneys or other closing professionals.`}),(0,b.jsx)(`p`,{className:`dout-body-text`,children:`Review the generated documents and confirm all transaction-specific requirements before execution and closing.`})]}),(0,b.jsxs)(`div`,{className:`dout-review-card`,children:[(0,b.jsx)(`h3`,{children:`Additional closing materials`}),[`Legal descriptions and exhibits`,`Preliminary title reports`,`Title insurance materials`,`Settlement statements`,`Transaction-specific agreements`,`Additional required disclosures`].map(e=>(0,b.jsxs)(`div`,{className:`dout-review-row`,children:[(0,b.jsx)(`span`,{className:`dout-review-check`,children:`✓`}),(0,b.jsx)(`span`,{children:e})]},e)),(0,b.jsx)(`div`,{className:`dout-review-notice`,children:`These materials may need to be supplied separately. ZapDocs does not independently verify closing requirements.`})]})]})}),(0,b.jsx)(`section`,{className:`dout-section`,children:(0,b.jsxs)(`div`,{className:`dout-container dout-faq-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`dout-label`,children:`FREQUENTLY ASKED QUESTIONS`}),(0,b.jsx)(`h2`,{className:`dout-large-heading`,children:`Questions about document outputs?`}),(0,b.jsx)(`p`,{className:`dout-body-text`,children:`Learn more about generating, downloading and reviewing your ZapDocs documents.`}),(0,b.jsx)(`a`,{href:`/help-center`,className:`dout-text-link`,children:`Visit the Help Center →`})]}),(0,b.jsx)(`div`,{className:`dout-faq-list`,children:[[`Which states does ZapDocs support?`,`ZapDocs currently provides configured private lending document workflows for Florida and California.`],[`Are the documents editable?`,`Supported Word document outputs can be downloaded and edited using compatible document editing software.`],[`Can I generate individual documents?`,`Supported standalone servicing agreements and lender disclosures can be generated individually where available.`],[`Can I preview documents before downloading?`,`Document previews are available for supported outputs, subject to the availability of the document renderer.`],[`Can I regenerate documents when loan terms change?`,`Yes. Update your saved loan information and generate a revised document package. Previously downloaded files will not automatically update.`],[`Are generated documents ready to sign?`,`Generated documents require review for accuracy, applicability and transaction-specific requirements before execution. ZapDocs does not replace independent legal review.`]].map(([e,t])=>(0,b.jsxs)(`details`,{className:`dout-faq-item`,children:[(0,b.jsx)(`summary`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))})]})}),(0,b.jsx)(`section`,{className:`dout-cta-section`,children:(0,b.jsx)(`div`,{className:`dout-container`,children:(0,b.jsxs)(`div`,{className:`dout-cta`,children:[(0,b.jsx)(`div`,{className:`dout-cta-label`,children:`EXPERIENCE ZAPDOCS`}),(0,b.jsxs)(`h2`,{children:[`Your next closing package.`,(0,b.jsx)(`br`,{}),`A simpler way to prepare it.`]}),(0,b.jsx)(`p`,{children:`Discover how ZapDocs helps private lending professionals prepare coordinated documents and reduce repetitive transaction data entry.`}),(0,b.jsxs)(`div`,{className:`dout-cta-actions`,children:[(0,b.jsx)(`a`,{href:`/demo`,className:`dout-primary`,children:`Book a Demo →`}),(0,b.jsx)(`a`,{href:`/pricing`,className:`dout-cta-secondary`,children:`View Pricing`})]})]})})})]}),(0,b.jsx)(`footer`,{className:`dout-footer`,children:(0,b.jsxs)(`div`,{className:`dout-container`,children:[(0,b.jsxs)(`div`,{className:`dout-footer-top`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{children:`ZapDocs`}),(0,b.jsx)(`p`,{children:`Document preparation software built for private lending professionals.`})]}),(0,b.jsxs)(`div`,{className:`dout-footer-links`,children:[(0,b.jsx)(`a`,{href:`/platform`,children:`Platform`}),(0,b.jsx)(`a`,{href:`/pricing`,children:`Pricing`}),(0,b.jsx)(`a`,{href:`/help-center`,children:`Help Center`}),(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy`}),(0,b.jsx)(`a`,{href:`/terms`,children:`Terms`})]})]}),(0,b.jsxs)(`div`,{className:`dout-footer-bottom`,children:[(0,b.jsxs)(`span`,{children:[`© `,new Date().getFullYear(),` ZapDocs. All rights reserved.`]}),(0,b.jsx)(`span`,{children:`ZapDocs is not a law firm and does not provide legal advice.`})]})]})}),(0,b.jsx)(`style`,{children:`
        .dout-page {
          background: #ffffff;
          color: #101c32;
          font-family: Inter, Arial, sans-serif;
          min-height: 100vh;
        }

        .dout-page * {
          box-sizing: border-box;
        }

        .dout-container {
          width: min(1200px, calc(100% - 64px));
          margin: 0 auto;
        }

        .dout-hero {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #f4f7fc 65%,
            #eaf0ff 100%
          );
          padding: 90px 0;
        }

        .dout-hero-grid,
        .dout-split-grid,
        .dout-faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 65px;
          align-items: center;
        }

        .dout-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: white;
          border: 1px solid #dfe5ee;
          border-radius: 30px;
          padding: 9px 15px;
          color: #526278;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1.3px;
          margin-bottom: 25px;
        }

        .dout-dot {
          width: 7px;
          height: 7px;
          background: #3d63f5;
          border-radius: 50%;
        }

        .dout-hero h1 {
          font-size: clamp(40px, 4.6vw, 62px);
          font-weight: 750;
          line-height: 1.1;
          letter-spacing: -2.8px;
          margin: 0 0 25px;
          color: #101c32;
        }

        .dout-hero h1 span {
          display: block;
          color: #3d63f5;
          margin-top: 5px;
        }

        .dout-hero-content > p {
          color: #637287;
          font-size: 17px;
          line-height: 1.85;
          max-width: 550px;
          margin: 0 0 30px;
        }

        .dout-actions,
        .dout-cta-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 13px;
        }

        .dout-primary,
        .dout-secondary,
        .dout-cta-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 26px;
          border-radius: 30px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 650;
          transition: all 0.2s ease;
        }

        .dout-primary {
          background: #3d63f5;
          color: white;
          border: 1px solid #3d63f5;
          box-shadow: 0 8px 18px #3d63f526;
        }

        .dout-primary:hover {
          background: #284ce1;
          color: white;
          transform: translateY(-2px);
        }

        .dout-secondary {
          background: white;
          color: #101c32;
          border: 1px solid #d6deea;
        }

        .dout-secondary:hover {
          background: #f1f5fa;
        }

        .dout-support {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 27px;
          color: #64748b;
          font-size: 11px;
          font-weight: 600;
        }

        .dout-preview {
          background: #e4eaf6;
          border: 1px solid #dfe6f2;
          padding: 20px;
          border-radius: 25px;
          box-shadow: 0 25px 65px #172b4520;
          min-width: 0;
        }

        .dout-window {
          background: white;
          border: 1px solid #dce3ed;
          border-radius: 15px;
          overflow: hidden;
        }

        .dout-window-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 17px 20px;
          border-bottom: 1px solid #e5eaf1;
        }

        .dout-brand {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .dout-logo {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: #3d63f5;
          color: white;
          display: grid;
          place-items: center;
          font-size: 18px;
          font-weight: 800;
        }

        .dout-brand strong {
          display: block;
          font-size: 13px;
        }

        .dout-brand small {
          display: block;
          color: #8491a4;
          font-size: 10px;
          margin-top: 3px;
        }

        .dout-preview-tag {
          background: #eff3f9;
          color: #637287;
          border-radius: 20px;
          padding: 6px 12px;
          font-size: 10px;
          font-weight: 600;
        }

        .dout-window-body {
          padding: 24px;
        }

        .dout-small-label {
          font-size: 10px;
          color: #8491a4;
          letter-spacing: 1.2px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .dout-window-body > h2 {
          font-size: 23px;
          margin: 0 0 8px;
        }

        .dout-window-description {
          color: #8491a4;
          font-size: 12px;
          line-height: 1.6;
          margin: 0 0 20px;
        }

        .dout-state-selector {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #f1f4f9;
          border: 1px solid #e1e7ef;
          border-radius: 9px;
          padding: 4px;
          margin-bottom: 20px;
          gap: 4px;
        }

        .dout-state-button {
          border: 0;
          background: transparent;
          color: #64748b;
          padding: 11px 10px;
          font-family: inherit;
          font-size: 12px;
          font-weight: 650;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .dout-state-button.active {
          background: #3d63f5;
          color: white;
          box-shadow: 0 3px 8px #3d63f525;
        }

        .dout-state-button:focus-visible {
          outline: 2px solid #101c32;
          outline-offset: 2px;
        }

        .dout-package-summary {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 20px;
        }

        .dout-package-summary > div {
          border: 1px solid #e1e7ef;
          background: #f8fafc;
          border-radius: 9px;
          padding: 13px;
        }

        .dout-package-summary small {
          display: block;
          font-size: 10px;
          color: #64748b;
          margin-bottom: 7px;
        }

        .dout-package-summary strong {
          font-size: 17px;
        }

        .dout-list-heading {
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .dout-document-list {
          border: 1px solid #e1e7ef;
          border-radius: 10px;
          overflow: hidden;
        }

        .dout-document-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px;
          border-bottom: 1px solid #edf1f5;
        }

        .dout-document-row:last-child {
          border-bottom: 0;
        }

        .dout-file-icon {
          width: 34px;
          height: 39px;
          background: #edf2ff;
          color: #3d63f5;
          display: grid;
          place-items: center;
          border-radius: 7px;
          flex-shrink: 0;
        }

        .dout-document-info {
          flex: 1;
          min-width: 0;
        }

        .dout-document-info strong {
          display: block;
          font-size: 12px;
          line-height: 1.4;
          margin-bottom: 4px;
        }

        .dout-document-info small {
          display: block;
          font-size: 10px;
          color: #8491a4;
        }

        .dout-file-format {
          font-size: 9px;
          font-weight: 700;
          color: #3d63f5;
          background: #edf2ff;
          padding: 5px 8px;
          border-radius: 4px;
          white-space: nowrap;
        }

        .dout-download-preview {
          display: block;
          margin-top: 20px;
          background: #3d63f5;
          color: white;
          border-radius: 8px;
          padding: 14px;
          text-align: center;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
        }

        .dout-download-preview:hover {
          background: #284ce1;
          color: white;
        }

        .dout-preview-note {
          color: #8491a4;
          text-align: center;
          font-size: 10px;
          line-height: 1.6;
          margin-top: 17px;
        }

        .dout-benefits {
          padding: 35px 0;
          border-top: 1px solid #e5eaf0;
          border-bottom: 1px solid #e5eaf0;
        }

        .dout-benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          text-align: center;
        }

        .dout-benefit-grid strong {
          font-size: 17px;
        }

        .dout-benefit-grid p {
          color: #64748b;
          font-size: 13px;
          margin: 9px 0 0;
        }

        .dout-section {
          padding: 90px 0;
          scroll-margin-top: 100px;
        }

        .dout-section-heading {
          max-width: 760px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .dout-label {
          color: #3d63f5;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 1.7px;
          margin-bottom: 20px;
        }

        .dout-section-heading h2,
        .dout-large-heading {
          color: #101c32;
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1.18;
          letter-spacing: -1.6px;
          margin: 0 0 20px;
        }

        .dout-section-heading p,
        .dout-body-text {
          color: #64748b;
          font-size: 16px;
          line-height: 1.85;
        }

        .dout-feature-grid,
        .dout-format-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .dout-feature-card,
        .dout-format-card,
        .dout-process-card {
          border: 1px solid #dfe5ed;
          background: white;
          border-radius: 15px;
          padding: 30px;
          transition: all 0.25s ease;
        }

        .dout-feature-card:hover,
        .dout-format-card:hover,
        .dout-process-card:hover {
          transform: translateY(-4px);
          border-color: #a8b8f8;
          box-shadow: 0 15px 35px #172b4510;
        }

        .dout-feature-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .dout-feature-top > span {
          color: #94a3b8;
          font-size: 12px;
          font-weight: 650;
        }

        .dout-feature-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          background: #edf2ff;
          color: #3d63f5;
          border-radius: 12px;
          font-size: 25px;
          font-weight: 700;
        }

        .dout-feature-card h3,
        .dout-format-card h3,
        .dout-process-card h3 {
          color: #101c32;
          font-size: 19px;
          margin: 0 0 13px;
        }

        .dout-feature-card p,
        .dout-format-card p,
        .dout-process-card p {
          font-size: 14px;
          color: #64748b;
          line-height: 1.8;
          margin: 0;
        }

        .dout-states-section,
        .dout-formats-section,
        .dout-review-section {
          background: #f6f8fc;
          border-top: 1px solid #e5eaf1;
          border-bottom: 1px solid #e5eaf1;
          padding: 90px 0;
        }

        .dout-state-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .dout-state-card {
          background: white;
          border: 1px solid #dfe5ed;
          padding: 35px;
          border-radius: 17px;
        }

        .dout-state-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-bottom: 27px;
        }

        .dout-state-abbreviation {
          width: 60px;
          height: 60px;
          background: #edf2ff;
          color: #3d63f5;
          border-radius: 13px;
          display: grid;
          place-items: center;
          font-size: 23px;
          font-weight: 800;
        }

        .dout-state-tag {
          background: #e5f8ed;
          color: #16834c;
          font-size: 10px;
          font-weight: 650;
          padding: 7px 11px;
          border-radius: 20px;
        }

        .dout-state-card h3 {
          font-size: 25px;
          margin: 0 0 15px;
        }

        .dout-state-card > p {
          font-size: 14px;
          color: #64748b;
          line-height: 1.8;
        }

        .dout-state-document-list {
          display: grid;
          gap: 16px;
          padding: 25px 0;
          margin-top: 20px;
          border-top: 1px solid #e5eaf0;
        }

        .dout-state-document-list > div {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #526278;
          font-size: 14px;
        }

        .dout-state-document-list span {
          color: #16834c;
          font-weight: 750;
        }

        .dout-state-footnote {
          padding-top: 17px;
          border-top: 1px solid #e5eaf0;
          font-size: 11px;
          color: #8491a4;
          line-height: 1.7;
        }

        .dout-text-link {
          display: inline-block;
          margin-top: 15px;
          color: #3d63f5;
          font-size: 14px;
          font-weight: 650;
          text-decoration: none;
        }

        .dout-text-link:hover {
          text-decoration: underline;
        }

        .dout-standalone-window {
          border: 1px solid #dfe5ed;
          border-radius: 17px;
          background: #f8fafc;
          padding: 25px;
          box-shadow: 0 10px 35px #172b4508;
        }

        .dout-standalone-heading {
          margin-bottom: 25px;
        }

        .dout-standalone-heading h3 {
          font-size: 21px;
          margin: 0 0 7px;
        }

        .dout-standalone-heading p {
          color: #64748b;
          font-size: 12px;
          margin: 0;
        }

        .dout-standalone-card {
          display: flex;
          align-items: center;
          gap: 14px;
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 13px;
        }

        .dout-standalone-icon {
          width: 43px;
          height: 50px;
          background: #edf2ff;
          color: #3d63f5;
          display: grid;
          place-items: center;
          font-size: 24px;
          border-radius: 9px;
          flex-shrink: 0;
        }

        .dout-standalone-card > div:nth-child(2) {
          flex: 1;
        }

        .dout-standalone-card h4 {
          font-size: 14px;
          margin: 0 0 6px;
        }

        .dout-standalone-card p {
          font-size: 11px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        .dout-standalone-format {
          color: #3d63f5;
          background: #edf2ff;
          padding: 6px 9px;
          border-radius: 5px;
          font-weight: 700;
          font-size: 10px;
        }

        .dout-format-icon {
          width: 56px;
          height: 66px;
          border-radius: 11px;
          display: grid;
          place-items: center;
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 25px;
        }

        .dout-format-icon.word {
          background: #e8efff;
          color: #2455d6;
        }

        .dout-format-icon.pdf {
          background: #fcecec;
          color: #dc4444;
          font-size: 15px;
        }

        .dout-format-icon.package {
          background: #edf2ff;
          color: #3d63f5;
          font-size: 28px;
        }

        .dout-format-extension {
          display: inline-block;
          background: #f1f4f8;
          color: #64748b;
          padding: 6px 10px;
          border-radius: 5px;
          font-size: 10px;
          font-weight: 700;
          margin-top: 23px;
        }

        .dout-process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .dout-process-number {
          width: 45px;
          height: 45px;
          background: #edf2ff;
          color: #3d63f5;
          display: grid;
          place-items: center;
          border-radius: 10px;
          font-size: 17px;
          font-weight: 750;
          margin-bottom: 25px;
        }

        .dout-review-card {
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 16px;
          padding: 30px;
        }

        .dout-review-card h3 {
          font-size: 21px;
          margin: 0 0 23px;
        }

        .dout-review-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 0;
          border-bottom: 1px solid #edf1f5;
          font-size: 14px;
          color: #526278;
        }

        .dout-review-check {
          background: #edf2ff;
          color: #3d63f5;
          width: 27px;
          height: 27px;
          display: grid;
          place-items: center;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 750;
          flex-shrink: 0;
        }

        .dout-review-notice {
          margin-top: 22px;
          padding: 16px;
          background: #f6f8fc;
          border: 1px solid #e1e7ef;
          border-radius: 8px;
          color: #64748b;
          font-size: 12px;
          line-height: 1.7;
        }

        .dout-faq-grid {
          align-items: start;
        }

        .dout-faq-list {
          display: grid;
          gap: 13px;
        }

        .dout-faq-item {
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 11px;
          padding: 19px;
        }

        .dout-faq-item summary {
          color: #101c32;
          cursor: pointer;
          font-size: 14px;
          font-weight: 650;
        }

        .dout-faq-item p {
          font-size: 13px;
          color: #64748b;
          line-height: 1.8;
          margin: 15px 0 0;
        }

        .dout-cta-section {
          padding: 0 0 85px;
        }

        .dout-cta {
          background: linear-gradient(
            135deg,
            #101c32,
            #172b52
          );
          color: white;
          border-radius: 22px;
          padding: 70px 25px;
          text-align: center;
        }

        .dout-cta-label {
          color: #a6b9ff;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 1.8px;
          margin-bottom: 22px;
        }

        .dout-cta h2 {
          color: white;
          font-size: clamp(32px, 4vw, 46px);
          line-height: 1.2;
          letter-spacing: -1.5px;
          margin: 0 0 22px;
        }

        .dout-cta p {
          color: #c1cce0;
          font-size: 16px;
          line-height: 1.8;
          max-width: 650px;
          margin: 0 auto 28px;
        }

        .dout-cta-actions {
          justify-content: center;
        }

        .dout-cta-secondary {
          color: white;
          border: 1px solid #ffffff50;
        }

        .dout-cta-secondary:hover {
          background: #ffffff15;
          color: white;
        }

        .dout-footer {
          background: #f8fafc;
          border-top: 1px solid #e2e7ef;
          padding: 45px 0 25px;
        }

        .dout-footer-top {
          display: flex;
          justify-content: space-between;
          gap: 25px;
          flex-wrap: wrap;
        }

        .dout-footer-top h3 {
          font-size: 23px;
          margin: 0 0 10px;
        }

        .dout-footer-top p {
          color: #64748b;
          font-size: 13px;
          max-width: 350px;
          line-height: 1.7;
        }

        .dout-footer-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 23px;
        }

        .dout-footer-links a {
          color: #526278;
          font-size: 13px;
          text-decoration: none;
        }

        .dout-footer-links a:hover {
          color: #3d63f5;
        }

        .dout-footer-bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          color: #64748b;
          font-size: 11px;
          border-top: 1px solid #dfe5ed;
          margin-top: 30px;
          padding-top: 23px;
        }

        @media (max-width: 1050px) {
          .dout-hero-grid,
          .dout-split-grid,
          .dout-faq-grid {
            gap: 35px;
          }

          .dout-hero h1 {
            font-size: 44px;
          }

          .dout-preview {
            padding: 12px;
          }

          .dout-feature-grid,
          .dout-process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 800px) {
          .dout-container {
            width: calc(100% - 36px);
          }

          .dout-hero-grid,
          .dout-split-grid,
          .dout-faq-grid,
          .dout-state-grid {
            grid-template-columns: 1fr;
          }

          .dout-hero {
            padding: 60px 0;
          }

          .dout-hero h1 {
            font-size: 42px;
            letter-spacing: -1.8px;
          }

          .dout-preview {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
          }

          .dout-benefit-grid,
          .dout-format-grid {
            grid-template-columns: 1fr;
          }

          .dout-benefit-grid {
            gap: 30px;
          }

          .dout-section,
          .dout-states-section,
          .dout-formats-section,
          .dout-review-section {
            padding: 60px 0;
          }

          .dout-cta-section {
            padding-bottom: 50px;
          }
        }

        @media (max-width: 480px) {
          .dout-hero h1 {
            font-size: 36px;
          }

          .dout-feature-grid,
          .dout-process-grid {
            grid-template-columns: 1fr;
          }

          .dout-window-body {
            padding: 15px;
          }

          .dout-document-row {
            padding: 10px;
          }

          .dout-document-info strong {
            font-size: 11px;
          }

          .dout-state-card,
          .dout-review-card,
          .dout-feature-card,
          .dout-format-card {
            padding: 23px;
          }

          .dout-standalone-window {
            padding: 15px;
          }

          .dout-standalone-card {
            padding: 13px;
            gap: 9px;
          }

          .dout-cta {
            padding: 45px 20px;
          }
        }
      `})]})}var j=[{id:`dashboard`,number:`01`,icon:`▦`,title:`Dashboard & Loans`,heading:`Manage your lending transactions.`,description:`Your dashboard is the starting point for managing loan records. Create new transactions, reopen existing loans and maintain organized transaction information.`,items:[`Create a new loan record`,`Access previously saved loans`,`Review existing transaction information`,`Update negotiated loan terms`,`Return to saved transactions`]},{id:`information`,number:`02`,icon:`▤`,title:`Loan Information`,heading:`Everything your loan documents need.`,description:`Enter financing terms, property information and party details in one centralized loan record. Reuse saved profiles to reduce repetitive data entry.`,items:[`Loan amount, interest rate and lien position`,`Property address and legal vesting`,`Borrower and guarantor information`,`Lender and servicing information`,`Brokerage and trustee information`]},{id:`payments`,number:`03`,icon:`$`,title:`Payment Calculations`,heading:`Review your financing structure.`,description:`Use payment calculations to estimate monthly installments, prepaid interest and balloon amounts. Review all calculated amounts against the agreed financing terms.`,items:[`Interest-only payment estimates`,`Multiple interest rate tiers`,`Prepaid interest arrangements`,`Deferred interest calculations`,`Custom balloon payment amounts`]},{id:`documents`,number:`04`,icon:`▧`,title:`Document Controls`,heading:`From transaction information to documents.`,description:`Use the document preparation controls to save your loan, review the transaction and generate supported state-specific documents.`,items:[`Save Loan`,`Preview Terms`,`Preview Documents`,`Generate Documents`,`Servicing Agreement and Lender Disclosures`]}],ze=[{title:`Save Loan`,icon:`✓`,description:`Save the transaction information so you can return to the loan record later.`,category:`Loan management`},{title:`Preview Terms`,icon:`◎`,description:`Review financing terms, payment schedules and transaction information before generating documents.`,category:`Transaction review`},{title:`Preview Documents`,icon:`▤`,description:`Review available rendered document previews before downloading the prepared documents.`,category:`Document review`},{title:`Generate Documents`,icon:`↓`,description:`Prepare the configured state-specific loan document package using the transaction information.`,category:`Document generation`},{title:`Servicing Agreement`,icon:`▧`,description:`Generate a supported standalone servicing agreement using applicable loan and servicing details.`,category:`Standalone document`},{title:`Lender Disclosures`,icon:`↗`,description:`Prepare supported lender disclosure documents where applicable to the transaction.`,category:`Standalone document`}],Be=[[`Where do I create a new loan?`,`Open your ZapDocs workspace and select the option to create a new loan record. Select the applicable state and begin entering the transaction information.`],[`Can I save a loan before completing every field?`,`Use the Save Loan control to retain transaction information, subject to the application's required-field validation.`],[`Can I override calculated payment amounts?`,`Where supported, custom payment and balloon amounts can be entered. Review these amounts against the agreed financing terms before generating documents.`],[`What happens when I change a saved loan?`,`You can update the transaction and generate revised documents. Previously downloaded documents will not automatically update.`],[`Are servicing agreements generated separately?`,`Supported servicing agreements and lender disclosures can be prepared through their respective standalone document controls.`],[`Does ZapDocs verify that my loan complies with applicable law?`,`No. ZapDocs is document preparation software. Users remain responsible for verifying transaction information, applicable requirements and obtaining appropriate professional review.`]];function Ve(){let[e,t]=(0,_.useState)(`dashboard`),n=j.find(t=>t.id===e);return(0,_.useEffect)(()=>{document.title=`Product Guide | ZapDocs`},[]),(0,b.jsxs)(`div`,{className:`pg-page`,children:[(0,b.jsx)(C,{}),(0,b.jsxs)(`main`,{children:[(0,b.jsx)(`section`,{className:`pg-hero`,children:(0,b.jsxs)(`div`,{className:`pg-container pg-hero-grid`,children:[(0,b.jsxs)(`div`,{className:`pg-hero-content`,children:[(0,b.jsxs)(`div`,{className:`pg-eyebrow`,children:[(0,b.jsx)(`span`,{className:`pg-dot`}),`ZAPDOCS / PRODUCT GUIDE`]}),(0,b.jsxs)(`h1`,{children:[`Get more from`,(0,b.jsx)(`span`,{children:`your lending workspace.`})]}),(0,b.jsx)(`p`,{children:`Learn how to navigate ZapDocs, manage loan records, review financing terms and prepare coordinated private lending documents from one centralized workspace.`}),(0,b.jsxs)(`div`,{className:`pg-actions`,children:[(0,b.jsx)(`a`,{href:`#product-guide`,className:`pg-primary`,children:`Explore Product Guide →`}),(0,b.jsx)(`a`,{href:`/demo`,className:`pg-secondary`,children:`Book a Demo`})]}),(0,b.jsxs)(`div`,{className:`pg-support`,children:[(0,b.jsx)(`span`,{children:`✓ Workspace navigation`}),(0,b.jsx)(`span`,{children:`✓ Payment calculations`}),(0,b.jsx)(`span`,{children:`✓ Document controls`})]})]}),(0,b.jsx)(`div`,{className:`pg-preview`,children:(0,b.jsxs)(`div`,{className:`pg-window`,children:[(0,b.jsxs)(`div`,{className:`pg-window-header`,children:[(0,b.jsxs)(`div`,{className:`pg-brand`,children:[(0,b.jsx)(`div`,{className:`pg-logo`,children:`Z`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`ZapDocs`}),(0,b.jsx)(`small`,{children:`Loan Workspace`})]})]}),(0,b.jsx)(`span`,{className:`pg-preview-tag`,children:`Product preview`})]}),(0,b.jsxs)(`div`,{className:`pg-app-layout`,children:[(0,b.jsxs)(`aside`,{className:`pg-app-sidebar`,children:[(0,b.jsx)(`div`,{className:`pg-app-sidebar-label`,children:`WORKSPACE`}),[[`▦`,`Dashboard`],[`▤`,`Loans`],[`＋`,`New Loan`],[`◎`,`Saved Profiles`]].map(([e,t])=>(0,b.jsxs)(`div`,{className:t===`Loans`?`pg-app-nav active`:`pg-app-nav`,children:[(0,b.jsx)(`span`,{children:e}),t]},t)),(0,b.jsx)(`div`,{className:`pg-app-sidebar-label second`,children:`RESOURCES`}),(0,b.jsxs)(`div`,{className:`pg-app-nav`,children:[(0,b.jsx)(`span`,{children:`?`}),`Help Center`]})]}),(0,b.jsxs)(`div`,{className:`pg-app-content`,children:[(0,b.jsx)(`div`,{className:`pg-small-label`,children:`CURRENT TRANSACTION`}),(0,b.jsx)(`h2`,{children:`Loan Information`}),(0,b.jsx)(`p`,{className:`pg-app-description`,children:`Loan #1048 · Florida`}),(0,b.jsx)(`div`,{className:`pg-app-field-grid`,children:[[`Loan Amount`,`$450,000`],[`Interest Rate`,`10.50%`],[`Lien Position`,`First`],[`Loan Term`,`12 months`]].map(([e,t])=>(0,b.jsxs)(`div`,{className:`pg-app-field`,children:[(0,b.jsx)(`small`,{children:e}),(0,b.jsx)(`strong`,{children:t})]},e))}),(0,b.jsxs)(`div`,{className:`pg-app-payment`,children:[(0,b.jsx)(`small`,{children:`Estimated monthly payment`}),(0,b.jsx)(`strong`,{children:`$3,937.50`}),(0,b.jsx)(`span`,{children:`Interest-only estimate`})]}),(0,b.jsxs)(`div`,{className:`pg-app-buttons`,children:[(0,b.jsx)(`span`,{className:`pg-app-save`,children:`Save Loan`}),(0,b.jsx)(`span`,{className:`pg-app-review`,children:`Preview Terms`})]}),(0,b.jsx)(`div`,{className:`pg-app-generate`,children:`Generate Documents →`})]})]}),(0,b.jsx)(`div`,{className:`pg-preview-note`,children:`Illustrative workspace · Fictional loan data`})]})})]})}),(0,b.jsx)(`section`,{className:`pg-benefits`,children:(0,b.jsxs)(`div`,{className:`pg-container pg-benefit-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Learn the workspace`}),(0,b.jsx)(`p`,{children:`Understand your main platform controls.`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Review financing terms`}),(0,b.jsx)(`p`,{children:`Maintain control over transaction details.`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Prepare your documents`}),(0,b.jsx)(`p`,{children:`Generate supported document outputs.`})]})]})}),(0,b.jsx)(`section`,{className:`pg-section`,id:`product-guide`,children:(0,b.jsxs)(`div`,{className:`pg-container`,children:[(0,b.jsxs)(`div`,{className:`pg-section-heading`,children:[(0,b.jsx)(`div`,{className:`pg-label`,children:`EXPLORE THE PLATFORM`}),(0,b.jsx)(`h2`,{children:`Your guide to the ZapDocs workspace.`}),(0,b.jsx)(`p`,{children:`Select a section to learn how the platform's main controls fit into your lending workflow.`})]}),(0,b.jsxs)(`div`,{className:`pg-guide-layout`,children:[(0,b.jsxs)(`nav`,{className:`pg-guide-sidebar`,"aria-label":`Product guide sections`,children:[(0,b.jsx)(`div`,{className:`pg-guide-sidebar-heading`,children:`PRODUCT GUIDE`}),j.map(n=>(0,b.jsxs)(`button`,{type:`button`,"aria-pressed":e===n.id,onClick:()=>t(n.id),className:e===n.id?`pg-guide-nav active`:`pg-guide-nav`,children:[(0,b.jsx)(`span`,{className:`pg-guide-nav-icon`,children:n.icon}),(0,b.jsx)(`span`,{children:n.title}),(0,b.jsx)(`span`,{className:`pg-guide-nav-arrow`,children:`→`})]},n.id))]}),(0,b.jsxs)(`article`,{className:`pg-guide-content`,"aria-live":`polite`,children:[(0,b.jsxs)(`div`,{className:`pg-guide-content-top`,children:[(0,b.jsx)(`div`,{className:`pg-guide-large-icon`,children:n.icon}),(0,b.jsxs)(`span`,{className:`pg-guide-number`,children:[`SECTION `,n.number]})]}),(0,b.jsx)(`div`,{className:`pg-label`,children:n.title.toUpperCase()}),(0,b.jsx)(`h2`,{children:n.heading}),(0,b.jsx)(`p`,{children:n.description}),(0,b.jsx)(`div`,{className:`pg-guide-checklist`,children:n.items.map(e=>(0,b.jsxs)(`div`,{className:`pg-guide-check-row`,children:[(0,b.jsx)(`span`,{children:`✓`}),e]},e))}),(0,b.jsx)(`a`,{href:`/how-it-works`,className:`pg-text-link`,children:`Explore the full workflow →`})]})]})]})}),(0,b.jsx)(`section`,{className:`pg-muted-section`,children:(0,b.jsxs)(`div`,{className:`pg-container pg-split-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`pg-label`,children:`TRANSACTION INFORMATION`}),(0,b.jsx)(`h2`,{className:`pg-large-heading`,children:`Enter your loan information once.`}),(0,b.jsx)(`p`,{className:`pg-body-text`,children:`ZapDocs brings financing, property and party information into a centralized transaction record.`}),(0,b.jsx)(`p`,{className:`pg-body-text`,children:`Complete the applicable sections and reuse saved lender, brokerage, trustee and servicing profiles when preparing additional loans.`}),(0,b.jsx)(`a`,{href:`/team-workspace`,className:`pg-text-link`,children:`Explore the team workspace →`})]}),(0,b.jsxs)(`div`,{className:`pg-information-card`,children:[(0,b.jsxs)(`div`,{className:`pg-information-heading`,children:[(0,b.jsx)(`h3`,{children:`Loan Information`}),(0,b.jsx)(`p`,{children:`Transaction information categories`})]}),[[`01`,`Financing Terms`,`Loan amount, interest rate, dates and lien position`],[`02`,`Property Information`,`Collateral address, county and property details`],[`03`,`Borrower Information`,`Legal vesting, addresses and signer information`],[`04`,`Lender Information`,`Lender vesting and mailing information`],[`05`,`Brokerage & Servicing`,`Applicable company and representative details`]].map(([e,t,n])=>(0,b.jsxs)(`div`,{className:`pg-information-row`,children:[(0,b.jsx)(`div`,{className:`pg-information-number`,children:e}),(0,b.jsxs)(`div`,{className:`pg-information-text`,children:[(0,b.jsx)(`h4`,{children:t}),(0,b.jsx)(`p`,{children:n})]}),(0,b.jsx)(`span`,{className:`pg-information-arrow`,children:`→`})]},e))]})]})}),(0,b.jsx)(`section`,{className:`pg-section`,children:(0,b.jsxs)(`div`,{className:`pg-container pg-split-grid`,children:[(0,b.jsxs)(`div`,{className:`pg-calculation-card`,children:[(0,b.jsxs)(`div`,{className:`pg-calculation-header`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`pg-small-label`,children:`PAYMENT CALCULATIONS`}),(0,b.jsx)(`h3`,{children:`Financing Summary`})]}),(0,b.jsx)(`span`,{className:`pg-example-tag`,children:`Example`})]}),(0,b.jsx)(`div`,{className:`pg-calculation-grid`,children:[[`Principal balance`,`$500,000.00`],[`Annual interest rate`,`12.00%`],[`Loan term`,`12 months`],[`Payment structure`,`Interest-only`]].map(([e,t])=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`small`,{children:e}),(0,b.jsx)(`strong`,{children:t})]},e))}),(0,b.jsxs)(`div`,{className:`pg-payment-result`,children:[(0,b.jsx)(`small`,{children:`Estimated monthly payment`}),(0,b.jsx)(`strong`,{children:`$5,000.00`}),(0,b.jsx)(`span`,{children:`Principal × annual rate ÷ 12`})]}),(0,b.jsxs)(`div`,{className:`pg-calculation-row`,children:[(0,b.jsx)(`span`,{children:`Principal due at maturity`}),(0,b.jsx)(`strong`,{children:`$500,000.00`})]}),(0,b.jsxs)(`div`,{className:`pg-calculation-row`,children:[(0,b.jsx)(`span`,{children:`Payment basis`}),(0,b.jsx)(`strong`,{children:`Monthly interest-only`})]}),(0,b.jsx)(`div`,{className:`pg-calculation-note`,children:`Illustrative calculation only. Actual amounts depend on contractual interest calculations, payment dates and other transaction-specific terms.`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`pg-label`,children:`PAYMENT CALCULATIONS`}),(0,b.jsx)(`h2`,{className:`pg-large-heading`,children:`Understand the numbers behind your loan.`}),(0,b.jsx)(`p`,{className:`pg-body-text`,children:`Review payment calculations before preparing your loan documents. ZapDocs supports flexible financing arrangements within its configured workflows.`}),(0,b.jsx)(`div`,{className:`pg-payment-features`,children:[`Interest-only payment schedules`,`Multiple interest rate tiers`,`Prepaid interest periods`,`Deferred interest arrangements`,`Custom payment and balloon amounts`].map(e=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{children:`✓`}),e]},e))}),(0,b.jsx)(`p`,{className:`pg-body-text`,children:`Always confirm the contractual interest basis, maturity date, prepaid periods and final installment before generation.`})]})]})}),(0,b.jsx)(`section`,{className:`pg-muted-section`,children:(0,b.jsxs)(`div`,{className:`pg-container`,children:[(0,b.jsxs)(`div`,{className:`pg-section-heading`,children:[(0,b.jsx)(`div`,{className:`pg-label`,children:`KNOW YOUR CONTROLS`}),(0,b.jsx)(`h2`,{children:`Every control has a purpose.`}),(0,b.jsx)(`p`,{children:`Understand the difference between saving, reviewing and generating your transaction documents.`})]}),(0,b.jsx)(`div`,{className:`pg-control-grid`,children:ze.map(e=>(0,b.jsxs)(`article`,{className:`pg-control-card`,children:[(0,b.jsxs)(`div`,{className:`pg-control-top`,children:[(0,b.jsx)(`div`,{className:`pg-control-icon`,children:e.icon}),(0,b.jsx)(`span`,{className:`pg-control-category`,children:e.category})]}),(0,b.jsx)(`h3`,{children:e.title}),(0,b.jsx)(`p`,{children:e.description}),(0,b.jsx)(`div`,{className:`pg-control-example`,children:e.title})]},e.title))})]})}),(0,b.jsx)(`section`,{className:`pg-section`,children:(0,b.jsxs)(`div`,{className:`pg-container`,children:[(0,b.jsxs)(`div`,{className:`pg-section-heading`,children:[(0,b.jsx)(`div`,{className:`pg-label`,children:`RECOMMENDED WORKFLOW`}),(0,b.jsx)(`h2`,{children:`From your workspace to your documents.`})]}),(0,b.jsx)(`div`,{className:`pg-process-grid`,children:[[`01`,`Open Workspace`,`Create a loan or reopen an existing transaction.`],[`02`,`Complete Sections`,`Enter applicable transaction and party information.`],[`03`,`Review Terms`,`Confirm financing terms, dates and payment calculations.`],[`04`,`Generate Outputs`,`Prepare and download supported loan documents for review.`]].map(([e,t,n])=>(0,b.jsxs)(`article`,{className:`pg-process-card`,children:[(0,b.jsx)(`div`,{className:`pg-process-number`,children:e}),(0,b.jsx)(`h3`,{children:t}),(0,b.jsx)(`p`,{children:n})]},e))})]})}),(0,b.jsx)(`section`,{className:`pg-muted-section`,children:(0,b.jsxs)(`div`,{className:`pg-container`,children:[(0,b.jsxs)(`div`,{className:`pg-section-heading`,children:[(0,b.jsx)(`div`,{className:`pg-label`,children:`CONTINUE EXPLORING`}),(0,b.jsx)(`h2`,{children:`More resources for your lending workflow.`})]}),(0,b.jsx)(`div`,{className:`pg-resource-grid`,children:[[`How It Works`,`Learn the three-step document preparation process.`,`/how-it-works`],[`Document Outputs`,`Explore available state-specific document packages.`,`/document-outputs`],[`Help Center`,`Find answers to common platform questions.`,`/help-center`]].map(([e,t,n])=>(0,b.jsxs)(`a`,{href:n,className:`pg-resource-card`,children:[(0,b.jsx)(`div`,{className:`pg-resource-icon`,children:`↗`}),(0,b.jsx)(`h3`,{children:e}),(0,b.jsx)(`p`,{children:t}),(0,b.jsx)(`span`,{children:`Explore resource →`})]},e))})]})}),(0,b.jsx)(`section`,{className:`pg-section`,children:(0,b.jsxs)(`div`,{className:`pg-container pg-faq-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`pg-label`,children:`FREQUENTLY ASKED QUESTIONS`}),(0,b.jsx)(`h2`,{className:`pg-large-heading`,children:`Questions about using ZapDocs?`}),(0,b.jsx)(`p`,{className:`pg-body-text`,children:`Learn more about navigating your workspace, managing transactions and generating loan documents.`}),(0,b.jsx)(`a`,{href:`/help-center`,className:`pg-text-link`,children:`Visit the Help Center →`})]}),(0,b.jsx)(`div`,{className:`pg-faq-list`,children:Be.map(([e,t])=>(0,b.jsxs)(`details`,{className:`pg-faq-item`,children:[(0,b.jsx)(`summary`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))})]})}),(0,b.jsx)(`section`,{className:`pg-cta-section`,children:(0,b.jsx)(`div`,{className:`pg-container`,children:(0,b.jsxs)(`div`,{className:`pg-cta`,children:[(0,b.jsx)(`div`,{className:`pg-cta-label`,children:`EXPERIENCE ZAPDOCS`}),(0,b.jsx)(`h2`,{children:`See the workspace in action.`}),(0,b.jsx)(`p`,{children:`Discover how ZapDocs helps private lending professionals manage transaction information and prepare coordinated loan documents.`}),(0,b.jsxs)(`div`,{className:`pg-cta-actions`,children:[(0,b.jsx)(`a`,{href:`/demo`,className:`pg-primary`,children:`Book a Demo →`}),(0,b.jsx)(`a`,{href:`/pricing`,className:`pg-cta-secondary`,children:`View Pricing`})]})]})})})]}),(0,b.jsx)(`footer`,{className:`pg-footer`,children:(0,b.jsxs)(`div`,{className:`pg-container`,children:[(0,b.jsxs)(`div`,{className:`pg-footer-top`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{children:`ZapDocs`}),(0,b.jsx)(`p`,{children:`Document preparation software built for private lending professionals.`})]}),(0,b.jsxs)(`div`,{className:`pg-footer-links`,children:[(0,b.jsx)(`a`,{href:`/platform`,children:`Platform`}),(0,b.jsx)(`a`,{href:`/pricing`,children:`Pricing`}),(0,b.jsx)(`a`,{href:`/help-center`,children:`Help Center`}),(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy`}),(0,b.jsx)(`a`,{href:`/terms`,children:`Terms`})]})]}),(0,b.jsxs)(`div`,{className:`pg-footer-bottom`,children:[(0,b.jsxs)(`span`,{children:[`© `,new Date().getFullYear(),` ZapDocs. All rights reserved.`]}),(0,b.jsx)(`span`,{children:`ZapDocs is not a law firm and does not provide legal advice.`})]})]})}),(0,b.jsx)(`style`,{children:`
        .pg-page {
          background: #ffffff;
          color: #101c32;
          font-family: Inter, Arial, sans-serif;
          min-height: 100vh;
        }

        .pg-page * {
          box-sizing: border-box;
        }

        .pg-container {
          width: min(1200px, calc(100% - 64px));
          margin: 0 auto;
        }

        .pg-hero {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #f4f7fc 65%,
            #eaf0ff 100%
          );
          padding: 95px 0;
        }

        .pg-hero-grid,
        .pg-split-grid,
        .pg-faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 65px;
          align-items: center;
        }

        .pg-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 9px 15px;
          border: 1px solid #dfe5ee;
          border-radius: 30px;
          background: white;
          color: #526278;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1.3px;
          margin-bottom: 25px;
        }

        .pg-dot {
          width: 7px;
          height: 7px;
          background: #3d63f5;
          border-radius: 50%;
        }

        .pg-hero h1 {
          font-size: clamp(40px, 4.6vw, 62px);
          line-height: 1.1;
          font-weight: 750;
          letter-spacing: -2.8px;
          color: #101c32;
          margin: 0 0 25px;
        }

        .pg-hero h1 span {
          display: block;
          color: #3d63f5;
          margin-top: 5px;
        }

        .pg-hero-content > p {
          font-size: 17px;
          line-height: 1.85;
          color: #637287;
          max-width: 550px;
          margin: 0 0 30px;
        }

        .pg-actions,
        .pg-cta-actions {
          display: flex;
          align-items: center;
          gap: 13px;
          flex-wrap: wrap;
        }

        .pg-primary,
        .pg-secondary,
        .pg-cta-secondary {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          padding: 15px 26px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 650;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .pg-primary {
          background: #3d63f5;
          color: white;
          border: 1px solid #3d63f5;
          box-shadow: 0 8px 18px #3d63f526;
        }

        .pg-primary:hover {
          background: #284ce1;
          color: white;
          transform: translateY(-2px);
        }

        .pg-secondary {
          background: white;
          color: #101c32;
          border: 1px solid #d6deea;
        }

        .pg-secondary:hover {
          background: #f1f5fa;
        }

        .pg-support {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 27px;
          color: #64748b;
          font-size: 11px;
          font-weight: 600;
        }

        .pg-preview {
          background: #e4eaf6;
          border: 1px solid #dfe6f2;
          border-radius: 25px;
          padding: 17px;
          box-shadow: 0 25px 65px #172b4520;
          min-width: 0;
        }

        .pg-window {
          background: white;
          border: 1px solid #dce3ed;
          border-radius: 15px;
          overflow: hidden;
        }

        .pg-window-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 17px;
          border-bottom: 1px solid #e5eaf1;
        }

        .pg-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .pg-logo {
          width: 35px;
          height: 35px;
          border-radius: 9px;
          display: grid;
          place-items: center;
          color: white;
          background: #3d63f5;
          font-weight: 800;
          font-size: 18px;
        }

        .pg-brand strong {
          display: block;
          font-size: 13px;
        }

        .pg-brand small {
          display: block;
          color: #8491a4;
          font-size: 10px;
          margin-top: 3px;
        }

        .pg-preview-tag,
        .pg-example-tag {
          background: #eff3f9;
          color: #637287;
          font-size: 10px;
          font-weight: 600;
          padding: 6px 11px;
          border-radius: 20px;
        }

        .pg-app-layout {
          display: grid;
          grid-template-columns: 125px minmax(0, 1fr);
        }

        .pg-app-sidebar {
          background: #f8fafc;
          border-right: 1px solid #e5eaf1;
          padding: 20px 9px;
        }

        .pg-app-sidebar-label {
          color: #94a3b8;
          font-size: 8px;
          letter-spacing: 0.8px;
          font-weight: 700;
          padding: 0 8px;
          margin-bottom: 12px;
        }

        .pg-app-sidebar-label.second {
          margin-top: 27px;
        }

        .pg-app-nav {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #64748b;
          font-size: 10px;
          font-weight: 550;
          padding: 10px 8px;
          border-radius: 6px;
          margin-bottom: 4px;
        }

        .pg-app-nav span {
          font-size: 13px;
        }

        .pg-app-nav.active {
          background: #e9efff;
          color: #3d63f5;
          font-weight: 700;
        }

        .pg-app-content {
          padding: 22px 17px;
          min-width: 0;
        }

        .pg-small-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #8491a4;
          margin-bottom: 9px;
        }

        .pg-app-content > h2 {
          color: #101c32;
          font-size: 21px;
          letter-spacing: -0.6px;
          margin: 0 0 7px;
        }

        .pg-app-description {
          font-size: 11px;
          color: #8491a4;
          margin: 0 0 22px;
        }

        .pg-app-field-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .pg-app-field {
          border: 1px solid #e1e7ef;
          border-radius: 7px;
          padding: 12px 10px;
        }

        .pg-app-field small {
          display: block;
          font-size: 9px;
          color: #8491a4;
          margin-bottom: 7px;
        }

        .pg-app-field strong {
          display: block;
          font-size: 13px;
          color: #101c32;
        }

        .pg-app-payment {
          background: #eef3ff;
          border: 1px solid #dce5ff;
          border-radius: 9px;
          padding: 18px;
          margin-top: 17px;
        }

        .pg-app-payment small {
          display: block;
          color: #526278;
          font-size: 10px;
          margin-bottom: 8px;
        }

        .pg-app-payment strong {
          display: block;
          color: #3d63f5;
          font-size: 26px;
          letter-spacing: -0.6px;
        }

        .pg-app-payment > span {
          color: #8491a4;
          font-size: 9px;
          display: block;
          margin-top: 6px;
        }

        .pg-app-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 19px;
        }

        .pg-app-save,
        .pg-app-review {
          border-radius: 6px;
          font-weight: 650;
          font-size: 10px;
          padding: 10px 5px;
          text-align: center;
        }

        .pg-app-save {
          background: #101c32;
          color: white;
        }

        .pg-app-review {
          background: white;
          border: 1px solid #dce3ed;
          color: #526278;
        }

        .pg-app-generate {
          background: #3d63f5;
          color: white;
          padding: 12px;
          border-radius: 7px;
          font-size: 11px;
          font-weight: 700;
          text-align: center;
          margin-top: 10px;
        }

        .pg-preview-note {
          border-top: 1px solid #edf1f5;
          color: #8491a4;
          font-size: 9px;
          padding: 12px;
          text-align: center;
        }

        .pg-benefits {
          border-top: 1px solid #e5eaf0;
          border-bottom: 1px solid #e5eaf0;
          padding: 35px 0;
        }

        .pg-benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          text-align: center;
        }

        .pg-benefit-grid strong {
          font-size: 17px;
        }

        .pg-benefit-grid p {
          font-size: 13px;
          color: #64748b;
          margin: 9px 0 0;
        }

        .pg-section,
        .pg-muted-section {
          padding: 90px 0;
          scroll-margin-top: 100px;
        }

        .pg-muted-section {
          background: #f6f8fc;
          border-top: 1px solid #e5eaf1;
          border-bottom: 1px solid #e5eaf1;
        }

        .pg-section-heading {
          max-width: 760px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .pg-label {
          color: #3d63f5;
          font-size: 11px;
          letter-spacing: 1.7px;
          font-weight: 750;
          margin-bottom: 20px;
        }

        .pg-section-heading h2,
        .pg-large-heading {
          color: #101c32;
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1.18;
          letter-spacing: -1.6px;
          margin: 0 0 20px;
        }

        .pg-section-heading p,
        .pg-body-text {
          color: #64748b;
          font-size: 16px;
          line-height: 1.85;
        }

        .pg-guide-layout {
          display: grid;
          grid-template-columns: 285px minmax(0, 1fr);
          gap: 25px;
          align-items: start;
        }

        .pg-guide-sidebar {
          background: #f8fafc;
          border: 1px solid #dfe5ed;
          border-radius: 15px;
          padding: 18px;
        }

        .pg-guide-sidebar-heading {
          font-size: 10px;
          color: #8491a4;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 10px 8px;
          margin-bottom: 10px;
        }

        .pg-guide-nav {
          display: flex;
          align-items: center;
          gap: 11px;
          width: 100%;
          text-align: left;
          border: 1px solid transparent;
          background: transparent;
          color: #526278;
          border-radius: 8px;
          padding: 14px 10px;
          font: inherit;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 6px;
          transition: all 0.2s ease;
        }

        .pg-guide-nav:hover {
          background: #edf2ff;
        }

        .pg-guide-nav.active {
          background: #e9efff;
          color: #3d63f5;
          border-color: #dce5ff;
        }

        .pg-guide-nav:focus-visible {
          outline: 2px solid #3d63f5;
          outline-offset: 2px;
        }

        .pg-guide-nav-icon {
          width: 21px;
          text-align: center;
          font-size: 20px;
          font-weight: 700;
        }

        .pg-guide-nav-arrow {
          margin-left: auto;
        }

        .pg-guide-content {
          border: 1px solid #dfe5ed;
          background: white;
          border-radius: 16px;
          padding: 40px;
          min-height: 460px;
          box-shadow: 0 10px 35px #172b4508;
        }

        .pg-guide-content-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
        }

        .pg-guide-large-icon {
          width: 56px;
          height: 56px;
          background: #edf2ff;
          border-radius: 13px;
          color: #3d63f5;
          display: grid;
          place-items: center;
          font-size: 29px;
          font-weight: 750;
        }

        .pg-guide-number {
          color: #94a3b8;
          font-size: 11px;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .pg-guide-content h2 {
          font-size: clamp(25px, 3vw, 34px);
          line-height: 1.25;
          margin: 0 0 17px;
          letter-spacing: -1px;
        }

        .pg-guide-content > p {
          font-size: 15px;
          color: #64748b;
          line-height: 1.85;
          margin: 0;
        }

        .pg-guide-checklist {
          display: grid;
          gap: 15px;
          margin: 27px 0;
          padding-top: 25px;
          border-top: 1px solid #e5eaf0;
        }

        .pg-guide-check-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: #526278;
        }

        .pg-guide-check-row > span {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #e5f8ed;
          color: #16834c;
          font-size: 12px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .pg-text-link {
          display: inline-block;
          color: #3d63f5;
          font-size: 14px;
          font-weight: 650;
          text-decoration: none;
          margin-top: 15px;
        }

        .pg-text-link:hover {
          text-decoration: underline;
        }

        .pg-information-card,
        .pg-calculation-card {
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 17px;
          padding: 28px;
          box-shadow: 0 10px 35px #172b4508;
          min-width: 0;
        }

        .pg-information-heading {
          margin-bottom: 24px;
        }

        .pg-information-heading h3,
        .pg-calculation-header h3 {
          font-size: 23px;
          margin: 0 0 7px;
        }

        .pg-information-heading p {
          color: #64748b;
          font-size: 12px;
          margin: 0;
        }

        .pg-information-row {
          display: flex;
          align-items: center;
          gap: 13px;
          border: 1px solid #e1e7ef;
          border-radius: 10px;
          padding: 15px;
          margin-bottom: 12px;
        }

        .pg-information-row:last-child {
          margin-bottom: 0;
        }

        .pg-information-number {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          background: #edf2ff;
          color: #3d63f5;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 750;
          flex-shrink: 0;
        }

        .pg-information-text {
          flex: 1;
        }

        .pg-information-text h4 {
          margin: 0 0 6px;
          font-size: 13px;
        }

        .pg-information-text p {
          color: #8491a4;
          font-size: 11px;
          line-height: 1.6;
          margin: 0;
        }

        .pg-information-arrow {
          color: #94a3b8;
        }

        .pg-calculation-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 23px;
        }

        .pg-calculation-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .pg-calculation-grid > div {
          background: #f8fafc;
          border: 1px solid #e1e7ef;
          border-radius: 9px;
          padding: 15px;
        }

        .pg-calculation-grid small {
          display: block;
          color: #64748b;
          font-size: 11px;
          margin-bottom: 9px;
        }

        .pg-calculation-grid strong {
          display: block;
          font-size: 16px;
        }

        .pg-payment-result {
          background: #eef3ff;
          border: 1px solid #dce5ff;
          border-radius: 12px;
          padding: 24px;
          margin: 22px 0;
        }

        .pg-payment-result small {
          display: block;
          color: #526278;
          font-size: 12px;
          margin-bottom: 10px;
        }

        .pg-payment-result strong {
          display: block;
          font-size: 38px;
          color: #3d63f5;
          letter-spacing: -1.5px;
        }

        .pg-payment-result > span {
          display: block;
          font-size: 11px;
          color: #8491a4;
          margin-top: 9px;
        }

        .pg-calculation-row {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          border-bottom: 1px solid #edf1f5;
          padding: 14px 0;
          font-size: 12px;
          color: #64748b;
        }

        .pg-calculation-row strong {
          color: #101c32;
          text-align: right;
        }

        .pg-calculation-note {
          color: #8491a4;
          font-size: 11px;
          line-height: 1.7;
          margin-top: 20px;
        }

        .pg-payment-features {
          display: grid;
          gap: 15px;
          margin: 25px 0;
        }

        .pg-payment-features > div {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #526278;
          font-size: 14px;
        }

        .pg-payment-features span {
          color: #16834c;
          font-weight: 750;
        }

        .pg-control-grid,
        .pg-resource-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .pg-control-card,
        .pg-resource-card,
        .pg-process-card {
          border: 1px solid #dfe5ed;
          background: white;
          border-radius: 15px;
          padding: 28px;
          transition: all 0.25s ease;
        }

        .pg-control-card:hover,
        .pg-resource-card:hover,
        .pg-process-card:hover {
          transform: translateY(-4px);
          border-color: #a8b8f8;
          box-shadow: 0 15px 35px #172b4510;
        }

        .pg-control-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 25px;
        }

        .pg-control-icon,
        .pg-resource-icon,
        .pg-process-number {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          background: #edf2ff;
          color: #3d63f5;
          border-radius: 10px;
          font-size: 24px;
          font-weight: 750;
          flex-shrink: 0;
        }

        .pg-control-category {
          font-size: 10px;
          color: #8491a4;
          font-weight: 650;
          text-align: right;
        }

        .pg-control-card h3,
        .pg-resource-card h3,
        .pg-process-card h3 {
          color: #101c32;
          font-size: 19px;
          margin: 0 0 13px;
        }

        .pg-control-card p,
        .pg-resource-card p,
        .pg-process-card p {
          color: #64748b;
          font-size: 14px;
          line-height: 1.8;
          margin: 0;
        }

        .pg-control-card {
          display: flex;
          flex-direction: column;
        }

        .pg-control-example {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          background: #edf2ff;
          color: #3d63f5;
          font-size: 11px;
          font-weight: 700;
          padding: 10px 14px;
          border-radius: 7px;
          margin-top: 23px;
        }

        .pg-process-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .pg-process-number {
          font-size: 16px;
          margin-bottom: 25px;
        }

        .pg-resource-card {
          display: block;
          text-decoration: none;
        }

        .pg-resource-icon {
          margin-bottom: 23px;
        }

        .pg-resource-card > span {
          display: inline-block;
          margin-top: 23px;
          color: #3d63f5;
          font-size: 13px;
          font-weight: 650;
        }

        .pg-faq-grid {
          align-items: start;
        }

        .pg-faq-list {
          display: grid;
          gap: 13px;
        }

        .pg-faq-item {
          border: 1px solid #dfe5ed;
          border-radius: 11px;
          background: white;
          padding: 19px;
        }

        .pg-faq-item summary {
          font-size: 14px;
          color: #101c32;
          cursor: pointer;
          font-weight: 650;
        }

        .pg-faq-item p {
          color: #64748b;
          font-size: 13px;
          line-height: 1.8;
          margin: 15px 0 0;
        }

        .pg-cta-section {
          padding: 0 0 85px;
        }

        .pg-cta {
          background: linear-gradient(
            135deg,
            #101c32,
            #172b52
          );
          color: white;
          border-radius: 22px;
          padding: 70px 25px;
          text-align: center;
        }

        .pg-cta-label {
          color: #a6b9ff;
          font-size: 11px;
          letter-spacing: 1.8px;
          font-weight: 750;
          margin-bottom: 22px;
        }

        .pg-cta h2 {
          color: white;
          font-size: clamp(32px, 4vw, 46px);
          line-height: 1.2;
          letter-spacing: -1.5px;
          margin: 0 0 22px;
        }

        .pg-cta p {
          color: #c1cce0;
          font-size: 16px;
          line-height: 1.8;
          max-width: 650px;
          margin: 0 auto 28px;
        }

        .pg-cta-actions {
          justify-content: center;
        }

        .pg-cta-secondary {
          color: white;
          border: 1px solid #ffffff50;
        }

        .pg-cta-secondary:hover {
          background: #ffffff15;
          color: white;
        }

        .pg-footer {
          background: #f8fafc;
          border-top: 1px solid #e2e7ef;
          padding: 45px 0 25px;
        }

        .pg-footer-top {
          display: flex;
          justify-content: space-between;
          gap: 25px;
          flex-wrap: wrap;
        }

        .pg-footer-top h3 {
          font-size: 23px;
          margin: 0 0 10px;
        }

        .pg-footer-top p {
          color: #64748b;
          font-size: 13px;
          line-height: 1.7;
          max-width: 350px;
        }

        .pg-footer-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 23px;
        }

        .pg-footer-links a {
          color: #526278;
          font-size: 13px;
          text-decoration: none;
        }

        .pg-footer-links a:hover {
          color: #3d63f5;
        }

        .pg-footer-bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          border-top: 1px solid #dfe5ed;
          color: #64748b;
          font-size: 11px;
          padding-top: 23px;
          margin-top: 30px;
        }

        @media (max-width: 1050px) {
          .pg-hero-grid,
          .pg-split-grid,
          .pg-faq-grid {
            gap: 35px;
          }

          .pg-hero h1 {
            font-size: 44px;
          }

          .pg-preview {
            padding: 12px;
          }

          .pg-control-grid,
          .pg-process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pg-app-layout {
            grid-template-columns: 105px minmax(0, 1fr);
          }
        }

        @media (max-width: 800px) {
          .pg-container {
            width: calc(100% - 36px);
          }

          .pg-hero-grid,
          .pg-split-grid,
          .pg-faq-grid,
          .pg-guide-layout {
            grid-template-columns: 1fr;
          }

          .pg-hero {
            padding: 60px 0;
          }

          .pg-hero h1 {
            font-size: 42px;
            letter-spacing: -1.8px;
          }

          .pg-preview {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
          }

          .pg-benefit-grid,
          .pg-resource-grid {
            grid-template-columns: 1fr;
          }

          .pg-benefit-grid {
            gap: 30px;
          }

          .pg-guide-sidebar {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6px;
          }

          .pg-guide-sidebar-heading {
            grid-column: 1 / -1;
          }

          .pg-guide-nav {
            margin-bottom: 0;
          }

          .pg-guide-content {
            min-height: auto;
            padding: 27px;
          }

          .pg-section,
          .pg-muted-section {
            padding: 60px 0;
          }

          .pg-cta-section {
            padding-bottom: 50px;
          }
        }

        @media (max-width: 480px) {
          .pg-hero h1 {
            font-size: 36px;
          }

          .pg-control-grid,
          .pg-process-grid,
          .pg-guide-sidebar {
            grid-template-columns: 1fr;
          }

          .pg-app-layout {
            grid-template-columns: 1fr;
          }

          .pg-app-sidebar {
            display: none;
          }

          .pg-app-content {
            padding: 18px;
          }

          .pg-information-card,
          .pg-calculation-card,
          .pg-guide-content {
            padding: 19px;
          }

          .pg-calculation-grid > div {
            padding: 11px;
          }

          .pg-calculation-grid strong {
            font-size: 13px;
          }

          .pg-payment-result strong {
            font-size: 32px;
          }

          .pg-control-card,
          .pg-resource-card,
          .pg-process-card {
            padding: 23px;
          }

          .pg-cta {
            padding: 45px 20px;
          }
        }
      `})]})}var He=[{number:`01`,icon:`◎`,title:`Create your account`,description:`Register for ZapDocs and follow the account confirmation instructions to access your workspace.`,items:[`Create your ZapDocs account`,`Confirm your email if prompted`,`Sign in to your workspace`,`Explore the dashboard`]},{number:`02`,icon:`+`,title:`Create a sample loan`,description:`Start with a fictional Florida or California transaction to familiarize yourself with the loan preparation process.`,items:[`Select Florida or California`,`Enter a sample loan amount`,`Enter fictional property information`,`Complete sample borrower and lender details`]},{number:`03`,icon:`✓`,title:`Review your transaction`,description:`Review your financing terms, payment calculations and transaction information before generating documents.`,items:[`Confirm your interest rate`,`Review monthly payment calculations`,`Verify payment and maturity dates`,`Confirm the intended balloon payment`]},{number:`04`,icon:`↓`,title:`Generate and download`,description:`Prepare your first sample document package and compare the results with your approved reference documents.`,items:[`Save your sample loan`,`Preview available documents`,`Generate your loan package`,`Download and review the documents`]}],Ue=[`Create your ZapDocs account`,`Access your loan workspace`,`Create a fictional transaction`,`Complete loan and party information`,`Review payment calculations`,`Generate your first document package`,`Review the downloaded documents`],We=[[`Do I need a real loan to get started?`,`No. We recommend creating a fictional transaction first so you can explore the platform without entering confidential borrower or lender information.`],[`What if I do not receive my confirmation email?`,`Check your spam or junk folder and confirm that you entered the correct email address. Contact support if you continue experiencing registration issues.`],[`Which state should I select for my sample loan?`,`Select Florida or California depending on the document workflow you would like to explore.`],[`Can I return to my sample loan later?`,`Yes. Save your transaction information and reopen the loan record to review or revise your sample.`],[`What should I do if a calculation appears incorrect?`,`Review the financing terms, payment dates, interest basis and custom amounts. Contact support if the discrepancy remains.`],[`What should I do if a generated document contains an error?`,`Review the underlying transaction information and regenerate the document if necessary. Report unresolved discrepancies through the support page without submitting sensitive borrower information unnecessarily.`],[`Can I use generated documents immediately?`,`Generated documents should be reviewed for accuracy, applicability and transaction-specific requirements before execution. ZapDocs does not replace independent professional review.`]];function Ge(){let[e,t]=(0,_.useState)([]),n=Math.round(e.length/Ue.length*100);function r(e){t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])}return(0,_.useEffect)(()=>{document.title=`Getting Started | ZapDocs`},[]),(0,b.jsxs)(`div`,{className:`gs-page`,children:[(0,b.jsx)(C,{}),(0,b.jsxs)(`main`,{children:[(0,b.jsx)(`section`,{className:`gs-hero`,children:(0,b.jsxs)(`div`,{className:`gs-container gs-hero-grid`,children:[(0,b.jsxs)(`div`,{className:`gs-hero-content`,children:[(0,b.jsxs)(`div`,{className:`gs-eyebrow`,children:[(0,b.jsx)(`span`,{className:`gs-dot`}),`ZAPDOCS / GETTING STARTED`]}),(0,b.jsxs)(`h1`,{children:[`Your first loan package.`,(0,b.jsx)(`span`,{children:`Starts here.`})]}),(0,b.jsx)(`p`,{children:`Get familiar with your ZapDocs workspace, create your first sample transaction and explore a simpler way to prepare private lending documents.`}),(0,b.jsxs)(`div`,{className:`gs-actions`,children:[(0,b.jsx)(`a`,{href:`/free-trial`,className:`gs-primary`,children:`Create Your Account →`}),(0,b.jsx)(`a`,{href:`#getting-started`,className:`gs-secondary`,children:`View Getting Started Guide`})]}),(0,b.jsxs)(`div`,{className:`gs-support`,children:[(0,b.jsx)(`span`,{children:`✓ Guided onboarding`}),(0,b.jsx)(`span`,{children:`✓ Sample transactions`}),(0,b.jsx)(`span`,{children:`✓ Florida & California`})]})]}),(0,b.jsx)(`div`,{className:`gs-preview`,children:(0,b.jsxs)(`div`,{className:`gs-window`,children:[(0,b.jsxs)(`div`,{className:`gs-window-header`,children:[(0,b.jsxs)(`div`,{className:`gs-brand`,children:[(0,b.jsx)(`div`,{className:`gs-logo`,children:`Z`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`ZapDocs`}),(0,b.jsx)(`small`,{children:`Getting Started`})]})]}),(0,b.jsx)(`span`,{className:`gs-preview-tag`,children:`Onboarding guide`})]}),(0,b.jsxs)(`div`,{className:`gs-window-body`,children:[(0,b.jsx)(`div`,{className:`gs-small-label`,children:`YOUR GETTING STARTED CHECKLIST`}),(0,b.jsx)(`h2`,{children:`Welcome to ZapDocs.`}),(0,b.jsx)(`p`,{className:`gs-window-description`,children:`Follow these steps as you explore your new lending workspace.`}),(0,b.jsxs)(`div`,{className:`gs-progress-heading`,children:[(0,b.jsx)(`span`,{children:`Onboarding progress`}),(0,b.jsxs)(`strong`,{children:[n,`%`]})]}),(0,b.jsx)(`div`,{className:`gs-progress-track`,role:`progressbar`,"aria-label":`Onboarding progress`,"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":n,children:(0,b.jsx)(`div`,{className:`gs-progress-fill`,style:{width:`${n}%`}})}),(0,b.jsxs)(`div`,{className:`gs-progress-caption`,children:[e.length,` of `,Ue.length,` `,`steps completed`]}),(0,b.jsx)(`div`,{className:`gs-checklist`,children:Ue.map((t,n)=>(0,b.jsxs)(`button`,{type:`button`,"aria-pressed":e.includes(n),onClick:()=>r(n),className:e.includes(n)?`gs-check-row completed`:`gs-check-row`,children:[(0,b.jsx)(`span`,{className:`gs-check-box`,children:e.includes(n)?`✓`:``}),(0,b.jsx)(`span`,{className:`gs-check-text`,children:t})]},t))}),n===100?(0,b.jsx)(`div`,{className:`gs-completion`,children:`✓ You've completed the onboarding checklist.`}):(0,b.jsx)(`div`,{className:`gs-checklist-footer`,children:`Select each step as you complete it.`}),(0,b.jsx)(`button`,{type:`button`,onClick:()=>t([]),className:`gs-reset`,children:`Reset checklist`}),(0,b.jsx)(`div`,{className:`gs-preview-note`,children:`Personal checklist for this visit. Progress is not saved to your account.`})]})]})})]})}),(0,b.jsx)(`section`,{className:`gs-benefits`,children:(0,b.jsxs)(`div`,{className:`gs-container gs-benefit-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Start with confidence`}),(0,b.jsx)(`p`,{children:`Explore the platform using fictional data.`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Learn at your own pace`}),(0,b.jsx)(`p`,{children:`Follow a practical onboarding process.`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Review your first package`}),(0,b.jsx)(`p`,{children:`Understand the document preparation workflow.`})]})]})}),(0,b.jsx)(`section`,{className:`gs-section`,id:`getting-started`,children:(0,b.jsxs)(`div`,{className:`gs-container`,children:[(0,b.jsxs)(`div`,{className:`gs-section-heading`,children:[(0,b.jsx)(`div`,{className:`gs-label`,children:`YOUR FIRST TRANSACTION`}),(0,b.jsx)(`h2`,{children:`Four steps to getting started.`}),(0,b.jsx)(`p`,{children:`From creating your account to reviewing your first sample loan document package.`})]}),(0,b.jsx)(`div`,{className:`gs-step-grid`,children:He.map(e=>(0,b.jsxs)(`article`,{className:`gs-step-card`,children:[(0,b.jsxs)(`div`,{className:`gs-step-top`,children:[(0,b.jsx)(`div`,{className:`gs-step-icon`,children:e.icon}),(0,b.jsxs)(`span`,{children:[`STEP `,e.number]})]}),(0,b.jsx)(`h3`,{children:e.title}),(0,b.jsx)(`p`,{children:e.description}),(0,b.jsx)(`div`,{className:`gs-step-divider`}),(0,b.jsx)(`div`,{className:`gs-step-list`,children:e.items.map(e=>(0,b.jsxs)(`div`,{className:`gs-step-list-row`,children:[(0,b.jsx)(`span`,{children:`✓`}),(0,b.jsx)(`p`,{children:e})]},e))})]},e.number))})]})}),(0,b.jsx)(`section`,{className:`gs-muted-section`,children:(0,b.jsxs)(`div`,{className:`gs-container gs-split-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`gs-label`,children:`TRY A SAMPLE TRANSACTION`}),(0,b.jsx)(`h2`,{className:`gs-large-heading`,children:`Your first loan doesn't have to be real.`}),(0,b.jsx)(`p`,{className:`gs-body-text`,children:`Before entering confidential information, explore ZapDocs using a fictional private lending transaction.`}),(0,b.jsx)(`p`,{className:`gs-body-text`,children:`The following sample provides a simple interest-only financing structure that you can use to familiarize yourself with the workspace and payment calculations.`}),(0,b.jsxs)(`div`,{className:`gs-info-notice`,children:[(0,b.jsx)(`div`,{className:`gs-info-icon`,children:`i`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Use fictional information`}),(0,b.jsx)(`p`,{children:`Do not enter real borrower names, sensitive financial information or actual property records while experimenting with the platform.`})]})]}),(0,b.jsx)(`a`,{href:`/product-guide`,className:`gs-text-link`,children:`Explore the product guide →`})]}),(0,b.jsxs)(`div`,{className:`gs-sample-card`,children:[(0,b.jsxs)(`div`,{className:`gs-sample-header`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`gs-small-label`,children:`SAMPLE LOAN`}),(0,b.jsx)(`h3`,{children:`Illustrative Financing Terms`})]}),(0,b.jsx)(`span`,{className:`gs-sample-tag`,children:`Fictional`})]}),(0,b.jsx)(`div`,{className:`gs-sample-grid`,children:[[`State`,`Florida`],[`Loan amount`,`$500,000`],[`Annual interest rate`,`12.00%`],[`Loan term`,`12 months`],[`Lien position`,`First`],[`Payment structure`,`Interest-only`]].map(([e,t])=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`small`,{children:e}),(0,b.jsx)(`strong`,{children:t})]},e))}),(0,b.jsxs)(`div`,{className:`gs-payment-result`,children:[(0,b.jsx)(`small`,{children:`Estimated monthly interest payment`}),(0,b.jsx)(`strong`,{children:`$5,000.00`}),(0,b.jsx)(`span`,{children:`$500,000 × 12% ÷ 12`})]}),(0,b.jsxs)(`div`,{className:`gs-sample-row`,children:[(0,b.jsx)(`span`,{children:`Principal due at maturity`}),(0,b.jsx)(`strong`,{children:`$500,000.00`})]}),(0,b.jsxs)(`div`,{className:`gs-sample-row`,children:[(0,b.jsx)(`span`,{children:`Prepaid interest`}),(0,b.jsx)(`strong`,{children:`None`})]}),(0,b.jsxs)(`div`,{className:`gs-sample-row`,children:[(0,b.jsx)(`span`,{children:`Deferred interest`}),(0,b.jsx)(`strong`,{children:`None`})]}),(0,b.jsx)(`div`,{className:`gs-sample-note`,children:`Illustrative monthly interest calculation. The actual final payment may include additional accrued interest or other contractual amounts.`})]})]})}),(0,b.jsx)(`section`,{className:`gs-section`,children:(0,b.jsxs)(`div`,{className:`gs-container`,children:[(0,b.jsxs)(`div`,{className:`gs-section-heading`,children:[(0,b.jsx)(`div`,{className:`gs-label`,children:`EXPLORE YOUR WORKSPACE`}),(0,b.jsx)(`h2`,{children:`Get familiar with the essentials.`}),(0,b.jsx)(`p`,{children:`Learn the main controls you will use when preparing your first loan package.`})]}),(0,b.jsx)(`div`,{className:`gs-feature-grid`,children:[{icon:`▦`,title:`Dashboard`,description:`Access your workspace and explore the available loan management controls.`},{icon:`▤`,title:`Loan Information`,description:`Enter financing terms, property information and applicable borrower and lender details.`},{icon:`◎`,title:`Saved Profiles`,description:`Reuse frequently entered lender, brokerage, servicing and trustee information.`},{icon:`$`,title:`Payment Calculator`,description:`Review estimated payment amounts and confirm your intended financing structure.`},{icon:`✓`,title:`Preview Terms`,description:`Review the financing information and payment schedule before generating documents.`},{icon:`↓`,title:`Generate Documents`,description:`Prepare the configured loan document package using your transaction information.`}].map((e,t)=>(0,b.jsxs)(`article`,{className:`gs-feature-card`,children:[(0,b.jsxs)(`div`,{className:`gs-feature-top`,children:[(0,b.jsx)(`div`,{className:`gs-step-icon`,children:e.icon}),(0,b.jsx)(`span`,{children:String(t+1).padStart(2,`0`)})]}),(0,b.jsx)(`h3`,{children:e.title}),(0,b.jsx)(`p`,{children:e.description})]},e.title))})]})}),(0,b.jsx)(`section`,{className:`gs-muted-section`,children:(0,b.jsxs)(`div`,{className:`gs-container gs-split-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`gs-label`,children:`BEFORE USING REAL TRANSACTIONS`}),(0,b.jsx)(`h2`,{className:`gs-large-heading`,children:`Generate. Compare. Review.`}),(0,b.jsx)(`p`,{className:`gs-body-text`,children:`Once you generate your first sample package, compare the documents against your approved reference materials.`}),(0,b.jsx)(`p`,{className:`gs-body-text`,children:`Confirm that transaction information appears consistently across the generated documents and report any discrepancies before relying on the platform for actual transactions.`}),(0,b.jsx)(`a`,{href:`/document-outputs`,className:`gs-text-link`,children:`Explore document outputs →`})]}),(0,b.jsxs)(`div`,{className:`gs-review-card`,children:[(0,b.jsxs)(`div`,{className:`gs-review-heading`,children:[(0,b.jsx)(`div`,{className:`gs-step-icon`,children:`✓`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{children:`Document Review Checklist`}),(0,b.jsx)(`p`,{children:`Verify your generated outputs`})]})]}),[`Borrower and lender legal names`,`Loan principal and interest rate`,`Monthly payment amounts`,`First payment and maturity dates`,`Prepaid and deferred interest terms`,`Final payment and balloon amount`,`Property information and exhibits`,`Signature blocks and document consistency`].map(e=>(0,b.jsxs)(`div`,{className:`gs-review-row`,children:[(0,b.jsx)(`span`,{className:`gs-review-check`,children:`□`}),(0,b.jsx)(`span`,{children:e})]},e)),(0,b.jsx)(`div`,{className:`gs-review-notice`,children:`Generated documents require appropriate professional review before execution.`})]})]})}),(0,b.jsx)(`section`,{className:`gs-section`,children:(0,b.jsxs)(`div`,{className:`gs-container`,children:[(0,b.jsxs)(`div`,{className:`gs-section-heading`,children:[(0,b.jsx)(`div`,{className:`gs-label`,children:`GETTING STARTED SUPPORT`}),(0,b.jsx)(`h2`,{children:`Need help along the way?`}),(0,b.jsx)(`p`,{children:`Find guidance for common onboarding and document preparation questions.`})]}),(0,b.jsx)(`div`,{className:`gs-resource-grid`,children:[{icon:`◎`,title:`Account and access`,description:`Get assistance with registration, account confirmation or signing in.`,link:`/help-center`,action:`Visit Help Center`},{icon:`▤`,title:`Using the platform`,description:`Learn how to navigate your workspace and understand the main transaction controls.`,link:`/product-guide`,action:`View Product Guide`},{icon:`?`,title:`Contact support`,description:`Report technical issues, unexpected calculations or document discrepancies.`,link:`/contact-support`,action:`Contact Support`}].map(e=>(0,b.jsxs)(`a`,{href:e.link,className:`gs-resource-card`,children:[(0,b.jsx)(`div`,{className:`gs-step-icon`,children:e.icon}),(0,b.jsx)(`h3`,{children:e.title}),(0,b.jsx)(`p`,{children:e.description}),(0,b.jsxs)(`span`,{children:[e.action,` →`]})]},e.title))})]})}),(0,b.jsx)(`section`,{className:`gs-muted-section`,children:(0,b.jsxs)(`div`,{className:`gs-container gs-faq-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`gs-label`,children:`FREQUENTLY ASKED QUESTIONS`}),(0,b.jsx)(`h2`,{className:`gs-large-heading`,children:`Everything you need to get started.`}),(0,b.jsx)(`p`,{className:`gs-body-text`,children:`Learn more about creating your account, preparing sample transactions and reviewing your first loan documents.`}),(0,b.jsx)(`a`,{href:`/help-center`,className:`gs-text-link`,children:`Visit the Help Center →`})]}),(0,b.jsx)(`div`,{className:`gs-faq-list`,children:We.map(([e,t])=>(0,b.jsxs)(`details`,{className:`gs-faq-item`,children:[(0,b.jsx)(`summary`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))})]})}),(0,b.jsx)(`section`,{className:`gs-cta-section`,children:(0,b.jsx)(`div`,{className:`gs-container`,children:(0,b.jsxs)(`div`,{className:`gs-cta`,children:[(0,b.jsx)(`div`,{className:`gs-cta-label`,children:`YOUR NEXT STEP`}),(0,b.jsx)(`h2`,{children:`Ready to explore ZapDocs?`}),(0,b.jsx)(`p`,{children:`Create your first sample loan and discover how ZapDocs can simplify your private lending document preparation workflow.`}),(0,b.jsxs)(`div`,{className:`gs-cta-actions`,children:[(0,b.jsx)(`a`,{href:`/free-trial`,className:`gs-primary`,children:`Create Your Account →`}),(0,b.jsx)(`a`,{href:`/demo`,className:`gs-cta-secondary`,children:`Book a Demo`})]})]})})})]}),(0,b.jsx)(`footer`,{className:`gs-footer`,children:(0,b.jsxs)(`div`,{className:`gs-container`,children:[(0,b.jsxs)(`div`,{className:`gs-footer-top`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{children:`ZapDocs`}),(0,b.jsx)(`p`,{children:`Document preparation software built for private lending professionals.`})]}),(0,b.jsxs)(`div`,{className:`gs-footer-links`,children:[(0,b.jsx)(`a`,{href:`/platform`,children:`Platform`}),(0,b.jsx)(`a`,{href:`/pricing`,children:`Pricing`}),(0,b.jsx)(`a`,{href:`/help-center`,children:`Help Center`}),(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy`}),(0,b.jsx)(`a`,{href:`/terms`,children:`Terms`})]})]}),(0,b.jsxs)(`div`,{className:`gs-footer-bottom`,children:[(0,b.jsxs)(`span`,{children:[`© `,new Date().getFullYear(),` ZapDocs. All rights reserved.`]}),(0,b.jsx)(`span`,{children:`ZapDocs is not a law firm and does not provide legal advice.`})]})]})}),(0,b.jsx)(`style`,{children:`

        .gs-page {
          background: #ffffff;
          color: #101c32;
          font-family: Inter, Arial, sans-serif;
          min-height: 100vh;
        }

        .gs-page * {
          box-sizing: border-box;
        }

        .gs-container {
          width: min(1200px, calc(100% - 64px));
          margin: 0 auto;
        }

        .gs-hero {
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #f4f7fc 65%,
            #eaf0ff 100%
          );
          padding: 95px 0;
        }

        .gs-hero-grid,
        .gs-split-grid,
        .gs-faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 65px;
          align-items: center;
        }

        .gs-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 9px 15px;
          border: 1px solid #dfe5ee;
          border-radius: 30px;
          background: white;
          color: #526278;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1.3px;
          margin-bottom: 25px;
        }

        .gs-dot {
          width: 7px;
          height: 7px;
          background: #3d63f5;
          border-radius: 50%;
        }

        .gs-hero h1 {
          font-size: clamp(40px, 4.6vw, 62px);
          line-height: 1.1;
          font-weight: 750;
          letter-spacing: -2.8px;
          color: #101c32;
          margin: 0 0 25px;
        }

        .gs-hero h1 span {
          display: block;
          color: #3d63f5;
          margin-top: 5px;
        }

        .gs-hero-content > p {
          color: #637287;
          font-size: 17px;
          line-height: 1.85;
          max-width: 550px;
          margin: 0 0 30px;
        }

        .gs-actions,
        .gs-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
          align-items: center;
        }

        .gs-primary,
        .gs-secondary,
        .gs-cta-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 26px;
          border-radius: 30px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 650;
          transition: all 0.2s ease;
        }

        .gs-primary {
          background: #3d63f5;
          color: white;
          border: 1px solid #3d63f5;
          box-shadow: 0 8px 18px #3d63f526;
        }

        .gs-primary:hover {
          background: #284ce1;
          color: white;
          transform: translateY(-2px);
        }

        .gs-secondary {
          background: white;
          color: #101c32;
          border: 1px solid #d6deea;
        }

        .gs-secondary:hover {
          background: #f1f5fa;
        }

        .gs-support {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 27px;
          color: #64748b;
          font-size: 11px;
          font-weight: 600;
        }

        .gs-preview {
          background: #e4eaf6;
          border: 1px solid #dfe6f2;
          border-radius: 25px;
          padding: 20px;
          box-shadow: 0 25px 65px #172b4520;
          min-width: 0;
        }

        .gs-window {
          background: white;
          border: 1px solid #dce3ed;
          border-radius: 15px;
          overflow: hidden;
        }

        .gs-window-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 17px 20px;
          border-bottom: 1px solid #e5eaf1;
        }

        .gs-brand {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .gs-logo {
          width: 36px;
          height: 36px;
          background: #3d63f5;
          color: white;
          border-radius: 9px;
          display: grid;
          place-items: center;
          font-size: 18px;
          font-weight: 800;
        }

        .gs-brand strong {
          display: block;
          font-size: 13px;
        }

        .gs-brand small {
          display: block;
          color: #8491a4;
          font-size: 10px;
          margin-top: 3px;
        }

        .gs-preview-tag,
        .gs-sample-tag {
          background: #eff3f9;
          color: #637287;
          border-radius: 20px;
          padding: 6px 12px;
          font-size: 10px;
          font-weight: 600;
          white-space: nowrap;
        }

        .gs-window-body {
          padding: 25px;
        }

        .gs-small-label {
          color: #8491a4;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.2px;
          margin-bottom: 10px;
        }

        .gs-window-body > h2 {
          font-size: 25px;
          margin: 0 0 8px;
          letter-spacing: -0.5px;
        }

        .gs-window-description {
          color: #8491a4;
          font-size: 12px;
          line-height: 1.6;
          margin: 0 0 25px;
        }

        .gs-progress-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          font-size: 12px;
          font-weight: 600;
          color: #526278;
        }

        .gs-progress-heading strong {
          color: #3d63f5;
          font-size: 14px;
        }

        .gs-progress-track {
          height: 9px;
          background: #e8edf5;
          border-radius: 20px;
          overflow: hidden;
        }

        .gs-progress-fill {
          height: 100%;
          background: #3d63f5;
          border-radius: 20px;
          transition: width 0.35s ease;
        }

        .gs-progress-caption {
          font-size: 10px;
          color: #8491a4;
          margin-top: 10px;
          margin-bottom: 23px;
        }

        .gs-checklist {
          border: 1px solid #e1e7ef;
          border-radius: 11px;
          overflow: hidden;
        }

        .gs-check-row {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 15px;
          background: white;
          color: #526278;
          border: 0;
          border-bottom: 1px solid #edf1f5;
          font-family: inherit;
          font-size: 12px;
          font-weight: 550;
          text-align: left;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .gs-check-row:last-child {
          border-bottom: 0;
        }

        .gs-check-row:hover {
          background: #f8fafc;
        }

        .gs-check-row.completed {
          background: #f4fbf7;
        }

        .gs-check-box {
          width: 21px;
          height: 21px;
          border: 1px solid #cbd5e1;
          border-radius: 5px;
          background: white;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          font-size: 12px;
          font-weight: 800;
        }

        .gs-check-row.completed .gs-check-box {
          background: #16834c;
          border-color: #16834c;
          color: white;
        }

        .gs-check-row.completed .gs-check-text {
          color: #16834c;
        }

        .gs-check-row:focus-visible,
        .gs-reset:focus-visible {
          outline: 2px solid #3d63f5;
          outline-offset: -2px;
        }

        .gs-checklist-footer,
        .gs-completion {
          margin-top: 20px;
          border-radius: 8px;
          padding: 13px;
          font-size: 11px;
          text-align: center;
          font-weight: 650;
        }

        .gs-checklist-footer {
          color: #3d63f5;
          background: #edf2ff;
        }

        .gs-completion {
          color: #16834c;
          background: #e5f8ed;
        }

        .gs-reset {
          display: block;
          margin: 14px auto 0;
          border: 0;
          background: transparent;
          color: #64748b;
          font-family: inherit;
          font-size: 10px;
          cursor: pointer;
          text-decoration: underline;
        }

        .gs-preview-note {
          margin-top: 14px;
          text-align: center;
          color: #8491a4;
          font-size: 9px;
          line-height: 1.6;
        }

        .gs-benefits {
          padding: 35px 0;
          border-top: 1px solid #e5eaf0;
          border-bottom: 1px solid #e5eaf0;
        }

        .gs-benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          text-align: center;
        }

        .gs-benefit-grid strong {
          font-size: 17px;
        }

        .gs-benefit-grid p {
          margin: 9px 0 0;
          color: #64748b;
          font-size: 13px;
        }

        .gs-section,
        .gs-muted-section {
          padding: 90px 0;
          scroll-margin-top: 100px;
        }

        .gs-muted-section {
          background: #f6f8fc;
          border-top: 1px solid #e5eaf1;
          border-bottom: 1px solid #e5eaf1;
        }

        .gs-section-heading {
          max-width: 760px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .gs-label {
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 1.7px;
          color: #3d63f5;
          margin-bottom: 20px;
        }

        .gs-section-heading h2,
        .gs-large-heading {
          font-size: clamp(30px, 4vw, 44px);
          line-height: 1.18;
          letter-spacing: -1.6px;
          color: #101c32;
          margin: 0 0 20px;
        }

        .gs-section-heading p,
        .gs-body-text {
          color: #64748b;
          font-size: 16px;
          line-height: 1.85;
        }

        .gs-step-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .gs-feature-grid,
        .gs-resource-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .gs-step-card,
        .gs-feature-card,
        .gs-resource-card {
          border: 1px solid #dfe5ed;
          background: white;
          border-radius: 15px;
          padding: 27px;
          transition: all 0.25s ease;
        }

        .gs-step-card:hover,
        .gs-feature-card:hover,
        .gs-resource-card:hover {
          transform: translateY(-4px);
          border-color: #a8b8f8;
          box-shadow: 0 15px 35px #172b4510;
        }

        .gs-step-top,
        .gs-feature-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 25px;
        }

        .gs-step-top > span,
        .gs-feature-top > span {
          color: #94a3b8;
          font-size: 10px;
          letter-spacing: 0.7px;
          font-weight: 700;
        }

        .gs-step-icon {
          width: 48px;
          height: 48px;
          background: #edf2ff;
          color: #3d63f5;
          border-radius: 12px;
          display: grid;
          place-items: center;
          font-size: 25px;
          font-weight: 750;
          flex-shrink: 0;
        }

        .gs-step-card h3,
        .gs-feature-card h3,
        .gs-resource-card h3 {
          font-size: 19px;
          line-height: 1.4;
          color: #101c32;
          margin: 0 0 13px;
        }

        .gs-step-card > p,
        .gs-feature-card p,
        .gs-resource-card p {
          color: #64748b;
          font-size: 14px;
          line-height: 1.8;
          margin: 0;
        }

        .gs-step-divider {
          height: 1px;
          background: #e5eaf0;
          margin: 24px 0;
        }

        .gs-step-list {
          display: grid;
          gap: 14px;
        }

        .gs-step-list-row {
          display: flex;
          align-items: flex-start;
          gap: 9px;
        }

        .gs-step-list-row > span {
          color: #16834c;
          font-size: 12px;
          font-weight: 750;
        }

        .gs-step-list-row p {
          font-size: 12px;
          line-height: 1.7;
          color: #526278;
          margin: 0;
        }

        .gs-text-link {
          display: inline-block;
          margin-top: 15px;
          color: #3d63f5;
          font-size: 14px;
          font-weight: 650;
          text-decoration: none;
        }

        .gs-text-link:hover {
          text-decoration: underline;
        }

        .gs-info-notice {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 20px;
          border: 1px solid #dce5ff;
          background: #edf2ff;
          border-radius: 12px;
          margin: 25px 0 10px;
        }

        .gs-info-icon {
          width: 27px;
          height: 27px;
          background: #3d63f5;
          color: white;
          display: grid;
          place-items: center;
          border-radius: 50%;
          flex-shrink: 0;
          font-size: 14px;
          font-weight: 700;
        }

        .gs-info-notice strong {
          font-size: 13px;
          color: #284ce1;
        }

        .gs-info-notice p {
          color: #526278;
          font-size: 12px;
          line-height: 1.8;
          margin: 7px 0 0;
        }

        .gs-sample-card,
        .gs-review-card {
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 17px;
          padding: 28px;
          box-shadow: 0 10px 35px #172b4508;
          min-width: 0;
        }

        .gs-sample-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 25px;
        }

        .gs-sample-header h3 {
          font-size: 22px;
          line-height: 1.3;
          margin: 0;
          letter-spacing: -0.5px;
        }

        .gs-sample-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .gs-sample-grid > div {
          background: #f8fafc;
          border: 1px solid #e1e7ef;
          border-radius: 9px;
          padding: 15px;
        }

        .gs-sample-grid small {
          display: block;
          font-size: 10px;
          color: #64748b;
          margin-bottom: 8px;
        }

        .gs-sample-grid strong {
          display: block;
          font-size: 17px;
          color: #101c32;
        }

        .gs-payment-result {
          background: #eef3ff;
          border: 1px solid #dce5ff;
          border-radius: 12px;
          padding: 23px;
          margin: 22px 0;
        }

        .gs-payment-result small {
          display: block;
          font-size: 12px;
          color: #526278;
          margin-bottom: 10px;
        }

        .gs-payment-result strong {
          display: block;
          color: #3d63f5;
          font-size: 38px;
          letter-spacing: -1.5px;
        }

        .gs-payment-result > span {
          display: block;
          font-size: 11px;
          color: #64748b;
          margin-top: 10px;
        }

        .gs-sample-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid #edf1f5;
          font-size: 12px;
          color: #64748b;
        }

        .gs-sample-row strong {
          color: #101c32;
          text-align: right;
        }

        .gs-sample-note {
          font-size: 11px;
          color: #8491a4;
          line-height: 1.7;
          margin-top: 20px;
        }

        .gs-review-heading {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 23px;
        }

        .gs-review-heading h3 {
          font-size: 20px;
          margin: 0 0 6px;
        }

        .gs-review-heading p {
          color: #64748b;
          font-size: 12px;
          margin: 0;
        }

        .gs-review-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid #edf1f5;
          color: #526278;
          font-size: 13px;
        }

        .gs-review-check {
          width: 25px;
          height: 25px;
          display: grid;
          place-items: center;
          background: #edf2ff;
          color: #3d63f5;
          font-size: 17px;
          border-radius: 6px;
          flex-shrink: 0;
        }

        .gs-review-notice {
          color: #64748b;
          background: #f6f8fc;
          border: 1px solid #e1e7ef;
          border-radius: 8px;
          padding: 15px;
          font-size: 11px;
          line-height: 1.7;
          margin-top: 23px;
        }

        .gs-resource-card {
          display: block;
          text-decoration: none;
        }

        .gs-resource-card .gs-step-icon {
          margin-bottom: 25px;
        }

        .gs-resource-card > span {
          display: inline-block;
          color: #3d63f5;
          font-size: 13px;
          font-weight: 650;
          margin-top: 23px;
        }

        .gs-faq-grid {
          align-items: start;
        }

        .gs-faq-list {
          display: grid;
          gap: 13px;
        }

        .gs-faq-item {
          background: white;
          border: 1px solid #dfe5ed;
          border-radius: 11px;
          padding: 19px;
        }

        .gs-faq-item summary {
          cursor: pointer;
          font-size: 14px;
          font-weight: 650;
          color: #101c32;
        }

        .gs-faq-item p {
          margin: 15px 0 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.8;
        }

        .gs-cta-section {
          padding: 80px 0;
        }

        .gs-cta {
          background: linear-gradient(
            135deg,
            #101c32,
            #172b52
          );
          color: white;
          border-radius: 22px;
          padding: 70px 25px;
          text-align: center;
        }

        .gs-cta-label {
          color: #a6b9ff;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 1.8px;
          margin-bottom: 22px;
        }

        .gs-cta h2 {
          color: white;
          font-size: clamp(32px, 4vw, 46px);
          line-height: 1.2;
          letter-spacing: -1.5px;
          margin: 0 0 22px;
        }

        .gs-cta p {
          color: #c1cce0;
          max-width: 650px;
          font-size: 16px;
          line-height: 1.8;
          margin: 0 auto 28px;
        }

        .gs-cta-actions {
          justify-content: center;
        }

        .gs-cta-secondary {
          border: 1px solid #ffffff50;
          color: white;
        }

        .gs-cta-secondary:hover {
          background: #ffffff15;
          color: white;
        }

        .gs-footer {
          background: #f8fafc;
          border-top: 1px solid #e2e7ef;
          padding: 45px 0 25px;
        }

        .gs-footer-top {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 25px;
        }

        .gs-footer-top h3 {
          font-size: 23px;
          margin: 0 0 10px;
        }

        .gs-footer-top p {
          color: #64748b;
          font-size: 13px;
          line-height: 1.7;
          max-width: 350px;
        }

        .gs-footer-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 23px;
        }

        .gs-footer-links a {
          color: #526278;
          font-size: 13px;
          text-decoration: none;
        }

        .gs-footer-links a:hover {
          color: #3d63f5;
        }

        .gs-footer-bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
          border-top: 1px solid #dfe5ed;
          padding-top: 23px;
          margin-top: 30px;
          font-size: 11px;
          color: #64748b;
        }

        @media (max-width: 1050px) {

          .gs-hero-grid,
          .gs-split-grid,
          .gs-faq-grid {
            gap: 35px;
          }

          .gs-hero h1 {
            font-size: 44px;
          }

          .gs-preview {
            padding: 12px;
          }

          .gs-step-grid,
          .gs-feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }

        }

        @media (max-width: 800px) {

          .gs-container {
            width: calc(100% - 36px);
          }

          .gs-hero-grid,
          .gs-split-grid,
          .gs-faq-grid {
            grid-template-columns: 1fr;
          }

          .gs-hero {
            padding: 60px 0;
          }

          .gs-hero h1 {
            font-size: 42px;
            letter-spacing: -1.8px;
          }

          .gs-preview {
            max-width: 600px;
            width: 100%;
            margin: 0 auto;
          }

          .gs-benefit-grid,
          .gs-resource-grid {
            grid-template-columns: 1fr;
          }

          .gs-benefit-grid {
            gap: 30px;
          }

          .gs-section,
          .gs-muted-section {
            padding: 60px 0;
          }

          .gs-cta-section {
            padding: 50px 0;
          }

        }

        @media (max-width: 480px) {

          .gs-hero h1 {
            font-size: 36px;
          }

          .gs-step-grid,
          .gs-feature-grid {
            grid-template-columns: 1fr;
          }

          .gs-window-body {
            padding: 15px;
          }

          .gs-check-row {
            padding: 12px;
            font-size: 11px;
          }

          .gs-sample-card,
          .gs-review-card {
            padding: 19px;
          }

          .gs-sample-grid > div {
            padding: 12px;
          }

          .gs-sample-grid strong {
            font-size: 14px;
          }

          .gs-payment-result strong {
            font-size: 32px;
          }

          .gs-step-card,
          .gs-feature-card,
          .gs-resource-card {
            padding: 23px;
          }

          .gs-cta {
            padding: 45px 20px;
          }

        }

        @media (prefers-reduced-motion: reduce) {

          .gs-page * {
            transition: none !important;
          }

        }

      `})]})}var Ke=[{label:`Product overview`,path:`/platform`,group:`Platform`},{label:`Loan workflow`,path:`/loan-workflow`,group:`Platform`},{label:`Document generation`,path:`/document-generation`,group:`Platform`},{label:`Team workspace`,path:`/team-workspace`,group:`Platform`},{label:`Private lenders`,path:`/private-lenders`,group:`Solutions`},{label:`Loan originators`,path:`/loan-originators`,group:`Solutions`},{label:`Servicing teams`,path:`/servicing-teams`,group:`Solutions`},{label:`Broker workflows`,path:`/broker-workflows`,group:`Solutions`},{label:`How it works`,path:`/how-it-works`,group:`Resources`},{label:`Document outputs`,path:`/document-outputs`,group:`Resources`},{label:`Product guide`,path:`/product-guide`,group:`Resources`},{label:`Getting started`,path:`/getting-started`,group:`Resources`},{label:`About ZapDocs`,path:`/about`,group:`Company`},{label:`Contact`,path:`/contact`,group:`Company`},{label:`Security`,path:`/security`,group:`Company`},{label:`Updates`,path:`/updates`,group:`Company`},{label:`Help center`,path:`/help-center`,group:`Support`},{label:`Contact support`,path:`/contact-support`,group:`Support`}],qe=[`Platform`,`Solutions`,`Resources`,`Company`,`Support`];function Je({page:e,children:t}){return(0,_.useEffect)(()=>{document.title=`${e.title} | ZapDocs`,window.scrollTo(0,0)},[e.path,e.title]),(0,b.jsxs)(`div`,{className:`zsite`,children:[(0,b.jsx)(`style`,{children:`
 .zsite{background:white;color:#080d36;min-height:100vh;font-family:Inter,system-ui,sans-serif;line-height:1.65}.zsite *{box-sizing:border-box}.zsite a{color:inherit;text-decoration:none}.zsite a:hover{text-decoration:underline}.zsite a:focus-visible{outline:3px solid #2f63ff;outline-offset:4px}.zsite .wrap{max-width:1220px;margin:auto;padding:0 28px}.zsite header{border-bottom:1px solid #e7e9ef}.zsite .nav{display:flex;align-items:center;gap:24px;justify-content:space-between;padding-block:24px;flex-wrap:wrap}.zsite .brand{font-size:25px;font-weight:850;letter-spacing:-1px;display:flex;align-items:center;gap:10px}.zsite .mark{width:38px;height:42px;background:#2f63ff;clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);display:grid;place-items:center;color:white;font-size:24px}.zsite .navlinks{display:flex;gap:22px;flex-wrap:wrap;font-weight:650;font-size:15px}.zsite .cta{display:inline-block;background:#43e19a;color:#080d36;border-radius:999px;padding:13px 24px;font-weight:700}.zsite .hero{background:#f5f7fb;padding:76px 0;border-bottom:1px solid #e7e9ef}.zsite .eyebrow{color:#2455e8;font-size:13px;text-transform:uppercase;letter-spacing:1.5px;font-weight:750}.zsite h1{font-size:clamp(38px,5vw,64px);line-height:1.1;letter-spacing:-2px;margin:12px 0 18px}.zsite .lead{font-size:21px;color:#59627a;max-width:780px;margin:0 0 26px}.zsite .body{display:grid;grid-template-columns:235px 1fr;gap:55px;padding-block:56px 80px}.zsite aside{border-right:1px solid #e7e9ef;padding-right:24px}.zsite aside a{display:block;padding:8px 12px;border-radius:8px}.zsite aside a[aria-current=page]{background:#edf2ff;color:#2455e8;font-weight:700}.zsite section{border-bottom:1px solid #e7e9ef;padding:0 0 24px;margin-bottom:28px}.zsite h2{font-size:25px;letter-spacing:-.5px;margin:0 0 10px}.zsite p{color:#59627a;margin:0 0 12px}.zsite .footergrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:25px;padding-block:45px}.zsite footer{border-top:1px solid #e7e9ef}.zsite footer a{display:block;margin:8px 0}.zsite .bottom{display:flex;gap:18px;flex-wrap:wrap;align-items:center;border-top:1px solid #e7e9ef;padding-block:20px;font-size:13px}.zsite .secondary{display:inline-block;padding:12px 18px;font-weight:650;color:#2455e8}.zsite .stepgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:12px}.zsite .stepgrid div{background:#f5f7fb;border:1px solid #e7e9ef;border-radius:12px;padding:18px;display:flex;flex-direction:column;gap:10px}.zsite .stepgrid span{color:#2455e8;font-size:13px;font-weight:750}.zsite .next{background:#f5f7fb;padding:24px;border-radius:12px}.zsite .skip{position:absolute;left:12px;top:-100px;background:white;padding:10px}.zsite .skip:focus{top:10px}@media(max-width:720px){.zsite .body{grid-template-columns:1fr;gap:25px}.zsite aside{border-right:0;border-bottom:1px solid #e7e9ef;padding-bottom:18px}.zsite .hero{padding:42px 0}.zsite .navlinks{gap:12px}.zsite .wrap{padding-inline:20px}}
 `}),(0,b.jsx)(`a`,{className:`skip`,href:`#site-main`,children:`Skip to content`}),(0,b.jsx)(`header`,{children:(0,b.jsxs)(`div`,{className:`wrap nav`,children:[(0,b.jsxs)(`a`,{className:`brand`,href:`/`,children:[(0,b.jsx)(`span`,{className:`mark`,"aria-hidden":`true`,children:`Z`}),`ZapDocs`]}),(0,b.jsxs)(`nav`,{className:`navlinks`,"aria-label":`Main navigation`,children:[(0,b.jsx)(`a`,{href:`/platform`,children:`Platform`}),(0,b.jsx)(`a`,{href:`/document-generation`,children:`Documents`}),(0,b.jsx)(`a`,{href:`/private-lenders`,children:`Lenders`}),(0,b.jsx)(`a`,{href:`/product-guide`,children:`Resources`}),(0,b.jsx)(`a`,{href:`/about`,children:`Company`})]}),(0,b.jsx)(`a`,{className:`cta`,href:`/app`,children:`Open ZapDocs`})]})}),(0,b.jsxs)(`main`,{id:`site-main`,children:[(0,b.jsx)(`div`,{className:`hero`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsx)(`div`,{className:`eyebrow`,children:e.group}),(0,b.jsx)(`h1`,{children:e.headline||e.title}),(0,b.jsx)(`p`,{className:`lead`,children:e.lead}),(0,b.jsx)(`a`,{className:`cta`,href:e.contact?e.path===`/contact-support`?`#site-main`:`/contact-support`:`/free-trial`,children:e.contact?`Support information`:`Start Free Trial`}),` `,(0,b.jsx)(`a`,{className:`secondary`,href:`/app`,children:`Open ZapDocs`})]})}),(0,b.jsxs)(`div`,{className:`wrap body`,children:[(0,b.jsx)(`aside`,{children:(0,b.jsxs)(`nav`,{"aria-label":`${e.group} pages`,children:[(0,b.jsx)(`strong`,{children:e.group}),Ke.filter(t=>t.group===e.group).map(t=>(0,b.jsx)(`a`,{href:t.path,"aria-current":t.path===e.path?`page`:void 0,children:t.label},t.path))]})}),(0,b.jsxs)(`article`,{children:[e.steps?.length>0&&(0,b.jsx)(`section`,{className:`stepgrid`,"aria-label":`Workflow`,children:e.steps.map((e,t)=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`span`,{children:String(t+1).padStart(2,`0`)}),(0,b.jsx)(`strong`,{children:e})]},e))}),(e.sections||[]).map(([e,t])=>(0,b.jsxs)(`section`,{children:[(0,b.jsx)(`h2`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e)),e.contact&&(0,b.jsxs)(`section`,{children:[(0,b.jsx)(`h2`,{children:`Contact information`}),(0,b.jsx)(`p`,{children:`Public support contact details will be listed before launch.`})]}),t,(0,b.jsxs)(`section`,{className:`next`,children:[(0,b.jsx)(`h2`,{children:`Ready to explore ZapDocs?`}),(0,b.jsx)(`p`,{children:`Start with a fictional loan or visit the help center for guidance.`}),(0,b.jsx)(`a`,{className:`cta`,href:`/free-trial`,children:`Start Free Trial`}),` `,(0,b.jsx)(`a`,{className:`secondary`,href:`/help-center`,children:`Visit Help Center`})]}),(0,b.jsx)(`a`,{href:`/`,children:`Return to homepage`})]})]})]}),(0,b.jsxs)(`footer`,{children:[(0,b.jsx)(`div`,{className:`wrap footergrid`,children:qe.map(e=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:e}),Ke.filter(t=>t.group===e).map(e=>(0,b.jsx)(`a`,{href:e.path,children:e.label},e.path))]},e))}),(0,b.jsxs)(`div`,{className:`wrap bottom`,children:[(0,b.jsxs)(`span`,{children:[`© `,new Date().getFullYear(),` ZapDocs. All rights reserved.`]}),(0,b.jsx)(`a`,{href:`/terms`,children:`Terms`}),(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy Policy`}),(0,b.jsx)(`a`,{href:`/accessibility`,children:`Accessibility`})]})]})]})}var Ye={title:`About ZapDocs`,path:`/about`,group:`Company`,lead:`ZapDocs focuses on reducing repetitive document preparation for private lenders and mortgage brokers.`,sections:[[`Our focus`,`Private lending transactions often involve specialized payment arrangements and multiple parties. ZapDocs brings these details into a single loan record.`],[`What we build`,`State-specific document generation, customizable loan terms, payment estimates, previews and standalone investor paperwork.`],[`Where we are starting`,`The initial product focuses on California and Florida. We are prioritizing a controlled beta and feedback from lending professionals.`],[`Our boundaries`,`ZapDocs provides software, not legal advice, lending decisions, title services or loan servicing. Professional review remains essential.`]],contact:!1,headline:`Built around private lending document workflows.`,steps:[`Explore platform`,`Try a sample loan`,`Share feedback`]};function Xe(){return(0,b.jsx)(Je,{page:Ye})}var Ze=``,Qe=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Ze)&&!/[?&#]/.test(Ze),$e=[[`Product questions`,`Explore supported states, document types and the ZapDocs platform.`,`/product-guide`,`View product guide`],[`Beta inquiries`,`Tell us about your lending business and the features you would like to test.`,`/demo`,`Book a demo`],[`Technical support`,`Get assistance with account access, payment calculations or document generation.`,`/contact-support`,`Contact support`]];function et({onHome:e,onLaunch:t,onPricing:n,onDemo:r}={}){let[i,a]=(0,_.useState)(`Product questions`),[o,s]=(0,_.useState)(``);(0,_.useEffect)(()=>{let e=document.title;return document.title=`Contact | ZapDocs`,()=>{document.title=e}},[]);function c(e){if(e.preventDefault(),!Qe){s(`Email inquiries are not configured yet. Please use the support or demo links.`);return}let t=new FormData(e.currentTarget),n=[`Name: ${t.get(`name`)}`,`Business email: ${t.get(`email`)}`,`Company: ${t.get(`company`)||`Not provided`}`,`Inquiry: ${i}`,``,String(t.get(`message`)||``)].join(`
`);window.location.assign(`mailto:${Ze}?subject=${encodeURIComponent(`ZapDocs — `+i)}&body=${encodeURIComponent(n)}`),s(`Your email draft can be sent from your email application. This form does not send messages directly.`)}return(0,b.jsxs)(`div`,{className:`zcontact`,children:[(0,b.jsx)(C,{onHome:e,onLaunch:t,onPricing:n,onDemo:r}),(0,b.jsxs)(`main`,{children:[(0,b.jsx)(`section`,{className:`zc-hero`,children:(0,b.jsxs)(`div`,{className:`zc-wrap zc-split`,children:[(0,b.jsxs)(`div`,{className:`zc-intro`,children:[(0,b.jsxs)(`div`,{className:`zc-eyebrow`,children:[(0,b.jsx)(`span`,{}),` COMPANY / CONTACT`]}),(0,b.jsxs)(`h1`,{children:[`Let's talk about `,(0,b.jsx)(`em`,{children:`your lending workflow.`})]}),(0,b.jsx)(`p`,{children:`Have questions about ZapDocs, beta access or private lending document preparation? We'd like to hear from you.`}),(0,b.jsx)(`div`,{className:`zc-options`,children:$e.map(([e,t,n,r],i)=>(0,b.jsxs)(`article`,{className:`zc-option`,children:[(0,b.jsx)(`div`,{className:`zc-icon`,"aria-hidden":`true`,children:[`?`,`↗`,`◎`][i]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{children:e}),(0,b.jsx)(`p`,{children:t}),(0,b.jsxs)(`a`,{href:n,children:[r,` →`]})]})]},e))})]}),(0,b.jsx)(`div`,{className:`zc-panel`,children:(0,b.jsxs)(`div`,{className:`zc-card`,children:[(0,b.jsx)(`div`,{className:`zc-label`,children:`GET IN TOUCH`}),(0,b.jsx)(`h2`,{children:`How can we help?`}),(0,b.jsx)(`p`,{children:`Tell us a little about your business and what you would like to accomplish.`}),(0,b.jsxs)(`form`,{onSubmit:c,className:`zc-form`,children:[(0,b.jsxs)(`label`,{children:[`Full name`,(0,b.jsx)(`input`,{name:`name`,autoComplete:`name`,placeholder:`Your name`,required:!0,maxLength:150})]}),(0,b.jsxs)(`label`,{children:[`Business email`,(0,b.jsx)(`input`,{name:`email`,type:`email`,autoComplete:`email`,placeholder:`you@company.com`,required:!0})]}),(0,b.jsxs)(`label`,{className:`zc-wide`,children:[`Company name (optional)`,(0,b.jsx)(`input`,{name:`company`,autoComplete:`organization`,placeholder:`Your company`,maxLength:200})]}),(0,b.jsxs)(`label`,{className:`zc-wide`,children:[`Inquiry type`,(0,b.jsx)(`select`,{value:i,onChange:e=>{a(e.target.value),s(``)},children:[...$e.map(e=>e[0]),`General feedback`,`Other`].map(e=>(0,b.jsx)(`option`,{children:e},e))})]}),(0,b.jsxs)(`label`,{className:`zc-wide`,children:[`Your message`,(0,b.jsx)(`textarea`,{name:`message`,rows:5,required:!0,maxLength:2e3,placeholder:`Tell us how we can help. Please use fictional or redacted details.`})]}),(0,b.jsx)(`p`,{className:`zc-privacy zc-wide`,children:`Please do not include borrower tax IDs, credentials, signed loan documents or other confidential information.`}),Qe?(0,b.jsx)(`button`,{className:`zc-primary zc-wide`,type:`submit`,children:`Open email draft →`}):(0,b.jsxs)(`div`,{className:`zc-unavailable zc-wide`,children:[`Email inquiries are not available yet. `,(0,b.jsx)(`a`,{href:`/contact-support`,children:`Visit Contact Support`}),` or `,(0,b.jsx)(`a`,{href:`/demo`,children:`book a demo`}),`.`]}),o&&(0,b.jsx)(`p`,{role:`status`,className:`zc-unavailable zc-wide`,children:o}),(0,b.jsxs)(`small`,{className:`zc-wide zc-form-note`,children:[`This form opens your email application. It does not transmit your information to ZapDocs. See our `,(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy Policy`}),`.`]})]})]})})]})}),(0,b.jsx)(`section`,{className:`zc-section`,children:(0,b.jsxs)(`div`,{className:`zc-wrap`,children:[(0,b.jsxs)(`div`,{className:`zc-heading`,children:[(0,b.jsx)(`div`,{className:`zc-label`,children:`FIND THE RIGHT RESOURCE`}),(0,b.jsx)(`h2`,{children:`We're here to help you get started.`}),(0,b.jsx)(`p`,{children:`Explore the platform or find guidance for your next transaction.`})]}),(0,b.jsx)(`div`,{className:`zc-grid`,children:[[`Help Center`,`Find answers to common account and platform questions.`,`/help-center`],[`Getting Started`,`Learn how to create your first fictional loan package.`,`/getting-started`],[`Document Outputs`,`Explore configured Florida and California document workflows.`,`/document-outputs`]].map(([e,t,n],r)=>(0,b.jsxs)(`a`,{className:`zc-resource`,href:n,children:[(0,b.jsx)(`div`,{className:`zc-icon`,"aria-hidden":`true`,children:[`?`,`✓`,`▤`][r]}),(0,b.jsx)(`h3`,{children:e}),(0,b.jsx)(`p`,{children:t}),(0,b.jsx)(`strong`,{children:`Explore resource →`})]},e))})]})}),(0,b.jsx)(`section`,{className:`zc-section zc-muted`,children:(0,b.jsxs)(`div`,{className:`zc-wrap zc-split`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`zc-label`,children:`BEFORE CONTACTING US`}),(0,b.jsx)(`h2`,{children:`Make your inquiry more useful.`}),(0,b.jsx)(`p`,{children:`Let us know which states you lend in, the document types you prepare and the features you would like to explore. For technical issues, include the relevant error and steps to reproduce it, using fictional or redacted information.`})]}),(0,b.jsx)(`div`,{className:`zc-faq`,children:[[`How can I request beta access?`,`Choose Beta inquiries or book a demo to discuss your business and the features you would like to test.`],[`Where can I report a document discrepancy?`,`Use Contact Support. Describe the discrepancy and provide fictional or redacted examples rather than confidential loan records.`],[`Does ZapDocs provide legal advice?`,`No. ZapDocs is document preparation software and does not replace independent professional review.`]].map(([e,t])=>(0,b.jsxs)(`details`,{children:[(0,b.jsx)(`summary`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))})]})}),(0,b.jsx)(`section`,{className:`zc-section`,children:(0,b.jsx)(`div`,{className:`zc-wrap`,children:(0,b.jsxs)(`div`,{className:`zc-cta`,children:[(0,b.jsx)(`div`,{className:`zc-label`,children:`EXPERIENCE ZAPDOCS`}),(0,b.jsx)(`h2`,{children:`See the platform in action.`}),(0,b.jsx)(`p`,{children:`Explore a simpler way to prepare private lending documents.`}),(0,b.jsx)(`a`,{className:`zc-primary`,href:`/demo`,children:`Book a Demo →`})]})})})]}),(0,b.jsx)(`footer`,{className:`zc-footer`,children:(0,b.jsxs)(`div`,{className:`zc-wrap zc-foot`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`ZapDocs`}),(0,b.jsx)(`p`,{children:`Document preparation for private lending professionals.`})]}),(0,b.jsxs)(`div`,{className:`zc-links`,children:[(0,b.jsx)(`a`,{href:`/platform`,children:`Platform`}),(0,b.jsx)(`a`,{href:`/pricing`,children:`Pricing`}),(0,b.jsx)(`a`,{href:`/help-center`,children:`Help Center`}),(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy`}),(0,b.jsx)(`a`,{href:`/terms`,children:`Terms`})]}),(0,b.jsxs)(`div`,{className:`zc-legal`,children:[`© `,new Date().getFullYear(),` ZapDocs. All rights reserved. `,(0,b.jsx)(`span`,{children:`ZapDocs is not a law firm and does not provide legal advice.`})]})]})}),(0,b.jsx)(`style`,{children:`
        .zcontact{min-height:100vh;background:#fff;color:#101c32;font-family:Inter,system-ui,Arial,sans-serif;line-height:1.65}
        .zcontact *{box-sizing:border-box}
        .zcontact .zc-wrap{width:min(1200px,calc(100% - 64px));margin:0 auto}
        .zcontact .zc-hero{padding:84px 0;background:linear-gradient(135deg,#fff,#f4f7fc 65%,#eaf0ff)}
        .zcontact .zc-split{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:72px;align-items:center}
        .zcontact .zc-eyebrow{display:inline-flex;align-items:center;gap:9px;padding:8px 14px;border:1px solid #dfe5ee;border-radius:30px;background:#fff;color:#526278;font-size:10px;font-weight:750;letter-spacing:1.2px;margin-bottom:24px}
        .zcontact .zc-eyebrow span{width:7px;height:7px;border-radius:50%;background:#3f6df6}
        .zcontact h1{font-size:clamp(40px,4.8vw,64px);letter-spacing:-2.8px;line-height:1.08;margin:0 0 24px;color:#101c32}
        .zcontact h1 em{display:block;color:#315cff;font-style:normal}
        .zcontact h2{font-size:clamp(28px,3.5vw,42px);letter-spacing:-1.3px;line-height:1.2;margin:0 0 16px;color:#101c32}
        .zcontact p{color:#64748b;margin:0 0 20px}
        .zcontact .zc-intro>p{font-size:17px;line-height:1.85}
        .zcontact .zc-options{display:grid;gap:22px;margin-top:32px}
        .zcontact .zc-option{display:flex;gap:15px;align-items:flex-start}
        .zcontact .zc-icon{width:44px;height:44px;display:grid;place-items:center;border-radius:11px;background:#edf2ff;color:#315cff;font-size:23px;font-weight:750;flex:none}
        .zcontact h3{margin:0 0 6px;font-size:17px;line-height:1.4;color:#101c32}
        .zcontact .zc-option p{font-size:13px;margin:0 0 5px;line-height:1.7}
        .zcontact .zc-option a,.zcontact .zc-resource strong{font-size:13px;color:#315cff;text-decoration:none;font-weight:650}
        .zcontact .zc-panel{background:#e4eaf6;border:1px solid #dfe6f2;border-radius:24px;padding:19px;box-shadow:0 25px 65px #172b4518;min-width:0}
        .zcontact .zc-card{background:#fff;border:1px solid #dce3ed;border-radius:16px;padding:30px}
        .zcontact .zc-label{font-size:11px;font-weight:750;color:#315cff;letter-spacing:1.5px;margin-bottom:14px}
        .zcontact .zc-card h2{font-size:30px;margin-bottom:10px}
        .zcontact .zc-card>p{font-size:14px}
        .zcontact .zc-form{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px}
        .zcontact .zc-form label{display:flex;flex-direction:column;gap:7px;font-size:13px;font-weight:650;color:#334155;min-width:0}
        .zcontact .zc-wide{grid-column:1/-1}
        .zcontact .zc-form input,.zcontact .zc-form select,.zcontact .zc-form textarea{width:100%;min-width:0;border:1px solid #d5deeb;border-radius:8px;background:white;color:#101c32;padding:11px 12px;font:inherit;font-weight:400;min-height:44px}
        .zcontact .zc-form textarea{resize:vertical}
        .zcontact .zc-form input::placeholder,.zcontact .zc-form textarea::placeholder{color:#8491a4}
        .zcontact .zc-privacy,.zcontact .zc-unavailable{font-size:12px;line-height:1.65;padding:12px;background:#f4f7fc;border:1px solid #e1e7ef;border-radius:8px;margin:0;color:#526278}
        .zcontact .zc-primary{display:inline-flex;align-items:center;justify-content:center;padding:14px 24px;border:0;border-radius:10px;background:#3f6df6;color:#fff;text-decoration:none;font:inherit;font-size:14px;font-weight:700;cursor:pointer}
        .zcontact .zc-primary:hover{background:#2d55cf;color:#fff}
        .zcontact .zc-form-note{font-size:11px;line-height:1.6;text-align:center;color:#64748b}
        .zcontact .zc-form-note a,.zcontact .zc-unavailable a{color:#315cff}
        .zcontact .zc-section{padding:76px 0}
        .zcontact .zc-heading{max-width:730px;margin:0 auto 36px;text-align:center}
        .zcontact .zc-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
        .zcontact .zc-resource{display:block;text-decoration:none;border:1px solid #dfe5ed;background:#fff;border-radius:15px;padding:28px;transition:transform .2s,border-color .2s,box-shadow .2s}
        .zcontact .zc-resource:hover{transform:translateY(-3px);border-color:#a8b8f8;box-shadow:0 15px 35px #172b4510}
        .zcontact .zc-resource .zc-icon{margin-bottom:20px}
        .zcontact .zc-resource h3{font-size:19px}
        .zcontact .zc-resource p{font-size:14px;margin:12px 0 20px}
        .zcontact .zc-muted{background:#f6f8fc;border-block:1px solid #e5eaf1}
        .zcontact .zc-faq{display:grid;gap:12px}
        .zcontact .zc-faq details{background:white;border:1px solid #dfe5ed;border-radius:11px;padding:18px}
        .zcontact .zc-faq summary{cursor:pointer;font-size:14px;font-weight:650}
        .zcontact .zc-faq p{font-size:13px;margin:12px 0 0}
        .zcontact .zc-cta{text-align:center;background:linear-gradient(135deg,#101c32,#172b52);color:#fff;border-radius:22px;padding:60px 24px}
        .zcontact .zc-cta h2{color:white}.zcontact .zc-cta p{color:#c1cce0}.zcontact .zc-cta .zc-label{color:#a9bfff}
        .zcontact .zc-footer{background:#f8fafc;border-top:1px solid #dfe5ed;padding:36px 0 22px}
        .zcontact .zc-foot{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:24px}
        .zcontact .zc-foot strong{font-size:22px}.zcontact .zc-foot p{font-size:13px;margin:6px 0 0}
        .zcontact .zc-links{display:flex;flex-wrap:wrap;gap:20px}.zcontact .zc-links a{font-size:13px;color:#526278;text-decoration:none}
        .zcontact .zc-legal{width:100%;border-top:1px solid #dfe5ed;padding-top:20px;font-size:11px;color:#64748b;display:flex;justify-content:space-between;gap:15px;flex-wrap:wrap}
        .zcontact :focus-visible{outline:2px solid #315cff;outline-offset:3px}
        @media(max-width:950px){.zcontact .zc-split{gap:32px}.zcontact .zc-card{padding:22px}}
        @media(max-width:760px){.zcontact .zc-wrap{width:calc(100% - 36px)}.zcontact .zc-split,.zcontact .zc-grid{grid-template-columns:1fr}.zcontact .zc-hero,.zcontact .zc-section{padding:52px 0}.zcontact h1{letter-spacing:-1.7px}.zcontact .zc-panel{padding:12px}}
        @media(max-width:480px){.zcontact .zc-form{grid-template-columns:1fr}.zcontact .zc-card{padding:18px}.zcontact .zc-cta{padding:40px 18px}}
        @media(prefers-reduced-motion:reduce){.zcontact .zc-resource{transition:none}}
      `})]})}var tt=[[`lock`,`Account access`,`ZapDocs uses Supabase authentication. Choose a unique password and never share your account credentials.`],[`database`,`Responsible data handling`,`Enter only information necessary for the transaction. Limit access to confidential borrower and lender information.`],[`file`,`Document protection`,`Store downloaded documents securely and distribute them only to authorized parties.`],[`users`,`Authorized access`,`Review who can access your loan records and verify account isolation before using live borrower information.`],[`check`,`Safe beta testing`,`Use fictional transactions during initial testing. Compare generated documents with approved reference materials.`],[`alert`,`Report security concerns`,`Contact support if you encounter unexpected account access, document exposure or other potential security issues.`]],nt=[[`Protect credentials`,`Use a strong, unique password and keep your login information private.`],[`Minimize data`,`Enter only the information required for your transaction.`],[`Secure downloads`,`Keep downloaded Word documents and closing materials in protected storage.`],[`Report concerns`,`Describe potential issues through support using fictional or redacted information.`]],rt=[[`How does ZapDocs handle account authentication?`,`ZapDocs uses Supabase authentication for account access. Keep your credentials private and report unexpected account activity.`],[`Should I use real borrower data during beta testing?`,`We recommend using fictional information during initial testing. Before using live data, verify applicable privacy obligations and the platform's security controls.`],[`How should I store downloaded documents?`,`Use secure storage with appropriate access restrictions. Only share documents with authorized parties involved in the transaction.`],[`Is ZapDocs independently security certified?`,`This page does not claim a security certification or completed independent audit. Access isolation, backups, retention and incident response procedures require validation before live production use.`],[`How can I report a security concern?`,`Use Contact Support and describe the issue without including passwords, tax IDs, signed loan documents or other confidential information.`]],it={shield:`M12 3 21 7v5c0 5-9 9-9 9s-9-4-9-9V7zM8 12l3 3 5-6`,lock:`M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4M12 15v2`,database:`M4 6c0-4 16-4 16 0s-16 4-16 0ZM4 6v6c0 4 16 4 16 0V6M4 12v6c0 4 16 4 16 0v-6`,file:`M5 3h9l5 5v13H5zM14 3v6h5M8 13h8M8 17h8`,users:`M16 21v-2a6 6 0 0 0-12 0v2M10 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8M17 4a4 4 0 0 1 0 8M18 15a5 5 0 0 1 3 5`,check:`M4 12l5 5L20 6`,alert:`M12 3 2 21h20L12 3ZM12 9v5M12 17h.01`};function at({name:e,size:t=24}){return(0,b.jsx)(`svg`,{width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,b.jsx)(`path`,{d:it[e]||it.shield})})}function ot({showHeader:e=!0,onHome:t,onLaunch:n,onPricing:r,onDemo:i}={}){return(0,_.useEffect)(()=>{let e=document.title;return document.title=`Security | ZapDocs`,()=>{document.title=e}},[]),(0,b.jsxs)(`div`,{className:`zs-page`,children:[e&&(0,b.jsx)(C,{onHome:t,onLaunch:n,onPricing:r,onDemo:i}),(0,b.jsxs)(`main`,{children:[(0,b.jsx)(`section`,{className:`zs-hero`,children:(0,b.jsxs)(`div`,{className:`zs-wrap zs-split`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{className:`zs-eyebrow`,children:[(0,b.jsx)(`span`,{}),` COMPANY / SECURITY`]}),(0,b.jsxs)(`h1`,{children:[`Security and `,(0,b.jsx)(`em`,{children:`responsible data handling.`})]}),(0,b.jsx)(`p`,{className:`zs-lead`,children:`Learn about account access, responsible handling of loan information and the precautions to take when preparing private lending documents.`}),(0,b.jsxs)(`div`,{className:`zs-actions`,children:[(0,b.jsx)(`a`,{className:`zs-primary`,href:`#security-practices`,children:`Explore security practices ↓`}),(0,b.jsx)(`a`,{className:`zs-secondary`,href:`/privacy`,children:`Privacy Policy`})]})]}),(0,b.jsx)(`div`,{className:`zs-panel`,children:(0,b.jsxs)(`div`,{className:`zs-window`,children:[(0,b.jsxs)(`div`,{className:`zs-window-top`,children:[(0,b.jsx)(`div`,{className:`zs-brand-icon`,children:(0,b.jsx)(at,{name:`shield`})}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`ZapDocs`}),(0,b.jsx)(`small`,{children:`Security center`})]})]}),(0,b.jsxs)(`div`,{className:`zs-window-body`,children:[(0,b.jsx)(`div`,{className:`zs-label`,children:`RESPONSIBLE USE`}),(0,b.jsx)(`h2`,{children:`Protect your lending information.`}),(0,b.jsx)(`p`,{children:`Practical precautions for your account, loan records and documents.`}),[[`lock`,`Account credentials`,`Keep passwords private`],[`database`,`Loan information`,`Minimize confidential inputs`],[`file`,`Downloaded documents`,`Restrict access and distribution`],[`alert`,`Security concerns`,`Report unexpected activity`]].map(([e,t,n])=>(0,b.jsxs)(`div`,{className:`zs-window-row`,children:[(0,b.jsx)(`div`,{className:`zs-icon`,children:(0,b.jsx)(at,{name:e,size:21})}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:t}),(0,b.jsx)(`small`,{children:n})]})]},t)),(0,b.jsx)(`div`,{className:`zs-note`,children:`Security guidance, not a live security assessment or certification.`})]})]})})]})}),(0,b.jsx)(`section`,{className:`zs-strip`,children:(0,b.jsx)(`div`,{className:`zs-wrap zs-three`,children:[[`Account protection`,`Keep your credentials private.`],[`Responsible information use`,`Limit unnecessary sensitive inputs.`],[`Secure document handling`,`Control access to downloaded files.`]].map(([e,t])=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))})}),(0,b.jsx)(`section`,{className:`zs-section`,id:`security-practices`,children:(0,b.jsxs)(`div`,{className:`zs-wrap`,children:[(0,b.jsxs)(`div`,{className:`zs-heading`,children:[(0,b.jsx)(`div`,{className:`zs-label`,children:`SECURITY PRACTICES`}),(0,b.jsx)(`h2`,{children:`Protect information at every stage.`}),(0,b.jsx)(`p`,{children:`Understand your responsibilities when using the ZapDocs workspace.`})]}),(0,b.jsx)(`div`,{className:`zs-three`,children:tt.map(([e,t,n])=>(0,b.jsxs)(`article`,{className:`zs-card`,children:[(0,b.jsx)(`div`,{className:`zs-icon`,children:(0,b.jsx)(at,{name:e})}),(0,b.jsx)(`h3`,{children:t}),(0,b.jsx)(`p`,{children:n})]},t))})]})}),(0,b.jsx)(`section`,{className:`zs-section zs-muted`,children:(0,b.jsxs)(`div`,{className:`zs-wrap zs-split`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`zs-label`,children:`ONGOING VALIDATION`}),(0,b.jsx)(`h2`,{children:`Security is an ongoing responsibility.`}),(0,b.jsx)(`p`,{children:`Before live production use, security controls and operational procedures should be verified. ZapDocs does not claim a completed independent security audit or security certification.`}),(0,b.jsx)(`a`,{className:`zs-link`,href:`/contact-support`,children:`Contact support →`})]}),(0,b.jsxs)(`div`,{className:`zs-card`,children:[(0,b.jsx)(`h3`,{children:`Areas requiring validation`}),[`Account and loan-record access isolation`,`Backup and recovery procedures`,`Data retention and deletion procedures`,`Incident response and reporting`,`Access permissions for stored documents`].map(e=>(0,b.jsxs)(`div`,{className:`zs-validation`,children:[(0,b.jsx)(at,{name:`shield`,size:19}),(0,b.jsx)(`span`,{children:e})]},e)),(0,b.jsx)(`div`,{className:`zs-note`,children:`These are validation priorities, not verified operational guarantees.`})]})]})}),(0,b.jsx)(`section`,{className:`zs-section`,children:(0,b.jsxs)(`div`,{className:`zs-wrap`,children:[(0,b.jsxs)(`div`,{className:`zs-heading`,children:[(0,b.jsx)(`div`,{className:`zs-label`,children:`YOUR SECURITY CHECKLIST`}),(0,b.jsx)(`h2`,{children:`Four steps to responsible platform use.`})]}),(0,b.jsx)(`div`,{className:`zs-four`,children:nt.map(([e,t],n)=>(0,b.jsxs)(`article`,{className:`zs-card`,children:[(0,b.jsxs)(`div`,{className:`zs-icon zs-number`,children:[`0`,n+1]}),(0,b.jsx)(`h3`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))})]})}),(0,b.jsx)(`section`,{className:`zs-section zs-muted`,children:(0,b.jsxs)(`div`,{className:`zs-wrap zs-split zs-faq-layout`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`zs-label`,children:`FREQUENTLY ASKED QUESTIONS`}),(0,b.jsx)(`h2`,{children:`Questions about security?`}),(0,b.jsx)(`p`,{children:`Learn how to handle account information and private lending documents responsibly.`}),(0,b.jsx)(`a`,{className:`zs-link`,href:`/help-center`,children:`Visit the Help Center →`})]}),(0,b.jsx)(`div`,{className:`zs-faq`,children:rt.map(([e,t])=>(0,b.jsxs)(`details`,{children:[(0,b.jsx)(`summary`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e))})]})}),(0,b.jsx)(`section`,{className:`zs-section`,children:(0,b.jsx)(`div`,{className:`zs-wrap`,children:(0,b.jsxs)(`div`,{className:`zs-cta`,children:[(0,b.jsx)(`div`,{className:`zs-label`,children:`CONTACT ZAPDOCS`}),(0,b.jsx)(`h2`,{children:`Have a security question or concern?`}),(0,b.jsx)(`p`,{children:`Contact our support team without including confidential borrower information or account credentials.`}),(0,b.jsxs)(`div`,{className:`zs-actions`,children:[(0,b.jsx)(`a`,{className:`zs-primary`,href:`/contact-support`,children:`Contact Support →`}),(0,b.jsx)(`a`,{className:`zs-secondary`,href:`/privacy`,children:`Privacy Policy`})]})]})})})]}),(0,b.jsx)(`footer`,{className:`zs-footer`,children:(0,b.jsxs)(`div`,{className:`zs-wrap`,children:[(0,b.jsxs)(`div`,{className:`zs-footer-top`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`ZapDocs`}),(0,b.jsx)(`p`,{children:`Document preparation for private lending professionals.`})]}),(0,b.jsxs)(`div`,{className:`zs-footer-links`,children:[(0,b.jsx)(`a`,{href:`/platform`,children:`Platform`}),(0,b.jsx)(`a`,{href:`/help-center`,children:`Help Center`}),(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy`}),(0,b.jsx)(`a`,{href:`/terms`,children:`Terms`})]})]}),(0,b.jsxs)(`div`,{className:`zs-legal`,children:[(0,b.jsxs)(`span`,{children:[`© `,new Date().getFullYear(),` ZapDocs. All rights reserved.`]}),(0,b.jsx)(`span`,{children:`ZapDocs is not a law firm and does not provide legal advice.`})]})]})}),(0,b.jsx)(`style`,{children:`
        .zs-page{min-height:100vh;background:#fff;color:#101c32;font-family:Inter,system-ui,Arial,sans-serif;line-height:1.65}
        .zs-page *{box-sizing:border-box}.zs-wrap{width:min(1200px,calc(100% - 64px));margin:0 auto}
        .zs-hero{padding:90px 0;background:linear-gradient(135deg,#fff,#f4f7fc 65%,#eaf0ff)}
        .zs-split{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:72px;align-items:center}
        .zs-eyebrow{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #dfe5ee;border-radius:30px;padding:9px 15px;color:#526278;font-size:11px;font-weight:750;letter-spacing:1.2px;margin-bottom:24px}.zs-eyebrow span{width:7px;height:7px;background:#3f6df6;border-radius:50%}
        .zs-page main h1{font-size:clamp(38px,4.7vw,64px);letter-spacing:-2.6px;line-height:1.1;margin:0 0 24px;color:#101c32}.zs-page h1 em{display:block;color:#315cff;font-style:normal}
        .zs-page main h2{font-size:clamp(28px,3.5vw,42px);line-height:1.2;letter-spacing:-1.3px;margin:0 0 18px;color:#101c32}.zs-page main p{color:#64748b;margin:0 0 20px}.zs-page .zs-lead{font-size:17px;line-height:1.85}
        .zs-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:26px}.zs-primary,.zs-secondary{display:inline-flex;align-items:center;justify-content:center;padding:13px 22px;border-radius:10px;font-size:14px;font-weight:700;text-decoration:none;transition:background .2s}.zs-primary{background:#3f6df6;color:#fff}.zs-primary:hover{background:#2d55cf;color:#fff}.zs-secondary{background:#fff;color:#101c32;border:1px solid #d6deea}.zs-secondary:hover{background:#f1f5fa}
        .zs-panel{background:#e4eaf6;border:1px solid #dfe6f2;border-radius:24px;padding:19px;box-shadow:0 25px 65px #172b4518}.zs-window{background:white;border:1px solid #dce3ed;border-radius:15px;overflow:hidden}.zs-window-top{display:flex;gap:12px;align-items:center;padding:17px 22px;border-bottom:1px solid #e5eaf1}.zs-brand-icon{width:40px;height:40px;display:grid;place-items:center;background:#315cff;color:white;border-radius:10px}.zs-window-top strong,.zs-window-top small{display:block}.zs-window-top small{font-size:11px;color:#64748b}.zs-window-body{padding:26px}.zs-window-body h2{font-size:25px!important;letter-spacing:-.6px!important}.zs-window-body p{font-size:13px}.zs-label{color:#315cff;font-size:11px;letter-spacing:1.5px;font-weight:750;margin-bottom:16px}.zs-window-row{display:flex;gap:13px;align-items:center;padding:13px 0;border-bottom:1px solid #edf1f5}.zs-window-row strong,.zs-window-row small{display:block}.zs-window-row strong{font-size:14px}.zs-window-row small{color:#64748b;font-size:12px}.zs-icon{width:46px;height:46px;display:grid;place-items:center;background:#edf2ff;color:#315cff;border-radius:11px;flex:none}.zs-note{background:#f4f7fc;border:1px solid #e1e7ef;color:#526278;padding:13px;border-radius:8px;font-size:12px;line-height:1.7;margin-top:20px}
        .zs-strip{padding:34px 0;border-block:1px solid #e5eaf1;text-align:center}.zs-strip strong{font-size:16px}.zs-strip p{font-size:13px;margin:7px 0 0!important}.zs-three,.zs-four{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.zs-four{grid-template-columns:repeat(4,minmax(0,1fr))}
        .zs-section{padding:82px 0;scroll-margin-top:90px}.zs-muted{background:#f6f8fc;border-block:1px solid #e5eaf1}.zs-heading{max-width:760px;margin:0 auto 38px;text-align:center}.zs-card{background:#fff;border:1px solid #dfe5ed;border-radius:15px;padding:28px;transition:box-shadow .2s,border-color .2s}.zs-card:hover{border-color:#a8b8f8;box-shadow:0 15px 35px #172b450c}.zs-card>.zs-icon{margin-bottom:22px}.zs-card h3{font-size:19px;line-height:1.4;margin:0 0 12px}.zs-card p{font-size:14px;line-height:1.8;margin:0!important}.zs-number{font-size:16px;font-weight:750}.zs-validation{display:flex;gap:12px;align-items:center;border-bottom:1px solid #edf1f5;padding:13px 0;color:#526278;font-size:14px}.zs-validation svg{color:#315cff;flex:none}.zs-link{color:#315cff;font-size:14px;font-weight:700;text-decoration:none}.zs-link:hover{text-decoration:underline}
        .zs-faq-layout{align-items:start}.zs-faq{display:grid;gap:12px}.zs-faq details{background:#fff;border:1px solid #dfe5ed;border-radius:10px;padding:19px}.zs-faq summary{font-size:14px;font-weight:650;cursor:pointer}.zs-faq p{font-size:13px;margin:12px 0 0!important;line-height:1.8}
        .zs-cta{background:linear-gradient(135deg,#101c32,#172b52);border-radius:22px;padding:60px 24px;text-align:center;color:#fff}.zs-cta h2{color:#fff!important}.zs-cta p{color:#c1cce0!important;max-width:680px;margin-inline:auto!important}.zs-cta .zs-label{color:#a9bfff}.zs-cta .zs-actions{justify-content:center}.zs-cta .zs-secondary{background:transparent;border-color:#ffffff55;color:white}.zs-cta .zs-secondary:hover{background:#ffffff15}
        .zs-footer{background:#f8fafc;border-top:1px solid #dfe5ed;padding:36px 0 22px}.zs-footer-top{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:24px}.zs-footer-top strong{font-size:23px}.zs-footer-top p{color:#64748b;font-size:13px;margin:6px 0}.zs-footer-links{display:flex;flex-wrap:wrap;gap:20px}.zs-footer-links a{color:#526278;font-size:13px;text-decoration:none}.zs-legal{border-top:1px solid #dfe5ed;padding-top:20px;margin-top:24px;color:#64748b;font-size:11px;display:flex;justify-content:space-between;gap:15px;flex-wrap:wrap}.zs-page main :focus-visible{outline:2px solid #315cff;outline-offset:3px}
        @media(max-width:1000px){.zs-split{gap:35px}.zs-four{grid-template-columns:repeat(2,minmax(0,1fr))}.zs-panel{padding:12px}}
        @media(max-width:760px){.zs-wrap{width:calc(100% - 36px)}.zs-split,.zs-three{grid-template-columns:1fr}.zs-hero,.zs-section{padding:55px 0}.zs-page main h1{letter-spacing:-1.6px}.zs-panel{max-width:600px;width:100%;margin:auto}}
        @media(max-width:480px){.zs-four{grid-template-columns:1fr}.zs-card,.zs-window-body{padding:20px}.zs-cta{padding:40px 18px}}@media(prefers-reduced-motion:reduce){.zs-card,.zs-primary,.zs-secondary{transition:none}}
      `})]})}var st=[{category:`Document Generation`,icon:`files`,title:`Florida and California loan packages`,description:`Generate coordinated document packages for supported private lending transactions.`,href:`/document-outputs`},{category:`Loan Calculations`,icon:`calculator`,title:`Automatic payment calculations`,description:`Calculate interest-only payments and review customizable payment schedules and balloon amounts.`,href:`/product-guide`},{category:`New Documents`,icon:`file`,title:`Servicing agreements and lender disclosures`,description:`Prepare supported servicing agreements and lender disclosures directly from your loan workspace.`,href:`/document-outputs`},{category:`User Experience`,icon:`eye`,title:`Document previews`,description:`Review available generated document previews before downloading your loan package.`,href:`/document-generation`},{category:`Customer Support`,icon:`help`,title:`ZapDocs Help Center`,description:`Explore product guidance and contact support for assistance.`,href:`/help-center`}],ct={files:`M8 3h9l4 4v14H8zM17 3v5h4M4 6H3v15h2M11 12h7M11 16h7`,calculator:`M5 3h14v18H5zM8 6h8v4H8zM8 14h1M15 14h1M8 17h1M15 17h1`,file:`M5 3h9l5 5v13H5zM14 3v6h5M8 13h8M8 17h8`,eye:`M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z`,help:`M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9 9a3 3 0 1 1 4 3c-1 1-1 1-1 2M12 17h.01`};function lt({name:e}){return(0,b.jsx)(`span`,{className:`zu-icon`,"aria-hidden":`true`,children:(0,b.jsx)(`svg`,{width:`25`,height:`25`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.65`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,b.jsx)(`path`,{d:ct[e]||ct.file})})})}var ut=[`All updates`,...new Set(st.map(e=>e.category))];function dt({onHome:e,onLaunch:t,onPricing:n,onDemo:r,showHeader:i=!0}={}){let[a,o]=(0,_.useState)(`All updates`),s=a===`All updates`?st:st.filter(e=>e.category===a);return(0,_.useEffect)(()=>{let e=document.title;return document.title=`Product Updates | ZapDocs`,()=>{document.title=e}},[]),(0,b.jsxs)(`div`,{className:`zu-page`,children:[i&&(0,b.jsx)(C,{onHome:e,onLaunch:t,onPricing:n,onDemo:r}),(0,b.jsxs)(`main`,{className:`zu-main`,children:[(0,b.jsx)(`section`,{className:`zu-hero`,children:(0,b.jsxs)(`div`,{className:`zu-wrap zu-split`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{className:`zu-eyebrow`,children:[(0,b.jsx)(`span`,{}),` ZAPDOCS / PRODUCT UPDATES`]}),(0,b.jsxs)(`h1`,{children:[`What's new at `,(0,b.jsx)(`em`,{children:`ZapDocs.`})]}),(0,b.jsx)(`p`,{className:`zu-lead`,children:`Explore the features, improvements and additions to your private lending document preparation workspace.`}),(0,b.jsxs)(`div`,{className:`zu-actions`,children:[(0,b.jsx)(`a`,{className:`zu-primary`,href:`#product-updates`,children:`Explore updates ↓`}),(0,b.jsx)(`a`,{className:`zu-secondary`,href:`/product-guide`,children:`Product guide`})]})]}),(0,b.jsx)(`div`,{className:`zu-feature-panel`,children:(0,b.jsxs)(`div`,{className:`zu-feature-card`,children:[(0,b.jsxs)(`div`,{className:`zu-feature-top`,children:[(0,b.jsx)(lt,{name:`files`}),(0,b.jsx)(`span`,{className:`zu-label`,children:`PLATFORM HIGHLIGHT`})]}),(0,b.jsx)(`h2`,{children:`Two states. One workspace.`}),(0,b.jsx)(`p`,{children:`Prepare coordinated loan document packages for supported Florida and California transactions.`}),(0,b.jsx)(`div`,{className:`zu-state-grid`,children:[[`FL`,`Florida`,`Mortgage workflow`],[`CA`,`California`,`Deed of trust workflow`]].map(([e,t,n])=>(0,b.jsxs)(`div`,{className:`zu-state`,children:[(0,b.jsx)(`span`,{children:e}),(0,b.jsx)(`strong`,{children:t}),(0,b.jsx)(`small`,{children:n})]},e))}),(0,b.jsx)(`a`,{className:`zu-link`,href:`/document-outputs`,children:`Explore document outputs →`})]})})]})}),(0,b.jsx)(`section`,{className:`zu-section`,id:`product-updates`,children:(0,b.jsxs)(`div`,{className:`zu-wrap`,children:[(0,b.jsxs)(`div`,{className:`zu-section-heading`,children:[(0,b.jsx)(`div`,{className:`zu-label`,children:`PRODUCT CHANGELOG`}),(0,b.jsx)(`h2`,{children:`Explore platform improvements.`}),(0,b.jsx)(`p`,{children:`Browse updates by the part of your lending workflow that matters to you.`})]}),(0,b.jsx)(`div`,{className:`zu-filters`,role:`group`,"aria-label":`Filter product updates`,children:ut.map(e=>(0,b.jsx)(`button`,{type:`button`,"aria-pressed":a===e,onClick:()=>o(e),children:e},e))}),(0,b.jsxs)(`p`,{className:`zu-count`,"aria-live":`polite`,children:[s.length,` `,s.length===1?`update`:`updates`]}),(0,b.jsx)(`div`,{className:`zu-updates`,children:s.map(e=>(0,b.jsxs)(`article`,{className:`zu-update`,children:[(0,b.jsx)(lt,{name:e.icon}),(0,b.jsxs)(`div`,{className:`zu-update-copy`,children:[(0,b.jsx)(`div`,{className:`zu-label`,children:e.category}),(0,b.jsx)(`h3`,{children:e.title}),(0,b.jsx)(`p`,{children:e.description}),(0,b.jsx)(`a`,{className:`zu-link`,href:e.href,children:`Learn more →`})]})]},e.title))})]})}),(0,b.jsx)(`section`,{className:`zu-section zu-muted`,children:(0,b.jsxs)(`div`,{className:`zu-wrap`,children:[(0,b.jsxs)(`div`,{className:`zu-section-heading`,children:[(0,b.jsx)(`div`,{className:`zu-label`,children:`KEEP EXPLORING`}),(0,b.jsx)(`h2`,{children:`Make the most of ZapDocs.`})]}),(0,b.jsx)(`div`,{className:`zu-resources`,children:[[`help`,`Help Center`,`Find answers to common platform questions.`,`/help-center`],[`file`,`Getting Started`,`Create and review your first fictional loan package.`,`/getting-started`],[`eye`,`Product Guide`,`Explore loan information, payments and document controls.`,`/product-guide`]].map(([e,t,n,r])=>(0,b.jsxs)(`a`,{className:`zu-resource`,href:r,children:[(0,b.jsx)(lt,{name:e}),(0,b.jsx)(`h3`,{children:t}),(0,b.jsx)(`p`,{children:n}),(0,b.jsx)(`span`,{className:`zu-link`,children:`Explore resource →`})]},t))})]})}),(0,b.jsx)(`section`,{className:`zu-section`,children:(0,b.jsx)(`div`,{className:`zu-wrap`,children:(0,b.jsxs)(`div`,{className:`zu-cta`,children:[(0,b.jsx)(`div`,{className:`zu-label`,children:`EXPERIENCE ZAPDOCS`}),(0,b.jsx)(`h2`,{children:`See the platform in action.`}),(0,b.jsx)(`p`,{children:`Discover how ZapDocs can fit into your private lending document preparation workflow.`}),(0,b.jsxs)(`div`,{className:`zu-actions`,children:[(0,b.jsx)(`a`,{href:`/demo`,className:`zu-primary`,children:`Book a Demo →`}),(0,b.jsx)(`a`,{href:`/contact`,className:`zu-secondary`,children:`Share product feedback`})]})]})})})]}),(0,b.jsx)(`footer`,{className:`zu-footer`,children:(0,b.jsxs)(`div`,{className:`zu-wrap`,children:[(0,b.jsxs)(`div`,{className:`zu-foot`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`ZapDocs`}),(0,b.jsx)(`p`,{children:`Document preparation for private lending professionals.`})]}),(0,b.jsxs)(`div`,{className:`zu-links`,children:[(0,b.jsx)(`a`,{href:`/platform`,children:`Platform`}),(0,b.jsx)(`a`,{href:`/pricing`,children:`Pricing`}),(0,b.jsx)(`a`,{href:`/help-center`,children:`Help Center`}),(0,b.jsx)(`a`,{href:`/privacy`,children:`Privacy`}),(0,b.jsx)(`a`,{href:`/terms`,children:`Terms`}),(0,b.jsx)(`a`,{href:`/`,children:`Home`})]})]}),(0,b.jsxs)(`div`,{className:`zu-legal`,children:[(0,b.jsxs)(`span`,{children:[`© `,new Date().getFullYear(),` ZapDocs. All rights reserved.`]}),(0,b.jsx)(`span`,{children:`ZapDocs is not a law firm and does not provide legal advice.`})]})]})}),(0,b.jsx)(`style`,{children:`
        .zu-page{min-height:100vh;background:#fff;color:#101c32;font-family:Inter,system-ui,Arial,sans-serif}
        .zu-page *{box-sizing:border-box}
        .zu-page .zu-wrap{width:min(1200px,calc(100% - 64px));margin:0 auto}
        .zu-page .zu-main{background:#fff;line-height:1.65}
        .zu-page .zu-hero{padding:90px 0;background:linear-gradient(135deg,#fff,#f4f7fc 65%,#eaf0ff)}
        .zu-page .zu-split{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:70px;align-items:center}
        .zu-page .zu-eyebrow{display:inline-flex;align-items:center;gap:9px;background:#fff;border:1px solid #dfe5ee;border-radius:30px;padding:9px 15px;color:#526278;font-size:11px;letter-spacing:1.1px;font-weight:750;margin-bottom:24px}
        .zu-page .zu-eyebrow span{width:7px;height:7px;background:#3f6df6;border-radius:50%}
        .zu-page .zu-main h1{font-size:clamp(42px,5.2vw,72px);line-height:1.08;letter-spacing:-2.8px;margin:0 0 23px;color:#101c32;font-weight:800}
        .zu-page .zu-main h1 em{display:block;font-style:normal;color:#315cff}
        .zu-page .zu-main h2{font-size:clamp(29px,3.5vw,44px);line-height:1.2;letter-spacing:-1.4px;margin:0 0 16px;color:#101c32}
        .zu-page .zu-main h3{font-size:22px;line-height:1.35;margin:0 0 10px;color:#101c32}
        .zu-page .zu-main p,.zu-page .zu-footer p{color:#64748b;margin:0 0 18px}
        .zu-page .zu-lead{font-size:18px;line-height:1.85;max-width:530px}
        .zu-page .zu-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px}
        .zu-page .zu-primary,.zu-page .zu-secondary{display:inline-flex;justify-content:center;align-items:center;padding:13px 23px;border-radius:11px;text-decoration:none;font-size:14px;font-weight:700;transition:background .2s}
        .zu-page .zu-primary{background:#3f6df6;border:1px solid #3f6df6;color:#fff}.zu-page .zu-primary:hover{background:#2d55cf;color:#fff}
        .zu-page .zu-secondary{background:#fff;border:1px solid #d6deea;color:#101c32}.zu-page .zu-secondary:hover{background:#edf2ff}
        .zu-page .zu-feature-panel{background:#e4eaf6;border:1px solid #dfe6f2;border-radius:24px;padding:20px;box-shadow:0 25px 65px #172b4518}
        .zu-page .zu-feature-card{background:#fff;border:1px solid #dce3ed;border-radius:16px;padding:30px}
        .zu-page .zu-feature-card h2{font-size:32px}
        .zu-page .zu-feature-top{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:24px}
        .zu-page .zu-icon{display:grid;place-items:center;width:48px;height:48px;border-radius:11px;background:#edf2ff;color:#315cff;flex:none}
        .zu-page .zu-label{color:#315cff;font-size:11px;font-weight:750;letter-spacing:1.3px;text-transform:uppercase;margin-bottom:12px}
        .zu-page .zu-feature-top .zu-label{margin:0;text-align:right}
        .zu-page .zu-state-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:24px 0}
        .zu-page .zu-state{background:#f8fafc;border:1px solid #e1e7ef;border-radius:10px;padding:16px;min-width:0}
        .zu-page .zu-state>span{display:grid;place-items:center;background:#e9efff;color:#315cff;font-weight:800;width:36px;height:36px;border-radius:8px;margin-bottom:12px}
        .zu-page .zu-state strong,.zu-page .zu-state small{display:block}.zu-page .zu-state small{color:#64748b;font-size:11px;margin-top:4px}
        .zu-page .zu-link{color:#315cff;text-decoration:none;font-weight:650;font-size:14px}.zu-page .zu-link:hover{text-decoration:underline}
        .zu-page .zu-section{padding:78px 0;scroll-margin-top:90px}
        .zu-page .zu-section-heading{text-align:center;max-width:740px;margin:0 auto 38px}
        .zu-page .zu-filters{display:flex;flex-wrap:wrap;gap:9px;padding-bottom:20px;border-bottom:1px solid #e1e7ef}
        .zu-page .zu-filters button{background:#fff;color:#526278;border:1px solid #dfe5ed;border-radius:8px;padding:10px 15px;font:inherit;font-size:13px;font-weight:600;cursor:pointer}
        .zu-page .zu-filters button:hover{background:#f4f7fc}.zu-page .zu-filters button[aria-pressed=true]{background:#315cff;border-color:#315cff;color:#fff}
        .zu-page .zu-count{font-size:13px;margin:18px 0!important}
        .zu-page .zu-updates{display:grid;gap:16px}
        .zu-page .zu-update{display:flex;align-items:flex-start;gap:22px;border:1px solid #dfe5ed;border-radius:15px;padding:28px;background:white}
        .zu-page .zu-update-copy{min-width:0;flex:1}.zu-page .zu-update .zu-label{margin-bottom:7px}.zu-page .zu-update p{font-size:15px;margin-bottom:14px}
        .zu-page .zu-muted{background:#f6f8fc;border-block:1px solid #e5eaf1}
        .zu-page .zu-resources{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
        .zu-page .zu-resource{display:block;text-decoration:none;background:#fff;border:1px solid #dfe5ed;border-radius:15px;padding:28px;transition:transform .2s,border-color .2s,box-shadow .2s}
        .zu-page .zu-resource:hover{transform:translateY(-3px);border-color:#a8b8f8;box-shadow:0 15px 35px #172b4510}.zu-page .zu-resource .zu-icon{margin-bottom:22px}.zu-page .zu-resource p{font-size:14px}
        .zu-page .zu-cta{background:linear-gradient(135deg,#101c32,#172b52);color:#fff;text-align:center;border-radius:22px;padding:65px 24px}.zu-page .zu-cta h2{color:white}.zu-page .zu-cta p{color:#c1cce0}.zu-page .zu-cta .zu-label{color:#a9bfff}.zu-page .zu-cta .zu-actions{justify-content:center}.zu-page .zu-cta .zu-secondary{background:transparent;color:#fff;border-color:#ffffff55}.zu-page .zu-cta .zu-secondary:hover{background:#ffffff15}
        .zu-page .zu-footer{background:#f8fafc;border-top:1px solid #e1e7ef;padding:40px 0 24px}.zu-page .zu-foot{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap}.zu-page .zu-foot strong{font-size:23px}.zu-page .zu-foot p{font-size:13px;margin:7px 0}.zu-page .zu-links{display:flex;gap:20px;flex-wrap:wrap;align-items:center}.zu-page .zu-links a{color:#526278;font-size:13px;text-decoration:none}.zu-page .zu-links a:hover{color:#315cff}.zu-page .zu-legal{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;border-top:1px solid #dfe5ed;margin-top:24px;padding-top:22px;color:#64748b;font-size:11px}
        .zu-page .zu-main :focus-visible,.zu-page .zu-footer :focus-visible{outline:3px solid #315cff;outline-offset:3px}
        @media(max-width:950px){.zu-page .zu-split{gap:32px}.zu-page .zu-feature-card{padding:23px}}
        @media(max-width:760px){.zu-page .zu-wrap{width:calc(100% - 36px)}.zu-page .zu-split,.zu-page .zu-resources{grid-template-columns:1fr}.zu-page .zu-hero,.zu-page .zu-section{padding:54px 0}.zu-page .zu-main h1{letter-spacing:-1.7px}.zu-page .zu-feature-panel{padding:12px}}
        @media(max-width:480px){.zu-page .zu-update{padding:19px;gap:14px}.zu-page .zu-update .zu-icon{width:38px;height:38px}.zu-page .zu-main h3{font-size:19px}.zu-page .zu-state{padding:12px}.zu-page .zu-cta{padding:42px 18px}}
        @media(prefers-reduced-motion:reduce){.zu-page .zu-resource,.zu-page .zu-primary,.zu-page .zu-secondary{transition:none}}
      `})]})}var ft=[[`Getting started`,`How do I create my first loan?`,`Sign in, open the Loans area, choose New Loan, select Florida or California, and enter the loan terms, property, borrower and lender information. Save Loan before generating a package. Use fictional data while learning the platform.`],[`Getting started`,`Which states and loan types are supported?`,`ZapDocs currently supports Florida mortgage and California deed-of-trust workflows, with configurable interest-only payment structures, prepaid interest, deferred interest and custom balloons. Confirm the selected templates are appropriate for the actual transaction.`],[`Getting started`,`Can I reopen an existing loan?`,`Open Loans and select the saved record. Review the existing values, make changes and select Save Loan. Regenerate any previously downloaded documents that are affected by the changes.`],[`Getting started`,`How do reusable profiles work?`,`Save frequently used lender, brokerage, trustee or servicer information in the reusable profiles area. Apply the desired profile to a new loan and verify all populated fields before saving.`],[`Documents`,`How do I generate a complete loan package?`,`Open the loan, check the selected state, save the record and select Generate Documents. Open the downloaded ZIP package and review every included file before distributing it.`],[`Documents`,`Can I generate servicing agreements separately?`,`Select Servicing Agreement in the loan workspace. Complete the lender, servicer and servicing date fields first. Florida and California use the configured shared servicing template; confirm the agreement is appropriate for your transaction.`],[`Documents`,`How do I generate lender disclosures?`,`Complete the disclosure information, including the relevant lender share and payment schedule where required, and click Lender Disclosures. Review the output for state-specific applicability before use.`],[`Documents`,`How can I preview documents?`,`Select Preview Documents to view the available rendered document preview. Preview Terms shows the loan terms for review. If the document preview fails, check the error message and contact support if it persists.`],[`Documents`,`How do I correct a document after downloading it?`,`Correct the source loan record, save it and regenerate the affected documents. Do not assume previously downloaded copies have been updated. If documents have already been signed, consult your closing professional about appropriate corrections.`],[`Documents`,`Does ZapDocs provide legal advice?`,`No. ZapDocs is document preparation software. The user is responsible for selecting appropriate forms and obtaining professional review of terms, calculations and legal requirements before execution.`],[`Payments`,`How is monthly interest calculated?`,`Calculate monthly interest provides an estimate based on principal multiplied by the annual percentage rate divided by 12. Verify the contractual day-count convention, irregular periods and actual payment obligations independently; a 30/365 convention can produce a different result.`],[`Payments`,`How do I automatically populate a payment schedule?`,`Enter the loan amount, annual interest rate, first payment date and loan term or maturity date. Select Calculate all payments and review the resulting schedule. Confirm the installment count, dates, prepaid amounts and balloon before generating documents.`],[`Payments`,`Can I enter my own balloon amount?`,`Yes. The balloon amount remains user-controlled. Review any suggested amount and decide whether final interest or other amounts are included. Confirm that the Note and security instrument describe the principal and total balloon consistently.`],[`Payments`,`How do prepaid payments work?`,`Enter the agreed prepaid months and review the calculated prepaid total, first and last prepaid periods and first payment due to the servicer. Prepaid interest is not necessarily a prepayment penalty; review the separate contractual terms.`],[`Payments`,`Can I use multiple payment tiers?`,`Add payment schedule rows for each tier, with the number of payments, start date, rate and amount. Review the resulting schedule for overlaps, gaps and payments on or after maturity.`],[`Payments`,`What about deferred interest?`,`Choose the applicable deferred-interest structure and review each reduced-payment tier. Confirm whether interest is deferred without compounding or capitalized under the actual agreement. Reconcile the deferred amount with the user-entered balloon.`],[`Troubleshooting`,`Why am I seeing a missing template error?`,`Confirm the state and document type. A missing template message can indicate that the backend cannot locate the configured Word file. Send support the exact error and document type, without attaching confidential loan data.`],[`Troubleshooting`,`Why are fields blank in my generated documents?`,`Review the saved loan fields and check whether a second borrower or other conditional field is applicable. Regenerate the document after saving. If required values are still missing or template codes appear, report the document name and affected field.`],[`Troubleshooting`,`Why won't a PDF preview load?`,`Try regenerating after saving the loan and refreshing the page. PDF previews depend on a server-side document renderer. If the issue remains, report the exact error, state and document type.`],[`Troubleshooting`,`Why can't I sign in?`,`Check the email address, verify your account if prompted, and use the available sign-in recovery options. If access remains unavailable, contact support. Never share your password or verification code.`],[`Account & privacy`,`Can I share borrower information with support?`,`Use fictional or redacted examples only. Do not send Social Security numbers, tax IDs, bank details, passwords, signed documents or unredacted borrower records through ordinary email.`],[`Account & privacy`,`How do I request help with account data?`,`Contact support using your account email and explain the request without including sensitive borrower details. See the Privacy Policy for more information about data practices.`]],pt=[`All topics`,...new Set(ft.map(e=>e[0]))];function mt(){let[e,t]=(0,_.useState)(``),[n,r]=(0,_.useState)(`All topics`),[i,a]=(0,_.useState)({}),o=(0,_.useMemo)(()=>ft.filter(t=>(n===`All topics`||t[0]===n)&&e.trim().toLowerCase().split(/\s+/).every(e=>t.join(` `).toLowerCase().includes(e))),[e,n]);return(0,b.jsxs)(`span`,{className:`zhc`,children:[(0,b.jsx)(`style`,{children:`
      .zhc{display:block;color:#080d36}.zhc label,.zhc .zhc-label{display:block;font-weight:700;margin:0 0 8px}.zhc input{width:100%;padding:15px 17px;border:1px solid #cbd3e4;border-radius:10px;background:#fff;font:inherit;color:#080d36}.zhc input:focus-visible,.zhc button:focus-visible{outline:3px solid #2f63ff;outline-offset:3px}.zhc .zhc-tabs{display:flex;flex-wrap:wrap;gap:8px;margin:18px 0}.zhc button{font:inherit;cursor:pointer;color:#080d36}.zhc .zhc-tab{border:1px solid #dce2ed;background:white;border-radius:999px;padding:7px 13px;font-size:13px;font-weight:650}.zhc .zhc-tab[aria-pressed=true]{background:#edf2ff;border-color:#2f63ff;color:#2455e8}.zhc .zhc-result{display:block;font-size:13px;color:#59627a;margin:12px 0}.zhc .zhc-item{display:block;border:1px solid #e0e5ef;border-radius:10px;margin:10px 0;overflow:hidden}.zhc .zhc-question{display:flex;width:100%;justify-content:space-between;align-items:center;gap:15px;text-align:left;border:0;background:white;padding:17px;font-weight:700}.zhc .zhc-question:hover{background:#f5f7fb}.zhc .zhc-category{display:block;font-size:11px;color:#2455e8;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px}.zhc .zhc-answer{display:block;background:#f7f9fc;padding:15px 17px;color:#46536d;line-height:1.7}.zhc .zhc-cta{display:block;margin-top:25px;padding:22px;background:#edf2ff;border-radius:12px}.zhc .zhc-cta strong{display:block;font-size:19px;margin-bottom:6px}.zhc .zhc-cta a{display:inline-block;margin-top:12px;background:#43e19a;padding:10px 18px;border-radius:999px;font-weight:750}
    `}),(0,b.jsx)(`label`,{htmlFor:`zhc-search`,children:`Search the help center`}),(0,b.jsx)(`input`,{id:`zhc-search`,type:`search`,placeholder:`Try payment schedule, servicing or document preview`,value:e,onChange:e=>t(e.target.value)}),(0,b.jsx)(`span`,{className:`zhc-tabs`,role:`group`,"aria-label":`Filter help topics`,children:pt.map(e=>(0,b.jsx)(`button`,{type:`button`,className:`zhc-tab`,"aria-pressed":n===e,onClick:()=>r(e),children:e},e))}),(0,b.jsxs)(`span`,{className:`zhc-result`,role:`status`,children:[o.length,` `,o.length===1?`article`:`articles`,` found`]}),o.length===0&&(0,b.jsx)(`span`,{className:`zhc-answer`,children:`No matching articles. Try a different search or contact support.`}),o.map(([e,t,n])=>{let r=`zhc-answer-${ft.findIndex(e=>e[1]===t)}`;return(0,b.jsxs)(`span`,{className:`zhc-item`,children:[(0,b.jsxs)(`button`,{type:`button`,className:`zhc-question`,"aria-expanded":!!i[r],"aria-controls":r,onClick:()=>a(e=>({...e,[r]:!e[r]})),children:[(0,b.jsxs)(`span`,{children:[(0,b.jsx)(`span`,{className:`zhc-category`,children:e}),t]}),(0,b.jsx)(`span`,{"aria-hidden":`true`,children:i[r]?`−`:`+`})]}),(0,b.jsx)(`span`,{id:r,className:`zhc-answer`,hidden:!i[r],style:i[r]?void 0:{display:`none`},children:n})]},t)}),(0,b.jsxs)(`span`,{className:`zhc-cta`,children:[(0,b.jsx)(`strong`,{children:`Still need help?`}),`Send our support team a description of your issue. Please use redacted or fictional loan examples.`,(0,b.jsx)(`br`,{}),(0,b.jsx)(`a`,{href:`/contact-support`,children:`Contact support`})]})]})}function ht(){return(0,b.jsx)(Je,{page:{title:`Help Center`,path:`/help-center`,group:`Support`,lead:`Find answers, explore loan document workflows and get help with ZapDocs.`,sections:[[`How can we help?`,(0,b.jsx)(mt,{})]],contact:!1}})}var gt=``,_t=[`Account or sign-in`,`Document generation`,`Payment calculations`,`Servicing agreement`,`Lender disclosures`,`PDF preview or downloads`,`Bug report`,`Feature request`,`Privacy or accessibility`,`Other`],vt={name:``,email:``,topic:``,state:``,subject:``,message:``,steps:``};function yt(){let[e,t]=(0,_.useState)(vt),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(``),o=(e,n)=>{t(t=>({...t,[e]:n})),a(``)},s=()=>[`Name: ${e.name.trim()}`,`Account email: ${e.email.trim()}`,`Category: ${e.topic}`,`Loan state: ${e.state||`Not applicable`}`,``,e.message.trim(),``,`Steps to reproduce:`,e.steps.trim()||`Not provided`].join(`
`),c=()=>!e.name.trim()||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email.trim())||!e.topic||!e.subject.trim()||!e.message.trim()?(a(`Enter your name, valid email, category, subject and issue description.`),!1):n?!0:(a(`Confirm that you have removed sensitive information before continuing.`),!1);function l(){if(c()){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gt)){a(`Support email has not been configured. You can copy your request instead.`);return}window.location.href=`mailto:${gt}?subject=${encodeURIComponent(`[ZapDocs Support] ${e.subject.trim()}`)}&body=${encodeURIComponent(s())}`,a(`Your email app may open with a draft. Review it and send it yourself; no ticket has been submitted yet.`)}}async function u(){if(c())try{await navigator.clipboard.writeText(`Subject: [ZapDocs Support] ${e.subject.trim()}\n\n${s()}`),a(`Request copied. Paste it into an email to the support team.`)}catch{a(`Clipboard unavailable. Select and copy the request text below.`)}}let d=(t,n,r,i=`text`)=>(0,b.jsxs)(`span`,{className:`zcs-field`,children:[(0,b.jsx)(`label`,{htmlFor:`zcs-${t}`,children:n}),(0,b.jsx)(`input`,{id:`zcs-${t}`,type:i,value:e[t],maxLength:t===`subject`?160:200,placeholder:r,onChange:e=>o(t,e.target.value),required:!0})]});return(0,b.jsxs)(`span`,{className:`zcs`,children:[(0,b.jsx)(`style`,{children:`
      .zcs{display:block;color:#080d36}.zcs .zcs-grid{display:grid;grid-template-columns:1fr 1fr;gap:17px}.zcs .zcs-field{display:block;margin-bottom:17px}.zcs .zcs-field label{display:block;font-size:14px;font-weight:700;margin-bottom:7px}.zcs input:not([type=checkbox]),.zcs select,.zcs textarea{display:block;width:100%;padding:12px 13px;border:1px solid #ccd5e3;border-radius:8px;font:inherit;color:#080d36;background:white}.zcs textarea{resize:vertical;min-height:110px}.zcs input:focus-visible,.zcs select:focus-visible,.zcs textarea:focus-visible,.zcs button:focus-visible{outline:3px solid #2f63ff;outline-offset:3px}.zcs .zcs-note{display:block;background:#f5f7fb;border:1px solid #e1e6ef;border-radius:10px;padding:16px;margin:0 0 24px;color:#46536d}.zcs .zcs-check{display:flex;align-items:flex-start;gap:9px;font-size:13px;margin:14px 0 20px;color:#46536d}.zcs .zcs-check input{margin-top:5px;accent-color:#2455e8}.zcs .zcs-actions{display:flex;gap:10px;flex-wrap:wrap}.zcs button{border:1px solid #cbd3e4;border-radius:999px;padding:11px 20px;background:white;font:inherit;font-weight:700;color:#080d36;cursor:pointer}.zcs button.zcs-primary{background:#43e19a;border-color:#43e19a}.zcs .zcs-status{display:block;margin:15px 0;color:#334155}.zcs .zcs-preview{display:block;margin-top:16px}.zcs .zcs-preview textarea{font-size:13px;min-height:150px}.zcs .zcs-muted{display:block;font-size:13px;color:#59627a;margin-top:10px}@media(max-width:650px){.zcs .zcs-grid{grid-template-columns:1fr;gap:0}}
    `}),(0,b.jsxs)(`span`,{className:`zcs-note`,children:[(0,b.jsx)(`strong`,{children:`Before contacting us`}),(0,b.jsx)(`br`,{}),`Check the `,(0,b.jsx)(`a`,{href:`/help-center`,style:{textDecoration:`underline`},children:`Help Center`}),` for common solutions. Never include passwords, tax IDs, banking information, signed loan documents or unredacted borrower data.`]}),(0,b.jsx)(`span`,{className:`zcs-muted`,style:{marginBottom:18},children:`* Required fields`}),(0,b.jsxs)(`span`,{className:`zcs-grid`,children:[d(`name`,`Full name *`,`Your name`),d(`email`,`Account email *`,`you@company.com`,`email`)]}),(0,b.jsxs)(`span`,{className:`zcs-grid`,children:[(0,b.jsxs)(`span`,{className:`zcs-field`,children:[(0,b.jsx)(`label`,{htmlFor:`zcs-topic`,children:`Support category *`}),(0,b.jsxs)(`select`,{id:`zcs-topic`,value:e.topic,onChange:e=>o(`topic`,e.target.value),required:!0,children:[(0,b.jsx)(`option`,{value:``,children:`Select a category`}),_t.map(e=>(0,b.jsx)(`option`,{children:e},e))]})]}),(0,b.jsxs)(`span`,{className:`zcs-field`,children:[(0,b.jsx)(`label`,{htmlFor:`zcs-state`,children:`Loan state (optional)`}),(0,b.jsxs)(`select`,{id:`zcs-state`,value:e.state,onChange:e=>o(`state`,e.target.value),children:[(0,b.jsx)(`option`,{value:``,children:`Not applicable`}),(0,b.jsx)(`option`,{children:`Florida`}),(0,b.jsx)(`option`,{children:`California`})]})]})]}),d(`subject`,`Subject *`,`Brief summary of your issue`),(0,b.jsxs)(`span`,{className:`zcs-field`,children:[(0,b.jsx)(`label`,{htmlFor:`zcs-message`,children:`Describe your issue *`}),(0,b.jsx)(`textarea`,{id:`zcs-message`,value:e.message,onChange:e=>o(`message`,e.target.value),maxLength:2500,placeholder:`What happened? Include the feature, document type and any non-sensitive error message.`,required:!0})]}),(0,b.jsxs)(`span`,{className:`zcs-field`,children:[(0,b.jsx)(`label`,{htmlFor:`zcs-steps`,children:`Steps to reproduce (optional)`}),(0,b.jsx)(`textarea`,{id:`zcs-steps`,value:e.steps,onChange:e=>o(`steps`,e.target.value),maxLength:1500,placeholder:`List the steps you took, your browser and what you expected to happen.`})]}),(0,b.jsxs)(`label`,{className:`zcs-check`,children:[(0,b.jsx)(`input`,{type:`checkbox`,checked:n,onChange:e=>{r(e.target.checked),a(``)}}),`I confirm that this request contains no confidential borrower information or credentials. I have reviewed the `,(0,b.jsx)(`a`,{href:`/privacy`,style:{textDecoration:`underline`},children:`Privacy Policy`}),`.`]}),(0,b.jsxs)(`span`,{className:`zcs-actions`,children:[(0,b.jsx)(`button`,{className:`zcs-primary`,type:`button`,onClick:l,children:`Open email draft`}),(0,b.jsx)(`button`,{type:`button`,onClick:u,children:`Copy request`})]}),(0,b.jsx)(`span`,{className:`zcs-muted`,children:`This page prepares an email in your own email application. It does not submit a ticket or store your request on a server.`}),i&&(0,b.jsx)(`span`,{className:`zcs-status`,role:`status`,children:i}),i.startsWith(`Clipboard unavailable`)&&(0,b.jsxs)(`span`,{className:`zcs-preview`,children:[(0,b.jsx)(`label`,{htmlFor:`zcs-copy`,children:`Request text`}),(0,b.jsx)(`textarea`,{id:`zcs-copy`,readOnly:!0,value:`Subject: [ZapDocs Support] ${e.subject}\n\n${s()}`})]})]})}function bt(){return(0,b.jsx)(Je,{page:{title:`Contact Support`,path:`/contact-support`,group:`Support`,lead:`Need assistance with ZapDocs? Tell us what happened and prepare a request for our support team.`,sections:[[`How can we assist you?`,(0,b.jsx)(yt,{})],[`What happens next?`,`Review the email draft and send it from your email application. Keep your correspondence for reference and include only redacted examples if support requests more information.`],[`Legal or loan-specific questions`,`For legal advice, document enforceability or transaction-specific compliance questions, consult a qualified attorney or closing professional. ZapDocs support can help with the software, not provide legal advice.`]],contact:!0}})}var xt={"/platform":k,"/loan-workflow":he,"/document-generation":ye,"/team-workspace":Se,"/private-lenders":Te,"/loan-originators":Oe,"/servicing-teams":je,"/broker-workflows":Ne,"/how-it-works":Fe,"/document-outputs":Re,"/product-guide":Ve,"/getting-started":Ge,"/about":Xe,"/contact":et,"/security":ot,"/updates":dt,"/help-center":ht,"/contact-support":bt};function St(){let e=window.location.pathname.replace(/\/$/,``);return Object.hasOwn(xt,e)?e:null}function Ct({path:e}){let t=xt[e];return t?(0,b.jsx)(t,{},e):null}function wt({policy:e,path:t,onNavigate:n}){(0,_.useEffect)(()=>{let t=document.title;return document.title=`${e.title} | ZapDocs`,window.scrollTo(0,0),document.getElementById(`legal-main`)?.focus(),()=>{document.title=t}},[t,e.title]);let r=(e,t)=>(0,b.jsx)(`a`,{href:e,onClick:t=>{!t.ctrlKey&&!t.metaKey&&!t.shiftKey&&!t.altKey&&t.button===0&&(t.preventDefault(),n(e))},children:t});return(0,b.jsxs)(`div`,{className:`zlegal`,children:[(0,b.jsx)(`style`,{children:`
 .zlegal{min-height:100vh;display:flex;flex-direction:column;background:#fff;color:#080d36;font-family:Inter,system-ui,sans-serif;line-height:1.75}.zlegal *{box-sizing:border-box}.zlegal a{color:#2148c8;text-decoration:underline;text-underline-offset:3px}.zlegal a:focus-visible{outline:3px solid #2148c8;outline-offset:5px}.zlegal header{border-bottom:1px solid #dce2ef;padding:20px clamp(24px,6vw,90px);display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap}.zlegal header a:first-child{font-size:27px;font-weight:800;color:#080d36;text-decoration:none}.zlegal .hero{background:#f5f7fb;padding:50px 24px;border-bottom:1px solid #e1e6ef}.zlegal .wrap{width:min(100%,1040px);margin:auto}.zlegal h1{font-size:clamp(36px,5vw,54px);line-height:1.15;margin:0 0 8px;letter-spacing:-1.5px}.zlegal .content{width:min(calc(100% - 48px),1040px);margin:42px auto 72px;flex:1}.zlegal h2{font-size:23px;line-height:1.35;margin:32px 0 8px}.zlegal p{font-size:16px;margin:0 0 16px;color:#34415b}.zlegal footer{border-top:1px solid #dce2ef;padding:24px clamp(24px,6vw,90px);display:flex;flex-wrap:wrap;gap:18px;align-items:center;font-size:14px}.zlegal footer nav{display:flex;gap:18px;flex-wrap:wrap}.zlegal .skip{position:absolute;left:16px;top:-100px;background:white;padding:8px}.zlegal .skip:focus{top:10px}
 `}),(0,b.jsx)(`a`,{className:`skip`,href:`#legal-main`,children:`Skip to content`}),(0,b.jsxs)(`header`,{children:[r(`/`,`ZapDocs`),r(`/app`,`Open ZapDocs`)]}),(0,b.jsx)(`div`,{className:`hero`,children:(0,b.jsxs)(`div`,{className:`wrap`,children:[(0,b.jsx)(`h1`,{children:e.title}),(0,b.jsx)(`p`,{children:`ZapDocs · Legal information`})]})}),(0,b.jsxs)(`main`,{id:`legal-main`,tabIndex:-1,className:`content`,children:[e.sections.map(([e,t])=>(0,b.jsxs)(`section`,{children:[(0,b.jsx)(`h2`,{children:e}),(0,b.jsx)(`p`,{children:t})]},e)),(0,b.jsxs)(`section`,{children:[(0,b.jsx)(`h2`,{children:`Contact us`}),(0,b.jsx)(`p`,{children:`A monitored legal and support contact address will be provided before public launch.`})]})]}),(0,b.jsxs)(`footer`,{children:[(0,b.jsxs)(`span`,{children:[`© `,new Date().getFullYear(),` ZapDocs. All rights reserved.`]}),(0,b.jsxs)(`nav`,{"aria-label":`Legal pages`,children:[r(`/terms`,`Terms`),r(`/privacy`,`Privacy Policy`),r(`/accessibility`,`Accessibility`)]})]})]})}var Tt={title:`Terms of Use`,sections:[[`Acceptance and eligibility`,`These Terms govern access to the ZapDocs website and software, operated by ZapDocs. By affirmatively accepting these Terms or using the service after receiving notice of them, you agree to these Terms. You must be at least 18 and authorized to act for any business you represent.`],[`Use of the platform`,`ZapDocs is a business software service for preparing and organizing private lending documentation. We grant authorized users a limited, nonexclusive, nontransferable right to use the service and to download and use generated documents for their lawful business transactions. You must protect your account credentials and may not access another user’s records, interfere with the service, or use it for unlawful purposes.`],[`Copyright and intellectual property`,`ZapDocs and its licensors retain their respective rights in the software, website, branding and licensed templates. You retain your rights in information you supply. Except for permitted use of generated documents, you may not reproduce, resell or redistribute the software or template library without authorization.`],[`No legal or financial advice`,`ZapDocs is not a law firm, lender, mortgage broker, loan servicer or substitute for qualified professional advice. Use of the service does not create an attorney-client relationship. Templates, disclosures, calculations and previews are tools for document preparation and are not a determination that a transaction complies with applicable law.`],[`Document review and user responsibility`,`You are responsible for selecting appropriate forms, entering accurate information, verifying calculations, interest conventions, repayment terms, collateral descriptions and disclosures, and obtaining qualified legal and other professional review before signing, recording, funding or relying on generated documents. You are responsible for obtaining authority to submit third-party data and for applicable licensing, lending, privacy and recordkeeping requirements.`],[`Beta access and availability`,`Beta features may change, contain errors or be unavailable. Use fictional or properly redacted information during beta unless live-data use has been expressly authorized under appropriate safeguards. Keep independent copies of important records. We may modify, suspend or discontinue features, or suspend access for security or material violations of these Terms.`],[`Fees and subscriptions`,`If paid plans are introduced, the price, billing interval, renewal and cancellation terms will be presented before purchase. No recurring payment is authorized merely by visiting this website or requesting beta access.`],[`Disclaimer of warranties`,`To the extent permitted by applicable law, the service is provided on an as-is and as-available basis without implied warranties of merchantability, fitness for a particular purpose or noninfringement. We do not warrant uninterrupted operation, error-free calculations or the enforceability or suitability of any document.`],[`Limitation of liability`,`To the extent permitted by applicable law, ZapDocs and its suppliers are not liable for indirect, incidental, special or consequential damages, including lost profits, lost business or loss arising from reliance on unreviewed documents. Nothing in these Terms excludes liability or rights that cannot lawfully be excluded.`],[`Indemnification`,`To the extent permitted by law, business users agree to indemnify ZapDocs against third-party claims arising from their unlawful use of the service, unauthorized submission of information or material breach of these Terms, except to the extent caused by ZapDocs’ own wrongful conduct.`],[`Termination and changes`,`You may stop using the service at any time. Applicable payment and recordkeeping obligations survive termination. We may revise these Terms and will provide notice of material changes as required by law. Where required, continued access will depend on renewed acceptance.`],[`Governing law and disputes`,`Applicable law governs these Terms. Disputes will be heard in a court with lawful jurisdiction, subject to any mandatory rights or protections.`]]};function Et({onNavigate:e}){return(0,b.jsx)(wt,{policy:Tt,path:`/terms`,onNavigate:e})}var Dt={title:`Privacy Policy`,sections:[[`Scope`,`This policy describes how ZapDocs handles information in connection with its website and document preparation service. Business customers may submit information about borrowers, guarantors, lenders and other parties. Customers are responsible for their own notices, permissions and lawful use of that information.`],[`Information we receive`,`Information may include account and business contact details, login information, support communications, loan terms, property and collateral information, borrower and guarantor names and addresses, financial information, tax identifiers when supplied, and generated documents. Technical information may include IP addresses, browser details, authentication events and service logs.`],[`How information is used`,`We process information to authenticate users, save loan records, generate and preview documents, provide support, maintain security, troubleshoot errors, administer the service and meet legal obligations. Submit only information necessary for the requested workflow.`],[`Service providers and disclosures`,`The service uses third-party infrastructure, including Supabase for authentication and database functions and Railway and/or Vercel for hosting, as applicable to the deployment. Information may be processed by providers necessary to operate the service, disclosed as required by law, or shared to protect lawful rights and security. We may also disclose information at your direction or in connection with a business transfer subject to applicable safeguards.`],[`Cookies and local storage`,`The service may use cookies or browser storage for session management, authentication and preferences. Browser settings can restrict these technologies, although doing so may affect access. Any additional analytics or advertising technologies should be disclosed before they are introduced.`],[`Security`,`We aim to use appropriate administrative and technical safeguards for the information processed by the service. No online system is completely secure. Customers should restrict account access, protect credentials and avoid submitting unnecessary sensitive information. During beta, use fictional or properly redacted records unless authorized for live data.`],[`Retention and deletion`,`Information is retained as needed to provide the service, comply with applicable legal obligations and resolve security or contractual matters. Requests for deletion are subject to applicable law, customer instructions and necessary backup or retention requirements. Customers should maintain their own required loan records.`],[`Privacy choices and requests`,`Depending on applicable law, individuals may have rights to access, correct, delete or obtain copies of personal information, or to object to or restrict certain processing. We may verify identity and authority before responding. If information was submitted by a lender or broker, requests may need to be directed to that business. We will honor applicable rights and restrictions.`],[`Children and external websites`,`The service is intended for adults conducting business and is not directed to children. External websites have their own privacy practices.`],[`Changes to this policy`,`We may update this policy to reflect changes to the service, our practices or applicable law. Material changes will be communicated as required.`]]};function Ot({onNavigate:e}){return(0,b.jsx)(wt,{policy:Dt,path:`/privacy`,onNavigate:e})}var kt={title:`Accessibility`,sections:[[`Our commitment`,`ZapDocs aims to provide a website and loan document workspace that people with disabilities can use. We view accessibility as an ongoing part of product development.`],[`Accessibility standards`,`Our design target is the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA. This is a goal rather than a certification or representation that every page, workflow or generated document currently conforms.`],[`Website and document accessibility`,`We aim to improve keyboard navigation, visible focus indicators, meaningful labels, heading structure, text alternatives, color contrast and responsive layouts. Generated Word and PDF documents may have accessibility limitations, including limitations introduced by templates or document conversion.`],[`Feedback and assistance`,`If you encounter a barrier, please tell us the page or feature affected, the difficulty you experienced and your preferred method of contact. If possible, include the browser and assistive technology used. Please do not include confidential borrower information or credentials. We will review requests and work toward a practical alternative or correction.`],[`Continuous improvement`,`We welcome feedback as we evaluate and improve accessibility across the website, loan workspace and document workflows.`]]};function At({onNavigate:e}){return(0,b.jsx)(wt,{policy:kt,path:`/accessibility`,onNavigate:e})}var jt={"/terms":Et,"/privacy":Ot,"/accessibility":At};function Mt(){let e=window.location.pathname.replace(/\/$/,``);return Object.hasOwn(jt,e)?e:null}function Nt({path:e,onNavigate:t}){let n=jt[e];return n?(0,b.jsx)(n,{onNavigate:t}):null}var Pt=Symbol.for(`@supabase/supabase-js.traceContextExtractor`);function Ft(){return globalThis[Pt]}function It(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Lt(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}var Rt=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),zt=class extends Error{constructor(e,t=`FunctionsError`,n){super(e),this.name=t,this.context=n}toJSON(){return{name:this.name,message:this.message,context:this.context}}},Bt=class extends zt{constructor(e){super(`Failed to send a request to the Edge Function`,`FunctionsFetchError`,e)}},Vt=class extends zt{constructor(e){super(`Relay Error invoking the Edge Function`,`FunctionsRelayError`,e)}},Ht=class extends zt{constructor(e){super(`Edge Function returned a non-2xx status code`,`FunctionsHttpError`,e)}},Ut;(function(e){e.Any=`any`,e.ApNortheast1=`ap-northeast-1`,e.ApNortheast2=`ap-northeast-2`,e.ApSouth1=`ap-south-1`,e.ApSoutheast1=`ap-southeast-1`,e.ApSoutheast2=`ap-southeast-2`,e.CaCentral1=`ca-central-1`,e.EuCentral1=`eu-central-1`,e.EuWest1=`eu-west-1`,e.EuWest2=`eu-west-2`,e.EuWest3=`eu-west-3`,e.SaEast1=`sa-east-1`,e.UsEast1=`us-east-1`,e.UsWest1=`us-west-1`,e.UsWest2=`us-west-2`})(Ut||={});var Wt=class{constructor(e,{headers:t={},customFetch:n,region:r=Ut.Any}={}){this.url=e,this.headers=t,this.region=r,this.fetch=Rt(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return Lt(this,arguments,void 0,function*(e,t={}){var n;let r,i,a;try{let{headers:n,method:o,body:s,signal:c,timeout:l}=t,u={},{region:d}=t;d||=this.region;let f=new URL(`${this.url}/${e}`);d&&d!==`any`&&(u[`x-region`]=d,f.searchParams.set(`forceFunctionRegion`,d));let p,m=!!n&&Object.keys(n).some(e=>e.toLowerCase()===`content-type`);s&&!m?typeof Blob<`u`&&s instanceof Blob||s instanceof ArrayBuffer?(u[`Content-Type`]=s.type||`application/octet-stream`,p=s):typeof s==`string`?(u[`Content-Type`]=`text/plain`,p=s):typeof FormData<`u`&&s instanceof FormData?p=s:(u[`Content-Type`]=`application/json`,p=JSON.stringify(s)):p=s&&typeof s!=`string`&&!(typeof Blob<`u`&&s instanceof Blob)&&!(s instanceof ArrayBuffer)&&!(typeof FormData<`u`&&s instanceof FormData)?JSON.stringify(s):s;let h=c;l&&(i=new AbortController,r=setTimeout(()=>i.abort(),l),c?(h=i.signal,a=()=>i.abort(),c.addEventListener(`abort`,a)):h=i.signal);let g=yield this.fetch(f.toString(),{method:o||`POST`,headers:Object.assign(Object.assign(Object.assign({},u),this.headers),n),body:p,signal:h}).catch(e=>{throw new Bt(e)}),_=g.headers.get(`x-relay-error`);if(_&&_===`true`)throw new Vt(g);if(!g.ok)throw new Ht(g);let v=(g.headers.get(`Content-Type`)??`text/plain`).split(`;`)[0].trim().toLowerCase(),y;return y=v===`application/json`?yield g.json():v===`application/octet-stream`||v===`application/pdf`?yield g.blob():v===`text/event-stream`?g:v===`multipart/form-data`?yield g.formData():yield g.text(),{data:y,error:null,response:g}}catch(e){return{data:null,error:e,response:e instanceof Ht||e instanceof Vt?e.context:void 0}}finally{r&&clearTimeout(r),a&&((n=t.signal)==null||n.removeEventListener(`abort`,a))}})}},Gt=class extends Error{constructor(e){super(e.message),this.name=`PostgrestError`,this.details=e.details,this.hint=e.hint,this.code=e.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}},Kt=3,qt=e=>Math.min(1e3*2**e,3e4),Jt=[520,503],Yt=[`GET`,`HEAD`,`OPTIONS`];function Xt(e){"@babel/helpers - typeof";return Xt=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Xt(e)}function Zt(e,t){if(Xt(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Xt(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Qt(e){var t=Zt(e,`string`);return Xt(t)==`symbol`?t:t+``}function $t(e,t,n){return(t=Qt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function en(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function tn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?en(Object(n),!0).forEach(function(t){$t(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):en(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function nn(e,t){return new Promise(n=>{if(t?.aborted){n();return}let r=setTimeout(()=>{t?.removeEventListener(`abort`,i),n()},e);function i(){clearTimeout(r),n()}t?.addEventListener(`abort`,i)})}function rn(e,t,n,r){return!(!r||n>=Kt||!Yt.includes(e)||!Jt.includes(t))}async function an(e,t,n,r){let i=0;for(;;){let a=tn({},n.headers);i>0&&(a[`X-Retry-Count`]=String(i));let o;try{o=await e(t,{method:n.method,headers:a,body:n.body,signal:n.signal})}catch(e){if(e?.name===`AbortError`||e?.code===`ABORT_ERR`||e?.name===`TimeoutError`&&n.signal?.aborted||!Yt.includes(n.method))throw e;if(r&&i<Kt){let e=qt(i);i++,await nn(e,n.signal);continue}throw e}if(rn(n.method,o.status,i,r)){let e=o.headers?.get(`Retry-After`)??null,t=e===null?qt(i):Math.max(0,parseInt(e,10)||0)*1e3;await o.text(),i++,await nn(t,n.signal);continue}return o}}var on=class{constructor(e){this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=e.method,this.url=e.url,this.headers=new Headers(e.headers),this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=e.shouldThrowOnError??!1,this.signal=e.signal,this.isMaybeSingle=e.isMaybeSingle??!1,this.shouldStripNulls=e.shouldStripNulls??!1,this.urlLengthLimit=e.urlLengthLimit??8e3,this.retryEnabled=e.retry??!0,this.fetch=e.fetch?e.fetch:fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get(`Accept`)===`text/csv`)throw Error(`stripNulls() cannot be used with csv()`);return this.shouldStripNulls=!0,this}setHeader(e,t){return this.headers=new Headers(this.headers),this.headers.set(e,t),this}retry(e){return this.retryEnabled=e,this}then(e,t){var n=this;if(this.schema===void 0||([`GET`,`HEAD`].includes(this.method)?this.headers.set(`Accept-Profile`,this.schema):this.headers.set(`Content-Profile`,this.schema)),this.method!==`GET`&&this.method!==`HEAD`&&this.headers.set(`Content-Type`,`application/json`),this.shouldStripNulls){let e=this.headers.get(`Accept`);e===`application/vnd.pgrst.object+json`?this.headers.set(`Accept`,`application/vnd.pgrst.object+json;nulls=stripped`):(!e||e===`application/json`)&&this.headers.set(`Accept`,`application/vnd.pgrst.array+json;nulls=stripped`)}let r=this.fetch,i=(async()=>{let e={};n.headers.forEach((t,n)=>{e[n]=t});let t=await an(r,n.url.toString(),{method:n.method,headers:e,body:JSON.stringify(n.body,(e,t)=>typeof t==`bigint`?t.toString():t),signal:n.signal},n.retryEnabled);return await n.processResponse(t)})();return this.shouldThrowOnError||(i=i.catch(e=>{let t=``,n=``,r=``,i=e?.cause;if(i){let n=i?.message??``,r=i?.code??``;t=`${e?.name??`FetchError`}: ${e?.message}`,t+=`\n\nCaused by: ${i?.name??`Error`}: ${n}`,r&&(t+=` (${r})`),i?.stack&&(t+=`\n${i.stack}`)}else t=e?.stack??``;let a=this.url.toString().length;return e?.name===`AbortError`||e?.code===`ABORT_ERR`?(r=``,n=`Request was aborted (timeout or manual cancellation)`,a>this.urlLengthLimit&&(n+=`. Note: Your request URL is ${a} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(i?.name===`HeadersOverflowError`||i?.code===`UND_ERR_HEADERS_OVERFLOW`)&&(r=``,n=`HTTP headers exceeded server limits (typically 16KB)`,a>this.urlLengthLimit&&(n+=`. Your request URL is ${a} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${e?.name??`FetchError`}: ${e?.message}`,details:t,hint:n,code:r},data:null,count:null,status:0,statusText:``}})),i.then(e,t)}async processResponse(e){var t=this;let n=null,r=null,i=null,a=e.status,o=e.statusText;if(e.ok){if(t.method!==`HEAD`){let i=await e.text();if(i!==``){if(t.headers.get(`Accept`)===`text/csv`)r=i;else if(t.headers.get(`Accept`)&&t.headers.get(`Accept`)?.includes(`application/vnd.pgrst.plan+text`))r=i;else try{r=JSON.parse(i)}catch{if(n={message:i},r=null,t.shouldThrowOnError)throw new Gt({message:i,details:``,hint:``,code:``})}}}let s=t.headers.get(`Prefer`)?.match(/count=(exact|planned|estimated)/),c=e.headers.get(`content-range`)?.split(`/`);if(s&&c&&c.length>1&&(i=parseInt(c[1])),t.isMaybeSingle&&Array.isArray(r)){if(r.length>1){if(n={code:`PGRST116`,details:`Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:`JSON object requested, multiple (or no) rows returned`},r=null,i=null,a=406,o=`Not Acceptable`,t.shouldThrowOnError)throw new Gt(tn(tn({},n),{},{hint:n.hint??``}))}else r=r.length===1?r[0]:null}}else{let i=await e.text();try{n=JSON.parse(i),Array.isArray(n)&&e.status===404&&(r=[],n=null,a=200,o=`OK`)}catch{e.status===404&&i===``?(a=204,o=`No Content`):n={message:i}}if(n&&t.shouldThrowOnError)throw new Gt(n)}return{success:n===null,error:n,data:r,count:i,status:a,statusText:o}}returns(){return this}overrideTypes(){return this}},sn=class extends on{throwOnError(){return super.throwOnError()}select(e){let t=!1,n=(e??`*`).split(``).map(e=>/\s/.test(e)&&!t?``:(e===`"`&&(t=!t),e)).join(``);return this.url.searchParams.set(`select`,n),this.headers.append(`Prefer`,`return=representation`),this}order(e,{ascending:t=!0,nullsFirst:n,foreignTable:r,referencedTable:i=r}={}){let a=i?`${i}.order`:`order`,o=this.url.searchParams.get(a);return this.url.searchParams.set(a,`${o?`${o},`:``}${e}.${t?`asc`:`desc`}${n===void 0?``:n?`.nullsfirst`:`.nullslast`}`),this}limit(e,{foreignTable:t,referencedTable:n=t}={}){let r=n===void 0?`limit`:`${n}.limit`;return this.url.searchParams.set(r,`${e}`),this}range(e,t,{foreignTable:n,referencedTable:r=n}={}){let i=r===void 0?`offset`:`${r}.offset`,a=r===void 0?`limit`:`${r}.limit`;return this.url.searchParams.set(i,`${e}`),this.url.searchParams.set(a,`${t-e+1}`),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.set(`Accept`,`application/vnd.pgrst.object+json`),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set(`Accept`,`text/csv`),this}geojson(){return this.headers.set(`Accept`,`application/geo+json`),this}explain({analyze:e=!1,verbose:t=!1,settings:n=!1,buffers:r=!1,wal:i=!1,format:a=`text`}={}){let o=[e?`analyze`:null,t?`verbose`:null,n?`settings`:null,r?`buffers`:null,i?`wal`:null].filter(Boolean).join(`|`),s=this.headers.get(`Accept`)??`application/json`;return this.headers.set(`Accept`,`application/vnd.pgrst.plan+${a}; for="${s}"; options=${o};`),this}rollback(){return this.headers.append(`Prefer`,`tx=rollback`),this}returns(){return this}maxAffected(e){return this.headers.append(`Prefer`,`handling=strict`),this.headers.append(`Prefer`,`max-affected=${e}`),this}},cn=RegExp(`[,()]`),ln=class extends sn{throwOnError(){return super.throwOnError()}eq(e,t){return this.url.searchParams.append(e,`eq.${t}`),this}neq(e,t){return this.url.searchParams.append(e,`neq.${t}`),this}gt(e,t){return this.url.searchParams.append(e,`gt.${t}`),this}gte(e,t){return this.url.searchParams.append(e,`gte.${t}`),this}lt(e,t){return this.url.searchParams.append(e,`lt.${t}`),this}lte(e,t){return this.url.searchParams.append(e,`lte.${t}`),this}like(e,t){return this.url.searchParams.append(e,`like.${t}`),this}likeAllOf(e,t){return this.url.searchParams.append(e,`like(all).{${t.join(`,`)}}`),this}likeAnyOf(e,t){return this.url.searchParams.append(e,`like(any).{${t.join(`,`)}}`),this}ilike(e,t){return this.url.searchParams.append(e,`ilike.${t}`),this}ilikeAllOf(e,t){return this.url.searchParams.append(e,`ilike(all).{${t.join(`,`)}}`),this}ilikeAnyOf(e,t){return this.url.searchParams.append(e,`ilike(any).{${t.join(`,`)}}`),this}regexMatch(e,t){return this.url.searchParams.append(e,`match.${t}`),this}regexIMatch(e,t){return this.url.searchParams.append(e,`imatch.${t}`),this}is(e,t){return this.url.searchParams.append(e,`is.${t}`),this}isDistinct(e,t){return this.url.searchParams.append(e,`isdistinct.${t}`),this}in(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&cn.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`in.(${n})`),this}notIn(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&cn.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`not.in.(${n})`),this}contains(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cs.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cs.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(t)}`),this}containedBy(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cd.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cd.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(t)}`),this}rangeGt(e,t){return this.url.searchParams.append(e,`sr.${t}`),this}rangeGte(e,t){return this.url.searchParams.append(e,`nxl.${t}`),this}rangeLt(e,t){return this.url.searchParams.append(e,`sl.${t}`),this}rangeLte(e,t){return this.url.searchParams.append(e,`nxr.${t}`),this}rangeAdjacent(e,t){return this.url.searchParams.append(e,`adj.${t}`),this}overlaps(e,t){return typeof t==`string`?this.url.searchParams.append(e,`ov.${t}`):this.url.searchParams.append(e,`ov.{${t.join(`,`)}}`),this}textSearch(e,t,{config:n,type:r}={}){let i=``;r===`plain`?i=`pl`:r===`phrase`?i=`ph`:r===`websearch`&&(i=`w`);let a=n===void 0?``:`(${n})`;return this.url.searchParams.append(e,`${i}fts${a}.${t}`),this}match(e){return Object.entries(e).filter(([e,t])=>t!==void 0).forEach(([e,t])=>{this.url.searchParams.append(e,`eq.${t}`)}),this}not(e,t,n){return this.url.searchParams.append(e,`not.${t}.${n}`),this}or(e,{foreignTable:t,referencedTable:n=t}={}){let r=n?`${n}.or`:`or`;return this.url.searchParams.append(r,`(${e})`),this}filter(e,t,n){return this.url.searchParams.append(e,`${t}.${n}`),this}},un=class{constructor(e,{headers:t={},schema:n,fetch:r,urlLengthLimit:i=8e3,retry:a}){this.url=e,this.headers=new Headers(t),this.schema=n,this.fetch=r,this.urlLengthLimit=i,this.retry=a}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(e,t){let{head:n=!1,count:r}=t??{},i=n?`HEAD`:`GET`,a=!1,o=(e??`*`).split(``).map(e=>/\s/.test(e)&&!a?``:(e===`"`&&(a=!a),e)).join(``),{url:s,headers:c}=this.cloneRequestState();return s.searchParams.set(`select`,o),r&&c.append(`Prefer`,`count=${r}`),new ln({method:i,url:s,headers:c,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(e,{count:t,defaultToNull:n=!0}={}){let{url:r,headers:i}=this.cloneRequestState();if(t&&i.append(`Prefer`,`count=${t}`),n||i.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);r.searchParams.set(`columns`,e.join(`,`))}}return new ln({method:`POST`,url:r,headers:i,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(e,{onConflict:t,ignoreDuplicates:n=!1,count:r,defaultToNull:i=!0}={}){let{url:a,headers:o}=this.cloneRequestState();if(o.append(`Prefer`,`resolution=${n?`ignore`:`merge`}-duplicates`),t!==void 0&&a.searchParams.set(`on_conflict`,t),r&&o.append(`Prefer`,`count=${r}`),i||o.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);a.searchParams.set(`columns`,e.join(`,`))}}return new ln({method:`POST`,url:a,headers:o,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(e,{count:t}={}){let{url:n,headers:r}=this.cloneRequestState();return t&&r.append(`Prefer`,`count=${t}`),new ln({method:`PATCH`,url:n,headers:r,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:e}={}){let{url:t,headers:n}=this.cloneRequestState();return e&&n.append(`Prefer`,`count=${e}`),new ln({method:`DELETE`,url:t,headers:n,schema:this.schema,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function dn(e,t){try{let t=JSON.parse(e);if(t&&typeof t==`object`&&!Array.isArray(t))return new Gt({message:String(t.message??e),details:t.details??``,hint:t.hint??``,code:t.code??``})}catch{}return new Gt({message:e||t,details:``,hint:``,code:``})}function fn(e,t,n){let r=e;return{success:!1,error:new Gt({message:`${r?.name??`FetchError`}: ${r?.message}`,details:``,hint:``,code:``}),data:null,count:null,status:t,statusText:n}}var pn=class e{constructor(e,{headers:t={},schema:n,fetch:r,timeout:i,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(t),this.schemaName=n,this.urlLengthLimit=a;let s=r??globalThis.fetch;this.fetch=i!==void 0&&i>0?(e,t)=>{let n=new AbortController,r=setTimeout(()=>n.abort(),i),a=t?.signal;if(a){if(a.aborted)return clearTimeout(r),s(e,t);let i=()=>{clearTimeout(r),n.abort()};return a.addEventListener(`abort`,i,{once:!0}),s(e,tn(tn({},t),{},{signal:n.signal})).finally(()=>{clearTimeout(r),a.removeEventListener(`abort`,i)})}return s(e,tn(tn({},t),{},{signal:n.signal})).finally(()=>clearTimeout(r))}:s,this.retry=o}from(e){if(!e||typeof e!=`string`||e.trim()===``)throw Error(`Invalid relation name: relation must be a non-empty string.`);return new un(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(t){return new e(this.url,{headers:this.headers,schema:t,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}async getOpenApiSpec(){var e=this;let t=new Headers(e.headers);t.set(`Accept`,`application/openapi+json`),e.schemaName&&t.set(`Accept-Profile`,e.schemaName);let n={};t.forEach((e,t)=>{n[t]=e});let r=e.fetch??globalThis.fetch,i;try{i=await an(r,`${e.url}/`,{method:`GET`,headers:n},e.retry??!0)}catch(e){return fn(e,0,``)}let a;try{a=await i.text()}catch(e){return fn(e,i.status,i.statusText)}if(i.ok)try{return{success:!0,error:null,data:JSON.parse(a),count:null,status:i.status,statusText:i.statusText}}catch{}return{success:!1,error:dn(a,i.statusText),data:null,count:null,status:i.status,statusText:i.statusText}}rpc(e,t={},{head:n=!1,get:r=!1,count:i}={}){let a,o=new URL(`${this.url}/rpc/${e}`),s,c=e=>typeof e==`object`&&!!e&&(!Array.isArray(e)||e.some(c)),l=n&&Object.values(t).some(c);l?(a=`POST`,s=t):n||r?(a=n?`HEAD`:`GET`,Object.entries(t).filter(([e,t])=>t!==void 0).map(([e,t])=>[e,Array.isArray(t)?`{${t.join(`,`)}}`:`${t}`]).forEach(([e,t])=>{o.searchParams.append(e,t)})):(a=`POST`,s=t);let u=new Headers(this.headers);return l?u.set(`Prefer`,i?`count=${i},return=minimal`:`return=minimal`):i&&u.set(`Prefer`,`count=${i}`),new ln({method:a,url:o,headers:u,schema:this.schemaName,body:s,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}},mn=class{constructor(){}static detectEnvironment(){if(typeof WebSocket<`u`)return{type:`native`,wsConstructor:WebSocket};let e=globalThis;if(typeof globalThis<`u`&&e.WebSocket!==void 0)return{type:`native`,wsConstructor:e.WebSocket};let t=typeof global<`u`?global:void 0;if(t&&t.WebSocket!==void 0)return{type:`native`,wsConstructor:t.WebSocket};if(typeof globalThis<`u`&&e.WebSocketPair!==void 0&&globalThis.WebSocket===void 0)return{type:`cloudflare`,error:`Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.`,workaround:`Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.`};if(typeof globalThis<`u`&&e.EdgeRuntime||typeof navigator<`u`&&navigator.userAgent?.includes(`Vercel-Edge`))return{type:`unsupported`,error:`Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.`,workaround:`Use serverless functions or a different deployment target for WebSocket functionality.`};let n=globalThis.process;if(n){let e=n.versions;if(e&&e.node)return{type:`unsupported`,error:`Node.js detected but native WebSocket not found.`,workaround:`Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option.`}}return{type:`unsupported`,error:`Unknown JavaScript runtime without WebSocket support.`,workaround:`Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.`}}static getWebSocketConstructor(){let e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let t=e.error||`WebSocket not supported in this environment.`;throw e.workaround&&(t+=`\n\nSuggested solution: ${e.workaround}`),Error(t)}static isWebSocketSupported(){try{return this.detectEnvironment().type===`native`}catch{return!1}}},hn=`realtime-js/2.117.3`,gn=`1.0.0`,_n=`2.0.0`,vn=_n,yn=1e4,bn=15e3,xn=1e4,Sn={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},Cn={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`,access_token:`access_token`},wn={connecting:`connecting`,open:`open`,closing:`closing`,closed:`closed`},Tn=class{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT=`broadcast`,this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event==`string`)return t(this._binaryEncodeUserBroadcastPush(e));let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}_binaryEncodeUserBroadcastPush(e){return this._isArrayBuffer(e.payload?.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){let t=e.payload?.payload??new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,t)}_encodeJsonUserBroadcastPush(e){let t=e.payload?.payload??{},n=new TextEncoder().encode(JSON.stringify(t)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,n)}_encodeUserBroadcastPush(e,t,n){let r=new TextEncoder,i=r.encode(e.topic),a=r.encode(e.ref??``),o=r.encode(e.join_ref??``),s=r.encode(e.payload.event),c=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},l=r.encode(Object.keys(c).length===0?``:JSON.stringify(c));if(o.length>255)throw Error(`joinRef length ${o.length} exceeds maximum of 255`);if(a.length>255)throw Error(`ref length ${a.length} exceeds maximum of 255`);if(i.length>255)throw Error(`topic length ${i.length} exceeds maximum of 255`);if(s.length>255)throw Error(`userEvent length ${s.length} exceeds maximum of 255`);if(l.length>255)throw Error(`metadata length ${l.length} exceeds maximum of 255`);let u=this.USER_BROADCAST_PUSH_META_LENGTH+o.length+a.length+i.length+s.length+l.length,d=new ArrayBuffer(this.HEADER_LENGTH+u),f=new DataView(d),p=new Uint8Array(d),m=0;f.setUint8(m++,this.KINDS.userBroadcastPush),f.setUint8(m++,o.length),f.setUint8(m++,a.length),f.setUint8(m++,i.length),f.setUint8(m++,s.length),f.setUint8(m++,l.length),f.setUint8(m++,t),p.set(o,m),m+=o.length,p.set(a,m),m+=a.length,p.set(i,m),m+=i.length,p.set(s,m),m+=s.length,p.set(l,m),m+=l.length;var h=new Uint8Array(d.byteLength+n.byteLength);return h.set(new Uint8Array(d),0),h.set(new Uint8Array(n),d.byteLength),h.buffer}decode(e,t){if(this._isArrayBuffer(e))return t(this._binaryDecode(e));if(typeof e==`string`){let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}return t({})}_binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,t,r)}}_decodeUserBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+4,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=e.slice(s,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(n.decode(d)):d,p={type:this.BROADCAST_EVENT,event:l,payload:f};return a>0&&(p.meta=JSON.parse(u)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:p}}_isArrayBuffer(e){return e instanceof ArrayBuffer||e?.constructor?.name===`ArrayBuffer`}_pick(e,t){return!e||typeof e!=`object`?{}:Object.fromEntries(Object.entries(e).filter(([e])=>t.includes(e)))}},M;(function(e){e.abstime=`abstime`,e.bool=`bool`,e.date=`date`,e.daterange=`daterange`,e.float4=`float4`,e.float8=`float8`,e.int2=`int2`,e.int4=`int4`,e.int4range=`int4range`,e.int8=`int8`,e.int8range=`int8range`,e.json=`json`,e.jsonb=`jsonb`,e.money=`money`,e.numeric=`numeric`,e.oid=`oid`,e.reltime=`reltime`,e.text=`text`,e.time=`time`,e.timestamp=`timestamp`,e.timestamptz=`timestamptz`,e.timetz=`timetz`,e.tsrange=`tsrange`,e.tstzrange=`tstzrange`})(M||={});var En=(e,t,n={})=>{let r=n.skipTypes??[];return t?Object.keys(t).reduce((n,i)=>(n[i]=Dn(i,e,t,r),n),{}):{}},Dn=(e,t,n,r)=>{let i=t.find(t=>t.name===e)?.type,a=n[e];return i&&!r.includes(i)?On(i,a):kn(a)},On=(e,t)=>{if(e.charAt(0)===`_`)return Nn(t,e.slice(1,e.length));switch(e){case M.bool:return An(t);case M.float4:case M.float8:case M.int2:case M.int4:case M.int8:case M.numeric:case M.oid:return jn(t);case M.json:case M.jsonb:return Mn(t);case M.timestamp:return Pn(t);case M.abstime:case M.date:case M.daterange:case M.int4range:case M.int8range:case M.money:case M.reltime:case M.text:case M.time:case M.timestamptz:case M.timetz:case M.tsrange:case M.tstzrange:return kn(t);default:return kn(t)}},kn=e=>e,An=e=>{switch(e){case`t`:return!0;case`f`:return!1;default:return e}},jn=e=>{if(typeof e==`string`){let t=parseFloat(e);if(!Number.isNaN(t))return t}return e},Mn=e=>{if(typeof e==`string`)try{return JSON.parse(e)}catch{return e}return e},Nn=(e,t)=>{if(typeof e!=`string`)return e;let n=e.length-1,r=e[n];if(e[0]===`{`&&r===`}`){let r,i=e.slice(1,n);try{r=JSON.parse(`[`+i+`]`)}catch{r=i?i.split(`,`):[]}return r.map(e=>On(t,e))}return e},Pn=e=>typeof e==`string`?e.replace(` `,`T`):e,Fn=e=>{let t=new URL(e);return t.protocol=t.protocol.replace(/^ws/i,`http`),t.pathname=t.pathname.replace(/\/+$/,``).replace(/\/socket\/websocket$/i,``).replace(/\/socket$/i,``).replace(/\/websocket$/i,``),t.pathname===``||t.pathname===`/`?t.pathname=`/api/broadcast`:t.pathname+=`/api/broadcast`,t.href},In=e=>typeof e==`function`?e:function(){return e},Ln=typeof self<`u`?self:null,Rn=typeof window<`u`?window:null,zn=Ln||Rn||globalThis,Bn=`2.0.0`,Vn=1e4,Hn=1e3,Un=100,Wn={connecting:0,open:1,closing:2,closed:3},Gn={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},Kn={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`},qn={longpoll:`longpoll`,websocket:`websocket`},Jn={complete:4},Yn=`base64url.bearer.phx.`,Xn=class{constructor(e,t,n,r){this.channel=e,this.event=t,this.payload=n||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(e){this.timeout=e,this.reset(),this.send()}send(){this.hasReceived(`timeout`)||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(e,t){return this.hasReceived(e)&&t(this.receivedResp.response),this.recHooks.push({status:e,callback:t}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:e,response:t,_ref:n}){this.recHooks.filter(t=>t.status===e).forEach(e=>e.callback(t))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,e=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=e,this.matchReceive(e)}),this.timeoutTimer=setTimeout(()=>{this.trigger(`timeout`,{})},this.timeout)}hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}trigger(e,t){this.channel.trigger(this.refEvent,{status:e,response:t})}},Zn=class{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries+=1,this.callback()},this.timerCalc(this.tries+1))}},Qn=class{constructor(e,t,n){this.state=Gn.closed,this.topic=e,this.params=In(t||{}),this.socket=n,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Xn(this,Kn.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Zn(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive(`ok`,()=>{this.state=Gn.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(e=>e.send()),this.pushBuffer=[]}),this.joinPush.receive(`error`,e=>{this.state=Gn.errored,this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log(`channel`,`close ${this.topic}`),this.state=Gn.closed,this.socket.remove(this)}),this.onError(e=>{this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.isJoining()&&this.joinPush.reset(),this.state=Gn.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive(`timeout`,()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`timeout ${this.topic}`,this.joinPush.timeout),new Xn(this,Kn.leave,In({}),this.timeout).send(),this.state=Gn.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(Kn.reply,(e,t)=>{this.trigger(this.replyEventName(t),e)})}join(e=this.timeout){if(this.joinedOnce)throw Error(`tried to join multiple times. 'join' can only be called a single time per channel instance`);return this.timeout=e,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=Gn.closed,this.bindings=[]}onClose(e){this.on(Kn.close,e)}onError(e){return this.on(Kn.error,t=>e(t))}on(e,t){let n=this.bindingRef++;return this.bindings.push({event:e,ref:n,callback:t}),n}off(e,t){this.bindings=this.bindings.filter(n=>n.event!==e||t!==void 0&&t!==n.ref)}canPush(){return this.socket.isConnected()&&this.isJoined()}push(e,t,n=this.timeout){if(t||={},!this.joinedOnce)throw Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let r=new Xn(this,e,function(){return t},n);return this.canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}leave(e=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=Gn.leaving;let t=()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`leave ${this.topic}`),this.trigger(Kn.close,`leave`)},n=new Xn(this,Kn.leave,In({}),e);return n.receive(`ok`,()=>t()).receive(`timeout`,()=>t()),n.send(),this.canPush()||n.trigger(`ok`,{}),n}onMessage(e,t,n){return t}filterBindings(e,t,n){return!0}isMember(e,t,n,r){return this.topic===e?r&&r!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log(`channel`,`dropping outdated message`,{topic:e,event:t,payload:n,joinRef:r}),!1):!0:!1}joinRef(){return this.joinPush.ref}rejoin(e=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=Gn.joining,this.joinPush.resend(e))}trigger(e,t,n,r){let i=this.onMessage(e,t,n,r);if(t&&!i)throw Error(`channel onMessage callbacks must return the payload, modified or unmodified`);let a=this.bindings.filter(r=>r.event===e&&this.filterBindings(r,t,n));for(let e=0;e<a.length;e++)a[e].callback(i,n,r||this.joinRef())}replyEventName(e){return`chan_reply_${e}`}isClosed(){return this.state===Gn.closed}isErrored(){return this.state===Gn.errored}isJoined(){return this.state===Gn.joined}isJoining(){return this.state===Gn.joining}isLeaving(){return this.state===Gn.leaving}},$n=class{static request(e,t,n,r,i,a,o){if(zn.XDomainRequest){let n=new zn.XDomainRequest;return this.xdomainRequest(n,e,t,r,i,a,o)}if(zn.XMLHttpRequest){let s=new zn.XMLHttpRequest;return this.xhrRequest(s,e,t,n,r,i,a,o)}if(zn.fetch&&zn.AbortController)return this.fetchRequest(e,t,n,r,i,a,o);throw Error(`No suitable XMLHttpRequest implementation found`)}static fetchRequest(e,t,n,r,i,a,o){let s={method:e,headers:n,body:r},c=null;return i&&(c=new AbortController,setTimeout(()=>c.abort(),i),s.signal=c.signal),zn.fetch(t,s).then(e=>e.text()).then(e=>this.parseJSON(e)).then(e=>o&&o(e)).catch(e=>{e.name===`AbortError`&&a?a():o&&o(null)}),c}static xdomainRequest(e,t,n,r,i,a,o){return e.timeout=i,e.open(t,n),e.onload=()=>{let t=this.parseJSON(e.responseText);o&&o(t)},a&&(e.ontimeout=a),e.onprogress=()=>{},e.send(r),e}static xhrRequest(e,t,n,r,i,a,o,s){e.open(t,n,!0),e.timeout=a;for(let[t,n]of Object.entries(r))e.setRequestHeader(t,n);return e.onerror=()=>s&&s(null),e.onreadystatechange=()=>{e.readyState===Jn.complete&&s&&s(this.parseJSON(e.responseText))},o&&(e.ontimeout=o),e.send(i),e}static parseJSON(e){if(!e||e===``)return null;try{return JSON.parse(e)}catch{return console&&console.log(`failed to parse JSON response`,e),null}}static serialize(e,t){let n=[];for(var r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;let i=t?`${t}[${r}]`:r,a=e[r];typeof a==`object`?n.push(this.serialize(a,i)):n.push(encodeURIComponent(i)+`=`+encodeURIComponent(a))}return n.join(`&`)}static appendParams(e,t){return Object.keys(t).length===0?e:`${e}${e.match(/\?/)?`&`:`?`}${this.serialize(t)}`}},er=e=>{let t=``,n=new Uint8Array(e),r=n.byteLength;for(let e=0;e<r;e++)t+=String.fromCharCode(n[e]);return btoa(t)},tr=class{constructor(e,t){t&&t.length===2&&t[1].startsWith(Yn)&&(this.authToken=atob(t[1].slice(Yn.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(e),this.readyState=Wn.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(e){return e.replace(`ws://`,`http://`).replace(`wss://`,`https://`).replace(RegExp(`(.*)/`+qn.websocket),`$1/`+qn.longpoll)}endpointURL(){return $n.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(e,t,n){this.close(e,t,n),this.readyState=Wn.connecting}ontimeout(){this.onerror(`timeout`),this.closeAndRetry(1005,`timeout`,!1)}isActive(){return this.readyState===Wn.open||this.readyState===Wn.connecting}poll(){let e={Accept:`application/json`};this.authToken&&(e[`X-Phoenix-AuthToken`]=this.authToken),this.ajax(`GET`,e,null,()=>this.ontimeout(),e=>{if(e){var{status:t,token:n,messages:r}=e;if(t===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,`session_gone`,!1);return}this.token=n}else t=0;switch(t){case 200:r.forEach(e=>{setTimeout(()=>this.onmessage({data:e}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=Wn.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,`forbidden`,!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,`internal server error`,500);break;default:throw Error(`unhandled poll status ${t}`)}})}send(e){typeof e!=`string`&&(e=er(e)),this.currentBatch?this.currentBatch.push(e):this.awaitingBatchAck?this.batchBuffer.push(e):(this.currentBatch=[e],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(e,t=0){this.awaitingBatchAck=!0;let n=t+Un,r=e.slice(t,n);this.ajax(`POST`,{"Content-Type":`application/x-ndjson`},r.join(`
`),()=>this.onerror(`timeout`),t=>{!t||t.status!==200?(this.awaitingBatchAck=!1,this.onerror(t&&t.status),this.closeAndRetry(1011,`internal server error`,!1)):n<e.length?this.batchSend(e,n):this.batchBuffer.length>0?(this.batchSend(this.batchBuffer),this.batchBuffer=[]):this.awaitingBatchAck=!1})}close(e,t,n){for(let e of this.reqs)e.abort();this.readyState=Wn.closed;let r=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:e,reason:t,wasClean:n});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<`u`?this.onclose(new CloseEvent(`close`,r)):this.onclose(r)}ajax(e,t,n,r,i){let a;a=$n.request(e,this.endpointURL(),t,n,this.timeout,()=>{this.reqs.delete(a),r()},e=>{this.reqs.delete(a),this.isActive()&&i(e)}),this.reqs.add(a)}},nr=class e{constructor(t,n={}){let r=n.events||{state:`presence_state`,diff:`presence_diff`};this.state=Object.create(null),this.pendingDiffs=[],this.channel=t,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.joinRef=this.channel.joinRef(),this.state=e.syncState(this.state,t,n,r),this.pendingDiffs.forEach(t=>{this.state=e.syncDiff(this.state,t,n,r)}),this.pendingDiffs=[],i()}),this.channel.on(r.diff,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(t):(this.state=e.syncDiff(this.state,t,n,r),i())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(t){return e.list(this.state,t)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,t,n,r){let i=this.toNullProtoObj(this.clone(e));t=this.toNullProtoObj(t);let a=Object.create(null),o=Object.create(null);return this.map(i,(e,n)=>{t[e]||(o[e]=n)}),this.map(t,(e,t)=>{let n=i[e];if(n){let r=t.metas.map(e=>e.phx_ref),i=n.metas.map(e=>e.phx_ref),s=t.metas.filter(e=>i.indexOf(e.phx_ref)<0),c=n.metas.filter(e=>r.indexOf(e.phx_ref)<0);s.length>0&&(a[e]=t,a[e].metas=s),c.length>0&&(o[e]=this.clone(n),o[e].metas=c)}else a[e]=t}),this.syncDiff(i,{joins:a,leaves:o},n,r)}static syncDiff(e,t,n,r){e=this.toNullProtoObj(e);let{joins:i,leaves:a}=this.clone(t);return n||=function(){},r||=function(){},this.map(i,(t,r)=>{let i=e[t];if(e[t]=this.clone(r),i){let n=e[t].metas.map(e=>e.phx_ref),r=i.metas.filter(e=>n.indexOf(e.phx_ref)<0);e[t].metas.unshift(...r)}n(t,i,r)}),this.map(a,(t,n)=>{let i=e[t];if(!i)return;let a=n.metas.map(e=>e.phx_ref);i.metas=i.metas.filter(e=>a.indexOf(e.phx_ref)<0),r(t,i,n),i.metas.length===0&&delete e[t]}),e}static list(e,t){return t||=function(e,t){return t},this.map(e,(e,n)=>t(e,n))}static map(e,t){return Object.getOwnPropertyNames(e).map(n=>t(n,e[n]))}static toNullProtoObj(e){if(Object.getPrototypeOf(e)===null)return e;let t=Object.create(null);return Object.getOwnPropertyNames(e).forEach(n=>{t[n]=e[n]}),t}static clone(e){return JSON.parse(JSON.stringify(e))}},rr={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(e,t){if(e.payload.constructor===ArrayBuffer)return t(this.binaryEncode(e));{let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}},decode(e,t){if(e.constructor===ArrayBuffer)return t(this.binaryDecode(e));{let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}},binaryEncode(e){let{join_ref:t,ref:n,event:r,topic:i,payload:a}=e,o=new TextEncoder,s=o.encode(t),c=o.encode(n),l=o.encode(i),u=o.encode(r);this.assertFieldSize(s.byteLength,`join_ref`),this.assertFieldSize(c.byteLength,`ref`),this.assertFieldSize(l.byteLength,`topic`),this.assertFieldSize(u.byteLength,`event`);let d=this.META_LENGTH+s.byteLength+c.byteLength+l.byteLength+u.byteLength,f=new ArrayBuffer(this.HEADER_LENGTH+d),p=new Uint8Array(f),m=new DataView(f),h=0;m.setUint8(h++,this.KINDS.push),m.setUint8(h++,s.byteLength),m.setUint8(h++,c.byteLength),m.setUint8(h++,l.byteLength),m.setUint8(h++,u.byteLength),p.set(s,h),h+=s.byteLength,p.set(c,h),h+=c.byteLength,p.set(l,h),h+=l.byteLength,p.set(u,h),h+=u.byteLength;var g=new Uint8Array(f.byteLength+a.byteLength);return g.set(p,0),g.set(new Uint8Array(a),f.byteLength),g.buffer},assertFieldSize(e,t){if(e>255)throw Error(`unable to convert ${t} to binary: must be less than or equal to 255 bytes, but is ${e} bytes`)},binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.push:return this.decodePush(e,t,r);case this.KINDS.reply:return this.decodeReply(e,t,r);case this.KINDS.broadcast:return this.decodeBroadcast(e,t,r)}},decodePush(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=this.HEADER_LENGTH+this.META_LENGTH-1,s=n.decode(e.slice(o,o+r));o+=r;let c=n.decode(e.slice(o,o+i));o+=i;let l=n.decode(e.slice(o,o+a));return o+=a,{join_ref:s,ref:null,topic:c,event:l,payload:e.slice(o,e.byteLength)}},decodeReply(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+this.META_LENGTH,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=n.decode(e.slice(s,s+o));s+=o;let f={status:d,response:e.slice(s,e.byteLength)};return{join_ref:c,ref:l,topic:u,event:Kn.reply,payload:f}},decodeBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=this.HEADER_LENGTH+2,o=n.decode(e.slice(a,a+r));a+=r;let s=n.decode(e.slice(a,a+i));return a+=i,{join_ref:null,ref:null,topic:o,event:s,payload:e.slice(a,e.byteLength)}}},ir=class{constructor(e,t={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=t.timeout||Vn,this.transport=t.transport||zn.WebSocket||tr,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=t.longPollFallbackMs,this.fallbackTimer=null;let n=null;try{n=zn&&zn.sessionStorage}catch{}this.sessionStore=t.sessionStorage||n,this.establishedConnections=0,this.defaultEncoder=rr.encode.bind(rr),this.defaultDecoder=rr.decode.bind(rr),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=t.binaryType||`arraybuffer`,this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport===tr?(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder):(this.encode=t.encode||this.defaultEncoder,this.decode=t.decode||this.defaultDecoder);let r=null;Rn&&Rn.addEventListener&&(Rn.addEventListener(`pagehide`,e=>{this.conn&&(this.disconnect(),r=this.connectClock)}),Rn.addEventListener(`pageshow`,e=>{r===this.connectClock&&(r=null,this.connect())}),Rn.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=t.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=t.autoSendHeartbeat??!0,this.heartbeatCallback=t.heartbeatCallback??(()=>{}),this.rejoinAfterMs=e=>t.rejoinAfterMs?t.rejoinAfterMs(e):[1e3,2e3,5e3][e-1]||1e4,this.reconnectAfterMs=e=>t.reconnectAfterMs?t.reconnectAfterMs(e):[10,50,100,150,200,250,500,1e3,2e3][e-1]||5e3,this.logger=t.logger||null,!this.logger&&t.debug&&(this.logger=(e,t,n)=>{console.log(`${e}: ${t}`,n)}),this.longpollerTimeout=t.longpollerTimeout||2e4,this.params=In(t.params||{}),this.endPoint=`${e}/${qn.websocket}`,this.vsn=t.vsn||Bn,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Zn(()=>{if(this.pageHidden){this.log(`Not reconnecting as page is hidden!`),this.teardown();return}this.teardown(async()=>{t.beforeReconnect&&await t.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=t.authToken&&In(t.authToken)}getLongPollTransport(){return tr}replaceTransport(e){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&=(this.conn.close(),null),this.transport=e}protocol(){return location.protocol.match(/^https/)?`wss`:`ws`}endPointURL(){let e=$n.appendParams($n.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return e.charAt(0)===`/`?e.charAt(1)===`/`?`${this.protocol()}:${e}`:`${this.protocol()}://${location.host}${e}`:e}disconnect(e,t,n){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,e&&e()},t,n)}connect(e){e&&(console&&console.log(`passing params to connect is deprecated. Instead pass :params to the Socket constructor`),this.params=In(e)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==tr?this.connectWithFallback(tr,this.longPollFallbackMs):this.transportConnect())}log(e,t,n){this.logger&&this.logger(e,t,n)}hasLogger(){return this.logger!==null}onOpen(e){let t=this.makeRef();return this.stateChangeCallbacks.open.push([t,e]),t}onClose(e){let t=this.makeRef();return this.stateChangeCallbacks.close.push([t,e]),t}onError(e){let t=this.makeRef();return this.stateChangeCallbacks.error.push([t,e]),t}onMessage(e){let t=this.makeRef();return this.stateChangeCallbacks.message.push([t,e]),t}onHeartbeat(e){this.heartbeatCallback=e}ping(e){if(!this.isConnected())return!1;let t=this.makeRef(),n=Date.now();this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:t});let r=this.onMessage(i=>{i.ref===t&&(this.off([r]),e(Date.now()-n))});return!0}transportName(e){switch(e){case tr:return`LongPoll`;default:return e.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let e;this.authToken&&(e=[`phoenix`,`${Yn}${btoa(this.authToken()).replace(/=/g,``)}`]),this.conn=new this.transport(this.endPointURL(),e),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(e){return this.sessionStore&&this.sessionStore.getItem(e)}storeSession(e,t){this.sessionStore&&this.sessionStore.setItem(e,t)}connectWithFallback(e,t=2500){clearTimeout(this.fallbackTimer);let n=!1,r=!0,i,a,o=this.transportName(e),s=t=>{this.log(`transport`,`falling back to ${o}...`,t),this.off([i,a]),r=!1,this.replaceTransport(e),this.transportConnect()};if(this.getSession(`phx:fallback:${o}`))return s(`memorized`);this.fallbackTimer=setTimeout(s,t),a=this.onError(e=>{this.log(`transport`,`error`,e),r&&!n&&(clearTimeout(this.fallbackTimer),s(e))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(n=!0,!r){let t=this.transportName(e);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${t}`,`true`),this.log(`transport`,`established ${t} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(s,t),this.ping(e=>{this.log(`transport`,`connected to primary after`,e),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log(`transport`,`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks(`open`)}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log(`transport`,`heartbeat timeout. Attempting to re-establish connection`);try{this.heartbeatCallback(`timeout`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.triggerChanError(Error(`heartbeat timeout`)),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Hn,`heartbeat timeout`)}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(e,t,n){if(!this.conn)return e&&e();let r=this.conn;this.waitForBufferDone(r,()=>{t?r.close(t,n||``):r.close(),this.waitForSocketClosed(r,()=>{this.conn===r&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),e&&e()})})}waitForBufferDone(e,t,n=1){if(n===5||!e.bufferedAmount){t();return}setTimeout(()=>{this.waitForBufferDone(e,t,n+1)},150*n)}waitForSocketClosed(e,t,n=1){if(n===5||e.readyState===Wn.closed){t();return}setTimeout(()=>{this.waitForSocketClosed(e,t,n+1)},150*n)}onConnClose(e){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log(`transport`,`close`,e),this.triggerChanError(e),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks(`close`,e)}onConnError(e){this.hasLogger()&&this.log(`transport`,`error`,e);let t=this.transport,n=this.establishedConnections;this.triggerStateCallbacks(`error`,e,t,n),(t===this.transport||n>0)&&this.triggerChanError(e)}triggerChanError(e){this.channels.forEach(t=>{t.isErrored()||t.isLeaving()||t.isClosed()||t.trigger(Kn.error,e)})}connectionState(){switch(this.conn&&this.conn.readyState){case Wn.connecting:return`connecting`;case Wn.open:return`open`;case Wn.closing:return`closing`;default:return`closed`}}isConnected(){return this.connectionState()===`open`}remove(e){this.off(e.stateChangeRefs),this.channels=this.channels.filter(t=>t!==e)}off(e){for(let t in this.stateChangeCallbacks)this.stateChangeCallbacks[t]=this.stateChangeCallbacks[t].filter(([t])=>e.indexOf(t)===-1)}channel(e,t={}){let n=new Qn(e,t,this);return this.channels.push(n),n}push(e){if(this.hasLogger()){let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;this.log(`push`,`${t} ${n} (${a}, ${i})`,r)}this.isConnected()?this.encode(e,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(e,e=>this.conn.send(e)))}makeRef(){let e=this.ref+1;return this.ref=e===this.ref?0:e,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback(`disconnected`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback(`sent`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}onConnMessage(e){this.decode(e.data,e=>{let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;if(i&&i===this.pendingHeartbeatRef){let e=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(r.status===`ok`?`ok`:`error`,e)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log(`receive`,`${r.status||``} ${t} ${n} ${i&&`(`+i+`)`||``}`.trim(),r);for(let e=0;e<this.channels.length;e++){let o=this.channels[e];o.isMember(t,n,r,a)&&o.trigger(n,r,i,a)}this.triggerStateCallbacks(`message`,e)})}triggerStateCallbacks(e,...t){try{this.stateChangeCallbacks[e].forEach(([n,r])=>{try{r(...t)}catch(t){this.log(`error`,`error in ${e} callback`,t)}})}catch(t){this.log(`error`,`error triggering ${e} callbacks`,t)}}leaveOpenTopic(e){let t=this.channels.find(t=>t.topic===e&&(t.isJoined()||t.isJoining()));t&&(this.hasLogger()&&this.log(`transport`,`leaving duplicate topic "${e}"`),t.leave())}},ar=class e{constructor(t,n){let r=cr(n);this.presence=new nr(t.getChannel(),r),this.presence.onJoin((n,r,i)=>{let a=e.onJoinPayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onLeave((n,r,i)=>{let a=e.onLeavePayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onSync(()=>{t.getChannel().trigger(`presence`,{event:`sync`})})}get state(){return e.transformState(this.presence.state)}static transformState(e){return e=sr(e),Object.getOwnPropertyNames(e).reduce((t,n)=>{let r=e[n];return t[n]=or(r),t},{})}static onJoinPayload(e,t,n){return{event:`join`,key:e,currentPresences:lr(t),newPresences:or(n)}}static onLeavePayload(e,t,n){return{event:`leave`,key:e,currentPresences:lr(t),leftPresences:or(n)}}};function or(e){return e.metas.map(e=>{let t=Object.getOwnPropertyDescriptors(e),n=Object.defineProperties({},t);return n.presence_ref=n.phx_ref,delete n.phx_ref,delete n.phx_ref_prev,n})}function sr(e){return JSON.parse(JSON.stringify(e))}function cr(e){return e?.events&&{events:e.events}}function lr(e){return e?.metas?or(e):[]}var ur;(function(e){e.SYNC=`sync`,e.JOIN=`join`,e.LEAVE=`leave`})(ur||={});var dr=class{get state(){return this.presenceAdapter.state}constructor(e,t){this.channel=e,this.presenceAdapter=new ar(this.channel.channelAdapter,t)}};function fr(e){if(e instanceof Error)return e;if(typeof e==`string`)return Error(e);if(e&&typeof e==`object`){let t=e;if(typeof t.code==`number`){let n=typeof t.reason==`string`&&t.reason?` (${t.reason})`:``;return Error(`socket closed: ${t.code}${n}`,{cause:e})}return Error(`channel error: transport failure`,{cause:e})}return Error(`channel error: connection lost`)}var pr=class{constructor(e,t,n){let r=mr(n);this.channel=e.getSocket().channel(t,r),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,t){return this.channel.on(e,t)}off(e,t){this.channel.off(e,t)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,t,n){let r;try{r=this.channel.push(e,t,n)}catch{throw Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>100){let e=this.channel.pushBuffer.shift();e.cancelTimeout(),this.socket.log(`channel`,`discarded push due to buffer overflow: ${e.event}`,e.payload())}return r}updateJoinPayload(e){let t=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},t),e)}canPush(){return this.socket.isConnected()&&this.state===Sn.joined}isJoined(){return this.state===Sn.joined}isJoining(){return this.state===Sn.joining}isClosed(){return this.state===Sn.closed}isLeaving(){return this.state===Sn.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}};function mr(e){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},e.config)}}var hr=/[,()"\\]/,gr=e=>hr.test(e)||e!==e.trim(),_r=e=>`"${e.replace(/\\/g,`\\\\`).replace(/"/g,`\\"`)}"`,vr=e=>{let t=e===null?`null`:String(e);return gr(t)?_r(t):t},yr=e=>e===null?`null`:String(e),br=(e,t)=>{if(e===`in`){let e=Array.isArray(t)?t:[t];if(e.length===0)throw Error("Realtime `in` filter requires at least one value.");return`in.(${Array.from(new Set(e)).map(e=>vr(e)).join(`,`)})`}return e===`is`?`is.${yr(t)}`:`${e}.${vr(t)}`},xr=class{constructor(){this.filters=[]}add(e,t,n,r=!1){let i=r?`not.`:``;return this.filters.push(`${e}=${i}${br(t,n)}`),this}eq(e,t){return this.add(e,`eq`,t)}neq(e,t){return this.add(e,`neq`,t)}gt(e,t){return this.add(e,`gt`,t)}gte(e,t){return this.add(e,`gte`,t)}lt(e,t){return this.add(e,`lt`,t)}lte(e,t){return this.add(e,`lte`,t)}in(e,t){return this.add(e,`in`,t)}like(e,t){return this.add(e,`like`,t)}ilike(e,t){return this.add(e,`ilike`,t)}match(e,t){return this.add(e,`match`,t)}imatch(e,t){return this.add(e,`imatch`,t)}is(e,t){return this.add(e,`is`,t)}isDistinct(e,t){return this.add(e,`isdistinct`,t)}not(e,t,n){return this.add(e,t,n,!0)}build(){return this.filters.join(`,`)}toString(){return this.build()}},Sr;(function(e){e.ALL=`*`,e.INSERT=`INSERT`,e.UPDATE=`UPDATE`,e.DELETE=`DELETE`})(Sr||={});var Cr;(function(e){e.BROADCAST=`broadcast`,e.PRESENCE=`presence`,e.POSTGRES_CHANGES=`postgres_changes`,e.SYSTEM=`system`})(Cr||={});var wr;(function(e){e.SUBSCRIBED=`SUBSCRIBED`,e.TIMED_OUT=`TIMED_OUT`,e.CLOSED=`CLOSED`,e.CHANNEL_ERROR=`CHANNEL_ERROR`})(wr||={});var Tr=class e{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,t={config:{}},n){if(this.topic=e,this.params=t,this.socket=n,this.bindings={},this.subTopic=e.replace(/^realtime:/i,``),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},t.config),this.channelAdapter=new pr(this.socket.socketAdapter,e,this.params),this.presence=new dr(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=Fn(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&this.params.config?.broadcast?.replay)throw Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,t=this.timeout){if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){let{config:{broadcast:n,presence:r,private:i,postgres_changes_options:a}}=this.params,o=this.bindings.postgres_changes?.map(e=>e.filter)??[],s=!!this.bindings[Cr.PRESENCE]&&this.bindings[Cr.PRESENCE].length>0||this.params.config.presence?.enabled===!0,c={},l=Object.assign({broadcast:n,presence:Object.assign(Object.assign({},r),{enabled:s}),postgres_changes:o,private:i},a?{postgres_changes_options:a}:{});this.socket.accessTokenValue&&(c.access_token=this.socket.accessTokenValue),this._onError(t=>{e?.(wr.CHANNEL_ERROR,fr(t))}),this._onClose(()=>e?.(wr.CLOSED)),this.updateJoinPayload(Object.assign({config:l},c)),this._updateFilterMessage();let u=a?.wait&&o.length>0?Math.max(t,(a.timeout??bn)+xn):t;this.channelAdapter.subscribe(u).receive(`ok`,async({postgres_changes:t})=>{if(this.socket._isManualToken()||this.socket.setAuth(),t===void 0){e?.(wr.SUBSCRIBED);return}this._updatePostgresBindings(t,e)}).receive(`error`,t=>{this.state=Sn.errored;let n=Object.values(t).join(`, `)||`error`;e?.(wr.CHANNEL_ERROR,Error(n,{cause:t}))}).receive(`timeout`,()=>{e?.(wr.TIMED_OUT)})}return this}_updatePostgresBindings(t,n){let r=this.bindings.postgres_changes,i=r?.length??0,a=[];for(let o=0;o<i;o++){let i=r[o],{filter:{event:s,schema:c,table:l,filter:u}}=i,d=t&&t[o];if(d&&d.event===s&&e.isFilterValueEqual(d.schema,c)&&e.isFilterValueEqual(d.table,l)&&e.isFilterValueEqual(d.filter,u))a.push(Object.assign(Object.assign({},i),{id:d.id}));else{this.unsubscribe(),this.state=Sn.errored,n?.(wr.CHANNEL_ERROR,Error(`mismatch between server and client bindings for postgres changes`));return}}this.bindings.postgres_changes=a,this.state!=Sn.errored&&n&&n(wr.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:`presence`,event:`track`,payload:e},t)}async untrack(e={}){return await this.send({type:`presence`,event:`untrack`},e)}on(e,t,n){let r=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),i=e===Cr.PRESENCE||e===Cr.POSTGRES_CHANGES;if(r&&i)throw this.socket.log(`channel`,`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,t,n)}async httpSend(e,t,n={}){if(t==null)return Promise.reject(Error(`Payload is required for httpSend()`));let r=t instanceof ArrayBuffer||ArrayBuffer.isView(t),i={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":r?`application/octet-stream`:`application/json`};this.socket.accessTokenValue&&(i.Authorization=`Bearer ${this.socket.accessTokenValue}`);let a=new URL(this.broadcastEndpointURL);a.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&a.searchParams.set(`private`,`true`);let o={method:`POST`,headers:i,body:r?t:JSON.stringify(t)},s=await this._fetchWithTimeout(a.toString(),o,n.timeout??this.timeout);if(s.status===202)return{success:!0};if(s.status===404)return Promise.reject(Error(`httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md`));let c=s.statusText;try{let e=await s.json();c=e.error||e.message||c}catch{}return Promise.reject(Error(c))}async send(e,t={}){if(!this.channelAdapter.canPush()&&e.type===`broadcast`){let n=`Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.`;this.socket.hasLogger()?this.socket.log(`channel`,n):console.warn(n);let{event:r,payload:i}=e,a={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":`application/json`};this.socket.accessTokenValue&&(a.Authorization=`Bearer ${this.socket.accessTokenValue}`);let o={method:`POST`,headers:a,body:JSON.stringify({messages:[{topic:this.subTopic,event:r,payload:i,private:this.private}]})};try{let e=await this._fetchWithTimeout(this.broadcastEndpointURL,o,t.timeout??this.timeout);return await e.body?.cancel(),e.ok?`ok`:`error`}catch(e){return e instanceof Error&&e.name===`AbortError`?`timed out`:`error`}}return new Promise(n=>{let r=this.channelAdapter.push(e.type,e,t.timeout||this.timeout);e.type===`broadcast`&&!this.params?.config?.broadcast?.ack&&n(`ok`),r.receive(`ok`,()=>n(`ok`)),r.receive(`error`,()=>n(`error`)),r.receive(`timeout`,()=>n(`timed out`))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(t=>{this.channelAdapter.unsubscribe(e).receive(`ok`,()=>t(`ok`)).receive(`timeout`,()=>t(`timed out`)).receive(`error`,()=>t(`error`))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,t,n){let r=new AbortController,i=setTimeout(()=>r.abort(),n),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:r.signal}));return clearTimeout(i),a}_on(t,n,r){let i=t.toLocaleLowerCase(),a=n?.filter;if((a instanceof xr||typeof a==`object`&&a&&typeof a.build==`function`)&&(n=Object.assign(Object.assign({},n),{filter:a.build()})),i===Cr.POSTGRES_CHANGES&&this.bindings[i]?.find(t=>e.isSamePostgresFilter(t.filter,n)))return this.socket.log(`error`,`duplicate \`postgres_changes\` binding for ${this.topic} ignored`,n),this;let o=this.channelAdapter.on(t,r),s={type:i,filter:n,callback:r,ref:o};return this.bindings[i]?this.bindings[i].push(s):this.bindings[i]=[s],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,t,n)=>{let r=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(r,n))return!1;let i=this.bindings[r]?.find(t=>t.ref===e.ref);if(!i)return!0;if([`broadcast`,`presence`,`postgres_changes`].includes(r)){if(`id`in i){let e=i.id,n=i.filter?.event;return e&&t.ids?.includes(e)&&(n===`*`||n?.toLocaleLowerCase()===t.data?.type.toLocaleLowerCase())}{let e=(i?.filter?.event)?.toLocaleLowerCase();return e===`*`||e===(t?.event)?.toLocaleLowerCase()}}return i.type.toLocaleLowerCase()===r})}_notThisChannelEvent(e,t){let{close:n,error:r,leave:i,join:a}=Cn;return t&&[n,r,i,a].includes(e)&&t!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,t,n)=>{if(typeof t==`object`&&`ids`in t){let e=t.data,{schema:n,table:r,commit_timestamp:i,type:a,errors:o}=e;return Object.assign(Object.assign({},{schema:n,table:r,commit_timestamp:i,eventType:a,new:{},old:{},errors:o}),this._getPayloadRecords(e))}return t})}copyBindings(e){if(this.joinedOnce)throw Error(`cannot copy bindings into joined channel`);for(let t in e.bindings)for(let n of e.bindings[t])this._on(n.type,n.filter,n.callback)}static isFilterValueEqual(e,t){return(e??void 0)===(t??void 0)}static isSamePostgresFilter(t,n){let r=(t?.select)?.join()??void 0,i=(n?.select)?.join()??void 0;return t?.event===n?.event&&e.isFilterValueEqual(t?.schema,n?.schema)&&e.isFilterValueEqual(t?.table,n?.table)&&e.isFilterValueEqual(t?.filter,n?.filter)&&r===i}_getPayloadRecords(e){let t={new:{},old:{}};return(e.type===`INSERT`||e.type===`UPDATE`)&&(t.new=En(e.columns,e.record)),(e.type===`UPDATE`||e.type===`DELETE`)&&(t.old=En(e.columns,e.old_record)),t}},Er=class{constructor(e,t){this.socket=new ir(e,t)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,t,n,r=1e4){return new Promise(i=>{setTimeout(()=>i(`timeout`),r),this.socket.disconnect(()=>{e(),i(`ok`)},t,n)})}push(e){this.socket.push(e)}log(e,t,n){this.socket.log(e,t,n)}hasLogger(){return this.socket.hasLogger()}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==wn.connecting}isDisconnecting(){return this.socket.connectionState()==wn.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}},Dr={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},Or=[1e3,2e3,5e3,1e4],kr=1e4;function Ar(){let e=new Map;return{get length(){return e.size},clear(){e.clear()},getItem(t){return e.has(t)?e.get(t):null},key(t){return Array.from(e.keys())[t]??null},removeItem(t){e.delete(t)},setItem(t,n){e.set(t,String(n))}}}function jr(){try{if(typeof globalThis<`u`&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return Ar()}var Mr=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`,Nr=class{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,t){if(this.channels=[],this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint=``,this.headers={},this.params={},this.ref=0,this.serializer=new Tn,this._manuallySetToken=!1,this._authPromise=null,this._authGeneration=0,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),!t?.params?.apikey)throw Error(`API key is required to connect to Realtime`);this.apiKey=t.params.apikey;let n=this._initializeOptions(t);this.socketAdapter=new Er(e,n),this.httpEndpoint=Fn(e),this.fetch=this._resolveFetch(t?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely(`connect`),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){let t=e.message;throw Error(`WebSocket not available: ${t}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,t){return this._cancelPendingDisconnect(),this.isDisconnecting()?`ok`:await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,t)}getChannels(){return this.channels}async removeChannel(e){let t=await e.unsubscribe();return t===`ok`&&e.teardown(),t}async removeAllChannels(){let e=this.channels.map(async e=>{let t=await e.unsubscribe();return e.teardown(),t}),t=await Promise.all(e);return await this.disconnect(),t}log(e,t,n){this.socketAdapter.log(e,t,n)}hasLogger(){return this.socketAdapter.hasLogger()}connectionState(){return this.socketAdapter.connectionState()||wn.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,t={config:{}}){let n=`realtime:${e}`,r=this.getChannels().find(e=>e.topic===n);if(r)return r;{let n=new Tr(`realtime:${e}`,t,this);return this._cancelPendingDisconnect(),this.channels.push(n),n}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){let t=++this._authGeneration,n=this._performAuth(e,t);t===this._authGeneration&&(this._authPromise=n);try{await n}finally{this._authPromise===n&&(this._authPromise=null)}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic),this.channels.length===0&&(this.log(`transport`,`no channels remaining, scheduling disconnect`),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log(`transport`,`disconnecting immediately - no channels`),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log(`transport`,`deferred disconnect fired - no channels, disconnecting`),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log(`transport`,`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log(`transport`,`pending disconnect cancelled - channel activity detected`),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e,t){let n,r=!1;if(e)n=e,r=!0;else if(this.accessToken)try{n=await this.accessToken()}catch(e){this.log(`error`,`Error fetching access token from callback`,e),n=this.accessTokenValue}else n=this.accessTokenValue;t===this._authGeneration&&(this.accessToken?this._manuallySetToken=!1:r&&(this._manuallySetToken=!0),this.accessTokenValue!=n&&(this.accessTokenValue=n,this.channels.forEach(e=>{let t={access_token:n,version:hn};e.updateJoinPayload(t),e.joinedOnce&&e.channelAdapter.isJoined()&&e.channelAdapter.push(Cn.access_token,{access_token:n})})))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e=`general`){this._isManualToken()||this.setAuth().catch(t=>{this.log(`error`,`Error setting auth in ${e}`,t)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(e=>{this.log(`error`,`error waiting for auth on connect`,e)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(t,n)=>{t!==`disconnected`&&(t==`sent`&&this._setAuthSafely(),e&&e(t,n))}}_startWorkerHeartbeat(){this.workerUrl?this.log(`worker`,`starting worker for from ${this.workerUrl}`):this.log(`worker`,`starting default worker`);let e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=e=>{this.log(`worker`,`worker error`,e.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=e=>{e.data.event===`keepAlive`&&this.sendHeartbeat()},this.workerRef.postMessage({event:`start`,interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&=(this.log(`worker`,`terminating worker`),this.workerRef.terminate(),void 0)}_workerObjectUrl(e){let t;if(e)t=e;else{let e=new Blob([Mr],{type:`application/javascript`});t=URL.createObjectURL(e)}return t}_initializeOptions(e){this.worker=e?.worker??!1,this.accessToken=e?.accessToken??null;let t={};t.timeout=e?.timeout??yn,t.heartbeatIntervalMs=e?.heartbeatIntervalMs??Dr.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=e?.disconnectOnEmptyChannelsAfterMs??2*(e?.heartbeatIntervalMs??Dr.HEARTBEAT_INTERVAL),t.transport=e?.transport??mn.getWebSocketConstructor(),t.params=e?.params,t.logger=e?.logger,t.heartbeatCallback=this._wrapHeartbeatCallback(e?.heartbeatCallback),t.sessionStorage=e?.sessionStorage??jr(),t.reconnectAfterMs=e?.reconnectAfterMs??(e=>Or[e-1]||kr);let n,r,i=e?.vsn??vn;switch(i){case gn:n=(e,t)=>t(JSON.stringify(e)),r=(e,t)=>t(JSON.parse(e));break;case _n:n=this.serializer.encode.bind(this.serializer),r=this.serializer.decode.bind(this.serializer);break;default:throw Error(`Unsupported serializer version: ${t.vsn}`)}if(t.vsn=i,t.encode=e?.encode??n,t.decode=e?.decode??r,t.beforeReconnect=this._reconnectAuth.bind(this),(e?.logLevel||e?.log_level)&&(this.logLevel=e.logLevel||e.log_level,t.params=Object.assign(Object.assign({},t.params),{log_level:this.logLevel})),this.worker){if(typeof window<`u`&&!window.Worker)throw Error(`Web Worker is not supported`);this.workerUrl=e?.workerUrl,t.autoSendHeartbeat=!this.worker}return t}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}},Pr=class extends Error{constructor(e,t){super(e),this.name=`IcebergError`,this.status=t.status,this.icebergType=t.icebergType,this.icebergCode=t.icebergCode,this.details=t.details,this.isCommitStateUnknown=t.icebergType===`CommitStateUnknownException`||[500,502,504].includes(t.status)&&t.icebergType?.includes(`CommitState`)===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function Fr(e,t,n){let r=new URL(t,e);if(n)for(let[e,t]of Object.entries(n))t!==void 0&&r.searchParams.set(e,t);return r.toString()}async function Ir(e){return!e||e.type===`none`?{}:e.type===`bearer`?{Authorization:`Bearer ${e.token}`}:e.type===`header`?{[e.name]:e.value}:e.type===`custom`?await e.getHeaders():{}}function Lr(e){let t=e.fetchImpl??globalThis.fetch;return{async request({method:n,path:r,query:i,body:a,headers:o}){let s=Fr(e.baseUrl,r,i),c=await Ir(e.auth),l=await t(s,{method:n,headers:{...a?{"Content-Type":`application/json`}:{},...c,...o},body:a?JSON.stringify(a):void 0}),u=await l.text(),d=(l.headers.get(`content-type`)||``).includes(`application/json`),f=d&&u?JSON.parse(u):u;if(!l.ok){let e=d?f:void 0,t=e?.error;throw new Pr(t?.message??`Request failed with status ${l.status}`,{status:l.status,icebergType:t?.type,icebergCode:t?.code,details:e})}return{status:l.status,headers:l.headers,data:f}}}}function Rr(e){return e.join(``)}var zr=class{constructor(e,t=``){this.client=e,this.prefix=t}async listNamespaces(e){let t=e?{parent:Rr(e.namespace)}:void 0;return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces`,query:t})).data.namespaces.map(e=>({namespace:e}))}async createNamespace(e,t){let n={namespace:e.namespace,properties:t?.properties};return(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces`,body:n})).data}async dropNamespace(e){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${Rr(e.namespace)}`})}async loadNamespaceMetadata(e){return{properties:(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Rr(e.namespace)}`})).data.properties}}async namespaceExists(e){try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${Rr(e.namespace)}`}),!0}catch(e){if(e instanceof Pr&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(e,t){try{return await this.createNamespace(e,t)}catch(e){if(e instanceof Pr&&e.status===409)return;throw e}}};function Br(e){return e.join(``)}var Vr=class{constructor(e,t=``,n){this.client=e,this.prefix=t,this.accessDelegation=n}async listTables(e){return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Br(e.namespace)}/tables`})).data.identifiers}async createTable(e,t){let n={};return this.accessDelegation&&(n[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${Br(e.namespace)}/tables`,body:t,headers:n})).data.metadata}async updateTable(e,t){let n=await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${Br(e.namespace)}/tables/${e.name}`,body:t});return{"metadata-location":n.data[`metadata-location`],metadata:n.data.metadata}}async dropTable(e,t){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${Br(e.namespace)}/tables/${e.name}`,query:{purgeRequested:String(t?.purge??!1)}})}async loadTable(e){let t={};return this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Br(e.namespace)}/tables/${e.name}`,headers:t})).data.metadata}async tableExists(e){let t={};this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation);try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${Br(e.namespace)}/tables/${e.name}`,headers:t}),!0}catch(e){if(e instanceof Pr&&e.status===404)return!1;throw e}}async createTableIfNotExists(e,t){try{return await this.createTable(e,t)}catch(n){if(n instanceof Pr&&n.status===409)return await this.loadTable({namespace:e.namespace,name:t.name});throw n}}},Hr=class{constructor(e){let t=`v1`;e.catalogName&&(t+=`/${e.catalogName}`);let n=e.baseUrl.endsWith(`/`)?e.baseUrl:`${e.baseUrl}/`;this.client=Lr({baseUrl:n,auth:e.auth,fetchImpl:e.fetch}),this.accessDelegation=e.accessDelegation?.join(`,`),this.namespaceOps=new zr(this.client,t),this.tableOps=new Vr(this.client,t,this.accessDelegation)}async listNamespaces(e){return this.namespaceOps.listNamespaces(e)}async createNamespace(e,t){return this.namespaceOps.createNamespace(e,t)}async dropNamespace(e){await this.namespaceOps.dropNamespace(e)}async loadNamespaceMetadata(e){return this.namespaceOps.loadNamespaceMetadata(e)}async listTables(e){return this.tableOps.listTables(e)}async createTable(e,t){return this.tableOps.createTable(e,t)}async updateTable(e,t){return this.tableOps.updateTable(e,t)}async dropTable(e,t){await this.tableOps.dropTable(e,t)}async loadTable(e){return this.tableOps.loadTable(e)}async namespaceExists(e){return this.namespaceOps.namespaceExists(e)}async tableExists(e){return this.tableOps.tableExists(e)}async createNamespaceIfNotExists(e,t){return this.namespaceOps.createNamespaceIfNotExists(e,t)}async createTableIfNotExists(e,t){return this.tableOps.createTableIfNotExists(e,t)}};function Ur(e){"@babel/helpers - typeof";return Ur=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Ur(e)}function Wr(e,t){if(Ur(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Ur(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Gr(e){var t=Wr(e,`string`);return Ur(t)==`symbol`?t:t+``}function Kr(e,t,n){return(t=Gr(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?qr(Object(n),!0).forEach(function(t){Kr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Jr=class extends Error{constructor(e,t=`storage`,n,r){super(e),this.__isStorageError=!0,this.namespace=t,this.name=t===`vectors`?`StorageVectorsError`:`StorageError`,this.status=n,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function Yr(e){return typeof e==`object`&&!!e&&`__isStorageError`in e}var Xr=class extends Jr{constructor(e,t,n,r=`storage`,i){super(e,r,t,n),this.name=r===`vectors`?`StorageVectorsApiError`:`StorageApiError`,this.status=t,this.statusCode=n,this.code=i}toJSON(){return N(N({},super.toJSON()),{},{code:this.code})}},Zr=class extends Jr{constructor(e,t,n=`storage`){super(e,n),this.name=n===`vectors`?`StorageVectorsUnknownError`:`StorageUnknownError`,this.originalError=t}};function Qr(e,t,n){let r=N({},e),i=t.toLowerCase();for(let e of Object.keys(r))e.toLowerCase()===i&&delete r[e];return r[i]=n,r}function $r(e){let t={};for(let[n,r]of Object.entries(e))t[n.toLowerCase()]=r;return t}var ei=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),ti=e=>{if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ni=e=>{if(Array.isArray(e))return e.map(e=>ni(e));if(typeof e==`function`||e!==Object(e))return e;let t={};return Object.entries(e).forEach(([e,n])=>{let r=e.replace(/([-_][a-z])/gi,e=>e.toUpperCase().replace(/[-_]/g,``));t[r]=ni(n)}),t},ri=e=>!e||typeof e!=`string`||e.length===0||e.length>100||e.trim()!==e||e.includes(`/`)||e.includes(`\\`)?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(e),ii=e=>e.split(`/`).map(encodeURIComponent).join(`/`),ai=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error;if(typeof t.error==`object`&&t.error!==null){let e=t.error;if(typeof e.message==`string`)return e.message}}return JSON.stringify(e)},oi=async(e,t,n,r)=>{if(typeof e==`object`&&e&&`json`in e&&typeof e.json==`function`){let n=e,i=parseInt(String(n.status),10);Number.isFinite(i)||(i=500),n.json().then(e=>{let n=e?.statusCode||e?.code||i+``;t(new Xr(ai(e),i,n,r,e?.code))}).catch(()=>{let e=i+``;t(new Xr(n.statusText||`HTTP ${i} error`,i,e,r))})}else t(new Zr(ai(e),e,r))},si=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};if(e===`GET`||e===`HEAD`||!r)return N(N({},i),n);if(ti(r)){let e=t?.headers||{},n;for(let[t,r]of Object.entries(e))t.toLowerCase()===`content-type`&&(n=r);i.headers=Qr(e,`Content-Type`,n??`application/json`),i.body=JSON.stringify(r)}else i.body=r;return t?.duplex&&(i.duplex=t.duplex),N(N({},i),n)};async function ci(e,t,n,r,i,a,o){return new Promise((s,c)=>{e(n,si(t,r,i,a)).then(e=>{if(!e.ok)throw e;if(r?.noResolveJson)return e;if(o===`vectors`){let t=e.headers.get(`content-type`);if(e.headers.get(`content-length`)===`0`||e.status===204||!t||!t.includes(`application/json`))return{}}return e.json()}).then(e=>s(e)).catch(e=>oi(e,c,r,o))})}function li(e=`storage`){return{get:async(t,n,r,i)=>ci(t,`GET`,n,r,i,void 0,e),post:async(t,n,r,i,a)=>ci(t,`POST`,n,i,a,r,e),put:async(t,n,r,i,a)=>ci(t,`PUT`,n,i,a,r,e),head:async(t,n,r,i)=>ci(t,`HEAD`,n,N(N({},r),{},{noResolveJson:!0}),i,void 0,e),remove:async(t,n,r,i,a)=>ci(t,`DELETE`,n,i,a,r,e)}}var{get:ui,post:di,put:fi,head:pi,remove:mi}=li(`storage`),hi=li(`vectors`),gi=class{constructor(e,t={},n,r=`storage`){this.shouldThrowOnError=!1,this.url=e,this.headers=$r(t),this.fetch=ei(n),this.namespace=r}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,t){return this.headers=Qr(this.headers,e,t),this}async handleOperation(e){var t=this;try{return{data:await e(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(Yr(e))return{data:null,error:e};throw e}}},_i=Symbol.toStringTag,vi=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[_i]=`StreamDownloadBuilder`,this.promise=null}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||=this.execute(),this.promise}async execute(){var e=this;try{return{data:(await e.downloadFn()).body,error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(Yr(t))return{data:null,error:t};throw t}}},yi=Symbol.toStringTag,bi=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[yi]=`BlobDownloadBuilder`,this.promise=null}asStream(){return new vi(this.downloadFn,this.shouldThrowOnError)}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||=this.execute(),this.promise}async execute(){var e=this;try{return{data:await(await e.downloadFn()).blob(),error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(Yr(t))return{data:null,error:t};throw t}}},xi={limit:100,offset:0,sortBy:{column:`name`,order:`asc`}},Si={cacheControl:`3600`,contentType:`text/plain;charset=UTF-8`,upsert:!1},Ci=class extends gi{constructor(e,t={},n,r){super(e,t,r,`storage`),this.bucketId=n}async uploadOrUpdate(e,t,n,r){var i=this;return i.handleOperation(async()=>{let a,o=N(N({},Si),r),s=N(N({},i.headers),e===`POST`&&{"x-upsert":String(o.upsert)}),c=o.metadata;if(typeof Blob<`u`&&n instanceof Blob||typeof FormData<`u`&&n instanceof FormData?a=i.prepareUploadFormData(n,o):(a=n,s[`cache-control`]=`max-age=${o.cacheControl}`,s[`content-type`]=o.contentType,c&&(s[`x-metadata`]=i.toBase64(i.encodeMetadata(c))),(typeof ReadableStream<`u`&&a instanceof ReadableStream||a&&typeof a==`object`&&`pipe`in a&&typeof a.pipe==`function`)&&!o.duplex&&(o.duplex=`half`)),r?.headers)for(let[e,t]of Object.entries(r.headers))s=Qr(s,e,t);let l=i._removeEmptyFolders(t),u=i._getFinalPath(l),d=await(e==`PUT`?fi:di)(i.fetch,`${i.url}/object/${u}`,a,N({headers:s},o?.duplex?{duplex:o.duplex}:{}));return{path:l,id:d.Id,fullPath:d.Key}})}async upload(e,t,n){return this.uploadOrUpdate(`POST`,e,t,n)}async uploadToSignedUrl(e,t,n,r){var i=this;let a=i._removeEmptyFolders(e),o=i._getFinalPath(a),s=new URL(i.url+`/object/upload/sign/${o}`);return s.searchParams.set(`token`,t),i.handleOperation(async()=>{let e,t=N(N({},Si),r),o=N(N({},i.headers),{"x-upsert":String(t.upsert)}),c=t.metadata;if(typeof Blob<`u`&&n instanceof Blob||typeof FormData<`u`&&n instanceof FormData?e=i.prepareUploadFormData(n,t):(e=n,o[`cache-control`]=`max-age=${t.cacheControl}`,o[`content-type`]=t.contentType,c&&(o[`x-metadata`]=i.toBase64(i.encodeMetadata(c))),(typeof ReadableStream<`u`&&e instanceof ReadableStream||e&&typeof e==`object`&&`pipe`in e&&typeof e.pipe==`function`)&&!t.duplex&&(t.duplex=`half`)),r?.headers)for(let[e,t]of Object.entries(r.headers))o=Qr(o,e,t);return{path:a,fullPath:(await fi(i.fetch,s.toString(),e,N({headers:o},t?.duplex?{duplex:t.duplex}:{}))).Key}})}async createSignedUploadUrl(e,t){var n=this;return n.handleOperation(async()=>{let r=n._getFinalPath(e),i=N({},n.headers);t?.upsert&&(i[`x-upsert`]=`true`);let a=await di(n.fetch,`${n.url}/object/upload/sign/${r}`,{},{headers:i}),o=new URL(n.url+a.url),s=o.searchParams.get(`token`);if(!s)throw new Jr(`No token returned by API`);return{signedUrl:o.toString(),path:e,token:s}})}async update(e,t,n){return this.uploadOrUpdate(`PUT`,e,t,n)}async move(e,t,n){var r=this;return r.handleOperation(async()=>await di(r.fetch,`${r.url}/object/move`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket,sourceVersionId:n?.sourceVersionId},{headers:r.headers}))}async copy(e,t,n){var r=this;return r.handleOperation(async()=>({path:(await di(r.fetch,`${r.url}/object/copy`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket,sourceVersionId:n?.sourceVersionId},{headers:r.headers})).Key}))}async createSignedUrl(e,t,n){var r=this;return r.handleOperation(async()=>{let i=r._getFinalPath(e),a=typeof n?.transform==`object`&&n.transform!==null&&Object.keys(n.transform).length>0,o=await di(r.fetch,`${r.url}/object/sign/${i}`,N(N({expiresIn:t},a?{transform:n.transform}:{}),n?.versionId==null?{}:{versionId:n.versionId}),{headers:r.headers}),s=new URLSearchParams;n?.download&&s.set(`download`,n.download===!0?``:n.download),n?.cacheNonce!=null&&s.set(`cacheNonce`,String(n.cacheNonce));let c=s.toString();return{signedUrl:encodeURI(`${r.url}${o.signedURL}${c?`&${c}`:``}`)}})}async createSignedUrls(e,t,n){var r=this;return r.handleOperation(async()=>{let i=await di(r.fetch,`${r.url}/object/sign/${r.bucketId}`,{expiresIn:t,paths:e},{headers:r.headers}),a=new URLSearchParams;n?.download&&a.set(`download`,n.download===!0?``:n.download),n?.cacheNonce!=null&&a.set(`cacheNonce`,String(n.cacheNonce));let o=a.toString();return i.map(e=>N(N({},e),{},{signedUrl:e.signedURL?encodeURI(`${r.url}${e.signedURL}${o?`&${o}`:``}`):null}))})}download(e,t,n){let r=typeof t?.transform==`object`&&t.transform!==null&&Object.keys(t.transform).length>0?`render/image/authenticated`:`object`,i=new URLSearchParams;t?.transform&&this.applyTransformOptsToQuery(i,t.transform),t?.cacheNonce!=null&&i.set(`cacheNonce`,String(t.cacheNonce)),t?.versionId!=null&&i.set(`versionId`,String(t.versionId));let a=i.toString(),o=this._getFinalPath(e);return new bi(()=>ui(this.fetch,`${this.url}/${r}/${o}${a?`?${a}`:``}`,{headers:this.headers,noResolveJson:!0},n),this.shouldThrowOnError)}async info(e,t){var n=this;let r=n._getFinalPath(e),i=new URLSearchParams;t?.versionId!=null&&i.set(`versionId`,String(t.versionId));let a=i.toString();return n.handleOperation(async()=>ni(await ui(n.fetch,`${n.url}/object/info/${r}${a?`?${a}`:``}`,{headers:n.headers})))}async exists(e){var t=this;let n=t._getFinalPath(e);try{return await pi(t.fetch,`${t.url}/object/${n}`,{headers:t.headers}),{data:!0,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(Yr(e)){let t=e instanceof Xr?e.status:e instanceof Zr?e.originalError?.status:void 0;if(t!==void 0&&[400,404].includes(t))return{data:!1,error:e}}throw e}}getPublicUrl(e,t){let n=this._getFinalPath(e),r=new URLSearchParams;t?.download&&r.set(`download`,t.download===!0?``:t.download),t?.transform&&this.applyTransformOptsToQuery(r,t.transform),t?.cacheNonce!=null&&r.set(`cacheNonce`,String(t.cacheNonce)),t?.versionId!=null&&r.set(`versionId`,String(t.versionId));let i=r.toString(),a=typeof t?.transform==`object`&&t.transform!==null&&Object.keys(t.transform).length>0?`render/image`:`object`;return{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${n}`)+(i?`?${i}`:``)}}}async remove(e){var t=this;return t.handleOperation(async()=>await mi(t.fetch,`${t.url}/object/${t.bucketId}`,{prefixes:e},{headers:t.headers}))}async purgeCache(e,t,n){var r=this;return r.handleOperation(async()=>{let i=ii(r._getFinalPath(e)),a=new URLSearchParams;t?.transformations&&a.set(`transformations`,`true`);let o=a.toString();return await mi(r.fetch,`${r.url}/cdn/${i}${o?`?${o}`:``}`,{},{headers:r.headers},n)})}async list(e,t,n){var r=this;return r.handleOperation(async()=>{let i=t?.sortBy?N(N({},xi.sortBy),t.sortBy):xi.sortBy,a=N(N(N({},xi),t),{},{sortBy:i,prefix:e||``});return await di(r.fetch,`${r.url}/object/list/${r.bucketId}`,a,{headers:r.headers},n)})}async listV2(e,t){var n=this;return n.handleOperation(async()=>{let r=N({},e);return await di(n.fetch,`${n.url}/object/list-v2/${n.bucketId}`,r,{headers:n.headers},t)})}prepareUploadFormData(e,t){let n=new FormData,r=[];e instanceof FormData?e.forEach((e,t)=>{typeof e==`string`?n.append(t,e):r.push([t,e])}):r.push([``,e]),n.has(`cacheControl`)||n.append(`cacheControl`,t.cacheControl),t.metadata&&!n.has(`metadata`)&&n.append(`metadata`,this.encodeMetadata(t.metadata));for(let[e,t]of r)n.append(e,t);return n}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<`u`?Buffer.from(e).toString(`base64`):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,``)}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,``).replace(/\/+/g,`/`)}applyTransformOptsToQuery(e,t){return t.width&&e.set(`width`,t.width.toString()),t.height&&e.set(`height`,t.height.toString()),t.resize&&e.set(`resize`,t.resize),t.format&&e.set(`format`,t.format),t.quality&&e.set(`quality`,t.quality.toString()),e}},wi={"X-Client-Info":`storage-js/2.117.3`},Ti=class extends gi{constructor(e,t={},n,r){let i=new URL(e);r?.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes(`storage.supabase.`)&&(i.hostname=i.hostname.replace(`supabase.`,`storage.supabase.`));let a=i.href.replace(/\/$/,``),o=N(N({},wi),t);super(a,o,n,`storage`)}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=t.listBucketOptionsToQueryString(e);return await ui(t.fetch,`${t.url}/bucket${n}`,{headers:t.headers})})}async getBucket(e){var t=this;return t.handleOperation(async()=>await ui(t.fetch,`${t.url}/bucket/${e}`,{headers:t.headers}))}async createBucket(e,t={public:!1}){var n=this;return n.handleOperation(async()=>await di(n.fetch,`${n.url}/bucket`,{id:e,name:e,type:t.type,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes,versioning_status:t.versioningStatus},{headers:n.headers}))}async updateBucket(e,t){var n=this;return n.handleOperation(async()=>await fi(n.fetch,`${n.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes,versioning_status:t.versioningStatus},{headers:n.headers}))}async emptyBucket(e){var t=this;return t.handleOperation(async()=>await di(t.fetch,`${t.url}/bucket/${e}/empty`,{},{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await mi(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}async getBucketLifecycle(e){var t=this;return t.handleOperation(async()=>await ui(t.fetch,t.bucketLifecycleUrl(e),{headers:t.headers}))}async updateBucketLifecycle(e,t){var n=this;return n.handleOperation(async()=>await fi(n.fetch,n.bucketLifecycleUrl(e),t,{headers:n.headers}))}async deleteBucketLifecycle(e){var t=this;return t.handleOperation(async()=>await mi(t.fetch,t.bucketLifecycleUrl(e),{},{headers:t.headers}))}async purgeBucketCache(e,t,n){var r=this;return r.handleOperation(async()=>{let i=new URLSearchParams;t?.transformations&&i.set(`transformations`,`true`);let a=i.toString();return await mi(r.fetch,`${r.url}/cdn/${ii(e)}${a?`?${a}`:``}`,{},{headers:r.headers},n)})}bucketLifecycleUrl(e){return`${this.url}/bucket/${ii(e)}/lifecycle`}listBucketOptionsToQueryString(e){let t={};return e&&(`limit`in e&&(t.limit=String(e.limit)),`offset`in e&&(t.offset=String(e.offset)),e.search&&(t.search=e.search),e.sortColumn&&(t.sortColumn=e.sortColumn),e.sortOrder&&(t.sortOrder=e.sortOrder)),Object.keys(t).length>0?`?`+new URLSearchParams(t).toString():``}},Ei=class extends gi{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=N(N({},wi),t);super(r,i,n,`storage`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await di(t.fetch,`${t.url}/bucket`,{name:e},{headers:t.headers}))}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=new URLSearchParams;e?.limit!==void 0&&n.set(`limit`,e.limit.toString()),e?.offset!==void 0&&n.set(`offset`,e.offset.toString()),e?.sortColumn&&n.set(`sortColumn`,e.sortColumn),e?.sortOrder&&n.set(`sortOrder`,e.sortOrder),e?.search&&n.set(`search`,e.search);let r=n.toString(),i=r?`${t.url}/bucket?${r}`:`${t.url}/bucket`;return await ui(t.fetch,i,{headers:t.headers})})}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await mi(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}from(e){var t=this;if(!ri(e))throw new Jr(`Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.`);let n=new Hr({baseUrl:this.url,catalogName:e,auth:{type:`custom`,getHeaders:async()=>t.headers},fetch:this.fetch}),r=this.shouldThrowOnError;return new Proxy(n,{get(e,t){let n=e[t];return typeof n==`function`?async(...t)=>{try{return{data:await n.apply(e,t),error:null}}catch(e){if(r)throw e;return{data:null,error:e}}}:n}})}},Di=class extends gi{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=N(N({},wi),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createIndex(e){var t=this;return t.handleOperation(async()=>await hi.post(t.fetch,`${t.url}/CreateIndex`,e,{headers:t.headers})||{})}async getIndex(e,t){var n=this;return n.handleOperation(async()=>await hi.post(n.fetch,`${n.url}/GetIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers}))}async listIndexes(e){var t=this;return t.handleOperation(async()=>await hi.post(t.fetch,`${t.url}/ListIndexes`,e,{headers:t.headers}))}async deleteIndex(e,t){var n=this;return n.handleOperation(async()=>await hi.post(n.fetch,`${n.url}/DeleteIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers})||{})}},Oi=class extends gi{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=N(N({},wi),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async putVectors(e){var t=this;if(e.vectors.length<1||e.vectors.length>500)throw Error(`Vector batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await hi.post(t.fetch,`${t.url}/PutVectors`,e,{headers:t.headers})||{})}async getVectors(e){var t=this;return t.handleOperation(async()=>await hi.post(t.fetch,`${t.url}/GetVectors`,e,{headers:t.headers}))}async listVectors(e){var t=this;if(e.segmentCount!==void 0){if(e.segmentCount<1||e.segmentCount>16)throw Error(`segmentCount must be between 1 and 16`);if(e.segmentIndex!==void 0&&(e.segmentIndex<0||e.segmentIndex>=e.segmentCount))throw Error(`segmentIndex must be between 0 and ${e.segmentCount-1}`)}return t.handleOperation(async()=>await hi.post(t.fetch,`${t.url}/ListVectors`,e,{headers:t.headers}))}async queryVectors(e){var t=this;return t.handleOperation(async()=>await hi.post(t.fetch,`${t.url}/QueryVectors`,e,{headers:t.headers}))}async deleteVectors(e){var t=this;if(e.keys.length<1||e.keys.length>500)throw Error(`Keys batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await hi.post(t.fetch,`${t.url}/DeleteVectors`,e,{headers:t.headers})||{})}},ki=class extends gi{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=N(N({},wi),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await hi.post(t.fetch,`${t.url}/CreateVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}async getBucket(e){var t=this;return t.handleOperation(async()=>await hi.post(t.fetch,`${t.url}/GetVectorBucket`,{vectorBucketName:e},{headers:t.headers}))}async listBuckets(e={}){var t=this;return t.handleOperation(async()=>await hi.post(t.fetch,`${t.url}/ListVectorBuckets`,e,{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await hi.post(t.fetch,`${t.url}/DeleteVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}},Ai=class extends ki{constructor(e,t={}){super(e,t.headers||{},t.fetch)}from(e){return new ji(this.url,this.headers,e,this.fetch)}async createBucket(e){var t=()=>super.createBucket,n=this;return t().call(n,e)}async getBucket(e){var t=()=>super.getBucket,n=this;return t().call(n,e)}async listBuckets(e={}){var t=()=>super.listBuckets,n=this;return t().call(n,e)}async deleteBucket(e){var t=()=>super.deleteBucket,n=this;return t().call(n,e)}},ji=class extends Di{constructor(e,t,n,r){super(e,t,r),this.vectorBucketName=n}async createIndex(e){var t=()=>super.createIndex,n=this;return t().call(n,N(N({},e),{},{vectorBucketName:n.vectorBucketName}))}async listIndexes(e={}){var t=()=>super.listIndexes,n=this;return t().call(n,N(N({},e),{},{vectorBucketName:n.vectorBucketName}))}async getIndex(e){var t=()=>super.getIndex,n=this;return t().call(n,n.vectorBucketName,e)}async deleteIndex(e){var t=()=>super.deleteIndex,n=this;return t().call(n,n.vectorBucketName,e)}index(e){return new Mi(this.url,this.headers,this.vectorBucketName,e,this.fetch)}},Mi=class extends Oi{constructor(e,t,n,r,i){super(e,t,i),this.vectorBucketName=n,this.indexName=r}async putVectors(e){var t=()=>super.putVectors,n=this;return t().call(n,N(N({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async getVectors(e){var t=()=>super.getVectors,n=this;return t().call(n,N(N({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async listVectors(e={}){var t=()=>super.listVectors,n=this;return t().call(n,N(N({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async queryVectors(e){var t=()=>super.queryVectors,n=this;return t().call(n,N(N({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async deleteVectors(e){var t=()=>super.deleteVectors,n=this;return t().call(n,N(N({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}},Ni=class extends Ti{constructor(e,t={},n,r){super(e,t,n,r)}from(e){return new Ci(this.url,this.headers,e,this.fetch)}get vectors(){return new Ai(this.url+`/vector`,{headers:this.headers,fetch:this.fetch})}get analytics(){return new Ei(this.url+`/iceberg`,this.headers,this.fetch)}},Pi=`2.117.3`,Fi=3e4,Ii=3*Fi,Li=2*Fi,Ri=`http://localhost:9999`,P=`supabase.auth.token`,F={"X-Client-Info":`gotrue-js/${Pi}`},zi=`X-Supabase-Api-Version`,Bi={"2024-01-01":{timestamp:Date.parse(`2024-01-01T00:00:00.0Z`),name:`2024-01-01`}},Vi=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Hi=`sb_flow_id`,Ui=class extends Error{constructor(e,t,n){super(e),this.__isAuthError=!0,this.name=`AuthError`,this.status=t,this.code=n}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}};function I(e){return typeof e==`object`&&!!e&&`__isAuthError`in e}var Wi=class extends Ui{constructor(e,t,n){super(e,t,n),this.name=`AuthApiError`,this.status=t,this.code=n}};function Gi(e){return I(e)&&e.name===`AuthApiError`}var Ki=class extends Ui{constructor(e,t){super(e),this.name=`AuthUnknownError`,this.originalError=t}},qi=class extends Ui{constructor(e,t,n,r){super(e,n,r),this.name=t,this.status=n}},Ji=class extends qi{constructor(){super(`Auth session missing!`,`AuthSessionMissingError`,400,void 0)}};function Yi(e){return I(e)&&e.name===`AuthSessionMissingError`}var Xi=class extends qi{constructor(){super(`Auth session or user missing`,`AuthInvalidTokenResponseError`,500,void 0)}},Zi=class extends qi{constructor(e){super(e,`AuthInvalidCredentialsError`,400,void 0)}},Qi=class extends qi{constructor(e,t=null){super(e,`AuthImplicitGrantRedirectError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}};function $i(e){return I(e)&&e.name===`AuthImplicitGrantRedirectError`}var ea=class extends qi{constructor(e,t=null){super(e,`AuthPKCEGrantCodeExchangeError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}},ta=class extends qi{constructor(){super(`PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.`,`AuthPKCECodeVerifierMissingError`,400,`pkce_code_verifier_not_found`)}},na=class extends qi{constructor(e,t){super(e,`AuthRetryableFetchError`,t,void 0)}};function ra(e){return I(e)&&e.name===`AuthRetryableFetchError`}var ia=class extends qi{constructor(e=`Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)`){super(e,`AuthRefreshDiscardedError`,409,void 0)}};function aa(e){return I(e)&&e.name===`AuthRefreshDiscardedError`}var oa=class extends qi{constructor(e,t,n){super(e,`AuthWeakPasswordError`,t,`weak_password`),this.reasons=n}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}},sa=class extends qi{constructor(e){super(e,`AuthInvalidJwtError`,400,`invalid_jwt`)}},ca=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`.split(``),la=` 	
\r=`.split(``),ua=(()=>{let e=Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<la.length;t+=1)e[la[t].charCodeAt(0)]=-2;for(let t=0;t<ca.length;t+=1)e[ca[t].charCodeAt(0)]=t;return e})();function da(e,t,n){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;)n(ca[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6;else if(t.queuedBits>0)for(t.queue<<=6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;)n(ca[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6}function fa(e,t,n){let r=ua[e];if(r>-1)for(t.queue=t.queue<<6|r,t.queuedBits+=6;t.queuedBits>=8;)n(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else if(r===-2)return;else throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}function pa(e){let t=[],n=e=>{t.push(String.fromCodePoint(e))},r={utf8seq:0,codepoint:0},i={queue:0,queuedBits:0},a=e=>{ga(e,r,n)};for(let t=0;t<e.length;t+=1)fa(e.charCodeAt(t),i,a);return t.join(``)}function ma(e,t){if(e<=127){t(e);return}if(e<=2047){t(192|e>>6),t(128|e&63);return}if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function ha(e,t){for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);if(r>55295&&r<=56319){let t=(r-55296)*1024&65535;r=(e.charCodeAt(n+1)-56320&65535|t)+65536,n+=1}ma(r,t)}}function ga(e,t,n){if(t.utf8seq===0){if(e<=127){n(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw Error(`Invalid UTF-8 sequence`);--t.utf8seq}else if(t.utf8seq>0){if(e<=127)throw Error(`Invalid UTF-8 sequence`);t.codepoint=t.codepoint<<6|e&63,--t.utf8seq,t.utf8seq===0&&n(t.codepoint)}}function _a(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};for(let t=0;t<e.length;t+=1)fa(e.charCodeAt(t),n,r);return new Uint8Array(t)}function va(e){let t=[];return ha(e,e=>t.push(e)),new Uint8Array(t)}function ya(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};return e.forEach(e=>da(e,n,r)),da(null,n,r),t.join(``)}function ba(e){return Math.round(Date.now()/1e3)+e}function xa(){return Symbol(`auth-callback`)}var Sa=()=>typeof window<`u`&&typeof document<`u`,Ca={tested:!1,writable:!1},wa=()=>{if(!Sa())return!1;try{if(typeof globalThis.localStorage!=`object`)return!1}catch{return!1}if(Ca.tested)return Ca.writable;let e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),Ca.tested=!0,Ca.writable=!0}catch{Ca.tested=!0,Ca.writable=!1}return Ca.writable};function Ta(e){let t={},n=new URL(e);if(n.hash&&n.hash[0]===`#`)try{new URLSearchParams(n.hash.substring(1)).forEach((e,n)=>{t[n]=e})}catch{}return n.searchParams.forEach((e,n)=>{t[n]=e}),t}var Ea=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Da=e=>typeof e==`object`&&!!e&&`status`in e&&`ok`in e&&`json`in e&&typeof e.json==`function`,Oa=async(e,t,n)=>{await e.setItem(t,JSON.stringify(n))},ka=async(e,t)=>{let n=await e.getItem(t);if(!n)return null;try{return JSON.parse(n)}catch{return null}},Aa=async(e,t)=>{await e.removeItem(t)},ja=class e{constructor(){this.promise=new e.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}};ja.promiseConstructor=Promise;function Ma(e){let t=e.split(`.`);if(t.length!==3)throw new sa(`Invalid JWT structure`);for(let e=0;e<t.length;e++)if(!Vi.test(t[e]))throw new sa(`JWT not in base64url format`);return{header:JSON.parse(pa(t[0])),payload:JSON.parse(pa(t[1])),signature:_a(t[2]),raw:{header:t[0],payload:t[1]}}}async function Na(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function Pa(e,t){return new Promise((n,r)=>{(async()=>{for(let i=0;i<1/0;i++)try{let r=await e(i);if(!t(i,null,r)){n(r);return}}catch(e){if(!t(i,e)){r(e);return}}})()})}function Fa(e){return(`0`+e.toString(16)).substr(-2)}function Ia(){let e=new Uint32Array(56);if(typeof crypto>`u`){let e=``;for(let t=0;t<56;t++)e+=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~`.charAt(Math.floor(Math.random()*66));return e}return crypto.getRandomValues(e),Array.from(e,Fa).join(``)}async function La(e){let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-256`,t),r=new Uint8Array(n);return Array.from(r).map(e=>String.fromCharCode(e)).join(``)}async function Ra(e){if(!(typeof crypto<`u`&&crypto.subtle!==void 0&&typeof TextEncoder<`u`))return console.warn(`WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.`),e;let t=await La(e);return btoa(t).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}var za=/^[a-zA-Z0-9_-]{8,64}$/;function Ba(e){return typeof e==`string`&&za.test(e)?e:null}function Va(){if(typeof crypto<`u`&&typeof crypto.getRandomValues==`function`){let e=new Uint8Array(16);return crypto.getRandomValues(e),Array.from(e,Fa).join(``)}let e=``;for(let t=0;t<32;t++)e+=Math.floor(Math.random()*16).toString(16);return e}var Ha=(e,t)=>`${e}-flow-${t}-code-verifier`,Ua=e=>`${e}-flows-code-verifier`;async function Wa(e,t){let n=await ka(e,Ua(t));return Array.isArray(n)?n.filter(e=>Ba(e)!==null):[]}async function Ga(e,t,n,r,i){await Oa(e,Ha(t,n),r);let a=(await Wa(e,t)).filter(e=>e!==n);for(a.push(n);a.length>5;){let n=a.shift();await Aa(e,Ha(t,n)),i?.(n)}await Oa(e,Ua(t),a),await Oa(e,`${t}-code-verifier`,r)}async function Ka(e,t,n){if(n){let r=await ka(e,Ha(t,n));return{verifier:typeof r==`string`?r:null,flowId:n}}let r=await ka(e,`${t}-code-verifier`);return{verifier:typeof r==`string`?r:null,flowId:null}}async function qa(e,t,n){let r=`${t}-code-verifier`;if(!n){await Aa(e,r);return}let i=Ha(t,n),a=await ka(e,i);await Aa(e,i);let o=await Wa(e,t),s=o.filter(e=>e!==n);s.length!==o.length&&(s.length>0?await Oa(e,Ua(t),s):await Aa(e,Ua(t))),a!=null&&a===await ka(e,r)&&await Aa(e,r)}async function Ja(e,t){let n=await Wa(e,t);for(let r of n)await Aa(e,Ha(t,r));await Aa(e,Ua(t)),await Aa(e,`${t}-code-verifier`)}function Ya(e,t){let n=e.indexOf(`#`),r=n===-1?e:e.slice(0,n),i=n===-1?``:e.slice(n),a=r.indexOf(`?`);if(a!==-1){let e=r.slice(0,a),t=r.slice(a+1).split(`&`).filter(e=>e!==``&&e!==`sb_flow_id`&&!e.startsWith(`sb_flow_id=`));r=t.length>0?`${e}?${t.join(`&`)}`:e}let o=r.includes(`?`)?`&`:`?`;return`${r}${o}${Hi}=${encodeURIComponent(t)}${i}`}async function Xa(e,t,n=!1,r){let i=Ia(),a=i;n&&(a+=`/recovery`);let o=Va();await Ga(e,t,o,a,r);let s=await Ra(i);return[s,i===s?`plain`:`s256`,o]}var Za=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function Qa(e){let t=e.headers.get(zi);if(!t||!t.match(Za))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function $a(e){if(!e)throw Error(`Missing exp claim`);if(e<=Math.floor(Date.now()/1e3))throw Error(`JWT has expired`)}function eo(e){switch(e){case`RS256`:return{name:`RSASSA-PKCS1-v1_5`,hash:{name:`SHA-256`}};case`ES256`:return{name:`ECDSA`,namedCurve:`P-256`,hash:{name:`SHA-256`}};default:throw Error(`Invalid alg claim`)}}var to=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function no(e){if(!to.test(e))throw Error(`@supabase/auth-js: Expected parameter to be UUID but is not`)}function ro(e){if(!e.recoveryCodes)throw Error("@supabase/auth-js: the MFA recovery codes API is experimental and disabled by default. Enable it by passing `auth: { experimental: { recoveryCodes: true } }` to createClient (or to the GoTrueClient constructor).")}function io(){return new Proxy({},{get:(e,t)=>{if(t===`__isUserNotAvailableProxy`)return!0;if(typeof t==`symbol`){let e=t.toString();if(e===`Symbol(Symbol.toPrimitive)`||e===`Symbol(Symbol.toStringTag)`||e===`Symbol(util.inspect.custom)`)return}throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function ao(e,t){return new Proxy(e,{get:(e,n,r)=>{if(n===`__isInsecureUserWarningProxy`)return!0;if(typeof n==`symbol`){let t=n.toString();if(t===`Symbol(Symbol.toPrimitive)`||t===`Symbol(Symbol.toStringTag)`||t===`Symbol(util.inspect.custom)`||t===`Symbol(nodejs.util.inspect.custom)`)return Reflect.get(e,n,r)}return!t.value&&typeof n==`string`&&(console.warn(`Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.`),t.value=!0),Reflect.get(e,n,r)}})}function oo(e){return JSON.parse(JSON.stringify(e))}var so=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error}return JSON.stringify(e)},co=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function lo(e){if(!Da(e))throw new na(so(e),0);let t;try{t=await e.json()}catch(t){throw co.includes(e.status)?new na(e.statusText||`HTTP ${e.status}`,e.status):new Ki(so(t),t)}if(co.includes(e.status))throw new na(so(t),e.status);let n,r=Qa(e);if(r&&r.getTime()>=Bi[`2024-01-01`].timestamp&&typeof t==`object`&&t&&typeof t.code==`string`?n=t.code:typeof t==`object`&&t&&typeof t.error_code==`string`&&(n=t.error_code),!n){if(typeof t==`object`&&t&&typeof t.weak_password==`object`&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0))throw new oa(so(t),e.status,t.weak_password.reasons)}else if(n===`weak_password`)throw new oa(so(t),e.status,t.weak_password?.reasons||[]);else if(n===`session_not_found`)throw new Ji;throw new Wi(so(t),e.status||500,n)}var uo=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};return e===`GET`?i:(i.headers=Object.assign({"Content-Type":`application/json;charset=UTF-8`},t?.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};async function L(e,t,n,r){let i=Object.assign({},r?.headers);i[`X-Supabase-Api-Version`]||(i[zi]=Bi[`2024-01-01`].name),r?.jwt&&(i.Authorization=`Bearer ${r.jwt}`);let a=r?.query??{};r?.redirectTo&&(a.redirect_to=r.redirectTo);let o=await fo(e,t,n+(Object.keys(a).length?`?`+new URLSearchParams(a).toString():``),{headers:i,noResolveJson:r?.noResolveJson},{},r?.body);return r?.xform?r?.xform(o):{data:Object.assign({},o),error:null}}async function fo(e,t,n,r,i,a){let o=uo(t,r,i,a),s;try{s=await e(n,Object.assign({},o))}catch(e){throw new na(so(e),0)}if(s.ok||await lo(s),r?.noResolveJson)return s;try{return await s.json()}catch(e){await lo(e)}}function R(e){let t=null;go(e)&&(t=Object.assign({},e),e.expires_at||(t.expires_at=ba(e.expires_in)));let n=e.user??(typeof e?.id==`string`?e:null);return{data:{session:t,user:n},error:null}}function po(e){let t=R(e);return!t.error&&e.weak_password&&typeof e.weak_password==`object`&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message==`string`&&e.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0)&&(t.data.weak_password=e.weak_password),t}function mo(e){return{data:{user:e.user??e},error:null}}function z(e){return{data:e,error:null}}function B(e){let{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a}=e,o=It(e,[`action_link`,`email_otp`,`hashed_token`,`redirect_to`,`verification_type`]);return{data:{properties:{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a},user:Object.assign({},o)},error:null}}function ho(e){return e}function go(e){return!!e.access_token&&!!e.refresh_token&&!!e.expires_in}var _o=[`global`,`local`,`others`],vo=class{constructor({url:e=``,headers:t={},fetch:n,experimental:r}){this.url=e,this.headers=t,this.fetch=Ea(n),this.experimental=r??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,t=_o[0]){if(_o.indexOf(t)<0)throw Error(`@supabase/auth-js: Parameter scope must be one of ${_o.join(`, `)}`);try{return await L(this.fetch,`POST`,`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(e){if(I(e))return{data:null,error:e};throw e}}async inviteUserByEmail(e,t={}){try{return await L(this.fetch,`POST`,`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:mo})}catch(e){if(I(e))return{data:{user:null},error:e};throw e}}async generateLink(e){try{let{options:t}=e,n=It(e,[`options`]),r=Object.assign(Object.assign({},n),t);return`newEmail`in n&&(r.new_email=n?.newEmail,delete r.newEmail),await L(this.fetch,`POST`,`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:B,redirectTo:t?.redirectTo})}catch(e){if(I(e))return{data:{properties:null,user:null},error:e};throw e}}async createUser(e){try{return await L(this.fetch,`POST`,`${this.url}/admin/users`,{body:e,headers:this.headers,xform:mo})}catch(e){if(I(e))return{data:{user:null},error:e};throw e}}async listUsers(e){try{let t={nextPage:null,lastPage:0,total:0},n=await L(this.fetch,`GET`,`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:ho});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(I(e))return{data:{users:[]},error:e};throw e}}async getUserById(e){no(e);try{return await L(this.fetch,`GET`,`${this.url}/admin/users/${e}`,{headers:this.headers,xform:mo})}catch(e){if(I(e))return{data:{user:null},error:e};throw e}}async updateUserById(e,t){no(e);try{return await L(this.fetch,`PUT`,`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:mo})}catch(e){if(I(e))return{data:{user:null},error:e};throw e}}async deleteUser(e,t=!1){no(e);try{return await L(this.fetch,`DELETE`,`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:mo})}catch(e){if(I(e))return{data:{user:null},error:e};throw e}}async _listFactors(e){no(e.userId);try{let{data:t,error:n}=await L(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:e=>({data:{factors:e},error:null})});return{data:t,error:n}}catch(e){if(I(e))return{data:null,error:e};throw e}}async _deleteFactor(e){no(e.userId),no(e.id);try{return{data:await L(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(e){if(I(e))return{data:null,error:e};throw e}}async _listOAuthClients(e){try{let t={nextPage:null,lastPage:0,total:0},n=await L(this.fetch,`GET`,`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:ho});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(I(e))return{data:{clients:[]},error:e};throw e}}async _createOAuthClient(e){try{return await L(this.fetch,`POST`,`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(I(e))return{data:null,error:e};throw e}}async _getOAuthClient(e){try{return await L(this.fetch,`GET`,`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(I(e))return{data:null,error:e};throw e}}async _updateOAuthClient(e,t){try{return await L(this.fetch,`PUT`,`${this.url}/admin/oauth/clients/${e}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(I(e))return{data:null,error:e};throw e}}async _deleteOAuthClient(e){try{return await L(this.fetch,`DELETE`,`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(I(e))return{data:null,error:e};throw e}}async _regenerateOAuthClientSecret(e){try{return await L(this.fetch,`POST`,`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(I(e))return{data:null,error:e};throw e}}async _listCustomProviders(e){try{let t={};return e?.type&&(t.type=e.type),await L(this.fetch,`GET`,`${this.url}/admin/custom-providers`,{headers:this.headers,query:t,xform:e=>({data:{providers:e?.providers??[]},error:null})})}catch(e){if(I(e))return{data:{providers:[]},error:e};throw e}}async _createCustomProvider(e){try{return await L(this.fetch,`POST`,`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(I(e))return{data:null,error:e};throw e}}async _getCustomProvider(e){try{return await L(this.fetch,`GET`,`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(I(e))return{data:null,error:e};throw e}}async _updateCustomProvider(e,t){try{return await L(this.fetch,`PUT`,`${this.url}/admin/custom-providers/${e}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(I(e))return{data:null,error:e};throw e}}async _deleteCustomProvider(e){try{return await L(this.fetch,`DELETE`,`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(I(e))return{data:null,error:e};throw e}}async _adminListPasskeys(e){no(e.userId);try{return await L(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(I(e))return{data:null,error:e};throw e}}async _adminDeletePasskey(e){no(e.userId),no(e.passkeyId);try{return await L(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(I(e))return{data:null,error:e};throw e}}};function yo(e={}){return{getItem:t=>e[t]||null,setItem:(t,n)=>{e[t]=n},removeItem:t=>{delete e[t]}}}globalThis&&wa()&&globalThis.localStorage&&globalThis.localStorage.getItem(`supabase.gotrue-js.locks.debug`);var bo=class extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}};function xo(){if(typeof globalThis!=`object`)try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<`u`&&(self.globalThis=self)}}function So(e){if(!/^0x[a-fA-F0-9]{40}$/.test(e))throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);return e.toLowerCase()}function V(e){return parseInt(e,16)}function Co(e){let t=new TextEncoder().encode(e);return`0x`+Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``)}function wo(e){let{chainId:t,domain:n,expirationTime:r,issuedAt:i=new Date,nonce:a,notBefore:o,requestId:s,resources:c,scheme:l,uri:u,version:d}=e;if(!Number.isInteger(t))throw Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!n)throw Error(`@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.`);if(a&&a.length<8)throw Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!u)throw Error(`@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.`);if(d!==`1`)throw Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);if(e.statement?.includes(`
`))throw Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);let f=So(e.address),p=`${l?`${l}://${n}`:n} wants you to sign in with your Ethereum account:\n${f}\n\n${e.statement?`${e.statement}\n`:``}`,m=`URI: ${u}\nVersion: ${d}\nChain ID: ${t}${a?`\nNonce: ${a}`:``}\nIssued At: ${i.toISOString()}`;if(r&&(m+=`\nExpiration Time: ${r.toISOString()}`),o&&(m+=`\nNot Before: ${o.toISOString()}`),s&&(m+=`\nRequest ID: ${s}`),c){let e=`
Resources:`;for(let t of c){if(!t||typeof t!=`string`)throw Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t}`);e+=`\n- ${t}`}m+=e}return`${p}\n${m}`}var To=class extends Error{constructor({message:e,code:t,cause:n,name:r}){super(e,{cause:n}),this.__isWebAuthnError=!0,this.name=r??(n instanceof Error?n.name:void 0)??`Unknown Error`,this.code=t}toJSON(){return{name:this.name,message:this.message,code:this.code}}},Eo=class extends To{constructor(e,t){super({code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:t,message:e}),this.name=`WebAuthnUnknownError`,this.originalError=t}};function Do({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new To({message:`Registration ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`ConstraintError`){if(n.authenticatorSelection?.requireResidentKey===!0)return new To({message:`Discoverable credentials were required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`,cause:e});if(t.mediation===`conditional`&&n.authenticatorSelection?.userVerification===`required`)return new To({message:`User verification was required during automatic registration but it could not be performed`,code:`ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`,cause:e});if(n.authenticatorSelection?.userVerification===`required`)return new To({message:`User verification was required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`,cause:e})}else if(e.name===`InvalidStateError`)return new To({message:`The authenticator was previously registered`,code:`ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`,cause:e});else if(e.name===`NotAllowedError`)return new To({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`NotSupportedError`)return n.pubKeyCredParams.filter(e=>e.type===`public-key`).length===0?new To({message:`No entry in pubKeyCredParams was of type "public-key"`,code:`ERROR_MALFORMED_PUBKEYCREDPARAMS`,cause:e}):new To({message:`No available authenticator supported any of the specified pubKeyCredParams algorithms`,code:`ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!Po(t))return new To({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rp.id!==t)return new To({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`TypeError`){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new To({message:`User ID was not between 1 and 64 characters`,code:`ERROR_INVALID_USER_ID_LENGTH`,cause:e})}else if(e.name===`UnknownError`)return new To({message:`The authenticator was unable to process the specified options, or could not create a new credential`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new To({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}function Oo({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new To({message:`Authentication ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`NotAllowedError`)return new To({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!Po(t))return new To({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rpId!==t)return new To({message:`The RP ID "${n.rpId}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`UnknownError`)return new To({message:`The authenticator was unable to process the specified options, or could not create a new assertion signature`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new To({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}var ko=new class{createNewAbortSignal(){if(this.controller){let e=Error(`Cancelling existing WebAuthn API call for new one`);e.name=`AbortError`,this.controller.abort(e)}let e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){let e=Error(`Manually cancelling existing WebAuthn API call`);e.name=`AbortError`,this.controller.abort(e),this.controller=void 0}}};function Ao(e){if(!e)throw Error(`Credential creation options are required`);if(typeof PublicKeyCredential<`u`&&`parseCreationOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON==`function`)return PublicKeyCredential.parseCreationOptionsFromJSON(e);let{challenge:t,user:n,excludeCredentials:r}=e,i=It(e,[`challenge`,`user`,`excludeCredentials`]),a=_a(t).buffer,o=Object.assign(Object.assign({},n),{id:_a(n.id).buffer}),s=Object.assign(Object.assign({},i),{challenge:a,user:o});if(r&&r.length>0){s.excludeCredentials=Array(r.length);for(let e=0;e<r.length;e++){let t=r[e];s.excludeCredentials[e]=Object.assign(Object.assign({},t),{id:_a(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return s}function jo(e){if(!e)throw Error(`Credential request options are required`);if(typeof PublicKeyCredential<`u`&&`parseRequestOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON==`function`)return PublicKeyCredential.parseRequestOptionsFromJSON(e);let{challenge:t,allowCredentials:n}=e,r=It(e,[`challenge`,`allowCredentials`]),i=_a(t).buffer,a=Object.assign(Object.assign({},r),{challenge:i});if(n&&n.length>0){a.allowCredentials=Array(n.length);for(let e=0;e<n.length;e++){let t=n[e];a.allowCredentials[e]=Object.assign(Object.assign({},t),{id:_a(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return a}function Mo(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e;return{id:e.id,rawId:e.id,response:{attestationObject:ya(new Uint8Array(e.response.attestationObject)),clientDataJSON:ya(new Uint8Array(e.response.clientDataJSON))},type:`public-key`,clientExtensionResults:e.getClientExtensionResults(),authenticatorAttachment:t.authenticatorAttachment??void 0}}function No(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e,n=e.getClientExtensionResults(),r=e.response;return{id:e.id,rawId:e.id,response:{authenticatorData:ya(new Uint8Array(r.authenticatorData)),clientDataJSON:ya(new Uint8Array(r.clientDataJSON)),signature:ya(new Uint8Array(r.signature)),userHandle:r.userHandle?ya(new Uint8Array(r.userHandle)):void 0},type:`public-key`,clientExtensionResults:n,authenticatorAttachment:t.authenticatorAttachment??void 0}}function Po(e){return e===`localhost`||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)}function Fo(){return!!(Sa()&&`PublicKeyCredential`in window&&window.PublicKeyCredential&&`credentials`in navigator&&typeof(navigator==null?void 0:navigator.credentials)?.create==`function`&&typeof(navigator==null?void 0:navigator.credentials)?.get==`function`)}async function Io(e){try{let t=await navigator.credentials.create(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new Eo(`Browser returned unexpected credential type`,t)}:{data:null,error:new Eo(`Empty credential response`,t)}}catch(t){return{data:null,error:Do({error:t,options:e})}}}async function Lo(e){try{let t=await navigator.credentials.get(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new Eo(`Browser returned unexpected credential type`,t)}:{data:null,error:new Eo(`Empty credential response`,t)}}catch(t){return{data:null,error:Oo({error:t,options:e})}}}var Ro={hints:[`security-key`],authenticatorSelection:{authenticatorAttachment:`cross-platform`,requireResidentKey:!1,userVerification:`preferred`,residentKey:`discouraged`},attestation:`direct`},zo={userVerification:`preferred`,hints:[`security-key`],attestation:`direct`};function Bo(...e){let t=e=>typeof e==`object`&&!!e&&!Array.isArray(e),n=e=>e instanceof ArrayBuffer||ArrayBuffer.isView(e),r={};for(let i of e)if(i)for(let e in i){let a=i[e];if(a!==void 0){if(Array.isArray(a))r[e]=a;else if(n(a))r[e]=a;else if(t(a)){let n=r[e];r[e]=t(n)?Bo(n,a):Bo(a)}else r[e]=a}}return r}function Vo(e,t){return Bo(Ro,e,t||{})}function Ho(e,t){return Bo(zo,e,t||{})}var Uo=class{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:`webauthn`}))}async _challenge({factorId:e,webauthn:t,friendlyName:n,signal:r},i){try{let{data:a,error:o}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!a)return{data:null,error:o};let s=r??ko.createNewAbortSignal();if(a.webauthn.type===`create`){let{user:e}=a.webauthn.credential_options.publicKey;if(!e.name){let t=n;if(t)e.name=`${e.id}:${t}`;else{let t=(await this.client.getUser()).data.user,n=t?.user_metadata?.name||t?.email||t?.id||`User`;e.name=`${e.id}:${n}`}}e.displayName||=e.name}switch(a.webauthn.type){case`create`:{let{data:t,error:n}=await Io({publicKey:Vo(a.webauthn.credential_options.publicKey,i?.create),signal:s});return t?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:t}},error:null}:{data:null,error:n}}case`request`:{let t=Ho(a.webauthn.credential_options.publicKey,i?.request),{data:n,error:r}=await Lo(Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:t,signal:s}));return n?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:n}},error:null}:{data:null,error:r}}}}catch(e){return I(e)?{data:null,error:e}:{data:null,error:new Ki(`Unexpected error in challenge`,e)}}}async _verify({challengeId:e,factorId:t,webauthn:n}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:n})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new Ui(`rpId is required for WebAuthn authentication`)};try{if(!Fo())return{data:null,error:new Ki(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:n},signal:r},{request:i});if(!a)return{data:null,error:o};let{webauthn:s}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:s.type,rpId:t,rpOrigins:n,credential_response:s.credential_response}})}catch(e){return I(e)?{data:null,error:e}:{data:null,error:new Ki(`Unexpected error in authenticate`,e)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new Ui(`rpId is required for WebAuthn registration`)};try{if(!Fo())return{data:null,error:new Ki(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(t=>t.data?.all.find(t=>t.factor_type===`webauthn`&&t.friendly_name===e&&t.status===`unverified`)).then(e=>e?this.client.mfa.unenroll({factorId:e?.id}):void 0),{data:null,error:o};let{data:s,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:n},signal:r},{create:i});return s?this._verify({factorId:a.id,challengeId:s.challengeId,webauthn:{rpId:t,rpOrigins:n,type:s.webauthn.type,credential_response:s.webauthn.credential_response}}):{data:null,error:c}}catch(e){return I(e)?{data:null,error:e}:{data:null,error:new Ki(`Unexpected error in register`,e)}}}};xo();var Wo={url:Ri,storageKey:P,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:F,flowType:`implicit`,debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},Go={},Ko=!1,qo=class e{get jwks(){return Go[this.storageKey]?.jwks??{keys:[]}}set jwks(e){Go[this.storageKey]=Object.assign(Object.assign({},Go[this.storageKey]),{jwks:e})}get jwks_cached_at(){return Go[this.storageKey]?.cachedAt??-(2**53-1)}set jwks_cached_at(e){Go[this.storageKey]=Object.assign(Object.assign({},Go[this.storageKey]),{cachedAt:e})}constructor(t){var n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this._pendingInitNotifications=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;let r=Object.assign(Object.assign({},Wo),t);if(this.storageKey=r.storageKey,this.instanceID=e.nextInstanceID[this.storageKey]??0,e.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!r.debug,typeof r.debug==`function`&&(this.logger=r.debug),this.instanceID>0&&Sa()){let e=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(e),this.logDebugMessages&&console.trace(e)}if(this.persistSession=r.persistSession,this.autoRefreshToken=r.autoRefreshToken,this.experimental=r.experimental??{},this.admin=new vo({url:r.url,headers:r.headers,fetch:r.fetch,experimental:this.experimental}),this.url=r.url,this.headers=r.headers,this.fetch=Ea(r.fetch),this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.hasCustomAuthorizationHeader=r.hasCustomAuthorizationHeader,this.throwOnError=r.throwOnError,this.lockAcquireTimeout=r.lockAcquireTimeout,r.lock!=null&&(this.lock=r.lock,Ko||(Ko=!0,console.warn(`${this._logPrefix()} The "lock" option is deprecated and will be removed in v3. The client now coordinates session refreshes without a lock, so most apps can drop the option. See https://github.com/supabase/supabase-js/blob/master/packages/core/auth-js/migrations/lockless-coordination.md`))),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=-(2**53-1)),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new Uo(this),recoveryCodes:{getStatus:this._getRecoveryCodesStatus.bind(this),generate:this._generateRecoveryCodes.bind(this),verify:this._verifyRecoveryCode.bind(this),regenerate:this._regenerateRecoveryCodes.bind(this),unenroll:this._unenrollRecoveryCodes.bind(this)}},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(r.storage?this.storage=r.storage:wa()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=yo(this.memoryStorage)),r.userStorage&&(this.userStorage=r.userStorage)):(this.memoryStorage={},this.storage=yo(this.memoryStorage)),Sa()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(e){console.error(`Failed to create a new BroadcastChannel, multi-tab state changes will not be available`,e)}(n=this.broadcastChannel)==null||n.addEventListener(`message`,async e=>{this._debug(`received broadcast notification from other tab or client`,e),(e.data.event===`TOKEN_REFRESHED`||e.data.event===`SIGNED_IN`)&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(e.data.event,e.data.session,!1)}catch(e){this._debug(`#broadcastChannel`,`error`,e)}})}r.skipAutoInitialize||this.initialize().catch(e=>{this._debug(`#initialize()`,`error`,e)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Pi}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){if(this.initializePromise)return await this.initializePromise;this._pendingInitNotifications=[],this.initializePromise=(async()=>this.lock==null?await this._initialize():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))();let e=await this.initializePromise,t=this._pendingInitNotifications??[];this._pendingInitNotifications=null;for(let e of t)await this._notifyAllSubscribers(e.event,e.session,e.broadcast);return e}async _initialize(){try{let e={},t=`none`;if(Sa()&&(e=Ta(window.location.href),this._isImplicitGrantCallback(e)?t=`implicit`:await this._isPKCECallback(e)&&(t=`pkce`)),Sa()&&this.detectSessionInUrl&&t!==`none`){let{data:n,error:r}=await this._getSessionFromURL(e,t);if(r){if(this._debug(`#_initialize()`,`error detecting session from URL`,r),$i(r)){let e=r.details?.code;if(e===`identity_already_exists`||e===`identity_not_found`||e===`single_identity_not_deletable`)return{error:r}}return{error:r}}let{session:i,redirectType:a}=n;return this._debug(`#_initialize()`,`detected session in URL`,i,`redirect type`,a),await this._saveSession(i),setTimeout(async()=>{a===`recovery`?await this._notifyAllSubscribers(`PASSWORD_RECOVERY`,i):await this._notifyAllSubscribers(`SIGNED_IN`,i)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(e){return I(e)?this._returnResult({error:e}):this._returnResult({error:new Ki(`Unexpected error during initialization`,e)})}finally{await this._handleVisibilityChange(),this._debug(`#_initialize()`,`end`)}}async signInAnonymously(e){try{let{data:t,error:n}=await L(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{data:e?.options?.data??{},gotrue_meta_security:{captcha_token:e?.options?.captchaToken}},xform:R});if(n||!t)return this._returnResult({data:{user:null,session:null},error:n});let r=t.session,i=t.user;return t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,r)),this._returnResult({data:{user:i,session:r},error:null})}catch(e){if(I(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signUp(e){let t=null;try{let n;if(`email`in e){let{email:r,password:i,options:a}=e,o=null,s=null;this.flowType===`pkce`&&([o,s,t]=await this._getCodeChallengeAndMethod()),n=await L(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(a?.emailRedirectTo,t),body:{email:r,password:i,data:a?.data??{},gotrue_meta_security:{captcha_token:a?.captchaToken},code_challenge:o,code_challenge_method:s},xform:R})}else if(`phone`in e){let{phone:t,password:r,options:i}=e;n=await L(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{phone:t,password:r,data:i?.data??{},channel:i?.channel??`sms`,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:R})}else throw new Zi(`You must provide either an email or phone number and a password`);let{data:r,error:i}=n;if(i||!r)return await qa(this.storage,this.storageKey,t),this._returnResult({data:{user:null,session:null},error:i});let a=r.session,o=r.user;return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,a)),this._returnResult({data:{user:o,session:a},error:null})}catch(e){if(await qa(this.storage,this.storageKey,t),I(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithPassword(e){try{let t;if(`email`in e){let{email:n,password:r,options:i}=e;t=await L(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:po})}else if(`phone`in e){let{phone:n,password:r,options:i}=e;t=await L(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:po})}else throw new Zi(`You must provide either an email or phone number and a password`);let{data:n,error:r}=t;if(r)return this._returnResult({data:{user:null,session:null},error:r});if(!n||!n.session||!n.user){let e=new Xi;return this._returnResult({data:{user:null,session:null},error:e})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers(`SIGNED_IN`,n.session)),this._returnResult({data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:r})}catch(e){if(I(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOAuth(e){return await this._handleProviderSignIn(e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:e.options?.skipBrowserRedirect})}async exchangeCodeForSession(e,t){return await this.initializePromise,this.lock==null?this._exchangeCodeForSession(e,t):this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e,t))}async signInWithWeb3(e){let{chain:t}=e;switch(t){case`ethereum`:return await this.signInWithEthereum(e);case`solana`:return await this.signInWithSolana(e);default:throw Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!Sa()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`ethereum`in e&&typeof e.ethereum==`object`&&`request`in e.ethereum&&typeof e.ethereum.request==`function`)s=e.ethereum;else throw Error(`@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href),l=await s.request({method:`eth_requestAccounts`}).then(e=>e).catch(()=>{throw Error(`@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid`)});if(!l||l.length===0)throw Error(`@supabase/auth-js: No accounts available. Please ensure the wallet is connected.`);let u=So(l[0]),d=o?.signInWithEthereum?.chainId;d||=V(await s.request({method:`eth_chainId`})),t=wo({domain:c.host,address:u,statement:a,uri:c.href,version:`1`,chainId:d,nonce:o?.signInWithEthereum?.nonce,issuedAt:o?.signInWithEthereum?.issuedAt??new Date,expirationTime:o?.signInWithEthereum?.expirationTime,notBefore:o?.signInWithEthereum?.notBefore,requestId:o?.signInWithEthereum?.requestId,resources:o?.signInWithEthereum?.resources}),n=await s.request({method:`personal_sign`,params:[Co(t),u]})}try{let{data:r,error:i}=await L(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`ethereum`,message:t,signature:n},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:R});if(i)throw i;if(!r||!r.session||!r.user){let e=new Xi;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(I(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSolana(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!Sa()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`solana`in e&&typeof e.solana==`object`&&(`signIn`in e.solana&&typeof e.solana.signIn==`function`||`signMessage`in e.solana&&typeof e.solana.signMessage==`function`))s=e.solana;else throw Error(`@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href);if(`signIn`in s&&s.signIn){let e=await s.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},o?.signInWithSolana),{version:`1`,domain:c.host,uri:c.href}),a?{statement:a}:null)),r;if(Array.isArray(e)&&e[0]&&typeof e[0]==`object`)r=e[0];else if(e&&typeof e==`object`&&`signedMessage`in e&&`signature`in e)r=e;else throw Error(`@supabase/auth-js: Wallet method signIn() returned unrecognized value`);if(`signedMessage`in r&&`signature`in r&&(typeof r.signedMessage==`string`||r.signedMessage instanceof Uint8Array)&&r.signature instanceof Uint8Array)t=typeof r.signedMessage==`string`?r.signedMessage:new TextDecoder().decode(r.signedMessage),n=r.signature;else throw Error(`@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields`)}else{if(!(`signMessage`in s)||typeof s.signMessage!=`function`||!(`publicKey`in s)||typeof s!=`object`||!s.publicKey||!(`toBase58`in s.publicKey)||typeof s.publicKey.toBase58!=`function`)throw Error(`@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API`);t=[`${c.host} wants you to sign in with your Solana account:`,s.publicKey.toBase58(),...a?[``,a,``]:[``],`Version: 1`,`URI: ${c.href}`,`Issued At: ${o?.signInWithSolana?.issuedAt??new Date().toISOString()}`,...o?.signInWithSolana?.notBefore?[`Not Before: ${o.signInWithSolana.notBefore}`]:[],...o?.signInWithSolana?.expirationTime?[`Expiration Time: ${o.signInWithSolana.expirationTime}`]:[],...o?.signInWithSolana?.chainId?[`Chain ID: ${o.signInWithSolana.chainId}`]:[],...o?.signInWithSolana?.nonce?[`Nonce: ${o.signInWithSolana.nonce}`]:[],...o?.signInWithSolana?.requestId?[`Request ID: ${o.signInWithSolana.requestId}`]:[],...o?.signInWithSolana?.resources?.length?[`Resources`,...o.signInWithSolana.resources.map(e=>`- ${e}`)]:[]].join(`
`);let e=await s.signMessage(new TextEncoder().encode(t),`utf8`);if(!e||!(e instanceof Uint8Array))throw Error(`@supabase/auth-js: Wallet signMessage() API returned an recognized value`);n=e}}try{let{data:r,error:i}=await L(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`solana`,message:t,signature:ya(n)},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:R});if(i)throw i;if(!r||!r.session||!r.user){let e=new Xi;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(I(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _exchangeCodeForSession(e,t){let n=t?.flowId!=null,r=n?Ba(t?.flowId):Sa()?Ba(Ta(window.location.href)[Hi]):null;n&&!r&&this._debug(`#_exchangeCodeForSession()`,`provided flowId is not a valid flow id`,t?.flowId);let{verifier:i,flowId:a}=n&&!r?{verifier:null,flowId:null}:await Ka(this.storage,this.storageKey,r),[o,s]=(i??``).split(`/`);try{if(!o&&this.flowType===`pkce`)throw new ta;let{data:t,error:n}=await L(this.fetch,`POST`,`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:o},xform:R});if(await qa(this.storage,this.storageKey,a),n)throw n;if(!t||!t.session||!t.user){let e=new Xi;return this._returnResult({data:{user:null,session:null,redirectType:null},error:e})}return t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(s===`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,t.session)),this._returnResult({data:Object.assign(Object.assign({},t),{redirectType:s??null}),error:n})}catch(e){if(await qa(this.storage,this.storageKey,a),I(e))return this._returnResult({data:{user:null,session:null,redirectType:null},error:e});throw e}}async signInWithIdToken(e){try{let{options:t,provider:n,token:r,access_token:i,nonce:a}=e,{data:o,error:s}=await L(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:r,access_token:i,nonce:a,gotrue_meta_security:{captcha_token:t?.captchaToken}},xform:R});if(s)return this._returnResult({data:{user:null,session:null},error:s});if(!o||!o.session||!o.user){let e=new Xi;return this._returnResult({data:{user:null,session:null},error:e})}return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers(`SIGNED_IN`,o.session)),this._returnResult({data:o,error:s})}catch(e){if(I(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOtp(e){let t=null;try{if(`email`in e){let{email:n,options:r}=e,i=null,a=null;this.flowType===`pkce`&&([i,a,t]=await this._getCodeChallengeAndMethod());let{error:o}=await L(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{email:n,data:r?.data??{},create_user:r?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:r?.captchaToken},code_challenge:i,code_challenge_method:a},redirectTo:this._maybeAppendFlowIdToRedirect(r?.emailRedirectTo,t)});return this._returnResult({data:{user:null,session:null},error:o})}if(`phone`in e){let{phone:t,options:n}=e,{data:r,error:i}=await L(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{phone:t,data:n?.data??{},create_user:n?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:n?.captchaToken},channel:n?.channel??`sms`}});return this._returnResult({data:{user:null,session:null,messageId:r?.message_id},error:i})}throw new Zi(`You must provide either an email or phone number.`)}catch(e){if(await qa(this.storage,this.storageKey,t),I(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async verifyOtp(e){try{let t,n;`options`in e&&(t=e.options?.redirectTo,n=e.options?.captchaToken);let{data:r,error:i}=await L(this.fetch,`POST`,`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:n}}),redirectTo:t,xform:R});if(i)throw i;if(!r)throw Error(`An error occurred on token verification.`);let a=r.session,o=r.user;return a?.access_token&&(await this._saveSession(a),await this._notifyAllSubscribers(e.type==`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,a)),this._returnResult({data:{user:o,session:a},error:null})}catch(e){if(I(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSSO(e){let t=null;try{let n=null,r=null;this.flowType===`pkce`&&([n,r,t]=await this._getCodeChallengeAndMethod());let i=await L(this.fetch,`POST`,`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},`providerId`in e?{provider_id:e.providerId}:null),`domain`in e?{domain:e.domain}:null),{redirect_to:this._maybeAppendFlowIdToRedirect(e.options?.redirectTo,t)}),e?.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:n,code_challenge_method:r}),headers:this.headers,xform:z});return i.data?.url&&Sa()&&!e.options?.skipBrowserRedirect&&window.location.assign(i.data.url),this._returnResult(i)}catch(e){if(await qa(this.storage,this.storageKey,t),I(e))return this._returnResult({data:null,error:e});throw e}}async reauthenticate(){return await this.initializePromise,this.lock==null?await this._reauthenticate():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)throw n;if(!t)throw new Ji;let{error:r}=await L(this.fetch,`GET`,`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:r})})}catch(e){if(I(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){let t=null;try{let n=`${this.url}/resend`;if(`email`in e){let{email:r,type:i,options:a}=e,o=null,s=null;this.flowType===`pkce`&&([o,s,t]=await this._getCodeChallengeAndMethod());let{error:c}=await L(this.fetch,`POST`,n,{headers:this.headers,body:{email:r,type:i,gotrue_meta_security:{captcha_token:a?.captchaToken},code_challenge:o,code_challenge_method:s},redirectTo:this._maybeAppendFlowIdToRedirect(a?.emailRedirectTo,t)});return c&&await qa(this.storage,this.storageKey,t),this._returnResult({data:{user:null,session:null},error:c})}if(`phone`in e){let{phone:t,type:r,options:i}=e,{data:a,error:o}=await L(this.fetch,`POST`,n,{headers:this.headers,body:{phone:t,type:r,gotrue_meta_security:{captcha_token:i?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a?.message_id},error:o})}throw new Zi(`You must provide either an email or phone number and a type`)}catch(e){if(await qa(this.storage,this.storageKey,t),I(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async getSession(){return await this.initializePromise,this.lock==null?await this._useSession(async e=>e):await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e))}async _acquireLock(e,t){this._debug(`#_acquireLock`,`begin`,e);try{if(this.lockAcquired){let e=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),n=(async()=>(await e,await t()))();return this.pendingInLock.push((async()=>{try{await n}catch{}})()),n}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug(`#_acquireLock`,`lock acquired for storage key`,this.storageKey);try{this.lockAcquired=!0;let e=t();for(this.pendingInLock.push((async()=>{try{await e}catch{}})()),await e;this.pendingInLock.length;){let e=[...this.pendingInLock];await Promise.all(e),this.pendingInLock.splice(0,e.length)}return await e}finally{this._debug(`#_acquireLock`,`lock released for storage key`,this.storageKey),this.lockAcquired=!1}})}finally{this._debug(`#_acquireLock`,`end`)}}async _useSession(e){this._debug(`#_useSession`,`begin`);try{return await e(await this.__loadSession())}finally{this._debug(`#_useSession`,`end`)}}async __loadSession(){this._debug(`#__loadSession()`,`begin`),this.lock!=null&&!this.lockAcquired&&this._debug(`#__loadSession()`,`used outside of an acquired lock!`,Error().stack);try{let e=null,t=await ka(this.storage,this.storageKey);if(this._debug(`#getSession()`,`session from storage`,t),t!==null&&(this._isValidSession(t)?e=t:(this._debug(`#getSession()`,`session from storage is not valid`),await this._removeSession())),!e)return{data:{session:null},error:null};let n=e.expires_at?e.expires_at*1e3-Date.now()<Ii:!1;if(this._debug(`#__loadSession()`,`session has${n?``:` not`} expired`,`expires_at`,e.expires_at),!n)return{data:{session:await this._hydrateSessionUser(e)},error:null};let{data:r,error:i}=await this._callRefreshToken(e.refresh_token);if(i){let e=await ka(this.storage,this.storageKey);return e&&this._isValidSession(e)&&e.expires_at&&e.expires_at*1e3>Date.now()?this._returnResult({data:{session:await this._hydrateSessionUser(e)},error:null}):this._returnResult({data:{session:null},error:i})}return this._returnResult({data:{session:r},error:null})}finally{this._debug(`#__loadSession()`,`end`)}}async _hydrateSessionUser(e){if(this.userStorage){let t=await ka(this.userStorage,this.storageKey+`-user`);e.user=t?.user?t.user:io()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){let t={value:this.suppressGetSessionWarning};e.user=ao(e.user,t),t.value&&(this.suppressGetSessionWarning=!0)}return e}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let t;return t=this.lock==null?await this._getUser():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()),t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await L(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:e,xform:mo}):await this._useSession(async e=>{let{data:t,error:n}=e;if(n)throw n;return!t.session?.access_token&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Ji}:await L(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:t.session?.access_token??void 0,xform:mo})})}catch(e){if(I(e))return Yi(e)&&await this._removeSession(),this._returnResult({data:{user:null},error:e});throw e}}async updateUser(e,t={}){return await this.initializePromise,this.lock==null?await this._updateUser(e,t):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){let n=null;try{return await this._useSession(async r=>{let{data:i,error:a}=r;if(a)throw a;if(!i.session)throw new Ji;let o=i.session,s=null,c=null;this.flowType===`pkce`&&e.email!=null&&([s,c,n]=await this._getCodeChallengeAndMethod());let{data:l,error:u}=await L(this.fetch,`PUT`,`${this.url}/user`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(t?.emailRedirectTo,n),body:Object.assign(Object.assign({},e),{code_challenge:s,code_challenge_method:c}),jwt:o.access_token,xform:mo});if(u)throw u;return o.user=l.user,await this._saveSession(o),await this._notifyAllSubscribers(`USER_UPDATED`,o),this._returnResult({data:{user:o.user},error:null})})}catch(e){if(await qa(this.storage,this.storageKey,n),I(e))return this._returnResult({data:{user:null},error:e});throw e}}async setSession(e){return await this.initializePromise,this.lock==null?await this._setSession(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new Ji;let t=Date.now()/1e3,n=t,r=!0,i=null,{payload:a}=Ma(e.access_token);if(a.exp&&(n=a.exp,r=n<=t),r){let{data:t,error:n}=await this._callRefreshToken(e.refresh_token);if(n)return this._returnResult({data:{user:null,session:null},error:n});if(!t)return{data:{user:null,session:null},error:null};i=t}else{let{data:r,error:a}=await this._getUser(e.access_token);if(a)return this._returnResult({data:{user:null,session:null},error:a});i={access_token:e.access_token,refresh_token:e.refresh_token,user:r.user,token_type:`bearer`,expires_in:n-t,expires_at:n},await this._saveSession(i),await this._notifyAllSubscribers(`SIGNED_IN`,i)}return this._returnResult({data:{user:i.user,session:i},error:null})}catch(e){if(I(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}}async refreshSession(e){return await this.initializePromise,this.lock==null?await this._refreshSession(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{if(!e){let{data:n,error:r}=t;if(r)throw r;e=n.session??void 0}if(!e?.refresh_token)throw new Ji;let{data:n,error:r}=await this._callRefreshToken(e.refresh_token);return r?this._returnResult({data:{user:null,session:null},error:r}):n?this._returnResult({data:{user:n.user,session:n},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(e){if(I(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _getSessionFromURL(e,t){try{if(!Sa())throw new Qi(`No browser detected.`);if(e.error||e.error_description||e.error_code)throw new Qi(e.error_description||`Error in URL with unspecified error_description`,{error:e.error||`unspecified_error`,code:e.error_code||`unspecified_code`});switch(t){case`implicit`:if(this.flowType===`pkce`)throw new ea(`Not a valid PKCE flow url.`);break;case`pkce`:if(this.flowType===`implicit`)throw new Qi(`Not a valid implicit grant flow url.`)}if(t===`pkce`){if(this._debug(`#_initialize()`,`begin`,`is PKCE flow`,!0),!e.code)throw new ea(`No code detected.`);let{data:t,error:n}=await this._exchangeCodeForSession(e.code,{flowId:e[Hi]});if(n)throw n;let r=new URL(window.location.href);return r.searchParams.delete(`code`),r.searchParams.delete(Hi),window.history.replaceState(window.history.state,``,r.toString()),{data:{session:t.session,redirectType:t.redirectType??null},error:null}}let{provider_token:n,provider_refresh_token:r,access_token:i,refresh_token:a,expires_in:o,expires_at:s,token_type:c}=e;if(!i||!o||!a||!c)throw new Qi(`No session defined in URL`);let l=Math.round(Date.now()/1e3),u=parseInt(o),d=l+u;s&&(d=parseInt(s));let f=d-l;f*1e3<=3e4&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`);let p=d-u;l-p>=120?console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale`,p,d,l):l-p<0&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew`,p,d,l);let{data:m,error:h}=await this._getUser(i);if(h)throw h;let g={provider_token:n,provider_refresh_token:r,access_token:i,expires_in:u,expires_at:d,refresh_token:a,token_type:c,user:m.user};return window.location.hash=``,this._debug(`#_getSessionFromURL()`,`clearing window.location.hash`),this._returnResult({data:{session:g,redirectType:e.type},error:null})}catch(e){if(I(e))return this._returnResult({data:{session:null,redirectType:null},error:e});throw e}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl==`function`?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){if(!e.code)return!1;let t=Ba(e[Hi]);return t&&await ka(this.storage,Ha(this.storageKey,t))?!0:!!await ka(this.storage,`${this.storageKey}-code-verifier`)}async signOut(e={scope:`global`}){return await this.initializePromise,this.lock==null?await this._signOut(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:`global`}){return await this._useSession(async t=>{let n=async()=>{await this._removeSession()},{data:r,error:i}=t;if(i&&!Yi(i))return this._returnResult({error:i});let a=r.session?.access_token;if(a){let{error:t}=await this.admin.signOut(a,e);if(t&&!(Gi(t)&&(t.status===404||t.status===401||t.status===403)||Yi(t)))return e!==`others`&&await n(),this._returnResult({error:t})}return e!==`others`&&await n(),this._returnResult({error:null})})}onAuthStateChange(e){let t=xa(),n={id:t,callback:e,unsubscribe:()=>{this._debug(`#unsubscribe()`,`state change callback with id removed`,t),this.stateChangeEmitters.delete(t)}};return this._debug(`#onAuthStateChange()`,`registered callback with id`,t),this.stateChangeEmitters.set(t,n),(async()=>{await this.initializePromise,this.lock==null?await this._emitInitialSession(t):await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(t)})})(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async t=>{try{let{data:{session:n},error:r}=t;if(r)throw r;await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,n),this._debug(`INITIAL_SESSION`,`callback id`,e,`session`,n)}catch(t){if(await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,null),this._debug(`INITIAL_SESSION`,`callback id`,e,`error`,t),aa(t))return;Yi(t)||ra(t)||Gi(t)&&(t.code===`refresh_token_not_found`||t.code===`refresh_token_already_used`||t.code===`session_expired`)?console.warn(t):console.error(t)}})}async resetPasswordForEmail(e,t={}){let n=null,r=null,i=null;this.flowType===`pkce`&&([n,r,i]=await this._getCodeChallengeAndMethod(!0));try{return await L(this.fetch,`POST`,`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:r,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(t.redirectTo,i)})}catch(e){if(await qa(this.storage,this.storageKey,i),I(e))return this._returnResult({data:null,error:e});throw e}}async getUserIdentities(){try{let{data:e,error:t}=await this.getUser();if(t)throw t;return this._returnResult({data:{identities:e.user.identities??[]},error:null})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async linkIdentity(e){return`token`in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){let t=null;try{let{data:n,error:r}=await this._useSession(async n=>{let{data:r,error:i}=n;if(i)throw i;let{url:a,flowId:o}=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:!0});return t=o,await L(this.fetch,`GET`,a,{headers:this.headers,jwt:r.session?.access_token??void 0})});if(r)throw r;return Sa()&&!e.options?.skipBrowserRedirect&&window.location.assign(n?.url),this._returnResult({data:{provider:e.provider,url:n?.url,flowId:t},error:null})}catch(n){if(I(n))return this._returnResult({data:{provider:e.provider,url:null,flowId:t},error:n});throw n}}async linkIdentityIdToken(e){return await this._useSession(async t=>{try{let{error:n,data:{session:r}}=t;if(n)throw n;let{options:i,provider:a,token:o,access_token:s,nonce:c}=e,{data:l,error:u}=await L(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:r?.access_token??void 0,body:{provider:a,id_token:o,access_token:s,nonce:c,link_identity:!0,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:R});return u?this._returnResult({data:{user:null,session:null},error:u}):!l||!l.session||!l.user?this._returnResult({data:{user:null,session:null},error:new Xi}):(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers(`USER_UPDATED`,l.session)),this._returnResult({data:l,error:u}))}catch(e){if(await qa(this.storage,this.storageKey,null),I(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)throw r;return await L(this.fetch,`DELETE`,`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:n.session?.access_token??void 0})})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async _refreshAccessToken(e){let t=`#_refreshAccessToken()`;this._debug(t,`begin`);try{let n=Date.now();return await Pa(async n=>(n>0&&await Na(200*2**(n-1)),this._debug(t,`refreshing attempt`,n),await L(this.fetch,`POST`,`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:R})),(e,t)=>{let r=200*2**e;return t&&ra(t)&&Date.now()+r-n<3e4})}catch(e){if(this._debug(t,`error`,e),I(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}finally{this._debug(t,`end`)}}_isValidSession(e){return typeof e==`object`&&!!e&&`access_token`in e&&`refresh_token`in e&&`expires_at`in e}async _handleProviderSignIn(e,t){let{url:n,flowId:r}=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug(`#_handleProviderSignIn()`,`provider`,e,`options`,t,`url`,n),Sa()&&!t.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n,flowId:r},error:null}}async _recoverAndRefresh(){let e=`#_recoverAndRefresh()`;this._debug(e,`begin`);try{let t=await ka(this.storage,this.storageKey);if(t&&this.userStorage){let e=await ka(this.userStorage,this.storageKey+`-user`);!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!e&&(e={user:t.user},await Oa(this.userStorage,this.storageKey+`-user`,e)),t.user=e?.user??io()}else if(t&&!t.user&&!t.user){let e=await ka(this.storage,this.storageKey+`-user`);e&&e?.user?(t.user=e.user,await Aa(this.storage,this.storageKey+`-user`),await Oa(this.storage,this.storageKey,t)):t.user=io()}if(this._debug(e,`session from storage`,t),!this._isValidSession(t)){this._debug(e,`session is not valid`),t!==null&&await this._removeSession();return}let n=(t.expires_at??1/0)*1e3-Date.now()<Ii;if(this._debug(e,`session has${n?``:` not`} expired with margin of ${Ii}s`),n){if(this.autoRefreshToken&&t.refresh_token){let{error:n}=await this._callRefreshToken(t.refresh_token);n&&(aa(n)?this._debug(e,`refresh discarded by commit guard`,n):this._debug(e,`refresh failed`,n))}}else if(t.user&&t.user.__isUserNotAvailableProxy===!0)try{let{data:n,error:r}=await this._getUser(t.access_token);!r&&n?.user?(t.user=n.user,await this._saveSession(t),await this._notifyAllSubscribers(`SIGNED_IN`,t)):this._debug(e,`could not get user data, skipping SIGNED_IN notification`)}catch(t){console.error(`Error getting user data:`,t),this._debug(e,`error getting user data, skipping SIGNED_IN notification`,t)}else await this._notifyAllSubscribers(`SIGNED_IN`,t)}catch(t){this._debug(e,`error`,t),ra(t)?console.warn(t):console.error(t);return}finally{this._debug(e,`end`)}}async _callRefreshToken(e){var t,n;if(!e)throw new Ji;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug(`#_callRefreshToken()`,`returning cached failure (cooldown active)`),this.lastRefreshFailure.result;let r=`#_callRefreshToken()`;this._debug(r,`begin`);try{this.refreshingDeferred=new ja,this.refreshingDeferred.promise.then(void 0,()=>{});let t=await ka(this.storage,this.storageKey),{data:n,error:i}=await this._refreshAccessToken(e);if(i)throw i;if(!n.session)throw new Ji;let a=await ka(this.storage,this.storageKey);if(t!==null&&(a===null||a.refresh_token!==t.refresh_token)){this._debug(r,`commit guard: storage changed since refresh started, discarding rotated tokens`,{startedWith:`present`,nowHolds:a?`replaced`:`cleared`});let e={data:null,error:new ia};return this.refreshingDeferred.resolve(e),e}let o=this._sessionRemovalEpoch;if(await this._saveSession(n.session),this._sessionRemovalEpoch!==o){this._debug(r,`commit guard (post-save): _removeSession ran during _saveSession, undoing write`),await Aa(this.storage,this.storageKey),this.userStorage&&await Aa(this.userStorage,this.storageKey+`-user`);let e={data:null,error:new ia};return this.refreshingDeferred.resolve(e),e}await this._notifyAllSubscribers(`TOKEN_REFRESHED`,n.session);let s={data:n.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(s),s}catch(i){if(this._debug(r,`error`,i),I(i)){let n={data:null,error:i};if(!ra(i)){let e=await ka(this.storage,this.storageKey);e?.expires_at&&e.expires_at*1e3>Date.now()?this._debug(r,`proactive refresh failed, access token still valid — preserving session`):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:n,expiresAt:Date.now()+Li},(t=this.refreshingDeferred)==null||t.resolve(n),n}throw(n=this.refreshingDeferred)==null||n.reject(i),i}finally{this.refreshingDeferred=null,this._debug(r,`end`)}}async _notifyAllSubscribers(e,t,n=!0){if(this._pendingInitNotifications!==null&&n){this._pendingInitNotifications.push({event:e,session:t,broadcast:n});return}let r=`#_notifyAllSubscribers(${e})`;this._debug(r,`begin`,t,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:t});let r=[],i=Array.from(this.stateChangeEmitters.values()).map(async n=>{try{await n.callback(e,t)}catch(e){r.push(e)}});if(await Promise.all(i),r.length>0){for(let e=0;e<r.length;e+=1)console.error(r[e]);throw r[0]}}finally{this._debug(r,`end`)}}async _saveSession(e){this._debug(`#_saveSession()`,e),this.suppressGetSessionWarning=!0;let t=Object.assign({},e),n=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&t.user&&await Oa(this.userStorage,this.storageKey+`-user`,{user:t.user});let e=Object.assign({},t);delete e.user;let r=oo(e);await Oa(this.storage,this.storageKey,r)}else{let e=oo(t);await Oa(this.storage,this.storageKey,e)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug(`#_removeSession()`),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await Aa(this.storage,this.storageKey),await Ja(this.storage,this.storageKey),await Aa(this.storage,this.storageKey+`-user`),this.userStorage&&await Aa(this.userStorage,this.storageKey+`-user`),await this._notifyAllSubscribers(`SIGNED_OUT`,null)}_removeVisibilityChangedCallback(){this._debug(`#_removeVisibilityChangedCallback()`);let e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&Sa()&&window!=null&&window.removeEventListener&&window.removeEventListener(`visibilitychange`,e)}catch(e){console.error(`removing visibilitychange callback failed`,e)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug(`#_startAutoRefresh()`);let e=setInterval(()=>this._autoRefreshTokenTick(),Fi);this.autoRefreshTicker=e,e&&typeof e==`object`&&typeof e.unref==`function`?e.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(e);let t=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=t,t&&typeof t==`object`&&typeof t.unref==`function`?t.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(t)}async _stopAutoRefresh(){this._debug(`#_stopAutoRefresh()`);let e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);let t=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,t&&clearTimeout(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)==null||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug(`#_autoRefreshTokenTick()`,`begin`),this.lock!=null){try{await this._acquireLock(0,async()=>{try{let e=Date.now();try{return await this._useSession(async t=>{let{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug(`#_autoRefreshTokenTick()`,`no session`);return}let r=Math.floor((n.expires_at*1e3-e)/Fi);this._debug(`#_autoRefreshTokenTick()`,`access token expires in ${r} ticks, a tick lasts ${Fi}ms, refresh threshold is 3 ticks`),r<=3&&await this._callRefreshToken(n.refresh_token)})}catch(e){console.error(`Auto refresh tick failed with error. This is likely a transient error.`,e)}}finally{this._debug(`#_autoRefreshTokenTick()`,`end`)}})}catch(e){if(e instanceof bo)this._debug(`auto refresh token tick lock not available`);else throw e}return}if(this.refreshingDeferred!==null){this._debug(`#_autoRefreshTokenTick()`,`refresh already in flight, skipping`);return}try{let e=Date.now();try{await this._useSession(async t=>{let{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug(`#_autoRefreshTokenTick()`,`no session`);return}let r=Math.floor((n.expires_at*1e3-e)/Fi);this._debug(`#_autoRefreshTokenTick()`,`access token expires in ${r} ticks, a tick lasts ${Fi}ms, refresh threshold is 3 ticks`),r<=3&&await this._callRefreshToken(n.refresh_token)})}catch(e){console.error(`Auto refresh tick failed with error. This is likely a transient error.`,e)}}finally{this._debug(`#_autoRefreshTokenTick()`,`end`)}}async _handleVisibilityChange(){if(this._debug(`#_handleVisibilityChange()`),!Sa()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug(`#visibilityChangedCallback`,`error`,e)}},window==null||window.addEventListener(`visibilitychange`,this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error(`_handleVisibilityChange`,e)}}async _onVisibilityChanged(e){let t=`#_onVisibilityChanged(${e})`;if(this._debug(t,`visibilityState`,document.visibilityState),document.visibilityState===`visible`){if(this.autoRefreshToken&&this._startAutoRefresh(),!e){if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!==`visible`){this._debug(t,`acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting`);return}await this._recoverAndRefresh()});else{if(document.visibilityState!==`visible`){this._debug(t,`visibilityState is no longer visible, skipping recovery`);return}await this._recoverAndRefresh()}}}else document.visibilityState===`hidden`&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,n){let r=n?.redirectTo,i=null,a=null,o=null;this.flowType===`pkce`&&([i,a,o]=await this._getCodeChallengeAndMethod(),r=this._maybeAppendFlowIdToRedirect(r,o));let s=[`provider=${encodeURIComponent(t)}`];if(r&&s.push(`redirect_to=${encodeURIComponent(r)}`),n?.scopes&&s.push(`scopes=${encodeURIComponent(n.scopes)}`),i!=null&&a!=null){let e=new URLSearchParams({code_challenge:`${encodeURIComponent(i)}`,code_challenge_method:`${encodeURIComponent(a)}`});s.push(e.toString())}if(n?.queryParams){let e=new URLSearchParams(n.queryParams);s.push(e.toString())}return n?.skipBrowserRedirect&&s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),{url:`${e}?${s.join(`&`)}`,flowId:o}}_maybeAppendFlowIdToRedirect(e,t){return!e||!t||!this.experimental.appendPkceFlowIdToRedirects?e??void 0:Ya(e,t)}async _getCodeChallengeAndMethod(e=!1){return Xa(this.storage,this.storageKey,e,e=>this._debug(`#_getCodeChallengeAndMethod()`,`evicted oldest pending PKCE verifier slot`,e))}async _unenroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;return r?this._returnResult({data:null,error:r}):await L(this.fetch,`DELETE`,`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:n?.session?.access_token})})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async _enroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType===`phone`?{phone:e.phone}:e.factorType===`totp`?{issuer:e.issuer}:{}),{data:a,error:o}=await L(this.fetch,`POST`,`${this.url}/factors`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(e.factorType===`totp`&&a.type===`totp`&&a?.totp?.qr_code&&(a.totp.qr_code=`data:image/svg+xml;utf-8,${a.totp.qr_code}`),this._returnResult({data:a,error:null}))})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async _verify(e){let t=async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({challenge_id:e.challengeId},`webauthn`in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type===`create`?Mo(e.webauthn.credential_response):No(e.webauthn.credential_response)})}:{code:e.code}),{data:a,error:o}=await L(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/verify`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+a.expires_in},a)),await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`,a),this._returnResult({data:a,error:o}))})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}};return this.lock==null?t():this._acquireLock(this.lockAcquireTimeout,t)}async _challenge(e){let t=async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=await L(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:n?.session?.access_token});if(i.error)return i;let{data:a}=i;if(a.type!==`webauthn`)return{data:a,error:null};switch(a.webauthn.type){case`create`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:Ao(a.webauthn.credential_options.publicKey)})})}),error:null};case`request`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:jo(a.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}};return this.lock==null?t():this._acquireLock(this.lockAcquireTimeout,t)}async _challengeAndVerify(e){let{data:t,error:n}=await this._challenge({factorId:e.factorId});return n?this._returnResult({data:null,error:n}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){let{data:{user:e},error:t}=await this.getUser();if(t)return{data:null,error:t};let n={all:[],phone:[],totp:[],webauthn:[],recovery_code:[]};for(let t of e?.factors??[])n.all.push(t),t.status===`verified`&&t.factor_type in n&&Array.isArray(n[t.factor_type])&&n[t.factor_type].push(t);return{data:n,error:null}}async _getAuthenticatorAssuranceLevel(e){if(e)try{let{payload:t}=Ma(e),n=null;t.aal&&(n=t.aal);let r=n,{data:{user:i},error:a}=await this.getUser(e);if(a)return this._returnResult({data:null,error:a});((i?.factors)?.filter(e=>e.status===`verified`)??[]).length>0&&(r=`aal2`);let o=t.amr||[];return{data:{currentLevel:n,nextLevel:r,currentAuthenticationMethods:o},error:null}}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}let{data:{session:t},error:n}=await this.getSession();if(n)return this._returnResult({data:null,error:n});if(!t)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};let{payload:r}=Ma(t.access_token),i=null;r.aal&&(i=r.aal);let a=i;(t.user.factors?.filter(e=>e.status===`verified`)??[]).length>0&&(a=`aal2`);let o=r.amr||[];return{data:{currentLevel:i,nextLevel:a,currentAuthenticationMethods:o},error:null}}async _getRecoveryCodesStatus(){ro(this.experimental);try{return await this._useSession(async e=>{let{data:t,error:n}=e;if(n)return this._returnResult({data:null,error:n});let{data:r,error:i}=await L(this.fetch,`GET`,`${this.url}/factors/recovery-codes`,{headers:this.headers,jwt:t?.session?.access_token});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async _generateRecoveryCodes(e){ro(this.experimental);try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let{data:i,error:a}=await L(this.fetch,`POST`,`${this.url}/factors/recovery-codes`,{body:e?.friendlyName?{friendly_name:e.friendlyName}:void 0,headers:this.headers,jwt:n?.session?.access_token});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async _verifyRecoveryCode(e){ro(this.experimental);let t=async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let{data:i,error:a}=await L(this.fetch,`POST`,`${this.url}/factors/recovery-codes/verify`,{body:{code:e.code},headers:this.headers,jwt:n?.session?.access_token});if(a)return this._returnResult({data:null,error:a});let o=Object.assign({expires_at:ba(i.expires_in)},i);return await this._saveSession(o),await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`,o),this._returnResult({data:i,error:null})})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}};return this.lock==null?t():this._acquireLock(this.lockAcquireTimeout,t)}async _regenerateRecoveryCodes(){ro(this.experimental);try{return await this._useSession(async e=>{let{data:t,error:n}=e;if(n)return this._returnResult({data:null,error:n});let{data:r,error:i}=await L(this.fetch,`POST`,`${this.url}/factors/recovery-codes/regenerate`,{headers:this.headers,jwt:t?.session?.access_token});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async _unenrollRecoveryCodes(){ro(this.experimental);try{return await this._useSession(async e=>{let{data:t,error:n}=e;if(n)return this._returnResult({data:null,error:n});let{data:r,error:i}=await L(this.fetch,`DELETE`,`${this.url}/factors/recovery-codes`,{headers:this.headers,jwt:t?.session?.access_token});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?await L(this.fetch,`GET`,`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:n.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new Ji})})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async _approveAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new Ji});let a=await L(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`approve`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&Sa()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async _denyAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new Ji});let a=await L(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`deny`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&Sa()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async _listOAuthGrants(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;return n?this._returnResult({data:null,error:n}):t?await L(this.fetch,`GET`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new Ji})})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?(await L(this.fetch,`DELETE`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:n.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new Ji})})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async fetchJwk(e,t={keys:[]}){let n=t.keys.find(t=>t.kid===e);if(n)return n;let r=Date.now();if(n=this.jwks.keys.find(t=>t.kid===e),n&&this.jwks_cached_at+6e5>r)return n;let{data:i,error:a}=await L(this.fetch,`GET`,`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=r,n=i.keys.find(t=>t.kid===e),!n)?null:n}async getClaims(e,t={}){try{let n=e;if(!n){let{data:e,error:t}=await this.getSession();if(t||!e.session)return this._returnResult({data:null,error:t});n=e.session.access_token}let{header:r,payload:i,signature:a,raw:{header:o,payload:s}}=Ma(n);if(!t?.allowExpired)try{$a(i.exp)}catch(e){throw new sa(e instanceof Error?e.message:`JWT validation failed`)}let c=!r.alg||r.alg.startsWith(`HS`)||!r.kid||!(`crypto`in globalThis&&`subtle`in globalThis.crypto)?null:await this.fetchJwk(r.kid,t?.keys?{keys:t.keys}:t?.jwks);if(!c){let{error:e}=await this.getUser(n);if(e)throw e;return{data:{claims:i,header:r,signature:a},error:null}}let l=eo(r.alg),u=await crypto.subtle.importKey(`jwk`,c,l,!0,[`verify`]);if(!await crypto.subtle.verify(l,u,a,va(`${o}.${s}`)))throw new sa(`Invalid JWT signature`);return{data:{claims:i,header:r,signature:a},error:null}}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async signInWithPasskey(e){try{if(!Fo())return this._returnResult({data:null,error:new Ki(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyAuthentication({options:{captchaToken:e?.options?.captchaToken}});if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await Lo({publicKey:jo(t.options),signal:e?.options?.signal??ko.createNewAbortSignal(),mediation:e?.options?.mediation});if(i||!r)return this._returnResult({data:null,error:i??new Ki(`WebAuthn ceremony failed`,null)});let a=No(r);return this._verifyPasskeyAuthentication({challengeId:t.challenge_id,credential:a})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async registerPasskey(e){try{if(!Fo())return this._returnResult({data:null,error:new Ki(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyRegistration();if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await Io({publicKey:Ao(t.options),signal:e?.options?.signal??ko.createNewAbortSignal()});if(i||!r)return this._returnResult({data:null,error:i??new Ki(`WebAuthn ceremony failed`,null)});let a=Mo(r);return this._verifyPasskeyRegistration({challengeId:t.challenge_id,credential:a})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyRegistration(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new Ji});let{data:r,error:i}=await L(this.fetch,`POST`,`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:t.access_token,body:{}});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new Ji});let{data:i,error:a}=await L(this.fetch,`POST`,`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:n.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyAuthentication(e){try{let{data:t,error:n}=await L(this.fetch,`POST`,`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:e?.options?.captchaToken}}});return n?this._returnResult({data:null,error:n}):this._returnResult({data:t,error:null})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyAuthentication(e){try{let{data:t,error:n}=await L(this.fetch,`POST`,`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:R});return n?this._returnResult({data:null,error:n}):(t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,t.session)),this._returnResult({data:t,error:null}))}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async _listPasskeys(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new Ji});let{data:r,error:i}=await L(this.fetch,`GET`,`${this.url}/passkeys`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new Ji});let{data:i,error:a}=await L(this.fetch,`PATCH`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}async _deletePasskey(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new Ji});let{error:i}=await L(this.fetch,`DELETE`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,noResolveJson:!0});return i?this._returnResult({data:null,error:i}):this._returnResult({data:null,error:null})})}catch(e){if(I(e))return this._returnResult({data:null,error:e});throw e}}};qo.nextInstanceID={};var Jo=qo,Yo=`2.117.3`,Xo=``,Zo;if(typeof Deno<`u`)Xo=`deno`,Zo=Deno.version?.deno;else if(typeof document<`u`)Xo=`web`;else if(typeof navigator<`u`&&navigator.product===`ReactNative`)Xo=`react-native`;else{var Qo;Xo=`node`;let e=globalThis.process;Zo=e==null||(Qo=e.version)==null?void 0:Qo.replace(/^v/,``)}var $o=[`runtime=${Xo}`];Zo&&$o.push(`runtime-version=${Zo}`);var es={headers:{"X-Client-Info":`supabase-js/${Yo}; ${$o.join(`; `)}`}},ts={schema:`public`},ns={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:`implicit`},rs={},is={enabled:!1,respectSamplingDecision:!0};function as(e){if(!e||typeof e!=`string`)return null;let t=e.split(`-`);if(t.length!==4)return null;let[n,r,i,a]=t;if(n.length!==2||r.length!==32||i.length!==16||a.length!==2)return null;let o=/^[0-9a-f]+$/i;return!o.test(n)||!o.test(r)||!o.test(i)||!o.test(a)||r===`00000000000000000000000000000000`||i===`0000000000000000`?null:{version:n,traceId:r,parentId:i,traceFlags:a,isSampled:(parseInt(a,16)&1)==1}}function os(e,t){if(!e||!t||t.length===0)return!1;let n;if(e instanceof URL)n=e;else try{n=new URL(e)}catch{return!1}for(let e of t)try{if(typeof e==`string`){if(ss(n.hostname,e))return!0}else if(e instanceof RegExp){if(e.test(n.hostname))return!0}else if(typeof e==`function`&&e(n))return!0}catch{continue}return!1}function ss(e,t){if(t===e)return!0;if(t.startsWith(`*.`)){let n=t.slice(2);if(e.endsWith(n)&&(e===n||e.endsWith(`.`+n)))return!0}return!1}function cs(e){let t=[];try{let n=new URL(e);t.push(n.hostname)}catch{}return t.push(`*.supabase.co`,`*.supabase.in`),t.push(`localhost`,`127.0.0.1`,`[::1]`),t}function ls(e){"@babel/helpers - typeof";return ls=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ls(e)}function us(e,t){if(ls(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(ls(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ds(e){var t=us(e,`string`);return ls(t)==`symbol`?t:t+``}function fs(e,t,n){return(t=ds(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ps(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ps(Object(n),!0).forEach(function(t){fs(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ps(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ms=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),hs=()=>Headers,gs=e=>e.startsWith(`sb_publishable_`)||e.startsWith(`sb_secret_`),_s=`sb_temp_`,vs=new Set,ys=e=>{if(!e.startsWith(`sb_`)||gs(e)||e.startsWith(_s))return;let t=e.match(/^sb_[a-zA-Z0-9]+_/)?.[0]??`unknown`;vs.has(t)||(vs.add(t),console.warn(`@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type.`))},bs=(e,t,n,r,i,a)=>{let o=ms(r),s=hs(),c=i?.enabled===!0,l=i?.respectSamplingDecision!==!1,u=c?cs(t):null,d=!(a?.omitApiKeyAsBearer&&gs(e));return async(t,r)=>{let i=await n(),a=new s(r?.headers);if(a.has(`apikey`)||a.set(`apikey`,e),!a.has(`Authorization`)){let t=i??(d?e:null);t&&a.set(`Authorization`,`Bearer ${t}`)}if(u){let e=Cs(t,u,l);e&&(e.traceparent&&!a.has(`traceparent`)&&a.set(`traceparent`,e.traceparent),e.tracestate&&!a.has(`tracestate`)&&a.set(`tracestate`,e.tracestate),e.baggage&&!a.has(`baggage`)&&a.set(`baggage`,e.baggage))}return o(t,H(H({},r),{},{headers:a}))}},xs=!1,Ss=!1;function Cs(e,t,n){let r=Ft();if(!r)return xs||(xs=!0,console.warn("@supabase/supabase-js: tracePropagation is enabled but the tracing runtime is not loaded, so trace headers will not be attached. Add `import '@supabase/supabase-js/tracing'` at your application entry point (requires the OpenTelemetry API package to be installed). The CDN/UMD build does not support trace propagation.")),null;if(!os(typeof e==`string`||e instanceof URL?e:e.url,t))return null;let i=r();if(!i||!i.traceparent){var a;if(i!=null&&(a=i.carrierKeys)!=null&&a.length&&!Ss){Ss=!0;let e=i.carrierKeys.includes(`sentry-trace`)?" Sentry detected: set `propagateTraceparent: true` in Sentry.init() to emit it.":` Configure your tracing SDK to emit W3C trace context on outgoing requests.`;console.warn(`@supabase/supabase-js: tracePropagation is enabled and a tracing SDK is active, but its propagator wrote [${i.carrierKeys.join(`, `)}] and no W3C traceparent header, so trace headers will not be attached.`+e)}return null}if(n){let e=as(i.traceparent);if(e&&!e.isSampled)return{traceparent:i.traceparent}}return i}function ws(e){return typeof e==`boolean`?{enabled:e}:e}function Ts(e){return e.endsWith(`/`)?e:e+`/`}var Es=!1;function Ds(e){Es||typeof e!=`object`||!e||!(`schema`in e)||e.schema===void 0||(Es=!0,console.warn(`@supabase/supabase-js: The "schema" option must be nested under "db", e.g. createClient(url, key, { db: { schema: 'myschema' } }). A top-level "schema" is ignored and queries go to the default schema.`))}function Os(e,t){let{db:n,auth:r,realtime:i,global:a}=e,{db:o,auth:s,realtime:c,global:l}=t,u=ws(e.tracePropagation),d=ws(t.tracePropagation),f={db:H(H({},o),n),auth:H(H({},s),r),realtime:H(H({},c),i),storage:{},global:H(H(H({},l),a),{},{headers:H(H({},l?.headers??{}),a?.headers??{})}),tracePropagation:{enabled:u?.enabled??d?.enabled??!1,respectSamplingDecision:u?.respectSamplingDecision??d?.respectSamplingDecision??!0},accessToken:async()=>``};return e.accessToken?f.accessToken=e.accessToken:delete f.accessToken,f}function ks(e){let t=e?.trim();if(!t)throw Error(`supabaseUrl is required.`);if(!t.match(/^https?:\/\//i))throw Error(`Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.`);try{return new URL(Ts(t))}catch{throw Error(`Invalid supabaseUrl: Provided URL is malformed.`)}}var As=class extends Jo{constructor(e){super(e)}},js=class{constructor(e,t,n){this.supabaseUrl=e,this.supabaseKey=t;let r=ks(e);if(!t)throw Error(`supabaseKey is required.`);ys(t),Ds(n),this.realtimeUrl=new URL(`realtime/v1`,r),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace(`http`,`ws`),this.authUrl=new URL(`auth/v1`,r),this.storageUrl=new URL(`storage/v1`,r),this.functionsUrl=new URL(`functions/v1`,r);let i=`sb-${r.hostname.split(`.`)[0]}-auth-token`,a={db:ts,realtime:rs,auth:H(H({},ns),{},{storageKey:i}),global:es,tracePropagation:is},o=Os(n??{},a);this.settings=o,this.storageKey=o.auth.storageKey??``,this.headers=o.global.headers??{},o.accessToken?(this.accessToken=o.accessToken,this.auth=new Proxy({},{get:(e,t)=>{throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`)}})):this.auth=this._initSupabaseAuthClient(o.auth??{},this.headers,o.global.fetch),this.fetch=bs(t,e,this._getSessionToken.bind(this),o.global.fetch,o.tracePropagation),this.functionsFetch=bs(t,e,this._getSessionToken.bind(this),o.global.fetch,o.tracePropagation,{omitApiKeyAsBearer:!0}),this.realtime=this._initRealtimeClient(H({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},o.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(e=>this.realtime.setAuth(e)).catch(e=>console.warn(`Failed to set initial Realtime auth token:`,e)),this.rest=new pn(new URL(`rest/v1`,r).href,{headers:this.headers,schema:o.db.schema,fetch:this.fetch,timeout:o.db.timeout,urlLengthLimit:o.db.urlLengthLimit,retry:o.db.retry}),this.storage=new Ni(this.storageUrl.href,this.headers,this.fetch,n?.storage),o.accessToken||this._listenForAuthEvents()}get functions(){return new Wt(this.functionsUrl.href,{headers:this.headers,customFetch:this.functionsFetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}getOpenApiSpec(){return this.rest.getOpenApiSpec()}rpc(e,t={},n={head:!1,get:!1,count:void 0}){return this.rest.rpc(e,t,n)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getSessionToken(){var e=this;if(e.accessToken)return await e.accessToken();let{data:t}=await e.auth.getSession();return t.session?.access_token??null}async _getAccessToken(){var e=this;return await e._getSessionToken()??e.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,storageKey:a,flowType:o,lock:s,debug:c,throwOnError:l,experimental:u,lockAcquireTimeout:d,skipAutoInitialize:f},p,m){let h={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new As({url:this.authUrl.href,headers:H(H({},h),p),storageKey:a,autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,flowType:o,lock:s,debug:c,throwOnError:l,experimental:u,fetch:m,lockAcquireTimeout:d,skipAutoInitialize:f,hasCustomAuthorizationHeader:Object.keys(this.headers).some(e=>e.toLowerCase()===`authorization`)})}_initRealtimeClient(e){return new Nr(this.realtimeUrl.href,H(H({},e),{},{params:H(H({},{apikey:this.supabaseKey}),e?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((e,t)=>{this._handleTokenChanged(e,`CLIENT`,t?.access_token)})}_handleTokenChanged(e,t,n){(e===`TOKEN_REFRESHED`||e===`SIGNED_IN`||e===`INITIAL_SESSION`)&&this.changedAccessToken!==n?(this.changedAccessToken=n,this.realtime.setAuth(n)):e===`SIGNED_OUT`&&(this.realtime.setAuth(),t==`STORAGE`&&this.auth.signOut(),this.changedAccessToken=void 0)}},Ms=(e,t,n)=>new js(e,t,n);function Ns(){if(typeof window<`u`||globalThis.Deno!==void 0)return!1;let e=globalThis.process;if(!e)return!1;let t=e.version;if(t==null)return!1;let n=t.match(/^v(\d+)\./);return n?parseInt(n[1],10)<=20:!1}Ns()&&console.warn(`⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715`);var Ps=`/assets/loanscreen-Cc3HwyDm.png`,Fs=`/assets/happypeople-BnE6yAh0.webp`,Is=`/assets/3333-D9f-MVVF.png`,Ls=`https://jdqxrbqlpgxjkpgshfjv.supabase.co`,Rs=`sb_publishable_-0W_RizAWJL7qfNt_j-MdQ_ojilHP1C`,zs=``;try{let e=new URL(Ls);if(![`https:`,`http:`].includes(e.protocol)||!e.hostname)throw Error(`URL must use HTTPS or HTTP.`);if(!Rs)throw Error(`VITE_SUPABASE_PUBLISHABLE_KEY is missing.`)}catch(e){zs=`Invalid frontend Supabase configuration: ${e.message} Set VITE_SUPABASE_URL to your project's base URL (https://YOUR_PROJECT.supabase.co) in webapp/frontend/.env and restart Vite.`}var Bs=null;if(!zs)try{Bs=Ms(Ls,Rs)}catch(e){zs=`Unable to initialize Supabase: ${e.message}`}async function Vs(e,t={}){if(!Bs)throw Error(`Supabase is not configured in the React .env file.`);let{data:{session:n},error:r}=await Bs.auth.getSession();if(r||!n?.access_token)throw Error(`Please sign in to ZapDocs again.`);return await fetch(e,{...t,headers:{...t.body?{"Content-Type":`application/json`}:{},...t.headers,Authorization:`Bearer ${n.access_token}`}})}async function Hs(e,t={}){let n=await Vs(e,t),r=await n.json().catch(()=>null);if(!n.ok)throw Error(r?.error||r?.details||`Request failed (${n.status})`);return r}var Us=[{name:`Loan Info`,fields:[[`LOAN_NUMBER`,`Loan Number`],[`LOAN_AMOUNT`,`Loan Amount ($)`],[`INTEREST_RATE`,`Interest Rate (%)`],[`MONTHLY_PAYMENT`,`Regular Monthly Interest Payment ($)`],[`NUMBER_OF_PAYMENTS`,`Number of Payments (Note table)`],[`LOAN_TERM`,`Loan Term (e.g. 36 months)`],[`BALLOON_PAYMENT`,`Balloon Payment ($)`],[`COMMISSION`,`Commission ($)`],[`DEFAULT_RATE`,`Default Rate (%)`],[`LOAN_POSITION`,`Loan Position (e.g. 1st)`]]},{name:`Dates`,fields:[[`NOTE_DATE`,`Note Date (e.g. August 11, 2026)`],[`CLOSING_DATE`,`Closing Date`],[`FIRST_PAYMENT`,`First Payment Date`],[`MATURITY_DATE`,`Maturity Date`],[`SERVICING_DATE`,`Servicing Agreement Date (e.g. August 11, 2026)`]]},{name:`Prepayment (FL Note, Sec. 5)`,fields:[[`PREPAID_NUMBER_MONTHS`,`Number of Prepaid Months`],[`PREPAID_PAYMENTS`,`Prepaid Payments Total ($)`],[`FIRST_PREPAID_MONTH`,`First Prepaid Month (e.g. September 2026)`],[`LAST_PREPAID_MONTH`,`Last Prepaid Month (e.g. February 2027)`],[`FIRST_PAYMENT_DUE`,`First Payment Due to Servicer (date)`]]},{name:`California Note`,states:[`CA`],fields:[[`PREPAYMENT_PENALTY`,`Prepayment Penalty (full clause / formula)`],[`PREPAID_NUMBER_MONTHS`,`Number of Prepaid Months`],[`PREPAID_PAYMENTS`,`Total Prepaid Payments ($)`],[`FIRST_PREPAID`,`First Prepaid Period (e.g. November 2026)`],[`LAST_PREPAID`,`Last Prepaid Period (e.g. April 2027)`],[`FIRST_PAYMENT_DATE`,`First Payment Date to Servicer`]]},{name:`Property`,fields:[[`PROPERTY_ADDRESS`,`Property Address`],[`PROPERTY_CITY`,`Property City`],[`PROPERTY_STATE`,`Property State`],[`PROPERTY_ZIP`,`Property Zip`],[`COUNTY`,`County`],[`APN`,`APN (Parcel Number)`],[`TITLE_NUMBER`,`Title Number`],[`TRUSTEE`,`Trustee (CA only)`],[`TRUSTEE_ADDRESS`,`Trustee Address (CA Deed of Trust)`],[`CITY`,`Execution City (CA Note header)`],[`INTEREST_COMMENCE`,`Interest Commencement Date`],[`PROPERTY_TYPE`,`Property Type`]]},{name:`Brokerage`,fields:[[`BROKERAGE`,`Brokerage / Broker Legal Name`],[`BROKERAGE_REP`,`Broker Name (footer)`],[`NMLS`,`NMLS License Number`],[`DRE`,`California DRE License Number`],[`BROKERAGE_NAME`,`Brokerage Name (Florida & California recording information)`],[`BROKERAGE_ADDRESS`,`Brokerage Street Address`],[`BROKERAGE_CITYSTATEZIP`,`Brokerage City, State ZIP`],[`BROKERAGE_PHONE`,`Brokerage Phone`],[`BROKERAGE_FAX`,`Brokerage Fax`],[`BROKER_REPRESENTATIVE`,`Broker Representative (legacy / optional)`]]},{name:`Borrower`,fields:[[`VESTING`,`Vesting / Borrower Entity Name`],[`MAILING_ADDRESS`,`Borrower Mailing Address (in full)`],[`BORROWER_1`,`Borrower 1 Name`],[`BORROWER_2`,`Borrower 2 Name (optional)`],[`TAX_ID`,`Borrower Tax ID / SSN`],[`TAX_ID_2`,`Borrower 2 Tax ID (CA boiler, if applicable)`],[`SIGNATURE_FOOTER`,`Signer 1 Name`],[`SIGNATURE_TITLE`,`Signer 1 Title`],[`SIGNATURE_FOOTER_2`,`Signer 2 Name (optional)`],[`SIGNATURE_TITLE_2`,`Signer 2 Title (optional)`]]},{name:`Lender`,fields:[[`LENDER`,`Lender Vesting`],[`LENDER_NAME`,`Lender Name or Individual`],[`LENDER_ADDRESS`,`Lender Mailing Address (in full)`],[`LENDER_OWNERSHIP`,`Lender Ownership % (e.g. 57.16%)`],[`LENDER_ENTITY_DESCRIPTION`,`Lender Entity Description (if applicable)`]]},{name:`Servicer`,fields:[[`SERVICER`,`Servicer Name`],[`SERVICER_ADDRESS`,`Servicer Address`]]},{name:`Disclosure`,fields:[[`LTV`,`Loan-to-Value % (e.g. 65%)`],[`MARKET_VALUE`,`Estimated Market Value ($)`],[`CURRENT_ENCUMBRANCE`,`Current Encumbrance ($)`],[`FUTURE_ENCUMBRANCE`,`Encumbrance After This Loan ($)`],[`FUTURE_EQUITY`,`Borrower's Equity After This Loan ($)`],[`GROSS_INCOME`,`Borrower Gross Income ($)`],[`GROSS_SALARY`,`Borrower Gross Salary ($)`],[`MONTHLY_EXPENSES`,`Borrower Monthly Expenses ($)`],[`ESCROW_NAME`,`Escrow Holder Name`],[`ESCROW_ADDRESS`,`Escrow Holder Address`],[`LENDER_SHARE_AMOUNT`,`Lender Share Amount`],[`LENDER_INTEREST_RATE`,`Lender Interest Rate`],[`LENDER_PAYMENT_AMOUNT`,`Lender Payment Amount`],[`LENDER_BALLOON_PAYMENT`,`Lender Balloon Payment`],[`SERVICING_FEE`,`Servicing Fee`],[`SERVICER_PHONE`,`Servicer Phone`],[`APPRAISER_NAME`,`Appraiser Name`],[`APPRAISAL_DATE`,`Appraisal Date`],[`APPRAISER_ADDRESS`,`Appraiser Address`],[`ANNUAL_PROPERTY_TAXES`,`Annual Property Taxes`],[`PROPERTY_SQFT`,`Property Sqft`],[`PROPERTY_AGE`,`Property Age`],[`FRAME_TYPE`,`Frame Type`],[`BORROWER_OCCUPATION`,`Borrower Occupation`],[`BORROWER_OCCUPATION_2`,`Borrower Occupation 2`],[`BORROWER_EMPLOYER`,`Borrower Employer`],[`BORROWER_EMPLOYER_2`,`Borrower Employer 2`],[`BORROWER_AGE`,`Borrower Age`],[`BORROWER_AGE_2`,`Borrower Age 2`],[`MAILING_ADDRESS_2`,`Mailing Address 2`],[`GROSS_SALARY_2`,`Gross Salary 2`],[`CURRENT_LOAN_POSITION`,`Current Loan Position`],[`CURRENT_INTEREST_RATE`,`Current Interest Rate`],[`CURRENT_LOAN_AMOUNT`,`Current Loan Amount`],[`CURRENT_LOAN_BALANCE`,`Current Loan Balance`],[`CURRENT_MONTHLY_PAYMENT`,`Current Monthly Payment`],[`CURRENT_MATURITY_DATE`,`Current Maturity Date`],[`CURRENT_BALLOON_PAYMENT`,`Current Balloon Payment`],[`LENDER_COSTS_TOTAL`,`Lender Costs Total`],[`BORROWER_COSTS_TOTAL`,`Borrower Costs Total`],[`SENIOR_REMAINING_TOTAL`,`Senior Remaining Total`],[`SENIOR_EXPECTED_TOTAL`,`Senior Expected Total`],[`LTV_TOTAL_SENIOR`,`Ltv Total Senior`],[`LTV_TOTAL_DEBT`,`Ltv Total Debt`],[`BROKER_CAPACITY`,`Broker Capacity`],[`SERVICING_ARRANGEMENT`,`Servicing Arrangement`],[`BORROWER_BANKRUPTCY`,`Borrower Bankruptcy`],[`APPRAISER_RELATIONSHIP`,`Appraiser Relationship`],[`PROPERTY_OWNER_OCCUPIED`,`Property Owner Occupied`],[`PROPERTY_TAXES_DELINQUENT`,`Property Taxes Delinquent`],[`PROPERTY_TAXES_DELINQUENT_AMOUNT`,`Property Taxes Delinquent Amount`],[`PROPERTY_TAXES_SOURCE`,`Property Taxes Source`],[`ESTIMATED_GROSS_ANNUAL_PROPERTY_INCOME`,`Estimated Gross Annual Property Income`],[`ESTIMATED_NET_ANNUAL_PROPERTY_INCOME`,`Estimated Net Annual Property Income`],[`BORROWER_EMPLOYMENT_YEARS`,`Borrower Employment Years`],[`BORROWER_EMPLOYMENT_YEARS_2`,`Borrower Employment Years 2`],[`BROKER_SIGNATURE_DATE`,`Broker Signature Date`],[`LENDER_SIGNATURE_DATE`,`Lender Signature Date`]]}],Ws=Us.flatMap(e=>e.fields.map(e=>e[0])),Gs=[`COUNT`,`START`,`DESCRIPTION`,`RATE`,`AMOUNT`],Ks=[`COUNT`,`START`,`BORROWER_RATE`,`BORROWER_PAYMENT`,`LENDER_RATE`,`LENDER_PAYMENT`,`LENDER_SHARE`];function qs(){return Object.fromEntries(Ks.map(e=>[e,``]))}function Js(){let e={};return Gs.forEach(t=>e[t]=``),e}function Ys(){let e={};return Ws.forEach(t=>e[t]=``),e.STATE=`FL`,e.PAYMENT_STRUCTURE=`interest_only`,e.DEFERRED_INTEREST=``,e.PAYMENT_ROWS=[Js()],e.LENDER_DISCLOSURE_ROWS=[qs()],e}function Xs(e){let t=String(e??``).replace(/[$,%\s]/g,``);if(!t)return NaN;let n=Number(t);return Number.isFinite(n)?n:NaN}function Zs(e){let t=String(e??``).trim();if(!t)return null;let n=t.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(n){let e=new Date(Date.UTC(+n[1],n[2]-1,+n[3]));return e.getUTCFullYear()===+n[1]&&e.getUTCMonth()===n[2]-1&&e.getUTCDate()===+n[3]?e:null}let r=t.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);if(r){let e=new Date(Date.UTC(+r[3],r[1]-1,+r[2]));return e.getUTCFullYear()===+r[3]&&e.getUTCMonth()===r[1]-1&&e.getUTCDate()===+r[2]?e:null}let i=new Date(t);return Number.isNaN(i.getTime())?null:new Date(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate()))}function Qs(e,t){if(!e)return null;let n=e.getUTCFullYear(),r=e.getUTCMonth(),i=e.getUTCDate(),a=new Date(Date.UTC(n,r+t,1)),o=new Date(Date.UTC(a.getUTCFullYear(),a.getUTCMonth()+1,0)).getUTCDate();return new Date(Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),Math.min(i,o)))}function $s(e){return e?`${String(e.getUTCMonth()+1).padStart(2,`0`)}/${String(e.getUTCDate()).padStart(2,`0`)}/${e.getUTCFullYear()}`:``}function ec(e){return Number.isFinite(e)?e.toLocaleString(`en-US`,{style:`currency`,currency:`USD`}):`—`}function tc(e){let t=Zs(e);return t?`${t.getUTCFullYear()}-${String(t.getUTCMonth()+1).padStart(2,`0`)}-${String(t.getUTCDate()).padStart(2,`0`)}`:``}function nc(e){let t=Xs(e.LOAN_AMOUNT),n=Xs(e.INTEREST_RATE);return t>0&&n>=0&&n<=100?Math.round((t*n/1200+2**-52)*100)/100:null}function rc(e){let t=Xs(e.LOAN_AMOUNT),n=Xs(e.INTEREST_RATE),r=Zs(e.FIRST_PAYMENT)||Zs(e.FIRST_PAYMENT_DATE)||Zs(e.FIRST_PAYMENT_DUE),i=Array.isArray(e.PAYMENT_ROWS)?e.PAYMENT_ROWS:[],a=e.PAYMENT_STRUCTURE||`interest_only`;if(!(t>0)||!(n>=0)||n>100||!r)return{valid:!1,message:`Enter a valid Loan Amount, contractual Interest Rate and First Payment Date.`,rows:[],installments:[]};let o=e=>Math.round((e+2**-52)*100)/100,s=o(t*n/1200),c=[],l=[],u=[],d=0,f=0;for(let e=0;e<i.length;e++){let p=i[e];if(!Object.values(p||{}).some(e=>String(e??``).trim()))continue;let m=Xs(p.COUNT),h=String(p.RATE??``).trim()===``?n:Xs(p.RATE);if(!Number.isInteger(m)||m<1||m>600||!(h>=0)||h>100)return{valid:!1,message:`Row ${e+1}: enter valid payment count and rate.`,rows:[],installments:[]};let g=Zs(p.START)||Qs(r,d);if(!g)return{valid:!1,message:`Row ${e+1}: invalid starting date.`,rows:[],installments:[]};let _=String(p.DESCRIPTION||``).trim()||`Monthly Beginning ${$s(g)}`,v=String(p.AMOUNT??``).trim()!==``,y=v?Xs(p.AMOUNT):NaN;if(v&&(!Number.isFinite(y)||y<0))return{valid:!1,message:`Row ${e+1}: payment must be nonnegative.`,rows:[],installments:[]};let b=o(v?y:t*h/1200);if(/balloon|payoff|maturity/i.test(_)||m===1&&v&&b>=t*.5){m!==1&&u.push(`Row ${e+1}: a balloon row should have a count of 1.`),l.push({...p,COUNT:String(m),START:$s(g),DESCRIPTION:_,RATE:String(h),AMOUNT:b.toFixed(2)});continue}for(let e=0;e<m;e++){let n=Qs(g,e),r=o(Math.max(0,s-b));a===`neg_am`?f=o(f+r):r>.005&&u.push(`Payment ${c.length+1} is ${ec(r)} below contractual interest; choose Deferred Interest or correct the schedule.`),b>s+.005&&u.push(`Payment ${c.length+1} exceeds interest; no principal reduction is assumed. Confirm how the excess is applied.`),c.push({number:c.length+1,date:$s(n),rate:h,interest:s,payment:b,balance:t,deferred:a===`neg_am`?r:0,negativeAm:a===`neg_am`&&r>.005})}if(l.push({...p,COUNT:String(m),START:$s(g),DESCRIPTION:_,RATE:String(h),AMOUNT:b.toFixed(2)}),d+=m,d>600)return{valid:!1,message:`Schedule exceeds 600 installments.`,rows:[],installments:[]}}let p=Zs(e.MATURITY_DATE),m=c.length?Zs(c[c.length-1].date):null;p&&m&&m>p&&u.push(`Scheduled installments extend beyond the maturity date.`);let h=String(e.BALLOON_PAYMENT??``).trim(),g=h?Xs(h):NaN;h&&(!Number.isFinite(g)||g<0)&&u.push(`Invalid balloon payment amount.`);let _=Number.isFinite(g)?o(g-t):NaN;return Number.isFinite(_)&&_<-.01&&u.push(`Balloon is below original principal, but the schedule contains no principal reductions.`),a===`neg_am`&&Number.isFinite(_)&&Math.abs(_-f)>.01&&Math.abs(_-f-s)>.01&&u.push(`Deferred interest is ${ec(f)}; stated balloon exceeds principal by ${ec(_)}. Reconcile the difference in the Note (fees, waiver, separate payoff or other charges).`),a!==`neg_am`&&Number.isFinite(_)&&_>.01&&Math.abs(_-s)>.01&&u.push(`Balloon includes ${ec(_)} above principal. Confirm what this amount represents.`),{valid:!0,rows:l,installments:c,endingBalance:t,deferredInterest:f,balloon:g,warnings:[...new Set(u)]}}var ic=[{key:`trustee`,label:`Trustee`,fields:[`TRUSTEE`,`TRUSTEE_ADDRESS`]},{key:`lender`,label:`Lender`,fields:[`LENDER`,`LENDER_NAME`,`LENDER_ADDRESS`,`LENDER_OWNERSHIP`]},{key:`servicer`,label:`Servicer`,fields:[`SERVICER`,`SERVICER_ADDRESS`]},{key:`escrow`,label:`Escrow holder`,fields:[`ESCROW_NAME`,`ESCROW_ADDRESS`]},{key:`brokerage`,label:`Brokerage`,fields:[`BROKERAGE`,`BROKERAGE_NAME`,`BROKERAGE_ADDRESS`,`BROKERAGE_CITYSTATEZIP`,`BROKERAGE_PHONE`,`BROKERAGE_FAX`,`NMLS`,`BROKERAGE_REP`,`BROKER_REPRESENTATIVE`,`DRE`]}];function U({name:e}){return(0,b.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.7`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:{brand:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`path`,{d:`m12 2 9 5v10l-9 5-9-5V7z`}),(0,b.jsx)(`path`,{d:`m7 8 10 4-5 3v4M7 8v4l5 3`})]}),grid:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`rect`,{x:`3`,y:`3`,width:`7`,height:`7`,rx:`1`}),(0,b.jsx)(`rect`,{x:`14`,y:`3`,width:`7`,height:`7`,rx:`1`}),(0,b.jsx)(`rect`,{x:`3`,y:`14`,width:`7`,height:`7`,rx:`1`}),(0,b.jsx)(`rect`,{x:`14`,y:`14`,width:`7`,height:`7`,rx:`1`})]}),folder:(0,b.jsx)(`path`,{d:`M3 7a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`}),file:(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(`path`,{d:`M6 3h8l4 4v14H6zM14 3v5h4M9 13h6M9 17h6`})}),plus:(0,b.jsx)(`path`,{d:`M12 5v14M5 12h14`}),arrow:(0,b.jsx)(`path`,{d:`M5 12h14m-6-6 6 6-6 6`}),check:(0,b.jsx)(`path`,{d:`m5 12 4 4L19 6`}),shield:(0,b.jsx)(`path`,{d:`m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6zM9 12l2 2 4-4`}),home:(0,b.jsx)(`path`,{d:`m3 10 9-7 9 7v10h-6v-7H9v7H3z`}),logout:(0,b.jsx)(`path`,{d:`M10 4H4v16h6m4-4 4-4-4-4m-6 4h12`}),users:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`circle`,{cx:`9`,cy:`8`,r:`3`}),(0,b.jsx)(`path`,{d:`M3 20v-3a6 6 0 0 1 12 0v3M16 5a3 3 0 0 1 0 6m1 3a5 5 0 0 1 4 5`})]})}[e]})}function ac({onHome:e,onSignOut:t,user:n}){let r=String(n?.email||``),i=String(n?.user_metadata?.full_name||n?.user_metadata?.name||r.split(`@`)[0]||`Your account`).trim()||`Your account`,a=i.split(/[\s._-]+/).filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join(``)||`U`,[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(`dashboard`),[u,d]=(0,_.useState)(``),[f,p]=(0,_.useState)(`all`),[m,h]=(0,_.useState)({key:``,direction:1}),[g,v]=(0,_.useState)({}),[y,x]=(0,_.useState)(!1),[ee,te]=(0,_.useState)(0),[S,ne]=(0,_.useState)(0);(0,_.useEffect)(()=>{if(c!==`loans`&&c!==`dashboard`)return;let e=!1;v({}),te(0),x(!0);let t=[`LOAN_NUMBER`,`BORROWER_1`,`BORROWER_2`,`VESTING`,`PROPERTY_ADDRESS`,`PROPERTY_CITY`,`PROPERTY_STATE`,`STATE`,`MATURITY_DATE`,`LOAN_AMOUNT`,`INTEREST_RATE`,`LOAN_POSITION`,`PROPERTY_TYPE`,`LENDER_NAME`,`LENDER`],n=e=>Object.fromEntries(t.map(t=>[t,e?.[t]??``]));return(async()=>{let t=0;for(let r=0;r<o.length&&!e;r+=6){let i=await Promise.all(o.slice(r,r+6).map(async e=>{if(e.fields&&Object.hasOwn(e.fields,`LOAN_NUMBER`)&&Object.hasOwn(e.fields,`PROPERTY_ADDRESS`)&&[`LOAN_AMOUNT`,`INTEREST_RATE`,`MATURITY_DATE`,`STATE`,`LOAN_POSITION`].every(t=>Object.hasOwn(e.fields,t)))return[e.id,n(e.fields)];try{let t=await Hs(`/api/loans/${e.id}`);return[e.id,n(t.fields)]}catch{return t++,[e.id,n(e.fields)]}}));e||v(e=>({...e,...Object.fromEntries(i)}))}e||(te(t),x(!1))})(),()=>{e=!0}},[c,o,S]);let[C,re]=(0,_.useState)(`Loan Details`),[w,ie]=(0,_.useState)(null),[T,E]=(0,_.useState)(Ys()),[ae,oe]=(0,_.useState)(``),[se,ce]=(0,_.useState)(`idle`),[D,O]=(0,_.useState)(!1),[le,ue]=(0,_.useState)(!1),[de,fe]=(0,_.useState)(`idle`),[pe,k]=(0,_.useState)(``),[me,he]=(0,_.useState)(``),[ge,_e]=(0,_.useState)(`Note`),[ve,ye]=(0,_.useState)(`idle`),[be,xe]=(0,_.useState)(`idle`),[Se,Ce]=(0,_.useState)(`idle`),[we,Te]=(0,_.useState)(``),[Ee,De]=(0,_.useState)(``),[Oe,ke]=(0,_.useState)(``),[Ae,je]=(0,_.useState)(!0),[Me,A]=(0,_.useState)(``);(0,_.useEffect)(()=>()=>{me&&URL.revokeObjectURL(me)},[me]);let Ne=Array.isArray(T.PAYMENT_ROWS)?T.PAYMENT_ROWS:[],Pe=Array.isArray(T.LENDER_DISCLOSURE_ROWS)?T.LENDER_DISCLOSURE_ROWS:[];function Fe(e,t,n){E(r=>{let i=[...r.LENDER_DISCLOSURE_ROWS||[]];return i[e]={...i[e],[t]:n},{...r,LENDER_DISCLOSURE_ROWS:i}})}function Ie(){E(e=>({...e,LENDER_DISCLOSURE_ROWS:[...e.LENDER_DISCLOSURE_ROWS||[],qs()]}))}function Le(e){E(t=>({...t,LENDER_DISCLOSURE_ROWS:(t.LENDER_DISCLOSURE_ROWS||[]).filter((t,n)=>n!==e)}))}function Re(){if(!j.valid){A(`Complete the Note payment schedule before copying it.`);return}let e=j.rows.map(e=>({COUNT:e.COUNT||``,START:e.START||``,BORROWER_RATE:e.RATE||``,BORROWER_PAYMENT:e.AMOUNT||``,LENDER_RATE:``,LENDER_PAYMENT:``,LENDER_SHARE:``}));Pe.some(e=>Object.values(e).some(e=>String(e||``).trim()))&&!window.confirm(`Replace the current lender disclosure rows with the Note rows? Lender-specific amounts will need to be entered again.`)||(E(t=>({...t,LENDER_DISCLOSURE_ROWS:e})),A(``))}let j=rc(T),[ze,Be]=(0,_.useState)([]),[Ve,He]=(0,_.useState)(`lender`),[Ue,We]=(0,_.useState)(``),[Ge,Ke]=(0,_.useState)(``),[qe,Je]=(0,_.useState)(``),[Ye,Xe]=(0,_.useState)(!1);ic.find(e=>e.key===Ve),ze.filter(e=>e.category===Ve);let Ze=(0,_.useCallback)(async()=>{let{data:e,error:t}=await Bs.from(`saved_profiles`).select(`id,category,name,fields`).order(`name`);if(t)throw t;Be(e||[])},[]);(0,_.useEffect)(()=>{Ze().catch(e=>Je(`Saved profiles unavailable: ${e.message}. Apply the included SQL migration.`))},[Ze]);async function Qe(){if(!(!Ue||!window.confirm(`Delete this reusable profile? Existing loans will not change.`))){Xe(!0);try{let{error:e}=await Bs.from(`saved_profiles`).delete().eq(`id`,Ue);if(e)throw e;We(``),await Ze(),Je(`Profile deleted.`)}catch(e){Je(e.message)}finally{Xe(!1)}}}function $e(){let e=nc(T);if(e===null){A(`Enter a valid principal and annual interest rate first.`);return}let t=String(T.MONTHLY_PAYMENT||``).trim();t&&Math.abs(Xs(t)-e)>.005&&!window.confirm(`Replace the entered monthly payment (${t}) with ${ec(e)}? This uses principal × annual rate ÷ 12 and does not change payment tiers or the balloon.`)||(E(t=>({...t,MONTHLY_PAYMENT:e.toFixed(2)})),A(``))}function et(){let e=Xs(T.LOAN_AMOUNT),t=Xs(T.INTEREST_RATE),n=Zs(T.FIRST_PAYMENT)||Zs(T.FIRST_PAYMENT_DATE)||Zs(T.FIRST_PAYMENT_DUE);if(!(e>0)||!(t>=0)||!n){A(`Enter Loan Amount, contractual Interest Rate and First Payment Date before auto-filling.`);return}let r=Zs(T.MATURITY_DATE),i=String(T.LOAN_TERM||``).match(/^(\d+)\s*(?:months?|mos?)?$/i);if(!r||r<n||t>100){A(`Enter valid maturity and rate. Maturity must not precede first payment.`);return}let a=0;for(;a<=600&&Qs(n,a)<r;)a++;if(Qs(n,a).getTime()!==r.getTime()){A(`Automatic calculation requires maturity on a scheduled monthly payment date. Enter irregular-period terms manually.`);return}if(i&&+i[1]!==a+1){A(`Loan term differs from the monthly payment dates (including maturity). Reconcile dates before calculating.`);return}if(!Number.isInteger(a)||a<1||a>600){A(`Enter a valid loan term in months or Maturity Date.`);return}if(Ne.some(e=>Object.values(e).some(e=>String(e||``).trim()))&&!window.confirm(`Replace the existing schedule, monthly payment and balloon with calculated draft terms?`))return;let o=T.PAYMENT_STRUCTURE||`interest_only`,s=[];if(o===`neg_am`){let r=Ne.find(e=>Object.values(e||{}).some(e=>String(e??``).trim())),i=Xs(r?.COUNT),o=Xs(r?.RATE);if(!Number.isInteger(i)||i<1||i>=a||!(o>=0)||o>=t){A(`For deferred interest, enter the first reduced-payment tier's number of payments and rate in Payment Schedule (for example, 6 payments at 6%), then select Auto-fill.`);return}let c=String(r?.AMOUNT??``).trim(),l=c?Xs(c):NaN;if(c&&(!Number.isFinite(l)||l<0)){A(`Enter a valid reduced payment amount, or leave it blank to calculate from the reduced rate.`);return}s.push({COUNT:String(i),START:$s(n),DESCRIPTION:``,RATE:String(o),AMOUNT:c?l.toFixed(2):(Math.round(e*o/12)/100).toFixed(2)}),s.push({COUNT:String(a-i),START:$s(Qs(n,i)),DESCRIPTION:``,RATE:String(t),AMOUNT:(Math.round(e*t/12)/100).toFixed(2)})}else s.push({COUNT:String(a),START:$s(n),DESCRIPTION:``,RATE:String(t),AMOUNT:(Math.round(e*t/12)/100).toFixed(2)});let c=nc(T),l=e=>Math.round((e+2**-52)*100)/100,u=rc({...T,PAYMENT_ROWS:s,BALLOON_PAYMENT:``});if(!u.valid){A(u.message);return}let d=o===`prepaid`?Xs(T.PREPAID_NUMBER_MONTHS):0;if(!Number.isInteger(d)||d<0||d>a||o===`prepaid`&&d===0){A(`Enter prepaid months between 1 and the number of regular installments.`);return}let f=window.confirm(`Include one full month's final interest in the balloon? OK = principal + final interest + deferred interest; Cancel = principal + deferred interest only. Confirm the Note's maturity terms.`),p=l(e+u.deferredInterest+(f?c:0)),m=e=>e.toLocaleDateString(`en-US`,{month:`long`,year:`numeric`,timeZone:`UTC`}),h=o===`prepaid`?{PREPAID_PAYMENTS:l(c*d).toFixed(2),FIRST_PREPAID_MONTH:m(n),LAST_PREPAID_MONTH:m(Qs(n,d-1)),FIRST_PREPAID:m(n),LAST_PREPAID:m(Qs(n,d-1)),FIRST_PAYMENT_DUE:$s(Qs(n,d)),FIRST_PAYMENT_DATE:$s(Qs(n,d))}:{};E(e=>({...e,...h,MONTHLY_PAYMENT:c.toFixed(2),BALLOON_PAYMENT:p.toFixed(2),NUMBER_OF_PAYMENTS:String(a),PAYMENT_ROWS:s})),A(``)}let tt=(0,_.useCallback)(async()=>{let e=await Hs(`/api/loans`);if(!Array.isArray(e))throw Error(`The server did not return a loan list. Check your Vite API proxy.`);return s(e),e},[]);(0,_.useEffect)(()=>{(async()=>{try{let e=await tt();e.length>0&&(await nt(e[0].id),l(`dashboard`))}catch(e){A(e.message||`Unable to load loans.`)}finally{je(!1)}})()},[]);async function nt(e){ie(e),l(`information`);let t;try{t=await Hs(`/api/loans/${e}`),A(``)}catch(e){A(e.message||`Unable to open loan.`);return}let n={...Ys(),...t.fields};n.DEFERRED_INTEREST=``,t.fields?.PAYMENT_STRUCTURE||(n.PAYMENT_STRUCTURE=t.fields?.PREPAID_NUMBER_MONTHS||t.fields?.PREPAID_PAYMENTS?`prepaid`:`interest_only`),(!Array.isArray(n.PAYMENT_ROWS)||n.PAYMENT_ROWS.length===0)&&(n.PAYMENT_ROWS=[Js()]),(!Array.isArray(n.LENDER_DISCLOSURE_ROWS)||n.LENDER_DISCLOSURE_ROWS.length===0)&&(n.LENDER_DISCLOSURE_ROWS=[qs()]),E(n),oe(t.label||``),ce(`idle`)}async function rt(){try{let e=await Hs(`/api/loans`,{method:`POST`});await tt(),ie(e.id),l(`information`),re(`Loan Details`),E(Ys()),oe(e.label||`New Loan`),ce(`idle`),A(``)}catch(e){A(e.message||`Unable to create loan.`)}}async function it(e,t){if(t.stopPropagation(),window.confirm(`Delete this loan? This can't be undone.`))try{await Hs(`/api/loans/${e}`,{method:`DELETE`});let t=await tt();w===e&&(t.length>0?await nt(t[0].id):(ie(null),E(Ys()),oe(``),l(`loans`))),A(``)}catch(e){A(e.message||`Unable to delete loan.`)}}function at(e,t){E(n=>({...n,[e]:t}))}function ot(e,t,n){E(r=>{let i=[...Array.isArray(r.PAYMENT_ROWS)?r.PAYMENT_ROWS:[]];return i[e]={...i[e],[t]:n},{...r,PAYMENT_ROWS:i}})}function st(){E(e=>({...e,PAYMENT_ROWS:[...Array.isArray(e.PAYMENT_ROWS)?e.PAYMENT_ROWS:[],{...Js(),COUNT:`1`,RATE:e.INTEREST_RATE||``}]}))}function ct(e){E(t=>{let n=(Array.isArray(t.PAYMENT_ROWS)?t.PAYMENT_ROWS:[]).filter((t,n)=>n!==e);return{...t,PAYMENT_ROWS:n.length?n:[Js()]}})}function lt(e,t){E(n=>{let r=[...Array.isArray(n.PAYMENT_ROWS)?n.PAYMENT_ROWS:[]],i=e+t;return i<0||i>=r.length?n:([r[e],r[i]]=[r[i],r[e]],{...n,PAYMENT_ROWS:r})})}async function ut(){if(w){ce(`saving`);try{let e=await Hs(`/api/loans/${w}`,{method:`PUT`,body:JSON.stringify({fields:{...T,DEFERRED_INTEREST:``,PAYMENT_ROWS:j.valid?j.rows:Ne},label:ae})});oe(e.label),await tt(),ce(`saved`),setTimeout(()=>ce(`idle`),1500)}catch(e){ce(`error`),A(e.message||`Save failed.`)}}}async function dt(){if(!j.valid)throw Error(j.message);await Hs(`/api/loans/${w}`,{method:`PUT`,body:JSON.stringify({fields:{...T,DEFERRED_INTEREST:``,PAYMENT_ROWS:j.valid?j.rows:Ne},label:ae})}),await tt()}function ft(){ue(!1),he(``),k(``),fe(`idle`)}async function pt(e){if(w){fe(`loading`),k(``),he(``);try{await dt();let t=await Vs(`/api/loans/${w}/preview`,{method:`POST`,body:JSON.stringify({document:e})});if(!t.ok){let e=await t.json().catch(()=>({}));throw Error(e.error||`Document preview failed (${t.status}).`)}let n=await t.blob();if(!n.size||!t.headers.get(`Content-Type`)?.includes(`application/pdf`))throw Error(`Server did not return a valid PDF preview.`);he(URL.createObjectURL(n)),fe(`ready`)}catch(e){k(e.message||`Unable to preview the document.`),fe(`error`)}}}function mt(){let e=T.STATE===`CA`?`Note`:`Full Set`;_e(e),ue(!0),pt(e)}async function ht(){if(w){ye(`generating`),Te(``);try{await dt();let e=await Vs(`/api/loans/${w}/generate`,{method:`POST`});if(!e.ok){let t=await e.text();throw Error(t||`Server responded ${e.status}`)}let t=await e.blob(),n=T.LOAN_NUMBER||`loan`,r=window.URL.createObjectURL(t),i=document.createElement(`a`);i.href=r,i.download=`Loan_${n}_Documents.zip`,document.body.appendChild(i),i.click(),i.remove(),window.URL.revokeObjectURL(r),ye(`idle`)}catch(e){ye(`error`),Te(e.message||`Something went wrong generating the documents.`)}}}async function gt(){if(w){xe(`generating`),De(``);try{await dt();let e=await Vs(`/api/loans/${w}/generate-lender-instructions`,{method:`POST`});if(!e.ok){let t=`Server responded ${e.status}`;try{t=(await e.json()).error||t}catch{let n=await e.text();n&&(t=n)}throw Error(t)}let t=await e.blob(),n=T.LOAN_NUMBER||`loan`,r=window.URL.createObjectURL(t),i=document.createElement(`a`);i.href=r,i.download=`Servicing_Agreement_Loan_${n}.docx`,document.body.appendChild(i),i.click(),i.remove(),window.URL.revokeObjectURL(r),xe(`idle`)}catch(e){xe(`error`),De(e.message||`Something went wrong generating lender instructions.`)}}}async function _t(){if(w){Ce(`generating`),ke(``);try{await dt();let e=await Vs(`/api/loans/${w}/generate-disclosure`,{method:`POST`});if(!e.ok){let t=`Server responded ${e.status}`;try{t=(await e.json()).error||t}catch{let n=await e.text();n&&(t=n)}throw Error(t)}let t=await e.blob(),n=T.LOAN_NUMBER||`loan`,r=window.URL.createObjectURL(t),i=document.createElement(`a`);i.href=r,i.download=`Lender_Disclosure_Loan_${n}.docx`,document.body.appendChild(i),i.click(),i.remove(),window.URL.revokeObjectURL(r),Ce(`idle`)}catch(e){Ce(`error`),ke(e.message||`Something went wrong generating the disclosure document.`)}}}let vt=[{name:`Loan Details`,fields:[...Us[0].fields,...Us[1].fields]},{name:`Payment Terms`,fields:[...Us[2].fields,...Us[3].fields],special:`payments`},{name:`Property`,fields:Us[4].fields.filter(([e])=>![`TRUSTEE`,`TRUSTEE_ADDRESS`].includes(e))},{name:`Borrower`,fields:Us[6].fields},{name:`Lender`,fields:Us[7].fields,profile:`lender`},{name:`Trustee`,states:[`CA`],fields:Us[4].fields.filter(([e])=>[`TRUSTEE`,`TRUSTEE_ADDRESS`].includes(e)),profile:`trustee`},{name:`Servicer`,fields:Us[8].fields,profile:`servicer`},{name:`Brokerage`,states:[`FL`,`CA`],fields:Us[5].fields.filter(([e])=>T.STATE===`CA`||e!==`DRE`),profile:`brokerage`},{name:`Escrow`,fields:Us[9].fields.filter(([e])=>[`ESCROW_NAME`,`ESCROW_ADDRESS`].includes(e)),profile:`escrow`},{name:`Disclosures`,fields:Us[9].fields.filter(([e])=>![`ESCROW_NAME`,`ESCROW_ADDRESS`].includes(e))}].filter(e=>!e.states||e.states.includes(T.STATE)),yt=vt.find(e=>e.name===C)||vt[0],bt=o.map(e=>{let t=g[e.id]||e.fields||{},n=String(t.PROPERTY_STATE||t.STATE||``).trim().toUpperCase(),r=Zs(t.MATURITY_DATE),i=new Date,a=new Date(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate())),o=r?Math.round((r-a)/864e5):null;return{...e,number:t.LOAN_NUMBER,borrower:t.VESTING||[t.BORROWER_1,t.BORROWER_2].filter(Boolean).join(` / `),address:t.PROPERTY_ADDRESS,city:t.PROPERTY_CITY,state:n===`CA`||n===`CALIFORNIA`?`California`:n===`FL`||n===`FLORIDA`?`Florida`:n,maturity:r,days:o,amount:Xs(t.LOAN_AMOUNT),rate:Xs(t.INTEREST_RATE),position:t.LOAN_POSITION,propertyType:t.PROPERTY_TYPE,lender:t.LENDER_NAME||t.LENDER}}),xt=[[`all`,`All loans`,()=>!0],[`ca`,`California`,e=>e.state===`California`],[`fl`,`Florida`,e=>e.state===`Florida`],[`upcoming`,`Maturing in 90 days`,e=>e.days!==null&&e.days>=0&&e.days<=90],[`past`,`Past maturity`,e=>e.days!==null&&e.days<0],[`missing`,`No maturity date`,e=>!e.maturity]],St=[[`number`,`Loan number`],[`label`,`Loan name`],[`borrower`,`Borrower / vesting`],[`address`,`Property address`],[`city`,`City`],[`state`,`State`],[`maturity`,`Maturity date`],[`amount`,`Loan amount`],[`rate`,`Interest rate`],[`position`,`Lien position`],[`propertyType`,`Property type`],[`lender`,`Lender`]],Ct=bt.filter(e=>(xt.find(e=>e[0]===f)?.[2]||(()=>!0))(e)&&[e.id,...St.map(([t])=>t===`maturity`?$s(e.maturity):e[t])].some(e=>String(e??``).toLowerCase().includes(u.trim().toLowerCase()))).sort((e,t)=>{let n=m.key;if(!n)return 0;let r=e[n],i=t[n],a=e=>e==null||e===``||typeof e==`number`&&!Number.isFinite(e);return a(r)||a(i)?a(r)===a(i)?0:a(r)?1:-1:m.direction*(typeof r==`number`||r instanceof Date?r-i:String(r).localeCompare(String(i),void 0,{numeric:!0,sensitivity:`base`}))});function wt(e,t){return t===`maturity`?$s(e.maturity)||`—`:t===`amount`?ec(e.amount):t===`rate`?Number.isFinite(e.rate)?`${e.rate}%`:`—`:e[t]||`—`}let Tt=Ae||y,Et=bt.filter(e=>Number.isFinite(e.amount)&&e.amount>0),Dt=bt.filter(e=>Number.isFinite(e.rate)&&e.rate>=0&&e.rate<=100),Ot=Et.reduce((e,t)=>e+t.amount,0),kt=Dt.length?Dt.reduce((e,t)=>e+t.rate,0)/Dt.length:null,At=e=>e.toLocaleString(`en-US`,{style:`currency`,currency:`USD`,maximumFractionDigits:0}),jt=[{label:`Florida`,count:bt.filter(e=>e.state===`Florida`).length,color:`#315cff`},{label:`California`,count:bt.filter(e=>e.state===`California`).length,color:`#a33ef0`},{label:`Other / unspecified`,count:bt.filter(e=>![`Florida`,`California`].includes(e.state)).length,color:`#b8c4d8`}],Mt=[{label:`Next 30 days`,count:bt.filter(e=>e.days!==null&&e.days>=0&&e.days<=30).length,color:`#f59e0b`},{label:`31–90 days`,count:bt.filter(e=>e.days!==null&&e.days>30&&e.days<=90).length,color:`#8b5cf6`},{label:`Beyond 90 days`,count:bt.filter(e=>e.days!==null&&e.days>90).length,color:`#10b981`},{label:`Past maturity date`,count:bt.filter(e=>e.days!==null&&e.days<0).length,color:`#f47285`},{label:`No date recorded`,count:bt.filter(e=>e.days===null).length,color:`#cbd5e1`}],Nt=[{label:`First lien`,count:bt.filter(e=>/^(1(st)?|first)(\b|$)/i.test(String(e.position||``).trim())).length,color:`#10b981`},{label:`Second lien`,count:bt.filter(e=>/^(2(nd)?|second)(\b|$)/i.test(String(e.position||``).trim())).length,color:`#315cff`}];Nt.push({label:`Other / unspecified`,count:o.length-Nt.reduce((e,t)=>e+t.count,0),color:`#cbd5e1`});let Pt=bt.filter(e=>e.days!==null&&e.days>=0&&e.days<=90).sort((e,t)=>e.days-t.days);function Ft(e,t,n,r){let i=0,a=n.filter(e=>e.count>0).map(e=>{let t=i;return i+=e.count/Math.max(1,o.length)*100,`${e.color} ${t}% ${i}%`});return(0,b.jsxs)(`section`,{className:`zd-card zd-chart-card`,children:[(0,b.jsx)(`div`,{className:`zd-eyebrow`,children:t}),(0,b.jsx)(`h2`,{children:e}),(0,b.jsx)(`p`,{className:`zd-hint`,children:r}),(0,b.jsx)(`div`,{className:`zd-donut`,role:`img`,"aria-label":Tt?`Loading chart`:n.map(e=>`${e.label}: ${e.count}`).join(`, `),style:{background:!Tt&&a.length?`conic-gradient(${a.join(`,`)})`:`#e9eef6`},children:(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:Tt?`—`:o.length}),(0,b.jsx)(`small`,{children:`Saved loans`})]})}),(0,b.jsx)(`div`,{className:`zd-chart-legend`,children:n.map(e=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`i`,{style:{background:e.color}}),(0,b.jsx)(`span`,{children:e.label}),(0,b.jsx)(`strong`,{children:Tt?`—`:e.count})]},e.label))})]})}function It(e){let t=ic.find(t=>t.key===e),n=ze.filter(t=>t.category===e),r=Ve===e?Ue:``;return(0,b.jsxs)(`div`,{className:`zd-profile`,children:[(0,b.jsxs)(`div`,{className:`zd-profile-head`,children:[(0,b.jsxs)(`strong`,{children:[`Saved `,t.label,` Profiles`]}),(0,b.jsx)(`span`,{children:`Reuse this information on future loans`})]}),(0,b.jsxs)(`div`,{className:`zd-profile-row`,children:[(0,b.jsxs)(`select`,{"aria-label":`Saved ${t.label} profile`,value:r,onChange:t=>{He(e),We(t.target.value),Je(``)},children:[(0,b.jsxs)(`option`,{value:``,children:[`Select saved `,t.label.toLowerCase()]}),n.map(e=>(0,b.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,b.jsx)(`button`,{type:`button`,disabled:!r||Ye,onClick:()=>{let e=n.find(e=>e.id===r);e&&(E(n=>({...n,...Object.fromEntries(t.fields.map(t=>[t,e.fields?.[t]||``]))})),Je(`${e.name} loaded. Save loan to keep these changes.`))},children:`Use profile`}),(0,b.jsx)(`button`,{type:`button`,disabled:!r||Ye,onClick:Qe,children:`Delete`})]}),(0,b.jsxs)(`div`,{className:`zd-profile-row`,children:[(0,b.jsx)(`input`,{"aria-label":`Name new ${t.label} profile`,placeholder:`Name this ${t.label.toLowerCase()} profile`,value:Ve===e?Ge:``,onChange:t=>{He(e),Ke(t.target.value)}}),(0,b.jsx)(`button`,{type:`button`,disabled:Ye,onClick:()=>{He(e);let n=Ge.trim();if(!n){Je(`Enter a profile name first.`);return}Xe(!0),Je(``),(async()=>{try{let{data:{user:r},error:i}=await Bs.auth.getUser();if(i||!r)throw Error(`Sign in again.`);let a=Object.fromEntries(t.fields.map(e=>[e,T[e]||``])),{error:o}=await Bs.from(`saved_profiles`).insert({user_id:r.id,category:e,name:n,fields:a});if(o)throw o;await Ze(),Ke(``),Je(`Profile saved for future loans.`)}catch(e){Je(e.message)}finally{Xe(!1)}})()},children:`Save these fields`})]}),Ve===e&&qe&&(0,b.jsx)(`p`,{role:`status`,className:`zd-hint`,children:qe})]})}return(0,b.jsxs)(`div`,{className:`zd-app`,children:[(0,b.jsx)(`style`,{children:`
        .zd-app{--ink:#111b37;--muted:#68758f;--line:#e2e8f2;--blue:#3458e8;background:#f5f7fb;display:flex;min-height:100vh;color:var(--ink);font-family:Inter,system-ui,Arial,sans-serif;box-sizing:border-box}
        .zd-app *{box-sizing:border-box}.zd-app button,.zd-app input,.zd-app select{font:inherit}.zd-app button{cursor:pointer}
        .zd-side{width:218px;flex:0 0 218px;background:#fff;border-right:1px solid var(--line);padding:25px 14px;position:sticky;top:0;height:100vh}
        .zd-brand{font-weight:850;color:#0a1744;font-size:23px;letter-spacing:-.7px;padding:6px 14px 25px}
        .zd-nav{display:flex;flex-direction:column;gap:7px}.zd-nav button{width:100%;border:0;background:none;padding:13px 15px;text-align:left;color:#4f5a74;border-radius:10px;font-size:14px;font-weight:650}.zd-nav button:hover{background:#f1f4ff}.zd-nav button.active{background:#ebefff;color:#284dd9}
        .zd-main{flex:1;min-width:0}.zd-top{display:flex;align-items:center;justify-content:space-between;gap:15px;background:#fff;border-bottom:1px solid var(--line);padding:19px 27px;min-height:81px;flex-wrap:wrap}
        .zd-top h1{font-size:22px;letter-spacing:-.5px;margin:0}.zd-top small{color:var(--muted);font-size:12px}.zd-top-actions{display:flex;align-items:center;flex-wrap:wrap;gap:9px}
        .zd-button{border:1px solid #cad4e5;background:white;border-radius:9px;padding:10px 15px;color:#31415d;font-weight:700;font-size:13px}.zd-button:hover{background:#f2f5ff}.zd-button.primary{background:#3159eb;border-color:#3159eb;color:#fff}.zd-button.primary:hover{background:#2447c9}.zd-button:disabled{opacity:.5;cursor:not-allowed}
        .zd-content{padding:27px;max-width:1440px;margin:auto}.zd-kpi{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:15px;margin:20px 0}.zd-card{background:white;border:1px solid var(--line);border-radius:13px;padding:21px;box-shadow:0 2px 6px rgba(25,42,88,.02)}.zd-card h2{margin:0 0 9px;font-size:18px}.zd-stat-label{color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.06em}.zd-stat{font-size:30px;font-weight:800;margin-top:10px;color:#15264c}
        .zd-toolbar{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}.zd-search{padding:11px 13px;border:1px solid #cdd6e6;border-radius:9px;min-width:245px;background:#fff;max-width:100%}
        .zd-table-wrap{overflow:auto;margin-top:15px}.zd-table{border-collapse:collapse;width:100%;font-size:14px}.zd-table th,.zd-table td{text-align:left;padding:15px;border-bottom:1px solid var(--line)}.zd-table th{color:var(--muted);font-size:12px}.zd-table tr:last-child td{border-bottom:0}.zd-table .zd-button{padding:7px 10px}
        .zd-edit-layout{display:grid;grid-template-columns:210px minmax(0,1fr);gap:18px;align-items:start}.zd-sections{position:sticky;top:20px;background:white;border:1px solid var(--line);border-radius:12px;padding:9px}.zd-sections button{display:block;width:100%;text-align:left;padding:12px 11px;border:none;background:transparent;color:#5a6680;font-weight:650;border-radius:8px;font-size:13px}.zd-sections button.active{background:#edf1ff;color:#2749cf}.zd-sections button:hover{background:#f3f6fd}
        .zd-form-header{display:flex;flex-wrap:wrap;align-items:end;justify-content:space-between;gap:13px;margin-bottom:15px}.zd-field-label{font-weight:650;color:#3c4a66;font-size:12px;display:block;margin-bottom:7px}.zd-input{width:100%;padding:11px 12px;border:1px solid #cfd8e7;border-radius:9px;background:white;color:#19263e}.zd-input:focus,.zd-search:focus{outline:2px solid #b5c3ff;border-color:#3159eb}.zd-state button{border:1px solid #d4dcec;background:white;padding:10px 15px;color:#4f5e79}.zd-state button:first-child{border-radius:9px 0 0 9px}.zd-state button:last-child{border-radius:0 9px 9px 0}.zd-state button.active{background:#3159eb;color:white;border-color:#3159eb}
        .zd-field-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:17px}.zd-field{min-width:0}.zd-field.wide{grid-column:1/-1}.zd-field input{width:100%;border:1px solid #cfd8e7;border-radius:9px;padding:11px 12px;color:#172542}.zd-field input:focus{outline:2px solid #b6c6ff}.zd-hint{font-size:12px;color:var(--muted);line-height:1.5}.zd-profile{margin-top:22px;padding:16px;background:#f7f9ff;border:1px solid #e1e7f7;border-radius:11px}.zd-profile-head{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:12px;font-size:13px}.zd-profile-head span{color:#67738c}.zd-profile-row{display:flex;gap:8px;flex-wrap:wrap;margin-top:9px}.zd-profile-row input,.zd-profile-row select{flex:1;min-width:170px;padding:10px;border:1px solid #cfd8e7;border-radius:8px;background:white}.zd-profile-row button{border:1px solid #c9d3e3;background:white;color:#3154d7;border-radius:8px;padding:9px 12px;font-size:12px;font-weight:700}.zd-profile-row button:disabled{opacity:.5}
        .zd-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:19px;padding:17px;background:white;border:1px solid var(--line);border-radius:12px}.zd-alert{padding:13px 15px;margin-bottom:15px;background:#fff1f0;border:1px solid #f5c0bb;border-radius:9px;color:#aa332a;font-size:13px}.zd-section-title{margin:0 0 7px;font-size:19px}.zd-lead{color:var(--muted);font-size:13px;margin:0 0 21px}
        .zd-pay fieldset{border:1px solid #e1e7f2;border-radius:10px;margin:17px 0;padding:18px;min-width:0}.zd-pay legend{font-weight:750;color:#2445b6;font-size:14px;padding:0 6px}.zd-pay .pay-note{color:#63718a;font-size:12px;line-height:1.5}.zd-pay .add-row-btn{padding:9px 14px;border:1px dashed #bac5d7;background:#fff;color:#3159eb;border-radius:9px;margin:9px 0;font-weight:650}.zd-pay .pay-grid{display:flex;flex-direction:column;gap:8px}.zd-pay .pay-row{display:grid;grid-template-columns:.7fr .9fr 1.5fr .7fr .9fr 78px;gap:7px;align-items:center}.zd-pay .pay-row input{min-width:0;width:100%;padding:9px;border:1px solid #d1dbea;border-radius:7px}.zd-pay .pay-head{font-size:11px;text-transform:uppercase;color:#66748d}.zd-pay .pay-row-tools{display:flex;gap:3px}.zd-pay .pay-icon-btn{border:1px solid #d1dbea;background:white;border-radius:6px;padding:5px 7px}.zd-pay .pay-icon-btn:disabled{opacity:.4}
        .zd-app .error-msg{color:#ac332b;font-size:13px}.zd-app .lender-inst-btn{border:1px solid #cfd8e9;background:white;border-radius:9px;padding:10px 13px;font-weight:700;color:#3159e4}
        @media(max-width:1000px){.zd-edit-layout{grid-template-columns:1fr}.zd-sections{position:static;display:flex;flex-wrap:wrap}.zd-sections button{width:auto}.zd-field-grid{grid-template-columns:1fr}}
        @media(max-width:780px){.zd-app{display:block}.zd-side{width:100%;height:auto;position:static;display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-bottom:1px solid var(--line)}.zd-brand{padding:4px;font-size:19px}.zd-nav{flex-direction:row;gap:3px}.zd-nav button{padding:9px;font-size:12px}.zd-content{padding:15px}.zd-kpi{grid-template-columns:1fr}.zd-pay .pay-row{grid-template-columns:repeat(2,minmax(0,1fr));padding:10px;border:1px solid #e2e7f2;border-radius:8px}.zd-pay .pay-head{display:none}.zd-pay .pay-row-tools{grid-column:1/-1}}

        /* Workspace refresh — matches landing page navy and electric blue. */
        .zd-app{--ink:#101d32;--muted:#64748b;--line:#e0e6ef;--blue:#3f64ef;background:#f5f7fb}
        .zd-app button:focus-visible{outline:3px solid #7fa5ff;outline-offset:3px}
        .zd-side{width:238px;flex-basis:238px;background:#0b123e;color:white;border:0;display:flex;flex-direction:column;padding:26px 16px;gap:12px}
        .zd-brand{color:#fff;display:flex;align-items:center;gap:10px;padding:4px 10px 22px;font-size:25px;letter-spacing:-1px}.zd-brand-mark{width:36px;height:36px;border-radius:10px;background:#315aff;display:grid;place-items:center;color:white}.zd-brand-mark svg{width:25px;height:25px}
        .zd-side-caption{font-size:10px;letter-spacing:.13em;font-weight:800;color:#9ba8ce;padding:0 12px}.zd-nav button{display:flex;align-items:center;gap:12px;color:#c4cce4;padding:13px 12px;transition:background .2s,color .2s}.zd-nav button:hover{background:#ffffff12;color:white}.zd-nav button.active{background:#3458e8;color:white;box-shadow:0 5px 16px #0002}.zd-nav svg{flex:none}
        .zd-side-bottom{margin-top:auto;display:grid;gap:7px}.zd-side-bottom button{display:flex;align-items:center;gap:12px;text-align:left;background:transparent;border:0;color:#c4cce4;padding:11px 12px;border-radius:9px;font-size:13px}.zd-side-bottom button:hover{background:#ffffff12;color:white}.zd-side-note{display:flex;gap:10px;align-items:center;background:#ffffff0d;border:1px solid #ffffff15;padding:12px;border-radius:12px;margin-bottom:8px;color:#b5c5ff}.zd-side-note strong,.zd-side-note small{display:block}.zd-side-note strong{font-size:12px;color:white}.zd-side-note small{font-size:11px;margin-top:4px}
        .zd-top{padding:20px 32px;min-height:82px}.zd-top h1{font-weight:800;letter-spacing:-.035em}.zd-top small{display:block;margin-top:4px}.zd-button{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:10px;transition:background .2s,box-shadow .2s,transform .2s}.zd-button svg{width:16px;height:16px;flex:none}.zd-button.primary{background:#3f64ef;border-color:#3f64ef;box-shadow:0 4px 10px #315aff20}.zd-content{padding:30px 32px;max-width:1500px}.zd-card{border-radius:17px;padding:23px;box-shadow:0 5px 20px #0b123e05}.zd-dashboard{display:grid;gap:24px}
        .zd-welcome{position:relative;overflow:hidden;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:34px 36px;background:radial-gradient(ellipse at 95% 10%,#365bec 0,transparent 58%),linear-gradient(120deg,#0b123e,#192d80);border-radius:22px;color:white;min-height:220px;box-shadow:0 12px 30px #0b123e16}.zd-welcome>div:first-child{position:relative;z-index:1;max-width:650px}.zd-eyebrow{font-size:10px;font-weight:800;letter-spacing:.13em;color:#3e5ed0}.zd-welcome .zd-eyebrow{color:#a9bdff}.zd-welcome h2{font-size:clamp(26px,3vw,38px);line-height:1.12;letter-spacing:-.045em;margin:12px 0}.zd-welcome p{color:#d2ddfa;line-height:1.6;font-size:14px;margin:0;max-width:540px}.zd-welcome-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:23px}.zd-white{background:white;color:#15317e;border-color:white}.zd-ghost{background:#ffffff12;border-color:#ffffff40;color:white}.zd-ghost:hover{background:#ffffff25}.zd-hero-art{width:180px;height:160px;position:relative;flex:none;margin-right:18px}.zd-art-sheet{position:absolute;inset:12px 28px 0 30px;border-radius:14px}.zd-art-sheet.back{background:#7896ff66;transform:rotate(15deg) translate(15px,-10px);border:1px solid #ffffff60}.zd-art-sheet.front{background:#fff;color:#3f64ef;transform:rotate(-8deg);padding:18px;box-shadow:0 12px 30px #0003}.zd-art-sheet.front>svg{width:30px;height:30px}.zd-art-sheet i{height:5px;background:#e0e8ff;display:block;margin-top:10px;border-radius:4px}.zd-art-sheet i:nth-of-type(2){width:75%}.zd-art-sheet i:nth-of-type(3){width:55%}.zd-art-sheet span{position:absolute;right:-13px;bottom:13px;background:#15976a;border:3px solid white;border-radius:50%;display:grid;place-items:center;width:38px;height:38px;color:white}
        .zd-overview-head{display:flex;align-items:end;justify-content:space-between;gap:12px}.zd-overview-head h2{margin:6px 0 0;font-size:24px;letter-spacing:-.035em}.zd-dashboard .zd-kpi{margin:-8px 0 0;gap:16px}.zd-metric{min-width:0;transition:transform .22s,box-shadow .22s}.zd-metric-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.zd-metric-icon{display:grid;place-items:center;width:40px;height:40px;flex:0 0 40px;background:#edf2ff;color:#315aff;border-radius:12px}.zd-metric-icon.purple{background:#f0eaff;color:#8753c8}.zd-metric-icon.green{background:#e4f6ed;color:#16865d}.zd-stat-label{font-weight:750;letter-spacing:.045em;font-size:11px}.zd-stat{font-size:34px;letter-spacing:-.045em;margin:10px 0 5px}.zd-stat-name{font-size:21px;overflow-wrap:anywhere;line-height:1.25}.zd-metric .zd-hint{margin:0}.zd-dashboard-grid{display:grid;grid-template-columns:minmax(0,1.7fr) minmax(240px,1fr);gap:18px;align-items:start}.zd-recent,.zd-quick{min-width:0}.zd-dashboard .zd-card h2{font-size:19px;letter-spacing:-.025em;margin:0 0 5px}.zd-dashboard .zd-card p.zd-hint{margin:0}.zd-recent-table{min-width:400px}.zd-recent-table thead{background:#f5f7fc}.zd-recent-table th{font-size:11px;text-transform:uppercase;letter-spacing:.04em}.zd-recent-table td,.zd-recent-table th{padding:13px 10px}.zd-loan-name{display:flex;align-items:center;gap:9px;overflow-wrap:anywhere}.zd-loan-name strong{font-size:13px}.zd-file-icon{width:32px;height:35px;flex:0 0 32px;display:grid;place-items:center;background:#edf2ff;color:#315aff;border-radius:8px}.zd-file-icon svg{width:17px;height:17px}.zd-record-pill{font-size:11px;font-weight:650;color:#56657d;background:#edf1f6;border-radius:20px;padding:5px 9px;white-space:nowrap}.zd-open{white-space:nowrap;color:#315aff;border-color:#dce4ff}.zd-table tbody tr:hover{background:#f8faff}.zd-quick-link{width:100%;display:flex;align-items:center;text-align:left;gap:12px;background:#fff;border:1px solid var(--line);border-radius:12px;padding:13px 10px;margin-top:12px;color:var(--ink);transition:background .2s,border-color .2s}.zd-quick-link:hover{background:#f5f8ff;border-color:#b9c9ff}.zd-quick-link>span:nth-child(2){flex:1;min-width:0}.zd-quick-link strong,.zd-quick-link small{display:block}.zd-quick-link strong{font-size:13px}.zd-quick-link small{font-size:11px;color:var(--muted);margin-top:4px}.zd-quick-link>svg{width:16px;flex:none;color:#315aff}.zd-quick-note{display:flex;gap:9px;align-items:start;margin-top:18px;padding:13px;background:#f4f7fc;border-radius:11px;font-size:12px;line-height:1.6;color:var(--muted)}.zd-quick-note svg{flex:none;color:#315aff}.zd-empty{padding:30px 10px;text-align:center;color:var(--muted)}
        @media(hover:hover){.zd-metric:hover{transform:translateY(-3px);box-shadow:0 12px 28px #0b123e0e}}
        @media(max-width:1180px){.zd-dashboard-grid{grid-template-columns:1fr}.zd-hero-art{margin-right:0}.zd-content{padding:24px}.zd-top{padding:18px 24px}}
        @media(max-width:780px){.zd-side{width:100%;height:auto;display:block;padding:14px;position:static}.zd-brand{padding:0 4px 12px;font-size:21px}.zd-side-caption,.zd-side-bottom{display:none}.zd-nav{display:flex;flex-direction:row;gap:4px;flex-wrap:wrap}.zd-nav button{width:auto;flex:1;justify-content:center;padding:10px 7px;font-size:12px;gap:5px}.zd-nav svg{width:16px;height:16px}.zd-content{padding:16px}.zd-top{padding:15px}.zd-welcome{padding:25px;min-height:0}.zd-hero-art{display:none}.zd-dashboard .zd-kpi{grid-template-columns:1fr}.zd-overview-head{align-items:start}.zd-overview-head .zd-button{font-size:11px}.zd-card{padding:17px}}
        .zd-account{display:flex;align-items:center;gap:8px;min-width:0;padding:12px 5px 2px;margin-top:7px;border-top:1px solid #ffffff20}.zd-account-avatar{display:grid;place-items:center;flex:0 0 30px;width:30px;height:30px;border-radius:50%;background:#3458e8;color:white;font-size:11px;font-weight:800}.zd-account-copy{min-width:0;flex:1}.zd-account-copy strong,.zd-account-copy small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.zd-account-copy strong{font-size:11px;font-weight:700;color:white}.zd-account-copy small{font-size:10px;color:#b8c5e5;margin-top:3px}
        @media(max-width:780px){.zd-side .zd-side-bottom{display:flex;align-items:center;flex-wrap:wrap;margin-top:8px;gap:4px}.zd-side .zd-side-bottom button{font-size:11px;padding:7px}.zd-account{margin:0 0 0 auto;padding:4px 0 4px 9px;border-top:0;border-left:1px solid #ffffff20;max-width:55%}}
        /* Compact workspace navigation */
        @media(min-width:781px){
          .zd-side{width:184px;flex:0 0 184px;padding:18px 9px;gap:8px;overflow-y:auto}
          .zd-brand{font-size:20px;gap:7px;padding:3px 7px 17px;letter-spacing:-.65px}
          .zd-brand-mark{width:28px;height:28px;flex:0 0 28px;border-radius:7px}.zd-brand-mark svg{width:20px;height:20px}
          .zd-side-caption{font-size:9px;padding:0 9px;letter-spacing:.1em}
          .zd-nav{gap:3px}.zd-nav button{min-height:36px;padding:9px 8px;font-size:12px;gap:8px;border-radius:6px;font-weight:600}
          .zd-nav svg,.zd-side-bottom button svg{width:16px;height:16px;flex:none}
          .zd-nav button.active{box-shadow:none}
          .zd-side-bottom{gap:3px}.zd-side-bottom button{padding:9px 8px;font-size:12px;gap:8px;border-radius:6px}
          .zd-side-note{padding:9px 7px;gap:6px;border-radius:8px;margin-bottom:5px}.zd-side-note>svg{width:16px;height:16px;flex:none}.zd-side-note strong{font-size:11px}.zd-side-note small{font-size:10px}
        }

        /* Dashboard-only analytics */
        .zd-dashboard-kpis{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:-8px}
        .zd-dashboard .zd-summary-tile{position:relative;overflow:hidden;padding:19px;min-width:0;border:0;background:var(--tile-bg);color:var(--tile-ink)}
        .zd-summary-tile.blue{--tile-bg:#e9efff;--tile-ink:#2549d7;--tile-icon:#d5dfff}.zd-summary-tile.green{--tile-bg:#dcf8e9;--tile-ink:#08764e;--tile-icon:#baf0d4}.zd-summary-tile.purple{--tile-bg:#f1e7ff;--tile-ink:#7936c7;--tile-icon:#e5d1ff}.zd-summary-tile.orange{--tile-bg:#fff0da;--tile-ink:#a65a09;--tile-icon:#ffe0ad}
        .zd-summary-tile .zd-metric-top>span:first-child{font-size:12px;font-weight:700}.zd-summary-icon{display:grid;place-items:center;width:34px;height:34px;flex:0 0 34px;background:var(--tile-icon);border-radius:10px}.zd-summary-icon svg{width:18px;height:18px}.zd-summary-tile>strong{display:block;font-size:clamp(22px,2.2vw,32px);letter-spacing:-.045em;margin:15px 0 7px;overflow-wrap:anywhere;color:#101d32}.zd-summary-tile>small{display:block;font-size:11px;line-height:1.5;color:var(--tile-ink)}
        .zd-charts-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.zd-dashboard .zd-chart-card{min-width:0;padding:21px}.zd-chart-card .zd-eyebrow{margin-bottom:8px;color:#64748b}.zd-donut{width:144px;height:144px;border-radius:50%;display:grid;place-items:center;margin:24px auto}.zd-donut>div{width:94px;height:94px;border-radius:50%;background:white;display:flex;flex-direction:column;align-items:center;justify-content:center}.zd-donut strong{font-size:27px;letter-spacing:-.04em;color:#111b37}.zd-donut small{font-size:10px;color:#64748b}.zd-chart-legend{display:grid;gap:10px}.zd-chart-legend>div{display:flex;align-items:center;gap:8px;font-size:12px;color:#526078}.zd-chart-legend i{width:9px;height:9px;border-radius:50%;flex:none}.zd-chart-legend strong{margin-left:auto;color:#111b37;font-size:12px}
        .zd-dashboard .zd-maturity-row{display:flex;width:100%;align-items:center;justify-content:space-between;text-align:left;gap:12px;border:0;border-top:1px solid #edf0f6;background:white;padding:14px 0;color:#111b37}.zd-maturity-row strong,.zd-maturity-row small,.zd-account-summary strong,.zd-account-summary small{display:block}.zd-maturity-row small,.zd-account-summary small{font-size:12px;color:#64748b;margin-top:5px;overflow-wrap:anywhere}.zd-days{background:#fff0da;color:#a65a09;padding:6px 10px;border-radius:7px;font-size:12px;font-weight:700;white-space:nowrap}.zd-account-summary{display:flex;align-items:center;gap:18px;flex-wrap:wrap}.zd-account-summary>div{flex:1;min-width:130px}.zd-account-summary strong{font-size:14px;overflow-wrap:anywhere}
        @media(max-width:1150px){.zd-dashboard-kpis{grid-template-columns:repeat(2,minmax(0,1fr))}.zd-charts-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media(max-width:650px){.zd-charts-grid{grid-template-columns:1fr}.zd-dashboard .zd-summary-tile{padding:13px}.zd-summary-icon{display:none}.zd-summary-tile>strong{font-size:23px}}
        @media(prefers-reduced-motion:reduce){.zd-app .zd-button,.zd-app .zd-metric,.zd-app .zd-nav button,.zd-quick-link{transition:none}.zd-metric:hover{transform:none}}

        .zd-top-actions .zd-button,.zd-portfolio .zd-toolbar .zd-button,.zd-portfolio-tools .zd-button{font-size:12px;font-weight:650;padding:7px 12px;min-height:32px;line-height:1.4;border-radius:7px;gap:5px}.zd-top{min-height:68px;padding:12px 32px}.zd-top-actions{gap:7px}.zd-portfolio-tools .zd-search{font-size:13px;padding:8px 11px;min-height:34px}.zd-portfolio-tools{gap:9px}.zd-portfolio .zd-toolbar .zd-button.primary,.zd-top-actions .zd-button.primary{box-shadow:0 2px 6px #315aff18}
        .zd-portfolio{padding:20px;min-width:0}.zd-portfolio h2{font-size:24px;letter-spacing:-.04em;margin:5px 0}.zd-portfolio .zd-toolbar .zd-hint{margin:0}.zd-portfolio-tabs{display:flex;gap:5px;overflow-x:auto;border-bottom:1px solid var(--line);margin-top:22px}.zd-portfolio-tabs button{display:flex;align-items:center;gap:7px;white-space:nowrap;padding:12px 11px;background:transparent;border:0;border-bottom:2px solid transparent;color:var(--muted);font-size:12px;font-weight:700}.zd-portfolio-tabs button.active{border-bottom-color:var(--blue);color:var(--blue)}.zd-portfolio-tabs button span{background:#edf1f7;border-radius:10px;padding:2px 7px;font-size:11px}.zd-portfolio-tools{display:flex;gap:12px;align-items:center;flex-wrap:wrap;padding:15px 0}.zd-portfolio-tools input{flex:1;min-width:180px}.zd-portfolio-scroll{overflow:auto;max-height:65vh;border:1px solid #dce3ed;border-radius:9px}.zd-portfolio-table{border-collapse:separate;border-spacing:0;width:100%;min-width:1750px;font-size:12px;text-align:left}.zd-portfolio-table th,.zd-portfolio-table td{padding:10px 12px;border-bottom:1px solid #e1e6ee;border-right:1px solid #e1e6ee;vertical-align:middle}.zd-portfolio-table th{position:sticky;top:0;z-index:2;background:#edf1f7;color:#34435d;white-space:nowrap;font-weight:750}.zd-portfolio-table th button{display:flex;justify-content:space-between;gap:12px;width:100%;border:0;background:none;color:inherit;padding:0;text-align:left;font-weight:inherit}.zd-portfolio-table th button span{color:#8391a6}.zd-portfolio-table td{background:white;max-width:240px;overflow-wrap:anywhere}.zd-portfolio-table tr:nth-child(even) td{background:#f3f5f8}.zd-portfolio-table tr:hover td{background:#eaf0ff}.zd-portfolio-table th:first-child,.zd-portfolio-table td:first-child{position:sticky;left:0;white-space:nowrap;z-index:1;box-shadow:2px 0 4px #10204009}.zd-portfolio-table th:first-child{z-index:3}.zd-portfolio-table .numeric{text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums}.zd-portfolio-open{border:0;background:#3159eb;color:white;font-size:11px!important;font-weight:700;padding:6px 10px;border-radius:5px}.zd-portfolio-open:hover{background:#2447c9}.zd-portfolio-state{background:#e8eef8;color:#344c75;padding:4px 7px;border-radius:5px;white-space:nowrap}.zd-portfolio-delete{border:0;background:transparent;color:#a33a36;font-size:11px!important}.zd-portfolio-empty{text-align:center;padding:30px!important}.zd-portfolio-table th:last-child,.zd-portfolio-table td:last-child{border-right:0}.zd-portfolio-table tr:last-child td{border-bottom:0}
      `}),(0,b.jsxs)(`aside`,{className:`zd-side`,children:[(0,b.jsxs)(`div`,{className:`zd-brand`,children:[(0,b.jsx)(`span`,{className:`zd-brand-mark`,children:(0,b.jsx)(U,{name:`brand`})}),`ZapDocs`]}),(0,b.jsx)(`div`,{className:`zd-side-caption`,children:`WORKSPACE`}),(0,b.jsx)(`nav`,{className:`zd-nav`,"aria-label":`Workspace navigation`,children:[[`dashboard`,`Dashboard`,`grid`],[`loans`,`Loans`,`folder`],[`information`,`Loan Information`,`file`]].map(([e,t,n])=>(0,b.jsxs)(`button`,{type:`button`,className:c===e?`active`:``,"aria-current":c===e?`page`:void 0,onClick:()=>l(e),children:[(0,b.jsx)(U,{name:n}),(0,b.jsx)(`span`,{children:t})]},e))}),(0,b.jsxs)(`div`,{className:`zd-side-bottom`,children:[(0,b.jsxs)(`button`,{type:`button`,onClick:e,children:[(0,b.jsx)(U,{name:`home`}),` Website`]}),(0,b.jsxs)(`button`,{type:`button`,onClick:t,children:[(0,b.jsx)(U,{name:`logout`}),` Sign out`]}),(0,b.jsxs)(`div`,{className:`zd-account`,"aria-label":`Signed-in account`,title:r?`${i} · ${r}`:i,children:[(0,b.jsx)(`span`,{className:`zd-account-avatar`,"aria-hidden":`true`,children:a}),(0,b.jsxs)(`div`,{className:`zd-account-copy`,children:[(0,b.jsx)(`strong`,{children:i}),(0,b.jsx)(`small`,{children:r||`Signed in`})]})]})]})]}),(0,b.jsxs)(`main`,{className:`zd-main`,children:[(0,b.jsxs)(`header`,{className:`zd-top`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h1`,{children:c===`dashboard`?`Dashboard`:c===`loans`?`Loans`:`Loan Information`}),(0,b.jsx)(`small`,{children:w?`Current loan: ${ae||`New Loan`}`:`Manage and generate your loan documents`})]}),(0,b.jsxs)(`div`,{className:`zd-top-actions`,children:[(0,b.jsx)(`button`,{className:`zd-button`,onClick:e,children:`Home`}),(0,b.jsx)(`button`,{className:`zd-button`,onClick:t,children:`Sign out`}),(0,b.jsx)(`button`,{className:`zd-button primary`,onClick:rt,children:`＋ New Loan`})]})]}),(0,b.jsxs)(`div`,{className:`zd-content`,children:[Me&&(0,b.jsx)(`div`,{role:`alert`,className:`zd-alert`,children:Me}),c===`dashboard`&&(0,b.jsxs)(`div`,{className:`zd-dashboard`,children:[(0,b.jsxs)(`section`,{className:`zd-welcome`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`zd-eyebrow`,children:`YOUR LENDING WORKSPACE`}),(0,b.jsx)(`h2`,{children:`Manage loans with confidence.`}),(0,b.jsx)(`p`,{children:`Create loan records, organize transaction details and prepare your closing documents in one place.`}),(0,b.jsxs)(`div`,{className:`zd-welcome-actions`,children:[(0,b.jsxs)(`button`,{className:`zd-button zd-white`,onClick:rt,children:[(0,b.jsx)(U,{name:`plus`}),` New loan`]}),(0,b.jsxs)(`button`,{className:`zd-button zd-ghost`,onClick:()=>l(`loans`),children:[`Browse loans `,(0,b.jsx)(U,{name:`arrow`})]})]})]}),(0,b.jsxs)(`div`,{className:`zd-hero-art`,"aria-hidden":`true`,children:[(0,b.jsx)(`div`,{className:`zd-art-sheet back`}),(0,b.jsxs)(`div`,{className:`zd-art-sheet front`,children:[(0,b.jsx)(U,{name:`file`}),(0,b.jsx)(`i`,{}),(0,b.jsx)(`i`,{}),(0,b.jsx)(`i`,{}),(0,b.jsx)(`span`,{children:(0,b.jsx)(U,{name:`check`})})]})]})]}),(0,b.jsxs)(`div`,{className:`zd-overview-head`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`zd-eyebrow`,children:`AT A GLANCE`}),(0,b.jsx)(`h2`,{children:`Loan overview`})]}),(0,b.jsxs)(`button`,{className:`zd-button`,onClick:()=>l(`loans`),children:[`View all loans `,(0,b.jsx)(U,{name:`arrow`})]})]}),(0,b.jsx)(`div`,{className:`zd-dashboard-kpis`,children:[[`Saved loans`,Ae?`—`:o.length,`All saved loan records`,`folder`,`blue`],[`Recorded loan volume`,Tt?`—`:Et.length?At(Ot):o.length?`—`:`$0`,`${Et.length} of ${o.length} records with principal`,`file`,`green`],[`Average interest rate`,Tt||kt===null?`—`:`${kt.toFixed(2)}%`,`${Dt.length} records with valid rates · unweighted`,`check`,`purple`],[`Maturing in 90 days`,Tt?`—`:Pt.length,`Based on recorded maturity dates`,`shield`,`orange`]].map(([e,t,n,r,i])=>(0,b.jsxs)(`div`,{className:`zd-card zd-summary-tile ${i}`,children:[(0,b.jsxs)(`div`,{className:`zd-metric-top`,children:[(0,b.jsx)(`span`,{children:e}),(0,b.jsx)(`span`,{className:`zd-summary-icon`,children:(0,b.jsx)(U,{name:r})})]}),(0,b.jsx)(`strong`,{children:t}),(0,b.jsx)(`small`,{children:n})]},e))}),ee>0&&(0,b.jsxs)(`div`,{className:`zd-card`,role:`status`,children:[`Some loan details could not be loaded. Summaries may be incomplete. `,(0,b.jsx)(`button`,{className:`zd-button`,onClick:()=>ne(e=>e+1),children:`Retry`})]}),(0,b.jsxs)(`div`,{className:`zd-charts-grid`,children:[Ft(`Loans by state`,`GEOGRAPHIC MIX`,jt,`Distribution of saved loan records`),Ft(`Maturity breakdown`,`LOAN TIMELINE`,Mt,`Based on recorded maturity dates`),Ft(`Lien positions`,`LOAN STRUCTURE`,Nt,`First, second and other positions`)]}),(0,b.jsxs)(`section`,{className:`zd-card zd-maturity-card`,children:[(0,b.jsxs)(`div`,{className:`zd-toolbar`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`zd-eyebrow`,children:`NEXT 90 DAYS`}),(0,b.jsx)(`h2`,{children:`Upcoming maturities`}),(0,b.jsx)(`p`,{className:`zd-hint`,children:`Recorded dates only — not a servicing or payment status.`})]}),(0,b.jsxs)(`button`,{className:`zd-button`,onClick:()=>{p(`upcoming`),d(``),l(`loans`)},children:[`View loans `,(0,b.jsx)(U,{name:`arrow`})]})]}),Tt?(0,b.jsx)(`p`,{className:`zd-hint`,children:`Loading loan details…`}):Pt.length?Pt.slice(0,5).map(e=>(0,b.jsxs)(`button`,{type:`button`,className:`zd-maturity-row`,onClick:()=>nt(e.id),children:[(0,b.jsxs)(`span`,{children:[(0,b.jsx)(`strong`,{children:e.label||`Untitled loan`}),(0,b.jsxs)(`small`,{children:[$s(e.maturity),` · `,e.state||`State unspecified`]})]}),(0,b.jsx)(`span`,{className:`zd-days`,children:e.days===0?`Today`:`${e.days} days`})]},e.id)):(0,b.jsx)(`p`,{className:`zd-hint`,children:`No recorded maturities in the next 90 days.`})]}),(0,b.jsxs)(`div`,{className:`zd-card zd-account-summary`,children:[(0,b.jsx)(`span`,{className:`zd-metric-icon green`,children:(0,b.jsx)(U,{name:`users`})}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:i}),(0,b.jsx)(`small`,{children:r})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:ze.length}),(0,b.jsx)(`small`,{children:`Reusable profiles`})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:w?ae||`New Loan`:`None selected`}),(0,b.jsx)(`small`,{children:`Current loan`})]})]}),(0,b.jsxs)(`div`,{className:`zd-dashboard-grid`,children:[(0,b.jsxs)(`section`,{className:`zd-card zd-recent`,children:[(0,b.jsxs)(`div`,{className:`zd-toolbar`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h2`,{children:`Recent loans`}),(0,b.jsx)(`p`,{className:`zd-hint`,children:`Continue working on your saved records.`})]}),(0,b.jsxs)(`button`,{className:`zd-button`,onClick:()=>l(`loans`),children:[`See all `,(0,b.jsx)(U,{name:`arrow`})]})]}),Ae?(0,b.jsx)(`p`,{className:`zd-empty`,children:`Loading your loans…`}):o.length===0?(0,b.jsxs)(`div`,{className:`zd-empty`,children:[(0,b.jsx)(U,{name:`folder`}),(0,b.jsx)(`p`,{children:`No saved loans yet.`}),(0,b.jsx)(`button`,{className:`zd-button primary`,onClick:rt,children:`Create your first loan`})]}):(0,b.jsx)(`div`,{className:`zd-table-wrap`,children:(0,b.jsxs)(`table`,{className:`zd-table zd-recent-table`,children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{children:`Loan name`}),(0,b.jsx)(`th`,{children:`Record`}),(0,b.jsx)(`th`,{children:`Action`})]})}),(0,b.jsx)(`tbody`,{children:o.slice(0,6).map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsxs)(`div`,{className:`zd-loan-name`,children:[(0,b.jsx)(`span`,{className:`zd-file-icon`,children:(0,b.jsx)(U,{name:`file`})}),(0,b.jsx)(`strong`,{children:e.label||`Untitled loan`})]})}),(0,b.jsx)(`td`,{children:(0,b.jsx)(`span`,{className:`zd-record-pill`,children:e.id===w?`Current`:`Saved`})}),(0,b.jsx)(`td`,{children:(0,b.jsxs)(`button`,{className:`zd-button zd-open`,onClick:()=>nt(e.id),children:[`Open `,(0,b.jsx)(U,{name:`arrow`})]})})]},e.id))})]})})]}),(0,b.jsxs)(`aside`,{className:`zd-card zd-quick`,children:[(0,b.jsx)(`h2`,{children:`Quick actions`}),(0,b.jsx)(`p`,{className:`zd-hint`,children:`Pick up where you left off.`}),[[`plus`,`Create a loan`,`Start a new loan record`,rt],[`folder`,`Browse loans`,`Find an existing transaction`,()=>l(`loans`)],[`file`,`Loan information`,`Continue editing your current loan`,()=>l(`information`)]].map(([e,t,n,r])=>(0,b.jsxs)(`button`,{type:`button`,className:`zd-quick-link`,onClick:r,children:[(0,b.jsx)(`span`,{className:`zd-metric-icon`,children:(0,b.jsx)(U,{name:e})}),(0,b.jsxs)(`span`,{children:[(0,b.jsx)(`strong`,{children:t}),(0,b.jsx)(`small`,{children:n})]}),(0,b.jsx)(U,{name:`arrow`})]},t)),(0,b.jsxs)(`div`,{className:`zd-quick-note`,children:[(0,b.jsx)(U,{name:`shield`}),(0,b.jsx)(`span`,{children:`Review generated documents before use. During beta, use sample or redacted information.`})]})]})]})]}),c===`loans`&&(0,b.jsxs)(`section`,{className:`zd-card zd-portfolio`,children:[(0,b.jsxs)(`div`,{className:`zd-toolbar`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`zd-eyebrow`,children:`LOAN WORKSPACE`}),(0,b.jsx)(`h2`,{children:`Loan portfolio`}),(0,b.jsx)(`p`,{className:`zd-hint`,children:`Search, filter and open saved loan records.`})]}),(0,b.jsx)(`button`,{className:`zd-button primary`,onClick:rt,children:`＋ New loan`})]}),(0,b.jsx)(`nav`,{className:`zd-portfolio-tabs`,"aria-label":`Filter loans`,children:xt.map(([e,t,n])=>(0,b.jsxs)(`button`,{type:`button`,"aria-pressed":f===e,className:f===e?`active`:``,onClick:()=>p(e),children:[t,(0,b.jsx)(`span`,{children:Ae||y?`…`:bt.filter(n).length})]},e))}),(0,b.jsxs)(`div`,{className:`zd-portfolio-tools`,children:[(0,b.jsx)(`input`,{className:`zd-search`,"aria-label":`Search loan portfolio`,placeholder:`Search name, loan number, address…`,value:u,onChange:e=>d(e.target.value)}),(0,b.jsx)(`span`,{className:`zd-hint`,role:`status`,children:Ae?`Loading loans…`:`${Ct.length} of ${o.length} loans${y?` · Loading details…`:``}`}),(0,b.jsx)(`button`,{className:`zd-button`,type:`button`,disabled:y,onClick:()=>{d(``),p(`all`),h({key:``,direction:1})},children:`Clear filters`})]}),ee>0&&(0,b.jsxs)(`p`,{className:`zd-hint`,role:`status`,children:[`Details could not be loaded for `,ee,` records. `,(0,b.jsx)(`button`,{className:`zd-button`,onClick:()=>ne(e=>e+1),children:`Retry`})]}),(0,b.jsx)(`div`,{className:`zd-portfolio-scroll`,tabIndex:0,"aria-label":`Scrollable loan table`,children:(0,b.jsxs)(`table`,{className:`zd-portfolio-table`,children:[(0,b.jsx)(`thead`,{children:(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`th`,{scope:`col`,children:`Loan details`}),St.map(([e,t])=>(0,b.jsx)(`th`,{scope:`col`,"aria-sort":m.key===e?m.direction===1?`ascending`:`descending`:`none`,children:(0,b.jsxs)(`button`,{type:`button`,onClick:()=>h(t=>({key:e,direction:t.key===e?-t.direction:1})),children:[t,(0,b.jsx)(`span`,{"aria-hidden":`true`,children:m.key===e?m.direction===1?`↑`:`↓`:`↕`})]})},e)),(0,b.jsx)(`th`,{scope:`col`,children:`Actions`})]})}),(0,b.jsxs)(`tbody`,{children:[Ct.map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{children:(0,b.jsxs)(`button`,{className:`zd-portfolio-open`,onClick:()=>nt(e.id),children:[`Open `,(0,b.jsx)(`span`,{"aria-hidden":`true`,children:`↗`})]})}),St.map(([t])=>(0,b.jsx)(`td`,{className:t===`amount`||t===`rate`?`numeric`:void 0,children:t===`state`&&e.state?(0,b.jsx)(`span`,{className:`zd-portfolio-state`,children:e.state}):wt(e,t)},t)),(0,b.jsx)(`td`,{children:(0,b.jsx)(`button`,{className:`zd-portfolio-delete`,onClick:t=>it(e.id,t),children:`Delete`})})]},e.id)),!Ct.length&&(0,b.jsx)(`tr`,{children:(0,b.jsx)(`td`,{colSpan:St.length+2,className:`zd-portfolio-empty`,children:Ae||y?`Loading loan records…`:`No matching loans.`})})]})]})}),(0,b.jsx)(`p`,{className:`zd-hint`,children:`Scroll horizontally for more columns. Maturity filters use recorded dates only, not payment or servicing status.`})]}),c===`information`&&!w&&(0,b.jsxs)(`div`,{className:`zd-card`,children:[(0,b.jsx)(`h2`,{children:`No loan selected`}),(0,b.jsx)(`p`,{className:`zd-hint`,children:`Choose an existing loan or create a new one to enter information.`}),(0,b.jsx)(`button`,{className:`zd-button primary`,onClick:()=>l(`loans`),children:`Browse loans`})]}),c===`information`&&w&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`div`,{className:`zd-form-header`,children:[(0,b.jsxs)(`div`,{style:{flex:`1 1 260px`},children:[(0,b.jsx)(`label`,{className:`zd-field-label`,htmlFor:`zd-loan-label`,children:`Loan name`}),(0,b.jsx)(`input`,{className:`zd-input`,id:`zd-loan-label`,placeholder:`Example: Smith - 1037 Garfield`,value:ae,onChange:e=>oe(e.target.value)})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`label`,{className:`zd-field-label`,children:`Loan state`}),(0,b.jsxs)(`div`,{className:`zd-state`,children:[(0,b.jsx)(`button`,{className:T.STATE===`FL`?`active`:``,onClick:()=>at(`STATE`,`FL`),children:`Florida`}),(0,b.jsx)(`button`,{className:T.STATE===`CA`?`active`:``,onClick:()=>at(`STATE`,`CA`),children:`California`})]})]})]}),(0,b.jsxs)(`div`,{className:`zd-edit-layout`,children:[(0,b.jsx)(`nav`,{className:`zd-sections`,"aria-label":`Loan information sections`,children:vt.map(e=>(0,b.jsx)(`button`,{className:yt.name===e.name?`active`:``,onClick:()=>re(e.name),children:e.name},e.name))}),(0,b.jsx)(`div`,{children:(0,b.jsxs)(`section`,{className:`zd-card`,children:[(0,b.jsx)(`h2`,{className:`zd-section-title`,children:yt.name}),(0,b.jsx)(`p`,{className:`zd-lead`,children:`Enter information once. Saved company profiles are available inside the relevant section.`}),(0,b.jsx)(`div`,{className:`zd-field-grid`,children:yt.fields.filter(([e])=>[`SIGNATURE_FOOTER_2`,`SIGNATURE_TITLE_2`].includes(e)&&!String(T.BORROWER_2||``).trim()?!1:(yt.name,!0)).filter(([e],t,n)=>n.findIndex(([t])=>t===e)===t).map(([e,t])=>{let n=T.STATE===`CA`;return yt.name===`Payment Terms`&&n&&[`FIRST_PREPAID_MONTH`,`LAST_PREPAID_MONTH`,`FIRST_PAYMENT_DUE`].includes(e)||yt.name===`Payment Terms`&&!n&&[`FIRST_PREPAID`,`LAST_PREPAID`,`FIRST_PAYMENT_DATE`,`PREPAYMENT_PENALTY`].includes(e)?null:(0,b.jsxs)(`div`,{className:`zd-field`,children:[(0,b.jsx)(`label`,{className:`zd-field-label`,htmlFor:`zd-${e}`,children:t.replace(/ \(e\.g\..*\)/,``)}),e===`NOTE_DATE`?(0,b.jsx)(`input`,{id:`zd-${e}`,type:`date`,value:tc(T[e]),onChange:t=>at(e,t.target.value?$s(Zs(t.target.value)):``)}):(0,b.jsx)(`input`,{id:`zd-${e}`,autoComplete:`off`,value:T[e]||``,onChange:t=>at(e,t.target.value),placeholder:t.match(/e\.g\.[^)]*/)?.[0]?.replace(`e.g.`,`Example:`)||``}),e===`MONTHLY_PAYMENT`&&(0,b.jsxs)(`div`,{style:{marginTop:8,display:`flex`,gap:9,alignItems:`center`,flexWrap:`wrap`},children:[(0,b.jsx)(`button`,{type:`button`,className:`zd-button`,onClick:$e,children:`Calculate monthly interest`}),(0,b.jsx)(`button`,{type:`button`,className:`zd-button`,onClick:et,children:`Calculate all payments`}),(0,b.jsxs)(`span`,{className:`zd-hint`,children:[`Estimate: `,nc(T)===null?`Enter amount and rate`:ec(nc(T)),` (principal × annual rate ÷ 12)`]})]})]},e)})}),yt.name===`Disclosures`&&(0,b.jsxs)(`fieldset`,{style:{marginTop:24,overflowX:`auto`},children:[(0,b.jsx)(`legend`,{children:`Lender/Purchaser Payment Schedule`}),(0,b.jsx)(`p`,{className:`zd-hint`,children:`This schedule is separate from the Note. Enter the lender yield, total lender payment, and this investor’s actual share for every tier and balloon row. Amounts are not estimated automatically.`}),(0,b.jsx)(`button`,{type:`button`,className:`zd-button`,onClick:Re,children:`Copy borrower rows from Note`}),(0,b.jsxs)(`table`,{className:`zd-table`,style:{marginTop:14,minWidth:850},children:[(0,b.jsx)(`thead`,{children:(0,b.jsx)(`tr`,{children:[`# Payments`,`Starting Date`,`Borrower Rate %`,`Borrower Payment $`,`Lender Rate %`,`Lender Payment $`,`Investor Share $`,``].map(e=>(0,b.jsx)(`th`,{children:e},e))})}),(0,b.jsx)(`tbody`,{children:Pe.map((e,t)=>(0,b.jsxs)(`tr`,{children:[Ks.map(n=>(0,b.jsx)(`td`,{children:(0,b.jsx)(`input`,{className:`zd-input`,style:{minWidth:95,width:`100%`},"aria-label":`Disclosure row ${t+1} ${n}`,value:e[n]||``,onChange:e=>Fe(t,n,e.target.value)})},n)),(0,b.jsx)(`td`,{children:(0,b.jsx)(`button`,{type:`button`,className:`zd-button`,onClick:()=>Le(t),children:`Remove`})})]},t))})]}),(0,b.jsx)(`button`,{type:`button`,className:`zd-button`,onClick:Ie,style:{marginTop:12},children:`+ Add disclosure row`})]}),yt.profile&&It(yt.profile),yt.special===`payments`&&(0,b.jsxs)(`div`,{className:`zd-pay`,children:[(0,b.jsxs)(`fieldset`,{children:[(0,b.jsx)(`legend`,{children:`Loan Payment Structure`}),(0,b.jsx)(`p`,{className:`pay-note`,children:`Choose the Note clause and the way payments are shown. Principal stays unchanged for these interest-only structures; deferred interest is tracked separately.`}),(0,b.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[[`interest_only`,`Standard interest-only`],[`prepaid`,`Prepaid interest`],[`neg_am`,`Deferred interest / negative amortization`]].map(([e,t])=>(0,b.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:6,cursor:`pointer`},children:[(0,b.jsx)(`input`,{type:`radio`,name:`PAYMENT_STRUCTURE`,checked:(T.PAYMENT_STRUCTURE||`interest_only`)===e,onChange:()=>at(`PAYMENT_STRUCTURE`,e)}),` `,t]},e))}),T.PAYMENT_STRUCTURE===`neg_am`&&(0,b.jsx)(`p`,{className:`pay-note`,style:{marginTop:12},children:`For deferred interest, enter the reduced-payment tier directly in the Payment Schedule below (e.g., 6 payments at 6%), then use Auto-fill to create the remaining payments at the contractual rate. Unpaid interest is tracked separately, not added to principal.`}),T.PAYMENT_STRUCTURE===`prepaid`&&(0,b.jsx)(`p`,{className:`pay-note`,style:{marginTop:12},children:`Complete the prepaid-month and amount fields under the California Note or Florida Prepayment sections. The generated Note uses the prepaid clause.`})]}),(0,b.jsxs)(`fieldset`,{children:[(0,b.jsx)(`legend`,{children:`Payment Schedule (Note, Sec. 3)`}),(0,b.jsx)(`p`,{className:`pay-note`,children:`RATE is the annual payment-rate equivalent for that tier; contractual interest is calculated separately using the loan's Interest Rate. Leave PAYMENT blank to calculate from tier RATE, or enter an exact payment. No principal is repaid by these installments. A balloon row is displayed separately from monthly payments.`}),(0,b.jsx)(`button`,{type:`button`,className:`add-row-btn`,onClick:et,style:{marginTop:0,marginBottom:14},children:`Calculate payments, balloon & schedule`}),(0,b.jsx)(`p`,{className:`pay-note`,children:`Example: loan contract rate 12%, payment rate 6% for the first six months = $1,700/month on $340,000. Thereafter payment rate 12% = $3,400/month. The $1,700 shortfall accrues as deferred interest only when deferred-interest mode is selected.`}),(0,b.jsxs)(`div`,{className:`pay-grid`,children:[(0,b.jsxs)(`div`,{className:`pay-row pay-head`,children:[(0,b.jsx)(`span`,{children:`# of Payments`}),(0,b.jsx)(`span`,{children:`Starting`}),(0,b.jsx)(`span`,{children:`Description (optional)`}),(0,b.jsx)(`span`,{children:`Rate`}),(0,b.jsx)(`span`,{children:`Payment`}),(0,b.jsx)(`span`,{})]}),Ne.map((e,t)=>(0,b.jsxs)(`div`,{className:`pay-row`,children:[(0,b.jsx)(`input`,{type:`text`,autoComplete:`off`,"aria-label":`Row ${t+1} number of payments`,placeholder:`6`,value:e.COUNT||``,onChange:e=>ot(t,`COUNT`,e.target.value)}),(0,b.jsx)(`input`,{type:`text`,autoComplete:`off`,"aria-label":`Row ${t+1} start date`,placeholder:j.valid?j.rows[t]?.START||`Auto`:`Auto from first payment`,value:e.START||``,onChange:e=>ot(t,`START`,e.target.value)}),(0,b.jsx)(`input`,{type:`text`,autoComplete:`off`,"aria-label":`Row ${t+1} description`,placeholder:`Monthly Beginning 09/01/2026`,value:e.DESCRIPTION||``,onChange:e=>ot(t,`DESCRIPTION`,e.target.value)}),(0,b.jsx)(`input`,{type:`text`,autoComplete:`off`,"aria-label":`Row ${t+1} interest rate`,placeholder:`6`,value:e.RATE||``,onChange:e=>ot(t,`RATE`,e.target.value)}),(0,b.jsx)(`input`,{type:`text`,autoComplete:`off`,"aria-label":`Row ${t+1} payment amount`,placeholder:j.valid?j.rows[t]?.AMOUNT||`Auto`:`Auto (interest only)`,value:e.AMOUNT||``,onChange:e=>ot(t,`AMOUNT`,e.target.value)}),(0,b.jsxs)(`div`,{className:`pay-row-tools`,children:[(0,b.jsx)(`button`,{type:`button`,className:`pay-icon-btn`,title:`Move row up`,disabled:t===0,onClick:()=>lt(t,-1),children:`↑`}),(0,b.jsx)(`button`,{type:`button`,className:`pay-icon-btn`,title:`Move row down`,disabled:t===Ne.length-1,onClick:()=>lt(t,1),children:`↓`}),(0,b.jsx)(`button`,{type:`button`,className:`pay-icon-btn danger`,title:`Remove row`,onClick:()=>ct(t),children:`×`})]})]},t))]}),(0,b.jsx)(`button`,{type:`button`,className:`add-row-btn`,onClick:st,children:`+ Add payment tier`}),(0,b.jsxs)(`div`,{style:{marginTop:20,background:`#f8faff`,border:`1px solid #d9e2f3`,padding:14,borderRadius:10},children:[(0,b.jsx)(`strong`,{children:`Live payment preview`}),j.valid?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`p`,{className:`pay-note`,style:{marginTop:8},children:[j.installments.length,` interest-only installments · Principal at maturity: `,(0,b.jsx)(`strong`,{children:ec(j.endingBalance)}),` · Deferred interest: `,(0,b.jsx)(`strong`,{children:ec(j.deferredInterest)}),` · Entered balloon: `,(0,b.jsx)(`strong`,{children:ec(j.balloon)})]}),(0,b.jsx)(`div`,{style:{maxHeight:290,overflow:`auto`},children:(0,b.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:12},children:[(0,b.jsx)(`thead`,{children:(0,b.jsx)(`tr`,{children:[`#`,`Date`,`Rate`,`Interest`,`Payment`,`Balance`,`Type`].map(e=>(0,b.jsx)(`th`,{style:{textAlign:`left`,padding:6,borderBottom:`1px solid #d6dbe4`},children:e},e))})}),(0,b.jsx)(`tbody`,{children:j.installments.map(e=>(0,b.jsxs)(`tr`,{children:[(0,b.jsx)(`td`,{style:{padding:5},children:e.number}),(0,b.jsx)(`td`,{children:e.date}),(0,b.jsxs)(`td`,{children:[e.rate,`%`]}),(0,b.jsx)(`td`,{children:ec(e.interest)}),(0,b.jsx)(`td`,{children:ec(e.payment)}),(0,b.jsx)(`td`,{children:ec(e.balance)}),(0,b.jsx)(`td`,{style:{color:e.negativeAm?`#a33919`:`#2b6650`},children:e.negativeAm?`Deferred ${ec(e.deferred)}`:`Interest only`})]},e.number))})]})}),j.warnings?.map((e,t)=>(0,b.jsx)(`p`,{style:{color:`#a33919`,fontSize:12},children:e},t)),(0,b.jsx)(`p`,{className:`pay-note`,children:`Preview uses simple monthly contractual interest = original principal × annual Note rate ÷ 12. It never applies regular payments toward principal or capitalizes unpaid interest. It does not model daily accrual, irregular periods, fees or compounding; confirm final payoff and Note language before signing.`})]}):(0,b.jsx)(`p`,{className:`pay-note`,children:j.message})]})]})]})]})})]}),D&&(0,b.jsx)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-label":`Loan terms preview`,style:{position:`fixed`,inset:0,zIndex:1e3,background:`rgba(12,22,48,.55)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:18},onClick:()=>O(!1),children:(0,b.jsxs)(`div`,{className:`zd-card`,onClick:e=>e.stopPropagation(),style:{width:`min(760px,100%)`,maxHeight:`90vh`,overflowY:`auto`,boxShadow:`0 20px 70px rgba(0,0,0,.2)`},children:[(0,b.jsxs)(`div`,{className:`zd-toolbar`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h2`,{children:`Document terms preview`}),(0,b.jsx)(`p`,{className:`zd-hint`,children:`Review values before generating. This is a loan-terms preview, not a rendered Word/PDF document.`})]}),(0,b.jsx)(`button`,{className:`zd-button`,onClick:()=>O(!1),children:`Close`})]}),(0,b.jsx)(`div`,{className:`zd-field-grid`,style:{marginTop:16},children:[[`State`,T.STATE===`FL`?`Florida — Full Set + standalone disclosures`:`California — existing package`],[`Loan number`,T.LOAN_NUMBER],[`Borrower`,T.VESTING||T.BORROWER_1],[`Lender`,T.LENDER_NAME||T.LENDER],[`Property`,[T.PROPERTY_ADDRESS,T.PROPERTY_CITY,T.PROPERTY_STATE,T.PROPERTY_ZIP].filter(Boolean).join(`, `)],[`Principal`,ec(Xs(T.LOAN_AMOUNT))],[`Annual rate`,T.INTEREST_RATE?`${T.INTEREST_RATE}%`:``],[`Monthly payment (entered)`,ec(Xs(T.MONTHLY_PAYMENT))],[`Monthly interest estimate`,nc(T)===null?`—`:ec(nc(T))],[`Note date`,T.NOTE_DATE],[`First payment`,T.FIRST_PAYMENT],[`Maturity`,T.MATURITY_DATE],[`Prepaid months`,T.PREPAID_NUMBER_MONTHS],[`Prepaid payments`,T.PREPAID_PAYMENTS?ec(Xs(T.PREPAID_PAYMENTS)):``],[`Balloon (entered)`,ec(Xs(T.BALLOON_PAYMENT))],[`Payment structure`,T.PAYMENT_STRUCTURE]].map(([e,t])=>(0,b.jsxs)(`div`,{style:{borderBottom:`1px solid #e2e8f2`,paddingBottom:9},children:[(0,b.jsx)(`span`,{className:`zd-field-label`,children:e}),(0,b.jsx)(`strong`,{style:{overflowWrap:`anywhere`},children:t||`Not entered`})]},e))}),(0,b.jsxs)(`div`,{style:{marginTop:18},children:[(0,b.jsx)(`strong`,{children:`Payment schedule`}),j.valid?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`p`,{className:`zd-hint`,children:[j.installments.length,` installments; deferred interest estimate `,ec(j.deferredInterest),`.`]}),j.warnings?.map((e,t)=>(0,b.jsxs)(`p`,{style:{color:`#a33919`,fontSize:12},children:[`⚠ `,e]},t))]}):(0,b.jsx)(`p`,{style:{color:`#a33919`,fontSize:12},children:j.message})]}),(0,b.jsx)(`p`,{className:`zd-hint`,children:`The calculation assumes monthly interest using principal × annual rate ÷ 12. It does not verify daily accrual, payoff fees, prepayment premiums, or legal compliance. Changes must be saved before generation.`}),(0,b.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`},children:(0,b.jsx)(`button`,{className:`zd-button primary`,onClick:()=>O(!1),children:`Back to loan`})})]})}),le&&(0,b.jsx)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-label":`Rendered document preview`,style:{position:`fixed`,inset:0,zIndex:1100,background:`rgba(12,22,48,.72)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:12},onClick:ft,children:(0,b.jsxs)(`div`,{className:`zd-card`,onClick:e=>e.stopPropagation(),style:{width:`min(1100px,100%)`,height:`min(94vh,1000px)`,display:`flex`,flexDirection:`column`,gap:12,overflow:`hidden`},children:[(0,b.jsxs)(`div`,{className:`zd-toolbar`,style:{flexShrink:0,flexWrap:`wrap`,gap:10},children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h2`,{style:{margin:0},children:`Document preview`}),(0,b.jsx)(`p`,{className:`zd-hint`,children:`Rendered PDF from your saved loan data and Word template. No download required.`})]}),T.STATE===`CA`&&(0,b.jsxs)(`label`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[`Document`,(0,b.jsx)(`select`,{value:ge,disabled:de===`loading`,onChange:e=>{_e(e.target.value),pt(e.target.value)},children:[`Note`,`Deed of Trust`,`Boiler`,`Oral Disclosure`].map(e=>(0,b.jsx)(`option`,{value:e,children:e},e))})]}),(0,b.jsx)(`button`,{className:`zd-button`,onClick:ft,children:`Close`})]}),de===`loading`&&(0,b.jsx)(`p`,{role:`status`,children:`Generating PDF preview…`}),de===`error`&&(0,b.jsxs)(`div`,{role:`alert`,children:[(0,b.jsx)(`p`,{className:`error-msg`,children:pe}),(0,b.jsx)(`button`,{className:`zd-button`,onClick:()=>pt(ge),children:`Retry`})]}),de===`ready`&&me&&(0,b.jsx)(`iframe`,{title:`${ge} PDF preview`,src:`${me}#toolbar=1`,style:{width:`100%`,flex:1,minHeight:0,border:`1px solid #e2e8f0`,borderRadius:8}}),(0,b.jsx)(`p`,{className:`zd-hint`,style:{flexShrink:0,margin:0},children:`Preview only. Final signed documents must be independently reviewed before closing.`})]})}),(0,b.jsxs)(`div`,{className:`zd-actions`,children:[(0,b.jsx)(`button`,{className:`zd-button primary`,disabled:se===`saving`,onClick:ut,children:se===`saving`?`Saving...`:se===`saved`?`Saved ✓`:`Save Loan`}),(0,b.jsx)(`button`,{className:`zd-button`,disabled:!w||de===`loading`,onClick:mt,children:`Preview Documents`}),(0,b.jsx)(`button`,{className:`zd-button`,onClick:()=>O(!0),children:`Preview Terms`}),(0,b.jsx)(`button`,{className:`zd-button`,disabled:ve===`generating`,onClick:ht,children:ve===`generating`?`Generating...`:`Generate Documents`}),(0,b.jsx)(`button`,{className:`zd-button`,disabled:be===`generating`,onClick:gt,children:be===`generating`?`Generating...`:`Servicing Agreement`}),(0,b.jsx)(`button`,{className:`zd-button`,disabled:Se===`generating`,onClick:_t,children:Se===`generating`?`Generating...`:`Lender Disclosures`})]}),ve===`error`&&(0,b.jsx)(`p`,{className:`error-msg`,role:`alert`,children:we}),be===`error`&&(0,b.jsx)(`p`,{className:`error-msg`,role:`alert`,children:Ee}),Se===`error`&&(0,b.jsx)(`p`,{className:`error-msg`,role:`alert`,children:Oe})]})]})]})]})}function oc({onLaunch:e,onLegal:t}){let n=e=>{document.getElementById(e)?.scrollIntoView({behavior:`smooth`,block:`start`})};return(0,b.jsxs)(`div`,{className:`zl-page`,children:[(0,b.jsx)(`style`,{children:`
        :root {
          --zl-navy: #080d36;
          --zl-blue: #2f63ff;
          --zl-blue-2: #2455e8;
          --zl-green: #43e19a;
          --zl-green-soft: #d8f7e8;
          --zl-mint: #d7f7e8;
          --zl-ink: #090f38;
          --zl-muted: #59627a;
          --zl-line: #e7e9ef;
          --zl-soft: #f7f8fb;
          --zl-white: #ffffff;
        }

        .zl-page {
          min-height: 100vh;
          background: var(--zl-white);
          color: var(--zl-ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
          overflow-x: clip;
        }

        .zl-page * { box-sizing: border-box; }
        .zl-page button { font: inherit; }
        .zl-page a.zl-footer-link, .zl-page a.zl-nav-link { text-decoration: none; display: inline-block; }

        .zl-shell {
          width: min(1380px, calc(100% - 28px));
          margin: 0 auto;
        }

        .zl-topbar {
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 22px;
          border-bottom: 0;
          color: #080d36;
          font-size: 14px;
          font-weight: 400;
        }

        .zl-top-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border: 0;
          background: transparent;
          color: inherit;
          cursor: pointer;
          padding: 4px 0;
        }
        .zl-top-link {
          font-weight: 400 !important;
        }
        .zl-top-link svg {
          flex: 0 0 auto;
        }
        .zl-top-link:hover { color: var(--zl-blue); }

        .zl-topbar-wrap {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1002;
          background: rgba(255,255,255,.98);
          backdrop-filter: blur(14px);
        }

        .zl-nav-wrap {
          position: fixed;
          top: 44px;
          left: 0;
          right: 0;
          z-index: 1001;
          background: rgba(255,255,255,.98);
          backdrop-filter: blur(14px);
          border-bottom: 0;
        }

        .zl-page > main {
          padding-top: 0;
        }

        .zl-page [id] {
          scroll-margin-top: 126px;
        }

        .zl-nav {
          min-height: 104px;
          display: flex;
          align-items: center;
          gap: 30px;
          padding: 0 30px;
        }

        .zl-brand {
          border: 0;
          background: transparent;
          display: inline-flex;
          align-items: center;
          gap: 13px;
          color: var(--zl-navy);
          cursor: pointer;
          padding: 0;
          min-width: 220px;
        }

        .zl-logo-mark {
          position: relative;
          width: 52px;
          height: 52px;
          flex: 0 0 auto;
        }

        .zl-logo-mark::before,
        .zl-logo-mark::after {
          content: "";
          position: absolute;
          inset: 0;
          clip-path: polygon(50% 0, 100% 28%, 100% 72%, 50% 100%, 0 72%, 0 28%);
        }
        .zl-logo-mark::before { background: var(--zl-blue); }
        .zl-logo-mark::after {
          inset: 12px 11px 12px 11px;
          background: white;
          clip-path: polygon(0 10%, 44% 10%, 74% 28%, 43% 45%, 74% 62%, 74% 89%, 48% 89%, 48% 71%, 0 43%);
        }

        .zl-brand-copy {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: .94;
          letter-spacing: -.045em;
        }
        .zl-brand-copy strong { font-size: 25px; font-weight: 840; }
        .zl-brand-copy span { margin-top: 4px; font-size: 12px; letter-spacing: .06em; color: #5f6780; font-weight: 700; }

        .zl-nav-links {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 35px;
        }

        .zl-nav-link {
          border: 0;
          background: transparent;
          color: #080d36;
          cursor: pointer;
          font-size: 16px;
          font-weight: 700 !important;
          letter-spacing: -0.01em;
          padding: 13px 0;
          white-space: nowrap;
          transition: color .18s ease;
        }
        .zl-nav-link:hover { color: var(--zl-blue); }
        .zl-nav-link:focus,
        .zl-nav-link:focus-visible,
        .zl-top-link:focus,
        .zl-top-link:focus-visible {
          outline: none;
          box-shadow: none;
        }
        .zl-chevron { margin-left: 6px; font-size: 11px; opacity: .7; }

        .zl-nav-cta {
          min-height: 56px;
          border-radius: 999px;
          border: 0;
          background: var(--zl-green);
          color: var(--zl-navy);
          font-size: 16px;
          font-weight: 850;
          padding: 0 30px;
          cursor: pointer;
          white-space: nowrap;
          transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
        }
        .zl-nav-cta:hover {
          transform: translateY(-2px);
          background: #4be9a1;
          box-shadow: 0 16px 30px rgba(67,225,154,.22);
        }

        .zl-menu-btn {
          display: none;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 1px solid var(--zl-line);
          background: #fff;
          color: var(--zl-navy);
          cursor: pointer;
          font-size: 20px;
        }

        .zl-mobile-menu {
          display: none;
        }

        .zl-hero {
          padding: 30px 0 0;
        }

        .zl-hero-frame {
          min-height: 610px;
          display: grid;
          grid-template-columns: 46% 54%;
          overflow: hidden;
          border: 0;
          border-radius: 10px;
          background: #fff;
        }

        .zl-hero-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 74px 44px 72px 74px;
          position: relative;
          z-index: 2;
        }

        .zl-kicker {
          margin: 0 0 26px;
          color: var(--zl-blue);
          font-size: 14px;
          line-height: 1.3;
          font-weight: 850;
          letter-spacing: .15em;
          text-transform: uppercase;
        }

        .zl-hero h1 {
          margin: 0;
          max-width: 560px;
          font-size: clamp(46px, 4.5vw, 66px);
          line-height: 1.06;
          letter-spacing: -.047em;
          font-weight: 820;
          color: #070c33;
        }

        .zl-hero-sub {
          margin: 25px 0 0;
          max-width: 590px;
          color: #232947;
          font-size: 17px;
          line-height: 1.55;
        }

        .zl-hero-actions {
          margin-top: 26px;
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }

        .zl-btn {
          min-height: 52px;
          border-radius: 999px;
          padding: 0 32px;
          font-size: 15px;
          font-weight: 820;
          cursor: pointer;
          transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
        }
        .zl-btn:hover { transform: translateY(-2px); }
        .zl-btn-primary {
          border: 2px solid var(--zl-green);
          background: var(--zl-green);
          color: var(--zl-navy);
        }
        .zl-btn-primary:hover { box-shadow: 0 14px 30px rgba(67,225,154,.2); }
        .zl-btn-outline {
          border: 2px solid var(--zl-green);
          background: #fff;
          color: var(--zl-navy);
        }
        .zl-btn-outline:hover { background: #f6fffb; }

        .zl-hero-checks {
          display: flex;
          flex-wrap: wrap;
          gap: 16px 22px;
          margin-top: 26px;
          color: #6a7289;
          font-size: 12px;
          font-weight: 700;
        }
        .zl-hero-checks span::before {
          content: "✓";
          color: #1ba969;
          font-weight: 900;
          margin-right: 7px;
        }

        .zl-hero-visual {
          position: relative;
          min-height: 610px;
          overflow: hidden;
          background: linear-gradient(180deg, #ddf9ea 0%, #d4f5e4 100%);
          clip-path: polygon(11% 0, 100% 0, 100% 100%, 16% 100%, 0 52%);
        }

        .zl-hero-visual::before {
          content: "";
          position: absolute;
          width: 330px;
          height: 330px;
          right: -75px;
          top: -110px;
          border-radius: 50%;
          background: rgba(255,255,255,.42);
          filter: blur(2px);
        }

        .zl-product-window {
          position: absolute;
          left: 14%;
          top: 96px;
          width: 74%;
          border-radius: 18px;
          overflow: hidden;
          background: #fff;
          border: 1px solid rgba(8,13,54,.08);
          box-shadow: 0 30px 70px rgba(24,50,48,.2);
          transform: translateZ(0);
          animation: zlFloat 6s ease-in-out infinite;
        }

        @keyframes zlFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        .zl-window-bar {
          height: 38px;
          background: #f7f8fb;
          border-bottom: 1px solid #e7e9ee;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 12px;
        }
        .zl-window-dot { width: 7px; height: 7px; border-radius: 50%; background: #c9ced9; }
        .zl-window-url {
          margin-left: 10px;
          flex: 1;
          height: 22px;
          border-radius: 6px;
          background: #fff;
          border: 1px solid #e3e6eb;
          color: #9aa1b0;
          font-size: 9px;
          display: flex;
          align-items: center;
          padding: 0 9px;
        }

        .zl-app-preview {
          display: grid;
          grid-template-columns: 120px 1fr;
          min-height: 388px;
          background: #fafbfc;
        }
        .zl-preview-side {
          background: #0b123e;
          color: #fff;
          padding: 17px 12px;
        }
        .zl-preview-logo { font-size: 12px; font-weight: 850; margin-bottom: 18px; }
        .zl-preview-new {
          padding: 8px 9px;
          border-radius: 8px;
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.14);
          font-size: 8px;
        }
        .zl-preview-loan {
          margin-top: 8px;
          padding: 8px;
          border-radius: 8px;
          background: rgba(70,109,255,.22);
          color: #e5ebff;
          font-size: 8px;
        }
        .zl-preview-loan.dim { opacity: .42; }

        .zl-preview-main { padding: 17px; }
        .zl-preview-head {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: flex-start;
          margin-bottom: 13px;
        }
        .zl-preview-title { font-size: 13px; font-weight: 850; letter-spacing: -.02em; }
        .zl-preview-sub { margin-top: 3px; color: #8992a3; font-size: 8px; }
        .zl-preview-state {
          padding: 5px 7px;
          border-radius: 999px;
          background: #e8edff;
          color: #2d56cb;
          font-size: 7px;
          font-weight: 850;
        }
        .zl-preview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .zl-preview-card {
          background: #fff;
          border: 1px solid #e6e8ed;
          border-radius: 10px;
          padding: 10px;
        }
        .zl-preview-label {
          color: #697287;
          font-size: 7px;
          font-weight: 850;
          text-transform: uppercase;
          letter-spacing: .06em;
          margin-bottom: 7px;
        }
        .zl-preview-input {
          height: 22px;
          border: 1px solid #e2e5ea;
          border-radius: 6px;
          background: #fbfbfc;
          display: flex;
          align-items: center;
          padding: 0 7px;
          margin-top: 5px;
          color: #303750;
          font-size: 7px;
        }
        .zl-preview-actions {
          display: flex;
          justify-content: flex-end;
          gap: 7px;
          margin-top: 11px;
          padding-top: 11px;
          border-top: 1px solid #eceef2;
        }
        .zl-preview-save,
        .zl-preview-generate {
          height: 25px;
          border-radius: 7px;
          display: flex;
          align-items: center;
          padding: 0 9px;
          font-size: 7px;
          font-weight: 800;
        }
        .zl-preview-save { background: #f0f1f4; color: #6e7688; }
        .zl-preview-generate { background: var(--zl-blue); color: white; }

        .zl-floating-card {
          position: absolute;
          z-index: 3;
          background: white;
          border: 1px solid rgba(8,13,54,.07);
          box-shadow: 0 20px 50px rgba(26,61,47,.17);
          border-radius: 13px;
        }
        .zl-float-output {
          right: 7%;
          bottom: 56px;
          width: 235px;
          padding: 18px;
          animation: zlFloat2 7s ease-in-out infinite;
        }
        @keyframes zlFloat2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .zl-float-kicker { color: #8b92a2; font-size: 8px; font-weight: 850; letter-spacing: .08em; text-transform: uppercase; }
        .zl-float-title { margin-top: 12px; font-size: 12px; font-weight: 850; }
        .zl-donut {
          width: 95px;
          height: 95px;
          margin: 16px auto 4px;
          border-radius: 50%;
          background: conic-gradient(var(--zl-blue) 0 64%, #a848f4 64% 100%);
          position: relative;
        }
        .zl-donut::after {
          content: "";
          position: absolute;
          inset: 24px;
          border-radius: 50%;
          background: white;
        }
        .zl-float-badge {
          position: absolute;
          left: 5.5%;
          top: 48px;
          padding: 11px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,.92);
          border: 1px solid rgba(8,13,54,.07);
          box-shadow: 0 12px 30px rgba(25,61,47,.12);
          color: #1b7651;
          font-size: 11px;
          font-weight: 820;
        }
        .zl-float-badge::before { content: "●"; color: #22bd78; margin-right: 7px; }

        .zl-trust {
          padding: 48px 0 78px;
          background: #fff;
        }
        .zl-trust-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          align-items: stretch;
          background: #fff;
        }
        .zl-trust-cell {
          min-height: 126px;
          padding: 8px 34px 4px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-left: 1px solid #e3e6ec;
        }
        .zl-trust-cell:first-child { border-left: 0; }

        .zl-stat-number {
          margin: 0 0 7px;
          font-size: clamp(48px, 4.7vw, 68px);
          line-height: .94;
          font-weight: 760;
          letter-spacing: -.055em;
        }
        .zl-trust-cell:nth-child(1) .zl-stat-number { color: #2867ff; }
        .zl-trust-cell:nth-child(2) .zl-stat-number { color: #10cbd5; }
        .zl-trust-cell:nth-child(3) .zl-stat-number { color: #bd47f2; }
        .zl-trust-cell:nth-child(4) .zl-stat-number { color: #ff735f; }

        .zl-stat-label {
          color: #080d36;
          font-size: 17px;
          line-height: 1.35;
          font-weight: 800;
          letter-spacing: -.015em;
        }

        .zl-connect {
          padding: 96px 0 110px;
          background: #fff;
        }

        .zl-connect-grid {
          width: min(1220px, calc(100% - 40px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: .92fr 1.08fr;
          gap: 86px;
          align-items: center;
        }

        .zl-connect-media {
          position: relative;
          min-height: 560px;
        }

        .zl-connect-photo-wrap {
          position: absolute;
          inset: 0 64px 54px 0;
          overflow: hidden;
          border-radius: 22px;
          background: #eef2f5;
          box-shadow: 0 22px 55px rgba(8,13,54,.11);
        }

        .zl-connect-photo {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .zl-connect-shape {
          position: absolute;
          width: 92px;
          height: 92px;
          right: 20px;
          top: 260px;
          background: #10cbd5;
          clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
          transform: rotate(7deg);
        }

        .zl-connect-card {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 310px;
          padding: 20px;
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 18px 45px rgba(8,13,54,.16);
        }

        .zl-connect-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 15px;
        }

        .zl-connect-card-head strong {
          color: var(--zl-navy);
          font-size: 13px;
        }

        .zl-connect-ready {
          padding: 5px 8px;
          border-radius: 999px;
          background: #ddf6e9;
          color: #18754c;
          font-size: 9px;
          font-weight: 850;
        }

        .zl-connect-card-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 0;
          border-top: 1px solid #eceef3;
          color: #5e677c;
          font-size: 11px;
        }

        .zl-connect-card-row strong {
          color: var(--zl-navy);
          font-size: 11px;
        }

        .zl-connect-copy h2 {
          margin: 0;
          max-width: 650px;
          font-size: clamp(42px, 4.2vw, 62px);
          line-height: 1.06;
          letter-spacing: -.048em;
        }

        .zl-connect-copy > p {
          margin: 22px 0 0;
          max-width: 620px;
          color: #59627a;
          font-size: 17px;
          line-height: 1.65;
        }

        .zl-connect-list {
          display: grid;
          gap: 17px;
          margin: 27px 0 30px;
        }

        .zl-connect-item {
          display: grid;
          grid-template-columns: 22px 1fr;
          gap: 12px;
          align-items: start;
          color: #182044;
          font-size: 16px;
          line-height: 1.5;
        }

        .zl-connect-check {
          width: 20px;
          height: 20px;
          display: grid;
          place-items: center;
          color: var(--zl-navy);
          font-size: 17px;
          font-weight: 900;
        }

        .zl-connect-btn {
          min-height: 52px;
          border: 0;
          border-radius: 999px;
          padding: 0 28px;
          background: var(--zl-green);
          color: var(--zl-navy);
          font-size: 15px;
          font-weight: 820;
          cursor: pointer;
          transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
        }

        .zl-connect-btn:hover {
          transform: translateY(-2px);
          background: #4be9a1;
          box-shadow: 0 14px 30px rgba(67,225,154,.2);
        }

        .zl-section {
          padding: 104px 0;
        }
        .zl-section-soft { background: #f7f8fa; }
        .zl-section-dark { background: #090f38; color: white; }
        .zl-section-inner { width: min(1220px, calc(100% - 40px)); margin: 0 auto; }

        .zl-section-head {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 54px;
          align-items: end;
          margin-bottom: 48px;
        }
        .zl-eyebrow {
          color: var(--zl-blue);
          font-size: 13px;
          font-weight: 850;
          letter-spacing: .13em;
          text-transform: uppercase;
          margin-bottom: 15px;
        }
        .zl-section h2 {
          margin: 0;
          font-size: clamp(40px, 4.3vw, 60px);
          line-height: 1.04;
          letter-spacing: -.045em;
          max-width: 700px;
        }
        .zl-section-lead {
          margin: 0 0 2px auto;
          max-width: 560px;
          color: #626b80;
          font-size: 16px;
          line-height: 1.7;
        }

        .zl-feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .zl-feature-card {
          min-height: 338px;
          padding: 30px;
          border-radius: 18px;
          background: #fff;
          border: 1px solid var(--zl-line);
          box-shadow: 0 10px 30px rgba(8,13,54,.035);
          display: flex;
          flex-direction: column;
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .zl-feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 22px 48px rgba(8,13,54,.08);
        }
        .zl-feature-icon {
          width: 46px;
          height: 46px;
          border-radius: 13px;
          display: grid;
          place-items: center;
          background: #edf2ff;
          color: var(--zl-blue);
          font-size: 18px;
          font-weight: 900;
        }
        .zl-feature-card h3 { margin: 27px 0 10px; font-size: 24px; letter-spacing: -.03em; }
        .zl-feature-card p { margin: 0; color: #657086; font-size: 14px; line-height: 1.65; }
        .zl-mini-ui { margin-top: auto; padding-top: 24px; }
        .zl-mini-row {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          align-items: center;
          margin-top: 7px;
          padding: 10px 11px;
          border: 1px solid #e7e9ee;
          border-radius: 9px;
          background: #fbfbfc;
          font-size: 10px;
          color: #4d566d;
        }
        .zl-mini-tag {
          padding: 4px 6px;
          border-radius: 999px;
          background: #ddf6e9;
          color: #18754c;
          font-weight: 850;
        }

        .zl-workflow {
          display: grid;
          grid-template-columns: .95fr 1.05fr;
          gap: 72px;
          align-items: center;
        }
        .zl-workflow-list { margin-top: 30px; }
        .zl-workflow-item {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 16px;
          padding: 19px 0;
          border-bottom: 1px solid #e4e6eb;
        }
        .zl-step {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--zl-green);
          color: var(--zl-navy);
          font-size: 12px;
          font-weight: 900;
        }
        .zl-workflow-item strong { display: block; font-size: 16px; margin-bottom: 5px; }
        .zl-workflow-item span { color: #667085; font-size: 13px; line-height: 1.55; }

        .zl-doc-stage {
          min-height: 500px;
          border-radius: 30px;
          background: var(--zl-mint);
          position: relative;
          overflow: hidden;
          display: grid;
          place-items: center;
        }
        .zl-doc-stage::before {
          content: "";
          position: absolute;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          top: -90px;
          right: -30px;
          background: rgba(255,255,255,.5);
        }
        .zl-real-note {
          position: relative;
          z-index: 2;
          display: block;
          width: min(405px, 85%);
          max-height: 455px;
          object-fit: contain;
          background: #fff;
          border: 1px solid rgba(8,13,54,.10);
          border-radius: 5px;
          box-shadow: 0 24px 55px rgba(39,71,59,.20);
          transform: rotate(-2deg);
        }

        .zl-dark-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          align-items: center;
        }
        .zl-section-dark .zl-eyebrow { color: #6e95ff; }
        .zl-section-dark .zl-section-lead { color: #b7bfd1; margin-left: 0; margin-top: 22px; }
        .zl-dark-list { margin-top: 28px; display: grid; gap: 13px; }
        .zl-dark-item { display: grid; grid-template-columns: 28px 1fr; gap: 12px; color: #d7dceb; font-size: 14px; line-height: 1.55; }
        .zl-dark-check {
          width: 24px;
          height: 24px;
          border-radius: 7px;
          display: grid;
          place-items: center;
          background: rgba(67,225,154,.13);
          color: var(--zl-green);
          font-size: 12px;
          font-weight: 900;
        }

        .zl-output-panel {
          border-radius: 20px;
          background: #fff;
          color: var(--zl-ink);
          overflow: hidden;
          box-shadow: 0 28px 70px rgba(0,0,0,.25);
        }
        .zl-output-head {
          padding: 20px 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e8eaf0;
          font-size: 13px;
          font-weight: 850;
        }
        .zl-ready {
          padding: 5px 8px;
          border-radius: 999px;
          background: #ddf6e9;
          color: #18754c;
          font-size: 9px;
          font-weight: 850;
        }
        .zl-file-row {
          display: grid;
          grid-template-columns: 40px 1fr auto;
          gap: 12px;
          align-items: center;
          padding: 17px 22px;
          border-bottom: 1px solid #eceef2;
        }
        .zl-file-row:last-child { border-bottom: 0; }
        .zl-file-icon {
          width: 38px;
          height: 38px;
          border-radius: 9px;
          display: grid;
          place-items: center;
          background: #edf2ff;
          color: var(--zl-blue);
          font-size: 9px;
          font-weight: 900;
        }
        .zl-file-name { font-size: 11px; font-weight: 800; }
        .zl-file-meta { margin-top: 3px; color: #9198a8; font-size: 9px; }
        .zl-file-action { color: var(--zl-blue); font-size: 9px; font-weight: 850; }

        .zl-final {
          padding: 92px 0;
          background: #fff;
        }

        .zl-final-box {
          width: min(1220px, calc(100% - 40px));
          margin: 0 auto;
          min-height: 390px;
          border-radius: 10px;
          background: #0b0d3b;
          position: relative;
          overflow: hidden;
          display: grid;
          place-items: center;
          text-align: center;
          padding: 62px 210px;
          box-shadow: 0 24px 60px rgba(8,13,54,.14);
        }

        .zl-final-shape {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 240px;
          pointer-events: none;
        }

        .zl-final-shape-left {
          left: 0;
          background: linear-gradient(180deg, #cc72f7 0%, #b958ec 100%);
          clip-path: polygon(0 0, 78% 0, 100% 21%, 77% 82%, 0 91%);
        }

        .zl-final-shape-right {
          right: 0;
          background: linear-gradient(180deg, #2968ff 0%, #2d5df0 100%);
          clip-path: polygon(42% 0, 100% 0, 100% 100%, 20% 100%, 0 58%);
        }

        .zl-final-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
        }

        .zl-final-kicker {
          margin-bottom: 14px;
          color: #89a7ff;
          font-size: 12px;
          font-weight: 850;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .zl-final h2 {
          margin: 0;
          color: #fff;
          font-size: clamp(42px, 4.6vw, 64px);
          line-height: 1.02;
          letter-spacing: -.05em;
        }

        .zl-final p {
          margin: 20px auto 0;
          max-width: 660px;
          color: #c7cde0;
          font-size: 17px;
          line-height: 1.6;
        }

        .zl-trial-btn {
          min-height: 54px;
          margin-top: 30px;
          border: 0;
          border-radius: 999px;
          padding: 0 32px;
          background: var(--zl-green);
          color: #071034;
          font-size: 16px;
          font-weight: 850;
          cursor: pointer;
          box-shadow: 0 14px 34px rgba(67,225,154,.22);
          transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
        }

        .zl-trial-btn:hover {
          transform: translateY(-2px);
          background: #4be9a1;
          box-shadow: 0 18px 38px rgba(67,225,154,.3);
        }

        .zl-trial-note {
          margin-top: 12px;
          color: #8f98b5;
          font-size: 12px;
          font-weight: 650;
        }

        .zl-footer {
          background: #fff;
          color: var(--zl-navy);
          padding: 0;
        }

        .zl-footer-main {
          width: min(1280px, calc(100% - 56px));
          margin: 0 auto;
          padding: 42px 0 54px;
          border-top: 1px solid #cfd4df;
          display: grid;
          grid-template-columns: 190px repeat(5, minmax(120px, 1fr));
          gap: 38px;
          align-items: start;
        }

        .zl-footer-cta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
        }

        .zl-footer-trial {
          min-height: 48px;
          border-radius: 999px;
          padding: 0 28px;
          border: 2px solid var(--zl-green);
          background: #fff;
          color: var(--zl-navy);
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          transition: background .18s ease, transform .18s ease;
        }

        .zl-footer-trial:hover {
          background: #f3fff9;
          transform: translateY(-1px);
        }

        .zl-footer-cta-note {
          color: #4d5870;
          font-size: 14px;
          line-height: 1.5;
        }

        .zl-footer-col h4 {
          margin: 0 0 22px;
          color: var(--zl-navy);
          font-size: 16px;
          line-height: 1.2;
          font-weight: 800;
        }

        .zl-footer-links {
          display: grid;
          gap: 16px;
        }

        .zl-footer-link {
          border: 0;
          background: transparent;
          padding: 0;
          text-align: left;
          color: #17203f;
          font: inherit;
          font-size: 14px;
          line-height: 1.25;
          cursor: pointer;
        }

        .zl-footer-link:hover {
          color: var(--zl-blue);
        }

        .zl-footer-bottom {
          border-top: 1px solid #d9dde6;
        }

        .zl-footer-bottom-inner {
          width: min(1280px, calc(100% - 56px));
          min-height: 68px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          color: #17203f;
          font-size: 13px;
        }

        .zl-footer-legal {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .zl-footer-legal button {
          border: 0;
          background: transparent;
          padding: 0;
          color: inherit;
          font: inherit;
          cursor: pointer;
        }

        .zl-footer-legal button:hover {
          color: var(--zl-blue);
        }

        .zl-footer-socials {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .zl-social {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border: 0;
          background: transparent;
          color: var(--zl-navy);
          padding: 0;
          cursor: pointer;
        }

        .zl-social svg {
          width: 21px;
          height: 21px;
        }

        .zl-social:hover {
          color: var(--zl-blue);
        }

        @media (max-width: 1120px) {
          .zl-nav-links { gap: 20px; }
          .zl-brand { min-width: 185px; }
          .zl-brand-copy strong { font-size: 22px; }
          .zl-hero-copy { padding-left: 52px; }
          .zl-product-window { left: 12%; width: 79%; }
        }

        @media (max-width: 1120px) {
          .zl-footer-main {
            grid-template-columns: 170px repeat(3, 1fr);
          }
          .zl-footer-col:nth-of-type(5),
          .zl-footer-col:nth-of-type(6) {
            margin-top: 8px;
          }
        }

        @media (max-width: 930px) {
          .zl-topbar-wrap { display: none; }
          .zl-topbar { display: none; }
          .zl-nav-wrap { top: 0; }
          .zl-page > main { padding-top: 0; }
          .zl-page [id] { scroll-margin-top: 78px; }
          .zl-nav { min-height: 82px; padding: 0 18px; }
          .zl-nav-links, .zl-nav-cta { display: none; }
          .zl-menu-btn { display: grid; place-items: center; margin-left: auto; }
          .zl-mobile-menu {
            display: grid;
            position: absolute;
            top: 82px;
            left: 14px;
            right: 14px;
            gap: 4px;
            padding: 12px;
            border: 1px solid var(--zl-line);
            border-radius: 14px;
            background: #fff;
            box-shadow: 0 24px 50px rgba(8,13,54,.13);
          }
          .zl-mobile-menu .zl-nav-link { width: 100%; text-align: left; padding: 12px; }
          .zl-mobile-menu .zl-nav-cta { display: block; width: 100%; margin-top: 6px; }
          .zl-hero { padding-top: 16px; }
          .zl-hero-frame { grid-template-columns: 1fr; }
          .zl-hero-copy { padding: 64px 42px 56px; }
          .zl-hero-visual { min-height: 560px; clip-path: none; }
          .zl-trust-inner { grid-template-columns: 1fr 1fr; }
          .zl-trust-cell { border-top: 1px solid #e3e6ec; }
          .zl-trust-cell:nth-child(odd) { border-left: 0; }
          .zl-trust-cell:nth-child(-n+2) { border-top: 0; }
          .zl-connect-grid { grid-template-columns: 1fr; gap: 52px; }
          .zl-connect-media { min-height: 530px; }
          .zl-connect-photo-wrap { inset: 0 50px 44px 0; }
          .zl-connect-copy { max-width: 760px; }
          .zl-section-head, .zl-workflow, .zl-dark-grid { grid-template-columns: 1fr; }
          .zl-section-lead { margin-left: 0; }
          .zl-feature-grid { grid-template-columns: 1fr; }
          .zl-final-box {
            min-height: 360px;
            padding: 56px 150px;
          }
          .zl-final-shape { width: 190px; }
        }

        @media (max-width: 620px) {
          .zl-shell { width: min(100% - 12px, 1380px); }
          .zl-nav { padding: 0 12px; }
          .zl-brand { min-width: 0; }
          .zl-logo-mark { width: 42px; height: 42px; }
          .zl-brand-copy strong { font-size: 20px; }
          .zl-brand-copy span { display: none; }
          .zl-hero-frame { border-radius: 8px; }
          .zl-hero-copy { padding: 50px 24px 48px; }
          .zl-kicker { font-size: 11px; margin-bottom: 19px; }
          .zl-hero h1 { font-size: clamp(43px, 13vw, 58px); }
          .zl-hero-sub { font-size: 16px; }
          .zl-btn { width: 100%; }
          .zl-hero-visual { min-height: 470px; }
          .zl-product-window { top: 72px; left: 6%; width: 88%; }
          .zl-app-preview { grid-template-columns: 1fr; min-height: 330px; }
          .zl-preview-side { display: none; }
          .zl-preview-grid { grid-template-columns: 1fr; }
          .zl-floating-card.zl-float-output { width: 190px; right: 4%; bottom: 28px; padding: 13px; }
          .zl-float-badge { left: 4%; top: 32px; font-size: 9px; }
          .zl-trust { padding: 34px 0 54px; }
          .zl-trust-inner { grid-template-columns: 1fr; }
          .zl-trust-cell {
            min-height: 108px;
            padding: 20px 24px;
            border-left: 0;
            border-top: 1px solid #e3e6ec !important;
          }
          .zl-trust-cell:first-child { border-top: 0 !important; }
          .zl-stat-number { font-size: 52px; }
          .zl-stat-label { font-size: 16px; }
          .zl-connect { padding: 66px 0 76px; }
          .zl-connect-grid { width: min(100% - 28px, 1220px); gap: 38px; }
          .zl-connect-media { min-height: 430px; }
          .zl-connect-photo-wrap { inset: 0 24px 44px 0; border-radius: 18px; }
          .zl-connect-card { width: min(280px, 86%); padding: 16px; }
          .zl-connect-shape { width: 68px; height: 68px; right: 6px; top: 225px; }
          .zl-connect-copy h2 { font-size: clamp(38px, 11vw, 50px); }
          .zl-connect-copy > p { font-size: 16px; }
          .zl-connect-item { font-size: 15px; }
          .zl-connect-btn { width: 100%; }
          .zl-section { padding: 76px 0; }
          .zl-section-inner { width: min(100% - 28px, 1220px); }
          .zl-section-head { gap: 22px; }
          .zl-doc-stage { min-height: 410px; }
          .zl-paper { width: 240px; min-height: 320px; padding: 22px; }
          .zl-final { padding: 64px 0; }
          .zl-final-box {
            width: min(100% - 28px, 1220px);
            min-height: 390px;
            padding: 48px 30px;
          }
          .zl-final-shape { width: 105px; opacity: .82; }
          .zl-final-content { max-width: 560px; }
          .zl-final h2 { font-size: clamp(38px, 11vw, 52px); }
          .zl-final p { font-size: 15px; }
          .zl-trial-btn { width: 100%; max-width: 290px; }
          .zl-footer-main {
            width: min(100% - 28px, 1280px);
            grid-template-columns: 1fr 1fr;
            gap: 34px 26px;
            padding: 38px 0 44px;
          }
          .zl-footer-cta { grid-column: 1 / -1; }
          .zl-footer-bottom-inner {
            width: min(100% - 28px, 1280px);
            min-height: 0;
            padding: 24px 0;
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .zl-product-window, .zl-float-output { animation: none; }
          .zl-btn, .zl-nav-cta, .zl-feature-card { transition: none; }
        }
      
        .zl-nav { position: relative; }
        .zd-mega { gap: clamp(12px, 2vw, 30px); }
        .zd-mega-trigger { position:relative; display:flex; align-items:center; gap:6px; }
        .zd-mega-trigger::after { content:""; position:absolute; bottom:2px; left:0; right:0; height:3px; border-radius:4px; background:#39db90; transform:scaleX(0); transform-origin:left; transition:transform .22s ease; }
        .zd-mega-trigger[aria-expanded="true"]::after,.zd-mega-trigger:hover::after { transform:scaleX(1); }
        .zd-mega-trigger svg { transition:transform .22s ease; }
        .zd-mega-trigger[aria-expanded="true"] svg { transform:rotate(180deg); }
        .zd-mega-trigger:focus-visible,.zd-mega a:focus-visible,.zd-mega-mobile a:focus-visible { outline:2px solid #315aff; outline-offset:3px; }
        .zd-mega-panel { position:absolute; top:calc(100% - 15px); right:30px; width:min(680px,calc(100% - 60px)); display:grid; grid-template-columns:1.6fr 1fr; background:#fff; border:1px solid #dce1eb; border-radius:22px; box-shadow:0 24px 65px #080d3622; overflow:hidden; animation:zdMegaIn .22s cubic-bezier(.2,.75,.25,1) both; }
        @keyframes zdMegaIn { from {opacity:0;transform:translateY(-9px) scale(.985);} to {opacity:1;transform:translateY(0) scale(1);} }
        .zd-mega-main,.zd-mega-more { padding:26px; }
        .zd-mega-more { background:#f7f9fc; border-left:1px solid #e2e6ef; }
        .zd-mega-label { color:#626d85; font-size:12px; font-weight:800; letter-spacing:.13em; text-transform:uppercase; margin:0 0 15px 8px; }
        .zd-mega-link { display:flex; align-items:center; gap:12px; padding:11px 8px; color:#080d36; text-decoration:none; border-radius:10px; transition:background .18s; }
        .zd-mega-link:hover,.zd-mega-more a:hover { background:#edf2ff; color:#315aff; }
        .zd-mega-icon { width:37px;height:37px;flex:0 0 37px;display:grid;place-items:center;border-radius:10px;background:#edf2ff;color:#315aff;font-size:21px; }
        .zd-mega-link:nth-of-type(2) .zd-mega-icon {background:#f2eaff;color:#9851d5;}
        .zd-mega-link:nth-of-type(3) .zd-mega-icon {background:#fff0eb;color:#df7257;}
        .zd-mega-link:nth-of-type(4) .zd-mega-icon {background:#e3faf0;color:#19865d;}
        .zd-mega-link strong,.zd-mega-link small {display:block;}
        .zd-mega-link strong {font-size:15px; font-weight:650;}
        .zd-mega-link small {font-size:12px;color:#69758b;margin-top:4px;line-height:1.4;}
        .zd-mega-arrow {margin-left:auto;opacity:0;transform:translateX(-4px);transition:opacity .18s,transform .18s;}
        .zd-mega-link:hover .zd-mega-arrow,.zd-mega-link:focus-visible .zd-mega-arrow {opacity:1;transform:translateX(0);}
        .zd-mega-more a {display:flex;justify-content:space-between;gap:8px;padding:11px 8px;border-radius:8px;color:#080d36;text-decoration:none;font-size:14px;}
        .zd-mega-more a span {color:#315aff;}
        .zd-mega-mobile .zd-mega-panel {position:static;width:100%;display:block;box-shadow:none;border-radius:12px;margin-bottom:8px;}
        .zd-mega-mobile .zd-mega-more {border-left:0;border-top:1px solid #e2e6ef;}
        .zd-mega-mobile .zd-mega-main,.zd-mega-mobile .zd-mega-more {padding:12px;}
        .zd-mega-mobile .zd-mega-trigger {justify-content:space-between;}
        .zl-mobile-menu {max-height:calc(100dvh - 100px);overflow-y:auto;}
        @media(max-width:1100px) and (min-width:931px) { .zd-mega {gap:12px;} .zl-nav {gap:14px;padding:0 16px;} .zl-brand {min-width:180px;} .zl-nav-cta {padding:0 18px;} }
        @media(prefers-reduced-motion:reduce) { .zd-mega-panel {animation:none;} .zd-mega-trigger::after,.zd-mega-trigger svg,.zd-mega-arrow {transition:none;} }
`}),(0,b.jsx)(C,{onLaunch:e}),(0,b.jsxs)(`main`,{children:[(0,b.jsx)(`section`,{className:`zl-hero`,children:(0,b.jsx)(`div`,{className:`zl-shell`,children:(0,b.jsxs)(`div`,{className:`zl-hero-frame`,children:[(0,b.jsxs)(`div`,{className:`zl-hero-copy`,children:[(0,b.jsx)(`p`,{className:`zl-kicker`,children:`Accurate, fast, and repeatable`}),(0,b.jsx)(`h1`,{children:`The loan document platform for private lenders.`}),(0,b.jsx)(`p`,{className:`zl-hero-sub`,children:`Turn one set of loan data into a clean, consistent closing package — without rebuilding the same documents deal after deal.`}),(0,b.jsxs)(`div`,{className:`zl-hero-actions`,children:[(0,b.jsx)(`button`,{className:`zl-btn zl-btn-primary`,onClick:e,children:`Start a loan`}),(0,b.jsx)(`button`,{className:`zl-btn zl-btn-outline`,onClick:()=>n(`platform`),children:`Explore the platform`})]}),(0,b.jsxs)(`div`,{className:`zl-hero-checks`,children:[(0,b.jsx)(`span`,{children:`Florida + California`}),(0,b.jsx)(`span`,{children:`Reusable loan records`}),(0,b.jsx)(`span`,{children:`Word + ZIP outputs`})]})]}),(0,b.jsxs)(`div`,{className:`zl-hero-visual`,"aria-label":`ZapDocs product preview`,children:[(0,b.jsx)(`div`,{className:`zl-float-badge`,children:`Loan ready to generate`}),(0,b.jsxs)(`div`,{className:`zl-product-window`,children:[(0,b.jsxs)(`div`,{className:`zl-window-bar`,children:[(0,b.jsx)(`span`,{className:`zl-window-dot`}),(0,b.jsx)(`span`,{className:`zl-window-dot`}),(0,b.jsx)(`span`,{className:`zl-window-dot`}),(0,b.jsx)(`div`,{className:`zl-window-url`,children:`app.zapdocs.com / loans`})]}),(0,b.jsx)(`img`,{src:Ps,alt:`Actual ZapDocs loan workspace`,style:{width:`100%`,display:`block`,height:`auto`,background:`#fff`}})]}),(0,b.jsxs)(`div`,{className:`zl-floating-card zl-float-output`,children:[(0,b.jsx)(`div`,{className:`zl-float-kicker`,children:`Document package`}),(0,b.jsx)(`div`,{className:`zl-float-title`,children:`Generated outputs`}),(0,b.jsx)(`div`,{className:`zl-donut`})]})]})]})})}),(0,b.jsx)(`section`,{className:`zl-trust`,"aria-label":`ZapDocs platform statistics`,children:(0,b.jsx)(`div`,{className:`zl-shell`,children:(0,b.jsxs)(`div`,{className:`zl-trust-inner`,children:[(0,b.jsxs)(`div`,{className:`zl-trust-cell`,children:[(0,b.jsx)(`div`,{className:`zl-stat-number`,children:`2`}),(0,b.jsx)(`div`,{className:`zl-stat-label`,children:`State-specific lending workflows`})]}),(0,b.jsxs)(`div`,{className:`zl-trust-cell`,children:[(0,b.jsx)(`div`,{className:`zl-stat-number`,children:`50+`}),(0,b.jsx)(`div`,{className:`zl-stat-label`,children:`Loan data fields in one workspace`})]}),(0,b.jsxs)(`div`,{className:`zl-trust-cell`,children:[(0,b.jsx)(`div`,{className:`zl-stat-number`,children:`3`}),(0,b.jsx)(`div`,{className:`zl-stat-label`,children:`Document generation options`})]}),(0,b.jsxs)(`div`,{className:`zl-trust-cell`,children:[(0,b.jsx)(`div`,{className:`zl-stat-number`,children:`1`}),(0,b.jsx)(`div`,{className:`zl-stat-label`,children:`Reusable loan record per deal`})]})]})})}),(0,b.jsx)(`section`,{className:`zl-connect`,id:`teams`,children:(0,b.jsxs)(`div`,{className:`zl-connect-grid`,children:[(0,b.jsxs)(`div`,{className:`zl-connect-media`,children:[(0,b.jsx)(`div`,{className:`zl-connect-photo-wrap`,children:(0,b.jsx)(`img`,{className:`zl-connect-photo`,src:Fs,alt:`Business professionals reviewing a deal together`})}),(0,b.jsx)(`div`,{className:`zl-connect-shape`,"aria-hidden":`true`}),(0,b.jsxs)(`div`,{className:`zl-connect-card`,children:[(0,b.jsxs)(`div`,{className:`zl-connect-card-head`,children:[(0,b.jsx)(`strong`,{children:`Active loan file`}),(0,b.jsx)(`span`,{className:`zl-connect-ready`,children:`Ready`})]}),(0,b.jsxs)(`div`,{className:`zl-connect-card-row`,children:[(0,b.jsx)(`span`,{children:`Loan record`}),(0,b.jsx)(`strong`,{children:`Saved`})]}),(0,b.jsxs)(`div`,{className:`zl-connect-card-row`,children:[(0,b.jsx)(`span`,{children:`State workflow`}),(0,b.jsx)(`strong`,{children:`Selected`})]}),(0,b.jsxs)(`div`,{className:`zl-connect-card-row`,children:[(0,b.jsx)(`span`,{children:`Document package`}),(0,b.jsx)(`strong`,{children:`Generate`})]})]})]}),(0,b.jsxs)(`div`,{className:`zl-connect-copy`,children:[(0,b.jsx)(`div`,{className:`zl-eyebrow`,children:`Built for private lending teams`}),(0,b.jsx)(`h2`,{children:`Keep every deal, party, and document connected.`}),(0,b.jsx)(`p`,{children:`ZapDocs keeps the information behind a private loan in one structured workspace, so your team can move from deal terms to finished documents without rebuilding the same file over and over.`}),(0,b.jsxs)(`div`,{className:`zl-connect-list`,children:[(0,b.jsxs)(`div`,{className:`zl-connect-item`,children:[(0,b.jsx)(`span`,{className:`zl-connect-check`,children:`✓`}),(0,b.jsx)(`span`,{children:`Reuse one saved loan record instead of retyping the same terms into every document.`})]}),(0,b.jsxs)(`div`,{className:`zl-connect-item`,children:[(0,b.jsx)(`span`,{className:`zl-connect-check`,children:`✓`}),(0,b.jsx)(`span`,{children:`Switch between Florida and California document workflows from the same interface.`})]}),(0,b.jsxs)(`div`,{className:`zl-connect-item`,children:[(0,b.jsx)(`span`,{className:`zl-connect-check`,children:`✓`}),(0,b.jsx)(`span`,{children:`Generate a complete package or the lender-facing document you need for the transaction.`})]}),(0,b.jsxs)(`div`,{className:`zl-connect-item`,children:[(0,b.jsx)(`span`,{className:`zl-connect-check`,children:`✓`}),(0,b.jsx)(`span`,{children:`Return to a saved deal, update the data, and regenerate documents when terms change.`})]})]}),(0,b.jsx)(`button`,{className:`zl-connect-btn`,onClick:()=>n(`platform`),children:`Explore the platform`})]})]})}),(0,b.jsx)(`section`,{className:`zl-section zl-section-soft`,id:`platform`,children:(0,b.jsxs)(`div`,{className:`zl-section-inner`,children:[(0,b.jsxs)(`div`,{className:`zl-section-head`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`zl-eyebrow`,children:`The ZapDocs platform`}),(0,b.jsx)(`h2`,{children:`Document preparation without the repetitive work.`})]}),(0,b.jsx)(`p`,{className:`zl-section-lead`,children:`Keep the data your documents depend on in one place, then generate the right set of files from that same record whenever the deal changes.`})]}),(0,b.jsxs)(`div`,{className:`zl-feature-grid`,children:[(0,b.jsxs)(`article`,{className:`zl-feature-card`,children:[(0,b.jsx)(`div`,{className:`zl-feature-icon`,children:`01`}),(0,b.jsx)(`h3`,{children:`Capture the deal once.`}),(0,b.jsx)(`p`,{children:`Store loan terms, dates, property information, borrower details, lender data and payment schedules together.`}),(0,b.jsxs)(`div`,{className:`zl-mini-ui`,children:[(0,b.jsxs)(`div`,{className:`zl-mini-row`,children:[(0,b.jsx)(`span`,{children:`Loan Amount`}),(0,b.jsx)(`strong`,{children:`$425,000`})]}),(0,b.jsxs)(`div`,{className:`zl-mini-row`,children:[(0,b.jsx)(`span`,{children:`Interest Rate`}),(0,b.jsx)(`strong`,{children:`9.50%`})]}),(0,b.jsxs)(`div`,{className:`zl-mini-row`,children:[(0,b.jsx)(`span`,{children:`Property State`}),(0,b.jsx)(`strong`,{children:`CA`})]})]})]}),(0,b.jsxs)(`article`,{className:`zl-feature-card`,children:[(0,b.jsx)(`div`,{className:`zl-feature-icon`,children:`02`}),(0,b.jsx)(`h3`,{children:`Match the loan.`}),(0,b.jsx)(`p`,{children:`Switch between state workflows and maintain custom payment schedules without rebuilding the file from scratch.`}),(0,b.jsxs)(`div`,{className:`zl-mini-ui`,children:[(0,b.jsxs)(`div`,{className:`zl-mini-row`,children:[(0,b.jsx)(`span`,{children:`California`}),(0,b.jsx)(`span`,{className:`zl-mini-tag`,children:`Deed of Trust`})]}),(0,b.jsxs)(`div`,{className:`zl-mini-row`,children:[(0,b.jsx)(`span`,{children:`Florida`}),(0,b.jsx)(`span`,{className:`zl-mini-tag`,children:`Mortgage`})]}),(0,b.jsxs)(`div`,{className:`zl-mini-row`,children:[(0,b.jsx)(`span`,{children:`Payment rows`}),(0,b.jsx)(`strong`,{children:`Custom`})]})]})]}),(0,b.jsxs)(`article`,{className:`zl-feature-card`,children:[(0,b.jsx)(`div`,{className:`zl-feature-icon`,children:`03`}),(0,b.jsx)(`h3`,{children:`Generate the package.`}),(0,b.jsx)(`p`,{children:`Create the complete package or pull the specific lender-facing documents your transaction needs.`}),(0,b.jsxs)(`div`,{className:`zl-mini-ui`,children:[(0,b.jsxs)(`div`,{className:`zl-mini-row`,children:[(0,b.jsx)(`span`,{children:`Full loan package`}),(0,b.jsx)(`strong`,{children:`.ZIP`})]}),(0,b.jsxs)(`div`,{className:`zl-mini-row`,children:[(0,b.jsx)(`span`,{children:`Lender instructions`}),(0,b.jsx)(`strong`,{children:`.DOCX`})]}),(0,b.jsxs)(`div`,{className:`zl-mini-row`,children:[(0,b.jsx)(`span`,{children:`Lender disclosure`}),(0,b.jsx)(`strong`,{children:`.DOCX`})]})]})]})]})]})}),(0,b.jsx)(`section`,{className:`zl-section`,id:`workflow`,children:(0,b.jsxs)(`div`,{className:`zl-section-inner zl-workflow`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`zl-eyebrow`,children:`A cleaner workflow`}),(0,b.jsx)(`h2`,{children:`From loan terms to closing docs in three steps.`}),(0,b.jsxs)(`div`,{className:`zl-workflow-list`,children:[(0,b.jsxs)(`div`,{className:`zl-workflow-item`,children:[(0,b.jsx)(`div`,{className:`zl-step`,children:`1`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Create the loan record`}),(0,b.jsx)(`span`,{children:`Name the file, choose the state and keep the transaction organized from the start.`})]})]}),(0,b.jsxs)(`div`,{className:`zl-workflow-item`,children:[(0,b.jsx)(`div`,{className:`zl-step`,children:`2`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Complete the deal fields`}),(0,b.jsx)(`span`,{children:`Add terms, parties, property details, disclosures and the payment schedule in one structured workspace.`})]})]}),(0,b.jsxs)(`div`,{className:`zl-workflow-item`,children:[(0,b.jsx)(`div`,{className:`zl-step`,children:`3`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`strong`,{children:`Generate the documents`}),(0,b.jsx)(`span`,{children:`Save the current loan data and produce the output package that matches the file.`})]})]})]})]}),(0,b.jsx)(`div`,{className:`zl-doc-stage`,"aria-label":`Example promissory note produced by ZapDocs`,children:(0,b.jsx)(`img`,{className:`zl-real-note`,src:Is,alt:`Sample promissory note`,loading:`lazy`})})]})}),(0,b.jsx)(`section`,{className:`zl-section zl-section-dark`,id:`outputs`,children:(0,b.jsxs)(`div`,{className:`zl-section-inner zl-dark-grid`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`zl-eyebrow`,children:`Document output`}),(0,b.jsx)(`h2`,{children:`Generate the file that is ready to move forward.`}),(0,b.jsx)(`p`,{className:`zl-section-lead`,children:`The latest loan data stays behind each output, so document creation becomes a repeatable operation instead of a manual editing project.`}),(0,b.jsxs)(`div`,{className:`zl-dark-list`,children:[(0,b.jsxs)(`div`,{className:`zl-dark-item`,children:[(0,b.jsx)(`span`,{className:`zl-dark-check`,children:`✓`}),(0,b.jsx)(`span`,{children:`Full loan-document package from the active loan record.`})]}),(0,b.jsxs)(`div`,{className:`zl-dark-item`,children:[(0,b.jsx)(`span`,{className:`zl-dark-check`,children:`✓`}),(0,b.jsx)(`span`,{children:`Separate lender instructions when the full package is not needed.`})]}),(0,b.jsxs)(`div`,{className:`zl-dark-item`,children:[(0,b.jsx)(`span`,{className:`zl-dark-check`,children:`✓`}),(0,b.jsx)(`span`,{children:`California lender disclosure generation from the same deal data.`})]})]})]}),(0,b.jsxs)(`div`,{className:`zl-output-panel`,children:[(0,b.jsxs)(`div`,{className:`zl-output-head`,children:[(0,b.jsx)(`span`,{children:`Generated documents`}),(0,b.jsx)(`span`,{className:`zl-ready`,children:`Ready`})]}),(0,b.jsxs)(`div`,{className:`zl-file-row`,children:[(0,b.jsx)(`div`,{className:`zl-file-icon`,children:`ZIP`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`zl-file-name`,children:`Loan_2026-104_Documents.zip`}),(0,b.jsx)(`div`,{className:`zl-file-meta`,children:`Complete package`})]}),(0,b.jsx)(`div`,{className:`zl-file-action`,children:`Download`})]}),(0,b.jsxs)(`div`,{className:`zl-file-row`,children:[(0,b.jsx)(`div`,{className:`zl-file-icon`,children:`DOC`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`zl-file-name`,children:`Lender_Instructions_Loan_2026-104.docx`}),(0,b.jsx)(`div`,{className:`zl-file-meta`,children:`Lender document`})]}),(0,b.jsx)(`div`,{className:`zl-file-action`,children:`Download`})]}),(0,b.jsxs)(`div`,{className:`zl-file-row`,children:[(0,b.jsx)(`div`,{className:`zl-file-icon`,children:`DOC`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{className:`zl-file-name`,children:`Lender_Disclosure_Loan_2026-104.docx`}),(0,b.jsx)(`div`,{className:`zl-file-meta`,children:`California disclosure`})]}),(0,b.jsx)(`div`,{className:`zl-file-action`,children:`Download`})]})]})]})}),(0,b.jsx)(`section`,{className:`zl-final`,id:`final`,children:(0,b.jsxs)(`div`,{className:`zl-final-box`,children:[(0,b.jsx)(`div`,{className:`zl-final-shape zl-final-shape-left`,"aria-hidden":`true`}),(0,b.jsx)(`div`,{className:`zl-final-shape zl-final-shape-right`,"aria-hidden":`true`}),(0,b.jsxs)(`div`,{className:`zl-final-content`,children:[(0,b.jsx)(`div`,{className:`zl-final-kicker`,children:`Ready to simplify your closing workflow?`}),(0,b.jsx)(`h2`,{children:`Generate your next loan package with ZapDocs.`}),(0,b.jsx)(`p`,{children:`Start with one loan record, keep the deal organized, and generate the documents you need without rebuilding the same file from scratch.`}),(0,b.jsx)(`button`,{className:`zl-trial-btn`,onClick:()=>window.location.assign(`/free-trial`),children:`Start Free Trial`}),(0,b.jsx)(`div`,{className:`zl-trial-note`,children:`Open the workspace and create your first loan.`})]})]})})]}),(0,b.jsxs)(`footer`,{className:`zl-footer`,children:[(0,b.jsxs)(`div`,{className:`zl-footer-main`,children:[(0,b.jsxs)(`div`,{className:`zl-footer-cta`,children:[(0,b.jsx)(`button`,{className:`zl-footer-trial`,onClick:()=>window.location.assign(`/free-trial`),children:`Start Free Trial`}),(0,b.jsx)(`div`,{className:`zl-footer-cta-note`,children:`Build your first loan record and see the document workflow in action.`})]}),(0,b.jsxs)(`div`,{className:`zl-footer-col`,children:[(0,b.jsx)(`h4`,{children:`Platform`}),(0,b.jsxs)(`div`,{className:`zl-footer-links`,children:[(0,b.jsx)(`a`,{className:`zl-footer-link`,href:`/platform`,children:`Product overview`}),(0,b.jsx)(`a`,{className:`zl-footer-link`,href:`/loan-workflow`,children:`Loan workflow`}),(0,b.jsx)(`a`,{className:`zl-footer-link`,href:`/document-generation`,children:`Document generation`}),(0,b.jsx)(`a`,{className:`zl-footer-link`,href:`/team-workspace`,children:`Team workspace`})]})]}),(0,b.jsxs)(`div`,{className:`zl-footer-col`,children:[(0,b.jsx)(`h4`,{children:`Solutions`}),(0,b.jsxs)(`div`,{className:`zl-footer-links`,children:[(0,b.jsx)(`a`,{className:`zl-footer-link`,href:`/private-lenders`,children:`Private lenders`}),(0,b.jsx)(`a`,{className:`zl-footer-link`,href:`/loan-originators`,children:`Loan originators`}),(0,b.jsx)(`a`,{className:`zl-footer-link`,href:`/servicing-teams`,children:`Servicing teams`}),(0,b.jsx)(`a`,{className:`zl-footer-link`,href:`/broker-workflows`,children:`Broker workflows`})]})]}),(0,b.jsxs)(`div`,{className:`zl-footer-col`,children:[(0,b.jsx)(`h4`,{children:`Resources`}),(0,b.jsxs)(`div`,{className:`zl-footer-links`,children:[(0,b.jsx)(`a`,{className:`zl-footer-link`,href:`/how-it-works`,children:`How it works`}),(0,b.jsx)(`a`,{className:`zl-footer-link`,href:`/document-outputs`,children:`Document outputs`}),(0,b.jsx)(`a`,{className:`zl-footer-link`,href:`/product-guide`,children:`Product guide`}),(0,b.jsx)(`a`,{className:`zl-footer-link`,href:`/getting-started`,children:`Getting started`})]})]}),(0,b.jsxs)(`div`,{className:`zl-footer-col`,children:[(0,b.jsx)(`h4`,{children:`Company`}),(0,b.jsxs)(`div`,{className:`zl-footer-links`,children:[(0,b.jsx)(`a`,{className:`zl-footer-link`,href:`/about`,children:`About ZapDocs`}),(0,b.jsx)(`a`,{className:`zl-footer-link`,href:`/contact`,children:`Contact`}),(0,b.jsx)(`a`,{className:`zl-footer-link`,href:`/security`,children:`Security`}),(0,b.jsx)(`a`,{className:`zl-footer-link`,href:`/updates`,children:`Updates`})]})]}),(0,b.jsxs)(`div`,{className:`zl-footer-col`,children:[(0,b.jsx)(`h4`,{children:`Get Started`}),(0,b.jsxs)(`div`,{className:`zl-footer-links`,children:[(0,b.jsx)(`button`,{className:`zl-footer-link`,onClick:e,children:`Open ZapDocs`}),(0,b.jsx)(`button`,{className:`zl-footer-link`,onClick:()=>window.location.assign(`/free-trial`),children:`Start free trial`}),(0,b.jsx)(`button`,{className:`zl-footer-link`,onClick:e,children:`Create a loan`})]})]}),(0,b.jsxs)(`div`,{className:`zl-footer-col`,children:[(0,b.jsx)(`h4`,{children:`Support`}),(0,b.jsxs)(`div`,{className:`zl-footer-links`,children:[(0,b.jsx)(`a`,{className:`zl-footer-link`,href:`/help-center`,children:`Help center`}),(0,b.jsx)(`a`,{className:`zl-footer-link`,href:`/contact-support`,children:`Contact support`})]})]})]}),(0,b.jsx)(`div`,{className:`zl-footer-bottom`,children:(0,b.jsxs)(`div`,{className:`zl-footer-bottom-inner`,children:[(0,b.jsxs)(`div`,{className:`zl-footer-legal`,children:[(0,b.jsx)(`span`,{children:`© 2026 ZapDocs. All rights reserved.`}),(0,b.jsx)(`span`,{children:`·`}),(0,b.jsx)(`button`,{type:`button`,onClick:()=>t(`/terms`),children:`Terms`}),(0,b.jsx)(`span`,{children:`·`}),(0,b.jsx)(`button`,{type:`button`,onClick:()=>t(`/privacy`),children:`Privacy Policy`}),(0,b.jsx)(`span`,{children:`·`}),(0,b.jsx)(`button`,{type:`button`,onClick:()=>t(`/accessibility`),children:`Accessibility`})]}),(0,b.jsxs)(`div`,{className:`zl-footer-socials`,"aria-label":`Social links`,children:[(0,b.jsx)(`button`,{className:`zl-social`,type:`button`,"aria-label":`LinkedIn`,children:(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":`true`,children:(0,b.jsx)(`path`,{d:`M6.5 8.2H3.3V21h3.2V8.2ZM4.9 3A1.9 1.9 0 1 0 5 6.8 1.9 1.9 0 0 0 4.9 3ZM21 13.7c0-3.9-2.1-5.8-4.9-5.8-2.3 0-3.3 1.2-3.9 2.1V8.2H9V21h3.2v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21H20l1-7.3Z`})})}),(0,b.jsx)(`button`,{className:`zl-social`,type:`button`,"aria-label":`X`,children:(0,b.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,"aria-hidden":`true`,children:(0,b.jsx)(`path`,{d:`M4 4l16 16M20 4L4 20`})})}),(0,b.jsx)(`button`,{className:`zl-social`,type:`button`,"aria-label":`Instagram`,children:(0,b.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,"aria-hidden":`true`,children:[(0,b.jsx)(`rect`,{x:`3.5`,y:`3.5`,width:`17`,height:`17`,rx:`5`}),(0,b.jsx)(`circle`,{cx:`12`,cy:`12`,r:`4`}),(0,b.jsx)(`circle`,{cx:`17.5`,cy:`6.7`,r:`1`,fill:`currentColor`,stroke:`none`})]})})]})]})})]})]})}function sc(){let[e,t]=(0,_.useState)(`login`),[n,r]=(0,_.useState)(``),[i,a]=(0,_.useState)(``),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(``);async function f(t){t.preventDefault(),s(!0),l(``),d(``);try{if(!Bs)throw Error(`Supabase is not configured.`);if(e===`reset`){let{error:e}=await Bs.auth.resetPasswordForEmail(n,{redirectTo:window.location.origin+`/app`});if(e)throw e;l(`If this email has an account, a password-reset link has been sent.`)}else if(e===`signup`){let{data:e,error:t}=await Bs.auth.signUp({email:n,password:i});if(t)throw t;e.session||l(`Check your email for the confirmation link, then sign in.`)}else{let{error:e}=await Bs.auth.signInWithPassword({email:n,password:i});if(e)throw e}}catch(e){d(e.message||`Authentication failed.`)}finally{s(!1)}}return(0,b.jsx)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`,background:`#f6f8fc`,padding:24,fontFamily:`Inter, system-ui, sans-serif`},children:(0,b.jsxs)(`form`,{onSubmit:f,style:{width:`100%`,maxWidth:410,background:`white`,borderRadius:18,padding:32,boxShadow:`0 20px 65px rgba(8,13,54,.10)`},children:[(0,b.jsx)(`h1`,{style:{color:`#080d36`,margin:`0 0 8px`,fontSize:30},children:`ZapDocs`}),(0,b.jsx)(`p`,{style:{color:`#59627a`,margin:`0 0 28px`},children:e===`signup`?`Create your account`:e===`reset`?`Reset your password`:`Sign in to your private loan workspace`}),(0,b.jsx)(`label`,{htmlFor:`zd-email`,style:{display:`block`,marginBottom:7},children:`Email`}),(0,b.jsx)(`input`,{id:`zd-email`,type:`email`,autoComplete:`email`,required:!0,value:n,onChange:e=>r(e.target.value),style:{width:`100%`,padding:12,boxSizing:`border-box`,marginBottom:17,border:`1px solid #cdd4e1`,borderRadius:9}}),e!==`reset`&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`label`,{htmlFor:`zd-password`,style:{display:`block`,marginBottom:7},children:`Password`}),(0,b.jsx)(`input`,{id:`zd-password`,type:`password`,autoComplete:e===`signup`?`new-password`:`current-password`,minLength:6,required:!0,value:i,onChange:e=>a(e.target.value),style:{width:`100%`,padding:12,boxSizing:`border-box`,marginBottom:17,border:`1px solid #cdd4e1`,borderRadius:9}})]}),u&&(0,b.jsx)(`p`,{role:`alert`,style:{color:`#b42318`},children:u}),c&&(0,b.jsx)(`p`,{role:`status`,style:{color:`#176b50`},children:c}),(0,b.jsx)(`button`,{type:`submit`,disabled:o,style:{width:`100%`,padding:14,background:`#43e19a`,border:0,borderRadius:9,color:`#080d36`,fontWeight:800,cursor:`pointer`},children:o?`Please wait…`:e===`signup`?`Create account`:e===`reset`?`Send reset link`:`Sign in`}),(0,b.jsxs)(`div`,{style:{display:`flex`,gap:14,marginTop:20,flexWrap:`wrap`},children:[(0,b.jsx)(`button`,{type:`button`,onClick:()=>{t(e===`signup`?`login`:`signup`),d(``),l(``)},style:{border:0,background:`none`,color:`#2455e8`,cursor:`pointer`},children:e===`signup`?`Already have an account? Sign in`:`Create an account`}),e===`login`?(0,b.jsx)(`button`,{type:`button`,onClick:()=>{t(`reset`),l(``),d(``)},style:{border:0,background:`none`,color:`#2455e8`,cursor:`pointer`},children:`Forgot password?`}):(0,b.jsx)(`button`,{type:`button`,onClick:()=>{t(`login`),l(``),d(``)},style:{border:0,background:`none`,color:`#2455e8`,cursor:`pointer`},children:`Back to sign in`})]})]})})}function cc(){let[e,t]=(0,_.useState)(()=>(window.location.pathname.replace(/\/$/,``)===`/free-trial`?`/free-trial`:null)||St()||([`/demo`,`/pricing`].includes(window.location.pathname.replace(/\/$/,``))?window.location.pathname.replace(/\/$/,``):null)||Mt()||(window.location.pathname.replace(/\/$/,``)===`/app`?`app`:`landing`)),[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)(!0),[o,s]=(0,_.useState)(``);(0,_.useEffect)(()=>{if(!Bs){s(zs||`Supabase could not be initialized. Check your frontend .env file and restart Vite.`),a(!1);return}let e=!0;Bs.auth.getSession().then(({data:t,error:n})=>{e&&(n&&s(n.message),r(t?.session??null),a(!1))}).catch(t=>{e&&(s(t.message),a(!1))});let{data:{subscription:t}}=Bs.auth.onAuthStateChange((e,t)=>{r(t)});return()=>{e=!1,t.unsubscribe()}},[]),(0,_.useEffect)(()=>{let e=()=>t((window.location.pathname.replace(/\/$/,``)===`/free-trial`?`/free-trial`:null)||St()||([`/demo`,`/pricing`].includes(window.location.pathname.replace(/\/$/,``))?window.location.pathname.replace(/\/$/,``):null)||Mt()||(window.location.pathname.replace(/\/$/,``)===`/app`?`app`:`landing`));return window.addEventListener(`hashchange`,e),window.addEventListener(`popstate`,e),()=>{window.removeEventListener(`hashchange`,e),window.removeEventListener(`popstate`,e)}},[]);let c=()=>{window.history.pushState({},``,`/app`),t(`app`)},l=()=>{window.history.pushState({},``,`/`),t(`landing`)},u=e=>{window.history.pushState({},``,e),t(e===`/app`?`app`:e===`/`?`landing`:e),window.scrollTo(0,0)};return e===`/free-trial`?(0,b.jsx)(ue,{supabase:Bs}):St()===e?(0,b.jsx)(Ct,{path:e}):e===`/demo`?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(C,{onLaunch:c}),(0,b.jsx)(ce,{onHome:l,onLaunch:c,onPricing:()=>u(`/pricing`)})]}):e===`/pricing`?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(C,{onLaunch:c}),(0,b.jsx)(le,{onHome:l,onLaunch:c})]}):[`/terms`,`/privacy`,`/accessibility`].includes(e)?(0,b.jsx)(Nt,{path:e,onNavigate:u}):e===`app`?o?(0,b.jsxs)(`div`,{role:`alert`,style:{padding:32,fontFamily:`system-ui`,color:`#b42318`},children:[(0,b.jsx)(`h2`,{children:`ZapDocs configuration error`}),(0,b.jsx)(`p`,{children:o}),(0,b.jsx)(`button`,{onClick:l,children:`Back home`})]}):i?(0,b.jsx)(`p`,{style:{padding:32,fontFamily:`system-ui`},children:`Checking your ZapDocs session…`}):n?(0,b.jsx)(`div`,{children:(0,b.jsx)(ac,{user:n.user,onHome:l,onSignOut:async()=>{await Bs.auth.signOut()}},n.user.id)}):(0,b.jsx)(sc,{}):(0,b.jsx)(oc,{onLaunch:c,onLegal:u})}(0,v.createRoot)(document.getElementById(`root`)).render((0,b.jsx)(_.StrictMode,{children:(0,b.jsx)(cc,{})}));