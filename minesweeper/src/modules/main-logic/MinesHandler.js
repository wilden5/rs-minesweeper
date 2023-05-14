import GAME_DIFFICULTIES from "../../data/difficulties.json";
import {getGameBoard} from "./LayoutHandler";

const mines = [];

mines.push('1-1');
mines.push('2-2');
mines.push('3-3');
mines.push('4-4');
mines.push('5-5');

export const getMines = () => {
    return mines;
}

export const showMines = () => {
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

export const checkMines = (row, column) => {
    if (row < 0 || row >= GAME_DIFFICULTIES.easy.rows ||
        column < 0 || column >= GAME_DIFFICULTIES.easy.columns) {
        return;
    }
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
        getGameBoard()[row][column].classList.add(`nearby-bombs${minesCounter.toString()}`,'nb');
    }
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