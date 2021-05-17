import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import HomeSection from "../HomeSection/HomeSection";
import axios from "axios";
import "./home.scss";

const data_path = "./examp.py";

export default () => {
  return (
    <>
      <div className="main-banner">
        <HomeSection />
      </div>
    </>
  );
};
