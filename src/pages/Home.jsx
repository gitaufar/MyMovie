import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { MovieList } from '../components/MovieList'
import { getNowPlayingMovies, getGenres } from '../api/api'
import { PaginationButton } from '../components/button/PaginationButton'
import { PaginationButtonInActive } from '../components/button/PaginationButtonInActive'
import { MovieListError } from '../components/MovieListError'

export const Home = () => {
    const [nowMovies, setNowMovies] = useState(null);
    const [nowPages, setNowPages] = useState(1);
    const [input, setInputValue] = useState('');
    const [genres, setGenres] = useState(null);
    const [status, setStatus] = useState('loading');

    const next = () => {
        if (nowPages === 500) return;
        setNowPages(nowPages + 1);
    }

    const prev = () => {
        if (nowPages === 1) return;
        setNowPages(nowPages - 1);
    }

    useEffect(() => {

        let page = Number(input);
        if (!isNaN(page)) {
            if (page < 1) page = 1;
            if (page > 500) page = 500;
            setNowPages(page);
        }

    }, [input])

    useEffect(() => {

        if (!genres) {
            async function tryGetGenres() {
                const genresData = await getGenres('en');
                const genres = genresData.genres
                const genresMap = new Map();
                for (let i = 0; i < genres.length; i++) {
                    genresMap.set(genres[i].id, genres[i].name);
                }
                setGenres(genresMap);
            }
            tryGetGenres();
        }

        setStatus('loading');
        async function tryGetNowPlayingMovies() {
            try {
                const moviesData = await getNowPlayingMovies(nowPages);
                setNowMovies(moviesData);
                setStatus('success');
            } catch (err) {
                setStatus('error');
            }
        }

        const timeout = setTimeout(() => {
            tryGetNowPlayingMovies();
        }, 400);

        return () => clearTimeout(timeout);
    }, [nowPages]);

    return (
        <section className='bg-background w-screen min-h-screen flex flex-col h-full'>
            <Navbar />
            <main className='flex flex-col px-12 mt-24 w-screen'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-3xl text-white font-bold'>Movies</h1>
                        <p className='text-p'>Browse trending films now</p>
                    </div>
                    <div className='flex flex-row gap-4 items-center'>
                        {nowPages === 1 ? <PaginationButtonInActive text={'Prev'} /> : <PaginationButton onClick={prev} text={'Prev'} />}
                        <input
                            type='number'
                            value={nowPages}
                            min={1}
                            max={500}
                            className='text-p text-xl text-center flex bg-inherit no-spinner outline-none'
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        {nowPages === 500 ? <PaginationButtonInActive text={'Next'} /> : <PaginationButton onClick={next} text={'Next'} />}
                    </div>

                </div>
                {
                    status === 'loading' ? <MovieList /> :
                        status === 'success' ? <MovieList movies={nowMovies.results} genres={genres} /> :
                            <MovieListError />

                }
            </main>
        </section>
    )
}
