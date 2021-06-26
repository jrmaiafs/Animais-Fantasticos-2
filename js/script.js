import ScrollSmooth from './animations/initScrollSmooth.js';
import initAccordion from './animations/initAccordion.js';
import initTab from './animations/initTab.js';
import initAnimaScroll from './animations/initAnimaScroll.js';
import initModal from './animations/modal.js';
import initToolTip from './animations/toolTip.js';
import initDropDownMenu from './animations/initDropDownMenu.js';
import initMenuMobile from './animations/menuMobile.js';
import initHorarios from './animations/initHorarios.js';
import initFetchAnimais from './animations/fetchAnimais.js';
import initFetchBitCoin from './animations/initFetchBitCoin.js';


const scrollSmooth = new ScrollSmooth('[data-menu="suave"] a[href^="#"]')
scrollSmooth.init()
initTab();
initAnimaScroll();
initAccordion();
initModal();
initToolTip();
initDropDownMenu();
initMenuMobile();
initHorarios();
initFetchAnimais();
initFetchBitCoin();
