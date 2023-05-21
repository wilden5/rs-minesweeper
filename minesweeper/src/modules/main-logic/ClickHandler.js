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
                        document.querySelector('.restart-button').disabled = false;
                        alert('BRO YOU\'VE JUST CLICKED ON THE BOMB. GAME OVER. TRY AGAIN.');
                    }
                }
            } else {
                if (getIsGameOver() !== true) {
                    if(!bar.classList.contains('bar-clicked')) {
                        playOpenBarSound();
                    }
                    checkNearestBars(bar);
                    removeRedFlagForOpenedBars();
                }
            }
        })
    })
}

const removeRedFlagForOpenedBars = () => {
    const BOARD_BARS = document.querySelectorAll('.bar');
    const RED_FLAGS_NUMBER = document.querySelector('.red-flags-number');
    const BOMBS_REMAINED = document.querySelector('.bombs-remained');
    let counter = 0;
    BOARD_BARS.forEach((bar) => {
        if (bar.classList.contains('bar-clicked') && bar.classList.contains('red-flag')) {
            bar.classList.remove('red-flag');
            bar.innerText = '';
            counter++;
        }

        if (bar.classList.contains('nb')) {
            bar.classList.remove('red-flag');
            let a = '';
            let barClassList = bar.getAttribute('class').split(' ');
            barClassList.forEach((item) => {
                if (item.includes('nearby-bombs')) {
                    a = item.slice(-1);
                }
            })
            bar.innerText = a;
        }
    })
    RED_FLAGS_NUMBER.innerText = parseInt(RED_FLAGS_NUMBER.innerText) - counter;
    BOMBS_REMAINED.innerText = parseInt(BOMBS_REMAINED.innerText) + counter;
}