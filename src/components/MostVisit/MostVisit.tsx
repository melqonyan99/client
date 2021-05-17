import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./most.scss";
import datas from "../../pdata/first.json";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import {
  addFavoritelistAction,
  getFavoriteListAction,
} from "../../actions/favoritePlace";
import { getUserAction } from "../../actions/getCurrentUser";
import axios, { AxiosRequestConfig } from "axios";

export default () => {
  // console.log("datas: ", datas)
  const dispatch = useDispatch();
  const [val, setVal] = useState(0);
  const { currentUser } = useSelector((state) => state.currentuser);
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  useEffect(() => {
    dispatch(getUserAction());
  }, []);
  return (
    <div className="most_visit">
      <div className="most_visit_head">
        <h2>The Most Beautiful Places in the World</h2>
      </div>
      <div className="most_visit_text">
        There are so many amazing places around the globe to see, we couldn't
        possibly include them all in just one list. But, these breathtaking
        destinations are definitely worth bumping to the top of your travel
        bucket list–whether you're looking to relax on a beach, get off the grid
        or explore a city.
      </div>
      <div className="most_visit_grid">
        {datas.map((data, index) => (
          // <Fragment key={index}>
          <div className="most_visit_box" key={index}>
            <img
              alt="pic"
              src={!!data.srcone ? data.srcone : data.srctwo}
              style={{ width: "260px", height: "405px", objectFit: "cover" }}
            />
            <div className="most_visit_box_text">
              <div>
                <div className="most_visit_box_name">{data.name}</div>
                <div className="most_visit_box_info">{data.info}</div>
              </div>
              {!!currentUser ? (
                <div
                  className="most_visit_box_like"
                  onClick={async () => {
                    // console.log("Ecent: ",e.key)
                    setIsLiked(true);
                    setVal(index);
                    var c = "";
                    const item = data.name.split(",");
                    for (let i = 0; i < item.length; i++) {
                      c += item[i];
                    }
                    console.log("hope its work: ", c);
                    const data_obj = {
                      name: c,
                      userid: currentUser.id,
                    };
                    // const response = await axios.post('/api/fav', data_obj)
                    // console.log("Most visit response: ", response)
                    // const response={}
                    const response = await axios.post(
                      "/api/saveplace",
                      data_obj
                    );
                    console.log("response after add item: ", response);
                    dispatch(addFavoritelistAction(data.name));
                    //  console.log("Fav place: ",data_obj)
                  }}
                >
                  <FavoriteBorderOutlinedIcon
                    color="secondary"
                    fontSize="large"
                  />

                  <p> Add my favorite list</p>
                </div>
              ) : null}
            </div>
          </div>
          //  </Fragment>
        ))}
      </div>
    </div>
  );
};
