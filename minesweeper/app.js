const gameBoard = [];
const mines = [];
let barsClicked = 0;
let isGameOver = false;

const GAME_DIFFICULTIES = {
    easy: {
        rows: 10,
        columns: 10,
        bombs: 10,
        flags: 10,
    }
}

const createBasicLayout = () => {
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
        NUMBER_OF_FLAGS_TEXT.innerText = 'Number of 🚩 remained:';

        const NUMBER_OF_FLAGS = document.createElement('span');
        NUMBER_OF_FLAGS.classList.add('red-flags-number');
        NUMBER_OF_FLAGS.innerText = GAME_DIFFICULTIES.easy.flags;

        const GAME_BOARD_THEME_BUTTON = document.createElement('button');
        const TOTAL_BOMBS_ON_GAME_BOARD = document.createElement('span');
        const NUMBER_OF_CLICKS = document.createElement('span');
        const GAME_DURATION = document.createElement('span');
        const GAME_RESTART_BUTTON = document.createElement('button');

        GAME_INFORMATION.appendChild(NUMBER_OF_FLAGS_TEXT);
        NUMBER_OF_FLAGS_TEXT.appendChild(NUMBER_OF_FLAGS);
        document.body.appendChild(GAME_INFORMATION);
    }
    appendGameInformation();
    appendGameBoardElement();
}

const createGameBoard = (setRows, setColumns) => {
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

const handleRedFlag = () => {
    const RED_FLAG = '🚩';
    const BOARD_BARS = document.querySelectorAll('.bar');
    const RED_FLAGS_NUMBER = document.querySelector('.red-flags-number');

    BOARD_BARS.forEach((bar) => {
            bar.addEventListener('contextmenu', (event) => {
                event.preventDefault();
                if (bar.innerHTML === '') {
                    if (RED_FLAGS_NUMBER.innerText > 0) {
                        RED_FLAGS_NUMBER.innerText = parseInt(RED_FLAGS_NUMBER.innerText) - 1;
                        bar.innerHTML = RED_FLAG;
                        bar.classList.toggle('red-flag');
                    }
                } else {
                    RED_FLAGS_NUMBER.innerText = parseInt(RED_FLAGS_NUMBER.innerText) + 1;
                    bar.innerHTML = '';
                    bar.classList.toggle('red-flag');
                }
            });
    });
}

(function initGame() {
    createBasicLayout();
    createGameBoard(GAME_DIFFICULTIES.easy.rows,GAME_DIFFICULTIES.easy.columns);
    handleRedFlag();
}());
