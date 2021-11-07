//dev: Azizbek;
//year: 2021;   

window.addEventListener('DOMContentLoaded', () => {

    const choices = document.querySelectorAll('.choice'),
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
        const playerChoice = event.target.id
        const computerChoice = getComputerChoice()
        const winner = getWinner(playerChoice, computerChoice)
        showWinner(winner, computerChoice)
    }

    //getComputerChoice
    function getComputerChoice() {
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
    function getWinner(p, c) {
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
    function showWinner(winner, computerChoice) {
        if (winner === 'player') {
            scoreBoard.player++
                result.innerHTML = `
            <h1 class="text-win">You win</h1>
            <p>Computer choice <strong>${computerChoice})</strong></p>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        `
        } else if (winner === 'computer') {
            scoreBoard.computer++
                result.innerHTML = `
            <h1 class="text-lose">You lose</h1>
            <p>Computer choice <strong>${computerChoice}</strong></p>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        `
        } else {
            result.innerHTML = `
            <h1>It's a draw</h1>
            <p>Computer choice <strong>${computerChoice}</strong></p>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        `
        }

        score.innerHTML = `
        <p>Player: ${scoreBoard.player}</p>
        <p>Computer: ${scoreBoard.computer}</p>
    `

        modal.style.display = 'block'
    }

    function restartGame() {
        scoreBoard.player = 0
        scoreBoard.computer = 0
        score.innerHTML = `
        <p>Player: ${scoreBoard.player}</p>
        <p>Computer: ${scoreBoard.computer}</p>    
    `
    }

    function clearModal(event) {
        if (event.target == modal) {
            modal.style.display = 'none'
        }
    }

    // event listener
    choices.forEach(choice => choice.addEventListener('click', play))
    window.addEventListener('click', clearModal)
    restart.addEventListener('click', restartGame)

})
