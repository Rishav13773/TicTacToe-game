import React from 'react'
import Board from './components/Board'
import Square from './components/Square'
import './style.scss'
import { useState } from 'react'
import { calculateWinner } from './winner'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null)); //initializing an array using array constructor
  const [isXNext, setIsXNext] = useState(true);

  const nextPlayer = isXNext ? 'X' : 'O'
  const winner = calculateWinner(squares) //winner function logic and passing our array as a parameter
  const statusMessage = winner ? `Winner is ${winner}` : `Next player is ${nextPlayer}` //String interpolation

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) { //this condition checking if we already have 'X' or 'O' in our square then will exit the function
      return;
    }

    setSquares((currentSquare) => {
      return currentSquare.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O'
        }

        return squareValue
      })
    })
    setIsXNext(currentIsXNext => !currentIsXNext);
  }
  console.log(winner);

  return (
    <div className='app'>
      <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  )
}

export default App