let currentGameIndex = 0;
let moveCount = 0;
let games = [];
let timer;
let initialStates = [];
let startTime;

document.addEventListener('DOMContentLoaded', initGame);

async function initGame() {
    try {
        const response = await fetch('gameLightOut.json');
        games = await response.json();
        initialStates = games.map(game => structuredClone(game.initial_state));
        loadGame(currentGameIndex);
    } catch (error) {
        console.error('Error loading game data:', error);
    }

    document.getElementById('newGameButton').addEventListener('click', nextGame);
}

function loadGame(index) {
    const game = games[index];
    renderBoard(game.initial_state);
    document.getElementById('targetSteps').textContent = 11;
    moveCount = 0;
    updateMoveCount();
    resetTimer();
}

function renderBoard(state) {
    const board = document.getElementById('board');
    board.innerHTML = '';
    state.forEach((row, rIndex) => {
        const tr = board.insertRow();
        row.forEach((cell, cIndex) => {
            const td = tr.insertCell();
            td.className = cell ? 'lightOn' : 'lightOff';
            td.addEventListener('click', () => toggle(rIndex, cIndex));
        });
    });
}

function toggle(row, col) {
    const state = games[currentGameIndex].initial_state;
    toggleCell(state, row, col);
    toggleCell(state, row - 1, col);
    toggleCell(state, row + 1, col);
    toggleCell(state, row, col - 1);
    toggleCell(state, row, col + 1);
    moveCount++;
    updateMoveCount();
    if (checkWin(state)) {
        clearInterval(timer);
        if (moveCount <= 11) {
            alert(`Game over! Number of moves: ${moveCount}, congratulations! Reload the page to start a new game`);
        } else {
            alert(`Very good, but it can be better!`);
        }
    }
}

function toggleCell(state, row, col) {
    if (row >= 0 && row < 5 && col >= 0 && col < 5) {
        state[row][col] = 1 - state[row][col];
        const cell = document.getElementById('board').rows[row].cells[col];
        cell.className = state[row][col] ? 'lightOn' : 'lightOff';
    }
}

function checkWin(state) {
    return state.flat().every(cell => cell === 0);
}

function nextGame() {
    currentGameIndex = (currentGameIndex + 1) % games.length;
    loadGame(currentGameIndex);
}

function updateMoveCount() {
    document.getElementById('moves').textContent = moveCount;
}

function resetTimer() {
    clearInterval(timer);
    startTime = Date.now();
    timer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        document.getElementById('timer').textContent = elapsed;
    }, 1000);
}
