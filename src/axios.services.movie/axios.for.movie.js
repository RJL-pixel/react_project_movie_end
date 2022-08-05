import {urls, baseURL} from "../constants/urls";
import axios from "axios";


export const axiosService = axios.create(
    {
        baseURL,

        headers:{
            'Authorization':`Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmZkODQyODZlYjJkOTg2Yzk4MzExMjIwMTRmMDE1NiIsInN1YiI6IjYyZTc5ODEwN2NhYTQ3MDA1ZTg2ODlmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3RodizC-wpChWJLDVCtZi_AgAYaTaU5xozxJQtT0fQs`
        }
    });




export const genreService = {
    getAllGenres: () => axiosService.get(urls.genres)
}



export const movieService = {
    getAllMovies: (page = 1) => axiosService.get(urls.movies, {params: {page}}),
    getMovieById: (movieId) => axiosService.get(`${urls.movies}/${movieId}`),
    getMovieByGenre: (page = 1, genreId) => axiosService.get(urls.movies, {params: {page, with_genres: `${genreId}`}})


}



