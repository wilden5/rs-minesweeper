import gameStartMp3 from "../../data/assets/sounds/game-start.mp3";
import gameOverMp3 from "../../data/assets/sounds/game-over.mp3";
import gameWinMp3 from "../../data/assets/sounds/game-win.mp3";
import setFlagMp3 from "../../data/assets/sounds/set-flag.mp3";
import openBarMp3 from "../../data/assets/sounds/open-a-bar.mp3";

const GAME_START_SOUND = new Audio(gameStartMp3);
const GAME_OVER_SOUND = new Audio(gameOverMp3);
const GAME_WIN_SOUND = new Audio(gameWinMp3);
const SET_FLAG_SOUND = new Audio(setFlagMp3);
const OPEN_BAR_SOUND = new Audio(openBarMp3);

let soundState = true;

export const getSoundState = () => {
    return soundState;
}

export const setSoundState = (value) => {
    soundState = value;
}

export const updateSoundButtonColor = () => {
    const GAME_SOUND = document.querySelector('.game-sound-button');
    if(!soundState) {
        GAME_SOUND.classList.add('gs-disabled');
    } else {
        GAME_SOUND.classList.remove('gs-disabled');
    }
}

const playSound = (sound) => {
    sound.currentTime = 0;
    sound.play().catch(error => {
        console.error(`Error playing sound: ${error}`);
    });
}

export const playGameStartSound = () => {
    if (soundState) {
        playSound(GAME_START_SOUND);
    }
}

export const playGameOverSound = () => {
    if (soundState) {
        playSound(GAME_OVER_SOUND);
    }
}

export const playGameWinSound = () => {
    if (soundState) {
        playSound(GAME_WIN_SOUND);
    }
}

export const playSetFlagSound = () => {
    if (soundState) {
        playSound(SET_FLAG_SOUND);
    }
}

export const playOpenBarSound = () => {
    if (soundState) {
        playSound(OPEN_BAR_SOUND);
    }
}