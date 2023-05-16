import './index.html';
import './index.scss';

import {initGameLayout} from "./modules/main-logic/LayoutHandler";
import {startGameSession} from "./modules/main-logic/SessionHandler";
import {initButtons} from "./modules/utils/buttonsHandler";
import {saveGameState} from "./modules/features/StorageHandler";
import {getClickCounter} from "./modules/main-logic/ClickHandler";
import {getTimerInterval} from "./modules/features/SpotwatchHandler";

export const initApp = () => {
    initGameLayout();
    startGameSession();
    initButtons();
}

initApp();

window.addEventListener('beforeunload', () => {
    if (getClickCounter() > 0 || parseInt(getTimerInterval()) > 0) {
        saveGameState();
    }
});