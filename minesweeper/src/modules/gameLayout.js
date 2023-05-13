import GAME_DIFFICULTIES from '../data/difficulties.json';

const gameBoard = [];

export const createBasicLayout = () => {
    const appendGameBoardElement = () => {
        const GAME_BOARD_ELEMENT = document.createElement('div');
        GAME_BOARD_ELEMENT.classList.add('game-board');
        document.body.appendChild(GAME_BOARD_ELEMENT);
    }

    const appendGameInformation = () => {
        const GAME_INFORMATION = document.createElement('div');
        GAME_INFORMATION.classList.add('game-information')

        const NUMBER_OF_FLAGS_TEXT = document.createElement('div');
        NUMBER_OF_FLAGS_TEXT.classList.add('red-flags-information');
        NUMBER_OF_FLAGS_TEXT.innerText = 'Number of 🚩 used: ';

        const NUMBER_OF_FLAGS = document.createElement('span');
        NUMBER_OF_FLAGS.classList.add('red-flags-number');
        NUMBER_OF_FLAGS.innerText = '0';

        const TOTAL_BOMBS_ON_GAME_BOARD = document.createElement('div');
        TOTAL_BOMBS_ON_GAME_BOARD.classList.add('bombs-number');
        TOTAL_BOMBS_ON_GAME_BOARD.innerText = 'Number of 💣 remaining: ';

        const BOMBS_REMAINED = document.createElement('span');
        BOMBS_REMAINED.classList.add('bombs-remained');
        BOMBS_REMAINED.innerText = GAME_DIFFICULTIES.easy.bombs;

        const NUMBER_OF_CLICKS_TEXT = document.createElement('div');
        NUMBER_OF_CLICKS_TEXT.classList.add('clicks-number-information');
        NUMBER_OF_CLICKS_TEXT.innerText = 'Number of clicks: ';

        const NUMBER_OF_CLICKS = document.createElement('span');
        NUMBER_OF_CLICKS.classList.add('clicks-number');
        NUMBER_OF_CLICKS.innerText = '0';

        const GAME_RESTART_BUTTON = document.createElement('button');
        GAME_RESTART_BUTTON.classList.add('restart-button');
        GAME_RESTART_BUTTON.innerText = 'Restart Game';

        const GAME_DURATION = document.createElement('div');
        GAME_DURATION.classList.add('game-duration');
        GAME_DURATION.innerText = 'Duration of the game: ';

        const GAME_TIMER = document.createElement('span');
        GAME_TIMER.classList.add('timer-seconds');
        GAME_TIMER.innerText = '0';

        const START_GAME_BUTTON = document.createElement('button');
        START_GAME_BUTTON.classList.add('start-game-button');
        START_GAME_BUTTON.innerText = 'START A NEW GAME';



        const GAME_BOARD_THEME_BUTTON = document.createElement('button');

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
    }

    appendGameInformation();
    appendGameBoardElement();
}

export const createGameBoard = (setRows, setColumns) => {
    const GAME_BOARD = document.querySelector('.game-board');
    for (let row = 0; row < setRows; row++) {
        let boardRow = [];
        for (let column = 0; column < setColumns; column++) {
            let bar = document.createElement('div');
            bar.classList.add(`${row.toString()}-${column.toString()}`, 'bar');
            GAME_BOARD.appendChild(bar);
            boardRow.push(bar);
        }
        gameBoard.push(boardRow);
    }
    console.log(gameBoard);
}