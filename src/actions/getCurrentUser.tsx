import {GET_CURRENT_USER,REMOVE_CURRENT_USER,SET_CURRENT_USER} from '../constans/constants'

const getCurrentUserAction=data=>{
    return dispatch=>{
        dispatch({
            type:SET_CURRENT_USER,
            payload:data
        })
    }
}
const removeCurrentUser =()=>{
    return dispatch=>{
        dispatch({
            type:REMOVE_CURRENT_USER
        })
    }
}
const getUserAction=()=>{
    return dispatch=>{
        dispatch({
            type:GET_CURRENT_USER
        })
    }
}
export {getCurrentUserAction,removeCurrentUser,getUserAction};