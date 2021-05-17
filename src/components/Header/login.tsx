import React from "react";
import { NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux'
import history from "../../helpers/history";
// import { removeCurrentUser,getUserAction } from '../../actions/getCurrentUser'
// import axios from 'axios'
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
// import "../../Auth/LogOut/logout.scss";
import "./login.scss";

export default () => {
  // const dispatch=useDispatch();
  // const {currentUser}=useSelector(state=>state.currentuser);
  // console.log("Current user log out: ",currentUser)
  // const handleLogOut = async () => {
  //     const response = await axios.post('/api/logout', {id: !!currentUser && currentUser.id });
  //     console.log("response logout: ", response)
  //     console.log(response.request.statusText)
  //     if (response.request.statusText === "OK") {
  //         localStorage.removeItem('token');
  //         dispatch(removeCurrentUser());
  //         history.push('/login')
  //     }

  // }
  return (
    <NavLink
      activeClassName="is-active"
      className="link link_login"
      to="/login"
      style={{ textDecoration: "none" }}
    >
      <div className="logout header_logo_visit_login">
        <span className="logout_text">Log In</span>
      </div>
    </NavLink>
  );
};
