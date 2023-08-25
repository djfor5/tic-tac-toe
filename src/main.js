import "./style.css";

function render(arr) {
  const tiles = document.querySelectorAll(".tile p");
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].textContent = arr[i];
  }
}

const Gameboard = {
  gameboard: [null, null, null, null, null, null, null, null, null],
};

function Player(name, playerSymbol) {
  return { name, playerSymbol };
}

const player1 = Player("Player 1", "X");
const player2 = Player("Player 2", "O");

render(Gameboard.gameboard); // render initial blank board

const gameplay = (() => {
  let turnCount = 0;
  let currentPlayer;
  let playerToggle;
  let index1;
  let index2;
  let index3;
  let index;
  let isOngoing = true;

  const switchPlayer = (firstPlayer, secondPlayer) => {
    if (turnCount % 2 === 0) {
      turnCount++;
      currentPlayer = firstPlayer.playerSymbol;
      playerToggle = "A";
    } else if (turnCount % 2 !== 0) {
      turnCount++;
      currentPlayer = secondPlayer.playerSymbol;
      playerToggle = "B";
    }
    return { currentPlayer, playerToggle };
  };

  const checkForWinner = (arr) => {
    for (let r = 1; r <= 3; r++) { // rows numbered from 1 to 3 (left to right)
      for (let c = 1; c <= 3; c++) { // columns numbered from 1 to 3 (top to bottom)
        const isLastColumn = (c === 3);
        const isLastRow = (r === 3);

        const abc = arr[3 * r + c - 4] !== null; // clicked tile must not be null
        const bcd = arr[3 * r + c - 4] === arr[3 * r + (c - 1) - 4]; // compare adjacent columns
        const cde = arr[3 * r + c - 4] === arr[3 * r + (c - 2) - 4]; // compare columns, gap between

        const def = arr[3 * r + c - 4] === arr[3 * (r - 1) + c - 4]; // compare adjacent rows
        const efg = arr[3 * r + c - 4] === arr[3 * (r - 2) + c - 4]; // compare rows, gap between

        const fgh = arr[3 * r + c - 4] === arr[3 * (r - 1) + (c - 1) - 4]; // compare diagonal
        const ghi = arr[3 * r + c - 4] === arr[3 * (r - 2) + (c - 2) - 4]; // compare diagonal, gap

        const hij = arr[3 * r + (c - 2) - 4] === arr[3 * (r - 1) + (c - 1) - 4]; // compare diagonal
        const ijk = arr[3 * r + (c - 2) - 4] === arr[3 * (r - 2) + c - 4]; // compare diagonal, gap

        const jkl = arr[3 * r + (c - 2) - 4] !== null; // prevent glitch win clicking bottom right

        const rowAllSame = abc && bcd && cde;
        const columnAllSame = abc && def && efg;
        const topLeftToBottomRightAllSame = abc && fgh && ghi;
        const bottomLeftToTopRightAllSame = abc && hij && ijk && jkl;

        const rowWinner = isLastColumn && rowAllSame;
        const columnWinner = isLastRow && columnAllSame;
        const diagonalForwardWinner = (isLastRow && isLastColumn) && bottomLeftToTopRightAllSame;
        const diagonalBackwardWinner = (isLastRow && isLastColumn) && topLeftToBottomRightAllSame;

        if (rowWinner) { // check rows for winner
          isOngoing = false;
        } else if (columnWinner) { // check columns for winner
          isOngoing = false;
        } else if (diagonalForwardWinner) { // check diagonal for winner
          isOngoing = false;
        } else if (diagonalBackwardWinner) { // check diagonal for winner
          isOngoing = false;
        }
      }
    }
    return { isOngoing };
  };

  const updateWinnerIndex = (arr) => {
    for (let r = 1; r <= 3; r++) { // rows numbered from 1 to 3 (left to right)
      for (let c = 1; c <= 3; c++) { // columns numbered from 1 to 3 (top to bottom)
        const isLastColumn = (c === 3);
        const isLastRow = (r === 3);

        const abc = arr[3 * r + c - 4] !== null; // clicked tile must not be null
        const bcd = arr[3 * r + c - 4] === arr[3 * r + (c - 1) - 4]; // compare adjacent columns
        const cde = arr[3 * r + c - 4] === arr[3 * r + (c - 2) - 4]; // compare columns, gap between

        const def = arr[3 * r + c - 4] === arr[3 * (r - 1) + c - 4]; // compare adjacent rows
        const efg = arr[3 * r + c - 4] === arr[3 * (r - 2) + c - 4]; // compare rows, gap between

        const fgh = arr[3 * r + c - 4] === arr[3 * (r - 1) + (c - 1) - 4]; // compare diagonal
        const ghi = arr[3 * r + c - 4] === arr[3 * (r - 2) + (c - 2) - 4]; // compare diagonal, gap

        const hij = arr[3 * r + (c - 2) - 4] === arr[3 * (r - 1) + (c - 1) - 4]; // compare diagonal
        const ijk = arr[3 * r + (c - 2) - 4] === arr[3 * (r - 2) + c - 4]; // compare diagonal, gap

        const rowAllSame = abc && bcd && cde;
        const columnAllSame = abc && def && efg;
        const topLeftToBottomRightAllSame = abc && fgh && ghi;
        const bottomLeftToTopRightAllSame = abc && hij && ijk;

        const rowWinner = isLastColumn && rowAllSame;
        const columnWinner = isLastRow && columnAllSame;
        const diagonalForwardWinner = (isLastRow && isLastColumn) && bottomLeftToTopRightAllSame;
        const diagonalBackwardWinner = (isLastRow && isLastColumn) && topLeftToBottomRightAllSame;

        if (rowWinner) { // get index of winning row
          index1 = 3 * r + (c - 2) - 4;
          index2 = 3 * r + (c - 1) - 4;
          index3 = 3 * r + c - 4;
        } else if (columnWinner) { // get index of winning column
          index1 = 3 * (r - 2) + c - 4;
          index2 = 3 * (r - 1) + c - 4;
          index3 = 3 * r + c - 4;
        } else if (diagonalForwardWinner) { // get winner diagonal index (bottom left to top right)
          index1 = 3 * (r - 2) + c - 4;
          index2 = 3 * (r - 1) + (c - 1) - 4;
          index3 = 3 * r + (c - 2) - 4;
        } else if (diagonalBackwardWinner) { // get winner diagonal index (top left to bottom right)
          index1 = 3 * (r - 2) + (c - 2) - 4;
          index2 = 3 * (r - 1) + (c - 1) - 4;
          index3 = 3 * r + c - 4;
        }
      }
    }
    index = { index1, index2, index3 };
    return { index };
  };

  return { switchPlayer, checkForWinner, updateWinnerIndex };
})();

const tiles = document.querySelectorAll(".tile");
tiles.forEach((tile) => {
  tile.addEventListener("click", (event) => {
    let checkGameState = gameplay.checkForWinner(Gameboard.gameboard);
    if (!checkGameState.isOngoing) {
      console.log("Game over. Tile click invalid. Reset game to start over.");
      return; // prevent clicking on tile if game already won
    }

    const tileId = event.target.id;
    if (Gameboard.gameboard[tileId] !== null) return; // prevent clicking on tile non-null
    const playerSwitch = gameplay.switchPlayer(player1, player2);
    Gameboard.gameboard[tileId] = playerSwitch.currentPlayer;

    if (playerSwitch.playerToggle === "A") {
      tile.classList.add("playerA");
    } else if (playerSwitch.playerToggle === "B") {
      tile.classList.add("playerB");
    }
    render(Gameboard.gameboard);

    checkGameState = gameplay.checkForWinner(Gameboard.gameboard);
    if (!checkGameState.isOngoing) {
      const updateWinner = gameplay.updateWinnerIndex(Gameboard.gameboard);
      // tile1
      document.getElementById(`${updateWinner.index.index1}`).classList.add("winner");
      // tile2
      document.getElementById(`${updateWinner.index.index2}`).classList.add("winner");
      // tile3
      document.getElementById(`${updateWinner.index.index3}`).classList.add("winner");
    }
  });
});
