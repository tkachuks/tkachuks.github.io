(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{12:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(1);n(9),n(12);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,i=!1,r=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==c.return||c.return()}finally{if(i)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(e){var t,n,c,l,s,u,f=e.history;Object(a.useEffect)((function(){var e;(e=document.createElement("script")).src=config.urls.fb_script,document.getElementsByTagName("head")[0].appendChild(e),f.replace({pathname:config.urls.baseUrl,search:config.urls.params});var t=new URL(document.location).searchParams.get("b"),n={c:new URL(document.location).searchParams.get("c"),b:t};n.c&&n.b&&sessionStorage.setItem("fill_query",JSON.stringify(n))}),[]);var g=o(Object(a.useState)(!1),2),m=g[0];g[1];function d(e){console.log("statusChangeCallback"),console.log(e),"connected"===e.status?(console.log("Welcome!  Fetching your information.... "),FB.api("/me",(function(e){console.log("Successful login for: "+e.name)}))):console.log("Please log into this webpage.")}return i.a.createElement("div",{className:"greeting"},i.a.createElement("div",{className:"window_helper"},i.a.createElement("div",{className:"window"},i.a.createElement("img",{className:"hand",src:config.urls.media+"3d_hand@2x.png",alt:"hand"}))),i.a.createElement("div",{className:"title_text"},config.data.name?i.a.createElement("p",null,null===(t=config.translations.greeting_page)||void 0===t?void 0:null===(n=t.greeting_title_with_name)||void 0===n?void 0:n.replace("{name}",config.data.name)):i.a.createElement("p",null,null===(c=config.translations.greeting_page)||void 0===c?void 0:c.greeting_title)),i.a.createElement("div",{className:"common_container"},i.a.createElement("p",{className:"greeting_subtitle"},null===(l=config.translations.greeting_page)||void 0===l?void 0:l.greeting_subtitle),i.a.createElement("div",{className:"btn_section"},i.a.createElement("button",{onClick:function(){FB.getLoginStatus((function(e){d(e)}))},className:"fb_button"+(m?" error_btn":"")},i.a.createElement("img",{src:config.urls.media+"ic_facebook.svg",alt:"fb_button"}),null===(s=config.translations.greeting_page)||void 0===s?void 0:s.fb_btn_label),i.a.createElement(r.Link,{to:{pathname:config.urls.baseUrl+config.urls.photo,search:config.urls.params},className:"fill_in_button"},i.a.createElement("img",{src:config.urls.media+"ic_fill_in.svg",alt:"fill_in_button"}),null===(u=config.translations.greeting_page)||void 0===u?void 0:u.fill_in_btn_label))))}},8:function(e,t,n){"use strict";t.a=function e(t,n){var a=[400,404,500,504];return n.headers||(n.headers={}),n.method||(n.method="GET"),n.headers["X-Requested-With"]="XMLHttpRequest",n.credentials="include",fetch(t,n).then((function(i){if(401===i.status)window.location.href=window.location.origin+config.urls.login;else{if(503===i.status)return new Promise((function(a){return setTimeout((function(){return a(e(t,n))}),1e3*i.headers.get("Retry-After"))}));if(502===i.status)return new Promise((function(a){return setTimeout((function(){return a(e(t,n))}),1e3)}));if(!a.includes(i.status))return i;window.location.href=config.urls.error_page}}))}},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var a=n(8),i=function(e){var t=config.urls.main+config.urls.filling_up,n={mode:"cors",method:"PATCH",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e};return Object(a.a)(t,n)},r=function(e){var t=config.urls.main+config.urls.photo_r,n={mode:"cors",method:"POST",body:e};return Object(a.a)(t,n)}}}]);