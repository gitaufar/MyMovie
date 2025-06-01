const Api_Key = import.meta.env.VITE_TMDB_API_KEY;
const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";
export const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/w500";

export const getNowPlayingMovies = async (page = 1) => {
  try {
    const res = await fetch(`${BASE_URL}/movie/now_playing?page=${page}`, {
      headers: {
        accept: 'application/json',
        Authorization: accessToken
      }
    });

    if (!res.ok) throw new Error(res.statusText);

    return res.json();
  } catch (err) {
    throw err
  }

};

export const getGenres = async (language) => {
  try {
    const res = await fetch(`${BASE_URL}/genre/movie/list?language=${language}`, {
      headers: {
        accept: 'application/json',
        Authorization: accessToken
      }
    });

    if(!res.ok) throw new Error(res.statusText)

    return res.json();
  } catch (err) {
    throw err
  }
}

export const searchMovies = async (query) => {
  try {
    const res = await fetch(`${BASE_URL}/search/movie?query=${query}`, {
      headers: {
        accept: 'application/json',
        Authorization: accessToken
      }
    })

    if (!res.ok) throw new Error(res.statusText)

    return res.json();
  } catch (err) {
    console.log(err)
    throw err
  }

}