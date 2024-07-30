import "../index.css";
import { useState } from "react";
function Rock() {
  const [Weapon, setWeapon] = useState("");
  const [First, setFirst] = useState("");
  const [choice, setChoice] = useState("");
  const [score, setScore] = useState("");
  const [humanScore, setHumanScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [computerChoice, setComputerChoice] = useState("");

  const choices = ["Rock", "Scissor", "Paper"];

  function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * choices.length);
    setComputerChoice(choice[randomChoice]);
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

  function isGameOver() {
    return humanScore === 5 || computerScore === 5;
  }
  // UI //
  const humanSign = document.getElementsByClassName(" humanSign");
  const computerSign = document.getElementsByClassName("computerSign");

  function updateChoices(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();

    switch (humanChoice) {
      case "ROCK":
        humanSign.textContent = "✊";
        break;
      case "PAPER":
        humanSign.textContent = "✋";
        break;
      case "SCISSORS":
        humanSign.textContent = "✌";
        break;
    }
    switch (computerChoice) {
      case choices[0]:
        computerSign.textContent = "✊";
        break;
      case choices[2]:
        computerSign.textContent = "✋";
        break;
      case choices[1]:
        computerSign.textContent = "✌";
        break;
    }
  }

  return (
    <div className="bg-slate-900 min-h-screen ">
      <div>
        <nav className="navbar h-28 w-auto navbar-expand-sm navbar-dark bg-gray-950 text-yellow-300   ">
          <div
            style={{ wordSpacing: "0.5rem" }}
            className=" font-silkscreen text-center pt-7  font-bold text-xl md:text-4xl lg:text-4xl"
          >
            ROCK PAPER SCISSORS
          </div>
        </nav>
        <div className="text-center pt-10 text-gray-300">
          <div className="text-4xl  font-bold">Choose your weapon</div>
          <div className="text-xl pt-2 font-bold">
            First to score 5 points wins the game{" "}
          </div>

          <div className="flex items-center justify-center   pt-12  ">
            <div className="">
              <div
                className="md:text-8xl sm:text-6xl  text-4xl  humanSign"
                onChange={updateChoices}
              >
                ❔
              </div>
              <p className="mt-8 mr-8 text-2xl font-semibold font-jersey10">
                Player : 0
              </p>
            </div>
            <div className="">
              <div className=" md:text-8xl  sm:text-6xl text-4xl computerSign">
                {" "}
                ❔{" "}
              </div>
              <p className="mt-8 ml-10 text-2xl font-semibold">Computer : 0</p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-14   pt-16">
            <button
              className="text-9xl cursor-pointer  h-40  w-40 rounded-xl bg-slate-700 "
              onClick={updateChoices}
            >
              ✊
            </button>
            <button className="text-9xl cursor-pointer  h-40 w-40 pt-2 rounded-xl bg-slate-700">
              ✌️
            </button>
            <button className="text-9xl cursor-pointer  h-40 w-40 pt-2 rounded-xl bg-slate-700">
              🖐
            </button>
          </div>

          <div className="navbar items-end justify-end mt-36 h-10 w-auto navbar-expand-sm navbar-dark text-gray-100   ">
            <div
              style={{ wordSpacing: "0.5rem" }}
              className=" font-serif text-center pt-3  text-xl"
            >
              Copyright &copy; 2024 Kal 💗 <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rock;
