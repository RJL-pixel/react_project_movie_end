import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {authService} from "../../axios.services.movie/axios.services.auth";

const initialState = {

errors:null
}




const register = createAsyncThunk(
    'authSlice/register',
    async ({user}, {rejectedWithValue})=>{
       try {
           await authService.register(user)
       }catch(e) {
return rejectedWithValue(e.response.data)
       }
    }
);

const login = createAsyncThunk(
    'authSlice/login',
    async ({user}, {rejectWithValue}) => {
        try {
            const {data} = await authService.login(user);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);




const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers:{},
    extraReducers:(builder) =>
        builder
            .addDefaultCase((state , action ) => {

             const [type]  = action.type.split('/').splice(-1);

             if (type === 'rejected'){
    state.errors = action.payload
}else {
    state.errors = null
}
})
});


const {reducer:authReducer} = authSlice

const authActions ={
    login,
register
}
export {
    authReducer,
    authActions
}