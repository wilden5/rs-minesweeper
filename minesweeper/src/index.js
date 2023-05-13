import './index.html';
import './style/_style.scss';

import {initGameLayout} from "./modules/layoutHandler";
import {startGameSession} from "./modules/sessionHandler";

const initApp = () => {
    initGameLayout();
    startGameSession();
}

initApp();