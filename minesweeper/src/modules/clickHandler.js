import {stopTimer} from "./timerHandler";
import {getIsGameOver, setIsGameOver} from "./gameOverHandler";
import {getMines, showMines} from "./minesHandler";

export const handleBarClick = () => {
    const BOARD_BARS = document.querySelectorAll('.bar');
    const clicksCounter = document.querySelector('.clicks-number');

    BOARD_BARS.forEach((bar) => {
        bar.addEventListener('click', () => {
            if (bar.classList.contains('red-flag')) {
                return;
            }
            if (getIsGameOver() === false) {
                clicksCounter.innerText = parseInt(clicksCounter.innerText) + 1;
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