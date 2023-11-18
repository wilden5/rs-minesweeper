import GAME_DIFFICULTIES from '../../data/difficulties.json';

let numberOfUserMines = 10;
let userBoardSizeRows = GAME_DIFFICULTIES.easy.rows;
let userBoardSizeColumns = GAME_DIFFICULTIES.easy.columns;

export const getUserBoardSizeRows = () => {
    return userBoardSizeRows;
}

export const getUserBoardSizeColumns = () => {
    return userBoardSizeColumns;
}

export const setUserBoardSizeRows = (value) => {
    userBoardSizeRows = value;
}

export const setUserBoardSizeColumns = (value) => {
    userBoardSizeColumns = value;
}

export const getNumberOfUserMines = () => {
    return numberOfUserMines;
}

export const setNumberOfUserMines = (value) => {
    numberOfUserMines = value;
}

export const validateMinesInput = () => {
    const MINES_SETTINGS_INPUT = document.querySelector('.mines-settings-input');
    const MINES_SETTINGS_BUTTON = document.querySelector('.mines-settings-button');
    let BOMBS_REMAINED = document.querySelector('.bombs-remained');
    const userValue = MINES_SETTINGS_INPUT.value;

    if (userValue >= 10 && userValue <= 99) {
        numberOfUserMines = userValue;
        BOMBS_REMAINED.innerText = userValue;
        alert(`${userValue} mines has been set!`);
        MINES_SETTINGS_INPUT.classList.remove('invalid-input');
        MINES_SETTINGS_INPUT.disabled = true;
        MINES_SETTINGS_BUTTON.disabled = true;
    } else {
        alert('Enter valid number of mines (should be a number between 10 and 99)');
        MINES_SETTINGS_INPUT.classList.add('invalid-input');
    }
}