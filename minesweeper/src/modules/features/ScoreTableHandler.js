import {getIsGameOver} from "../main-logic/SessionHandler";
import {addWinScoreToLayout} from "../main-logic/LayoutHandler";

let winScores = {};

export const getWinScores = () => {
    return winScores;
}

export const addWinScore = () => {
    if (getIsGameOver() === true) {
        winScores[`${Object.keys(winScores).length + 1}`]
            = `Clicks: ${document.querySelector('.clicks-number').innerText} - Duration: ${document.querySelector('.timer-seconds').innerText}s.`
    }
    addWinScoreToLayout();
}