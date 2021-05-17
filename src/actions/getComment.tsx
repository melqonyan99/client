import {GET_COMMENTS} from '../constans/constants'
import axios from 'axios'

const getCommentsAction=data=>(
    async dispatch=>{
        console.log('data: ',data)
        const response=await axios.post('/api/comments',data);
        console.log("Comment response: ",response)
        dispatch({
            type:GET_COMMENTS,
            payload:response.data
        })
        
    }
)

export {getCommentsAction}