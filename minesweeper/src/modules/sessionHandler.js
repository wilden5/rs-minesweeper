import {setIsGameOver} from "./gameOverHandler";
import {setTimerInterval, startTimer} from "./timerHandler";
import {handleBarClick} from "./clickHandler";
import {handleRedFlag} from "./redFlagHandler";
import {initGameLayout} from "./layoutHandler";

export const restartGame = () => {
    const START_GAME_BUTTON = document.querySelector('.start-game-button');
    const RESTART_BUTTON = document.querySelector('.restart-button');
    RESTART_BUTTON.addEventListener('click', () => {
        document.body.innerHTML = '';
        setIsGameOver(false);
        START_GAME_BUTTON.disabled = false;
        setTimerInterval(0);
        initGameLayout();
        startGameSession();
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