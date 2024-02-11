let score;

      try {
        score = JSON.parse(localStorage.getItem("score"));
      } catch (e) {}

      if (!score) {
        score = {
          Wins: 0,
          Losses: 0,
          Ties: 0,
        };
      }

      function resetScore() {
        score.Losses = 0;
        score.Ties = 0;
        score.Wins = 0;

        updateScore();
        localStorage.removeItem("score");
      }

      updateScore();

      function playGame(playerMove) {
        const computerMove = pickMove();
        const result = playNextMove(playerMove, computerMove);

        calculateScore(result, score);
        updateScore(result, playerMove, computerMove, score);
      }

      function playNextMove(playerMove, computerMove) {
        let result = "";

        result = playAsScissors(playerMove, computerMove);
        if (result) {
          return result;
        }

        result = playAsPaper(playerMove, computerMove);
        if (result) {
          return result;
        }

        result = playAsRock(playerMove, computerMove);
        if (result) {
          return result;
        }

        return result;
      }

      function playAsScissors(playerMove, computerMove) {
        let result = "";
        if (playerMove === "scissors") {
          if (computerMove === "rock") {
            result = "You lose.";
          } else if (computerMove === "paper") {
            result = "You win.";
          } else if (computerMove === "scissors") {
            result = "Tie.";
          }
        }

        return result;
      }

      function playAsPaper(playerMove, computerMove) {
        let result = "";

        if (playerMove === "paper") {
          if (computerMove === "rock") {
            result = "You win.";
          } else if (computerMove === "paper") {
            result = "Tie.";
          } else if (computerMove === "scissors") {
            result = "You lose.";
          }
        }

        return result;
      }

      function playAsRock(playerMove, computerMove) {
        let result = "";

        if (playerMove === "rock") {
          if (computerMove === "rock") {
            result = "Tie.";
          } else if (computerMove === "paper") {
            result = "You lose.";
          } else if (computerMove === "scissors") {
            result = "You win.";
          }
        }

        return result;
      }

      function calculateScore(result, score) {
        if (result === "You win.") {
          score.Wins += 1;
        } else if (result === "You lose.") {
          score.Losses += 1;
        } else if (result === "Tie.") {
          score.Ties += 1;
        }
      }

      function updateScore(result, playerMove, computerMove, score) {
        if (result) {
          document.querySelector(".show_result").innerHTML = result;
        } else {
          document.querySelector(".show_result").innerHTML =
            "Start the game! Please pick a move.";
        }

        if (score) {
          document.querySelector(
            ".score-info"
          ).innerHTML = `Wins: ${score.Wins}.    Losses: ${score.Losses}.    Ties: ${score.Ties}.`;
          localStorage.setItem("score", JSON.stringify(score));
        } else {
          document.querySelector(".score-info").innerHTML = "";
        }

        if (playerMove && computerMove) {
          document.querySelector(
            ".eachPlayerMove"
          ).innerHTML = `You choosed ${getMoveIcon(
            playerMove
          )} Computer choosed ${getMoveIcon(computerMove)}`;
        } else {
          document.querySelector(".eachPlayerMove").innerHTML = "";
        }
      }

      function getMoveIcon(move) {
        if (move === "rock") {
          return `<img class="result-icon" src="Images/rock-emoji.png" alt="" />`;
        }
        if (move === "scissors") {
          return `<img class="result-icon" src="Images/scissors-emoji.png" alt="" />`;
        }
        if (move === "paper") {
          return `<img class="result-icon" src="Images/paper-emoji.png" alt="" />`;
        }
        return "";
      }

      function pickMove() {
        let computerMove = "";

        const number = Math.random();

        if (number > 0 && number <= 1 / 3) {
          computerMove = "rock";
        } else if (number > 1 / 3 && number < 2 / 3) {
          computerMove = "paper";
        } else if (number > 2 / 3 && number < 1) {
          computerMove = "scissors";
        }
        return computerMove;
      }