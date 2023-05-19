import {stopStopwatch} from "../features/StopwatchHandler";
import {getIsGameOver, setIsGameOver} from "./SessionHandler";
import {checkNearestBars, getGameBoardMinesLocation, showMinesLocation, swapMine} from "./MinesHandler";
import {playGameOverSound, playOpenBarSound} from "../features/SoundHandler";
import {addScore} from "../features/ScoreTableHandler";

let clickCounter;

export const increaseClickCounter = (plusValue) => {
    clickCounter.innerText = parseInt(clickCounter.innerText) + plusValue;
}

export const getClickCounter = () => {
    return parseInt(clickCounter.innerText);
}

export const initClickOnBar = () => {
    const BOARD_BARS = document.querySelectorAll('.bar');
    clickCounter = document.querySelector('.clicks-number');
    BOARD_BARS.forEach((bar) => {
        bar.addEventListener('click', () => {
            if (bar.classList.contains('red-flag')) {
                return;
            }
            if (getIsGameOver() === false && !bar.classList.contains('bar-clicked')) {
                increaseClickCounter(1);
            }
            console.log(bar.classList);
            if (getGameBoardMinesLocation().includes(bar.classList[0])) {
                let clickedBars = document.querySelector('.clicks-number').innerText;
                console.log(clickedBars);
                if (parseInt(clickedBars) === 1) {
                    playOpenBarSound();
                    swapMine(bar.classList[0]);
                    checkNearestBars(bar);
                } else {
                    if (getIsGameOver() !== true) {
                        setIsGameOver(true);
                        addScore('loss');
                        showMinesLocation();
                        stopStopwatch();
                        playGameOverSound();
                        alert('BRO YOU\'VE JUST CLICKED ON THE BOMB. GAME OVER. TRY AGAIN.');
                    }
                }
            } else {
                if (getIsGameOver() !== true) {
                    if(!bar.classList.contains('bar-clicked')) {
                        playOpenBarSound();
                    }
                    checkNearestBars(bar);
                }
            }
        })
    })
}