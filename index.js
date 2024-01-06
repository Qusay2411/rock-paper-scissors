function getComputerChoice() {
  const choices = ["scissors", "rock", "paper"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (isTie(playerSelection, computerSelection)) {
    return `It's a draw. You both chose ${playerSelection}.`;
    // return 0;
  } else if (isPlayerWinner(playerSelection, computerSelection)) {
    // return 1;
    return `You win! Computer chose ${computerSelection}. ${
      playerSelection[0].toUpperCase() + playerSelection.slice(1)
    } beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}`;
  } else {
    // return -1;
    return `You lose! Computer chose ${computerSelection}. ${
      computerSelection[0].toUpperCase() + computerSelection.slice(1)
    } beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;
  }
}

function isTie(player, computer) {
  return player === computer;
}

function isPlayerWinner(player, computer) {
  return (
    (player == "paper" && computer == "rock") ||
    (player == "scissors" && computer == "paper") ||
    (player == "rock" && computer == "scissors")
  );
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  // let i = 0;

  const scissors = document.querySelector(".options-scissors");
  const paper = document.querySelector(".options-paper");
  const rock = document.querySelector(".options-rock");
  const result = document.querySelector(".result");
  const scorePlayer = document.querySelector(".score-player");
  const scoreComputer = document.querySelector(".score-computer");
  const winner = document.querySelector(".winner");

  scissors.addEventListener("click", (e) => {
    const computerChoice = getComputerChoice();
    const playerChoice = e.target.textContent;
    if (playRound(playerChoice, computerChoice).includes("win")) {
      result.textContent = playRound(playerChoice, computerChoice);

      scorePlayer.textContent =
        scorePlayer.textContent.slice(0, -1) +
        (Number(scorePlayer.textContent.slice(-1)) + 1).toString();
    } else if (playRound(playerChoice, computerChoice).includes("draw")) {
      result.textContent = playRound(playerChoice, computerChoice);
    } else if (playRound(playerChoice, computerChoice).includes("lose")) {
      result.textContent = playRound(playerChoice, computerChoice);

      scoreComputer.textContent =
        scoreComputer.textContent.slice(0, -1) +
        (Number(scoreComputer.textContent.slice(-1)) + 1).toString();
    }

    if (scoreComputer.textContent.slice(-1) === "5") {
      winner.textContent = "Computer wins!";
    } else if (scorePlayer.textContent.slice(-1) === "5") {
      winner.textContent = "You win!";
    }
  });

  paper.addEventListener("click", (e) => {
    const computerChoice = getComputerChoice();
    const playerChoice = e.target.textContent;
    if (playRound(playerChoice, computerChoice).includes("win")) {
      result.textContent = playRound(playerChoice, computerChoice);

      scorePlayer.textContent =
        scorePlayer.textContent.slice(0, -1) +
        (Number(scorePlayer.textContent.slice(-1)) + 1).toString();
    } else if (playRound(playerChoice, computerChoice).includes("draw")) {
      result.textContent = playRound(playerChoice, computerChoice);
    } else if (playRound(playerChoice, computerChoice).includes("lose")) {
      result.textContent = playRound(playerChoice, computerChoice);

      scoreComputer.textContent =
        scoreComputer.textContent.slice(0, -1) +
        (Number(scoreComputer.textContent.slice(-1)) + 1).toString();
    }

    if (scoreComputer.textContent.slice(-1) === "5") {
      winner.textContent = "Computer wins!";
    } else if (scorePlayer.textContent.slice(-1) === "5") {
      winner.textContent = "You win!";
    }
  });

  rock.addEventListener("click", (e) => {
    const computerChoice = getComputerChoice();
    const playerChoice = e.target.textContent;
    if (playRound(playerChoice, computerChoice).includes("win")) {
      result.textContent = playRound(playerChoice, computerChoice);

      scorePlayer.textContent =
        scorePlayer.textContent.slice(0, -1) +
        (Number(scorePlayer.textContent.slice(-1)) + 1).toString();
    } else if (playRound(playerChoice, computerChoice).includes("draw")) {
      result.textContent = playRound(playerChoice, computerChoice);
    } else if (playRound(playerChoice, computerChoice).includes("lose")) {
      result.textContent = playRound(playerChoice, computerChoice);

      scoreComputer.textContent =
        scoreComputer.textContent.slice(0, -1) +
        (Number(scoreComputer.textContent.slice(-1)) + 1).toString();
    }

    if (scoreComputer.textContent.slice(-1) === "5") {
      winner.textContent = "Computer wins!";
    } else if (scorePlayer.textContent.slice(-1) === "5") {
      winner.textContent = "You win!";
    }
  });
  // console.log(rock);

  // while(i < 5){
  //     let playerChoice = prompt("Choose rock, paper or scissors");
  //     playerChoice = playerChoice.toLowerCase();

  //     if (playerChoice === 'rock' || playerChoice === 'scissors' || playerChoice === 'paper') {
  //         const computerChoice = getComputerChoice();

  //         console.log(`-------------\nComputer choice: ${computerChoice}\nPlayer choice: ${playerChoice}`);

  //         const round = playRound(playerChoice.toLowerCase(), computerChoice);

  //         if (round.includes('win')){
  //             // console.log("You win");
  //             console.log(round, '\n-------------');
  //             playerScore+=1;
  //             i++;
  //         }
  //         else if (round.includes('draw')){
  //             console.log(round, '\n-------------');
  //             i++;
  //         }
  //         else {
  //             console.log(round, '\n-------------');
  //             computerScore += 1;
  //             i++;
  //         }

  //     }

  // }
  checkScore(playerScore, computerScore);
}
function checkScore(player, computer) {
  if (player > computer) {
    console.log(`The final score is ${player}:${computer}. Player wins!`);
  } else if (player < computer) {
    console.log(`The final score is ${player}:${computer}. Computer wins!`);
  } else {
    console.log(`The final score is ${player}:${computer}. It's a draw!`);
  }
}

game();

// const playerChoice = ['rock', 'paper', 'scissors'];
// const randomPlayerChoice = playerChoice[Math.floor(Math.random() * playerChoice.length)];
// const playerChoice = 'paper';

// console.log("\n", playRound(playerChoice.toLowerCase(), getComputerChoice()));
