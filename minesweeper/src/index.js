import './index.html';
import './style/_style.scss';

import GAME_DIFFICULTIES from './data/difficulties.json';
import {startTimer, stopTimer, setTimerInterval} from "./modules/gameTimer";
import {createBasicLayout, createGameBoard} from "./modules/gameLayout";

const mines = [];
let isGameOver = false;

mines.push('1-1');
mines.push('2-2');
mines.push('3-3');
mines.push('4-4');
mines.push('5-5');

// todo: 4. Increase counter when context-click?

const handleBarClick = () => {
    const BOARD_BARS = document.querySelectorAll('.bar');
    const clicksCounter = document.querySelector('.clicks-number');

    BOARD_BARS.forEach((bar) => {
        bar.addEventListener('click', () => {
            if (bar.classList.contains('red-flag')) {
                return;
            }
            if (isGameOver === false) {
                clicksCounter.innerText = parseInt(clicksCounter.innerText) + 1;
            }
            console.log(bar.classList);
            if (mines.includes(bar.classList[0])) {
                if (isGameOver !== true) {
                    alert('BRO YOU\'VE JUST CLICKED ON THE BOMB. GAME OVER. TRY AGAIN.');
                    isGameOver = true;
                    showMines();
                    stopTimer();
                }
            }
        })
    })
}

const showMines = () => {
    const BOARD_BARS = document.querySelectorAll('.bar');
    BOARD_BARS.forEach((bar) => {
        if (mines.includes(bar.classList[0])) {
            if(bar.classList.contains('red-flag')) {
                bar.classList.add('guessed-bomb');
                bar.innerText = '💣🚩';
            } else {
                bar.innerText = '💣';
                bar.classList.add('bomb');
            }
        }
    })
}

const restartGame = () => {
    const START_GAME_BUTTON = document.querySelector('.start-game-button');
    const RESTART_BUTTON = document.querySelector('.restart-button');
    RESTART_BUTTON.addEventListener('click', () => {
        document.body.innerHTML = '';
        isGameOver = false;
        START_GAME_BUTTON.disabled = false;
        setTimerInterval(0);
        createLayout();
        startGameSession();
    })
}

const handleRedFlag = () => {
    const RED_FLAG = '🚩';
    const BOARD_BARS = document.querySelectorAll('.bar');
    const RED_FLAGS_NUMBER = document.querySelector('.red-flags-number');
    const BOMBS_REMAINED = document.querySelector('.bombs-remained');

    BOARD_BARS.forEach((bar) => {
        bar.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            if(isGameOver === false) {
                if (bar.innerHTML === '') {
                    if (RED_FLAGS_NUMBER.innerText < GAME_DIFFICULTIES.easy.bombs) {
                        RED_FLAGS_NUMBER.innerText = parseInt(RED_FLAGS_NUMBER.innerText) + 1;
                        BOMBS_REMAINED.innerText = parseInt(BOMBS_REMAINED.innerText) - 1;
                        bar.innerHTML = RED_FLAG;
                        bar.classList.toggle('red-flag');
                    }
                } else {
                    RED_FLAGS_NUMBER.innerText = parseInt(RED_FLAGS_NUMBER.innerText) - 1;
                    BOMBS_REMAINED.innerText = parseInt(BOMBS_REMAINED.innerText) + 1;
                    bar.innerHTML = '';
                    bar.classList.toggle('red-flag');
                }
            }
        });
    });
}

const createLayout = () => {
    createBasicLayout();
    createGameBoard(GAME_DIFFICULTIES.easy.rows, GAME_DIFFICULTIES.easy.columns);
};

const startGameSession = () => {
    const START_GAME_BUTTON = document.querySelector('.start-game-button');
    START_GAME_BUTTON.addEventListener('click', () => {
        START_GAME_BUTTON.disabled = true;
        startTimer();
        handleBarClick();
        handleRedFlag();
        restartGame();
    })
}

const init = () => {
    createLayout();
    startGameSession();
    restartGame();
}

init();