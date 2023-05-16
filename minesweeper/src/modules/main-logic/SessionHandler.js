import {initStopwatch} from "../features/StopwatchHandler";
import {initClickOnBar} from "./ClickHandler";
import {handleRedFlag} from "./FlagHandler";
import {playGameStartSound} from "../features/SoundHandler";

let isGameOver = false;
export const getIsGameOver = () => {
    return isGameOver;
}
export const setIsGameOver = (value) => {
    isGameOver = value;
}

export const startGameSession = () => {
    const START_GAME_BUTTON = document.querySelector('.start-game-button');
    START_GAME_BUTTON.addEventListener('click', () => {
        START_GAME_BUTTON.disabled = true;
        playGameStartSound();
        initStopwatch();
        initClickOnBar();
        handleRedFlag();
    })
}