
function computerPlay() {
    // 1 - rock, 2 - paper, 3 - scissors
    let compTurnRandInt = Math.floor(Math.random() * 4);
    let compTurn;

    switch(compTurnRandInt) {
        case 1:
            compTurn = "rock";
            break;
        case 2:
            compTurn = "paper";
            break;
        default:
            compTurn = "scissors";
    }
    return compTurn;
}

function playRound(playerSelection, computerSelection) {
    const pool = ["rock", "paper", "scissors"];
    const userIdx = pool.indexOf(playerSelection.toLowerCase());
    const compIdx = pool.indexOf(computerSelection);

    if (userIdx == compIdx) {
        console.log("Tie!")
    }
    else if (Math.abs(userIdx - compIdx) == 1) {
        if (userIdx > compIdx) {
            console.log("User Wins!")
        }
        else {
            console.log("Computer Wins!")
        }
    }
    else {
        if (userIdx < compIdx) {
            console.log("User Wins!")
        }
        else {
            console.log("Computer Wins!")
        }
    }
}