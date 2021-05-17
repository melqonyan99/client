import {FIND_COORDINATES} from '../constans/constants'
import axios from 'axios'
import { createBrowserHistory } from 'history';
import {Redirect} from 'react-router-dom'
import history from '../helpers/history'


const findCoordinatesAction =data=>{
    return async dispatch=>{
        dispatch({
            type:FIND_COORDINATES
        })
        const response= await axios.post('/api/findlocation',data);
        console.log("Ex data: ",response)
        dispatch({
            type:"SET_COORDINATES",
            payload:response.data
        })
        dispatch({
            type:"SET_COMMENTS",
            payload:response.data.loc_comments
        })
        if (response.statusText==="OK"){
            history.push("/location")
            history.location.state={...response.data}
        }
    }
}
const FindAnotherCoordinates = data =>{
    return async dispatch=>{
        const response= await axios.post('/api/findanotherlocation',data);
        console.log("Find another coordinates: ",response);
        dispatch({
            type:"FIND_ANOTHER_COORDINATES",
            payload:response.data
        })
    }
}
const getCoordinates=()=>{
    return dispatch=>{
        dispatch({
            type:"GET_COORDINATES"
        })
    }
}
const getAnothercoordinates=()=>{
    return dispatch=>{
        dispatch({
            type:"GET_ANOTHER_COORDINATES"
        })
    }
}


export {findCoordinatesAction,getCoordinates,FindAnotherCoordinates};