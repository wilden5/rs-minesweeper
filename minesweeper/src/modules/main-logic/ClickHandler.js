import {stopStopwatch} from "../features/StopwatchHandler";
import {getIsGameOver, setIsGameOver} from "./SessionHandler";
import {checkMines, getMines, showMines} from "./MinesHandler";
import {playGameOverSound, playOpenBarSound} from "../features/SoundHandler";

let clicksCounter;

export const setClickCounter = (plusValue) => {
    clicksCounter.innerText = parseInt(clicksCounter.innerText) + plusValue;
}

export const getClickCounter = () => {
    return parseInt(clicksCounter.innerText);
}

export const handleBarClick = () => {
    const BOARD_BARS = document.querySelectorAll('.bar');
    clicksCounter = document.querySelector('.clicks-number');
    BOARD_BARS.forEach((bar) => {
        bar.addEventListener('click', () => {
            if (bar.classList.contains('red-flag')) {
                return;
            }
            if (getIsGameOver() === false && !bar.classList.contains('bar-clicked')) {
                setClickCounter(1);
            }
            console.log(bar.classList);
            if (getMines().includes(bar.classList[0])) {
                if (getIsGameOver() !== true) {
                    setIsGameOver(true);
                    showMines();
                    stopStopwatch();
                    playGameOverSound();
                    alert('BRO YOU\'VE JUST CLICKED ON THE BOMB. GAME OVER. TRY AGAIN.');
                }
            } else {
                if (getIsGameOver() !== true) {
                    if(!bar.classList.contains('bar-clicked')) {
                        playOpenBarSound();
                    }
                    let coordinates = bar.classList[0].split('-');
                    let barRowCoordinates = parseInt(coordinates[0]);
                    let barColumnCoordinates = parseInt(coordinates[1]);
                    checkMines(barRowCoordinates, barColumnCoordinates);
                }
            }
        })
    })
}