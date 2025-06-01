import React from 'react'

export const MovieCardLoading = () => {
    return (
        <div className='flex flex-col bg-secondary rounded-md gap-3'>
            <img className='h-[80%] w-full' src={`https://placehold.co/500x750?text=Loading...`} alt="" />
            <div className='px-2 flex flex-col gap-2'>
                <div className='flex flex-row justify-between'>
                    <div className='bg-neutral-500 w-28 h-4' />
                    <div className='bg-neutral-500 w-20 h-4' />
                </div>
                <div className='bg-neutral-500 w-50% h-4' />
            </div>
        </div>
    )
}
