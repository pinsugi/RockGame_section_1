document.addEventListener("DOMContentLoaded", () => {
  function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  }
  function getGameOver() {
    const box = document.createElement("div");
    box.className = "box";

    box.style.border = "1px solid black";
    const button = document.createElement("button");
    button.textContent = "Restart";
    button.className = "butto";

    button.addEventListener("click", () => {
      box.style = "display: none";
      location.reload();
    });
    box.appendChild(button);

    const text = document.createElement("p");
    text.textContent = "YOU WIN 🏆 ";
    text.className = "text";
    box.appendChild(text);

    document.body.appendChild(box);
    document.body.classList.add("blurred");
  }

  const headerone = document.querySelector(".Message1");
  const first = document.querySelector(".headers");
  const Box = document.getElementsByClassName("dashBoard");

  // buttons
  const rockbtn = document.querySelector(".Rock_btn");
  const scissorsbtn = document.querySelector(".Scissors_btn");
  const paperbtn = document.querySelector(".Paper_btn");
  console.log(rockbtn);

  //? marks
  const HumanChoice = document.querySelector(".Player_display");
  const ComputerChoice = document.querySelector(".Computer_display");
  //
  //Para
  const humanget = document.querySelector(".para_player");
  const Computerget = document.querySelector(".para_computer");
  //-----------------------------------------   ---------- -------------- --------------------//
  let humanScore = 0;
  let computerScore = 0;

  const choices = ["✊", "✌️", "🖐"];

  rockbtn.addEventListener("click", () => {
    headerone.textContent = "You choose 🗿";

    HumanChoice.textContent = choices[0];

    const C_cho = getComputerChoice();
    ComputerChoice.textContent = C_cho;
    let scoreUpdated = false;
    let CscoreUpdated = false;

    if (C_cho === choices[1]) {
      first.textContent = " YOU WIN 🥂 ROCK BEATS SCISSORS";
      first.style = "font-size: 25px";
      first.style = "font-weight:bold";

      humanScore++;
      scoreUpdated = true;
    } else if (C_cho === choices[2]) {
      first.textContent = "YOS LOSE! 🤔 PAPER BEATS ROCK";
      first.style = "font-size: 50px";
      first.style = "font-weight bold";
      first.style = "color:red";
      computerScore++;
      CscoreUpdated = true;
    } else {
      first.textContent = "TIE PICK AGAIN 👇";
      first.style = "font-size: 50px";
      first.style = "font-weight bold";
    }
    if (scoreUpdated) {
      humanget.textContent = humanScore;
    }
    if (CscoreUpdated) {
      Computerget.textContent = computerScore;
    }

    if (humanScore === 5 || computerScore === 5) {
      Box.textContent = getGameOver();
      Box.textContent = "YOU BEAT 🏆  AI   ";
      //  if (computerScore > humanScore) {
      //    console.log(
      //      `Computer beat you by ${computerScore} points to ${humanScore}!`
      //    );
      //  } else if (humanScore > computerScore) {
      //    console.log(
      //      `You beat the computer by ${humanScore} points to ${computerScore}!`
      //    );
      //  }
    }
  });

  scissorsbtn.addEventListener("click", () => {
    headerone.textContent = "You choose ✂️";
    HumanChoice.textContent = choices[1];

    const C_cho = getComputerChoice();
    ComputerChoice.textContent = C_cho;
    let scoreUpdated = false;
    let CscoreUpdated = false;

    if (C_cho === choices[2]) {
      first.textContent = "YOU WIN 🤩 SCISSORS BEAT PAPER";
      first.style = "font-size: 50px";
      first.style = "font-weight bold";
      humanScore++;
      scoreUpdated = true;
    } else if (C_cho === choices[0]) {
      first.textContent = "YOU LOSE 🤔 ROCK BEAT SCISSORS";
      first.style = "font-size: 50px";
      first.style = "font-weight bold";
      computerScore++;
      CscoreUpdated = true;
    } else {
      first.textContent = " TIE PICK AGAIN";
      first.style = "font-size: 50px";
      first.style = "font-weight bold";
    }
    if (scoreUpdated) {
      humanget.textContent = humanScore;
    }
    if (CscoreUpdated) {
      Computerget.textContent = computerScore;
    }
    if (humanScore === 5 || computerScore === 5) {
      Box.textContent = getGameOver();
    }
  });
  paperbtn.addEventListener("click", () => {
    headerone.textContent = "You choose 📜";
    HumanChoice.textContent = choices[2];
    const C_cho = getComputerChoice();
    ComputerChoice.textContent = C_cho;

    let scoreUpdated = false;
    let CscoreUpdated = false;

    if (C_cho === choices[0]) {
      first.textContent = "YOU WIN 🤩 PAPER BEATS ROCK";
      first.style = "font-size: 50px";
      first.style = "font-weight bold";
      humanScore++;
      scoreUpdated = true;
    } else if (C_cho === choices[1]) {
      first.textContent = "YOU LOSE 🤔 SCISSORS BEATS PAPER ";
      first.style = "font-size: 50px";
      first.style = "font-weight bold";
      computerScore++;
      CscoreUpdated = true;
    } else {
      first.textContent = " TIE PICK AGAIN 🎯 ";
      first.style = "font-size: 28em";
      first.style = "font-weight bold";
    }
    if (scoreUpdated) {
      humanget.textContent = humanScore;
    }
    if (CscoreUpdated) {
      Computerget.textContent = computerScore;
    }
    if (humanScore === 5 || computerScore === 5) {
      Box.textContent = getGameOver();
    }
  });
});
