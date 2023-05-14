import {setIsGameOver} from "./GameStateHandler";
import {setTimerInterval, startTimer} from "../features/SpotwatchHandler";
import {handleBarClick} from "./ClickHandler";
import {handleRedFlag} from "./FlagHandler";
import {initApp} from "../../index";

export const restartGame = () => {
    const START_GAME_BUTTON = document.querySelector('.start-game-button');
    const RESTART_BUTTON = document.querySelector('.restart-button');
    RESTART_BUTTON.addEventListener('click', () => {
        document.body.innerHTML = '';
        setIsGameOver(false);
        START_GAME_BUTTON.disabled = false;
        setTimerInterval(0);
        initApp();
    })
}

export const startGameSession = () => {
    const START_GAME_BUTTON = document.querySelector('.start-game-button');
    START_GAME_BUTTON.addEventListener('click', () => {
        START_GAME_BUTTON.disabled = true;
        startTimer();
        handleBarClick();
        handleRedFlag();
        restartGame();
    })
}