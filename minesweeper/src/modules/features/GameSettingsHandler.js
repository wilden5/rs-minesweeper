export const validateMinesInput = () => {
    const MINES_SETTINGS_INPUT = document.querySelector('.mines-settings-input');
    const MINES_SETTINGS_BUTTON = document.querySelector('.mines-settings-button');

    MINES_SETTINGS_BUTTON.addEventListener('click', () => {
        if (MINES_SETTINGS_INPUT.value >= 10 && MINES_SETTINGS_INPUT.value <= 99) {
            alert(`${MINES_SETTINGS_INPUT.value} mines has been set!`);
            MINES_SETTINGS_INPUT.classList.remove('invalid-input');
        } else {
            alert('Enter valid number of mines (should be a number between 10 and 99)');
            MINES_SETTINGS_INPUT.classList.add('invalid-input');
        }
    })
}