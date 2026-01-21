import{j as a}from"./vendor-gzd0YkcT.js";import{d as t}from"./firebase-Bj5WqU2l.js";import{d as r,s as i,a as c,g as d}from"./firebase-CwZrU3Qc.js";import{M as o}from"./main-DNoynWFa.js";import"./main-DzM5mI7l.js";const g=()=>`
 <div class="app">
  <div class="loadingSmile"><img src="./smile.png" alt="Avatar" class="user-avatar"/></div>
</div>
  
<h1>Hola mundo como estas grrr</h1>

<button>Consultar respuesta genial</button>
  
`,v=()=>{a("h1").click(async function(){o("Escribiendo en base de datos, espere...");try{const e=r(t,"publico","wilder");await i(e,{nombre:"Wilder",apellidos:"Uno Dos",mensaje:"Hola, Dios te protege!",creacion:c()}),o("✅ Documento guardado exitosamente!")}catch(e){console.error(e)}}),a("button").click(async function(){o("Esperando un mensaje ");try{const e=r(t,"publico","wilder"),s=await d(e);if(s.exists()){const n=s.data();o(n.mensaje)}}catch(e){console.error(e)}})},f=()=>{};export{f as cleanup,v as init,g as render};
