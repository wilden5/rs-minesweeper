import {getGameBoard} from "./LayoutHandler";
import {setIsGameOver} from "./SessionHandler";
import {getStopwatchValue, stopStopwatch} from "../features/StopwatchHandler";
import {getClickCounter} from "./ClickHandler";
import {playGameWinSound} from "../features/SoundHandler";
import {addScore} from "../features/ScoreTableHandler";
import {getNumberOfUserMines, getUserBoardSizeColumns, getUserBoardSizeRows} from "../features/GameSettingsHandler";

let gameBoardMinesLocation = [];
let clickedBarsCounter = 0;

export const clearGameBoardMinesLocation = () => {
    gameBoardMinesLocation = [];
}

export const getClickedBarsCounter = () => {
    return clickedBarsCounter;
}

export const setClickedBarsCounter = (value) => {
    clickedBarsCounter = value;
}

export const swapMine = (mineToSwap) => {
    const index = gameBoardMinesLocation.indexOf(mineToSwap);
    if (index !== -1) {
        gameBoardMinesLocation.splice(index, 1);
    }
    generateRandomMines();
}

export const generateRandomMines = () => {
    let minesNumber = gameBoardMinesLocation.length + 1;
    if (gameBoardMinesLocation.length === (minesNumber - 1)) {
        let minesNumber2 = gameBoardMinesLocation.length;
        while (minesNumber2 !== parseInt(getNumberOfUserMines())) {
            let r = Math.floor(Math.random() * getUserBoardSizeRows());
            let c = Math.floor(Math.random() * getUserBoardSizeColumns());
            let bombId = `${r.toString()}-${c.toString()}`;

            if (!gameBoardMinesLocation.includes(bombId)) {
                gameBoardMinesLocation.push(bombId);
                minesNumber2 += 1;
            }
        }
    } else {
        while (minesNumber > 0) {
            let r = Math.floor(Math.random() * getUserBoardSizeRows());
            let c = Math.floor(Math.random() * getUserBoardSizeColumns());
            let bombId = `${r.toString()}-${c.toString()}`;

            if (!gameBoardMinesLocation.includes(bombId)) {
                gameBoardMinesLocation.push(bombId);
                minesNumber -= 1;
            }
        }
    }
}

export const getGameBoardMinesLocation = () => {
    return gameBoardMinesLocation;
}

export const setGameBoardMinesLocation = (array) => {
    array.forEach((bomb) => {
        gameBoardMinesLocation.push(bomb);
    })
}

export const showMinesLocation = () => {
    const BOARD_BARS = document.querySelectorAll('.bar');
    BOARD_BARS.forEach((bar) => {
        if (gameBoardMinesLocation.includes(bar.classList[0])) {
            if (bar.classList.contains('red-flag')) {
                bar.classList.add('guessed-bomb');
                bar.innerText = '💣';
            } else {
                bar.innerText = '💣';
                bar.classList.add('bomb');
            }
        }
    })
}

export const checkMines = (row, column) => {
    if (row < 0 || row >= getUserBoardSizeRows() ||
        column < 0 || column >= getUserBoardSizeColumns()) {
        return;
    }

    if (getGameBoard()[row][column].classList.contains('bar-clicked')) {
        return;
    }

    getGameBoard()[row][column].classList.add('bar-clicked');
    clickedBarsCounter += 1;

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

    if (clickedBarsCounter === getUserBoardSizeRows() * getUserBoardSizeColumns() - getNumberOfUserMines()) {
        setIsGameOver(true);
        addScore('win');
        showMinesLocation();
        stopStopwatch();
        playGameWinSound();
        alert(`Hooray! You found all mines in ${getStopwatchValue()} seconds and ${getClickCounter()} moves!`);
    }
    console.log(clickedBarsCounter)
}

const checkBar = (row, column) => {
    if (row < 0 || row >= getUserBoardSizeRows() ||
        column < 0 || column >= getUserBoardSizeColumns()) {
        return 0;
    }
    if (gameBoardMinesLocation.includes(`${row.toString()}-${column.toString()}`)) {
        return 1;
    }
    return 0;
}

export const checkNearestBars = (bar) => {
    let coordinates = bar.classList[0].split('-');
    let barRowCoordinates = parseInt(coordinates[0]);
    let barColumnCoordinates = parseInt(coordinates[1]);
    checkMines(barRowCoordinates, barColumnCoordinates);
}