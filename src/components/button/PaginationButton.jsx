import React from 'react'

export const PaginationButton = ({ onClick, text }) => {
    return (
        <button
            onClick={onClick}
            className='flex flex-row gap-2 bg-secondary text-primary px-4 py-2 rounded-md items-center cursor-pointer hover:bg-primary hover:text-secondary transition-all'>
            <p className='pointer-events-none'>{text}</p>
        </button>
    )
}
