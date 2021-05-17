import {FIND_COORDINATES} from '../constans/constants'
import axios from 'axios'
import { createBrowserHistory } from 'history';
import {Redirect} from 'react-router-dom'
import history from '../helpers/history'

const addFavoritelistAction=data=>{
    return  dispatch=>{
        dispatch({
            type:'ADD_FAVORITE_LIST',
            payload:data
        })
    }
}

const getFavoriteListAction=data=>{
    return async dispatch=>{
        const response=await axios.post('/api/all',data)
        console.log(response) 
        dispatch({
            type:"GET_FAVORITE_LIST",
            payload:response.data
        })
    }
}
const getCurrentListAction=()=>{
    return dispatch=>{
        dispatch({
            type:"GET_FAVORITE_LIST"
        })
    }
}
// const setFavoriteListAction=data=>{
//     return async dispatch=>{
//         const response=await axios.post('/api/setall',data)
//         console.log("Set  user all favorite list response: ",response)

//     }
// }





export {addFavoritelistAction,getFavoriteListAction,getCurrentListAction};