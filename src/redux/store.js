

import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/auth.slice";




export const rootReducer = combineReducers({
auth:authReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}