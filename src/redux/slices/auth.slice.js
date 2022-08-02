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
)





const authSlice =createSlice({
    name: 'authSlice',
    initialState,
    reducers:{},
    extraReducers:(builder) =>
        builder
            .addDefaultCase((state , action ) => {
            console.log(action.type)
             const [type]  = action.type.split('/').splice(-1);

             if (type === 'rejected'){
    state.errors = action.payload
}else {
    state.errors = null
}
})
});


const {reducer:authReducer, action} = authSlice

const authActions ={
register
}
export {
    authReducer,
    authActions
}