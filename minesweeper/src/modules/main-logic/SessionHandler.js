import {initTimer} from "../features/SpotwatchHandler";
import {handleBarClick} from "./ClickHandler";
import {handleRedFlag} from "./FlagHandler";
import {playGameStartSound} from "../features/SoundHandler";

export const startGameSession = () => {
    const START_GAME_BUTTON = document.querySelector('.start-game-button');
    START_GAME_BUTTON.addEventListener('click', () => {
        START_GAME_BUTTON.disabled = true;
        playGameStartSound();
        initTimer();
        handleBarClick();
        handleRedFlag();
    })
}