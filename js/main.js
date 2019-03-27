document.addEventListener('DOMContentLoaded', function() {
  let turn = 1;
  let gameActive = true;
  const winnerText = document.querySelector('.winner');
  const restartButton = document.querySelector('.restart');
  restartButton.addEventListener('click', restart);

  myBoard = document.querySelector('.board');
  myBoard.childNodes.forEach(function(box) {
    box.addEventListener('click', function(event) {
      if ((box.innerText == "" && (turn % 2 == 1)) && gameActive) {
        box.innerText = 'X';
        box.classList.add('x');
        turn += 1;
        checkWin();
      } else if ((box.innerText == "" && (turn % 2 == 0)) && gameActive) {
        box.innerText = 'O';
        box.classList.add('o');
        turn += 1;
        checkWin();
      }
      if (gameActive && turn > 9) {
        gameActive = false;
        winnerText.innerText = "Tie game!"
      }
    })
  })

  function checkWin() {
    newArray = []
    squares = document.querySelectorAll('.square');
    squares.forEach(function(square, index) {
        newArray.push(square.innerText)
    })
    if (winner(newArray[0],newArray[1],newArray[2])
        || winner(newArray[3],newArray[4],newArray[5])
        || winner(newArray[6],newArray[7],newArray[8])
        || winner(newArray[0],newArray[3],newArray[6])
        || winner(newArray[1],newArray[4],newArray[7])
        || winner(newArray[2],newArray[5],newArray[8])
        || winner(newArray[0],newArray[4],newArray[8])
        || winner(newArray[2],newArray[4],newArray[6])
      ) {
        gameActive = false;
        if (turn % 2 == 0) {
          winnerText.innerText = "X wins!";
          console.log("X wins!");
        } else {
          winnerText.innerText = "O wins!"
          console.log("O wins!")
        }
      }
  }

  function winner(s1, s2, s3) {
    if (s1 == "" || s2 == "" || s3 == "") {
      return false;
    } else if ((s1 == s2) && (s2 == s3)) {
      console.log(s1);
      console.log(s2);
      console.log(s3);
      return true;
    } else {
      return false;
    }
  }

  function restart() {
    turn = 1;
    gameActive = true;
    winnerText.innerText = "";
    squares = document.querySelectorAll('.square');
    squares.forEach(function(square) {
      square.classList.remove('x');
      square.classList.remove('o');
      square.innerText = "";
    })
  }

});
