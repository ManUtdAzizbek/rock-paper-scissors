    window.addEventListener('DOMContentLoaded', () => {

    const choises = document.querySelectorAll('.choise'),
    score = document.querySelector('#score'),
    modal = document.querySelector('.modal'),
    result = document.querySelector('#result'),
    restart = document.querySelector('#restart'),
    scoreBoard = {
        player: 0,
        computer: 0
    };

//Play game
function play(event) {
    restart.style.display = 'inline-block'
    const playerChoise = event.target.id
    const computerChoise = getComputerChoise()
    const winner = getWinner(playerChoise, computerChoise)
    showWinner(winner, computerChoise)
}

//getComputerChoise
function getComputerChoise () {
    const rand = Math.random()
    if (rand < 0.34) {
        return 'rock'
    } else if (rand <= 0.67) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

//getWinner
function getWinner (p, c) {
    if (p === c) {
        return 'draw'
    } else if (p === 'rock') {
        if (c === 'paper') {
            return 'computer'
        } else {
            return 'player'
        }
    } else if (p === 'paper') {
        if (c === 'scissors') {
            return 'computer'
        } else {
            return 'player'
        }
    } else if (p === 'scissors') {
        if (c === 'rock') {
            return 'computer'
        } else {
            return 'player'
        }
    }
}

//showWinner
function showWinner (winner, computerChoise) {
    if (winner === 'player') {
        scoreBoard.player++
        result.innerHTML = `
            <h1 class="text-win">You win</h1>
            <i class="fas fas-hand-${computerChoise} fa-10x"></i>
            <p>Computer choise <strong>${computerChoise.charArt(0).toUppercase() + computerChoise.slice(1)}</strong></p>
        `
    } else if (winner === 'computer') {
        scoreBoard.computer++
        result.innerHTML = `
            <h1 class="text-lose">You lose</h1>
            <i class="fas fas-hand-${computerChoise} fa-10x"></i>
            <p>Computer choise <strong>${computerChoise.charArt(0).toUppercase() + computerChoise.slice(1)}</strong></p>
        `
    } else {
        result.innerHTML = `
            <h1>It's a draw</h1>
            <i class="fas fas-hand-${computerChoise} fa-10x"></i>
            <p>Computer choise <strong>${computerChoise.charArt(0).toUppercase() + computerChoise.slice(1)}</strong></p>
        `
    }

    score.innerHTML `
        <p>Player: ${scoreBoard.player}</p>
        <p>Computer: ${scoreBoard.computer}</p>
    `

    modal.style.display = 'block'
}

function restartGame () {
    scoreBoard.player = 0
    scoreBoard.computer = 0
    score.innerHTML `
        <p>Player: ${scoreBoard.player}</p>
        <p>Computer: ${scoreBoard.computer}</p>    
    `
}

function clearModal (event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}

// event listener
choises.forEach(choise => choise.addEventListener('click', play))
window.addEventListener('click', clearModal)
restart.addEventListener('click', restartGame)

})
