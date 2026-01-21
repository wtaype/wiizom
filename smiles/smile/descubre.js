import $ from 'jquery';
import './descubre.css';

const crd = (ico, tit, des, clr) => `
  <div class="des_crd">
    <div class="des_ico" style="background:var(${clr})">${ico}</div>
    <h3 class="des_tit">${tit}</h3>
    <p class="des_des">${des}</p>
  </div>
`;

const bnf = [
  ['🌍', 'Relojes Personalizados', 'Añade tus ciudades favoritas y consulta la hora mundial al instante', '--success'],
  ['📅', 'Calendario Inteligente', 'Organiza eventos y reuniones con zonas horarias automáticas', '--info'],
  ['💾', 'Datos Sincronizados', 'Guarda tu información en la nube y accede desde cualquier dispositivo', '--warning'],
  ['🔔', 'Notificaciones Smart', 'Recibe alertas personalizadas para tus eventos importantes', '--mco'],
  ['📊', 'Estadísticas Avanzadas', 'Analiza tus patrones de uso y optimiza tu productividad', '--success'],
  ['🔐', 'Seguridad Total', 'Tus datos protegidos con encriptación de última generación', '--error']
];

export const render = async () => `
  <div class="des">
    <div class="des_hro">
      <div class="des_hro_cnt">
        <h1 class="des_h1">¡Descubre WiiPrime! 🚀</h1>
        <p class="des_sub">La plataforma definitiva para gestionar tiempo mundial</p>
        <div class="des_cta">
          <button class="des_btn des_btn_pri registrar">
            <i class="fas fa-rocket"></i> Comenzar Gratis
          </button>
          <button class="des_btn des_btn_sec login">
            <i class="fas fa-sign-in-alt"></i> Ya tengo cuenta
          </button>
        </div>
      </div>
      <div class="des_hro_img">
        <div class="des_flt des_flt1"></div>
        <div class="des_flt des_flt2"></div>
        <div class="des_flt des_flt3"></div>
      </div>
    </div>

    <div class="des_sec">
      <h2 class="des_h2">✨ Beneficios Exclusivos</h2>
      <div class="des_grd">
        ${bnf.map(([ico, tit, des, clr]) => crd(ico, tit, des, clr)).join('')}
      </div>
    </div>

    <div class="des_cmp">
      <h2 class="des_h2">📊 Comparación de Planes</h2>
      <div class="des_tbl">
        <div class="des_col des_col_free">
          <div class="des_col_hd">
            <i class="fas fa-globe"></i>
            <h3>Gratuito</h3>
            <p class="des_prc">$0<span>/mes</span></p>
          </div>
          <ul class="des_lst">
            <li><i class="fas fa-check"></i> Consulta hora mundial</li>
            <li><i class="fas fa-check"></i> Hasta 5 ciudades</li>
            <li><i class="fas fa-times"></i> Sin calendario</li>
            <li><i class="fas fa-times"></i> Sin sincronización</li>
          </ul>
        </div>
        <div class="des_col des_col_pro">
          <div class="des_bdg">Recomendado</div>
          <div class="des_col_hd">
            <i class="fas fa-star"></i>
            <h3>Premium</h3>
            <p class="des_prc">Gratis<span>/siempre</span></p>
          </div>
          <ul class="des_lst">
            <li><i class="fas fa-check"></i> Ciudades ilimitadas</li>
            <li><i class="fas fa-check"></i> Calendario completo</li>
            <li><i class="fas fa-check"></i> Sincronización nube</li>
            <li><i class="fas fa-check"></i> Notificaciones smart</li>
            <li><i class="fas fa-check"></i> Soporte prioritario</li>
          </ul>
          <button class="des_btn des_btn_pro registrar">
            <i class="fas fa-crown"></i> Registrarme Ahora
          </button>
        </div>
      </div>
    </div>

    <div class="des_ftr">
      <h2 class="des_h2">🎯 ¿Listo para empezar?</h2>
      <p class="des_ftr_txt">Únete a miles de usuarios que ya optimizan su tiempo con WiiPrime</p>
      <button class="des_btn des_btn_lrg registrar">
        <i class="fas fa-rocket"></i> Crear Cuenta Gratis
      </button>
    </div>
  </div>
`;

export const init = () => {
  console.log('🚀 Descubre inicializado');
};

export const cleanup = () => {
  console.log('🚀 Descubre limpiado');
};