import './inicio.css';
import jQuery from 'jquery';
import Tesseract from 'tesseract.js';
import { savels, getls, wiTip, Mensaje } from '../widev.js';

export const render = () => `
  <div class="inicio_container">
    <div class="ocr_layout">
      <!-- LEFT: Upload Zone + Preview -->
      <div class="ocr_left">
        <div class="progress_bar">
          <div class="progress_fill"></div>
          <span class="progress_text">0%</span>
        </div>
        <div class="upload_zone" id="dropZone">
          <div class="upload_placeholder">
            <i class="fas fa-cloud-upload-alt"></i>
            <h2>Arrastra tu imagen aquí</h2>
            <p>o <strong>haz doble clic</strong> para seleccionar</p>
            <p class="upload_hint">También puedes pegar con <kbd>Ctrl+V</kbd></p>
          </div>
          <div class="image_preview dpn">
            <img src="" alt="Preview" />
            <button class="btn_clear_img" title="Eliminar imagen">
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- RIGHT: Resultado -->
      <div class="ocr_right">
        <div class="progress_bar">
          <div class="progress_fill"></div>
          <span class="progress_text">0%</span>
        </div>
        <div class="result_section">
          <div class="result_header">
            <h3><i class="fas fa-file-alt"></i> Resultado de conversión</h3>
            <div class="result_actions">
              <button class="btn_icon btn_copy" title="Copiar texto">
                <i class="fas fa-copy"></i>
              </button>
              <button class="btn_icon btn_clear" title="Limpiar texto">
                <i class="fas fa-eraser"></i>
              </button>
            </div>
          </div>
          <textarea 
            id="ocrResult" 
            class="ocr_textarea" 
            placeholder="El texto extraído aparecerá aquí automáticamente..."
            spellcheck="false"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
`;

// ==================== VARIABLES GLOBALES ====================
let trabajador = null;
const $ = jQuery;

// ==================== ELEMENTOS DOM ====================
const obtenerElementos = () => ({
  zona: $('#dropZone'),
  marcador: $('.upload_placeholder'),
  previsualizacion: $('.image_preview'),
  imagen: $('.image_preview img'),
  resultado: $('#ocrResult'),
  barraProgreso: $('.progress_bar'),
  relleno: $('.progress_fill'),
  textoProgreso: $('.progress_text'),
  acciones: $('.result_actions')
});

// ==================== FUNCIONES UTILIDADES ====================
const actualizarProgreso = (progreso) => {
  const { barraProgreso, relleno, textoProgreso } = obtenerElementos();
  const porcentaje = Math.round(progreso * 100);
  
  relleno.css('width', `${porcentaje}%`);
  textoProgreso.text(`${porcentaje}%`);
  
  porcentaje > 0 && porcentaje < 100 
    ? barraProgreso.addClass('active')
    : porcentaje >= 100 
      ? setTimeout(() => barraProgreso.removeClass('active'), 500)
      : barraProgreso.removeClass('active');
};

const alternarAcciones = () => {
  const { resultado, acciones } = obtenerElementos();
  acciones.toggleClass('active', resultado.val().trim().length > 0);
};

const limpiarImagen = () => {
  const { previsualizacion, marcador, imagen } = obtenerElementos();
  
  previsualizacion.addClass('dpn');
  marcador.removeClass('dpn');
  imagen.attr('src', '');
  actualizarProgreso(0);
  
  if (trabajador) {
    trabajador.terminate();
    trabajador = null;
  }
};

const copiarTexto = (texto) => {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(texto);
  }
  
  const temporal = $('<textarea>')
    .val(texto)
    .css({ position: 'absolute', left: '-9999px' })
    .appendTo('body');
  
  temporal[0].select();
  document.execCommand('copy');
  temporal.remove();
  
  return Promise.resolve();
};

// ==================== PROCESAMIENTO OCR ====================
const procesarImagen = async (archivo) => {
  if (!archivo?.type.startsWith('image/')) {
    Mensaje('Selecciona una imagen válida', 'error');
    return;
  }

  const { imagen, marcador, previsualizacion, resultado } = obtenerElementos();
  const urlImagen = URL.createObjectURL(archivo);
  
  imagen.attr('src', urlImagen);
  marcador.addClass('dpn');
  previsualizacion.removeClass('dpn');
  actualizarProgreso(0);

  try {
    trabajador = await Tesseract.createWorker('spa+eng', 1, {
      logger: (msg) => msg.status === 'recognizing text' && actualizarProgreso(msg.progress)
    });

    const { data: { text } } = await trabajador.recognize(urlImagen);
    const textoLimpio = text.trim();
    
    resultado.val(textoLimpio);
    savels('ocrLastText', textoLimpio, 168);
    alternarAcciones();
    Mensaje('¡Texto extraído!', 'success');
    
    await trabajador.terminate();
    trabajador = null;
    actualizarProgreso(1);

  } catch (error) {
    console.error('Error OCR:', error);
    Mensaje('Error al procesar imagen', 'error');
    actualizarProgreso(0);
  } finally {
    URL.revokeObjectURL(urlImagen);
  }
};

// ==================== EVENTOS DE CARGA ====================
const abrirSelector = () => {
  const entrada = $('<input type="file" accept="image/*" style="display:none;">');
  
  entrada.on('change', function() {
    this.files[0] && procesarImagen(this.files[0]);
    entrada.remove();
  });
  
  $('body').append(entrada);
  entrada.click();
};

const manejarDragOver = (e) => {
  e.preventDefault();
  obtenerElementos().zona.addClass('dragover');
};

const manejarDragLeave = () => {
  obtenerElementos().zona.removeClass('dragover');
};

const manejarDrop = (e) => {
  e.preventDefault();
  const { zona } = obtenerElementos();
  zona.removeClass('dragover');
  
  const archivo = e.originalEvent.dataTransfer?.files[0];
  archivo && procesarImagen(archivo);
};

const manejarPaste = (e) => {
  const items = e.originalEvent.clipboardData?.items;
  if (!items) return;
  
  $.each(items, (i, item) => {
    if (item.type.startsWith('image/')) {
      const archivo = item.getAsFile();
      archivo && procesarImagen(archivo);
      return false; // break
    }
  });
};

// ==================== BOTONES DE ACCION ====================
const manejarCopiar = function() {
  const { resultado } = obtenerElementos();
  const texto = resultado.val().trim();
  
  if (!texto) {
    wiTip(this, 'No hay texto', 'warning', 1500);
    return;
  }
  
  copiarTexto(texto)
    .then(() => wiTip(this, '¡Copiado!', 'success', 1500))
    .catch(() => wiTip(this, 'Error', 'error', 1500));
};

const manejarLimpiar = function() {
  const { resultado } = obtenerElementos();
  
  if (!resultado.val().trim()) {
    wiTip(this, 'Ya está vacío', 'info', 1500);
    return;
  }
  
  resultado.val('');
  savels('ocrLastText', '', 168);
  alternarAcciones();
  wiTip(this, '¡Limpiado!', 'success', 1500);
};

const manejarEliminarImg = (e) => {
  e.stopPropagation();
  limpiarImagen();
};

const guardarTexto = () => {
  const { resultado } = obtenerElementos();
  const texto = resultado.val().trim();
  texto && savels('ocrLastText', texto, 168);
};

// ==================== INICIALIZACION ====================
export const init = () => {
  const { zona, resultado } = obtenerElementos();
  
  // Restaurar texto guardado
  const guardado = getls('ocrLastText');
  if (guardado) {
    resultado.val(guardado);
    alternarAcciones();
  }

  // Eventos de zona de carga
  zona.on('dblclick', abrirSelector)
      .on('dragover', manejarDragOver)
      .on('dragleave', manejarDragLeave)
      .on('drop', manejarDrop);

  // Evento paste global
  $(document).on('paste', manejarPaste);

  // Botones de acción
  $('.btn_clear_img').on('click', manejarEliminarImg);
  $('.btn_copy').on('click', manejarCopiar);
  $('.btn_clear').on('click', manejarLimpiar);

  // Detectar cambios en textarea
  resultado.on('input', alternarAcciones);

  // Auto-guardar antes de salir
  $(window).on('beforeunload', guardarTexto);

  console.log('✅ OCR Lector cargado');
};

// ==================== LIMPIEZA ====================
export const cleanup = () => {
  const selectores = ['paste', '#dropZone', '.btn_copy', '.btn_clear', '.btn_clear_img', '#ocrResult', 'beforeunload'];
  
  selectores.forEach(sel => {
    sel === 'paste' ? $(document).off(sel) 
    : sel === 'beforeunload' ? $(window).off(sel)
    : $(sel).off();
  });
  
  trabajador?.terminate();
  trabajador = null;
  
  console.log('🧹 OCR limpiado');
};