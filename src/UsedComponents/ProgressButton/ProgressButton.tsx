import React, { Fragment } from "react";
import animationData from '../../lotties/lf30_editor_lBoqPZ.json'
import done from "../../lotties/2401-examination-done.json";
import Lottie from "react-lottie";
import "./pbutton.scss";

export default ({ onClick, status, body }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: done,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const loader = () => {
    if (!status) return <span style={{ padding: "0 25px" }}>{body}</span>;
    if (status == "loading")
      return (
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          }}
          width="40px"
          height="40px"
          className="lottie"
        />
      );
    if (status == "success")
      return (
        <Lottie
          options={defaultOptions}
          width="40px"
          height="40px"
          className="lottie"
        />
      );
  };
  return (
    <Fragment>
      <div className="progress-button">
        <button type="submit" onClick={onClick}>
          {loader()}
        </button>
      </div>
    </Fragment>
  );
};
