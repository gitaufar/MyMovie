import React from 'react'

export const MovieSearchError = ({ error }) => {
    return (
        <div className='flex justify-end w-full z-20 absolute right-0 pr-12 mt-12'>
            <div className='items-center w-60 border border-border rounded-b-md max-h-80 bg-tertiary px-2 py-2 overflow-auto flex flex-col gap-2'>
                <p className='text-base text-red-500'>
                    {error?.message || String(error) || 'Terjadi kesalahan'}
                </p>

            </div>
        </div>
    )
}
