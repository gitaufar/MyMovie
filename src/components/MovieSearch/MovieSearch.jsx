import { MovieSearchCard } from '../MovieCard/MovieSearchCard'

export const MovieSearch = ({ movies = null }) => {
    if(movies.length === 0) return (
        <div className='flex justify-end w-full z-20 absolute right-0 pr-12 mt-12'>
            <div className='w-60 border border-border rounded-b-md max-h-80 bg-tertiary px-2 py-2 overflow-auto flex flex-col gap-2'>
                <p className='text-p'>Not Found!</p>
            </div>
        </div>
    )
    return (
        <div className='flex justify-end w-full z-20 absolute right-0 pr-12 mt-12'>
            <div className='w-60 border border-border rounded-b-md max-h-80 bg-tertiary px-2 py-2 overflow-auto flex flex-col gap-2'>
                {movies.map((movie) => <MovieSearchCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}
