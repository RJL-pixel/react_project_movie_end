import  {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import css from './movie.card.css'

import {movieActions} from "../../redux/slices/movie.slices";

import {useSearchParams} from "react-router-dom";
import {Movie} from "./movie.cards";

export const MoviesList = () => {
    const {movies: {results}} = useSelector(state => state.movies)
    let dispatch = useDispatch();
    let [query, setQuery] = useSearchParams({page: '1'});
    console.log(query);

    const page = query.get('page');


    useEffect(() => {
        dispatch(movieActions.getAllMovies({page}))
    }, [page, dispatch]);


    const prevPage = () => {
        const prev = +page - 1;
        if (prev >= 1) {
            setQuery({page: `${prev}`})
        }
    }

    const nextPage = () => {
        const next = +page + 1;
        if (next <= 500) {
            setQuery({page: `${next}`})
        }
    }


    return (
        <div>
            <div className={'movies'}>{results && results.map((movie) => <Movie key={movie.id} movie={movie}/>)}</div>
            <div className={'pageBtn'}>
                <button id={`${css.button}`}  onClick={prevPage}>❮Prev</button>
                <button id={`${css.button}`}  onClick={nextPage}>Next❯</button>
            </div>
        </div>
    );
};

