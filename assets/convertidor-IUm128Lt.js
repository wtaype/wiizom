import{j as t}from"./vendor-gzd0YkcT.js";import{g as c,i as l,a as m,d as i,s as p,b as d,c as u}from"./firebase-BAbvVe_j.js";import{M as a}from"./main-CTv7P8rM.js";import"./main-kSlV8ypO.js";const g=new Set(["wiizom.web.app","localhost","192.168.18.248"]),b=g.has(window.location.hostname),o=b?l({apiKey:"AIzaSyDoM-V8qKfafkScqJklKNLxJZm3SmN1m0Q",authDomain:"wiizom.firebaseapp.com",projectId:"wiizom",storageBucket:"wiizom.firebasestorage.app",messagingSenderId:"487628375291",appId:"1:487628375291:web:eaf85dde0d206346d31c5e"}):null;o&&m(o);const n=o?c(o):null,j=()=>`
 <div class="app">
  <div class="loadingSmile"><img src="./smile.png" alt="Avatar" class="user-avatar"/></div>
</div>
  
<h1>Hola mundo como estas grrr</h1>

<button>Consultar respuesta genial</button>
  
`,y=()=>{t("h1").click(async function(){a("Escribiendo en base de datos, espere...");try{const e=i(n,"publico","wilder");await p(e,{nombre:"Wilder",apellidos:"Uno Dos",mensaje:"Hola, Dios te protege!",creacion:d()}),a("✅ Documento guardado exitosamente!")}catch(e){console.error(e)}}),t("button").click(async function(){a("Esperando un mensaje ");try{const e=i(n,"publico","wilder"),s=await u(e);if(s.exists()){const r=s.data();a(r.mensaje)}}catch(e){console.error(e)}})},D=()=>{};export{D as cleanup,y as init,j as render};
