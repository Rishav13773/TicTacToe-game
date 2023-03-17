import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null)); //initializing an array using array constructor
    const [isXNext, setIsXNext] = useState(true);
    console.log(squares)

    const handleSquareClick = clickedPosition => {
        if (squares[clickedPosition]) { //this condition checking if we already have 'X' or 'O' in our square then will exit the function
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

    const renderSquare = position => { //created this function for to make code more readable
        return (
            <Square value={squares[position]} onClick={() => handleSquareClick(position)} />
        )
    };

    return (
        <div className='board'>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}

            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}

            </div>
        </div>
    )
}

export default Board