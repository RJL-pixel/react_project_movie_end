

import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/auth.slice";
import movieReducer from "./slices/movie.slices";
import {genreReducer} from "./slices/genre.serv";


export const rootReducer = combineReducers({
auth:authReducer,
  movies:  movieReducer,
    genres:genreReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}