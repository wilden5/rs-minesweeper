/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initApp": () => (/* binding */ initApp)
/* harmony export */ });
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _modules_main_logic_LayoutHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/main-logic/LayoutHandler */ "./src/modules/main-logic/LayoutHandler.js");
/* harmony import */ var _modules_main_logic_SessionHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/main-logic/SessionHandler */ "./src/modules/main-logic/SessionHandler.js");
/* harmony import */ var _modules_utils_ButtonsHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/utils/ButtonsHandler */ "./src/modules/utils/ButtonsHandler.js");
/* harmony import */ var _modules_features_StorageHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/features/StorageHandler */ "./src/modules/features/StorageHandler.js");
/* harmony import */ var _modules_main_logic_ClickHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/main-logic/ClickHandler */ "./src/modules/main-logic/ClickHandler.js");
/* harmony import */ var _modules_features_StopwatchHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/features/StopwatchHandler */ "./src/modules/features/StopwatchHandler.js");








const initApp = () => {
  (0,_modules_main_logic_LayoutHandler__WEBPACK_IMPORTED_MODULE_2__.initGameLayout)();
  (0,_modules_main_logic_SessionHandler__WEBPACK_IMPORTED_MODULE_3__.startGameSession)();
  (0,_modules_utils_ButtonsHandler__WEBPACK_IMPORTED_MODULE_4__.initButtons)();
  (0,_modules_features_StorageHandler__WEBPACK_IMPORTED_MODULE_5__.loadGameResults)();
  (0,_modules_main_logic_LayoutHandler__WEBPACK_IMPORTED_MODULE_2__.addScoreToLayout)();
};
initApp();
window.addEventListener('beforeunload', () => {
  if ((0,_modules_main_logic_ClickHandler__WEBPACK_IMPORTED_MODULE_6__.getClickCounter)() > 0 || parseInt((0,_modules_features_StopwatchHandler__WEBPACK_IMPORTED_MODULE_7__.getStopwatchValue)()) > 0) {
    (0,_modules_features_StorageHandler__WEBPACK_IMPORTED_MODULE_5__.saveGameState)();
    (0,_modules_features_StorageHandler__WEBPACK_IMPORTED_MODULE_5__.saveGameResults)();
  }
});

/***/ }),

/***/ "./src/modules/features/GameSettingsHandler.js":
/*!*****************************************************!*\
  !*** ./src/modules/features/GameSettingsHandler.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNumberOfUserMines": () => (/* binding */ getNumberOfUserMines),
/* harmony export */   "getUserBoardSizeColumns": () => (/* binding */ getUserBoardSizeColumns),
/* harmony export */   "getUserBoardSizeRows": () => (/* binding */ getUserBoardSizeRows),
/* harmony export */   "setNumberOfUserMines": () => (/* binding */ setNumberOfUserMines),
/* harmony export */   "setUserBoardSizeColumns": () => (/* binding */ setUserBoardSizeColumns),
/* harmony export */   "setUserBoardSizeRows": () => (/* binding */ setUserBoardSizeRows),
/* harmony export */   "validateMinesInput": () => (/* binding */ validateMinesInput)
/* harmony export */ });
/* harmony import */ var _data_difficulties_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/difficulties.json */ "./src/data/difficulties.json");
/* harmony import */ var _data_difficulties_json__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_difficulties_json__WEBPACK_IMPORTED_MODULE_0__);

let numberOfUserMines = 10;
let userBoardSizeRows = (_data_difficulties_json__WEBPACK_IMPORTED_MODULE_0___default().easy.rows);
let userBoardSizeColumns = (_data_difficulties_json__WEBPACK_IMPORTED_MODULE_0___default().easy.columns);
const getUserBoardSizeRows = () => {
  return userBoardSizeRows;
};
const getUserBoardSizeColumns = () => {
  return userBoardSizeColumns;
};
const setUserBoardSizeRows = value => {
  userBoardSizeRows = value;
};
const setUserBoardSizeColumns = value => {
  userBoardSizeColumns = value;
};
const getNumberOfUserMines = () => {
  return numberOfUserMines;
};
const setNumberOfUserMines = value => {
  numberOfUserMines = value;
};
const validateMinesInput = () => {
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
};

/***/ }),

/***/ "./src/modules/features/ScoreTableHandler.js":
/*!***************************************************!*\
  !*** ./src/modules/features/ScoreTableHandler.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addScore": () => (/* binding */ addScore),
/* harmony export */   "getUserScores": () => (/* binding */ getUserScores),
/* harmony export */   "getUserScoresSize": () => (/* binding */ getUserScoresSize),
/* harmony export */   "setUserScores": () => (/* binding */ setUserScores)
/* harmony export */ });
/* harmony import */ var _main_logic_SessionHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main-logic/SessionHandler */ "./src/modules/main-logic/SessionHandler.js");
/* harmony import */ var _main_logic_LayoutHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-logic/LayoutHandler */ "./src/modules/main-logic/LayoutHandler.js");


let userScores = {};
const getUserScores = () => {
  return userScores;
};
const setUserScores = object => {
  userScores = {
    ...userScores,
    ...object
  };
};
const getUserScoresSize = () => {
  return Object.keys(userScores).length;
};
const addScore = result => {
  let score = '';
  if ((0,_main_logic_SessionHandler__WEBPACK_IMPORTED_MODULE_0__.getIsGameOver)() === true) {
    if (result === 'win') {
      score = `WIN | Clicks: ${document.querySelector('.clicks-number').innerText} - Duration: ${document.querySelector('.timer-seconds').innerText}s.`;
    } else {
      score = `LOSS | Clicks: ${document.querySelector('.clicks-number').innerText} - Duration: ${document.querySelector('.timer-seconds').innerText}s.`;
    }
    userScores[`${Object.keys(userScores).length + 1}`] = score;
  }
  (0,_main_logic_LayoutHandler__WEBPACK_IMPORTED_MODULE_1__.addScoreToLayout)();
  console.log(getUserScoresSize());
};

/***/ }),

/***/ "./src/modules/features/SoundHandler.js":
/*!**********************************************!*\
  !*** ./src/modules/features/SoundHandler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSoundState": () => (/* binding */ getSoundState),
/* harmony export */   "playGameOverSound": () => (/* binding */ playGameOverSound),
/* harmony export */   "playGameStartSound": () => (/* binding */ playGameStartSound),
/* harmony export */   "playGameWinSound": () => (/* binding */ playGameWinSound),
/* harmony export */   "playOpenBarSound": () => (/* binding */ playOpenBarSound),
/* harmony export */   "playSetFlagSound": () => (/* binding */ playSetFlagSound),
/* harmony export */   "setSoundState": () => (/* binding */ setSoundState),
/* harmony export */   "updateSoundButtonColor": () => (/* binding */ updateSoundButtonColor)
/* harmony export */ });
/* harmony import */ var _data_assets_sounds_game_start_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/assets/sounds/game-start.mp3 */ "./src/data/assets/sounds/game-start.mp3");
/* harmony import */ var _data_assets_sounds_game_over_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/assets/sounds/game-over.mp3 */ "./src/data/assets/sounds/game-over.mp3");
/* harmony import */ var _data_assets_sounds_game_win_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/assets/sounds/game-win.mp3 */ "./src/data/assets/sounds/game-win.mp3");
/* harmony import */ var _data_assets_sounds_set_flag_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/assets/sounds/set-flag.mp3 */ "./src/data/assets/sounds/set-flag.mp3");
/* harmony import */ var _data_assets_sounds_open_a_bar_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/assets/sounds/open-a-bar.mp3 */ "./src/data/assets/sounds/open-a-bar.mp3");





const GAME_START_SOUND = new Audio(_data_assets_sounds_game_start_mp3__WEBPACK_IMPORTED_MODULE_0__);
const GAME_OVER_SOUND = new Audio(_data_assets_sounds_game_over_mp3__WEBPACK_IMPORTED_MODULE_1__);
const GAME_WIN_SOUND = new Audio(_data_assets_sounds_game_win_mp3__WEBPACK_IMPORTED_MODULE_2__);
const SET_FLAG_SOUND = new Audio(_data_assets_sounds_set_flag_mp3__WEBPACK_IMPORTED_MODULE_3__);
const OPEN_BAR_SOUND = new Audio(_data_assets_sounds_open_a_bar_mp3__WEBPACK_IMPORTED_MODULE_4__);
let soundState = true;
const getSoundState = () => {
  return soundState;
};
const setSoundState = value => {
  soundState = value;
};
const updateSoundButtonColor = () => {
  const GAME_SOUND = document.querySelector('.game-sound-button');
  if (!soundState) {
    GAME_SOUND.classList.add('gs-disabled');
  } else {
    GAME_SOUND.classList.remove('gs-disabled');
  }
};
const playSound = sound => {
  sound.currentTime = 0;
  sound.play().catch(error => {
    console.error(`Error playing sound: ${error}`);
  });
};
const playGameStartSound = () => {
  if (soundState) {
    playSound(GAME_START_SOUND);
  }
};
const playGameOverSound = () => {
  if (soundState) {
    playSound(GAME_OVER_SOUND);
  }
};
const playGameWinSound = () => {
  if (soundState) {
    playSound(GAME_WIN_SOUND);
  }
};
const playSetFlagSound = () => {
  if (soundState) {
    playSound(SET_FLAG_SOUND);
  }
};
const playOpenBarSound = () => {
  if (soundState) {
    playSound(OPEN_BAR_SOUND);
  }
};

/***/ }),

/***/ "./src/modules/features/StopwatchHandler.js":
/*!**************************************************!*\
  !*** ./src/modules/features/StopwatchHandler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStopwatchValue": () => (/* binding */ getStopwatchValue),
/* harmony export */   "initStopwatch": () => (/* binding */ initStopwatch),
/* harmony export */   "startStopwatch": () => (/* binding */ startStopwatch),
/* harmony export */   "stopStopwatch": () => (/* binding */ stopStopwatch)
/* harmony export */ });
let timerInterval;
let startTime;
let elapsedTime = 0;
const startStopwatch = () => {
  const GAME_TIMER = document.querySelector('.timer-seconds');
  startTime = Date.now() - elapsedTime * 1000;
  timerInterval = setInterval(function () {
    elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    GAME_TIMER.innerText = elapsedTime;
  }, 100);
};
const stopStopwatch = () => {
  clearInterval(timerInterval);
};
const getStopwatchValue = () => {
  return document.querySelector('.timer-seconds').innerText;
};
const initStopwatch = () => {
  const storedSessionDuration = JSON.parse(localStorage.getItem('minesweeperGameState'))?.sessionDuration;
  if (storedSessionDuration) {
    elapsedTime = parseInt(storedSessionDuration);
    startStopwatch();
  } else {
    elapsedTime = 0;
    startStopwatch();
  }
};

/***/ }),

/***/ "./src/modules/features/StorageHandler.js":
/*!************************************************!*\
  !*** ./src/modules/features/StorageHandler.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearLocalStorage": () => (/* binding */ clearLocalStorage),
/* harmony export */   "loadGameResults": () => (/* binding */ loadGameResults),
/* harmony export */   "loadGameState": () => (/* binding */ loadGameState),
/* harmony export */   "saveGameResults": () => (/* binding */ saveGameResults),
/* harmony export */   "saveGameState": () => (/* binding */ saveGameState)
/* harmony export */ });
/* harmony import */ var _main_logic_SessionHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main-logic/SessionHandler */ "./src/modules/main-logic/SessionHandler.js");
/* harmony import */ var _main_logic_MinesHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-logic/MinesHandler */ "./src/modules/main-logic/MinesHandler.js");
/* harmony import */ var _ThemeHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeHandler */ "./src/modules/features/ThemeHandler.js");
/* harmony import */ var _ScoreTableHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScoreTableHandler */ "./src/modules/features/ScoreTableHandler.js");
/* harmony import */ var _GameSettingsHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameSettingsHandler */ "./src/modules/features/GameSettingsHandler.js");
/* harmony import */ var _SoundHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SoundHandler */ "./src/modules/features/SoundHandler.js");






const saveGameState = () => {
  const gameState = {
    redFlagsUsed: document.querySelector('.red-flags-number').innerText,
    bombsRemaining: document.querySelector('.bombs-remained').innerText,
    numberOfClicks: document.querySelector('.clicks-number').innerText,
    sessionDuration: document.querySelector('.timer-seconds').innerText,
    isGameOver: (0,_main_logic_SessionHandler__WEBPACK_IMPORTED_MODULE_0__.getIsGameOver)(),
    barClickedCounter: (0,_main_logic_MinesHandler__WEBPACK_IMPORTED_MODULE_1__.getClickedBarsCounter)(),
    themeColor: (0,_ThemeHandler__WEBPACK_IMPORTED_MODULE_2__.getCurrentTheme)(),
    minesLocation: [],
    barClasses: [],
    barInnerText: [],
    boardSizeRows: (0,_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_4__.getUserBoardSizeRows)(),
    boardSizeColumns: (0,_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_4__.getUserBoardSizeColumns)(),
    userNumberOfMines: (0,_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_4__.getNumberOfUserMines)(),
    userSound: (0,_SoundHandler__WEBPACK_IMPORTED_MODULE_5__.getSoundState)()
  };
  const bars = document.querySelectorAll('.bar');
  bars.forEach(bar => {
    gameState.barClasses.push(Array.from(bar.classList));
    gameState.barInnerText.push(Array.from(bar.innerText));
  });
  gameState.minesLocation = (0,_main_logic_MinesHandler__WEBPACK_IMPORTED_MODULE_1__.getGameBoardMinesLocation)();
  localStorage.setItem('minesweeperGameState', JSON.stringify(gameState));
};
const loadGameState = () => {
  const gameState = JSON.parse(localStorage.getItem('minesweeperGameState'));
  if (gameState) {
    document.querySelector('.red-flags-number').innerText = gameState.redFlagsUsed;
    document.querySelector('.bombs-remained').innerText = gameState.bombsRemaining;
    document.querySelector('.clicks-number').innerText = gameState.numberOfClicks;
    document.querySelector('.timer-seconds').innerText = gameState.sessionDuration;
    (0,_main_logic_SessionHandler__WEBPACK_IMPORTED_MODULE_0__.setIsGameOver)(gameState.isGameOver);
    (0,_main_logic_MinesHandler__WEBPACK_IMPORTED_MODULE_1__.setClickedBarsCounter)(gameState.barClickedCounter);
    (0,_ThemeHandler__WEBPACK_IMPORTED_MODULE_2__.setCurrentTheme)(gameState.themeColor);
    (0,_main_logic_MinesHandler__WEBPACK_IMPORTED_MODULE_1__.setGameBoardMinesLocation)(gameState.minesLocation);
    (0,_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_4__.setUserBoardSizeRows)(gameState.boardSizeRows);
    (0,_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_4__.setUserBoardSizeColumns)(gameState.boardSizeColumns);
    (0,_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_4__.setNumberOfUserMines)(gameState.userNumberOfMines);
    (0,_SoundHandler__WEBPACK_IMPORTED_MODULE_5__.setSoundState)(gameState.userSound);
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
      gameState.barClasses[index].forEach(className => {
        bar.classList.add(className);
      });
      bar.innerText = gameState.barInnerText[index];
    });
  }
};
const clearLocalStorage = () => {
  localStorage.removeItem('minesweeperGameState');
};
const saveGameResults = () => {
  localStorage.setItem('minesweeperGameResults', JSON.stringify((0,_ScoreTableHandler__WEBPACK_IMPORTED_MODULE_3__.getUserScores)()));
};
const loadGameResults = () => {
  const results = JSON.parse(localStorage.getItem('minesweeperGameResults'));
  if (results) {
    (0,_ScoreTableHandler__WEBPACK_IMPORTED_MODULE_3__.setUserScores)(results);
  }
};

/***/ }),

/***/ "./src/modules/features/ThemeHandler.js":
/*!**********************************************!*\
  !*** ./src/modules/features/ThemeHandler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeTheme": () => (/* binding */ changeTheme),
/* harmony export */   "getCurrentTheme": () => (/* binding */ getCurrentTheme),
/* harmony export */   "initThemeChanger": () => (/* binding */ initThemeChanger),
/* harmony export */   "setCurrentTheme": () => (/* binding */ setCurrentTheme)
/* harmony export */ });
let currentTheme = 'light';
const getCurrentTheme = () => {
  return currentTheme;
};
const setCurrentTheme = value => {
  currentTheme = value;
};
const initThemeChanger = () => {
  changeTheme(currentTheme);
};
const changeTheme = color => {
  const BODY = document.querySelector('body');
  const GAME_BOARD = document.querySelector('.game-board');
  const GAME_INFORMATION = document.querySelector('.game-information-wrapper');
  const SESSION_BUTTONS = document.querySelectorAll('.button');
  const DARK_THEME_BUTTON = document.querySelector('.dark-theme');
  const LIGHT_THEME_BUTTON = document.querySelector('.light-theme');
  const SCORE_TABLE = document.querySelector('.score-table');
  const MINES_SETTING_BUTTON = document.querySelector('.mines-settings-button');
  const FIELD_BUTTONS = document.querySelectorAll('.field-button');
  if (color === 'dark') {
    BODY.classList.add('body-dark');
    GAME_BOARD.classList.add('game-board-dark');
    GAME_INFORMATION.classList.add('game-information-wrapper-dark');
    DARK_THEME_BUTTON.classList.add('dark-theme-d');
    LIGHT_THEME_BUTTON.classList.add('light-theme-d');
    SCORE_TABLE.classList.add('score-table-dark');
    MINES_SETTING_BUTTON.classList.add('mines-settings-button-dark');
    SESSION_BUTTONS.forEach(button => {
      button.classList.add('button-dark');
    });
    FIELD_BUTTONS.forEach(button => {
      button.classList.add('field-button-dark');
    });
  } else {
    BODY.classList.remove('body-dark');
    GAME_BOARD.classList.remove('game-board-dark');
    GAME_INFORMATION.classList.remove('game-information-wrapper-dark');
    DARK_THEME_BUTTON.classList.remove('dark-theme-d');
    LIGHT_THEME_BUTTON.classList.remove('light-theme-d');
    SCORE_TABLE.classList.remove('score-table-dark');
    MINES_SETTING_BUTTON.classList.remove('mines-settings-button-dark');
    SESSION_BUTTONS.forEach(button => {
      button.classList.remove('button-dark');
    });
    FIELD_BUTTONS.forEach(button => {
      button.classList.remove('field-button-dark');
    });
  }
};

/***/ }),

/***/ "./src/modules/main-logic/ClickHandler.js":
/*!************************************************!*\
  !*** ./src/modules/main-logic/ClickHandler.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getClickCounter": () => (/* binding */ getClickCounter),
/* harmony export */   "increaseClickCounter": () => (/* binding */ increaseClickCounter),
/* harmony export */   "initClickOnBar": () => (/* binding */ initClickOnBar)
/* harmony export */ });
/* harmony import */ var _features_StopwatchHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../features/StopwatchHandler */ "./src/modules/features/StopwatchHandler.js");
/* harmony import */ var _SessionHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SessionHandler */ "./src/modules/main-logic/SessionHandler.js");
/* harmony import */ var _MinesHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MinesHandler */ "./src/modules/main-logic/MinesHandler.js");
/* harmony import */ var _features_SoundHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/SoundHandler */ "./src/modules/features/SoundHandler.js");
/* harmony import */ var _features_ScoreTableHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/ScoreTableHandler */ "./src/modules/features/ScoreTableHandler.js");





let clickCounter;
const increaseClickCounter = plusValue => {
  clickCounter.innerText = parseInt(clickCounter.innerText) + plusValue;
};
const getClickCounter = () => {
  return parseInt(clickCounter.innerText);
};
const initClickOnBar = () => {
  const BOARD_BARS = document.querySelectorAll('.bar');
  clickCounter = document.querySelector('.clicks-number');
  BOARD_BARS.forEach(bar => {
    bar.addEventListener('click', () => {
      if (bar.classList.contains('red-flag')) {
        return;
      }
      if ((0,_SessionHandler__WEBPACK_IMPORTED_MODULE_1__.getIsGameOver)() === false && !bar.classList.contains('bar-clicked')) {
        increaseClickCounter(1);
      }
      console.log(bar.classList);
      if ((0,_MinesHandler__WEBPACK_IMPORTED_MODULE_2__.getGameBoardMinesLocation)().includes(bar.classList[0])) {
        let clickedBars = document.querySelector('.clicks-number').innerText;
        console.log(clickedBars);
        if (parseInt(clickedBars) === 1) {
          (0,_features_SoundHandler__WEBPACK_IMPORTED_MODULE_3__.playOpenBarSound)();
          (0,_MinesHandler__WEBPACK_IMPORTED_MODULE_2__.swapMine)(bar.classList[0]);
          (0,_MinesHandler__WEBPACK_IMPORTED_MODULE_2__.checkNearestBars)(bar);
        } else {
          if ((0,_SessionHandler__WEBPACK_IMPORTED_MODULE_1__.getIsGameOver)() !== true) {
            (0,_SessionHandler__WEBPACK_IMPORTED_MODULE_1__.setIsGameOver)(true);
            (0,_features_ScoreTableHandler__WEBPACK_IMPORTED_MODULE_4__.addScore)('loss');
            (0,_MinesHandler__WEBPACK_IMPORTED_MODULE_2__.showMinesLocation)();
            (0,_features_StopwatchHandler__WEBPACK_IMPORTED_MODULE_0__.stopStopwatch)();
            (0,_features_SoundHandler__WEBPACK_IMPORTED_MODULE_3__.playGameOverSound)();
            document.querySelector('.restart-button').disabled = false;
            alert('BRO YOU\'VE JUST CLICKED ON THE BOMB. GAME OVER. TRY AGAIN.');
          }
        }
      } else {
        if ((0,_SessionHandler__WEBPACK_IMPORTED_MODULE_1__.getIsGameOver)() !== true) {
          if (!bar.classList.contains('bar-clicked')) {
            (0,_features_SoundHandler__WEBPACK_IMPORTED_MODULE_3__.playOpenBarSound)();
          }
          (0,_MinesHandler__WEBPACK_IMPORTED_MODULE_2__.checkNearestBars)(bar);
          removeRedFlagForOpenedBars();
        }
      }
    });
  });
};
const removeRedFlagForOpenedBars = () => {
  const BOARD_BARS = document.querySelectorAll('.bar');
  const RED_FLAGS_NUMBER = document.querySelector('.red-flags-number');
  const BOMBS_REMAINED = document.querySelector('.bombs-remained');
  let counter = 0;
  BOARD_BARS.forEach(bar => {
    if (bar.classList.contains('bar-clicked') && bar.classList.contains('red-flag')) {
      bar.classList.remove('red-flag');
      bar.innerText = '';
      counter++;
    }
    if (bar.classList.contains('nb')) {
      bar.classList.remove('red-flag');
      let nearestBombsNumber = '';
      let barClassList = bar.getAttribute('class').split(' ');
      barClassList.forEach(item => {
        if (item.includes('nearby-bombs')) {
          nearestBombsNumber = item.slice(-1);
        }
      });
      bar.innerText = nearestBombsNumber;
    }
  });
  RED_FLAGS_NUMBER.innerText = parseInt(RED_FLAGS_NUMBER.innerText) - counter;
  BOMBS_REMAINED.innerText = parseInt(BOMBS_REMAINED.innerText) + counter;
};

/***/ }),

/***/ "./src/modules/main-logic/FlagHandler.js":
/*!***********************************************!*\
  !*** ./src/modules/main-logic/FlagHandler.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initRedFlag": () => (/* binding */ initRedFlag)
/* harmony export */ });
/* harmony import */ var _SessionHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SessionHandler */ "./src/modules/main-logic/SessionHandler.js");
/* harmony import */ var _ClickHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClickHandler */ "./src/modules/main-logic/ClickHandler.js");
/* harmony import */ var _features_SoundHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/SoundHandler */ "./src/modules/features/SoundHandler.js");
/* harmony import */ var _features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/GameSettingsHandler */ "./src/modules/features/GameSettingsHandler.js");




const initRedFlag = () => {
  const RED_FLAG = '🚩';
  const BOARD_BARS = document.querySelectorAll('.bar');
  const RED_FLAGS_NUMBER = document.querySelector('.red-flags-number');
  const BOMBS_REMAINED = document.querySelector('.bombs-remained');
  BOARD_BARS.forEach(bar => {
    bar.addEventListener('contextmenu', event => {
      event.preventDefault();
      if ((0,_SessionHandler__WEBPACK_IMPORTED_MODULE_0__.getIsGameOver)() === false && !bar.classList.contains('bar-clicked')) {
        (0,_ClickHandler__WEBPACK_IMPORTED_MODULE_1__.increaseClickCounter)(1);
        if (bar.innerHTML === '') {
          if (parseInt(RED_FLAGS_NUMBER.innerText) < (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_3__.getNumberOfUserMines)()) {
            (0,_features_SoundHandler__WEBPACK_IMPORTED_MODULE_2__.playSetFlagSound)();
            RED_FLAGS_NUMBER.innerText = parseInt(RED_FLAGS_NUMBER.innerText) + 1;
            BOMBS_REMAINED.innerText = parseInt(BOMBS_REMAINED.innerText) - 1;
            bar.innerHTML = RED_FLAG;
            bar.classList.toggle('red-flag');
          }
        } else {
          RED_FLAGS_NUMBER.innerText = parseInt(RED_FLAGS_NUMBER.innerText) - 1;
          BOMBS_REMAINED.innerText = parseInt(BOMBS_REMAINED.innerText) + 1;
          bar.innerHTML = '';
          bar.classList.toggle('red-flag');
        }
      }
    });
  });
};

/***/ }),

/***/ "./src/modules/main-logic/LayoutHandler.js":
/*!*************************************************!*\
  !*** ./src/modules/main-logic/LayoutHandler.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addScoreToLayout": () => (/* binding */ addScoreToLayout),
/* harmony export */   "createBasicLayout": () => (/* binding */ createBasicLayout),
/* harmony export */   "createGameBoard": () => (/* binding */ createGameBoard),
/* harmony export */   "getGameBoard": () => (/* binding */ getGameBoard),
/* harmony export */   "initGameLayout": () => (/* binding */ initGameLayout)
/* harmony export */ });
/* harmony import */ var _features_ScoreTableHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../features/ScoreTableHandler */ "./src/modules/features/ScoreTableHandler.js");
/* harmony import */ var _features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/GameSettingsHandler */ "./src/modules/features/GameSettingsHandler.js");


let gameBoard = [];
const getGameBoard = () => {
  return gameBoard;
};
const createElement = function (type) {
  let classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  const element = document.createElement(type);
  classes.forEach(className => element.classList.add(className));
  if (text) {
    element.innerText = text;
  }
  return element;
};
const createBasicLayout = () => {
  const GAME_BOARD_ELEMENT = createElement('div', ['game-board']);
  const NUMBER_OF_FLAGS_TEXT = createElement('div', ['red-flags-information'], 'Number of 🚩 used: ');
  const NUMBER_OF_FLAGS = createElement('span', ['red-flags-number'], '0');
  const TOTAL_BOMBS_ON_GAME_BOARD = createElement('div', ['bombs-number'], 'Number of 💣 remaining: ');
  const BOMBS_REMAINED = createElement('span', ['bombs-remained'], (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_1__.getNumberOfUserMines)());
  const NUMBER_OF_CLICKS_TEXT = createElement('div', ['clicks-number-information'], 'Number of clicks: ');
  const NUMBER_OF_CLICKS = createElement('span', ['clicks-number'], '0');
  const GAME_RESTART_BUTTON = createElement('button', ['restart-button', 'button'], 'RESTART CURRENT GAME');
  const GAME_DURATION = createElement('div', ['game-duration'], 'Duration of the game: ');
  const GAME_TIMER = createElement('span', ['timer-seconds'], '0');
  const START_GAME_BUTTON = createElement('button', ['start-game-button', 'button'], 'START A NEW GAME');
  const GAME_INFORMATION = createElement('div', ['game-information']);
  const CONTINUE_GAME_BUTTON = createElement('button', ['continue-button', 'button'], 'CONTINUE YOUR GAME');
  const BUTTONS_WRAPPER = createElement('div', ['buttons-wrapper']);
  const GAME_INFORMATION_WRAPPER = createElement('div', ['game-information-wrapper']);
  const GAME_OBJECTS = createElement('div', ['game-objects']);
  const SESSION_INFORMATION = createElement('div', ['session-information']);
  const GAME_WRAPPER = createElement('div', ['game-wrapper']);
  const THEME_WRAPPER = createElement('div', ['theme-wrapper']);
  const DARK_THEME_BUTTON = createElement('button', ['dark-theme', 'theme-button'], 'DARK THEME');
  const LIGHT_THEME_BUTTON = createElement('button', ['light-theme', 'theme-button'], 'LIGHT THEME');
  const SCORE_TABLE_WRAPPER = createElement('div', ['score-table']);
  const SCORE_TABLE_HEADER = createElement('h4', ['score-table-header'], 'Recent game results: ');
  const SCORE_TABLE_DESCRIPTION = createElement('span', ['score-table-description'], '(Real-time automatic updates of the latest game results)');
  const WIN_SCORES = createElement('div', ['win-scores-wrapper']);
  const MINES_SETTINGS_WRAPPER = createElement('div', ['mines-settings-wrapper']);
  const MINES_SETTINGS_BUTTON = createElement('button', ['mines-settings-button'], 'SAVE');
  const FIELD_BUTTONS_WRAPPER = createElement('div', ['field-buttons-wrapper']);
  const EASY_FIELD_BUTTON = createElement('button', ['easy-field-button', 'field-button'], '10x10');
  const MEDIUM_FIELD_BUTTON = createElement('button', ['medium-field-button', 'field-button'], '15x15');
  const HARD_FIELD_BUTTON = createElement('button', ['hard-field-button', 'field-button'], '25x25');
  const GAME_SOUND = createElement('button', ['game-sound-button'], '🔊');
  const createMinesSettingsInput = () => {
    const MINES_SETTINGS_INPUT = createElement('input', ['mines-settings-input']);
    MINES_SETTINGS_INPUT.setAttribute('type', 'number');
    MINES_SETTINGS_INPUT.setAttribute('placeholder', 'Enter the number of mines 10 - 99');
    return MINES_SETTINGS_INPUT;
  };
  MINES_SETTINGS_WRAPPER.appendChild(createMinesSettingsInput());
  MINES_SETTINGS_WRAPPER.appendChild(MINES_SETTINGS_BUTTON);
  FIELD_BUTTONS_WRAPPER.appendChild(EASY_FIELD_BUTTON);
  FIELD_BUTTONS_WRAPPER.appendChild(MEDIUM_FIELD_BUTTON);
  FIELD_BUTTONS_WRAPPER.appendChild(HARD_FIELD_BUTTON);
  FIELD_BUTTONS_WRAPPER.appendChild(GAME_SOUND);
  THEME_WRAPPER.appendChild(DARK_THEME_BUTTON);
  THEME_WRAPPER.appendChild(LIGHT_THEME_BUTTON);
  GAME_OBJECTS.appendChild(NUMBER_OF_FLAGS_TEXT);
  GAME_OBJECTS.appendChild(TOTAL_BOMBS_ON_GAME_BOARD);
  SESSION_INFORMATION.appendChild(NUMBER_OF_CLICKS_TEXT);
  SESSION_INFORMATION.appendChild(GAME_DURATION);
  GAME_INFORMATION_WRAPPER.appendChild(GAME_OBJECTS);
  GAME_INFORMATION_WRAPPER.appendChild(SESSION_INFORMATION);
  GAME_INFORMATION.appendChild(GAME_INFORMATION_WRAPPER);
  GAME_INFORMATION.appendChild(BUTTONS_WRAPPER);
  BUTTONS_WRAPPER.appendChild(GAME_RESTART_BUTTON);
  BUTTONS_WRAPPER.appendChild(START_GAME_BUTTON);
  BUTTONS_WRAPPER.appendChild(CONTINUE_GAME_BUTTON);
  TOTAL_BOMBS_ON_GAME_BOARD.appendChild(BOMBS_REMAINED);
  NUMBER_OF_CLICKS_TEXT.appendChild(NUMBER_OF_CLICKS);
  NUMBER_OF_FLAGS_TEXT.appendChild(NUMBER_OF_FLAGS);
  GAME_DURATION.appendChild(GAME_TIMER);
  SCORE_TABLE_WRAPPER.appendChild(SCORE_TABLE_HEADER);
  SCORE_TABLE_WRAPPER.appendChild(SCORE_TABLE_DESCRIPTION);
  SCORE_TABLE_WRAPPER.appendChild(WIN_SCORES);
  GAME_INFORMATION.appendChild(MINES_SETTINGS_WRAPPER);
  GAME_WRAPPER.appendChild(THEME_WRAPPER);
  GAME_WRAPPER.appendChild(FIELD_BUTTONS_WRAPPER);
  GAME_WRAPPER.appendChild(GAME_INFORMATION);
  GAME_WRAPPER.appendChild(GAME_BOARD_ELEMENT);
  GAME_WRAPPER.appendChild(SCORE_TABLE_WRAPPER);
  document.body.appendChild(GAME_WRAPPER);
};
const createGameBoard = (setRows, setColumns) => {
  const GAME_BOARD = document.querySelector('.game-board');
  gameBoard = [];
  for (let row = 0; row < setRows; row++) {
    let boardRow = [];
    for (let column = 0; column < setColumns; column++) {
      let bar = createElement('div', [`${row.toString()}-${column.toString()}`, 'bar']);
      GAME_BOARD.appendChild(bar);
      boardRow.push(bar);
    }
    gameBoard.push(boardRow);
  }
};
const initGameLayout = () => {
  createBasicLayout();
  createGameBoard((0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_1__.getUserBoardSizeRows)(), (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_1__.getUserBoardSizeColumns)());
};
const addScoreToLayout = () => {
  const WIN_SCORES = document.querySelector('.win-scores-wrapper');
  const scores = (0,_features_ScoreTableHandler__WEBPACK_IMPORTED_MODULE_0__.getUserScores)();
  const lastScores = Object.keys(scores).slice(-10);
  WIN_SCORES.innerHTML = '';
  for (const property of lastScores) {
    let element = createElement('div', [`win-score-${property}`, 'win-score'], `GAME ${property}: ${(0,_features_ScoreTableHandler__WEBPACK_IMPORTED_MODULE_0__.getUserScores)()[property]}`);
    WIN_SCORES.appendChild(element);
  }
};

/***/ }),

/***/ "./src/modules/main-logic/MinesHandler.js":
/*!************************************************!*\
  !*** ./src/modules/main-logic/MinesHandler.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkMines": () => (/* binding */ checkMines),
/* harmony export */   "checkNearestBars": () => (/* binding */ checkNearestBars),
/* harmony export */   "clearGameBoardMinesLocation": () => (/* binding */ clearGameBoardMinesLocation),
/* harmony export */   "generateRandomMines": () => (/* binding */ generateRandomMines),
/* harmony export */   "getClickedBarsCounter": () => (/* binding */ getClickedBarsCounter),
/* harmony export */   "getGameBoardMinesLocation": () => (/* binding */ getGameBoardMinesLocation),
/* harmony export */   "setClickedBarsCounter": () => (/* binding */ setClickedBarsCounter),
/* harmony export */   "setGameBoardMinesLocation": () => (/* binding */ setGameBoardMinesLocation),
/* harmony export */   "showMinesLocation": () => (/* binding */ showMinesLocation),
/* harmony export */   "swapMine": () => (/* binding */ swapMine)
/* harmony export */ });
/* harmony import */ var _LayoutHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutHandler */ "./src/modules/main-logic/LayoutHandler.js");
/* harmony import */ var _SessionHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SessionHandler */ "./src/modules/main-logic/SessionHandler.js");
/* harmony import */ var _features_StopwatchHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/StopwatchHandler */ "./src/modules/features/StopwatchHandler.js");
/* harmony import */ var _ClickHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClickHandler */ "./src/modules/main-logic/ClickHandler.js");
/* harmony import */ var _features_SoundHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/SoundHandler */ "./src/modules/features/SoundHandler.js");
/* harmony import */ var _features_ScoreTableHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../features/ScoreTableHandler */ "./src/modules/features/ScoreTableHandler.js");
/* harmony import */ var _features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../features/GameSettingsHandler */ "./src/modules/features/GameSettingsHandler.js");







let gameBoardMinesLocation = [];
let clickedBarsCounter = 0;
const clearGameBoardMinesLocation = () => {
  gameBoardMinesLocation = [];
};
const getClickedBarsCounter = () => {
  return clickedBarsCounter;
};
const setClickedBarsCounter = value => {
  clickedBarsCounter = value;
};
const swapMine = mineToSwap => {
  const index = gameBoardMinesLocation.indexOf(mineToSwap);
  if (index !== -1) {
    gameBoardMinesLocation.splice(index, 1);
  }
  generateRandomMines();
};
const generateRandomMines = () => {
  let minesNumber = gameBoardMinesLocation.length + 1;
  if (gameBoardMinesLocation.length === minesNumber - 1) {
    let minesNumber2 = gameBoardMinesLocation.length;
    while (minesNumber2 !== parseInt((0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_6__.getNumberOfUserMines)())) {
      let r = Math.floor(Math.random() * (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_6__.getUserBoardSizeRows)());
      let c = Math.floor(Math.random() * (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_6__.getUserBoardSizeColumns)());
      let bombId = `${r.toString()}-${c.toString()}`;
      if (!gameBoardMinesLocation.includes(bombId)) {
        gameBoardMinesLocation.push(bombId);
        minesNumber2 += 1;
      }
    }
  } else {
    while (minesNumber > 0) {
      let r = Math.floor(Math.random() * (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_6__.getUserBoardSizeRows)());
      let c = Math.floor(Math.random() * (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_6__.getUserBoardSizeColumns)());
      let bombId = `${r.toString()}-${c.toString()}`;
      if (!gameBoardMinesLocation.includes(bombId)) {
        gameBoardMinesLocation.push(bombId);
        minesNumber -= 1;
      }
    }
  }
};
const getGameBoardMinesLocation = () => {
  return gameBoardMinesLocation;
};
const setGameBoardMinesLocation = array => {
  array.forEach(bomb => {
    gameBoardMinesLocation.push(bomb);
  });
};
const showMinesLocation = () => {
  const BOARD_BARS = document.querySelectorAll('.bar');
  BOARD_BARS.forEach(bar => {
    if (gameBoardMinesLocation.includes(bar.classList[0])) {
      if (bar.classList.contains('red-flag')) {
        bar.classList.add('guessed-bomb');
        bar.innerText = '💣';
      } else {
        bar.innerText = '💣';
        bar.classList.add('bomb');
      }
    }
  });
};
const checkMines = (row, column) => {
  if (row < 0 || row >= (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_6__.getUserBoardSizeRows)() || column < 0 || column >= (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_6__.getUserBoardSizeColumns)()) {
    return;
  }
  if ((0,_LayoutHandler__WEBPACK_IMPORTED_MODULE_0__.getGameBoard)()[row][column].classList.contains('bar-clicked')) {
    return;
  }
  (0,_LayoutHandler__WEBPACK_IMPORTED_MODULE_0__.getGameBoard)()[row][column].classList.add('bar-clicked');
  clickedBarsCounter += 1;
  let minesCounter = 0;
  minesCounter += checkBar(row - 1, column - 1);
  minesCounter += checkBar(row - 1, column);
  minesCounter += checkBar(row - 1, column + 1);
  minesCounter += checkBar(row, column - 1);
  minesCounter += checkBar(row, column + 1);
  minesCounter += checkBar(row + 1, column - 1);
  minesCounter += checkBar(row + 1, column);
  minesCounter += checkBar(row + 1, column + 1);
  if (minesCounter > 0) {
    (0,_LayoutHandler__WEBPACK_IMPORTED_MODULE_0__.getGameBoard)()[row][column].innerText = minesCounter;
    (0,_LayoutHandler__WEBPACK_IMPORTED_MODULE_0__.getGameBoard)()[row][column].classList.add(`nearby-bombs${minesCounter.toString()}`, 'nb');
  } else {
    checkMines(row - 1, column - 1);
    checkMines(row - 1, column);
    checkMines(row - 1, column + 1);
    checkMines(row, column - 1);
    checkMines(row, column + 1);
    checkMines(row + 1, column - 1);
    checkMines(row + 1, column);
    checkMines(row + 1, column + 1);
  }
  if (clickedBarsCounter === (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_6__.getUserBoardSizeRows)() * (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_6__.getUserBoardSizeColumns)() - (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_6__.getNumberOfUserMines)()) {
    (0,_SessionHandler__WEBPACK_IMPORTED_MODULE_1__.setIsGameOver)(true);
    (0,_features_ScoreTableHandler__WEBPACK_IMPORTED_MODULE_5__.addScore)('win');
    showMinesLocation();
    (0,_features_StopwatchHandler__WEBPACK_IMPORTED_MODULE_2__.stopStopwatch)();
    (0,_features_SoundHandler__WEBPACK_IMPORTED_MODULE_4__.playGameWinSound)();
    alert(`Hooray! You found all mines in ${(0,_features_StopwatchHandler__WEBPACK_IMPORTED_MODULE_2__.getStopwatchValue)()} seconds and ${(0,_ClickHandler__WEBPACK_IMPORTED_MODULE_3__.getClickCounter)()} moves!`);
  }
  console.log(clickedBarsCounter);
};
const checkBar = (row, column) => {
  if (row < 0 || row >= (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_6__.getUserBoardSizeRows)() || column < 0 || column >= (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_6__.getUserBoardSizeColumns)()) {
    return 0;
  }
  if (gameBoardMinesLocation.includes(`${row.toString()}-${column.toString()}`)) {
    return 1;
  }
  return 0;
};
const checkNearestBars = bar => {
  let coordinates = bar.classList[0].split('-');
  let barRowCoordinates = parseInt(coordinates[0]);
  let barColumnCoordinates = parseInt(coordinates[1]);
  checkMines(barRowCoordinates, barColumnCoordinates);
};

/***/ }),

/***/ "./src/modules/main-logic/SessionHandler.js":
/*!**************************************************!*\
  !*** ./src/modules/main-logic/SessionHandler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIsGameOver": () => (/* binding */ getIsGameOver),
/* harmony export */   "setIsGameOver": () => (/* binding */ setIsGameOver),
/* harmony export */   "startGameSession": () => (/* binding */ startGameSession)
/* harmony export */ });
/* harmony import */ var _features_StopwatchHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../features/StopwatchHandler */ "./src/modules/features/StopwatchHandler.js");
/* harmony import */ var _ClickHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClickHandler */ "./src/modules/main-logic/ClickHandler.js");
/* harmony import */ var _FlagHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlagHandler */ "./src/modules/main-logic/FlagHandler.js");
/* harmony import */ var _features_SoundHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/SoundHandler */ "./src/modules/features/SoundHandler.js");
/* harmony import */ var _features_ThemeHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/ThemeHandler */ "./src/modules/features/ThemeHandler.js");
/* harmony import */ var _MinesHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MinesHandler */ "./src/modules/main-logic/MinesHandler.js");






let isGameOver = false;
const getIsGameOver = () => {
  return isGameOver;
};
const setIsGameOver = value => {
  isGameOver = value;
};
const startGameSession = () => {
  const START_GAME_BUTTON = document.querySelector('.start-game-button');
  const MINES_SETTINGS_BUTTON = document.querySelector('.mines-settings-button');
  const MINES_SETTINGS_INPUT = document.querySelector('.mines-settings-input');
  const RESTART_BUTTON = document.querySelector('.restart-button');
  const EASY_FIELD_BUTTON = document.querySelector('.easy-field-button');
  const MEDIUM_FIELD_BUTTON = document.querySelector('.medium-field-button');
  const HARD_FIELD_BUTTON = document.querySelector('.hard-field-button');
  START_GAME_BUTTON.addEventListener('click', () => {
    START_GAME_BUTTON.disabled = true;
    MINES_SETTINGS_BUTTON.disabled = true;
    MINES_SETTINGS_INPUT.disabled = true;
    RESTART_BUTTON.disabled = false;
    EASY_FIELD_BUTTON.disabled = true;
    MEDIUM_FIELD_BUTTON.disabled = true;
    HARD_FIELD_BUTTON.disabled = true;
    (0,_features_SoundHandler__WEBPACK_IMPORTED_MODULE_3__.playGameStartSound)();
    (0,_features_StopwatchHandler__WEBPACK_IMPORTED_MODULE_0__.initStopwatch)();
    (0,_ClickHandler__WEBPACK_IMPORTED_MODULE_1__.initClickOnBar)();
    (0,_FlagHandler__WEBPACK_IMPORTED_MODULE_2__.initRedFlag)();
    (0,_features_ThemeHandler__WEBPACK_IMPORTED_MODULE_4__.initThemeChanger)();
    (0,_MinesHandler__WEBPACK_IMPORTED_MODULE_5__.generateRandomMines)();
    console.log((0,_MinesHandler__WEBPACK_IMPORTED_MODULE_5__.getGameBoardMinesLocation)());
  });
};

/***/ }),

/***/ "./src/modules/utils/ButtonsHandler.js":
/*!*********************************************!*\
  !*** ./src/modules/utils/ButtonsHandler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkButtonsState": () => (/* binding */ checkButtonsState),
/* harmony export */   "continueYourGameButton": () => (/* binding */ continueYourGameButton),
/* harmony export */   "darkThemeButton": () => (/* binding */ darkThemeButton),
/* harmony export */   "initButtons": () => (/* binding */ initButtons),
/* harmony export */   "lightThemeButton": () => (/* binding */ lightThemeButton),
/* harmony export */   "restartCurrentGameButton": () => (/* binding */ restartCurrentGameButton),
/* harmony export */   "saveUserBombsButton": () => (/* binding */ saveUserBombsButton)
/* harmony export */ });
/* harmony import */ var _data_difficulties_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/difficulties.json */ "./src/data/difficulties.json");
/* harmony import */ var _data_difficulties_json__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_difficulties_json__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_logic_SessionHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-logic/SessionHandler */ "./src/modules/main-logic/SessionHandler.js");
/* harmony import */ var _features_SoundHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/SoundHandler */ "./src/modules/features/SoundHandler.js");
/* harmony import */ var _features_StopwatchHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/StopwatchHandler */ "./src/modules/features/StopwatchHandler.js");
/* harmony import */ var _main_logic_ClickHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main-logic/ClickHandler */ "./src/modules/main-logic/ClickHandler.js");
/* harmony import */ var _main_logic_FlagHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../main-logic/FlagHandler */ "./src/modules/main-logic/FlagHandler.js");
/* harmony import */ var _features_StorageHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../features/StorageHandler */ "./src/modules/features/StorageHandler.js");
/* harmony import */ var _main_logic_MinesHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../main-logic/MinesHandler */ "./src/modules/main-logic/MinesHandler.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../index */ "./src/index.js");
/* harmony import */ var _features_ThemeHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../features/ThemeHandler */ "./src/modules/features/ThemeHandler.js");
/* harmony import */ var _main_logic_LayoutHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../main-logic/LayoutHandler */ "./src/modules/main-logic/LayoutHandler.js");
/* harmony import */ var _features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../features/GameSettingsHandler */ "./src/modules/features/GameSettingsHandler.js");












const checkButtonsState = () => {
  const START_GAME_BUTTON = document.querySelector('.start-game-button');
  const CONTINUE_YOUR_SESSION_BUTTON = document.querySelector('.continue-button');
  const GAME_INFORMATION_WRAPPER = document.querySelector('.game-information-wrapper');
  const GAME_BOARD_ELEMENT = document.querySelector('.game-board');
  const DARK_THEME = document.querySelector('.dark-theme');
  const LIGHT_THEME = document.querySelector('.light-theme');
  const RESTART_BUTTON = document.querySelector('.restart-button');
  const MINES_SETTINGS_BUTTON = document.querySelector('.mines-settings-button');
  const MINES_SETTINGS_INPUT = document.querySelector('.mines-settings-input');
  const EASY_FIELD_BUTTON = document.querySelector('.easy-field-button');
  const MEDIUM_FIELD_BUTTON = document.querySelector('.medium-field-button');
  const HARD_FIELD_BUTTON = document.querySelector('.hard-field-button');
  const GAME_SOUND = document.querySelector('.game-sound-button');
  if (localStorage.getItem('minesweeperGameState') === null) {
    CONTINUE_YOUR_SESSION_BUTTON.disabled = true;
    RESTART_BUTTON.disabled = true;
  }
  if ((0,_main_logic_SessionHandler__WEBPACK_IMPORTED_MODULE_1__.getIsGameOver)() === true) {
    START_GAME_BUTTON.disabled = true;
    CONTINUE_YOUR_SESSION_BUTTON.disabled = true;
    RESTART_BUTTON.disabled = false;
  }
  if (localStorage.getItem('minesweeperGameState')) {
    GAME_INFORMATION_WRAPPER.classList.add('pause');
    GAME_BOARD_ELEMENT.classList.add('pause');
    DARK_THEME.classList.add('pause');
    LIGHT_THEME.classList.add('pause');
    MINES_SETTINGS_BUTTON.classList.add('pause');
    MINES_SETTINGS_INPUT.classList.add('pause');
    EASY_FIELD_BUTTON.classList.add('pause');
    MEDIUM_FIELD_BUTTON.classList.add('pause');
    HARD_FIELD_BUTTON.classList.add('pause');
    START_GAME_BUTTON.disabled = true;
    GAME_SOUND.classList.add('pause');
    if (JSON.parse(localStorage.getItem('minesweeperGameState')).isGameOver === true) {
      CONTINUE_YOUR_SESSION_BUTTON.disabled = true;
    }
  }
};
const continueYourGameButton = () => {
  const CONTINUE_YOUR_SESSION_BUTTON = document.querySelector('.continue-button');
  const GAME_INFORMATION_WRAPPER = document.querySelector('.game-information-wrapper');
  const GAME_BOARD_ELEMENT = document.querySelector('.game-board');
  const DARK_THEME = document.querySelector('.dark-theme');
  const LIGHT_THEME = document.querySelector('.light-theme');
  const MINES_SETTINGS_BUTTON = document.querySelector('.mines-settings-button');
  const MINES_SETTINGS_INPUT = document.querySelector('.mines-settings-input');
  const EASY_FIELD_BUTTON = document.querySelector('.easy-field-button');
  const MEDIUM_FIELD_BUTTON = document.querySelector('.medium-field-button');
  const HARD_FIELD_BUTTON = document.querySelector('.hard-field-button');
  const GAME_SOUND = document.querySelector('.game-sound-button');
  CONTINUE_YOUR_SESSION_BUTTON.addEventListener('click', () => {
    GAME_BOARD_ELEMENT.innerHTML = '';
    const gameState = JSON.parse(localStorage.getItem('minesweeperGameState'));
    if (gameState.boardSizeRows === 15) {
      GAME_BOARD_ELEMENT.classList.add('medium-board-size');
    } else if (gameState.boardSizeRows === 25) {
      GAME_BOARD_ELEMENT.classList.add('hard-board-size');
    }
    (0,_main_logic_LayoutHandler__WEBPACK_IMPORTED_MODULE_10__.createGameBoard)(gameState.boardSizeRows, gameState.boardSizeColumns);
    GAME_INFORMATION_WRAPPER.classList.remove('pause');
    GAME_BOARD_ELEMENT.classList.remove('pause');
    DARK_THEME.classList.remove('pause');
    LIGHT_THEME.classList.remove('pause');
    MINES_SETTINGS_BUTTON.classList.remove('pause');
    MINES_SETTINGS_INPUT.classList.remove('pause');
    EASY_FIELD_BUTTON.classList.remove('pause');
    MEDIUM_FIELD_BUTTON.classList.remove('pause');
    HARD_FIELD_BUTTON.classList.remove('pause');
    GAME_SOUND.classList.remove('pause');
    (0,_features_StorageHandler__WEBPACK_IMPORTED_MODULE_6__.loadGameResults)();
    (0,_main_logic_LayoutHandler__WEBPACK_IMPORTED_MODULE_10__.addScoreToLayout)();
    (0,_features_StorageHandler__WEBPACK_IMPORTED_MODULE_6__.loadGameState)();
    MINES_SETTINGS_BUTTON.disabled = true;
    MINES_SETTINGS_INPUT.disabled = true;
    CONTINUE_YOUR_SESSION_BUTTON.disabled = true;
    EASY_FIELD_BUTTON.disabled = true;
    MEDIUM_FIELD_BUTTON.disabled = true;
    HARD_FIELD_BUTTON.disabled = true;
    (0,_features_SoundHandler__WEBPACK_IMPORTED_MODULE_2__.updateSoundButtonColor)();
    (0,_features_SoundHandler__WEBPACK_IMPORTED_MODULE_2__.playGameStartSound)();
    (0,_features_StopwatchHandler__WEBPACK_IMPORTED_MODULE_3__.initStopwatch)();
    (0,_main_logic_ClickHandler__WEBPACK_IMPORTED_MODULE_4__.initClickOnBar)();
    (0,_main_logic_FlagHandler__WEBPACK_IMPORTED_MODULE_5__.initRedFlag)();
    (0,_features_ThemeHandler__WEBPACK_IMPORTED_MODULE_9__.initThemeChanger)();
  });
};
const restartCurrentGameButton = () => {
  const RESTART_BUTTON = document.querySelector('.restart-button');
  RESTART_BUTTON.addEventListener('click', () => {
    (0,_features_StorageHandler__WEBPACK_IMPORTED_MODULE_6__.clearLocalStorage)();
    (0,_main_logic_SessionHandler__WEBPACK_IMPORTED_MODULE_1__.setIsGameOver)(false);
    (0,_main_logic_MinesHandler__WEBPACK_IMPORTED_MODULE_7__.clearGameBoardMinesLocation)();
    (0,_features_ThemeHandler__WEBPACK_IMPORTED_MODULE_9__.setCurrentTheme)('light');
    (0,_features_ThemeHandler__WEBPACK_IMPORTED_MODULE_9__.initThemeChanger)();
    (0,_features_SoundHandler__WEBPACK_IMPORTED_MODULE_2__.setSoundState)(true);
    (0,_features_SoundHandler__WEBPACK_IMPORTED_MODULE_2__.updateSoundButtonColor)();
    (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_11__.setUserBoardSizeRows)((_data_difficulties_json__WEBPACK_IMPORTED_MODULE_0___default().easy.rows));
    (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_11__.setUserBoardSizeColumns)((_data_difficulties_json__WEBPACK_IMPORTED_MODULE_0___default().easy.columns));
    document.body.innerHTML = '';
    (0,_main_logic_MinesHandler__WEBPACK_IMPORTED_MODULE_7__.setClickedBarsCounter)(0);
    (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_11__.setNumberOfUserMines)(10);
    (0,_index__WEBPACK_IMPORTED_MODULE_8__.initApp)();
  });
};
const darkThemeButton = () => {
  const DARK_THEME = document.querySelector('.dark-theme');
  DARK_THEME.addEventListener('click', () => {
    (0,_features_ThemeHandler__WEBPACK_IMPORTED_MODULE_9__.setCurrentTheme)('dark');
    (0,_features_ThemeHandler__WEBPACK_IMPORTED_MODULE_9__.changeTheme)((0,_features_ThemeHandler__WEBPACK_IMPORTED_MODULE_9__.getCurrentTheme)());
  });
};
const lightThemeButton = () => {
  const LIGHT_THEME = document.querySelector('.light-theme');
  LIGHT_THEME.addEventListener('click', () => {
    (0,_features_ThemeHandler__WEBPACK_IMPORTED_MODULE_9__.setCurrentTheme)('light');
    (0,_features_ThemeHandler__WEBPACK_IMPORTED_MODULE_9__.changeTheme)((0,_features_ThemeHandler__WEBPACK_IMPORTED_MODULE_9__.getCurrentTheme)());
  });
};
const saveUserBombsButton = () => {
  const MINES_SETTINGS_BUTTON = document.querySelector('.mines-settings-button');
  MINES_SETTINGS_BUTTON.addEventListener('click', _features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_11__.validateMinesInput);
};
const easyFieldButton = () => {
  const GAME_BOARD = document.querySelector('.game-board');
  const EASY_FIELD_BUTTON = document.querySelector('.easy-field-button');
  EASY_FIELD_BUTTON.addEventListener('click', () => {
    (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_11__.setUserBoardSizeRows)((_data_difficulties_json__WEBPACK_IMPORTED_MODULE_0___default().easy.rows));
    (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_11__.setUserBoardSizeColumns)((_data_difficulties_json__WEBPACK_IMPORTED_MODULE_0___default().easy.columns));
    GAME_BOARD.innerHTML = '';
    GAME_BOARD.classList.remove('medium-board-size');
    GAME_BOARD.classList.remove('hard-board-size');
    (0,_main_logic_LayoutHandler__WEBPACK_IMPORTED_MODULE_10__.createGameBoard)((0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_11__.getUserBoardSizeRows)(), (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_11__.getUserBoardSizeColumns)());
  });
};
const mediumFieldButton = () => {
  const GAME_BOARD = document.querySelector('.game-board');
  const MEDIUM_FIELD_BUTTON = document.querySelector('.medium-field-button');
  MEDIUM_FIELD_BUTTON.addEventListener('click', () => {
    (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_11__.setUserBoardSizeRows)((_data_difficulties_json__WEBPACK_IMPORTED_MODULE_0___default().medium.rows));
    (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_11__.setUserBoardSizeColumns)((_data_difficulties_json__WEBPACK_IMPORTED_MODULE_0___default().medium.columns));
    GAME_BOARD.innerHTML = '';
    GAME_BOARD.classList.remove('hard-board-size');
    GAME_BOARD.classList.add('medium-board-size');
    (0,_main_logic_LayoutHandler__WEBPACK_IMPORTED_MODULE_10__.createGameBoard)((0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_11__.getUserBoardSizeRows)(), (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_11__.getUserBoardSizeColumns)());
  });
};
const hardFieldButton = () => {
  const GAME_BOARD = document.querySelector('.game-board');
  const HARD_FIELD_BUTTON = document.querySelector('.hard-field-button');
  HARD_FIELD_BUTTON.addEventListener('click', () => {
    (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_11__.setUserBoardSizeRows)((_data_difficulties_json__WEBPACK_IMPORTED_MODULE_0___default().hard.rows));
    (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_11__.setUserBoardSizeColumns)((_data_difficulties_json__WEBPACK_IMPORTED_MODULE_0___default().hard.columns));
    GAME_BOARD.innerHTML = '';
    GAME_BOARD.classList.remove('medium-board-size');
    GAME_BOARD.classList.add('hard-board-size');
    (0,_main_logic_LayoutHandler__WEBPACK_IMPORTED_MODULE_10__.createGameBoard)((0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_11__.getUserBoardSizeRows)(), (0,_features_GameSettingsHandler__WEBPACK_IMPORTED_MODULE_11__.getUserBoardSizeColumns)());
  });
};
const gameSoundButton = () => {
  const GAME_SOUND = document.querySelector('.game-sound-button');
  GAME_SOUND.addEventListener('click', () => {
    if (!GAME_SOUND.classList.contains('gs-disabled')) {
      GAME_SOUND.classList.add('gs-disabled');
      (0,_features_SoundHandler__WEBPACK_IMPORTED_MODULE_2__.setSoundState)(false);
    } else {
      GAME_SOUND.classList.remove('gs-disabled');
      (0,_features_SoundHandler__WEBPACK_IMPORTED_MODULE_2__.setSoundState)(true);
    }
  });
};
const initButtons = () => {
  checkButtonsState();
  continueYourGameButton();
  restartCurrentGameButton();
  darkThemeButton();
  lightThemeButton();
  saveUserBombsButton();
  easyFieldButton();
  mediumFieldButton();
  hardFieldButton();
  gameSoundButton();
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  font-size: 10px;\n}\n\nbody {\n  background-color: ghostwhite;\n}\n\n.body-dark {\n  background-color: black;\n}\n\n.game-wrapper {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  min-width: 80rem;\n}\n\n.game-board {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  width: 50rem;\n  height: 50rem;\n  background-color: lightgray;\n}\n.game-board div {\n  width: 4.8rem;\n  height: 4.8rem;\n  border: 1px solid white;\n}\n\n.game-board-dark {\n  background-color: white;\n}\n.game-board-dark div {\n  border: 1px solid lightgray;\n}\n\n.bar-clicked {\n  background-color: darkgray;\n}\n\n.nearby-bombs1 {\n  color: blue;\n}\n.nearby-bombs2 {\n  color: green;\n}\n.nearby-bombs3 {\n  color: red;\n}\n.nearby-bombs4 {\n  color: darkblue;\n}\n.nearby-bombs5 {\n  color: brown;\n}\n\n.nb {\n  font-size: 4rem;\n  text-align: center;\n}\n\n.red-flag,\n.bomb {\n  display: flex;\n  justify-content: center;\n  font-size: 3.2rem;\n}\n\n.bomb {\n  background-color: red;\n}\n\n.game-information {\n  width: 50rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 1.8rem;\n  margin: 0 auto 1rem;\n  row-gap: 1rem;\n  font-family: Tahoma, serif;\n  line-height: 1.5;\n}\n\n.button {\n  width: 22rem;\n  font-size: 1.5rem;\n  font-weight: bold;\n  border-radius: 1.5rem;\n  border-style: none;\n  padding: 0.8rem;\n  cursor: pointer;\n  background-color: cadetblue;\n  font-family: Tahoma, serif;\n}\n.button[disabled] {\n  cursor: not-allowed;\n}\n.button:hover:not([disabled]) {\n  background-color: orange;\n  transition: ease-out 1s;\n}\n\n.button-dark {\n  background-color: white;\n}\n.button-dark:hover:not([disabled]) {\n  background-color: green;\n  transition: ease-out 1s;\n}\n\n.guessed-bomb {\n  font-size: 3.2rem;\n  background: green;\n  align-items: flex-start;\n}\n\n.buttons-wrapper {\n  display: flex;\n  gap: 1rem;\n  border-radius: 1.5rem;\n}\n\n.game-information-wrapper {\n  padding: 0.5rem;\n  display: flex;\n  border: 0.5rem solid cadetblue;\n  justify-content: space-around;\n  gap: 0.5rem;\n  cursor: default;\n}\n\n.game-information-wrapper-dark {\n  color: white;\n  border: 0.5rem solid white;\n}\n\n.pause {\n  display: none;\n}\n\n.theme-wrapper {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 0.5rem;\n  gap: 1rem;\n}\n\n.theme-button {\n  padding: 0.5rem;\n  width: 15rem;\n  font-size: 1.7rem;\n  font-family: Tahoma, serif;\n  cursor: pointer;\n  border: none;\n  font-weight: bold;\n}\n\n.dark-theme {\n  background-color: black;\n  color: white;\n}\n.dark-theme:hover {\n  background-color: gray;\n  transition: ease-out 1s;\n}\n\n.dark-theme-d {\n  background-color: darkgray;\n  color: white;\n}\n.dark-theme-d:hover {\n  background-color: gray;\n  transition: ease-out 1s;\n}\n\n.light-theme {\n  background-color: wheat;\n}\n.light-theme:hover {\n  background-color: burlywood;\n  transition: ease-out 1s;\n}\n\n.light-theme-d {\n  background-color: white;\n}\n.light-theme-d:hover {\n  background-color: wheat;\n  transition: ease-out 1s;\n}\n\n.score-table {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.score-table-header {\n  font-size: 3rem;\n  margin-top: 1rem;\n  margin-bottom: 0;\n}\n\n.score-table-description {\n  font-size: 1.2rem;\n}\n\n.score-table-dark {\n  color: white;\n}\n\n.win-scores-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.win-score {\n  font-size: 2rem;\n  font-family: Tahoma, serif;\n}\n\n.mines-settings-wrapper,\n.field-buttons-wrapper {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.mines-settings-button {\n  background-color: cadetblue;\n  width: 8rem;\n  font-size: 1.7rem;\n  cursor: pointer;\n  border: none;\n  font-weight: bold;\n  border-radius: 2rem;\n  padding: 0.3rem;\n}\n.mines-settings-button:hover:not([disabled]) {\n  background-color: orange;\n  transition: ease-out 1s;\n}\n.mines-settings-button[disabled] {\n  cursor: not-allowed;\n}\n\n.mines-settings-button-dark {\n  background-color: white;\n}\n.mines-settings-button-dark:hover:not([disabled]) {\n  background-color: green;\n  transition: ease-out 1s;\n}\n\n.invalid-input {\n  border: 1px solid red;\n}\n\n.mines-settings-input::placeholder {\n  font-size: 1.1rem;\n  font-family: Tahoma, serif;\n}\n.mines-settings-input::-webkit-inner-spin-button,\n.mines-settings-input ::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.field-buttons-wrapper {\n  margin-bottom: 0.5rem;\n  margin-top: 0.1rem;\n}\n\n.field-button {\n  background-color: orange;\n  width: 7rem;\n  font-size: 1.5rem;\n  cursor: pointer;\n  border: none;\n  font-weight: bold;\n  border-radius: 2rem;\n  padding: 0.3rem;\n}\n.field-button:hover:not([disabled]) {\n  background-color: red;\n  transition: ease-out 1s;\n}\n.field-button[disabled] {\n  cursor: not-allowed;\n}\n\n.field-button-dark {\n  background-color: white;\n}\n.field-button-dark:hover:not([disabled]) {\n  background-color: green;\n  transition: ease-out 1s;\n}\n\n.medium-board-size {\n  width: 75rem;\n  height: 75rem;\n}\n\n.hard-board-size {\n  width: 80rem;\n  height: 80rem;\n}\n.hard-board-size div {\n  font-size: 2.2rem;\n  width: 3rem;\n  height: 3rem;\n}\n\n.game-sound-button {\n  background-color: green;\n  cursor: pointer;\n  border: none;\n  border-radius: 2rem;\n}\n.game-sound-button:hover:not([disabled]) {\n  background-color: red;\n  transition: ease-out 1s;\n}\n\n.gs-disabled {\n  background-color: red;\n}\n.gs-disabled:hover:not([disabled]) {\n  background-color: green;\n  transition: ease-out 1s;\n}", "",{"version":3,"sources":["webpack://./src/style/_style.scss","webpack://./src/index.scss","webpack://./src/style/_var.scss"],"names":[],"mappings":"AAEA;EACE,eAAA;ACDF;;ADIA;EACE,4BAAA;ACDF;;ADIA;EACE,uBAAA;ACDF;;ADIA;EACE,cAAA;EACA,aAAA;EACA,sBAAA;EACA,gBEhBU;ADeZ;;ADIA;EACE,aAAA;EACA,uBAAA;EACA,eAAA;EACA,cAAA;EACA,YE1Ba;EF2Bb,aE3Ba;EF4Bb,2BEjBgB;ADgBlB;ADGE;EACE,aAAA;EACA,cAAA;EACA,uBAAA;ACDJ;;ADKA;EACE,uBEzBY;ADuBd;ADIE;EACE,2BAAA;ACFJ;;ADMA;EACE,0BEpCe;ADiCjB;;ADOE;EAAI,WE9CO;AD2Cb;ADIE;EAAI,YE9CQ;AD6Cd;ADEE;EAAI,UExCM;ADyCZ;ADAE;EAAI,eE9CW;ADiDjB;ADFE;EAAI,YE9CQ;ADmDd;;ADFA;EACE,eAAA;EACA,kBAAA;ACKF;;ADFA;;EAEE,aAAA;EACA,uBAAA;EACA,iBAAA;ACKF;;ADFA;EACE,qBE1DU;AD+DZ;;ADFA;EACE,YE1Ea;EF2Eb,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,iBAAA;EACA,mBAAA;EACA,aAAA;EACA,0BEhEY;EFiEZ,gBAAA;ACKF;;ADFA;EACE,YAAA;EACA,iBAAA;EACA,iBAAA;EACA,qBAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;EACA,2BEpFgB;EFqFhB,0BE7EY;ADkFd;ADHE;EACE,mBAAA;ACKJ;ADFE;EACE,wBEvFW;EFwFX,uBEpFkB;ADwFtB;;ADAA;EACE,uBE9FY;ADiGd;ADDE;EACE,uBEzGU;EF0GV,uBE7FkB;ADgGtB;;ADCA;EACE,iBAAA;EACA,iBEhHY;EFiHZ,uBAAA;ACEF;;ADCA;EACE,aAAA;EACA,SAAA;EACA,qBAAA;ACEF;;ADCA;EACE,eAAA;EACA,aAAA;EACA,8BAAA;EACA,6BAAA;EACA,WAAA;EACA,eAAA;ACEF;;ADCA;EACE,YAAA;EACA,0BAAA;ACEF;;ADCA;EACE,aAAA;ACEF;;ADCA;EACE,aAAA;EACA,uBAAA;EACA,sBAAA;EACA,SAAA;ACEF;;ADCA;EACE,eAAA;EACA,YAAA;EACA,iBAAA;EACA,0BE3IY;EF4IZ,eAAA;EACA,YAAA;EACA,iBAAA;ACEF;;ADCA;EACE,uBAAA;EACA,YAAA;ACEF;ADAE;EACE,sBAAA;EACA,uBEtJkB;ADwJtB;;ADEA;EACE,0BEnKe;EFoKf,YAAA;ACCF;ADCE;EACE,sBAAA;EACA,uBEhKkB;ADiKtB;;ADGA;EACE,uBExKY;ADwKd;ADEE;EACE,2BE1Kc;EF2Kd,uBEzKkB;ADyKtB;;ADIA;EACE,uBEnLY;ADkLd;ADGE;EACE,uBEpLU;EFqLV,uBElLkB;ADiLtB;;ADKA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;ACFF;;ADKA;EACE,eAAA;EACA,gBAAA;EACA,gBAAA;ACFF;;ADKA;EACE,iBAAA;ACFF;;ADKA;EACE,YAAA;ACFF;;ADKA;EACE,aAAA;EACA,sBAAA;ACFF;;ADKA;EACE,eAAA;EACA,0BElNY;ADgNd;;ADKA;;EAEE,aAAA;EACA,uBAAA;EACA,SAAA;ACFF;;ADKA;EACE,2BErOgB;EFsOhB,WAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;ACFF;ADIE;EACE,wBE1OW;EF2OX,uBEvOkB;ADqOtB;ADKE;EACE,mBAAA;ACHJ;;ADOA;EACE,uBErPY;ADiPd;ADME;EACE,uBEhQU;EFiQV,uBEpPkB;ADgPtB;;ADQA;EACE,qBAAA;ACLF;;ADUE;EACE,iBAAA;EACA,0BEjQU;AD0Pd;ADUE;;EAEE,wBAAA;EACA,SAAA;ACRJ;;ADYA;EACE,qBAAA;EACA,kBAAA;ACTF;;ADYA;EACE,wBEpRa;EFqRb,WAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;ACTF;ADWE;EACE,qBEhSQ;EFiSR,uBE3RkB;ADkRtB;ADYE;EACE,mBAAA;ACVJ;;ADcA;EACE,uBEzSY;AD8Rd;ADaE;EACE,uBEpTU;EFqTV,uBExSkB;AD6RtB;;ADeA;EACE,YE9TY;EF+TZ,aE/TY;ADmTd;;ADeA;EACE,YElUU;EFmUV,aEnUU;ADuTZ;ADcE;EACE,iBAAA;EACA,WAAA;EACA,YAAA;ACZJ;;ADgBA;EACE,uBE1UY;EF2UZ,eAAA;EACA,YAAA;EACA,mBAAA;ACbF;ADeE;EACE,qBEzUQ;EF0UR,uBEpUkB;ADuTtB;;ADiBA;EACE,qBE/UU;ADiUZ;ADgBE;EACE,uBEzVU;EF0VV,uBE7UkB;AD+TtB","sourcesContent":["@import \"var\";\r\n\r\nhtml {\r\n  font-size: 10px;\r\n}\r\n\r\nbody {\r\n  background-color: ghostwhite;\r\n}\r\n\r\n.body-dark {\r\n  background-color: black;\r\n}\r\n\r\n.game-wrapper {\r\n  margin: 0 auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: $hard-size;\r\n}\r\n\r\n.game-board {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  margin: 0 auto;\r\n  width: $default-size;\r\n  height: $default-size;\r\n  background-color: $color-lightgray;\r\n\r\n  div {\r\n    width: 4.8rem;\r\n    height: 4.8rem;\r\n    border: 1px solid $color-white;\r\n  }\r\n}\r\n\r\n.game-board-dark {\r\n  background-color: $color-white;\r\n\r\n  div {\r\n    border: 1px solid $color-lightgray;\r\n  }\r\n}\r\n\r\n.bar-clicked {\r\n  background-color: $color-darkgray;\r\n}\r\n\r\n.nearby-bombs {\r\n  &1 {color: $color-blue;}\r\n  &2 {color: $color-green;}\r\n  &3 {color: $color-red;}\r\n  &4 {color: $color-darkblue;}\r\n  &5 {color: $color-brown;}\r\n}\r\n\r\n.nb {\r\n  font-size: 4rem;\r\n  text-align: center;\r\n}\r\n\r\n.red-flag,\r\n.bomb {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: 3.2rem;\r\n}\r\n\r\n.bomb {\r\n  background-color: $color-red;\r\n}\r\n\r\n.game-information {\r\n  width: $default-size;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  font-size: 1.8rem;\r\n  margin: 0 auto 1rem;\r\n  row-gap: 1rem;\r\n  font-family: $font-family;\r\n  line-height: 1.5;\r\n}\r\n\r\n.button {\r\n  width: 22rem;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  border-radius: 1.5rem;\r\n  border-style: none;\r\n  padding: 0.8rem;\r\n  cursor: pointer;\r\n  background-color: $color-cadetblue;\r\n  font-family: $font-family;\r\n\r\n  &[disabled] {\r\n    cursor: not-allowed;\r\n  }\r\n\r\n  &:hover:not([disabled]) {\r\n    background-color: $color-orange;\r\n    transition: $transition-ease-out;\r\n  }\r\n}\r\n\r\n.button-dark {\r\n  background-color: $color-white;\r\n\r\n  &:hover:not([disabled]) {\r\n    background-color: $color-green;\r\n    transition: $transition-ease-out;\r\n  }\r\n}\r\n\r\n.guessed-bomb {\r\n  font-size: 3.2rem;\r\n  background: $color-green;\r\n  align-items: flex-start;\r\n}\r\n\r\n.buttons-wrapper {\r\n  display: flex;\r\n  gap: 1rem;\r\n  border-radius: 1.5rem;\r\n}\r\n\r\n.game-information-wrapper {\r\n  padding: 0.5rem;\r\n  display: flex;\r\n  border: 0.5rem solid $color-cadetblue;\r\n  justify-content: space-around;\r\n  gap: 0.5rem;\r\n  cursor: default;\r\n}\r\n\r\n.game-information-wrapper-dark {\r\n  color: white;\r\n  border: 0.5rem solid $color-white;\r\n}\r\n\r\n.pause {\r\n  display: none;\r\n}\r\n\r\n.theme-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-bottom: 0.5rem;\r\n  gap: 1rem;\r\n}\r\n\r\n.theme-button {\r\n  padding: 0.5rem;\r\n  width: 15rem;\r\n  font-size: 1.7rem;\r\n  font-family: $font-family;\r\n  cursor: pointer;\r\n  border: none;\r\n  font-weight: bold;\r\n}\r\n\r\n.dark-theme {\r\n  background-color: black;\r\n  color: white;\r\n\r\n  &:hover {\r\n    background-color: gray;\r\n    transition: $transition-ease-out;\r\n  }\r\n}\r\n\r\n.dark-theme-d {\r\n  background-color: $color-darkgray;\r\n  color: white;\r\n\r\n  &:hover {\r\n    background-color: gray;\r\n    transition: $transition-ease-out;\r\n  }\r\n}\r\n\r\n.light-theme {\r\n  background-color: $color-wheat;\r\n\r\n  &:hover {\r\n    background-color: $color-burlywood;\r\n    transition: $transition-ease-out;\r\n  }\r\n}\r\n\r\n.light-theme-d {\r\n  background-color: $color-white;\r\n\r\n  &:hover {\r\n    background-color: $color-wheat;\r\n    transition: $transition-ease-out;\r\n  }\r\n}\r\n\r\n.score-table {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.score-table-header {\r\n  font-size: 3rem;\r\n  margin-top: 1rem;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.score-table-description {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.score-table-dark {\r\n  color: white;\r\n}\r\n\r\n.win-scores-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.win-score {\r\n  font-size: 2rem;\r\n  font-family: $font-family;\r\n}\r\n\r\n.mines-settings-wrapper,\r\n.field-buttons-wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.mines-settings-button {\r\n  background-color: $color-cadetblue;\r\n  width: 8rem;\r\n  font-size: 1.7rem;\r\n  cursor: pointer;\r\n  border: none;\r\n  font-weight: bold;\r\n  border-radius: 2rem;\r\n  padding: 0.3rem;\r\n\r\n  &:hover:not([disabled]) {\r\n    background-color: $color-orange;\r\n    transition: $transition-ease-out;\r\n  }\r\n\r\n  &[disabled] {\r\n    cursor: not-allowed;\r\n  }\r\n}\r\n\r\n.mines-settings-button-dark {\r\n  background-color: $color-white;\r\n\r\n  &:hover:not([disabled]) {\r\n    background-color: $color-green;\r\n    transition: $transition-ease-out;\r\n  }\r\n}\r\n\r\n.invalid-input {\r\n  border: 1px solid $color-red;\r\n}\r\n\r\n.mines-settings-input {\r\n\r\n  &::placeholder {\r\n    font-size: 1.1rem;\r\n    font-family: $font-family;\r\n  }\r\n\r\n  &::-webkit-inner-spin-button,\r\n  ::-webkit-outer-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n  }\r\n}\r\n\r\n.field-buttons-wrapper {\r\n  margin-bottom: 0.5rem;\r\n  margin-top: 0.1rem;\r\n}\r\n\r\n.field-button {\r\n  background-color: $color-orange;\r\n  width: 7rem;\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n  border: none;\r\n  font-weight: bold;\r\n  border-radius: 2rem;\r\n  padding: 0.3rem;\r\n\r\n  &:hover:not([disabled]) {\r\n    background-color: $color-red;\r\n    transition: $transition-ease-out;\r\n  }\r\n\r\n  &[disabled] {\r\n    cursor: not-allowed;\r\n  }\r\n}\r\n\r\n.field-button-dark {\r\n  background-color: $color-white;\r\n\r\n  &:hover:not([disabled]) {\r\n    background-color: $color-green;\r\n    transition: $transition-ease-out;\r\n  }\r\n}\r\n\r\n.medium-board-size {\r\n  width: $medium-size;\r\n  height: $medium-size;\r\n}\r\n\r\n.hard-board-size {\r\n  width: $hard-size;\r\n  height: $hard-size;\r\n\r\n  div {\r\n    font-size: 2.2rem;\r\n    width: 3rem;\r\n    height: 3rem;\r\n  }\r\n}\r\n\r\n.game-sound-button {\r\n  background-color: $color-green;\r\n  cursor: pointer;\r\n  border: none;\r\n  border-radius: 2rem;\r\n\r\n  &:hover:not([disabled]) {\r\n    background-color: $color-red;\r\n    transition: $transition-ease-out;\r\n  }\r\n}\r\n\r\n.gs-disabled {\r\n  background-color: $color-red;\r\n\r\n  &:hover:not([disabled]) {\r\n    background-color: $color-green;\r\n    transition: $transition-ease-out;\r\n  }\r\n}","html {\n  font-size: 10px;\n}\n\nbody {\n  background-color: ghostwhite;\n}\n\n.body-dark {\n  background-color: black;\n}\n\n.game-wrapper {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  min-width: 80rem;\n}\n\n.game-board {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  width: 50rem;\n  height: 50rem;\n  background-color: lightgray;\n}\n.game-board div {\n  width: 4.8rem;\n  height: 4.8rem;\n  border: 1px solid white;\n}\n\n.game-board-dark {\n  background-color: white;\n}\n.game-board-dark div {\n  border: 1px solid lightgray;\n}\n\n.bar-clicked {\n  background-color: darkgray;\n}\n\n.nearby-bombs1 {\n  color: blue;\n}\n.nearby-bombs2 {\n  color: green;\n}\n.nearby-bombs3 {\n  color: red;\n}\n.nearby-bombs4 {\n  color: darkblue;\n}\n.nearby-bombs5 {\n  color: brown;\n}\n\n.nb {\n  font-size: 4rem;\n  text-align: center;\n}\n\n.red-flag,\n.bomb {\n  display: flex;\n  justify-content: center;\n  font-size: 3.2rem;\n}\n\n.bomb {\n  background-color: red;\n}\n\n.game-information {\n  width: 50rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 1.8rem;\n  margin: 0 auto 1rem;\n  row-gap: 1rem;\n  font-family: Tahoma, serif;\n  line-height: 1.5;\n}\n\n.button {\n  width: 22rem;\n  font-size: 1.5rem;\n  font-weight: bold;\n  border-radius: 1.5rem;\n  border-style: none;\n  padding: 0.8rem;\n  cursor: pointer;\n  background-color: cadetblue;\n  font-family: Tahoma, serif;\n}\n.button[disabled] {\n  cursor: not-allowed;\n}\n.button:hover:not([disabled]) {\n  background-color: orange;\n  transition: ease-out 1s;\n}\n\n.button-dark {\n  background-color: white;\n}\n.button-dark:hover:not([disabled]) {\n  background-color: green;\n  transition: ease-out 1s;\n}\n\n.guessed-bomb {\n  font-size: 3.2rem;\n  background: green;\n  align-items: flex-start;\n}\n\n.buttons-wrapper {\n  display: flex;\n  gap: 1rem;\n  border-radius: 1.5rem;\n}\n\n.game-information-wrapper {\n  padding: 0.5rem;\n  display: flex;\n  border: 0.5rem solid cadetblue;\n  justify-content: space-around;\n  gap: 0.5rem;\n  cursor: default;\n}\n\n.game-information-wrapper-dark {\n  color: white;\n  border: 0.5rem solid white;\n}\n\n.pause {\n  display: none;\n}\n\n.theme-wrapper {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 0.5rem;\n  gap: 1rem;\n}\n\n.theme-button {\n  padding: 0.5rem;\n  width: 15rem;\n  font-size: 1.7rem;\n  font-family: Tahoma, serif;\n  cursor: pointer;\n  border: none;\n  font-weight: bold;\n}\n\n.dark-theme {\n  background-color: black;\n  color: white;\n}\n.dark-theme:hover {\n  background-color: gray;\n  transition: ease-out 1s;\n}\n\n.dark-theme-d {\n  background-color: darkgray;\n  color: white;\n}\n.dark-theme-d:hover {\n  background-color: gray;\n  transition: ease-out 1s;\n}\n\n.light-theme {\n  background-color: wheat;\n}\n.light-theme:hover {\n  background-color: burlywood;\n  transition: ease-out 1s;\n}\n\n.light-theme-d {\n  background-color: white;\n}\n.light-theme-d:hover {\n  background-color: wheat;\n  transition: ease-out 1s;\n}\n\n.score-table {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.score-table-header {\n  font-size: 3rem;\n  margin-top: 1rem;\n  margin-bottom: 0;\n}\n\n.score-table-description {\n  font-size: 1.2rem;\n}\n\n.score-table-dark {\n  color: white;\n}\n\n.win-scores-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.win-score {\n  font-size: 2rem;\n  font-family: Tahoma, serif;\n}\n\n.mines-settings-wrapper,\n.field-buttons-wrapper {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.mines-settings-button {\n  background-color: cadetblue;\n  width: 8rem;\n  font-size: 1.7rem;\n  cursor: pointer;\n  border: none;\n  font-weight: bold;\n  border-radius: 2rem;\n  padding: 0.3rem;\n}\n.mines-settings-button:hover:not([disabled]) {\n  background-color: orange;\n  transition: ease-out 1s;\n}\n.mines-settings-button[disabled] {\n  cursor: not-allowed;\n}\n\n.mines-settings-button-dark {\n  background-color: white;\n}\n.mines-settings-button-dark:hover:not([disabled]) {\n  background-color: green;\n  transition: ease-out 1s;\n}\n\n.invalid-input {\n  border: 1px solid red;\n}\n\n.mines-settings-input::placeholder {\n  font-size: 1.1rem;\n  font-family: Tahoma, serif;\n}\n.mines-settings-input::-webkit-inner-spin-button,\n.mines-settings-input ::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.field-buttons-wrapper {\n  margin-bottom: 0.5rem;\n  margin-top: 0.1rem;\n}\n\n.field-button {\n  background-color: orange;\n  width: 7rem;\n  font-size: 1.5rem;\n  cursor: pointer;\n  border: none;\n  font-weight: bold;\n  border-radius: 2rem;\n  padding: 0.3rem;\n}\n.field-button:hover:not([disabled]) {\n  background-color: red;\n  transition: ease-out 1s;\n}\n.field-button[disabled] {\n  cursor: not-allowed;\n}\n\n.field-button-dark {\n  background-color: white;\n}\n.field-button-dark:hover:not([disabled]) {\n  background-color: green;\n  transition: ease-out 1s;\n}\n\n.medium-board-size {\n  width: 75rem;\n  height: 75rem;\n}\n\n.hard-board-size {\n  width: 80rem;\n  height: 80rem;\n}\n.hard-board-size div {\n  font-size: 2.2rem;\n  width: 3rem;\n  height: 3rem;\n}\n\n.game-sound-button {\n  background-color: green;\n  cursor: pointer;\n  border: none;\n  border-radius: 2rem;\n}\n.game-sound-button:hover:not([disabled]) {\n  background-color: red;\n  transition: ease-out 1s;\n}\n\n.gs-disabled {\n  background-color: red;\n}\n.gs-disabled:hover:not([disabled]) {\n  background-color: green;\n  transition: ease-out 1s;\n}","$default-size: 50rem;\r\n$medium-size: 75rem;\r\n$hard-size: 80rem;\r\n\r\n$color-blue: blue;\r\n$color-green: green;\r\n$color-red: red;\r\n$color-darkblue: darkblue;\r\n$color-brown: brown;\r\n$color-cadetblue: cadetblue;\r\n$color-darkgray: darkgray;\r\n$color-lightgray: lightgray;\r\n$color-red: red;\r\n$color-white: white;\r\n$color-orange: orange;\r\n$color-wheat: wheat;\r\n$color-burlywood: burlywood;\r\n$font-family: Tahoma, serif;\r\n$transition-ease-out: ease-out 1s;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!doctype html>\r\n<html lang=\"en\">\r\n<head>\r\n\t<meta charset=\"UTF-8\">\r\n\t<meta name=\"viewport\"\r\n\t\t  content=\"width=device-width, initial-scale=1.0\">\r\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n\t<title>Wilden's Minesweeper</title>\r\n</head>\r\n<body>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/data/difficulties.json":
/*!************************************!*\
  !*** ./src/data/difficulties.json ***!
  \************************************/
/***/ ((module) => {

module.exports = {"easy":{"rows":10,"columns":10},"medium":{"rows":15,"columns":15},"hard":{"rows":25,"columns":25}}

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/data/assets/sounds/game-over.mp3":
/*!**********************************************!*\
  !*** ./src/data/assets/sounds/game-over.mp3 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/864062a6fe50ac85c8a0.mp3";

/***/ }),

/***/ "./src/data/assets/sounds/game-start.mp3":
/*!***********************************************!*\
  !*** ./src/data/assets/sounds/game-start.mp3 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/8ebaf7ada0f153c25666.mp3";

/***/ }),

/***/ "./src/data/assets/sounds/game-win.mp3":
/*!*********************************************!*\
  !*** ./src/data/assets/sounds/game-win.mp3 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/93f2df79eaa65bf79dcd.mp3";

/***/ }),

/***/ "./src/data/assets/sounds/open-a-bar.mp3":
/*!***********************************************!*\
  !*** ./src/data/assets/sounds/open-a-bar.mp3 ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/138944852afc6d6e9f2a.mp3";

/***/ }),

/***/ "./src/data/assets/sounds/set-flag.mp3":
/*!*********************************************!*\
  !*** ./src/data/assets/sounds/set-flag.mp3 ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f9f1bc3d8573b0b56e70.mp3";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.604fb5d8a9f4499260de.js.map