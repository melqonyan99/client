import React from 'react';
import './commentUser.scss'
import Avatar from '@material-ui/core/Avatar';


export default ({ desc }) => {
    // console.log('desc in comment component', desc)
    const first=desc.user.username.substring(0,1).toUpperCase()
    return (
        <div className="currentComment">
            <div className="currentComment_avatar">
                <Avatar>{first}</Avatar>
            </div>
            <div className="currentComment_user">
                <p>{desc.user.username}</p>
                <div className="currentComment_user_desc">{desc.description}</div>
            </div>


        </div>
    )
}