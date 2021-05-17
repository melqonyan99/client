import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchSection from "../SearchSection/SearchSection";
import logo1 from "../../assets/images/logo1.png";
import textt from "../../assets/images/textt.png";
import TabPanel from "../../UsedComponents/TabPanel/TabPanel";
import LogOut from "../../Auth/LogOut/LogOut";
import Login from "./login";
import { NavLink } from "react-router-dom";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import useToken from "../../helpers/useToken";
import { getUserAction } from "../../actions/getCurrentUser";
import axios from "axios";
import UserProfile from "../UserProfile/UserProfile";
import ProfileLogo from "../ProfileLogo/ProfileLogo";

import "./header.scss";

export default () => {
  const dispatch = useDispatch();
  const staticText =
    "This is a small program that will help you find any country or city on the map.";
  const { currentUser } = useSelector((state) => state.currentuser);
  const [text, setText] = useState("");
  let count = 0;
  let generatedText = "";
  const token = localStorage.getItem("token");
  console.log("check token");
  console.log("token: ", token);
  useEffect(() => {
    dispatch(getUserAction());
    const addText = setInterval(
      () => count < staticText.length && addLetter(),
      60
    );
    return () => clearInterval(addText);
  }, [currentUser]);

  const addLetter = () => {
    generatedText += staticText[count];
    setText(generatedText);
    count++;
  };

  const handlePython = () => {
    const resp = axios.post("/api/executepython");
    console.log(resp);
  };
  return (
    <>
      <div className="header">
        <div className="header_content">
          <div className="header_content_logo">
            <NavLink
              exact={true}
              activeClassName="is-active"
              className="link"
              to="/"
              style={{ textDecoration: "none" }}
            >
              <div className="hover hover-3 header_logo_home"> Home </div>
            </NavLink>

            <NavLink
              activeClassName="is-active"
              className="link"
              to="/about"
              style={{ textDecoration: "none" }}
            >
              <div className="hover hover-3 header_logo_about"> About </div>
            </NavLink>

            <NavLink
              activeClassName="is-active"
              className="link"
              to="/more"
              style={{ textDecoration: "none" }}
            >
              <div className="hover hover-3 header_logo_more"> More</div>
            </NavLink>
            <NavLink
              activeClassName="is-active"
              className="link"
              to="/visit"
              style={{ textDecoration: "none" }}
              onClick={() => console.log("Hii")}
            >
              <div className="hover hover-3 header_logo_visit">
                Best for Visit
              </div>
            </NavLink>
            {!!currentUser ? (
              <>
                <NavLink
                  activeClassName="is-active"
                  className="link"
                  to="/user"
                  style={{ textDecoration: "none" }}
                >
                  <div className="hover hover-3 header_logo_visit">Profile</div>
                </NavLink>
                {/* <ProfileLogo /> */}
                <LogOut />
              </>
            ) : (
              <Login />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
