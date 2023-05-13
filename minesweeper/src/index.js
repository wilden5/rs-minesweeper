import './index.html';
import './style/_style.scss';

import {initGameLayout} from "./modules/main-logic/LayoutHandler";
import {startGameSession} from "./modules/main-logic/SessionHandler";

const initApp = () => {
    initGameLayout();
    startGameSession();
}

initApp();