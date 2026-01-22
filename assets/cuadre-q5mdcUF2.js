import{j as g}from"./vendor-gzd0YkcT.js";import{g as A,b as i,s as f,M as x}from"./main-BccrCoFm.js";import"./main-DbX1ET-j.js";const T=()=>`
  <div class="cuadre_container">
    <div class="cuadre_layout">
      
      <!-- COLUMNA A -->
      <div class="cuadre_col hwb">
        <div class="cuadre_header dfw">
          <h2><i class="fas fa-calculator"></i> Cuadre A</h2>
          <div class="cuadre_actions">
            <button class="btn_save" data-cuadre="A" title="Guardar">
              <i class="fas fa-save"></i>
            </button>
            <button class="btn_clear_cuadre" data-cuadre="A" title="Limpiar">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
        
        <textarea 
          class="cuadre_input" 
          id="cuadreA" 
          placeholder="Ingresa los datos para calcular...&#10;Ejemplos:&#10;100 | Producto A&#10;50 | Producto B&#10;75.50 | Producto C"
          spellcheck="false"
        ></textarea>
        
        <div class="cuadre_result">
          <h3 class="txc">Resultado</h3>
          <div class="tabla_wrapper" id="tablaA"></div>
        </div>
      </div>

      <!-- COLUMNA B -->
      <div class="cuadre_col hwb">
        <div class="cuadre_header dfw">
          <h2><i class="fas fa-calculator"></i> Cuadre B</h2>
          <div class="cuadre_actions">
            <button class="btn_save" data-cuadre="B" title="Guardar">
              <i class="fas fa-save"></i>
            </button>
            <button class="btn_clear_cuadre" data-cuadre="B" title="Limpiar">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
        
        <textarea 
          class="cuadre_input" 
          id="cuadreB" 
          placeholder="Ingresa los datos para calcular...&#10;Ejemplos:&#10;200 | Servicio X&#10;150 | Servicio Y&#10;300.75 | Servicio Z"
          spellcheck="false"
        ></textarea>
        
        <div class="cuadre_result">
          <h3 class="txc">Resultado</h3>
          <div class="tabla_wrapper" id="tablaB"></div>
        </div>
      </div>

    </div>
    
    <!-- TOTAL GENERAL -->
    <div class="total_general hwb">
      <div class="total_content">
        <i class="fas fa-chart-line"></i>
        <span>Total General:</span>
        <strong id="totalGeneral">0.00</strong>
      </div>
    </div>
  </div>
`,t=g;let n={A:0,B:0};const w=(a,s)=>{const d=t(a).val().trim().split(`
`).filter(e=>e.trim());let u=0,v='<table class="dtable"><thead><tr><th>ID</th><th>Descripción</th><th>Valor</th></tr></thead><tbody>';return d.forEach((e,h)=>{let r,l,c;const o=e.includes("	")?e.split("	"):e.split("|");if(o.length>=3)[r,l,c]=o;else if(o.length===2)r="",[l,c]=o;else{const p=e.match(/(-?\d+\.?\d*)$/);p?(r="",l=e.replace(p[0],"").trim(),c=p[0]):(r="",l=e,c="0")}r=r?.trim()||`Lista ${h+1}`,l=l?.trim()||`Descripción ${h+1}`,c=parseFloat((c||"0").toString().replace(",","."))||0,u+=c,v+=`<tr><td>${r}</td><td>${l}</td><td class="vlx">${c.toFixed(2)}</td></tr>`}),v+=`</tbody><tfoot><tr><td colspan="2">Total</td><td class="vlx">${u.toFixed(2)}</td></tr></tfoot></table>`,t(s).html(v),u},b=()=>{const a=n.A+n.B,s=t("#totalGeneral");s.addClass("updating").text(a.toFixed(2)),setTimeout(()=>s.removeClass("updating"),500)},B=a=>{const d=t(`#cuadre${a}`).val().trim();if(!d){i(`.btn_save[data-cuadre="${a}"]`,"No hay datos para guardar","warning",1500);return}f(`cuadre${a}`,d,168),i(`.btn_save[data-cuadre="${a}"]`,"¡Guardado!","success",1500),x(`Cuadre ${a} guardado exitosamente`,"success")},C=a=>{const s=t(`#cuadre${a}`);if(!s.val().trim()){i(`.btn_clear_cuadre[data-cuadre="${a}"]`,"Ya está vacío","info",1500);return}s.val(""),f(`cuadre${a}`,"",168),n[a]=0,t(`#tabla${a}`).html('<p class="tabla_empty">Sin datos</p>'),b(),i(`.btn_clear_cuadre[data-cuadre="${a}"]`,"¡Limpiado!","success",1500)},m=a=>{const s=w(`#cuadre${a}`,`#tabla${a}`);n[a]=s,b()},_=a=>{const s=A(`cuadre${a}`);s?(t(`#cuadre${a}`).val(s),m(a)):t(`#tabla${a}`).html('<p class="tabla_empty">Sin datos</p>')},$=()=>{["A","B"].forEach(a=>{const s=t(`#cuadre${a}`).val().trim();s&&f(`cuadre${a}`,s,168)})},y=()=>{_("A"),_("B"),b(),t("#cuadreA, #cuadreB").on("input paste",function(){const a=this.id.replace("cuadre","");m(a)}),t(".btn_save").on("click",function(){const a=t(this).data("cuadre");B(a)}),t(".btn_clear_cuadre").on("click",function(){const a=t(this).data("cuadre");C(a)}),t(window).on("beforeunload",$),console.log("✅ Cuadre de Sumas cargado correctamente")},E=()=>{t("#cuadreA, #cuadreB, .btn_save, .btn_clear_cuadre").off(),t(window).off("beforeunload",$),console.log("🧹 Cuadre limpiado correctamente")};export{E as cleanup,y as init,T as render};
