function gameBoard() {
  let board = Array.from(Array(9).keys());

  const winningCombos = [
    // Rows   
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6]
  ];

  const getGameBoard = () => board;

  const getGameBoardIndex = (i) => board[i];

  function setGameBoard(i, player) {
    player == 1 ? board[i] = "X" : board[i] = "O";
    console.log(board);
  }

  function findEmptySpace() {
    let emptySpaces = board.filter(Number);
    if (emptySpaces.length == 0) {
      console.log("empty");
      return null;
    }
    else {
      let randomIndex = Math.floor(Math.random() * emptySpaces.length);
      return emptySpaces[randomIndex];
    }

  }
  function checkWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
      const [a, b, c] = winningCombos[i];
      if (board[a] === board[b] && board[b] === board[c] && board[c] === board[a]) {

        return board[a];
      }
    }
  }

  function clearBoard() {
    board = Array.from(Array(9).keys());
  }
  return {
    getGameBoard,
    getGameBoardIndex,
    setGameBoard,
    findEmptySpace,
    clearBoard,
    checkWinner
  }
}
function createPlayer(playerName, playerToken) {
  return {
    playerName: playerName,
    playerToken: playerToken
  }
}

function gameController() {
  const playerOne = createPlayer(1, "X");
  const playerTwo = createPlayer(2, "O");
  let gameMode = "";
  let activePlayer = playerOne;

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === playerOne ? playerTwo : playerOne
  };

  const setActivePlayer = () => activePlayer = playerOne;
  const getActivePlayer = () => activePlayer;

  const setGameMode = (option) => {
    gameMode = option;
  };

  let getGameMode = () => gameMode;

  return {
    getActivePlayer,
    setActivePlayer,
    switchPlayerTurn,
    getGameMode,
    setGameMode
  };
}
function screenController() {
  const game = gameController();
  const board = gameBoard();
  const cell = document.querySelectorAll("button.cell");
  const options = document.querySelectorAll("button.options");
  const buttonSection = document.getElementById("button-section");
  const playerSection = document.getElementById("player-section");
  const winnerSection = document.getElementById("winner-section");
  const tieSection = document.getElementById("tie-section");
  let playerCurrent = document.getElementById("player-current");

  let activePlayer = game.getActivePlayer();

  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function () {
      game.setGameMode(options[i].innerHTML);
      updateButtonSection("none");
      updateWinnerSection("none");
      updateTieSection("none");
      updatePlayerSection("block");
      clearBoard();

      startGame();
    })
  }

  const startGame = () => {
    game.setActivePlayer();
    updatePlayerSection("update");
    activePlayer = game.getActivePlayer();
    if (game.getGameMode() !== "") {
      for (let i = 0; i < cell.length; i++) {
        cell[i].classList.add("cell-hover");
        cell[i].addEventListener('click', clickBoard);
      }
    }
  }

  function clickBoard() {

    if (typeof board.getGameBoardIndex(this.id) === 'number') {
      updateBoard(this.id);

      let emptySpace = board.findEmptySpace();

      if (emptySpace == null) {
        updatePlayerSection("none");
        updateTieSection("tie");
        return;
      }
      if (game.getGameMode() == "CPU") {
        board.setGameBoard(emptySpace);
        cell[emptySpace].innerHTML = '<p class="token">O</p>';
      }
      else {
        game.switchPlayerTurn();
        updatePlayerSection("update");
      }

      let winner = board.checkWinner();
      if (winner == "X" || winner == "O") {
        updatePlayerSection("none");
        updateWinnerSection("block", winner, game.getGameMode());
        disableBoard();
        return;
      }

    }
  }

  const updateBoard = (i) => {
    board.setGameBoard(i, activePlayer["playerName"]);
    activePlayer = game.getActivePlayer();
    activePlayer["playerName"] == 1 ?
      cell[i].innerHTML = '<p class="token">X</p>' :
      cell[i].innerHTML = '<p class="token">O</p>';
  }
  //let playersTurn = document.getElementByClass("players-turn");
  const updateButtonSection = (update) => {
    buttonSection.style.display = update;
  }

  const updateTieSection = (update) => {
    if (update == "tie") {
      tieSection.style.display = "block";
      updateButtonSection("flex");
    }
    else {
      tieSection.style.display = "none";
    }

  }

  const updateWinnerSection = (update, winner, gameMode) => {
    if (update == "block") {
      let winnerCurrent = document.getElementById("winner-current");

      if (gameMode == "CPU") {
        winner == "X" ? winnerCurrent.innerHTML = "Player 1" : winnerCurrent.innerHTML = "CPU";
      }
      else {
        winner == "X" ? winnerCurrent.innerHTML = "Player 1" : winnerCurrent.innerHTML = "Player 2";
      }
      winnerSection.style.display = "block";
      updateButtonSection("flex");
    }
    else {
      winnerSection.style.display = "none";
    }
  }

  const updatePlayerSection = (update) => {
    if (update == "block") {
      playerSection.style.display = 'block';
    }
    else if (update == "update") {
      activePlayer = game.getActivePlayer();
      playerCurrent.innerHTML = activePlayer["playerName"];
    }
    else {
      playerSection.style.display = 'none';
    }
  }

  const disableBoard = () => {
    for (let i = 0; i < cell.length; i++) {
      cell[i].removeEventListener('click', clickBoard);
    }
  }

  const clearBoard = () => {
    for (let i = 0; i < cell.length; i++) {
      cell[i].innerHTML = "";
    }
    board.clearBoard();
  }
}


screenController();