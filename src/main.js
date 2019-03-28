import { initRouter } from './UI/router.js';
import { configBD } from './lib/configBD/configFireBase.js';

window.onload = () => {
	configBD();
	initRouter();	
}
