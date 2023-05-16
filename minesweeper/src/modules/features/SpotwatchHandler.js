let timerInterval;
let startTime;
let elapsedTime = 0;

export const startTimer = () => {
    const GAME_TIMER = document.querySelector('.timer-seconds');
    startTime = Date.now() - elapsedTime * 1000;
    timerInterval = setInterval(function() {
        elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        GAME_TIMER.innerText = elapsedTime;
    }, 100);
}

export const stopTimer = () => {
    clearInterval(timerInterval);
}

export const setTimerInterval = (value) => {
    timerInterval = value;
}

export const getTimerInterval = () => {
    return document.querySelector('.timer-seconds').innerText;
}

export const initTimer = () => {
    const storedSessionDuration = JSON.parse(localStorage.getItem('minesweeperGameState'))?.sessionDuration;
    if (storedSessionDuration) {
        elapsedTime = parseInt(storedSessionDuration);
        startTimer();
    } else {
        elapsedTime = 0;
        startTimer();
    }
}