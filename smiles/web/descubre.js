import './descubre.css';
import $ from 'jquery';

export const render = () => `
  <div class="descubre_container">
    <div class="descubre_hero">
      <div class="hero_icon">
        <i class="fas fa-info-circle"></i>
      </div>
      <h1 class="hero_title">WIMP3 - Conversor Profesional</h1>
      <p class="hero_subtitle">Convierte videos a audio MP3 de alta calidad</p>
    </div>

    <div class="descubre_features">
      <div class="feature_card">
        <div class="feature_icon" style="background: linear-gradient(135deg, var(--Cielo), #00a8e6);">
          <i class="fas fa-file-video"></i>
        </div>
        <h3 class="feature_title">Formatos Soportados</h3>
        <p class="feature_desc">MP4, MKV, AVI, MOV, WMV, FLV</p>
        <div class="feature_tags">
          <span class="tag">MP4</span>
          <span class="tag">MKV</span>
          <span class="tag">AVI</span>
        </div>
      </div>

      <div class="feature_card">
        <div class="feature_icon" style="background: linear-gradient(135deg, var(--Paz), #25b62a);">
          <i class="fas fa-hdd"></i>
        </div>
        <h3 class="feature_title">Calidad de Audio</h3>
        <p class="feature_desc">128k - 192k, 256k - 320k bitrate</p>
        <div class="feature_tags">
          <span class="tag">128 kbps</span>
          <span class="tag">192 kbps</span>
          <span class="tag">320 kbps</span>
        </div>
      </div>

      <div class="feature_card">
        <div class="feature_icon" style="background: linear-gradient(135deg, var(--Dulce), #ff3849);">
          <i class="fas fa-layer-group"></i>
        </div>
        <h3 class="feature_title">Conversión por Lotes</h3>
        <p class="feature_desc">Múltiples archivos simultáneos</p>
        <div class="feature_tags">
          <span class="tag">Batch</span>
          <span class="tag">Multi-file</span>
        </div>
      </div>

      <div class="feature_card">
        <div class="feature_icon" style="background: linear-gradient(135deg, var(--Mora), #6a00f5);">
          <i class="fas fa-tachometer-alt"></i>
        </div>
        <h3 class="feature_title">Alto Rendimiento</h3>
        <p class="feature_desc">Optimizado con FFmpeg profesional</p>
        <div class="feature_tags">
          <span class="tag">FFmpeg</span>
          <span class="tag">Fast</span>
        </div>
      </div>

      <div class="feature_card">
        <div class="feature_icon" style="background: linear-gradient(135deg, #ffa726, #ff9800);">
          <i class="fas fa-star"></i>
        </div>
        <h3 class="feature_title">Organización Avanzada</h3>
        <p class="feature_desc">Rutas personalizables de salida</p>
        <div class="feature_tags">
          <span class="tag">Custom Paths</span>
          <span class="tag">Auto-save</span>
        </div>
      </div>
    </div>

    <div class="descubre_specs">
      <h2 class="specs_title">
        <i class="fas fa-bolt"></i> Características principales
      </h2>
      <div class="specs_grid">
        <div class="spec_item">
          <div class="spec_icon">
            <i class="fas fa-hand-pointer"></i>
          </div>
          <div class="spec_content">
            <h4>Drag & Drop</h4>
            <p>Arrastra videos directamente</p>
          </div>
        </div>

        <div class="spec_item">
          <div class="spec_icon">
            <i class="fas fa-chart-bar"></i>
          </div>
          <div class="spec_content">
            <h4>Progreso Real</h4>
            <p>Visualiza el estado de conversión</p>
          </div>
        </div>

        <div class="spec_item">
          <div class="spec_icon">
            <i class="fas fa-save"></i>
          </div>
          <div class="spec_content">
            <h4>Auto-guardado</h4>
            <p>Recuerda tus preferencias</p>
          </div>
        </div>

        <div class="spec_item">
          <div class="spec_icon">
            <i class="fas fa-bolt"></i>
          </div>
          <div class="spec_content">
            <h4>Rápido</h4>
            <p>Conversión optimizada</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export const init = () => {
  console.log('✅ Descubre cargado');
};

export const cleanup = () => {
  console.log('🧹 Descubre limpiado');
};