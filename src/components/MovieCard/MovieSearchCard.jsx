import React from 'react'
import { BASE_URL_IMAGE } from '../../api/api'

export const MovieSearchCard = ({ movie }) => {
    return (
        <div className='w-full flex flex-row items-center gap-2'>
            <img className='h-12 w-auto' src={`${BASE_URL_IMAGE}${movie.poster_path}`} alt="" />
            <p className='text-p'>{movie.title}</p>
        </div>
    )
}
