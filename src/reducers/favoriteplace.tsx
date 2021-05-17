
const initialState = {
    // userid:null,
    // current_place:null,
    place_list: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAVORITE_LIST": {
                return {
                    ...state,
                    place_list: action.payload
                }
        }
        case "GET_FAVORITE_LIST":{
            return{...state}
        }
        default:
            return state;
    }
}