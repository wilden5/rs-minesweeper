import {getIsGameOver, setIsGameOver} from "../main-logic/SessionHandler";
import {playGameStartSound} from "../features/SoundHandler";
import {initStopwatch} from "../features/StopwatchHandler";
import {initClickOnBar} from "../main-logic/ClickHandler";
import {initRedFlag} from "../main-logic/FlagHandler";
import {clearLocalStorage, loadGameState} from "../features/StorageHandler";
import {setBarsClickedCounter} from "../main-logic/MinesHandler";
import {initApp} from "../../index";

export const checkButtonsState = () => {
    const START_GAME_BUTTON = document.querySelector('.start-game-button');
    const CONTINUE_YOUR_SESSION_BUTTON = document.querySelector('.continue-button');

    if (localStorage.getItem('minesweeperGameState') === null) {
        CONTINUE_YOUR_SESSION_BUTTON.disabled = true;
    }

    if(getIsGameOver() === true) {
        START_GAME_BUTTON.disabled = true;
        CONTINUE_YOUR_SESSION_BUTTON.disabled = true;
    }

    if (localStorage.getItem('minesweeperGameState')) {
        document.querySelector('.game-information-wrapper').classList.add('pause');
        document.querySelector('.game-board').classList.add('pause');
        START_GAME_BUTTON.disabled = true;

        if (JSON.parse(localStorage.getItem('minesweeperGameState')).isGameOver === true) {
            CONTINUE_YOUR_SESSION_BUTTON.disabled = true;
        }
    }
}

export const continueYourGameButton = () => {
    const CONTINUE_YOUR_SESSION_BUTTON = document.querySelector('.continue-button');
    CONTINUE_YOUR_SESSION_BUTTON.addEventListener('click', () => {
        document.querySelector('.game-information-wrapper').classList.remove('pause');
        document.querySelector('.game-board').classList.remove('pause');
        loadGameState();
        CONTINUE_YOUR_SESSION_BUTTON.disabled = true;
        playGameStartSound();
        initStopwatch();
        initClickOnBar();
        initRedFlag();
    })
}

export const restartCurrentGameButton = () => {
    const RESTART_BUTTON = document.querySelector('.restart-button');
    RESTART_BUTTON.addEventListener('click', () => {
        clearLocalStorage();
        setIsGameOver(false);
        document.body.innerHTML = '';
        setBarsClickedCounter(0);
        initApp();
    })
}

export const initButtons = () => {
    checkButtonsState();
    continueYourGameButton();
    restartCurrentGameButton();
}