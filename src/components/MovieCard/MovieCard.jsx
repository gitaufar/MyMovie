import React from 'react'
import { BASE_URL_IMAGE } from '../../api/api'

export const MovieCard = ({ movie = { title: 'Default', poster_path: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png' }, genres }) => {
    let date = movie.release_date.split('-')[0];
    return (
        <div className='flex flex-col bg-secondary rounded-md'>
            <img className='h-[80%]' src={`${BASE_URL_IMAGE}${movie.poster_path}`} alt="" />
            <div className='px-2'>
                <div className='flex flex-row justify-between'>
                    <p className='text-p max-w-[50%] truncate'>{genres}</p>
                    <p className='text-p'>{date}</p>
                </div>
                <h1 className='text-p font-bold'>{movie.title}</h1>
            </div>

        </div>
    )
}
