import ScrollSmooth from './animations/initScrollSmooth.js';
import Accordion from './animations/initAccordion.js';
import Tabnav from './animations/initTab.js';
import initAnimaScroll from './animations/initAnimaScroll.js';
import Modal from './animations/modal.js';
import Tooltip from './animations/toolTip.js';
import initDropDownMenu from './animations/initDropDownMenu.js';
import initMenuMobile from './animations/menuMobile.js';
import initHorarios from './animations/initHorarios.js';
import fetchAnimals from './animations/fetchAnimais.js';
import fetchBitCoin from './animations/initFetchBitCoin.js';

const scrollSmooth = new ScrollSmooth('[data-menu="suave"] a[href^="#"]');
scrollSmooth.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabnav = new Tabnav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabnav.init();

const modal = new Modal(
  '[data-anima="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initAnimaScroll();
initDropDownMenu();
initMenuMobile();
initHorarios();
fetchAnimals('../../animais.json', '.numeros-grid');
fetchBitCoin('https://blockchain.info/ticker', '.btc-price');
