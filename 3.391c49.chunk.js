(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{12:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(1),o=n(9);n(12);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(e){var t,n,s,l,u,d,g=e.history;Object(r.useEffect)((function(){var e;(e=document.createElement("script")).src=config.urls.fb_script,document.getElementsByTagName("head")[0].appendChild(e),g.replace({pathname:config.urls.baseUrl,search:config.urls.params});var t=new URL(document.location).searchParams.get("b"),n={c:new URL(document.location).searchParams.get("c"),b:t};n.c&&n.b&&sessionStorage.setItem("fill_query",JSON.stringify(n))}),[]);var f=c(Object(r.useState)(!1),2),m=f[0],h=f[1];return a.a.createElement("div",{className:"greeting"},a.a.createElement("div",{className:"window_helper"},a.a.createElement("div",{className:"window"},a.a.createElement("img",{className:"hand",src:config.urls.media+"3d_hand@2x.png",alt:"hand"}))),a.a.createElement("div",{className:"title_text"},config.data.name?a.a.createElement("p",null,null===(t=config.translations.greeting_page)||void 0===t?void 0:null===(n=t.greeting_title_with_name)||void 0===n?void 0:n.replace("{name}",config.data.name)):a.a.createElement("p",null,null===(s=config.translations.greeting_page)||void 0===s?void 0:s.greeting_title)),a.a.createElement("div",{className:"common_container"},a.a.createElement("p",{className:"greeting_subtitle"},null===(l=config.translations.greeting_page)||void 0===l?void 0:l.greeting_subtitle),a.a.createElement("div",{className:"btn_section"},a.a.createElement("button",{onClick:function(){FB.login((function(e){e.authResponse?FB.api("/me","GET",{fields:"name,birthday,email,gender,timezone,website,picture.width(480).height(480)"},(function(e){var t=new URL(document.location).searchParams.get("c"),n=new URL(document.location).searchParams.get("b"),r="b=".concat(n,"&c=").concat(t,"&fb_data=").concat(encodeURIComponent(JSON.stringify(e)));if(e.error)h(!0);else{if(e.gender&&sessionStorage.setItem("gender",e.gender),e.birthday){var a,i=null===(a=e.birthday)||void 0===a?void 0:a.split("/");3===i.length&&(sessionStorage.setItem("month",i[0]),sessionStorage.setItem("day",i[1]),sessionStorage.setItem("year",i[2]))}Object(o.a)(r).then((function(e){204===e.status&&g.push({pathname:config.urls.baseUrl+config.urls.other_data,search:config.urls.params})}))}})):console.log("User cancelled login or did not fully authorize.")}),{scope:"public_profile, email, user_gender, user_birthday"})},className:"fb_button"+(m?" error_btn":"")},a.a.createElement("img",{src:config.urls.media+"ic_facebook.svg",alt:"fb_button"}),null===(u=config.translations.greeting_page)||void 0===u?void 0:u.fb_btn_label),a.a.createElement(i.Link,{to:{pathname:config.urls.baseUrl+config.urls.photo,search:config.urls.params},className:"fill_in_button"},a.a.createElement("img",{src:config.urls.media+"ic_fill_in.svg",alt:"fill_in_button"}),null===(d=config.translations.greeting_page)||void 0===d?void 0:d.fill_in_btn_label))))}},8:function(e,t,n){"use strict";t.a=function e(t,n){var r=[400,404,500,504];return n.headers||(n.headers={}),n.method||(n.method="GET"),n.headers["X-Requested-With"]="XMLHttpRequest",n.credentials="include",fetch(t,n).then((function(a){if(401===a.status)window.location.href=window.location.origin+config.urls.login;else{if(503===a.status)return new Promise((function(r){return setTimeout((function(){return r(e(t,n))}),1e3*a.headers.get("Retry-After"))}));if(502===a.status)return new Promise((function(r){return setTimeout((function(){return r(e(t,n))}),1e3)}));if(!r.includes(a.status))return a;window.location.href=config.urls.error_page}}))}},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var r=n(8),a=function(e){var t=config.urls.main+config.urls.filling_up,n={mode:"cors",method:"PATCH",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e};return Object(r.a)(t,n)},i=function(e){var t=config.urls.main+config.urls.photo_r,n={mode:"cors",method:"POST",body:e};return Object(r.a)(t,n)}}}]);