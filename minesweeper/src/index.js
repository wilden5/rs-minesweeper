import './index.html';
import './index.scss';

import {initGameLayout} from "./modules/main-logic/LayoutHandler";
import {startGameSession} from "./modules/main-logic/SessionHandler";

const initApp = () => {
    initGameLayout();
    startGameSession();
}

initApp();