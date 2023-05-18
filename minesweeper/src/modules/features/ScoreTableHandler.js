import {getIsGameOver} from "../main-logic/SessionHandler";
import {addScoreToLayout} from "../main-logic/LayoutHandler";

let userScores = {};

export const getUserScores = () => {
    return userScores;
}

export const setUserScores = (object) => {
    userScores = { ...userScores, ...object };
}

export const getUserScoresSize = () => {
    return Object.keys(userScores).length;
}

export const addScore = (result) => {
    let score ='';
    if (getIsGameOver() === true) {
        if(result === 'win') {
            score = `WIN | Clicks: ${document.querySelector('.clicks-number').innerText} - Duration: ${document.querySelector('.timer-seconds').innerText}s.`;
        } else {
            score = `LOSS | Clicks: ${document.querySelector('.clicks-number').innerText} - Duration: ${document.querySelector('.timer-seconds').innerText}s.`;
        }
        userScores[`${Object.keys(userScores).length + 1}`] = score;
    }
    addScoreToLayout();
    console.log(getUserScoresSize());
}