import React from 'react'

const Square = ({ value, onClick }) => {
    return (
        <button onClick={onClick} type='button' className='square'>{value}</button>
    )
}

export default Square