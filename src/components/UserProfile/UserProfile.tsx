import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../../actions/getCurrentUser";
import TabPanel from "../TabPanel/TabPanel";
import {
  addFavoritelistAction,
  getFavoriteListAction,
  getCurrentListAction,
} from "../../actions/favoritePlace";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import Favorite from "../Favorite/Favorite";
import Visited from "../Visited/Visited";
import axios, { AxiosRequestConfig } from "axios";

import "./user.scss";

const data = [{}];
export default () => {
  const { currentUser } = useSelector((state) => state.currentuser);
  const { favoritePlace } = useSelector((state) => state.favoriteplace);
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);
  const [visited, setVisited] = useState(false);
  const [image, setImage] = useState(null);
  // console.log('Current user in user profile: ', currentUser.username)
  // console.log('Favorite List: ',favoritePlace)
  useEffect(() => {
    dispatch(getUserAction());
    dispatch(getCurrentListAction());
    // dispatch(getFavoriteListAction(currentUser.))
  }, []);
  return (
    <div className="user_profile">
      {/* <input type='file'/> */}
      <div className="user_profile_head">
        <h1>{currentUser ? currentUser.username : "User"}</h1>
      </div>
      <div className="user_profile_group">
        <div className="user_profile_info">
          This is your personal space on "Travel With Me". It is where the
          stories you recommend will be shared, and where in the future you will
          be able to keep track of the places and topics that you have read the
          most about.
        </div>

        <div className="user_profile_tabs">
          <div className="user_profile_tabs_main">
            {/* <div className="user_profile_tabs_main_visit" onClick={() => {

                            setFavorite(false)
                            setVisited(true)
                        }}>
                            <AirplanemodeActiveIcon color="secondary" fontSize="large" />
                            <h1>Visited</h1>
                        </div> */}
            <div
              className="user_profile_tabs_main_favorite"
              onClick={async () => {
                const configs: AxiosRequestConfig = {
                  method: "post",
                  url: `/api/all/${currentUser.id}`,
                  // headers: { "authorization": currentUser.id },
                  // data: { 'description': comment }
                };
                const response = await axios(configs);
                console.log("Response: ", response);
                if (response.statusText === "OK") {
                  dispatch(addFavoritelistAction(response.data));
                } else {
                  dispatch(addFavoritelistAction(null));
                }

                // setVisited(false)
                setFavorite(!favorite);
              }}
            >
              <FavoriteIcon color="secondary" fontSize="large" />
              <h1>Favorite Places</h1>
            </div>
          </div>
          {/* {
                        visited ? <Visited />

                            :
                            null
                    } */}
          {favorite ? <Favorite favorite={favoritePlace} /> : null}
        </div>
      </div>
    </div>
  );
};
