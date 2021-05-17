// import React, { Fragment } from "react";
// import Grid from "@material-ui/core/Grid";
// import Popover from '../Popover/Popover'
// import "./styles.scss";

// export default ({
//     type = "text",
//     placeholder,
//     formikProps,
//     name,
// }) => {
//     return (
//         <Fragment>
//             <div className="auth-input">
//                 <Grid container>

//                     <Grid item xs={12}>
//                         {/* <div style={{ ...style, position: "relative" }}> */}
//                         <input
//                             className="form-control auth-input"
//                             type={type}
//                             name={name}
//                             placeholder={placeholder}
//                             value={formikProps.values[name]}
//                             onChange={formikProps.handleChange(name)}
//                             onBlur={formikProps.handleBlur(name)}
//                         // style={inputStyles}
//                         />
//                         {formikProps.touched[name] && formikProps.errors[name] && (
//                             <div className="error-icon">
//                                 <Popover error={formikProps.errors[name]} />
//                             </div>
//                         )}
//                         {/* </div> */}
//                     </Grid>
//                 </Grid>
//             </div>
//         </Fragment>
//     );
// };

import React from "react";
import Popover from "../Popover/Popover";
import "./styles.scss";

export default ({ label, type, placeholder, formikProps, name }) => {
  return (
    <div className="auth">
      <label htmlFor={name}>{label}</label>
      <input
        // className="form-control auth-input"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={formikProps.values[name]}
        onChange={formikProps.handleChange(name)}
        onBlur={formikProps.handleBlur(name)}
        // style={inputStyles}
      />
      {formikProps.touched[name] && formikProps.errors[name] && (
        <div className="auth_rep">
          <Popover error={formikProps.errors[name]} />
        </div>
      )}
    </div>
  );
};
