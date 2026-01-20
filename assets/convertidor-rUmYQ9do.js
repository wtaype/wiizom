import{j as t}from"./vendor-gzd0YkcT.js";import{g as c,i as l,a as p,d as i,s as d,b as m,c as u}from"./firebase-BAbvVe_j.js";import{M as a}from"./main-DljKKov1.js";import"./main-D-f4-2X8.js";const b=new Set(["wiizom.web.app","localhost","192.168.18.248"]),g=b.has(window.location.hostname),o=g?l({apiKey:"AIzaSyBY_knF8M51NlWhlf_nJ_RdTzduvbWFWxI",authDomain:"wiizom.firebaseapp.com",projectId:"wiizom",storageBucket:"wiizom.firebasestorage.app",messagingSenderId:"788669311154",appId:"1:788669311154:web:2d435bf7d6652ff13741ab"}):null;o&&p(o);const n=o?c(o):null,j=()=>`
 <div class="app">
  <div class="loadingSmile"><img src="./smile.png" alt="Avatar" class="user-avatar"/></div>
</div>
  
<h1>Hola mundo como estas grrr</h1>

<button>Consultar respuesta genial</button>
  
`,y=()=>{t("h1").click(async function(){a("Escribiendo en base de datos, espere...");try{const e=i(n,"publico","wilder");await d(e,{nombre:"Wilder",apellidos:"Uno Dos",mensaje:"Hola, Dios te protege!",creacion:m()}),a("✅ Documento guardado exitosamente!")}catch(e){console.error(e)}}),t("button").click(async function(){a("Esperando un mensaje ");try{const e=i(n,"publico","wilder"),s=await u(e);if(s.exists()){const r=s.data();a(r.mensaje)}}catch(e){console.error(e)}})},z=()=>{};export{z as cleanup,y as init,j as render};
