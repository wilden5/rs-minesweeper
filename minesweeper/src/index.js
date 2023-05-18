import './index.html';
import './index.scss';

import {initGameLayout} from "./modules/main-logic/LayoutHandler";
import {startGameSession} from "./modules/main-logic/SessionHandler";
import {initButtons} from "./modules/utils/ButtonsHandler";
import {saveGameResults, saveGameState} from "./modules/features/StorageHandler";
import {getClickCounter} from "./modules/main-logic/ClickHandler";
import {getStopwatchValue} from "./modules/features/StopwatchHandler";

export const initApp = () => {
    initGameLayout();
    startGameSession();
    initButtons();
}

initApp();

window.addEventListener('beforeunload', () => {
    if (getClickCounter() > 0 || parseInt(getStopwatchValue()) > 0) {
        saveGameState();
        saveGameResults();
    }
});