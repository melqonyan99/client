import {combineReducers} from 'redux'
import {save,load} from 'redux-localstorage-simple'
import findcoord from './findcoord'
import currentuser from './currentuser'
import findanothercoord from './findanothercoord'
import favoriteplace from './favoriteplace'

const appReducer=combineReducers({
    findcoord,
    currentuser,
    findanothercoord,
    favoriteplace
})
export default appReducer;