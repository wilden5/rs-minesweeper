import './index.html';
import './index.scss';

import {initGameLayout} from "./modules/main-logic/LayoutHandler";
import {startGameSession} from "./modules/main-logic/SessionHandler";
import {initButtons} from "./modules/utils/ButtonsHandler";
import {saveGameState} from "./modules/features/StorageHandler";
import {getClickCounter} from "./modules/main-logic/ClickHandler";
import {getStopwatchValue} from "./modules/features/StopwatchHandler";
import {initThemeChanger} from "./modules/features/ThemeHandler";

export const initApp = () => {
    initGameLayout();
    startGameSession();
    initButtons();
    initThemeChanger();
}

initApp();

window.addEventListener('beforeunload', () => {
    if (getClickCounter() > 0 || parseInt(getStopwatchValue()) > 0) {
        saveGameState();
    }
});