let currentTheme = 'light';

export const getCurrentTheme = () => {
    return currentTheme;
}

export const setCurrentTheme = (value) => {
    currentTheme = value;
}

export const initThemeChanger = () => {
    changeTheme(currentTheme);
}

export const changeTheme = (color) => {
    const BODY = document.querySelector('body');
    const GAME_BOARD = document.querySelector('.game-board');
    const GAME_INFORMATION = document.querySelector('.game-information-wrapper');
    const SESSION_BUTTONS = document.querySelectorAll('.button');
    const DARK_THEME_BUTTON = document.querySelector('.dark-theme');
    const LIGHT_THEME_BUTTON = document.querySelector('.light-theme');
    const SCORE_TABLE = document.querySelector('.score-table');

    if (color === 'dark') {
        BODY.classList.add('body-dark');
        GAME_BOARD.classList.add('game-board-dark');
        GAME_INFORMATION.classList.add('game-information-wrapper-dark');
        DARK_THEME_BUTTON.classList.add('dark-theme-d');
        LIGHT_THEME_BUTTON.classList.add('light-theme-d');
        SCORE_TABLE.classList.add('score-table-dark');

        SESSION_BUTTONS.forEach(button => {
            button.classList.add('button-dark');
        });
    } else {
        BODY.classList.remove('body-dark');
        GAME_BOARD.classList.remove('game-board-dark');
        GAME_INFORMATION.classList.remove('game-information-wrapper-dark');
        DARK_THEME_BUTTON.classList.remove('dark-theme-d');
        LIGHT_THEME_BUTTON.classList.remove('light-theme-d');
        SCORE_TABLE.classList.remove('score-table-dark');

        SESSION_BUTTONS.forEach(button => {
            button.classList.remove('button-dark');
        });
    }
}