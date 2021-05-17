import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import history from '../../helpers/history'
import { removeCurrentUser,getUserAction } from '../../actions/getCurrentUser'
import axios from 'axios'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import './profilelogo.scss'


export default () => {
    const dispatch=useDispatch();
    const {currentUser}=useSelector(state=>state.currentuser);
    // console.log("Current user log out: ",currentUser)
    const handleLogOut =  () => {
        console.log("in profile")
        history.push('/user')
        // const response = await axios.post('/api/logout', {id: !!currentUser && currentUser.id });
        // console.log("response logout: ", response)
        // console.log(response.request.statusText)
        // if (response.request.statusText === "OK") {
        //     localStorage.removeItem('token');
        //     dispatch(removeCurrentUser());
        //     history.push('/login')
        // }

    }
    return (
        <div className="profile" onClick={handleLogOut}>
            <span className="profile_text"></span>
            <AccountCircleOutlinedIcon style={{ color: "#fff" }} />
        </div>

    )
}

