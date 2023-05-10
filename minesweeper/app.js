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

const appendGameBoardElement = () => {
    const GAME_BOARD_ELEMENT = document.createElement('div');
    GAME_BOARD_ELEMENT.classList.add('game-board');
    document.body.appendChild(GAME_BOARD_ELEMENT);
}

const createGameBoard = (setRows, setColumns) => {
    const GAME_BOARD = document.querySelector('.game-board');
    for (let row = 0; row < setRows; row++) {
        for (let column = 0; column < setColumns; column++) {
            let bar = document.createElement('div');
            bar.classList.add(`${row.toString()}-${column.toString()}`);
            GAME_BOARD.appendChild(bar);
        }
    }
}

const initGame = () => {
    appendGameBoardElement();
    createGameBoard(GAME_DIFFICULTIES.easy.rows,GAME_DIFFICULTIES.easy.columns);
}

initGame();