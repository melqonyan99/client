import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./search.scss";
import SearchButton from "../../UsedComponents/Button/Button";
// import Button from '@material-ui/core/Button'
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { findCoordinatesAction } from "../../actions/findCoordinates";
import history from "../../helpers/history";
import Autocomplete from "react-google-autocomplete";

const icon = <SearchIcon />;
export default () => {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      console.log("do validate");
      console.log(location);
      const response = await dispatch(
        findCoordinatesAction({ place_name: location })
      );
      console.log("Search response", response);
    }
  };

  return (
    <div className="search">
      <div className="search_main_block">
        <div className="search_main_block_input">
          <div className="search_main_block_input_text">
            {/* <Autocomplete
                            style={{ width: '90%' }}
                            onPlaceSelected={(place) => {
                                console.log(place);
                            }}
                            types={['(cities)']}
                            // componentRestrictions={{ country: "ru" }}
                        /> */}
            <input
              type="text"
              placeholder="Search your country here..."
              name="place_name"
              value={location}
              onChange={(e) => {
                // console.log(e.target.value);
                setLocation(e.target.value);
              }}
              onKeyDown={handleKeyDown}
            />
          </div>
          {/* <div className="search_main_block_button"> */}
          {/* <button
              type="submit"
              onClick={async () => {
                console.log(location);
                const response = await dispatch(
                  findCoordinatesAction({ place_name: location })
                );
                console.log("Search response", response);
              }}
            >
              Search{" "}
            </button> */}
          {/* <Link to='/location' style={{textDecoratio:"none"}}>
                        <SearchButton
                            text="Search"
                        />
                        </Link> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};
