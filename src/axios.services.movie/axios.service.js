

import axios from "axios";




const axiosService = axios.create({
    baseURL: 'http://owu.linkpc.net/api/v3'})

export {
    axiosService
}