import './cuadre.css';
import jQuery from 'jquery';
import { savels, getls, wiTip, Mensaje } from '../widev.js';

export const render = () => `
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
`;

// ==================== VARIABLES GLOBALES ====================
const $ = jQuery;
let totales = { A: 0, B: 0 };

// ==================== FUNCIONES PRINCIPALES ====================
const calcularSuma = (textarea, contenedor) => {
  const lineas = $(textarea).val().trim().split('\n').filter(line => line.trim());
  let total = 0;
  let tablaHTML = '<table class="dtable"><thead><tr><th>ID</th><th>Descripción</th><th>Valor</th></tr></thead><tbody>';

  lineas.forEach((linea, i) => {
    let id, desc, valor;
    const partes = linea.includes('\t') ? linea.split('\t') : linea.split('|');
    
    if (partes.length >= 3) {
      [id, desc, valor] = partes;
    } else if (partes.length === 2) {
      id = '';
      [desc, valor] = partes;
    } else {
      const numeroMatch = linea.match(/(-?\d+\.?\d*)$/);
      if (numeroMatch) {
        id = '';
        desc = linea.replace(numeroMatch[0], '').trim();
        valor = numeroMatch[0];
      } else {
        id = '';
        desc = linea;
        valor = '0';
      }
    }
    
    id = id?.trim() || `Lista ${i + 1}`;
    desc = desc?.trim() || `Descripción ${i + 1}`;
    valor = parseFloat((valor || '0').toString().replace(',', '.')) || 0;
    total += valor;
    
    tablaHTML += `<tr><td>${id}</td><td>${desc}</td><td class="vlx">${valor.toFixed(2)}</td></tr>`;
  });

  tablaHTML += `</tbody><tfoot><tr><td colspan="2">Total</td><td class="vlx">${total.toFixed(2)}</td></tr></tfoot></table>`;
  $(contenedor).html(tablaHTML);
  
  return total;
};

const actualizarTotalGeneral = () => {
  const totalGeneral = totales.A + totales.B;
  const $total = $('#totalGeneral');
  
  $total.addClass('updating').text(totalGeneral.toFixed(2));
  setTimeout(() => $total.removeClass('updating'), 500);
};

const guardarCuadre = (cuadre) => {
  const $textarea = $(`#cuadre${cuadre}`);
  const datos = $textarea.val().trim();
  
  if (!datos) {
    wiTip(`.btn_save[data-cuadre="${cuadre}"]`, 'No hay datos para guardar', 'warning', 1500);
    return;
  }
  
  savels(`cuadre${cuadre}`, datos, 168);
  wiTip(`.btn_save[data-cuadre="${cuadre}"]`, '¡Guardado!', 'success', 1500);
  Mensaje(`Cuadre ${cuadre} guardado exitosamente`, 'success');
};

const limpiarCuadre = (cuadre) => {
  const $textarea = $(`#cuadre${cuadre}`);
  
  if (!$textarea.val().trim()) {
    wiTip(`.btn_clear_cuadre[data-cuadre="${cuadre}"]`, 'Ya está vacío', 'info', 1500);
    return;
  }
  
  $textarea.val('');
  savels(`cuadre${cuadre}`, '', 168);
  totales[cuadre] = 0;
  $(`#tabla${cuadre}`).html('<p class="tabla_empty">Sin datos</p>');
  actualizarTotalGeneral();
  wiTip(`.btn_clear_cuadre[data-cuadre="${cuadre}"]`, '¡Limpiado!', 'success', 1500);
};

const procesarCuadre = (cuadre) => {
  const total = calcularSuma(`#cuadre${cuadre}`, `#tabla${cuadre}`);
  totales[cuadre] = total;
  actualizarTotalGeneral();
};

const cargarDatos = (cuadre) => {
  const guardado = getls(`cuadre${cuadre}`);
  if (guardado) {
    $(`#cuadre${cuadre}`).val(guardado);
    procesarCuadre(cuadre);
  } else {
    $(`#tabla${cuadre}`).html('<p class="tabla_empty">Sin datos</p>');
  }
};

const guardarAutomatico = () => {
  ['A', 'B'].forEach(cuadre => {
    const datos = $(`#cuadre${cuadre}`).val().trim();
    if (datos) savels(`cuadre${cuadre}`, datos, 168);
  });
};

// ==================== INICIALIZACION ====================
export const init = () => {
  // Cargar datos guardados
  cargarDatos('A');
  cargarDatos('B');
  actualizarTotalGeneral();

  // Eventos de input
  $('#cuadreA, #cuadreB').on('input paste', function() {
    const cuadre = this.id.replace('cuadre', '');
    procesarCuadre(cuadre);
  });

  // Botones de guardar
  $('.btn_save').on('click', function() {
    const cuadre = $(this).data('cuadre');
    guardarCuadre(cuadre);
  });

  // Botones de limpiar
  $('.btn_clear_cuadre').on('click', function() {
    const cuadre = $(this).data('cuadre');
    limpiarCuadre(cuadre);
  });

  // Auto-guardar antes de salir
  $(window).on('beforeunload', guardarAutomatico);

  console.log('✅ Cuadre de Sumas cargado correctamente');
};

// ==================== LIMPIEZA ====================
export const cleanup = () => {
  $('#cuadreA, #cuadreB, .btn_save, .btn_clear_cuadre').off();
  $(window).off('beforeunload', guardarAutomatico);
  console.log('🧹 Cuadre limpiado correctamente');
};