import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './genres.css'
import {genreActions} from "../../redux/slices/genre.serv";
import {Genre} from './genre'

export const Genres = () => {
    let {genres:{genres}} = useSelector(state => state.genres);
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(genreActions.getAllGenres())
    },[dispatch])

    return (
        <div className={css.genres}>
            {genres && genres.map(genre=> <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};
