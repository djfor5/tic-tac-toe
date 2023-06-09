function render(arr) {
  const tiles = document.querySelectorAll('.tile p')
  for (i in tiles) {
    tiles[i].textContent = arr[i]
  }
}


let Gameboard = {
  gameboard: [null, null, null, null, null, null, null, null, null]   
}


function Player(name, playerSymbol) {
  return { name, playerSymbol }
}


const player1 = Player('Player 1', 'X')
const player2 = Player('Player 2', 'O')


// console.log(`Current player: ${player1.name} '${player1.playerSymbol}'`)


render(Gameboard.gameboard) // render initial blank board


let gameplay = (() => {
  let turnCount = 0
  let currentPlayer
  let index1
  let index2
  let index3
  let index
  let isOngoing = true


  const switchPlayer = (firstPlayer, secondPlayer) => {
    if (turnCount%2 === 0) {
      turnCount++
      currentPlayer = firstPlayer.playerSymbol
      // console.log(`Total turns taken: ${turnCount}\nNext player: '${secondPlayer.playerSymbol}'\n\n\nCurrent player: ${secondPlayer.name} '${secondPlayer.playerSymbol}'`)
    } else if (turnCount % 2 !== 0) {
      turnCount++
      currentPlayer = secondPlayer.playerSymbol
      // console.log(`Total turns taken: ${turnCount}\nNext player: '${firstPlayer.playerSymbol}'\n\n\nCurrent player: ${firstPlayer.name} '${firstPlayer.playerSymbol}'`)
    }
    return { currentPlayer }
  }


  const checkForWinner = (arr) => {
    for (let r=1; r<=3; r++) { // rows numbered from 1 to 3 (left to right)
      for (let c=1; c<=3; c++) { // columns numbered from 1 to 3 (top to bottom)
        if (r<3 && c<3) continue // continue if there are no complete rows, columns, or diagonals

        const isLastColumn = c===3
        const isLastRow = r===3
        
        const rowAllSame = arr[3*r + c - 4] !== null && arr[3*r + c - 4] === arr[3*r + (c-1) - 4] && arr[3*r + c - 4] === arr[3*r + (c-2) - 4]
        const columnAllSame = arr[3*r + c - 4] !== null && arr[3*r + c - 4] === arr[3*(r-1) + c - 4] && arr[3*r + c - 4] === arr[3*(r-2) + c - 4]
        const topLeftToBottomRightAllSame = arr[3*r + c - 4] !== null && arr[3*r + c - 4] === arr[3*(r-1) + (c-1) - 4] && arr[3*r + c - 4] === arr[3*(r-2) + (c-2) - 4]
        const bottomLeftToTopRightAllSame = arr[3*r + c - 4] !== null && arr[3*r + (c-2) - 4] === arr[3*(r-1) + (c-1) - 4] && arr[3*r + (c-2) - 4] === arr[3*(r-2) + c - 4]
        
        const rowWinner = isLastColumn && rowAllSame
        const columnWinner = isLastRow && columnAllSame
        const diagonalForwardWinner = (isLastRow && isLastColumn) && bottomLeftToTopRightAllSame
        const diagonalBackwardWinner = (isLastRow && isLastColumn) && topLeftToBottomRightAllSame

        if (rowWinner) { // check rows for winner
          isOngoing = false
        } else if (columnWinner) { // check columns for winner
          isOngoing = false
        } else if (diagonalForwardWinner) { // check diagonal for winner
          isOngoing = false
        } else if (diagonalBackwardWinner) { // check diagonal for winner
          isOngoing = false
        }
      }
    }
    return { isOngoing }
  }

  const updateWinnerIndex = (arr) => {
    for (let r=1; r<=3; r++) { // rows numbered from 1 to 3 (left to right)
      for (let c=1; c<=3; c++) { // columns numbered from 1 to 3 (top to bottom)
        if (r<3 && c<3) continue // continue if there are no complete rows, columns, or diagonals

        const isLastColumn = c===3
        const isLastRow = r===3
        
        const rowAllSame = arr[3*r + c - 4] !== null && arr[3*r + c - 4] === arr[3*r + (c-1) - 4] && arr[3*r + c - 4] === arr[3*r + (c-2) - 4]
        const columnAllSame = arr[3*r + c - 4] !== null && arr[3*r + c - 4] === arr[3*(r-1) + c - 4] && arr[3*r + c - 4] === arr[3*(r-2) + c - 4]
        const topLeftToBottomRightAllSame = arr[3*r + c - 4] !== null && arr[3*r + c - 4] === arr[3*(r-1) + (c-1) - 4] && arr[3*r + c - 4] === arr[3*(r-2) + (c-2) - 4]
        const bottomLeftToTopRightAllSame = arr[3*r + c - 4] !== null && arr[3*r + (c-2) - 4] === arr[3*(r-1) + (c-1) - 4] && arr[3*r + (c-2) - 4] === arr[3*(r-2) + c - 4]
        
        const rowWinner = isLastColumn && rowAllSame
        const columnWinner = isLastRow && columnAllSame
        const diagonalForwardWinner = (isLastRow && isLastColumn) && bottomLeftToTopRightAllSame
        const diagonalBackwardWinner = (isLastRow && isLastColumn) && topLeftToBottomRightAllSame
        
        if (rowWinner) { // get index of winning row
          index1 = 3*r + (c-2) - 4
          index2 = 3*r + (c-1) - 4
          index3 = 3*r + c - 4
        } else if (columnWinner) { // get index of winning column
          index1 = 3*(r-2) + c - 4
          index2 = 3*(r-1) + c - 4
          index3 = 3*r + c - 4
        } else if (diagonalForwardWinner) { // get index of winning diagonal (bottom left to top right)
          index1 = 3*(r-2) + c - 4
          index2 = 3*(r-1) + (c-1) - 4
          index3 = 3*r + (c-2) - 4
        } else if (diagonalBackwardWinner) { // get index of winning diagonal (top left to bottom right)
          index1 = 3*(r-2) + (c-2) - 4
          index2 = 3*(r-1) + (c-1) - 4
          index3 = 3*r + c - 4
        }
      }
    }
    index = { index1, index2, index3 }
    return { index }
  }

  return { switchPlayer, checkForWinner, updateWinnerIndex }
})()





const tiles = document.querySelectorAll('.tile')

tiles.forEach((tile) => {
  tile.addEventListener('click', (event)=>{

    let checkGameState = gameplay.checkForWinner(Gameboard.gameboard)
    if (!checkGameState.isOngoing) {
      console.log(`isOngoing: ${playable.isOngoing}`)
      return // prevent clicking on tile if game already won
    }

    tileId = event.target.id
    if (Gameboard.gameboard[tileId] !== null) return // prevent clicking on tile if it already has a value (non-null) 
    const playerSwitch = gameplay.switchPlayer(player1, player2)
    Gameboard.gameboard[tileId] = playerSwitch.currentPlayer

    render(Gameboard.gameboard)

    checkGameState = gameplay.checkForWinner(Gameboard.gameboard)
    if (!checkGameState.isOngoing) {
      const updateWinner = gameplay.updateWinnerIndex(Gameboard.gameboard)
      console.log(updateWinner.index)
      return // prevent clicking if game already won
    }

  })
})