import {getIsGameOver, setIsGameOver} from "../main-logic/SessionHandler";
import {playGameStartSound} from "../features/SoundHandler";
import {initStopwatch} from "../features/StopwatchHandler";
import {initClickOnBar} from "../main-logic/ClickHandler";
import {initRedFlag} from "../main-logic/FlagHandler";
import {clearLocalStorage, loadGameResults, loadGameState} from "../features/StorageHandler";
import {
    clearGameBoardMinesLocation,
    setClickedBarsCounter
} from "../main-logic/MinesHandler";
import {initApp} from "../../index";
import {changeTheme, getCurrentTheme, initThemeChanger, setCurrentTheme} from "../features/ThemeHandler";
import {addScoreToLayout} from "../main-logic/LayoutHandler";
import {setNumberOfUserMines, validateMinesInput} from "../features/GameSettingsHandler";

export const checkButtonsState = () => {
    const START_GAME_BUTTON = document.querySelector('.start-game-button');
    const CONTINUE_YOUR_SESSION_BUTTON = document.querySelector('.continue-button');
    const GAME_INFORMATION_WRAPPER = document.querySelector('.game-information-wrapper');
    const GAME_BOARD_ELEMENT = document.querySelector('.game-board');
    const DARK_THEME = document.querySelector('.dark-theme');
    const LIGHT_THEME = document.querySelector('.light-theme');
    const RESTART_BUTTON = document.querySelector('.restart-button');
    const MINES_SETTINGS_BUTTON = document.querySelector('.mines-settings-button');
    const MINES_SETTINGS_INPUT = document.querySelector('.mines-settings-input');
    const EASY_FIELD_BUTTON = document.querySelector('.easy-field-button');
    const MEDIUM_FIELD_BUTTON = document.querySelector('.medium-field-button');
    const HARD_FIELD_BUTTON = document.querySelector('.hard-field-button');

    if (localStorage.getItem('minesweeperGameState') === null) {
        CONTINUE_YOUR_SESSION_BUTTON.disabled = true;
        RESTART_BUTTON.disabled = true;
    }

    if (getIsGameOver() === true) {
        START_GAME_BUTTON.disabled = true;
        CONTINUE_YOUR_SESSION_BUTTON.disabled = true;
        RESTART_BUTTON.disabled = false;
    }

    if (localStorage.getItem('minesweeperGameState')) {
        GAME_INFORMATION_WRAPPER.classList.add('pause');
        GAME_BOARD_ELEMENT.classList.add('pause');
        DARK_THEME.classList.add('pause');
        LIGHT_THEME.classList.add('pause');
        MINES_SETTINGS_BUTTON.classList.add('pause');
        MINES_SETTINGS_INPUT.classList.add('pause');
        EASY_FIELD_BUTTON.classList.add('pause');
        MEDIUM_FIELD_BUTTON.classList.add('pause');
        HARD_FIELD_BUTTON.classList.add('pause');
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
    const MINES_SETTINGS_BUTTON = document.querySelector('.mines-settings-button');
    const MINES_SETTINGS_INPUT = document.querySelector('.mines-settings-input');
    const EASY_FIELD_BUTTON = document.querySelector('.easy-field-button');
    const MEDIUM_FIELD_BUTTON = document.querySelector('.medium-field-button');
    const HARD_FIELD_BUTTON = document.querySelector('.hard-field-button');

    CONTINUE_YOUR_SESSION_BUTTON.addEventListener('click', () => {
        GAME_INFORMATION_WRAPPER.classList.remove('pause');
        GAME_BOARD_ELEMENT.classList.remove('pause');
        DARK_THEME.classList.remove('pause');
        LIGHT_THEME.classList.remove('pause');
        MINES_SETTINGS_BUTTON.classList.remove('pause');
        MINES_SETTINGS_INPUT.classList.remove('pause');
        EASY_FIELD_BUTTON.classList.remove('pause');
        MEDIUM_FIELD_BUTTON.classList.remove('pause');
        HARD_FIELD_BUTTON.classList.remove('pause');
        loadGameResults();
        addScoreToLayout();
        loadGameState();
        MINES_SETTINGS_BUTTON.disabled = true;
        MINES_SETTINGS_INPUT.disabled = true;
        CONTINUE_YOUR_SESSION_BUTTON.disabled = true;
        EASY_FIELD_BUTTON.disabled = true;
        MEDIUM_FIELD_BUTTON.disabled = true;
        HARD_FIELD_BUTTON.disabled = true;
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
        clearGameBoardMinesLocation();
        document.body.innerHTML = '';
        setClickedBarsCounter(0);
        setNumberOfUserMines(10);
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

export const saveUserBombsButton = () => {
    const MINES_SETTINGS_BUTTON = document.querySelector('.mines-settings-button');

    MINES_SETTINGS_BUTTON.addEventListener('click', (validateMinesInput));
}

export const initButtons = () => {
    checkButtonsState();
    continueYourGameButton();
    restartCurrentGameButton();
    darkThemeButton();
    lightThemeButton();
    saveUserBombsButton();
}