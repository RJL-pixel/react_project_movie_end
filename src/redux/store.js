

import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/auth.slice";
import movieReducer from "./slices/movie.slices";


export const rootReducer = combineReducers({
auth:authReducer,
    movieReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}