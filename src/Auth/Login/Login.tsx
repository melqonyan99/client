import React, {
  Fragment,
  useEffect,
  useRef,
  MouseEvent,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import AuthInput from "../../UsedComponents/AuthInput/AuthInput";
import { Form, Formik } from "formik";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { validationSchema } from "./validationschema";
import history from "../../helpers/history";
import { getCurrentUserAction } from "../../actions/getCurrentUser";

import axios from "axios";
import "./login.scss";

export default () => {
  const formikRef = useRef();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  return (
    <div className="login">
      <div className="login_head">
        <ExitToAppOutlinedIcon />
        Sign In
      </div>
      <Formik
        initialValues={{
          useremail: "",
          userpassword: "",
        }}
        onSubmit={async (values) => {
          const response = await axios.post("/api/login", values);
          console.log("Response: ", response);
          console.log("Response id: ", response.data.id);
          dispatch(getCurrentUserAction(response.data));
          //    console.log("",response.config.data.useremail);
          localStorage.setItem("token", response.headers.token);
          if (response.data.error) {
            setError(response.data.error);
          } else {
            history.push("/location");
            //    var fav_list=localStorage.getItem('fav_list');
            //    if
          }
        }}
        validateOnMount={validationSchema}
      >
        {(formikProps) => (
          <Fragment>
            <div className="login_form">
              <Form translate="">
                <div className="login_form_formik">
                  <AuthInput
                    label="Your Email"
                    type="email"
                    placeholder="Enter your Email..."
                    name="useremail"
                    formikProps={formikProps}
                  />

                  <AuthInput
                    label="Password"
                    placeholder="Enter password..."
                    name="userpassword"
                    type="password"
                    formikProps={formikProps}
                  />
                  {!!error ? (
                    <span style={{ color: "white", paddingLeft: "8px" }}>
                      {error}
                    </span>
                  ) : null}
                  <div className="login_form_formik_button">
                    <button
                      type="submit"
                      // className="login-btn"
                      onClick={(event: MouseEvent) => formikProps.handleSubmit}
                    >
                      Sign In
                    </button>
                    <Link to="/register" style={{ textDecoration: "none" }}>
                      <h3>Register</h3>
                    </Link>
                  </div>
                </div>
              </Form>
            </div>
          </Fragment>
        )}
      </Formik>
      {/* <Link to="/register">Login</Link> */}
    </div>
  );
};
