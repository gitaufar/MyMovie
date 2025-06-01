import React from 'react'

export const PaginationButtonInActive = ({ onClick = () => {}, text }) => {
    return (
        <button
            onClick={onClick}
            className='flex flex-row gap-2 bg-[#54545C] text-[#B3B3B3] border border-[#B3B3B3] px-4 py-2 rounded-md items-center cursor-default'>
            <p className='pointer-events-none'>{text}</p>
        </button>
    )
}
