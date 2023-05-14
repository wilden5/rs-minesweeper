let timerInterval;

export const startTimer = () => {
    const GAME_TIMER = document.querySelector('.timer-seconds');
    let startTime = Date.now();
    let elapsedTime = 0;

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