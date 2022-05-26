let playerScore = 0; 
let computerScore = 0;
const roundText = document.querySelector('.round-info');
const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');
const playerSign = document.getElementById('player-sign');
const computerSign = document.getElementById('computer-sign');


function computerPlay() {
    // 1 - rock, 2 - paper, 3 - scissors
    let compTurnRandInt = Math.floor(Math.random() * 3) + 1;
    let compTurn;

    switch(compTurnRandInt) {
        case 1:
            compTurn = "Rock";
            break;
        case 2:
            compTurn = "Paper";
            break;
        default:
            compTurn = "Scissors";
    }
    return compTurn;
}

function playRound(playerSelection, computerSelection) {
    const pool = ["Rock", "Paper", "Scissors"];
    const userIdx = pool.indexOf(playerSelection);
    const compIdx = pool.indexOf(computerSelection);
    let result;

    if (userIdx == compIdx) {
        result = 'tie';
    }
    else if (Math.abs(userIdx - compIdx) == 1) {
        if (userIdx > compIdx) {
            result = 'player';
            playerScore++;
        }
        else {
            result = 'computer';
            computerScore++;
        }
    }
    else {
        if (userIdx < compIdx) {
            result = 'player';
            playerScore++;
        }
        else {
            result = 'computer';
            computerScore++;
        }
    }
    console.log(result);
    updateScoreBoard(playerSelection, computerSelection);

    return;
}

function updateScoreBoard(playerSelection, computerSelection) {

    updateSign(playerSelection, playerSign);
    updateSign(computerSelection, computerSign);

    playerScoreText.textContent = `Player: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;



    // scoreboardhelper func
}

function updateSign(selectedSign, fieldToUpdate) {

    switch (selectedSign) {
        case 'Rock':
            fieldToUpdate.textContent = '✊';
            return;
        case 'Paper':
            fieldToUpdate.textContent = '✋';
            return;
        default:
            fieldToUpdate.textContent = '✌️';
            return;
    };
}

function gameOverCheck() {
    if (!(playerScore === 5 || computerScore === 5)) {
        return;
    }
    resetGamePopUp();
}

const selectionPool = document.querySelectorAll('.player-selection');
// console.log(playPool);

selectionPool.forEach(choice => {
    choice.addEventListener("click", function(){
        let computerSelection = computerPlay();
        let playerSelection, result, winnerText;
        if (choice.classList.contains('rock')) {
            playerSelection = 'Rock';
        }
        else if (choice.classList.contains('paper')) {
            playerSelection = 'Paper';
        }
        else {
            playerSelection = 'Scissors';
        };

        playRound(playerSelection, computerSelection);
        gameOverCheck();
    });
});


// game();