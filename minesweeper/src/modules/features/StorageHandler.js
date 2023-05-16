import {getIsGameOver, setIsGameOver} from "../main-logic/GameStateHandler";
import {getBarsClickedCounter, setBarsClickedCounter} from "../main-logic/MinesHandler";

export const saveGameState = () => {
    const gameState = {
        redFlagsUsed: document.querySelector('.red-flags-number').innerText,
        bombsRemaining: document.querySelector('.bombs-remained').innerText,
        numberOfClicks: document.querySelector('.clicks-number').innerText,
        sessionDuration: document.querySelector('.timer-seconds').innerText,
        isGameOver: getIsGameOver(),
        barClickedCounter: getBarsClickedCounter(),
        barClasses: [],
        barInnerText: []
    };
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar) => {
        gameState.barClasses.push(Array.from(bar.classList));
        gameState.barInnerText.push(Array.from(bar.innerText));
    });
    localStorage.setItem('minesweeperGameState', JSON.stringify(gameState));
}

export const loadGameState = () => {
    const gameState = JSON.parse(localStorage.getItem('minesweeperGameState'));

    if (gameState) {
        document.querySelector('.red-flags-number').innerText = gameState.redFlagsUsed;
        document.querySelector('.bombs-remained').innerText = gameState.bombsRemaining;
        document.querySelector('.clicks-number').innerText = gameState.numberOfClicks;
        document.querySelector('.timer-seconds').innerText = gameState.sessionDuration;
        setIsGameOver(gameState.isGameOver);
        setBarsClickedCounter(gameState.barClickedCounter);

        const bars = document.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            gameState.barClasses[index].forEach((className) => {
                bar.classList.add(className);
            })
            bar.innerText = gameState.barInnerText[index];
        });
    }
}

export const clearLocalStorage = () => {
    localStorage.clear();
}