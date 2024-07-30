export function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const choices = ["Rock", "Scissor", "Paper"];

  function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  }

  function getHumanChoice() {
    let userInput = "Enter your move (Rock , Paper or Scissors) (-_-) ";

    return userInput.charAt(0).toUpperCase() + userInput.slice(1);
  }
  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === choices[0] && computerChoice === choices[1]) ||
      (humanChoice === choices[1] && computerChoice === choices[2]) ||
      (humanChoice === choices[2] && computerChoice === choices[0])
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else if (
      (humanChoice === choices[0] && computerChoice === choices[0]) ||
      (humanChoice === choices[1] && computerChoice === choices[1]) ||
      (humanChoice === choices[2] && computerChoice === choices[2])
    ) {
      console.log(`It's a tie! You both chose ${humanChoice}`);
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(`Round ${i + 1}`);
    console.log(`You chose:     ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    playRound(humanChoice, computerChoice);
  }

  if (computerScore > humanScore) {
    console.log(
      `Computer beat you by ${computerScore} points to ${humanScore}!`
    );
  } else if (humanScore > computerScore) {
    console.log(
      `You beat the computer by ${humanScore} points to ${computerScore}!`
    );
  } else {
    console.log(`It's a tie! Both scored ${humanScore}`);
  }
}

playGame();
