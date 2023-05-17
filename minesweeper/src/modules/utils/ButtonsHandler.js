import {getIsGameOver, setIsGameOver} from "../main-logic/SessionHandler";
import {playGameStartSound} from "../features/SoundHandler";
import {initStopwatch} from "../features/StopwatchHandler";
import {initClickOnBar} from "../main-logic/ClickHandler";
import {initRedFlag} from "../main-logic/FlagHandler";
import {clearLocalStorage, loadGameState} from "../features/StorageHandler";
import {setClickedBarsCounter} from "../main-logic/MinesHandler";
import {initApp} from "../../index";
import {changeTheme, getCurrentTheme, initThemeChanger, setCurrentTheme} from "../features/ThemeHandler";

export const checkButtonsState = () => {
    const START_GAME_BUTTON = document.querySelector('.start-game-button');
    const CONTINUE_YOUR_SESSION_BUTTON = document.querySelector('.continue-button');
    const GAME_INFORMATION_WRAPPER = document.querySelector('.game-information-wrapper');
    const GAME_BOARD_ELEMENT = document.querySelector('.game-board');
    const DARK_THEME = document.querySelector('.dark-theme');
    const LIGHT_THEME = document.querySelector('.light-theme');

    if (localStorage.getItem('minesweeperGameState') === null) {
        CONTINUE_YOUR_SESSION_BUTTON.disabled = true;
    }

    if(getIsGameOver() === true) {
        START_GAME_BUTTON.disabled = true;
        CONTINUE_YOUR_SESSION_BUTTON.disabled = true;
    }

    if (localStorage.getItem('minesweeperGameState')) {
        GAME_INFORMATION_WRAPPER.classList.add('pause');
        GAME_BOARD_ELEMENT.classList.add('pause');
        DARK_THEME.classList.add('pause');
        LIGHT_THEME.classList.add('pause');
        START_GAME_BUTTON.disabled = true;

        if (JSON.parse(localStorage.getItem('minesweeperGameState')).isGameOver === true) {
            CONTINUE_YOUR_SESSION_BUTTON.disabled = true;
        }
    }
}

export const continueYourGameButton = () => {
    const CONTINUE_YOUR_SESSION_BUTTON = document.querySelector('.continue-button');
    const GAME_INFORMATION_WRAPPER = document.querySelector('.game-information-wrapper');
    const GAME_BOARD_ELEMENT = document.querySelector('.game-board');
    const DARK_THEME = document.querySelector('.dark-theme');
    const LIGHT_THEME = document.querySelector('.light-theme');

    CONTINUE_YOUR_SESSION_BUTTON.addEventListener('click', () => {
        GAME_INFORMATION_WRAPPER.classList.remove('pause');
        GAME_BOARD_ELEMENT.classList.remove('pause');
        DARK_THEME.classList.remove('pause');
        LIGHT_THEME.classList.remove('pause');
        loadGameState();
        CONTINUE_YOUR_SESSION_BUTTON.disabled = true;
        playGameStartSound();
        initStopwatch();
        initClickOnBar();
        initRedFlag();
        initThemeChanger();
    })
}

export const restartCurrentGameButton = () => {
    const RESTART_BUTTON = document.querySelector('.restart-button');
    RESTART_BUTTON.addEventListener('click', () => {
        clearLocalStorage();
        setIsGameOver(false);
        document.body.innerHTML = '';
        setClickedBarsCounter(0);
        initApp();
    })
}

export const darkThemeButton = () => {
    const DARK_THEME = document.querySelector('.dark-theme');
    DARK_THEME.addEventListener('click', () => {
        setCurrentTheme('dark');
        changeTheme(getCurrentTheme());
    })
}

export const lightThemeButton = () => {
    const LIGHT_THEME = document.querySelector('.light-theme');

    LIGHT_THEME.addEventListener('click', () => {
        setCurrentTheme('light');
        changeTheme(getCurrentTheme());
    })
}

export const initButtons = () => {
    checkButtonsState();
    continueYourGameButton();
    restartCurrentGameButton();
    darkThemeButton();
    lightThemeButton();
}