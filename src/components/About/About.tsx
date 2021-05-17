import React from "react";
import Header from "../Header/Header";
import "./about.scss";
import image_one from "./images/trip.jpg";
import image_two from "./images/trip3.jpg";
import image_three from "./images/trip1.jpg";
import image_four from "./images/trip2.jpg";
import owner from "./images/owner.png";
import arpi from "./images/arpi.jpg";

export default () => {
  return (
    <div className="about">
      {/* <Header /> */}
      <div className="about_section">
        <span className="about_section_head">About "Travel With Me"</span>
        <div className="about_section_text">
          <br />
          <p>
            Map making is an ancient human endeavor, and one that those of us
            working on Travel With Me are honored to continue to pursue. Explore
            world landmarks, discover natural wonders, and step inside places
            with Street on Travel With Me.
          </p>
          <p>
            {" "}
            If you wish, you can register on the website, leave a comment about
            the countries you visited. In short, here you will make a small tour
            of the world. I hope you will like it. Have a nice trip.
          </p>
        </div>
        <div className="about_section_image">
          <img src={image_one} alt="trip" />
          <img src={image_three} alt="trip" />
        </div>

        <div className="about_section_owner">
          <h2 className="about_section_owner_head"> Meet the originator</h2>
          <div className="about_section_owner_image">
            <img src={owner} alt="picture" />
          </div>
          <div className="about_section_owner_info">
            <span className="about_section_owner_info_name">
              Suren Melkonyan
            </span>
            <span className="about_section_owner_info_desc">
              {" "}
              "Travel With Me" website designer and programmer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
