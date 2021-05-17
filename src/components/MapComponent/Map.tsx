import React, { useState, useEffect } from "react";
import {
  YMaps,
  Map,
  Placemark,
  Polyline,
  RulerControl,
  Clusterer,
  FullscreenControl,
  ZoomControl,
} from "react-yandex-maps";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  getCoordinates,
  FindAnotherCoordinates,
} from "../../actions/findCoordinates";
import {
  getCurrentUserAction,
  getUserAction,
} from "../../actions/getCurrentUser";
import CurrentUser from "../CommentUser/CommentUser";
import { getCommentsAction } from "../../actions/getComment";
import axios, { AxiosRequestConfig } from "axios";
import { Link } from "react-router-dom";
import useToken from "../../helpers/useToken";
import "./map.scss";
import armenia from "./images/armenia.jpg";
import states from "../../assets/states/states.json";

export default () => {
  const { token } = useToken();
  const [comment, setComment] = useState("");
  const [currentComment, setCurrentComent] = useState(null);
  const { currentUser } = useSelector((state) => state.currentuser);
  const { location } = useSelector((state) => state.findcoord);
  const { comments } = useSelector((state) => state.findcoord);
  const { anotherCoord } = useSelector((state) => state.findanothercoord);
  const [value, setValue] = useState("");
  states[location.place_name].map((value, index) =>
    console.log("Value: ", value)
  );
  const dispatch = useDispatch();
  // console.log("States: ", states[location.place_name][0].coordinates)
  // states[location.place_name].map((value,index)=>
  // console.log("Coordinates: ",value.coordinates[0]))
  // console.log("Location: ", location);
  // console.log("CurrentUser in map : ", currentUser)
  // const desc=!!location && !!comments?{ "desc":comments.description}:null
  const mapKey =
    "https://api-maps.yandex.ru/2.1/?apikey=2fc9d576-9c9b-4727-93e6-06544d3b7d54&lang=en_US";
  useEffect(() => {
    dispatch(getCoordinates());
    dispatch(getUserAction());
    // window.addEventListener('load',handleLoad);
  }, []);
  useEffect(() => {
    dispatch(getCoordinates());
  }, [location]);
  // const clickCheck = async () => {
  //     var comment = "here are some reviews"
  //     const response = await axios.post('/api/withauth', comment);
  //     console.log(response);
  // }

  const handleComment = async (e) => {
    if (e.key === "Enter") {
      const configs: AxiosRequestConfig = {
        method: "post",
        url: `/api/comment/${location.id}`,
        headers: { authorization: currentUser.id },
        data: { description: comment },
      };
      const response = await axios(configs);
      // console.log("Comment response: ", response);
      setCurrentComent(response.data);
      dispatch({
        type: "SET_COMMENTS",
        payload: response.data,
      });
      setComment("");
      // dispatch(getCommentsAction({"loc_id":location.id})
    }
  };
  // console.log("Data: ", currentComment)
  const handleCommentChange = (e) => {
    setComment(e.target.value);
    // console.log(e.target.value);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = async (e) => {
    if (e.key === "Enter") {
      console.log(value);
      await dispatch(FindAnotherCoordinates({ place_name: value }));
      await dispatch(getCoordinates());
    }
  };
  const getPointData = (value) => {
    return {
      balloonContentBody:
        "placemark <strong>balloon " + value.state + "</strong>",
      clusterCaption: "placemark <strong>" + value.state + "</strong>",
    };
  };

  const getPointOptions = () => {
    return {
      preset: "islands#violetIcon",
    };
  };
  return (
    <div className="map">
      <div className="map_main" style={{ width: "60%" }}>
        <YMaps
          query={{
            apikey: mapKey,
            lang: "en_US",
          }}
        >
          <Map
            defaultState={{
              center: [
                !!location ? location.latitude : 40.179188,
                !!location ? location.longitude : 44.499104,
              ],
              zoom: 6,
            }}
            width="100%"
            height="520px"
          >
            <Placemark
              geometry={[
                !!location ? location.latitude : 40.179188,
                !!location ? location.longitude : 44.499104,
              ]}
              options={
                {
                  // hasHint:true,
                  // openHintOnHover:true,
                }
              }
              properties={{
                hintContent: "Hiii",
                ballonContent: "Hiii",
              }}
            />

            <FullscreenControl />
            <ZoomControl options={{ float: "right" }} />
            <RulerControl options={{ float: "right" }} />
            {!!anotherCoord && (
              <>
                <Polyline
                  geometry={[
                    [location.latitude, location.longitude],
                    [anotherCoord.latitude, anotherCoord.longitude],
                  ]}
                  options={{
                    balloonCloseButton: false,
                    strokeColor: "#000",
                    strokeWidth: 4,
                    strokeOpacity: 0.5,
                  }}
                  hint="Hiii"
                />

                <Placemark
                  geometry={[anotherCoord.latitude, anotherCoord.longitude]}
                />
              </>
            )}
            {states[location.place_name] ? (
              <Clusterer
                options={{
                  preset: "islands#invertedVioletClusterIcons",
                  groupByCoordinates: false,
                  clusterDisableClickZoom: true,
                  // clusterHideIconOnBalloonOpen: false,
                  // geoObjectHideIconOnBalloonOpen: false,
                }}
              >
                {states[location.place_name].map(
                  (value, index) =>
                    value.coordinates && (
                      <Placemark
                        key={index}
                        geometry={value.coordinates}
                        // properties={getPointData(value)}
                        options={getPointOptions()}
                      />
                    )

                  // <Placemark key={index} geometry={coordinates.coordinates} />
                )}
              </Clusterer>
            ) : null}
          </Map>
        </YMaps>
        <p>Input any country name and you will see the distance between them</p>

        <div className="map_main_another">
          {/* <p>Input  any country name  and you will see the distance between them</p> */}
          <input
            placeholder="Country name ..."
            type="text"
            value={value}
            onChange={handleChange}
            onKeyDown={handleClick}
          />
          {/* <button type="submit" onClick={handleClick}>
            Search
          </button> */}
        </div>
      </div>
      <div className="map_about">
        <h4> {!!location && location.place_name}</h4>
        {!!location && (
          <div className="map_about_country">
            <div className="map_about_country_image">
              <img
                alt="country"
                src={require(`./images/${location.photo}`)}
                style={{ width: "270px", height: "190px", paddingTop: "10px" }}
              />
              {/* <input type="text" value={value} onChange={handleChange} />
                            <button type="submit" onClick={handleClick}>Click</button> */}
              <div className="map_about_country_image_comment">
                <p></p>
              </div>
            </div>
            <div className="map_about_country_info">
              <p>{location.info}</p>
              <div className="map_about_country_link">
                More about{" "}
                <a href={location.link}>
                  <span>{location.place_name}</span>{" "}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="map_comments">
        <p> Comments</p>
        {token ? (
          <div className="map_comments_write">
            <textarea
              placeholder={"Comments about ..."}
              rows={6}
              onChange={handleCommentChange}
              onKeyDown={handleComment}
              value={comment}
            ></textarea>
            {/* <button onClick={handleComment}>Send</button> */}
          </div>
        ) : (
          <p>For leaving comment you need authorize!</p>
        )}
        <div className="map_comments_all">
          {!!comments ? (
            comments.map((comment, index) => (
              <CurrentUser desc={comment} key={index} />
            ))
          ) : (
            <div className="map_comments_withoutComment">
              <p>Not comment yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
