import ScrollSmooth from './animations/initScrollSmooth.js';
import Accordion from './animations/initAccordion.js';
import Tabnav from './animations/initTab.js';
import ScrollAnima from './animations/scroll-anima.js';
import Modal from './animations/modal.js';
import Tooltip from './animations/toolTip.js';
import DropdownMenu from './animations/initDropDownMenu.js';
import MenuMobile from './animations/menuMobile.js';
import Funcionamento from './animations/initHorarios.js';
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

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-dias]', 'open');
funcionamento.init();

fetchAnimals('../../animais.json', '.numeros-grid');
fetchBitCoin('https://blockchain.info/ticker', '.btc-price');
