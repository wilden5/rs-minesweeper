const mines = [];

mines.push('1-1');
mines.push('2-2');
mines.push('3-3');
mines.push('4-4');
mines.push('5-5');

export const getMines = () => {
    return mines;
}

export const showMines = () => {
    const BOARD_BARS = document.querySelectorAll('.bar');
    BOARD_BARS.forEach((bar) => {
        if (mines.includes(bar.classList[0])) {
            if(bar.classList.contains('red-flag')) {
                bar.classList.add('guessed-bomb');
                bar.innerText = '💣🚩';
            } else {
                bar.innerText = '💣';
                bar.classList.add('bomb');
            }
        }
    })
}