
import {axiosService} from "./axios.service";
import {urlsm} from "../constants/urls";


const  _accesTokenKey = 'access'
const  _refreshTokenKey = 'refresh'
export const authService = {
    login: (user) => axiosService.post(urlsm.auth, user),
    register: (user) => axiosService.post(urlsm.users, user),

    setTokens: ({access, refresh}) => {
        localStorage.setItem(_accesTokenKey,access)
            localStorage.setItem(_refreshTokenKey,refresh)
    },

    deleteTokens:()=>{
        localStorage.removeItem(_accesTokenKey)
        localStorage.removeItem(_refreshTokenKey)

},
    getAccesToken:()=>localStorage.getItem(_accesTokenKey),
    getrefreshToken:()=>localStorage.getItem(_refreshTokenKey)
}

