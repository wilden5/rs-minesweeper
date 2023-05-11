const gameBoard = [];
const mines = [];
let barsClicked = 0;
let isGameOver = false;

const GAME_DIFFICULTIES = {
    easy: {
        rows: 10,
        columns: 10,
        bombs: 10,
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

        const GAME_BOARD_THEME_BUTTON = document.createElement('button');
        const TOTAL_BOMBS_ON_GAME_BOARD = document.createElement('span');
        const NUMBER_OF_CLICKS = document.createElement('span');
        const GAME_DURATION = document.createElement('span');
        const GAME_RESTART_BUTTON = document.createElement('button');
        const NUMBER_OF_FLAGS_REMAINED = document.createElement('span');
    }
    appendGameBoardElement();
    appendGameInformation();
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

    BOARD_BARS.forEach((bar) => {
        bar.addEventListener('contextmenu', (event) => {
            event.preventDefault();

            if (bar.innerHTML === '') {
                bar.innerHTML = RED_FLAG;
                bar.classList.toggle('red-flag');
            } else {
                bar.innerHTML = '';
                bar.classList.toggle('red-flag');
            }
        })
    })
    // todo: Implement count flags logic; validation for max flags
}

(function initGame() {
    createBasicLayout();
    createGameBoard(GAME_DIFFICULTIES.easy.rows,GAME_DIFFICULTIES.easy.columns);
    handleRedFlag();
}());
