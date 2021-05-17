import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import history from "../../helpers/history";
import { removeCurrentUser, getUserAction } from "../../actions/getCurrentUser";
import { NavLink } from "react-router-dom";
import {
  addFavoritelistAction,
  getFavoriteListAction,
  getCurrentListAction,
} from "../../actions/favoritePlace";

import axios, { AxiosRequestConfig } from "axios";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import "./logout.scss";

export default () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.currentuser);
  const { place_list } = useSelector((state) => state.favoriteplace);

  // console.log("Current user log out: ", currentUser)
  // console.log("Curren list: ", place_list)
  const handleLogOut = async () => {
    const response = await axios.post("/api/logout", {
      id: !!currentUser && currentUser.id,
    });
    console.log("response logout: ", response);
    console.log(response.request.statusText);
    if (response.request.statusText === "OK") {
      localStorage.removeItem("token");
      dispatch(removeCurrentUser());
      history.push("/login");
    }
  };
  useEffect(() => {
    dispatch(getCurrentListAction());
  }, []);
  return (
    <div onClick={handleLogOut} style={{ height: "70%" }}>
      <NavLink
        activeClassName="is-active"
        className="link link_logout"
        to="/notExist"
        style={{ textDecoration: "none", width: "100%" }}
      >
        <div className="header_logo_visit header_logo_visit_logout">LogOut</div>
      </NavLink>
      {/* <span className="logout_text">Log Out</span>
      <AccountCircleOutlinedIcon style={{ color: "#fff" }} /> */}
    </div>
  );
};
