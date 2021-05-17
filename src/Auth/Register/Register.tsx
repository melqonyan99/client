import React, {
  Fragment,
  useEffect,
  useRef,
  MouseEvent,
  useState,
} from "react";
import { Link } from "react-router-dom";
import AuthInput from "../../UsedComponents/AuthInput/AuthInput";
import { Form, Formik } from "formik";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { validationSchema } from "./validationschema";
import axios from "axios";
import history from "../../helpers/history";

import "./register.scss";

export default () => {
  const [error, setError] = useState(null);
  const formikRef = useRef();
  return (
    <div className="register">
      <div className="register_head">
        Sign Up
      </div>
      <Formik
        initialValues={{
          username: "",
          useremail: "",
          userpassword: "",
          confirm: "",
        }}
        onSubmit={async (values) => {
          const data = {
            username: values.username,
            useremail: values.useremail,
            userpassword: values.userpassword,
          };
          const response = await axios.post("/api/register", data);
          if (response.data.error) {
            setError(response.data.error);
          } else {
            history.push("/login");
          }
        }}
        validationSchema={validationSchema}
      >
        {(formikProps) => (
          <Fragment>
            <div className="register_form">
              <Form translate="">
                <div className="register_form_formik">
                  <AuthInput
                    label="Name"
                    type="name"
                    placeholder="Enter your name"
                    name="username"
                    formikProps={formikProps}
                  />
                  <AuthInput
                    label="Email"
                    type="email"
                    placeholder="Enter your Email"
                    name="useremail"
                    formikProps={formikProps}
                  />

                  <AuthInput
                    label="Password"
                    placeholder="Enter password"
                    name="userpassword"
                    type="password"
                    formikProps={formikProps}
                  />
                  <AuthInput
                    label="Confirm Password"
                    type="password"
                    placeholder="Re-try Password"
                    name="confirm"
                    formikProps={formikProps}
                  />
                  <div className="register_form_formik_button">
                    <button
                      type="submit"
                      // className="login-btn"
                      onClick={(event: MouseEvent) => formikProps.handleSubmit}
                    >
                      Sign Up
                    </button>
                    {!!error ? (
                      <span style={{ color: "white", paddingLeft: "8px" }}>
                        {error}
                      </span>
                    ) : null}
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <h3>Sign In</h3>
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
