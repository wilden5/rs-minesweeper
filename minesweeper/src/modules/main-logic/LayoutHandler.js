import GAME_DIFFICULTIES from '../../data/difficulties.json';

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
    const BOMBS_REMAINED = createElement('span', ['bombs-remained'], GAME_DIFFICULTIES.easy.bombs.toString());
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

    GAME_WRAPPER.appendChild(THEME_WRAPPER);
    GAME_WRAPPER.appendChild(GAME_INFORMATION);
    GAME_WRAPPER.appendChild(GAME_BOARD_ELEMENT);

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