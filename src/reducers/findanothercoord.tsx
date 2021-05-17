
const initialState={
    anotherCoord:null
}

export default(state=initialState,action)=>{
    switch(action.type){
        case "FIND_ANOTHER_COORDINATES":{
            return {...state,anotherCoord:action.payload};
        }
        case "GET_ANOTHER_COORDINATES":{
            return {...state};
        }
        default:
            return state;
        
    }
}
