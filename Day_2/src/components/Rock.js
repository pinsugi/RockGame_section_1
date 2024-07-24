function getComputerChoice() {
  let choices = ["Rock", "Scissors", "Paper"];

  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

console.log(getComputerChoice());
