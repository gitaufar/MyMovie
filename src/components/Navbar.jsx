import { useEffect, useState } from 'react'
import { SearchBar } from './SearchBar'
import { MovieSearch } from './MovieSearch/MovieSearch'
import { MovieSearchLoading } from './MovieSearch/MovieSearchLoading'
import { searchMovies } from '../api/api'
import { MovieSearchError } from './MovieSearch/MovieSearchError'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchMoviesData, setSearchMoviesData] = useState([]);
    const [input, setInputValue] = useState('');
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
    useEffect(() => {
        setStatus('loading');
        console.log('loading')
        if (input.trim() === '') {
            setIsOpen(false)
            setSearchMoviesData([])
            return
        }
        if (!isOpen) setIsOpen(true)
        const fetchMoviesSearch = async (query) => {
            try {
                const data = await searchMovies(query);
                setSearchMoviesData(data.results)
                setStatus('success');
                console.log('success')
            } catch (err) {
                setStatus('error');
                console.log('error')
                setError(err);
            }
        }

        const timeOut = setTimeout(() => {
            fetchMoviesSearch(input)
        }, 1000)

        return () => clearTimeout(timeOut)
    }, [input])

    return (
        <header className='bg-tertiary w-full fixed py-5 z-10 shadow-sm pl-10 pr-12 flex flex-col gap-1'>

            {/* dekstop design*/}
            <nav className='hidden sm:flex items-center justify-between'>
                <div className='flex items-center flex-row text-white font-bold text-xl gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                        <path d="M0 3.5C0 1.84531 1.34531 0.5 3 0.5H21C22.6547 0.5 24 1.84531 24 3.5V18.5C24 20.1547 22.6547 21.5 21 21.5H3C1.34531 21.5 0 20.1547 0 18.5V3.5ZM2.25 16.25V17.75C2.25 18.1625 2.5875 18.5 3 18.5H4.5C4.9125 18.5 5.25 18.1625 5.25 17.75V16.25C5.25 15.8375 4.9125 15.5 4.5 15.5H3C2.5875 15.5 2.25 15.8375 2.25 16.25ZM19.5 15.5C19.0875 15.5 18.75 15.8375 18.75 16.25V17.75C18.75 18.1625 19.0875 18.5 19.5 18.5H21C21.4125 18.5 21.75 18.1625 21.75 17.75V16.25C21.75 15.8375 21.4125 15.5 21 15.5H19.5ZM2.25 10.25V11.75C2.25 12.1625 2.5875 12.5 3 12.5H4.5C4.9125 12.5 5.25 12.1625 5.25 11.75V10.25C5.25 9.8375 4.9125 9.5 4.5 9.5H3C2.5875 9.5 2.25 9.8375 2.25 10.25ZM19.5 9.5C19.0875 9.5 18.75 9.8375 18.75 10.25V11.75C18.75 12.1625 19.0875 12.5 19.5 12.5H21C21.4125 12.5 21.75 12.1625 21.75 11.75V10.25C21.75 9.8375 21.4125 9.5 21 9.5H19.5ZM2.25 4.25V5.75C2.25 6.1625 2.5875 6.5 3 6.5H4.5C4.9125 6.5 5.25 6.1625 5.25 5.75V4.25C5.25 3.8375 4.9125 3.5 4.5 3.5H3C2.5875 3.5 2.25 3.8375 2.25 4.25ZM19.5 3.5C19.0875 3.5 18.75 3.8375 18.75 4.25V5.75C18.75 6.1625 19.0875 6.5 19.5 6.5H21C21.4125 6.5 21.75 6.1625 21.75 5.75V4.25C21.75 3.8375 21.4125 3.5 21 3.5H19.5ZM7.5 5V8C7.5 8.82969 8.17031 9.5 9 9.5H15C15.8297 9.5 16.5 8.82969 16.5 8V5C16.5 4.17031 15.8297 3.5 15 3.5H9C8.17031 3.5 7.5 4.17031 7.5 5ZM9 12.5C8.17031 12.5 7.5 13.1703 7.5 14V17C7.5 17.8297 8.17031 18.5 9 18.5H15C15.8297 18.5 16.5 17.8297 16.5 17V14C16.5 13.1703 15.8297 12.5 15 12.5H9Z" fill="#E50914" />
                    </svg>
                    <p className='text-xl'>MyMovie</p>
                </div>
                <SearchBar value={input} onChange={(e) => setInputValue(e.target.value)} />
            </nav>

            {/* mobile design*/}
            <nav className='flex md:hidden flex-row items-center justify-between'>
                <div className='flex items-center flex-row text-white font-bold text-xl gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 22" fill="none">
                        <path d="M0 3.5C0 1.84531 1.34531 0.5 3 0.5H21C22.6547 0.5 24 1.84531 24 3.5V18.5C24 20.1547 22.6547 21.5 21 21.5H3C1.34531 21.5 0 20.1547 0 18.5V3.5ZM2.25 16.25V17.75C2.25 18.1625 2.5875 18.5 3 18.5H4.5C4.9125 18.5 5.25 18.1625 5.25 17.75V16.25C5.25 15.8375 4.9125 15.5 4.5 15.5H3C2.5875 15.5 2.25 15.8375 2.25 16.25ZM19.5 15.5C19.0875 15.5 18.75 15.8375 18.75 16.25V17.75C18.75 18.1625 19.0875 18.5 19.5 18.5H21C21.4125 18.5 21.75 18.1625 21.75 17.75V16.25C21.75 15.8375 21.4125 15.5 21 15.5H19.5ZM2.25 10.25V11.75C2.25 12.1625 2.5875 12.5 3 12.5H4.5C4.9125 12.5 5.25 12.1625 5.25 11.75V10.25C5.25 9.8375 4.9125 9.5 4.5 9.5H3C2.5875 9.5 2.25 9.8375 2.25 10.25ZM19.5 9.5C19.0875 9.5 18.75 9.8375 18.75 10.25V11.75C18.75 12.1625 19.0875 12.5 19.5 12.5H21C21.4125 12.5 21.75 12.1625 21.75 11.75V10.25C21.75 9.8375 21.4125 9.5 21 9.5H19.5ZM2.25 4.25V5.75C2.25 6.1625 2.5875 6.5 3 6.5H4.5C4.9125 6.5 5.25 6.1625 5.25 5.75V4.25C5.25 3.8375 4.9125 3.5 4.5 3.5H3C2.5875 3.5 2.25 3.8375 2.25 4.25ZM19.5 3.5C19.0875 3.5 18.75 3.8375 18.75 4.25V5.75C18.75 6.1625 19.0875 6.5 19.5 6.5H21C21.4125 6.5 21.75 6.1625 21.75 5.75V4.25C21.75 3.8375 21.4125 3.5 21 3.5H19.5ZM7.5 5V8C7.5 8.82969 8.17031 9.5 9 9.5H15C15.8297 9.5 16.5 8.82969 16.5 8V5C16.5 4.17031 15.8297 3.5 15 3.5H9C8.17031 3.5 7.5 4.17031 7.5 5ZM9 12.5C8.17031 12.5 7.5 13.1703 7.5 14V17C7.5 17.8297 8.17031 18.5 9 18.5H15C15.8297 18.5 16.5 17.8297 16.5 17V14C16.5 13.1703 15.8297 12.5 15 12.5H9Z" fill="#E50914" />
                    </svg>
                    <p className='text-base'>MyMovie</p>
                </div>
                <SearchBar value={input} onChange={(e) => setInputValue(e.target.value)} />
            </nav>
            {
                isOpen ?
                    status === 'loading' ? <MovieSearchLoading /> :
                        status === 'success' ? <MovieSearch movies={searchMoviesData.filter((movie) => movie.title.toLowerCase().includes(input.toLowerCase()))} /> :
                            status === 'error' ? <MovieSearchError error={error} /> : null
                    : null
            }
        </header>
    )
}
