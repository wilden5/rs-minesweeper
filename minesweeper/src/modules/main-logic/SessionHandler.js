import {setIsGameOver} from "./GameStateHandler";
import {setTimerInterval, startTimer} from "../features/SpotwatchHandler";
import {handleBarClick} from "./ClickHandler";
import {handleRedFlag} from "./FlagHandler";
import {initApp} from "../../index";
import {setMines} from "./MinesHandler";
import {playGameStartSound} from "../features/soundHandler";

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

export const restartMock = () => {
    const RESTART_BUTTON = document.querySelector('.restart-button');
    RESTART_BUTTON.addEventListener('click', () => {
        location.reload();
    })
}

export const startGameSession = () => {
    const START_GAME_BUTTON = document.querySelector('.start-game-button');
    START_GAME_BUTTON.addEventListener('click', () => {
        START_GAME_BUTTON.disabled = true;
        playGameStartSound();
        //setMines();
        startTimer();
        handleBarClick();
        handleRedFlag();
        //restartGame();
        restartMock();
    })
}