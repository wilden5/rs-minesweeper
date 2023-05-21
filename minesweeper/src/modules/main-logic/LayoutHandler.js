import GAME_DIFFICULTIES from '../../data/difficulties.json';
import {getUserScores} from "../features/ScoreTableHandler";
import {getNumberOfUserMines} from "../features/GameSettingsHandler";

let gameBoard = [];

export const getGameBoard = () => {
    return gameBoard;
}

const createElement = (type, classes = [], text = '') => {
    const element = document.createElement(type);
    classes.forEach(className => element.classList.add(className));
    if (text) {
        element.innerText = text;
    }
    return element;
}

export const createBasicLayout = () => {
    const GAME_BOARD_ELEMENT = createElement('div', ['game-board']);
    const NUMBER_OF_FLAGS_TEXT = createElement('div', ['red-flags-information'], 'Number of 🚩 used: ');
    const NUMBER_OF_FLAGS = createElement('span', ['red-flags-number'], '0');
    const TOTAL_BOMBS_ON_GAME_BOARD = createElement('div', ['bombs-number'], 'Number of 💣 remaining: ');
    const BOMBS_REMAINED = createElement('span', ['bombs-remained'], getNumberOfUserMines());
    const NUMBER_OF_CLICKS_TEXT = createElement('div', ['clicks-number-information'], 'Number of clicks: ');
    const NUMBER_OF_CLICKS = createElement('span', ['clicks-number'], '0');
    const GAME_RESTART_BUTTON = createElement('button', ['restart-button', 'button'], 'RESTART CURRENT GAME');
    const GAME_DURATION = createElement('div', ['game-duration'], 'Duration of the game: ');
    const GAME_TIMER = createElement('span', ['timer-seconds'], '0');
    const START_GAME_BUTTON = createElement('button', ['start-game-button', 'button'], 'START A NEW GAME');
    const GAME_INFORMATION = createElement('div', ['game-information']);
    const CONTINUE_GAME_BUTTON = createElement('button', ['continue-button', 'button'], 'CONTINUE YOUR GAME');
    const BUTTONS_WRAPPER = createElement('div', ['buttons-wrapper']);
    const GAME_INFORMATION_WRAPPER = createElement('div', ['game-information-wrapper']);
    const GAME_OBJECTS = createElement('div', ['game-objects']);
    const SESSION_INFORMATION = createElement('div', ['session-information']);
    const GAME_WRAPPER = createElement('div', ['game-wrapper']);
    const THEME_WRAPPER = createElement('div', ['theme-wrapper']);
    const DARK_THEME_BUTTON = createElement('button', ['dark-theme', 'theme-button'], 'DARK THEME');
    const LIGHT_THEME_BUTTON = createElement('button', ['light-theme', 'theme-button'], 'LIGHT THEME');
    const SCORE_TABLE_WRAPPER = createElement('div', ['score-table']);
    const SCORE_TABLE_HEADER = createElement('h4', ['score-table-header'], 'Recent game results: ');
    const SCORE_TABLE_DESCRIPTION = createElement('span', ['score-table-description'], '(Real-time automatic updates of the latest game results)');
    const WIN_SCORES = createElement('div', ['win-scores-wrapper']);
    const MINES_SETTINGS_WRAPPER = createElement('div',['mines-settings-wrapper']);
    const MINES_SETTINGS_BUTTON = createElement('button', ['mines-settings-button'], 'SAVE');
    const FIELD_BUTTONS_WRAPPER = createElement('div', ['field-buttons-wrapper']);
    const EASY_FIELD_BUTTON = createElement('button', ['easy-field-button', 'field-button'], '10x10');
    const MEDIUM_FIELD_BUTTON = createElement('button', ['medium-field-button', 'field-button'], '15x15');
    const HARD_FIELD_BUTTON = createElement('button', ['hard-field-button', 'field-button'], '25x25');

    const createMinesSettingsInput = () => {
        const MINES_SETTINGS_INPUT = createElement('input', ['mines-settings-input']);
        MINES_SETTINGS_INPUT.setAttribute('type', 'number');
        MINES_SETTINGS_INPUT.setAttribute('placeholder', 'Enter the number of mines 10 - 99');
        return MINES_SETTINGS_INPUT;
    }

    MINES_SETTINGS_WRAPPER.appendChild(createMinesSettingsInput());
    MINES_SETTINGS_WRAPPER.appendChild(MINES_SETTINGS_BUTTON);

    FIELD_BUTTONS_WRAPPER.appendChild(EASY_FIELD_BUTTON);
    FIELD_BUTTONS_WRAPPER.appendChild(MEDIUM_FIELD_BUTTON);
    FIELD_BUTTONS_WRAPPER.appendChild(HARD_FIELD_BUTTON);

    THEME_WRAPPER.appendChild(DARK_THEME_BUTTON);
    THEME_WRAPPER.appendChild(LIGHT_THEME_BUTTON);
    GAME_OBJECTS.appendChild(NUMBER_OF_FLAGS_TEXT);
    GAME_OBJECTS.appendChild(TOTAL_BOMBS_ON_GAME_BOARD);
    SESSION_INFORMATION.appendChild(NUMBER_OF_CLICKS_TEXT);
    SESSION_INFORMATION.appendChild(GAME_DURATION);
    GAME_INFORMATION_WRAPPER.appendChild(GAME_OBJECTS);
    GAME_INFORMATION_WRAPPER.appendChild(SESSION_INFORMATION);
    GAME_INFORMATION.appendChild(GAME_INFORMATION_WRAPPER);
    GAME_INFORMATION.appendChild(BUTTONS_WRAPPER);
    BUTTONS_WRAPPER.appendChild(GAME_RESTART_BUTTON);
    BUTTONS_WRAPPER.appendChild(START_GAME_BUTTON);
    BUTTONS_WRAPPER.appendChild(CONTINUE_GAME_BUTTON);

    TOTAL_BOMBS_ON_GAME_BOARD.appendChild(BOMBS_REMAINED);
    NUMBER_OF_CLICKS_TEXT.appendChild(NUMBER_OF_CLICKS);
    NUMBER_OF_FLAGS_TEXT.appendChild(NUMBER_OF_FLAGS);
    GAME_DURATION.appendChild(GAME_TIMER);
    SCORE_TABLE_WRAPPER.appendChild(SCORE_TABLE_HEADER);
    SCORE_TABLE_WRAPPER.appendChild(SCORE_TABLE_DESCRIPTION);
    SCORE_TABLE_WRAPPER.appendChild(WIN_SCORES);
    GAME_INFORMATION.appendChild(MINES_SETTINGS_WRAPPER);
    GAME_WRAPPER.appendChild(THEME_WRAPPER);
    GAME_WRAPPER.appendChild(FIELD_BUTTONS_WRAPPER);
    GAME_WRAPPER.appendChild(GAME_INFORMATION);
    GAME_WRAPPER.appendChild(GAME_BOARD_ELEMENT);
    GAME_WRAPPER.appendChild(SCORE_TABLE_WRAPPER);

    document.body.appendChild(GAME_WRAPPER);
}

export const createGameBoard = (setRows, setColumns) => {
    const GAME_BOARD = document.querySelector('.game-board');
    gameBoard = [];
    for (let row = 0; row < setRows; row++) {
        let boardRow = [];
        for (let column = 0; column < setColumns; column++) {
            let bar = createElement('div', [`${row.toString()}-${column.toString()}`, 'bar'])
            GAME_BOARD.appendChild(bar);
            boardRow.push(bar);
        }
        gameBoard.push(boardRow);
    }
}

export const initGameLayout = () => {
    createBasicLayout();
    createGameBoard(GAME_DIFFICULTIES.easy.rows, GAME_DIFFICULTIES.easy.columns);
};

export const addScoreToLayout = () => {
    const WIN_SCORES = document.querySelector('.win-scores-wrapper');
    const scores = getUserScores();
    const lastScores = Object.keys(scores).slice(-10);
    WIN_SCORES.innerHTML = '';

    for (const property of lastScores) {
        let element = createElement('div', [`win-score-${property}`, 'win-score'], `GAME ${property}: ${getUserScores()[property]}`);
        WIN_SCORES.appendChild(element);
    }
}