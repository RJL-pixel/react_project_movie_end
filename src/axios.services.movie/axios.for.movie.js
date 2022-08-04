import {urls, baseURL} from "../constants/urls";
import axios from "axios";


export const axiosService = axios.create(
    {
        baseURL,




        headers:{
            'Authorization': `Bearer ${process.env.REACT_APP_KEY}`
        }
    });






export const movieService = {
    getAllMovies: (page = 1) => axiosService.get(urls.movies, {params: {page}}),
    getMovieById: (movieId) => axiosService.get(`${urls.movies}/${movieId}`),
    getMovieByGenre: (page = 1, genreId) => axiosService.get(urls.movies, {params: {page, with_genres: `${genreId}`}})


}

