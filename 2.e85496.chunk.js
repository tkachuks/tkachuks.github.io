(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{10:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a),o=(n(11),function(e){var t=e.continueStep,n=e.loading,a=e.label;return r.a.createElement("div",{className:"continue_btn-wrap"},r.a.createElement("button",{onClick:t},n?r.a.createElement("img",{src:config.urls.media+"refresh.svg"}):a||config.translations.continue_btn_label))})},11:function(e,t,n){},13:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),i=n(9),c=n(8),s=function(e,t){var n=new FileReader;n.onload=function(e){var n=new DataView(e.target.result),a=n.byteLength,r=2;if(65496!==n.getUint16(0,!1))return t(new Error("-2"));for(;r<a;){var o=n.getUint16(r,!1);if(r+=2,65505===o){if(1165519206!==n.getUint32(r+=2,!1))return t(new Error("-1"));var i=18761===n.getUint16(r+=6,!1);r+=n.getUint32(r+4,i);var c=n.getUint16(r,i);r+=2;for(var s=0;s<c;s++)if(274===n.getUint16(r+12*s,i))return t(n.getUint16(r+12*s+8,i))}else{if(65280!=(65280&o))break;r+=n.getUint16(r,!1)}}return t(new Error("-1"))},e&&n.readAsArrayBuffer(e)},l=config.data.max_side||1e3;n(13);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=function(e){var t=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,n=Object(a.useRef)(null),m=u(Object(a.useState)(!1),2),d=m[0],g=m[1],f=u(Object(a.useState)(sessionStorage.getItem("address")||config.data.address),2),p=f[0],h=f[1],v=function(){var e;window.google||(e=config.urls.add_address,Object(c.a)(e,{method:"GET"}).then((function(e){return e.json().then((function(e){return{r:e}}))}))).then((function(e){var t=e.r.api_key;!function(e,t){var a=document.createElement("script");a.src=e,t.appendChild(a),a.onload=function(){if(window.google){var e=n.current,t=new window.google.maps.places.SearchBox(e);t&&t.addListener("places_changed",(function(){var e=t.getPlaces();h(e[0].formatted_address),sessionStorage.setItem("address",e[0].formatted_address)}))}}}("https://maps.googleapis.com/maps/api/js?key=".concat(t,"&libraries=places&language=").concat(config.locale),document.body)}))},b=u(Object(a.useState)(sessionStorage.getItem("name")||config.data.name||""),2),w=b[0],_=b[1],S=u(Object(a.useState)(!0),2),E=S[0],j=S[1],y=u(Object(a.useState)(sessionStorage.getItem("email")||config.data.email||""),2),O=y[0],N=y[1],I=u(Object(a.useState)(!0),2),U=I[0],A=I[1],k=u(Object(a.useState)(sessionStorage.getItem("photo")||""),2),C=k[0],R=k[1],L=u(Object(a.useState)(sessionStorage.getItem("photoName")||""),2),P=L[0],T=L[1],x=function(e){R(e),sessionStorage.setItem("photo",e)};Object(a.useEffect)((function(){config.address_based&&v()}),[]);var F=u(Object(a.useState)(!1),2),D=F[0],B=F[1],z=function(e,t){var n=e?e.target.files[0]:t;if(n){var a;T(n.name),sessionStorage.setItem("photoName",n.name);var r=(null===(a=config.plugins)||void 0===a?void 0:a.includes("highres_photos"))||!1;!function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=new Image;s(e,(function(r){var o=new FileReader;o.readAsDataURL(e),o.onload=function(){a.src=o.result},a.onload=function(){var e=document.createElement("canvas"),o=e.getContext("2d"),i=a.width,c=a.height,s=navigator.userAgent.toLowerCase(),u=/samsungbrowser/.test(s);if(!n&&(i>l||c>l)&&(i>c?i>l&&(c=c*l/i,i=l):c>l&&(i=i*l/c,c=l)),4<r&&r<9&&s&&u?(e.width=c,e.height=i):(e.width=i,e.height=c),s&&u)switch(r){case 2:o.transform(-1,0,0,1,i,0);break;case 3:o.transform(-1,0,0,-1,i,c);break;case 4:o.transform(1,0,0,-1,0,c);break;case 5:o.transform(0,1,1,0,0,0);break;case 6:o.transform(0,1,-1,0,c,0);break;case 7:o.transform(0,-1,-1,0,c,i);break;case 8:o.transform(0,-1,1,0,0,i)}o.drawImage(a,0,0,i,c);var m=n?e.toDataURL("image/jpeg",.8):e.toDataURL("image/jpeg",.6);t(m)}}))}(n,x,r)}},H=u(Object(a.useState)(!1),2),M=H[0],Z=H[1],q=function(){return Z((function(e){return!e}))},G=u(Object(a.useState)(!1),2),J=G[0],X=G[1],V=function(){return X((function(e){return!e}))},W=u(Object(a.useState)(!1),2),Y=W[0],$=W[1],K=function(){return $((function(e){return!e}))};return r.a.createElement("div",{id:"fill-in"},r.a.createElement("div",{className:"client-picture"},C?r.a.createElement("div",{className:"added_photo"+(D?" deleteAnimation":"")},r.a.createElement("img",{className:"client-img",src:C}),r.a.createElement("div",{className:"buttons"},r.a.createElement("label",{className:"control_btn"},r.a.createElement("img",{src:config.urls.media+"ic_photo.svg"}),r.a.createElement("input",{className:"file_input",type:"file",accept:"image/*",onChange:z})),r.a.createElement("div",{className:"control_btn",onClick:function(){B(!0),setTimeout((function(){B(!1),R(""),T(""),sessionStorage.removeItem("photo"),sessionStorage.removeItem("photoName")}),350)}},r.a.createElement("img",{src:config.urls.media+"ic_delete.svg"})))):r.a.createElement("label",{className:"photo-section",style:{backgroundImage:"url('".concat(config.urls.media,"pic@2x.jpg')")}},r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:"control_btn add_button"},r.a.createElement("img",{src:config.urls.media+"ic_add_photo_plus.svg"}))),r.a.createElement("input",{className:"file_input",type:"file",accept:"image/*",onChange:z}))),r.a.createElement("div",{className:"inputs"},r.a.createElement("h3",{className:"fill_in_title"},config.translations.fill_in.fill_in_title),r.a.createElement("div",{className:"input_wrap"+(E?"":" warning")+(M?" highlightInput":"")},r.a.createElement("img",{src:config.urls.media+"ic_clients.svg"}),r.a.createElement("input",{type:"text",name:"name",placeholder:config.translations.fill_in.name_placeholder,value:w,onFocus:q,onBlur:q,onChange:function(e){var t=e.target.value;j(!0),_(t),sessionStorage.setItem("name",t)}})),r.a.createElement("div",{className:"input_wrap"+(U?"":" warning")+(J?" highlightInput":"")},r.a.createElement("img",{src:config.urls.media+"ic_email.svg"}),r.a.createElement("input",{type:"email",name:"email",onFocus:V,onBlur:V,placeholder:config.translations.fill_in.email_placeholder,value:O,onChange:function(e){var t=e.target.value;A(!0),N(t),sessionStorage.setItem("email",t)}})),config.address_based&&r.a.createElement("div",{className:"input_wrap"+(Y?" highlightInput":"")},r.a.createElement("img",{src:config.urls.media+"ic_address.svg"}),r.a.createElement("input",{id:"pac-input",className:"controls form-input",type:"text",ref:n,name:"address",autoComplete:"off",onFocus:K,onBlur:K,placeholder:config.translations.fill_in.adress_placeholder,value:p,onChange:function(e){var t=e.target.value;h(t),sessionStorage.setItem("address",t)}}))),r.a.createElement(o.a,{continueStep:function(){if(w&&(null==w?void 0:w.trim())&&(t.test(null==O?void 0:O.trim())||""===(null==O?void 0:O.trim())||!O)){g(!0);var n=new URL(document.location).searchParams.get("c"),a=new URL(document.location).searchParams.get("b"),r="b=".concat(a,"&c=").concat(n,"&name=").concat(null==w?void 0:w.trim(),"&email=").concat(O||null);config.address_based&&(r+="&address=".concat((null==p?void 0:p.trim())||null));var o=new FormData;o.append("b",a),o.append("c",n),C&&o.append("photo",function(e,t){for(var n=e.split(","),a=n[0].match(/:(.*?);/)[1],r=atob(n[1]),o=r.length,i=new Uint8Array(o);o--;)i[o]=r.charCodeAt(o);return new File([i],t,{type:a})}(C,P),P||"profile-picture.jpg"),o.append("date",(s=new Date,"".concat(s.getFullYear(),"-").concat((s.getMonth()+1).toString().padStart(2,"0"),"-").concat(s.getDate().toString().padStart(2,"0")," ").concat(s.getHours().toString().padStart(2,"0"),":").concat(s.getMinutes().toString().padStart(2,"0"),":").concat(s.getSeconds().toString().padStart(2,"0"))));var c=[Object(i.a)(r),C?Object(i.b)(o):Promise.resolve("resolved")];return Promise.all(c).then((function(){e.history.push({pathname:config.urls.baseUrl+config.urls.other_data,search:config.urls.params})})),!1}var s;(null==w?void 0:w.trim())||j(!1),O&&!t.test(null==O?void 0:O.trim())&&""!==(null==O?void 0:O.trim())&&A(!1)},loading:d}))}},8:function(e,t,n){"use strict";t.a=function e(t,n){var a=[400,404,500,504];return n.headers||(n.headers={}),n.method||(n.method="GET"),n.headers["X-Requested-With"]="XMLHttpRequest",n.credentials="include",fetch(t,n).then((function(r){if(401===r.status)window.location.href=window.location.origin+config.urls.login;else{if(503===r.status)return new Promise((function(a){return setTimeout((function(){return a(e(t,n))}),1e3*r.headers.get("Retry-After"))}));if(502===r.status)return new Promise((function(a){return setTimeout((function(){return a(e(t,n))}),1e3)}));if(!a.includes(r.status))return r;window.location.href=config.urls.error_page}}))}},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=n(8),r=function(e){var t=config.urls.main+config.urls.filling_up,n={mode:"cors",method:"PATCH",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e};return Object(a.a)(t,n)},o=function(e){var t=config.urls.main+config.urls.photo_r,n={mode:"cors",method:"POST",body:e};return Object(a.a)(t,n)}}}]);