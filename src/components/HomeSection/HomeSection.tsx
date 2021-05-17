import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  YMaps,
  Map,
  Placemark,
  Clusterer,
  FullscreenControl,
} from "react-yandex-maps";
import SearchSection from "../SearchSection/SearchSection";
import { getUserAction } from "../../actions/getCurrentUser";
import MostVisit from "../MostVisit/MostVisit";
import Lottie from "react-lottie";
import TopBox from "./TopBox/TopBox";
import lottie from "./lotties/56-location-pin.json";
import map from "./images/map.png";
import paris from "./images/china.jpg";
import other from "./images/erkir.png";
import "./home.scss";

const mapKey =
  "https://api-maps.yandex.ru/2.1/?apikey=2fc9d576-9c9b-4727-93e6-06544d3b7d54&lang=en_US";

const points = [
  [48.856613, 2.352222],
  [-40.923859, 173.991425],
  [-40.923859, 173.991425],
];
const getPointData = (index) => {
  return {
    balloonContentBody: "placemark <strong>balloon " + index + "</strong>",
    clusterCaption: "placemark <strong>" + index + "</strong>",
  };
};

const getPointOptions = () => {
  return {
    preset: "islands#violetIcon",
  };
};

export default () => {
  const { currentUser } = useSelector((state) => state.currentuser);
  const dispatch = useDispatch();

  const staticText =
    "Discover new experiences across the world or around the corner.";
  const [text, setText] = useState("");
  let count = 0;
  let generatedText = "";

  const addLetter = () => {
    generatedText += staticText[count];
    setText(generatedText);
    count++;
  };
  // const token=localStorage.getItem('token');
  useEffect(() => {
    dispatch(getUserAction());
    const addText = setInterval(
      () => count < staticText.length && addLetter(),
      60
    );
    return () => clearInterval(addText);
  }, []);
  // console.log("Currrent user in home: ",currentUser)
  return (
    <div className="home">
      <div className="home_about">
        <div className="main_text">
          <p>{text}</p>
        </div>
        <div className="search-block">
          <SearchSection />
        </div>
      </div>
      <div className="home_rest">
        <div className="home_rest_one">
          <div className="home_rest_info">
            This is a small program that will help you find any country or city
            on the map. There are various interesting facts, information about
            different countries of the world, the most famous cities, the most
            famous tourist kidneys.
          </div>
        </div>
        <div className="home_rest_top">
          <div className="home_rest_top_title">
            <h4> The World's Most Visited Countries</h4>
          </div>
          <div className="home_rest_top_box">
            <TopBox />
          </div>
        </div>
      </div>
    </div>
  );
};
