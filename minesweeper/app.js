const gameBoard = [];
const mines = [];
let isGameOver = false;

const GAME_DIFFICULTIES = {
    easy: {
        rows: 10,
        columns: 10,
        bombs: 10,
        flags: 10,
    }
}

mines.push('1-1');
mines.push('2-2');
mines.push('3-3');
mines.push('4-4');
mines.push('5-5');

// todo: 1. Restart button; 2. Game duration timer; 3. Webpack?

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
        NUMBER_OF_FLAGS_TEXT.innerText = 'Number of 🚩 remained: ';

        const NUMBER_OF_FLAGS = document.createElement('span');
        NUMBER_OF_FLAGS.classList.add('red-flags-number');
        NUMBER_OF_FLAGS.innerText = GAME_DIFFICULTIES.easy.flags;

        const TOTAL_BOMBS_ON_GAME_BOARD = document.createElement('div');
        TOTAL_BOMBS_ON_GAME_BOARD.classList.add('bombs-number');
        TOTAL_BOMBS_ON_GAME_BOARD.innerText = `Number of 💣 on the board: ${GAME_DIFFICULTIES.easy.bombs}`;

        const NUMBER_OF_CLICKS_TEXT = document.createElement('div');
        NUMBER_OF_CLICKS_TEXT.classList.add('clicks-number-information');
        NUMBER_OF_CLICKS_TEXT.innerText = 'Number of clicks: ';

        const NUMBER_OF_CLICKS = document.createElement('span');
        NUMBER_OF_CLICKS.classList.add('clicks-number');
        NUMBER_OF_CLICKS.innerText = '0';

        const GAME_RESTART_BUTTON = document.createElement('button');
        GAME_RESTART_BUTTON.classList.add('restart-button');
        GAME_RESTART_BUTTON.innerText = 'Restart Game'


        const GAME_BOARD_THEME_BUTTON = document.createElement('button');
        const GAME_DURATION = document.createElement('span');

        GAME_INFORMATION.appendChild(NUMBER_OF_FLAGS_TEXT);
        GAME_INFORMATION.appendChild(TOTAL_BOMBS_ON_GAME_BOARD);
        GAME_INFORMATION.appendChild(NUMBER_OF_CLICKS_TEXT);
        GAME_INFORMATION.appendChild(GAME_RESTART_BUTTON);
        NUMBER_OF_CLICKS_TEXT.appendChild(NUMBER_OF_CLICKS);
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

const handleBarClick = () => {
    const BOARD_BARS = document.querySelectorAll('.bar');
    const clicksCounter = document.querySelector('.clicks-number');

    BOARD_BARS.forEach((bar) => {
        bar.addEventListener('click', () => {
            if (isGameOver === false) {
                clicksCounter.innerText = parseInt(clicksCounter.innerText) + 1;
            }
            console.log(bar.classList);
            if(mines.includes(bar.classList[0])) {
                alert('BRO YOU\'VE JUST CLICKED ON THE BOMB');
                isGameOver = true;
                showMines();
            }
        })
    })
}

const showMines = () => {
    const BOARD_BARS = document.querySelectorAll('.bar');
    BOARD_BARS.forEach((bar) => {
        if (mines.includes(bar.classList[0])) {
            bar.innerText = '💣';
            bar.classList.add('bomb');
        }
    })
}

const restartGame = () => {
    if (isGameOver === true) {

    }
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
    handleBarClick();
    handleRedFlag();
}());