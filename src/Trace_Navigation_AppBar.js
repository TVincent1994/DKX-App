import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
// import AppBar from 'material-ui/AppBar';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from 'material-ui-icons/Menu';
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import BuildIcon from "@material-ui/icons/Build";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import InfoIcon from "@material-ui/icons/Info";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App_Executive_Home from "./App_Executive_Home";
import App_InformationFeed_Page from "./App_InformationFeed_Page";

const styles = (theme) => ({
  root: {
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 10,
  },
  flex: {
    flex: 1,
    height: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
  },
  backButton: {},
  fullList: {
    width: "auto",
  },
});

function Trace_Navigation_AppBar(props) {
  //const for drawer component attached to menu icon
  //const classes = useStyles();   --code from Material UI docs --overlaps with const classes = props.classes;

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  //const for dialogue button on Submit
  const classes = props.classes;
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className="backButton"></div>

          <Typography type="title" color="inherit" className={classes.flex}>
            <div className="TraceHeaderText">Trace</div>
          </Typography>
          {/* <Button color="contrast">Material Button</Button> */}
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
Trace_Navigation_AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Trace_Navigation_AppBar);
