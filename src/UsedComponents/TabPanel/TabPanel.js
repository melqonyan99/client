// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`nav-tabpanel-${index}`}
//       aria-labelledby={`nav-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box p={3}>{children}</Box>}
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `nav-tab-${index}`,
//     'aria-controls': `nav-tabpanel-${index}`,
//   };
// }

// function LinkTab(props) {
//   return (
//     <Tab
//       component="a"
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// export default function NavTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Tabs
//           variant="fullWidth"
//           value={value}
//           onChange={handleChange}
//           aria-label="nav tabs example"
//         >
//           <LinkTab label="Page One" href="/drafts" {...a11yProps(0)} />
//           <LinkTab label="Page Two" href="/trash" {...a11yProps(1)} />
//           <LinkTab label="Page Three" href="/spam" {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>
//         Page One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Page Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Page Three
//       </TabPanel>
//     </div>
//   );
// }
import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Link, Redirect } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Home from "../../components/Home/Home";
import More from "../../components/More/More";
import About from "../../components/About/About";
import Typography from "@material-ui/core/Typography";

// const AntTabs = withStyles({
//   root: {
//     borderBottom: '1px solid #e8e8e8',
//   },
//   indicator: {
//     backgroundColor: '#1890ff',
//   },
// })(Tabs);

// const AntTab = withStyles((theme) => ({
//   root: {
//     textTransform: 'none',
//     minWidth: 72,
//     fontWeight: theme.typography.fontWeightRegular,
//     marginRight: theme.spacing(4),
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:hover': {
//       color: '#40a9ff',
//       opacity: 1,
//     },
//     '&$selected': {
//       color: '#1890ff',
//       fontWeight: theme.typography.fontWeightMedium,
//     },
//     '&:focus': {
//       color: '#40a9ff',
//     },
//   },
//   selected: {},
// }))((props) => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      maxWidth: 60,
      width: "100%",
      backgroundColor: "#e6005c",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#fff",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  demo2: {
    backgroundColor: "#23282d",
  },
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // if(newValue===0){
    //     <Redirect to="/"/>
    // }
    // else if (newValue===1){
    //     <Redirect to="/about"/>
    // }
    // else
    // <Redirect to="/more"/>
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo2}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
          indicator={value.toString()}
        >
          {/* <Link to="/" > */}
          <StyledTab label="Travel With Me">
            <Link to="/" />
          </StyledTab>

          <StyledTab label="About">
            <Link to="/about">About</Link>
          </StyledTab>

          <StyledTab label="More">
            <Link to="/more" />
          </StyledTab>
        </StyledTabs>
      </div>
    </div>
  );
}
