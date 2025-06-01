import { MovieCard } from './MovieCard/MovieCard'
import { MovieCardLoading } from './MovieCard/MovieCardLoading';

const changeIdGenres = (genres_id, genres) => {
    console.log(genres_id);
    console.log(genres);
    let genresString = [];
    for (let i = 0; i < genres_id.length; i++) {
        genresString.push(genres.get(genres_id[i]));
    }
    return genresString.join(', ');
}

export const MovieList = ({ movies = null, genres = null }) => {
    if (!movies) return (
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4">
            <MovieCardLoading />
            <MovieCardLoading />
            <MovieCardLoading />
            <MovieCardLoading />
            <MovieCardLoading />
            <MovieCardLoading />
        </div>
    )
    if(movies.length === 0) return (
        <div className='flex justify-center items-center h-full w-full'>
            <h1 className='text-p text-2xl'>Not Found!</h1>
        </div>
    )
    return (
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4">
            {movies.map((movie) => {
                if (movie.adults) return null;
                let genresString = changeIdGenres(movie.genre_ids, genres)
                return (<MovieCard key={movie.id} movie={movie} genres={genresString} />)
            })}
        </div>
    )
}
