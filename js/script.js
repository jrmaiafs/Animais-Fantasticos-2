import ScrollSmooth from './animations/initScrollSmooth.js';
import Accordion from './animations/initAccordion.js';
import Tabnav from './animations/initTab.js';
import initAnimaScroll from './animations/initAnimaScroll.js';
import Modal from './animations/modal.js';
import initToolTip from './animations/toolTip.js';
import initDropDownMenu from './animations/initDropDownMenu.js';
import initMenuMobile from './animations/menuMobile.js';
import initHorarios from './animations/initHorarios.js';
import initFetchAnimais from './animations/fetchAnimais.js';
import initFetchBitCoin from './animations/initFetchBitCoin.js';

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

initAnimaScroll();
initToolTip();
initDropDownMenu();
initMenuMobile();
initHorarios();
initFetchAnimais();
initFetchBitCoin();
