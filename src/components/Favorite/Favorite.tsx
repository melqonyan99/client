import React, { useEffect } from 'react'
import { getUserAction } from '../../actions/getCurrentUser'
import { useDispatch, useSelector } from 'react-redux'
import { addFavoritelistAction, getFavoriteListAction, getCurrentListAction } from '../../actions/favoritePlace'

import './favorite.scss'

export default ({ favorite }) => {
    console.log()
    const { currentUser } = useSelector(state => state.currentuser);
    const { place_list } = useSelector(state => state.favoriteplace)
    const dispatch = useDispatch();
    console.log("Place_list: ", place_list.name)
    // console.log('Current user in user profile: ', currentUser.username)
    // console.log('Favorite List: ',favoritePlace)
    useEffect(() => {
        dispatch(getUserAction())
        dispatch(getCurrentListAction())
        // dispatch(getFavoriteListAction(currentUser.))
    }, [])
    return (
        <div className="favorite">
            <h4>My Favorite places</h4>
            {
                place_list && place_list.name ? place_list.name.map((value, index) =>
                    <div className="favorite_place" key={index}>
                        {/* {index+1} */}
                        <div className="favorite_place_name">{index + 1} .</div>
                        <div className="favorite_place_info">{value}</div>
                    </div>
                )
                    :
                    <p>You have no favorite places . Please got to "Best for Visit" for add your collection</p>

            }
            {/* <div className="favorite_place">
                <div className="favorite_place_name">{favorite.name}</div>
                <div  className="favorite_place_info">{favorite.info}</div>
            </div> */}
        </div>
    )
}