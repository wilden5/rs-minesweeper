let timerInterval;
let startTime;
let elapsedTime = 0;

export const startStopwatch = () => {
    const GAME_TIMER = document.querySelector('.timer-seconds');
    startTime = Date.now() - elapsedTime * 1000;
    timerInterval = setInterval(function() {
        elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        GAME_TIMER.innerText = elapsedTime;
    }, 100);
}

export const stopStopwatch = () => {
    clearInterval(timerInterval);
}

export const getStopwatchValue = () => {
    return document.querySelector('.timer-seconds').innerText;
}

export const initStopwatch = () => {
    const storedSessionDuration = JSON.parse(localStorage.getItem('minesweeperGameState'))?.sessionDuration;
    if (storedSessionDuration) {
        elapsedTime = parseInt(storedSessionDuration);
        startStopwatch();
    } else {
        elapsedTime = 0;
        startStopwatch();
    }
}