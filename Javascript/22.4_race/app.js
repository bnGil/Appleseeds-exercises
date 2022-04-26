let player1 = document.querySelector("#player1-race td");
let player2 = document.querySelector("#player2-race td");
player1.parentElement.name = "Player 1";
player2.parentElement.name = "Player 2";

// player 1 - red (key 'r')
window.addEventListener("keyup", (e) => {
  if (e.key === "r") {
    if (checkIfFinish(player1)) {
      resetGame();
    } else {
      player1 = moveCar(player1);
    }
  }
});

// player 2 - yellow (key 'y')
window.addEventListener("keyup", (e) => {
  if (e.key === "y") {
    if (checkIfFinish(player2)) {
      resetGame();
    } else {
      player2 = moveCar(player2);
    }
  }
});

function moveCar(player) {
  player.classList.remove("active");
  player.nextElementSibling.classList.add("active");
  return player.nextElementSibling;
}

function checkIfFinish(player) {
  if (player.classList.contains("finish")) {
    confirm(`The winner is ${player.parentElement.name}
Press OK to play again`);
    return true;
  }
  return false;
}

function resetGame() {
  player1.classList.remove("active");
  player2.classList.remove("active");
  player1 = document.querySelector("#player1-race td");
  player2 = document.querySelector("#player2-race td");
  player1.classList.add("active");
  player2.classList.add("active");
}
