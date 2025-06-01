import React from 'react'

export const MovieListError = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <h1 className='text-2xl text-red-400'>Failed get data! check your internet connection</h1>
    </div>
  )
}
