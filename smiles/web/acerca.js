import './acerca.css';
import $ from 'jquery';
import { app, lanzamiento, autor, link, version } from '../wii.js';
import { wicopy } from '../widev.js';

export const render = () => `
  <div class="acerca_container">
    <div class="acerca_hero">
      <div class="hero_badge">
        <i class="fas fa-crown"></i>
        <span>Versión ${version}</span>
      </div>
      <div class="hero_logo">
        <i class="fas fa-music"></i>
      </div>
      <h1 class="hero_title">${app}</h1>
      <p class="hero_subtitle">La herramienta más poderosa para convertir videos a MP3</p>
      <div class="hero_stats">
        <div class="stat_item">
          <i class="fas fa-calendar-alt"></i>
          <span>Desde ${lanzamiento}</span>
        </div>
        <div class="stat_item">
          <i class="fas fa-users"></i>
          <span>+10K Usuarios</span>
        </div>
        <div class="stat_item">
          <i class="fas fa-download"></i>
          <span>+50K Conversiones</span>
        </div>
      </div>
    </div>

    <div class="acerca_section">
      <h2 class="section_title">
        <i class="fas fa-info-circle"></i> Acerca de Nosotros
      </h2>
      <div class="section_content">
        <p><strong>${app}</strong> es una herramienta revolucionaria diseñada para hacer tu vida más fácil. Nació en ${lanzamiento} con una misión clara: <strong>democratizar la conversión de medios</strong> y hacerla accesible para todos.</p>
        <p>Nuestra plataforma utiliza la tecnología más avanzada de <strong>FFmpeg</strong> para garantizar conversiones de alta calidad, rápidas y eficientes. No importa si eres creador de contenido, músico, estudiante o simplemente alguien que ama la música, ${app} está aquí para ti.</p>
        <p>Con más de <strong>50,000 conversiones exitosas</strong> y una comunidad en constante crecimiento, nos hemos convertido en la herramienta de confianza para miles de usuarios alrededor del mundo.</p>
      </div>
    </div>

    <div class="acerca_section">
      <h2 class="section_title">
        <i class="fas fa-lightbulb"></i> ¿Por qué ${app}?
      </h2>
      <div class="features_grid">
        <div class="feature_box">
          <div class="feature_icon">
            <i class="fas fa-rocket"></i>
          </div>
          <h3>Ultra Rápido</h3>
          <p>Conversiones en segundos gracias a nuestra tecnología optimizada</p>
        </div>
        <div class="feature_box">
          <div class="feature_icon">
            <i class="fas fa-shield-alt"></i>
          </div>
          <h3>100% Seguro</h3>
          <p>Tus archivos son privados y nunca se almacenan en nuestros servidores</p>
        </div>
        <div class="feature_box">
          <div class="feature_icon">
            <i class="fas fa-gem"></i>
          </div>
          <h3>Alta Calidad</h3>
          <p>Hasta 320 kbps para audio profesional de estudio</p>
        </div>
        <div class="feature_box">
          <div class="feature_icon">
            <i class="fas fa-globe"></i>
          </div>
          <h3>Multiplataforma</h3>
          <p>Funciona en Windows, Mac, Linux y dispositivos móviles</p>
        </div>
        <div class="feature_box">
          <div class="feature_icon">
            <i class="fas fa-dollar-sign"></i>
          </div>
          <h3>Totalmente Gratis</h3>
          <p>Sin límites, sin anuncios molestos, sin costos ocultos</p>
        </div>
        <div class="feature_box">
          <div class="feature_icon">
            <i class="fas fa-cogs"></i>
          </div>
          <h3>Fácil de Usar</h3>
          <p>Interfaz intuitiva diseñada para usuarios de todos los niveles</p>
        </div>
      </div>
    </div>

    <div class="acerca_section">
      <h2 class="section_title">
        <i class="fas fa-code-branch"></i> Información Técnica
      </h2>
      <div class="tech_grid">
        <div class="tech_card">
          <div class="tech_header">
            <i class="fab fa-node-js"></i>
            <h3>Backend</h3>
          </div>
          <ul class="tech_list">
            <li><i class="fas fa-check"></i> Node.js v20.x</li>
            <li><i class="fas fa-check"></i> Express.js</li>
            <li><i class="fas fa-check"></i> FFmpeg 6.0</li>
            <li><i class="fas fa-check"></i> Multer</li>
          </ul>
        </div>
        <div class="tech_card">
          <div class="tech_header">
            <i class="fab fa-js"></i>
            <h3>Frontend</h3>
          </div>
          <ul class="tech_list">
            <li><i class="fas fa-check"></i> Vanilla JavaScript</li>
            <li><i class="fas fa-check"></i> jQuery 3.7</li>
            <li><i class="fas fa-check"></i> CSS3 Moderno</li>
            <li><i class="fas fa-check"></i> Vite Build Tool</li>
          </ul>
        </div>
        <div class="tech_card">
          <div class="tech_header">
            <i class="fas fa-server"></i>
            <h3>Infraestructura</h3>
          </div>
          <ul class="tech_list">
            <li><i class="fas fa-check"></i> GitHub Pages</li>
            <li><i class="fas fa-check"></i> CDN Global</li>
            <li><i class="fas fa-check"></i> SSL/TLS</li>
            <li><i class="fas fa-check"></i> Cache Optimizado</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="acerca_section">
      <h2 class="section_title">
        <i class="fas fa-history"></i> Historial de Versiones
      </h2>
      <div class="version_timeline">
        <div class="version_item">
          <div class="version_badge current">v10</div>
          <div class="version_content">
            <h3>Versión 10.0 - Actualización Mayor</h3>
            <p class="version_date"><i class="far fa-calendar"></i> Enero 2026</p>
            <ul>
              <li>✨ Nueva interfaz moderna y minimalista</li>
              <li>🚀 Conversión hasta 3x más rápida</li>
              <li>🎨 Sistema de temas dinámicos</li>
              <li>📊 Indicador de progreso en tiempo real</li>
              <li>🔧 Mejoras en estabilidad y rendimiento</li>
            </ul>
          </div>
        </div>
        <div class="version_item">
          <div class="version_badge">v9</div>
          <div class="version_content">
            <h3>Versión 9.0 - Optimización</h3>
            <p class="version_date"><i class="far fa-calendar"></i> Diciembre 2025</p>
            <ul>
              <li>⚡ Optimización de carga inicial</li>
              <li>📱 Mejoras en responsive design</li>
              <li>🎯 Corrección de bugs menores</li>
            </ul>
          </div>
        </div>
        <div class="version_item">
          <div class="version_badge">v8</div>
          <div class="version_content">
            <h3>Versión 8.0 - Lanzamiento Inicial</h3>
            <p class="version_date"><i class="far fa-calendar"></i> ${lanzamiento}</p>
            <ul>
              <li>🎉 Lanzamiento oficial de ${app}</li>
              <li>🎵 Conversión básica MP4 a MP3</li>
              <li>📂 Sistema drag & drop</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="acerca_section">
      <h2 class="section_title">
        <i class="fas fa-user-tie"></i> Desarrollador
      </h2>
      <div class="developer_card">
        <div class="developer_avatar">
          <i class="fas fa-user-circle"></i>
        </div>
        <div class="developer_info">
          <h3>${autor}</h3>
          <p class="developer_role">Full Stack Developer & Creator</p>
          <p class="developer_bio">
            Apasionado por crear herramientas útiles y accesibles para todos. 
            Con más de 5 años de experiencia en desarrollo web y una visión clara: 
            <strong>simplificar la tecnología</strong> para mejorar la vida de las personas.
          </p>
          <div class="developer_links">
            <a href="${link}" target="_blank" class="dev_link">
              <i class="fas fa-globe"></i> Portafolio
            </a>
            <a href="https://github.com/wtaype" target="_blank" class="dev_link">
              <i class="fab fa-github"></i> GitHub
            </a>
            <button class="dev_link copy_email" data-email="${autor}@hotmail.com">
              <i class="fas fa-envelope"></i> Contacto
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="acerca_footer">
      <div class="footer_quote">
        <i class="fas fa-quote-left"></i>
        <p>"La tecnología es mejor cuando acerca a las personas y simplifica sus vidas"</p>
        <i class="fas fa-quote-right"></i>
      </div>
      <div class="footer_info">
        <p>© ${lanzamiento}-${new Date().getFullYear()} ${app}. Hecho con <i class="fas fa-heart"></i> por ${autor}</p>
        <p class="footer_version">Versión actual: <strong>${version}</strong></p>
      </div>
    </div>
  </div>
`;

export const init = () => {
  $('.copy_email').on('click', function() {
    const email = $(this).data('email');
    wicopy(email, this, '¡Email copiado!');
  });

  console.log(`✅ Acerca de ${app} ${version} cargado`);
};

export const cleanup = () => {
  $('.copy_email').off();
  console.log('🧹 Acerca limpiado');
};