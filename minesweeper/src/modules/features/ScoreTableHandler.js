import {getIsGameOver} from "../main-logic/SessionHandler";
import {addScoreToLayout} from "../main-logic/LayoutHandler";

let winScores = {};

export const getWinScores = () => {
    return winScores;
}

export const addScore = (result) => {
    let score ='';
    if (getIsGameOver() === true) {
        if(result === 'win') {
            score = `WIN | Clicks: ${document.querySelector('.clicks-number').innerText} - Duration: ${document.querySelector('.timer-seconds').innerText}s.`;
        } else {
            score = `LOSS | Clicks: ${document.querySelector('.clicks-number').innerText} - Duration: ${document.querySelector('.timer-seconds').innerText}s.`;
        }
        winScores[`${Object.keys(winScores).length + 1}`] = score;
    }
    addScoreToLayout();
}