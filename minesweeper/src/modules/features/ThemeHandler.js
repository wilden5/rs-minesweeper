let currentTheme = 'light';

export const initThemeChanger = () => {
    const DARK_THEME = document.querySelector('.dark-theme');
    const LIGHT_THEME = document.querySelector('.light-theme');

    LIGHT_THEME.addEventListener('click', () => {
        currentTheme = 'light';
        changeTheme(currentTheme);
    })

    DARK_THEME.addEventListener('click', () => {
        currentTheme = 'dark';
        changeTheme(currentTheme);
    })
}

const changeTheme = (color) => {
    const BODY = document.querySelector('body');
    const GAME_BOARD = document.querySelector('.game-board');
    const GAME_INFORMATION = document.querySelector('.game-information-wrapper');
    const SESSION_BUTTONS = document.querySelectorAll('.button');
    const DARK_THEME_BUTTON = document.querySelector('.dark-theme');
    const LIGHT_THEME_BUTTON = document.querySelector('.light-theme');

    if (color === 'dark') {
        BODY.classList.add('body-dark');
        GAME_BOARD.classList.add('game-board-dark');
        GAME_INFORMATION.classList.add('game-information-wrapper-dark');
        DARK_THEME_BUTTON.classList.add('dark-theme-d');
        LIGHT_THEME_BUTTON.classList.add('light-theme-d');

        SESSION_BUTTONS.forEach(button => {
            button.classList.add('button-dark');
        });
    } else {
        BODY.classList.remove('body-dark');
        GAME_BOARD.classList.remove('game-board-dark');
        GAME_INFORMATION.classList.remove('game-information-wrapper-dark');
        DARK_THEME_BUTTON.classList.remove('dark-theme-d');
        LIGHT_THEME_BUTTON.classList.remove('light-theme-d');

        SESSION_BUTTONS.forEach(button => {
            button.classList.remove('button-dark');
        });
    }
}