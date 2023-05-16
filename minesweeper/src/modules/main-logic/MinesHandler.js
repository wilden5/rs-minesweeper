import GAME_DIFFICULTIES from "../../data/difficulties.json";
import {getGameBoard} from "./LayoutHandler";
import {setIsGameOver} from "./GameStateHandler";
import {getTimerInterval, stopTimer} from "../features/SpotwatchHandler";
import {getClickCounter} from "./ClickHandler";
import {playGameWinSound} from "../features/SoundHandler";

const mines = [];
let barsClickedCounter = 0;

export const getBarsClickedCounter = () => {
    return barsClickedCounter;
}

export const setBarsClickedCounter = (value) => {
    barsClickedCounter = value;
}


mines.push('1-1');
mines.push('2-2');
mines.push('3-3');
mines.push('4-4');
mines.push('5-5');

export const setMines = () => { // dont forget to use it
    let minesNumber = GAME_DIFFICULTIES.easy.bombs;
    while (minesNumber > 0) {
        let r = Math.floor(Math.random() * GAME_DIFFICULTIES.easy.rows);
        let c = Math.floor(Math.random() * GAME_DIFFICULTIES.easy.columns);
        let bombId = `${r.toString()}-${c.toString()}`;

        if (!mines.includes(bombId)) {
            mines.push(bombId);
            minesNumber -= 1;
        }
    }
    console.log(mines.length);
}

export const getMines = () => {
    return mines;
}

export const showMines = () => {
    const BOARD_BARS = document.querySelectorAll('.bar');
    BOARD_BARS.forEach((bar) => {
        if (mines.includes(bar.classList[0])) {
            if (bar.classList.contains('red-flag')) {
                bar.classList.add('guessed-bomb');
                bar.innerText = '💣🚩';
            } else {
                bar.innerText = '💣';
                bar.classList.add('bomb');
            }
        }
    })
}

export const checkMines = (row, column) => {
    if (row < 0 || row >= GAME_DIFFICULTIES.easy.rows ||
        column < 0 || column >= GAME_DIFFICULTIES.easy.columns) {
        return;
    }

    if (getGameBoard()[row][column].classList.contains('bar-clicked')) {
        return;
    }

    getGameBoard()[row][column].classList.add('bar-clicked');
    barsClickedCounter += 1;
    console.log(barsClickedCounter +'here')

    let minesCounter = 0;

    minesCounter += checkBar(row - 1, column - 1);
    minesCounter += checkBar(row - 1, column);
    minesCounter += checkBar(row - 1, column + 1);

    minesCounter += checkBar(row, column - 1);
    minesCounter += checkBar(row, column + 1);

    minesCounter += checkBar(row + 1, column - 1);
    minesCounter += checkBar(row + 1, column);
    minesCounter += checkBar(row + 1, column + 1);

    if (minesCounter > 0) {
        getGameBoard()[row][column].innerText = minesCounter;
        getGameBoard()[row][column].classList.add(`nearby-bombs${minesCounter.toString()}`, 'nb');
    } else {
        checkMines(row - 1, column - 1);
        checkMines(row - 1, column);
        checkMines(row - 1, column + 1);

        checkMines(row, column - 1);
        checkMines(row, column + 1);

        checkMines(row + 1, column - 1);
        checkMines(row + 1, column);
        checkMines(row + 1, column + 1);
    }

    if (barsClickedCounter === GAME_DIFFICULTIES.easy.rows * GAME_DIFFICULTIES.easy.columns - 5) {
        setIsGameOver(true);
        showMines();
        stopTimer();
        playGameWinSound();
        alert(`Hooray! You found all mines in ${getTimerInterval()} seconds and ${getClickCounter()} moves!`);
    }
    console.log(barsClickedCounter)
}

const checkBar = (row, column) => {
    if (row < 0 || row >= GAME_DIFFICULTIES.easy.rows ||
        column < 0 || column >= GAME_DIFFICULTIES.easy.columns) {
        return 0;
    }
    if (mines.includes(`${row.toString()}-${column.toString()}`)) {
        return 1;
    }
    return 0;
}