import './smile.css';
import $ from 'jquery';
import { wiIp, savels, getls, Saludar, wiSpin } from '../widev.js';

export let smile = getls('wiSmile'); // Obtener datos del usuario
export const render = async () => {
  return `
   <div class="miweb">
    <div class="mhead">
     <div class="mhead_left">
      <h1 class="mh1"><i class="fas fa-trophy"></i> ${Saludar()} ${smile.nombre}</h1>
      <ul class="mfeatures">
       <li><i class="fas fa-check-circle"></i> Personaliza las zonas horarias</li>
       <li><i class="fas fa-check-circle"></i> Personaliza el calendario</li>
       <li><i class="fas fa-check-circle"></i> Sincroniza en tiempo real</li>
      </ul>
     </div>
     <div class="mhead_right">
      <button class="btn wfresh">Actualizar <i class="fa-solid fa-rotate-right"></i></button>
     </div>
    </div>
    <div class="mibody">
     <div class="wiHoras"></div>
     <div class="wiMeses"></div>
    </div>
   </div>
  `;
};

export const init = async () => {
  // actualizado(); //Iniciar actualizaciones
};

export const cleanup = () => {
  console.log('😊 Smile limpiado');
};