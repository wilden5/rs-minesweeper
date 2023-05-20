import {initStopwatch} from "../features/StopwatchHandler";
import {initClickOnBar} from "./ClickHandler";
import {initRedFlag} from "./FlagHandler";
import {playGameStartSound} from "../features/SoundHandler";
import {initThemeChanger} from "../features/ThemeHandler";
import {generateRandomMines} from "./MinesHandler";

let isGameOver = false;
export const getIsGameOver = () => {
    return isGameOver;
}
export const setIsGameOver = (value) => {
    isGameOver = value;
}

export const startGameSession = () => {
    const START_GAME_BUTTON = document.querySelector('.start-game-button');
    const MINES_SETTINGS_BUTTON = document.querySelector('.mines-settings-button');
    const MINES_SETTINGS_INPUT = document.querySelector('.mines-settings-input');
    const RESTART_BUTTON = document.querySelector('.restart-button');
    START_GAME_BUTTON.addEventListener('click', () => {
        START_GAME_BUTTON.disabled = true;
        MINES_SETTINGS_BUTTON.disabled = true;
        MINES_SETTINGS_INPUT.disabled = true;
        RESTART_BUTTON.disabled = false;
        playGameStartSound();
        initStopwatch();
        initClickOnBar();
        initRedFlag();
        initThemeChanger();
        generateRandomMines();
    })
}