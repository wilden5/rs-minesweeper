import {getIsGameOver, setIsGameOver} from "../main-logic/SessionHandler";
import {
    getClickedBarsCounter,
    getGameBoardMinesLocation,
    setClickedBarsCounter,
    setGameBoardMinesLocation
} from "../main-logic/MinesHandler";
import {getCurrentTheme, setCurrentTheme} from "./ThemeHandler";
import {getUserScores, setUserScores} from "./ScoreTableHandler";
import {
    getNumberOfUserMines,
    getUserBoardSizeColumns,
    getUserBoardSizeRows, setNumberOfUserMines,
    setUserBoardSizeColumns,
    setUserBoardSizeRows
} from "./GameSettingsHandler";
import {getSoundState, setSoundState} from "./SoundHandler";

export const saveGameState = () => {
    const gameState = {
        redFlagsUsed: document.querySelector('.red-flags-number').innerText,
        bombsRemaining: document.querySelector('.bombs-remained').innerText,
        numberOfClicks: document.querySelector('.clicks-number').innerText,
        sessionDuration: document.querySelector('.timer-seconds').innerText,
        isGameOver: getIsGameOver(),
        barClickedCounter: getClickedBarsCounter(),
        themeColor: getCurrentTheme(),
        minesLocation: [],
        barClasses: [],
        barInnerText: [],
        boardSizeRows: getUserBoardSizeRows(),
        boardSizeColumns: getUserBoardSizeColumns(),
        userNumberOfMines: getNumberOfUserMines(),
        userSound: getSoundState()
    };
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar) => {
        gameState.barClasses.push(Array.from(bar.classList));
        gameState.barInnerText.push(Array.from(bar.innerText));
    });
    gameState.minesLocation = getGameBoardMinesLocation();
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
        setClickedBarsCounter(gameState.barClickedCounter);
        setCurrentTheme(gameState.themeColor);
        setGameBoardMinesLocation(gameState.minesLocation);
        setUserBoardSizeRows(gameState.boardSizeRows);
        setUserBoardSizeColumns(gameState.boardSizeColumns);
        setNumberOfUserMines(gameState.userNumberOfMines);
        setSoundState(gameState.userSound);
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
    localStorage.removeItem('minesweeperGameState');
}

export const saveGameResults = () => {
    localStorage.setItem('minesweeperGameResults', JSON.stringify(getUserScores()));
}

export const loadGameResults = () => {
    const results = JSON.parse(localStorage.getItem('minesweeperGameResults'));
    if (results) {
        setUserScores(results);
    }
}