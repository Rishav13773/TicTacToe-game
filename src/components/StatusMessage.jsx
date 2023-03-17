import React from 'react'

const StatusMessage = ({ winner, isXNext, squares }) => {
    const nextPlayer = isXNext ? 'X' : 'O';
    const noMovesLeft = squares.every((squareValue) => squareValue !== null); //this will handle, how we can display that the game is draw by checking if all the squares are filled but we dont get any winner

    const renderStatusMessage = () => {
        if (winner) {
            return <div>Winner is <span className={winner === 'X' ? 'text-green' : 'text-orange'}>{winner}</span></div>;
        }
        if (!winner && noMovesLeft) {
            return <div><span className='text-orange'>O</span> and <span className='text-green'>X</span> tied</div>
        }

        if (!winner && !noMovesLeft) {
            return (
                <>
                    <span>Next player is </span> <span className={isXNext ? 'text-green' : 'text-orange'}>{nextPlayer}</span>
                </>
            )
        }

    }
    return (
        <div className='status-message'>
            {renderStatusMessage()}
        </div>
    )
}

export default StatusMessage;