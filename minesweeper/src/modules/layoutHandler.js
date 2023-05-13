import GAME_DIFFICULTIES from '../data/difficulties.json';

const gameBoard = [];

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
    const GAME_RESTART_BUTTON = createElement('button', ['restart-button'], 'Restart Game');
    const GAME_DURATION = createElement('div', ['game-duration'], 'Duration of the game: ');
    const GAME_TIMER = createElement('span', ['timer-seconds'], '0');
    const START_GAME_BUTTON = createElement('button', ['start-game-button'], 'START A NEW GAME');
    const GAME_INFORMATION = createElement('div', ['game-information']);

    GAME_INFORMATION.appendChild(NUMBER_OF_FLAGS_TEXT);
    GAME_INFORMATION.appendChild(TOTAL_BOMBS_ON_GAME_BOARD);
    GAME_INFORMATION.appendChild(NUMBER_OF_CLICKS_TEXT);
    GAME_INFORMATION.appendChild(GAME_DURATION);
    GAME_INFORMATION.appendChild(GAME_RESTART_BUTTON);
    GAME_INFORMATION.appendChild(START_GAME_BUTTON);
    TOTAL_BOMBS_ON_GAME_BOARD.appendChild(BOMBS_REMAINED);
    NUMBER_OF_CLICKS_TEXT.appendChild(NUMBER_OF_CLICKS);
    NUMBER_OF_FLAGS_TEXT.appendChild(NUMBER_OF_FLAGS);
    GAME_DURATION.appendChild(GAME_TIMER);

    document.body.appendChild(GAME_INFORMATION);
    document.body.appendChild(GAME_BOARD_ELEMENT);
}

export const createGameBoard = (setRows, setColumns) => {
    const GAME_BOARD = document.querySelector('.game-board');
    for (let row = 0; row < setRows; row++) {
        let boardRow = [];
        for (let column = 0; column < setColumns; column++) {
            let bar = createElement('div', [`${row.toString()}-${column.toString()}`, 'bar'])
            GAME_BOARD.appendChild(bar);
            boardRow.push(bar);
        }
        gameBoard.push(boardRow);
    }
    console.log(gameBoard);
}

export const initGameLayout = () => {
    createBasicLayout();
    createGameBoard(GAME_DIFFICULTIES.easy.rows, GAME_DIFFICULTIES.easy.columns);
};