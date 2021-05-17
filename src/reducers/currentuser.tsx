import {GET_CURRENT_USER,REMOVE_CURRENT_USER,SET_CURRENT_USER} from '../constans/constants'

const initialState={
    currentUser:null
}

export default(state=initialState,action)=>{
    switch(action.type){
        case SET_CURRENT_USER:{
            return {...state,currentUser:action.payload}
        }
        case REMOVE_CURRENT_USER:{
            return{...state,currentUser:null}
        }
        case GET_CURRENT_USER:{
            return{...state}
        }
        default:
            return state;
    }
}