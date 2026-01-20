import './beneficios.css';
import $ from 'jquery';
import { app, version } from '../wii.js';
import { abrirModal, cerrarModal } from '../widev.js';

export const render = () => `
  <div class="beneficios_container">
    <div class="beneficios_hero">
      <div class="hero_sparkle">✨</div>
      <h1 class="hero_title">Beneficios Exclusivos de ${app}</h1>
      <p class="hero_subtitle">Descubre por qué miles de usuarios confían en nosotros</p>
      <div class="hero_badge">
        <i class="fas fa-shield-check"></i>
        <span>100% Confiable & Seguro</span>
      </div>
    </div>

    <div class="beneficios_grid">
      <div class="benefit_card premium">
        <div class="benefit_ribbon">Popular</div>
        <div class="benefit_icon">
          <i class="fas fa-bolt"></i>
        </div>
        <h3>Conversión Ultrarrápida</h3>
        <p>Procesa tus videos en segundos gracias a nuestra tecnología optimizada con FFmpeg 6.0</p>
        <ul class="benefit_features">
          <li><i class="fas fa-check"></i> Hasta 3x más rápido</li>
          <li><i class="fas fa-check"></i> Sin límite de tamaño</li>
          <li><i class="fas fa-check"></i> Procesamiento paralelo</li>
        </ul>
        <button class="benefit_btn" data-modal="modalRapido">
          <i class="fas fa-play"></i> Ver demo
        </button>
      </div>

      <div class="benefit_card">
        <div class="benefit_icon">
          <i class="fas fa-gem"></i>
        </div>
        <h3>Calidad Profesional</h3>
        <p>Audio de alta fidelidad con bitrates personalizables de 128k hasta 320k</p>
        <ul class="benefit_features">
          <li><i class="fas fa-check"></i> Hasta 320 kbps</li>
          <li><i class="fas fa-check"></i> Sin pérdida de calidad</li>
          <li><i class="fas fa-check"></i> Múltiples formatos</li>
        </ul>
        <button class="benefit_btn" data-modal="modalCalidad">
          <i class="fas fa-chart-line"></i> Comparar
        </button>
      </div>

      <div class="benefit_card">
        <div class="benefit_icon">
          <i class="fas fa-shield-alt"></i>
        </div>
        <h3>Privacidad Total</h3>
        <p>Tus archivos nunca se almacenan en nuestros servidores. Conversión local y segura</p>
        <ul class="benefit_features">
          <li><i class="fas fa-check"></i> Procesamiento local</li>
          <li><i class="fas fa-check"></i> Sin registro de datos</li>
          <li><i class="fas fa-check"></i> Eliminación automática</li>
        </ul>
        <button class="benefit_btn" data-modal="modalSeguridad">
          <i class="fas fa-lock"></i> Saber más
        </button>
      </div>

      <div class="benefit_card">
        <div class="benefit_icon">
          <i class="fas fa-magic"></i>
        </div>
        <h3>Interfaz Intuitiva</h3>
        <p>Diseño moderno y fácil de usar. Arrastra, suelta y convierte en 3 simples pasos</p>
        <ul class="benefit_features">
          <li><i class="fas fa-check"></i> Drag & Drop</li>
          <li><i class="fas fa-check"></i> Sin complicaciones</li>
          <li><i class="fas fa-check"></i> Indicador en tiempo real</li>
        </ul>
        <button class="benefit_btn" data-modal="modalFacil">
          <i class="fas fa-book"></i> Guía rápida
        </button>
      </div>

      <div class="benefit_card">
        <div class="benefit_icon">
          <i class="fas fa-globe"></i>
        </div>
        <h3>Multiplataforma</h3>
        <p>Funciona perfectamente en Windows, Mac, Linux, Android e iOS</p>
        <ul class="benefit_features">
          <li><i class="fas fa-check"></i> Cross-platform</li>
          <li><i class="fas fa-check"></i> Sin instalación</li>
          <li><i class="fas fa-check"></i> PWA compatible</li>
        </ul>
        <button class="benefit_btn" data-modal="modalPlatform">
          <i class="fas fa-desktop"></i> Compatibilidad
        </button>
      </div>

      <div class="benefit_card premium">
        <div class="benefit_ribbon">Gratis</div>
        <div class="benefit_icon">
          <i class="fas fa-infinity"></i>
        </div>
        <h3>Conversiones Ilimitadas</h3>
        <p>Sin restricciones, sin anuncios molestos, sin costos ocultos. 100% gratis</p>
        <ul class="benefit_features">
          <li><i class="fas fa-check"></i> Sin límites diarios</li>
          <li><i class="fas fa-check"></i> Sin publicidad</li>
          <li><i class="fas fa-check"></i> Sin suscripciones</li>
        </ul>
        <button class="benefit_btn" data-modal="modalGratis">
          <i class="fas fa-gift"></i> Comenzar ahora
        </button>
      </div>
    </div>

    <div class="comparison_section">
      <h2 class="section_title">
        <i class="fas fa-balance-scale"></i> ${app} vs Competencia
      </h2>
      <div class="comparison_table">
        <div class="table_wrapper">
          <table>
            <thead>
              <tr>
                <th>Característica</th>
                <th class="highlight">${app}</th>
                <th>Otros</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Velocidad de conversión</td>
                <td class="highlight"><i class="fas fa-bolt"></i> Ultra rápida</td>
                <td><i class="fas fa-minus"></i> Lenta</td>
              </tr>
              <tr>
                <td>Calidad máxima</td>
                <td class="highlight"><i class="fas fa-check"></i> 320 kbps</td>
                <td><i class="fas fa-times"></i> 192 kbps</td>
              </tr>
              <tr>
                <td>Límite de archivos</td>
                <td class="highlight"><i class="fas fa-infinity"></i> Ilimitado</td>
                <td><i class="fas fa-times"></i> 5-10 por día</td>
              </tr>
              <tr>
                <td>Privacidad</td>
                <td class="highlight"><i class="fas fa-shield-check"></i> Total</td>
                <td><i class="fas fa-exclamation-triangle"></i> Dudosa</td>
              </tr>
              <tr>
                <td>Publicidad</td>
                <td class="highlight"><i class="fas fa-check"></i> Sin anuncios</td>
                <td><i class="fas fa-times"></i> Invasiva</td>
              </tr>
              <tr>
                <td>Costo</td>
                <td class="highlight"><i class="fas fa-gift"></i> Gratis </td>
                <td><i class="fas fa-dollar-sign"></i> Premium</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="stats_section">
      <h2 class="section_title">
        <i class="fas fa-chart-bar"></i> Estadísticas que Hablan
      </h2>
      <div class="stats_grid">
        <div class="stat_card">
          <div class="stat_icon">
            <i class="fas fa-users"></i>
          </div>
          <div class="stat_number" data-count="10000">0</div>
          <div class="stat_label">Usuarios Activos</div>
        </div>
        <div class="stat_card">
          <div class="stat_icon">
            <i class="fas fa-download"></i>
          </div>
          <div class="stat_number" data-count="50000">0</div>
          <div class="stat_label">Conversiones Exitosas</div>
        </div>
        <div class="stat_card">
          <div class="stat_icon">
            <i class="fas fa-clock"></i>
          </div>
          <div class="stat_number" data-count="1200">0</div>
          <div class="stat_label">Horas Ahorradas</div>
        </div>
        <div class="stat_card">
          <div class="stat_icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="stat_number" data-count="98">0</div>
          <div class="stat_label">% Satisfacción</div>
        </div>
      </div>
    </div>

    <div class="cta_section">
      <div class="cta_content">
        <h2>¿Listo para la mejor experiencia?</h2>
        <p>Únete a miles de usuarios que ya disfrutan de ${app}</p>
        <a href="/" class="cta_button">
          <i class="fas fa-rocket"></i> Comenzar ahora
        </a>
      </div>
    </div>
  </div>

  <!-- MODALES -->
  <div id="modalRapido" class="wiModal">
    <div class="modalBody" style="background:var(--wb)">
      <button class="modalX" onclick="cerrarModal('modalRapido')"><i class="fas fa-times"></i></button>
      <div style="padding:3vh 2vw;text-align:center">
        <i class="fas fa-bolt" style="font-size:4rem;color:var(--mco);margin-bottom:2vh"></i>
        <h2 style="color:var(--tx);margin-bottom:2vh">Conversión Ultrarrápida</h2>
        <p style="color:var(--tx);line-height:1.8">Nuestra tecnología optimizada con FFmpeg 6.0 permite procesar videos en tiempo récord. Sin importar el tamaño del archivo, ${app} mantiene velocidades consistentes gracias al procesamiento paralelo avanzado.</p>
      </div>
    </div>
  </div>

  <div id="modalCalidad" class="wiModal">
    <div class="modalBody" style="background:var(--wb)">
      <button class="modalX" onclick="cerrarModal('modalCalidad')"><i class="fas fa-times"></i></button>
      <div style="padding:3vh 2vw;text-align:center">
        <i class="fas fa-gem" style="font-size:4rem;color:var(--mco);margin-bottom:2vh"></i>
        <h2 style="color:var(--tx);margin-bottom:2vh">Calidad Profesional</h2>
        <p style="color:var(--tx);line-height:1.8">Ofrecemos hasta 320 kbps de bitrate, la máxima calidad disponible para MP3. Perfecto para audiófilos y profesionales que no aceptan compromisos en la calidad del audio.</p>
      </div>
    </div>
  </div>

  <div id="modalSeguridad" class="wiModal">
    <div class="modalBody" style="background:var(--wb)">
      <button class="modalX" onclick="cerrarModal('modalSeguridad')"><i class="fas fa-times"></i></button>
      <div style="padding:3vh 2vw;text-align:center">
        <i class="fas fa-shield-alt" style="font-size:4rem;color:var(--mco);margin-bottom:2vh"></i>
        <h2 style="color:var(--tx);margin-bottom:2vh">Privacidad Total</h2>
        <p style="color:var(--tx);line-height:1.8">Tus archivos se procesan localmente y se eliminan automáticamente después de la conversión. No almacenamos, rastreamos ni compartimos ningún dato. Tu privacidad es nuestra prioridad.</p>
      </div>
    </div>
  </div>

  <div id="modalFacil" class="wiModal">
    <div class="modalBody" style="background:var(--wb)">
      <button class="modalX" onclick="cerrarModal('modalFacil')"><i class="fas fa-times"></i></button>
      <div style="padding:3vh 2vw;text-align:center">
        <i class="fas fa-magic" style="font-size:4rem;color:var(--mco);margin-bottom:2vh"></i>
        <h2 style="color:var(--tx);margin-bottom:2vh">Guía Rápida</h2>
        <ol style="color:var(--tx);text-align:left;line-height:2;padding-left:2vw">
          <li><strong>Arrastra</strong> tu video a la zona de carga</li>
          <li><strong>Selecciona</strong> la calidad deseada (128k-320k)</li>
          <li><strong>Haz clic</strong> en convertir y ¡listo!</li>
        </ol>
      </div>
    </div>
  </div>

  <div id="modalPlatform" class="wiModal">
    <div class="modalBody" style="background:var(--wb)">
      <button class="modalX" onclick="cerrarModal('modalPlatform')"><i class="fas fa-times"></i></button>
      <div style="padding:3vh 2vw;text-align:center">
        <i class="fas fa-globe" style="font-size:4rem;color:var(--mco);margin-bottom:2vh"></i>
        <h2 style="color:var(--tx);margin-bottom:2vh">Compatibilidad Total</h2>
        <p style="color:var(--tx);line-height:1.8;margin-bottom:2vh">Funciona en todos los dispositivos y sistemas operativos:</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:2vh">
          <div style="padding:1.5vh;background:var(--bg1);border-radius:8px">
            <i class="fab fa-windows" style="font-size:2rem;color:var(--mco)"></i>
            <p style="color:var(--tx);margin-top:1vh">Windows</p>
          </div>
          <div style="padding:1.5vh;background:var(--bg1);border-radius:8px">
            <i class="fab fa-apple" style="font-size:2rem;color:var(--mco)"></i>
            <p style="color:var(--tx);margin-top:1vh">macOS</p>
          </div>
          <div style="padding:1.5vh;background:var(--bg1);border-radius:8px">
            <i class="fab fa-linux" style="font-size:2rem;color:var(--mco)"></i>
            <p style="color:var(--tx);margin-top:1vh">Linux</p>
          </div>
          <div style="padding:1.5vh;background:var(--bg1);border-radius:8px">
            <i class="fab fa-android" style="font-size:2rem;color:var(--mco)"></i>
            <p style="color:var(--tx);margin-top:1vh">Android</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="modalGratis" class="wiModal">
    <div class="modalBody" style="background:var(--wb)">
      <button class="modalX" onclick="cerrarModal('modalGratis')"><i class="fas fa-times"></i></button>
      <div style="padding:3vh 2vw;text-align:center">
        <i class="fas fa-gift" style="font-size:4rem;color:var(--mco);margin-bottom:2vh"></i>
        <h2 style="color:var(--tx);margin-bottom:2vh">100% Gratis, Siempre</h2>
        <p style="color:var(--tx);line-height:1.8">Sin límites artificiales, sin muros de pago, sin anuncios invasivos. Creemos que las herramientas útiles deben ser accesibles para todos. ${app} es y siempre será completamente gratuito.</p>
      </div>
    </div>
  </div>
`;

export const init = () => {
  // Abrir modales
  $('.benefit_btn').on('click', function() {
    const modalId = $(this).data('modal');
    abrirModal(modalId);
  });

  // Animación de números
  const animateNumbers = () => {
    $('.stat_number').each(function() {
      const $this = $(this);
      const target = parseInt($this.data('count'));
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          $this.text(target.toLocaleString());
          clearInterval(timer);
        } else {
          $this.text(Math.floor(current).toLocaleString());
        }
      }, duration / steps);
    });
  };

  // Intersection Observer para stats
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumbers();
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.stats_section');
  if (statsSection) observer.observe(statsSection);

  console.log(`✅ Beneficios de ${app} ${version} cargados`);
};

export const cleanup = () => {
  $('.benefit_btn').off();
  console.log('🧹 Beneficios limpiados');
};