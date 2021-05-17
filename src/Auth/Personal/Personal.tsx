import React, { useState ,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import './about.scss'
import axios,{AxiosRequestConfig} from 'axios'
import history from '../../helpers/history'
import {getCoordinates} from '../../actions/findCoordinates'
import {removeCurrentUser} from '../../actions/getCurrentUser'

export default () => {
    const [comment, setComment] = useState('');
    const {currentUser}=useSelector(state=>state.currentuser);
    const {location}=useSelector(state=>state.findcoord)
    const dispatch=useDispatch();
    const clickCheck = async () => {
        var comment = "here are some reviews"
        const response = await axios.post('/api/withauth', comment);
        console.log(response);
    }
    const handleComment = async() => {
        const configs:AxiosRequestConfig={
            method:'post',
            url:`/api/comment/${location.id}`,
            headers:{"authorization":currentUser.id},
            data:{'description':comment}
        }
        // const response=await axios.post('/api/comment',{'description':comment,"id":currentUser.id,"cur_location":"Malta"})
        const response= await axios(configs)
        console.log("Comment response: ",response);

    }
    const handleLogOut = async () => {
        const response = await axios.post('/api/logout', { id: 1 });
        console.log("response logout: ", response)
        console.log(response.request.statusText)
        if (response.request.statusText === "OK") {
            localStorage.removeItem('token');
            dispatch(removeCurrentUser());
            history.push('/login')
        }

    }
    const handleChange = (e) => {
        setComment(e.target.value)
    }
    useEffect(()=>{
        dispatch(getCoordinates());
    },[])
    return (
        <div className="about">
            {/* <Header /> */}
            <div className="about_section">
                <span className="about_section_head">
                    Personal
                </span>
                <div className="about_section_text">
                    <br />
                    <p>This is a small program that will help you find any country or city on the map.
                    There are various interesting facts, information about different countries of the world,
                    the most famous cities, the most famous tourist kidneys.</p>

                    <button style={{ "height": "60px", "width": "120px" }} onClick={clickCheck}
                    >Logout</button>
                    <button style={{ "height": "60px", "width": "120px" }} onClick={handleLogOut}> Log out ex </button>
                </div>
                <div className="about_section_comment">
                    <textarea placeholder="Please leave your comment..." value={comment} onChange={handleChange} ></textarea>
                    <button onClick={handleComment} > Sent </button>
                    {comment}
                </div>

            </div>
        </div>
    )
}