import {FIND_COORDINATES} from '../constans/constants'

const initialState={
    location:null,
    comments:null
}

export default  (state=initialState,action)=>{
    switch (action.type){
        case FIND_COORDINATES:{
            console.log("Action: ",action.payload)
            return {...state}
        }
        case "SET_COORDINATES":{
            console.log("Act: ",action.payload)
            return {...state,location:action.payload}
        }
        case "SET_COMMENTS":{
            return {...state,comments:action.payload}
        }
        case "GET_COORDINATES":{
            return {...state};
        }
        default:
            return state;
    }

}