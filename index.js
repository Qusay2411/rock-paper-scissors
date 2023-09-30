function getComputerChoice() {
    const choices = ['scissors', 'rock', 'paper'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    playSelection = playerSelection.toLowerCase();

    if (isTie(playerSelection, computerSelection)){
        return "It's a draw";
    }

    else if(isPlayerWinner(playerSelection, computerSelection)){
        return `You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}`
    }

    else {
        return `You lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`
    }
}

function isTie(player, computer) {
    return player === computer;
}

function isPlayerWinner(player, computer){
    return (playerSelection =='paper' && computerSelection == 'rock') || 
    (playerSelection =='scissors' && computerSelection == 'paper') || 
    (playerSelection =='rock' && computerSelection == 'scissors')
}


function game() {

    let playerScore = 0;
    let computerScore = 0;
    // edge cases
    let i = 0;
    while(i < 5){
        let playerChoice = prompt("Choose rock, paper or scissors");
        playerChoice = playerChoice.toLowerCase();


        if (playerChoice === 'rock' || playerChoice === 'scissors' || playerChoice === 'paper') { 
            const computerChoice = getComputerChoice();

            console.log(`-------------\nComputer choice: ${computerChoice}\nPlayer choice: ${playerChoice}`);

            const round = playRound(playerChoice.toLowerCase(), computerChoice);

            if (round.includes('win')){
                // console.log("You win");
                console.log(round, '\n-------------');
                playerScore+=1;
                i++;
            }
            else if (round.includes('draw')){ 
                console.log(round, '\n-------------');
                i++;
            }
            else {
                console.log(round, '\n-------------');
                computerScore += 1;
                i++;
            }

        }

    }
    checkScore(playerScore, computerScore);

}
function checkScore(player, computer) {
    if (player > computer) {
        console.log(`The final score is ${player}:${computer}. Player wins!`);
    }
    else if (player < computer) {
        console.log(`The final score is ${player}:${computer}. Computer wins!`);
    }
    else {
        console.log(`The final score is ${player}:${computer}. It's a draw!`);

    }
}

game();








// const playerChoice = ['rock', 'paper', 'scissors'];
// const randomPlayerChoice = playerChoice[Math.floor(Math.random() * playerChoice.length)];
// const playerChoice = 'paper';


// console.log("\n", playRound(playerChoice.toLowerCase(), getComputerChoice()));
