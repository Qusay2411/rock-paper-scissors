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
  window.addEventListener("load", () => {
    console.log("The page is fully loaded.");
  });

  const scissors = document.querySelector(".options-scissors");
  const paper = document.querySelector(".options-paper");
  const rock = document.querySelector(".options-rock");
  const result = document.querySelector(".result");
  const scorePlayer = document.querySelector(".score-player");
  const scoreComputer = document.querySelector(".score-computer");
  const winner = document.querySelector(".winner");
  const output = document.querySelector(".output");
  const chosenPlayer = document.querySelector(".question-chosen-player");
  const chosenComputer = document.querySelector(".question-chosen-computer");
  const playAgain = document.querySelector(".again");

  scissors.addEventListener("click", (e) => {
    const computerChoice = getComputerChoice();
    e.target.textContent = "scissors";
    const playerChoice = e.target.textContent;

    chosenPlayer.src = "images/scissors.png";
    chosenComputer.src = `images/${computerChoice}.png`;
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
      setTimeout(() => {
        document
          .querySelectorAll("body >*:not(.winner)")
          .forEach((e) => (e.style.filter = "blur(10px)"));
        output.textContent = "Computer wins!";
        winner.style.display = "block";
        playAgain.addEventListener("click", (e) => {
          chosenComputer.src = "images/questionmark.png";
          chosenPlayer.src = "images/questionmark.png";
          winner.style.display = "none";
          scoreComputer.textContent =
            scoreComputer.textContent.slice(0, -1) + "0";
          scorePlayer.textContent = scorePlayer.textContent.slice(0, -1) + "0";
          document
            .querySelectorAll("body >*:not(.winner)")
            .forEach((e) => (e.style.filter = "blur(0px)"));
        });
      }, 200);
    } else if (scorePlayer.textContent.slice(-1) === "5") {
      setTimeout(() => {
        document
          .querySelectorAll("body >*:not(.winner)")
          .forEach((e) => (e.style.filter = "blur(10px)"));
        output.textContent = "You win!";
        winner.style.display = "block";
        chosenComputer.src = "images/questionmark.png";
        chosenPlayer.src = "images/questionmark.png";
        playAgain.addEventListener("click", (e) => {
          winner.style.display = "none";
          scorePlayer.textContent = scorePlayer.textContent.slice(0, -1) + "0";
          scoreComputer.textContent =
            scoreComputer.textContent.slice(0, -1) + "0";
          document
            .querySelectorAll("body >*:not(.winner)")
            .forEach((e) => (e.style.filter = "blur(0px)"));
        });
      }, 200);
    }
  });

  paper.addEventListener("click", (e) => {
    const computerChoice = getComputerChoice();
    e.target.textContent = "paper";
    const playerChoice = e.target.textContent;
    chosenPlayer.src = "images/paper.png";
    chosenComputer.src = `images/${computerChoice}.png`;
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
      setTimeout(() => {
        document
          .querySelectorAll("body >*:not(.winner)")
          .forEach((e) => (e.style.filter = "blur(10px)"));
        output.textContent = "Computer wins!";
        winner.style.display = "block";
        playAgain.addEventListener("click", (e) => {
          chosenComputer.src = "images/questionmark.png";
          chosenPlayer.src = "images/questionmark.png";
          winner.style.display = "none";
          scoreComputer.textContent =
            scoreComputer.textContent.slice(0, -1) + "0";
          scorePlayer.textContent = scorePlayer.textContent.slice(0, -1) + "0";
          document
            .querySelectorAll("body >*:not(.winner)")
            .forEach((e) => (e.style.filter = "blur(0px)"));
        });
      }, 200);
    } else if (scorePlayer.textContent.slice(-1) === "5") {
      setTimeout(() => {
        document
          .querySelectorAll("body >*:not(.winner)")
          .forEach((e) => (e.style.filter = "blur(10px)"));
        output.textContent = "You win!";
        winner.style.display = "block";
        chosenComputer.src = "images/questionmark.png";
        chosenPlayer.src = "images/questionmark.png";
        playAgain.addEventListener("click", (e) => {
          winner.style.display = "none";
          scorePlayer.textContent = scorePlayer.textContent.slice(0, -1) + "0";
          scoreComputer.textContent =
            scoreComputer.textContent.slice(0, -1) + "0";
          document
            .querySelectorAll("body >*:not(.winner)")
            .forEach((e) => (e.style.filter = "blur(0px)"));
        });
      }, 200);
    }
  });

  rock.addEventListener("click", (e) => {
    const computerChoice = getComputerChoice();
    e.target.textContent = "rock";
    const playerChoice = e.target.textContent;
    chosenPlayer.src = "images/rock.png";
    chosenComputer.src = `images/${computerChoice}.png`;
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
      setTimeout(() => {
        document
          .querySelectorAll("body >*:not(.winner)")
          .forEach((e) => (e.style.filter = "blur(10px)"));
        output.textContent = "Computer wins!";
        winner.style.display = "block";
        playAgain.addEventListener("click", (e) => {
          chosenComputer.src = "images/questionmark.png";
          chosenPlayer.src = "images/questionmark.png";
          winner.style.display = "none";
          scoreComputer.textContent =
            scoreComputer.textContent.slice(0, -1) + "0";
          scorePlayer.textContent = scorePlayer.textContent.slice(0, -1) + "0";
          document
            .querySelectorAll("body >*:not(.winner)")
            .forEach((e) => (e.style.filter = "blur(0px)"));
        });
      }, 200);
    } else if (scorePlayer.textContent.slice(-1) === "5") {
      setTimeout(() => {
        document
          .querySelectorAll("body >*:not(.winner)")
          .forEach((e) => (e.style.filter = "blur(10px)"));
        output.textContent = "You win!";
        winner.style.display = "block";
        chosenComputer.src = "images/questionmark.png";
        chosenPlayer.src = "images/questionmark.png";
        playAgain.addEventListener("click", (e) => {
          winner.style.display = "none";
          scorePlayer.textContent = scorePlayer.textContent.slice(0, -1) + "0";
          scoreComputer.textContent =
            scoreComputer.textContent.slice(0, -1) + "0";
          document
            .querySelectorAll("body >*:not(.winner)")
            .forEach((e) => (e.style.filter = "blur(0px)"));
        });
      }, 200);
    }
  });

  // checkScore(playerScore, computerScore);
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
