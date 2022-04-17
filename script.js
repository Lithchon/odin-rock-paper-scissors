

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
        result = "Tie!"
    }
    else if (Math.abs(userIdx - compIdx) == 1) {
        if (userIdx > compIdx) {
            result = "You Win! " + playerSelection + " beats " + computerSelection
        }
        else {
            result = "You Lose! " + computerSelection + " beats " + playerSelection
        }
    }
    else {
        if (userIdx < compIdx) {
            result = "You Win! " + playerSelection + " beats " + computerSelection
        }
        else {
            result = "You Lose! " + computerSelection + " beats " + playerSelection
        }
    }

    return result;
}

function game() {
    let playerSelection, result, computerSelection;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter your selection: ")
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();

        computerSelection = computerPlay();

        result = playRound(playerSelection, computerSelection);
        console.log(result);
    }

}

game();