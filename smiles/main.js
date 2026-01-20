import('./footer.js')
import $ from 'jquery';
import { rutas } from './rutas.js';

const pages = ['inicio','convertidor','descubre','beneficios','acerca'];
pages.forEach(pg => rutas.register(`/${pg}`, () => import(`./web/${pg}.js`))); 

rutas.init(); // Rutas registrados y go excelente app. 

