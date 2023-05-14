import {stopTimer} from "../features/SpotwatchHandler";
import {getIsGameOver, setIsGameOver} from "./GameStateHandler";
import {getMines, showMines} from "./MinesHandler";

let clicksCounter;

export const setClickCounter = (value) => {
    clicksCounter.innerText = parseInt(clicksCounter.innerText) + value;
}

export const handleBarClick = () => {
    const BOARD_BARS = document.querySelectorAll('.bar');
    clicksCounter = document.querySelector('.clicks-number');
    BOARD_BARS.forEach((bar) => {
        bar.addEventListener('click', () => {
            if (bar.classList.contains('red-flag')) {
                return;
            }
            if (getIsGameOver() === false) {
                setClickCounter(1);
            }
            console.log(bar.classList);
            if (getMines().includes(bar.classList[0])) {
                if (getIsGameOver() !== true) {
                    alert('BRO YOU\'VE JUST CLICKED ON THE BOMB. GAME OVER. TRY AGAIN.');
                    setIsGameOver(true);
                    showMines();
                    stopTimer();
                }
            }
        })
    })
}