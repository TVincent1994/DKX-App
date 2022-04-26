import React from "react";
import ReactDOM from "react-dom";
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
import App_ReportsReview_page from "./App_ReportsReview_Page";
import App_Executive_ReportReview_Page from "./App_Executive_ReportReview_Page";
import App_Executive_Trace_Page from "./App_Executive_Trace_Page";
import App_Executive_SourceControl_Page from "./App_Executive_SourceControl_Page";

const styles = (theme) => ({
  root: {
    width: "100%",
    // position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 10,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

function menuClicked(command) {
  console.log(command);

  switch (command) {
    case "home": {
      console.log(command);

      ReactDOM.render(
        <React.StrictMode>
          <App_Executive_Home userName={"uer"} role={"Executive"} />
        </React.StrictMode>,
        document.getElementById("root")
      );
      break;
    }
    case "infofeed": {
      console.log(command);

      ReactDOM.render(
        <React.StrictMode>
          <App_InformationFeed_Page userName={"uer"} role={"Executive"} />
        </React.StrictMode>,
        document.getElementById("root")
      );
      break;
    }
    case "reportreview": {
      console.log(command);

      ReactDOM.render(
        <React.StrictMode>
          <App_ReportsReview_page userName={"uer"} role={"Executive"} />
        </React.StrictMode>,
        document.getElementById("root")
      );
      break;
    }
    case "trace": {
      ReactDOM.render(
        <React.StrictMode>
          <App_Executive_Trace_Page userName={"uer"} role={"Executive"} />
        </React.StrictMode>,
        document.getElementById("root")
      );
      break;
    }
    case "sourcecontrol": {
      ReactDOM.render(
        <React.StrictMode>
          <App_Executive_SourceControl_Page
            userName={"uer"}
            role={"Executive"}
          />
        </React.StrictMode>,
        document.getElementById("root")
      );
      break;
    }
    case "instructions": {
    }
  }
}

function SourceControl_ButtonAppBar(props) {
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

  const list = (anchor) => (
    // <Router>
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* code from material UI documentation */}
        {/* {['Home', 'Information Feed', 'Create Report', 'Trace', 'Instructions'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <AssignmentIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        {/* code based on basic list material UI docs */}
        {/* <Link to ="/App_Executive_Home"><ListItem button> */}
        {/* <Route path="/App_Executive_Home" exact components={App_Executive_Home}><ListItem button> */}
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" onClick={() => menuClicked("home")} />
          {/* </ListItem> </Route> */}
          {/* </ListItem> </Link> */}
        </ListItem>
        {/* <Route path="/App_InformationFeed_Page" exact components={App_InformationFeed_Page}><ListItem button> */}
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            primary="Information Feed"
            onClick={() => menuClicked("infofeed")}
          />
        </ListItem>
        {/* </ListItem> </Route> */}
        <ListItem button>
          <ListItemIcon>
            <LibraryAddCheckIcon />
          </ListItemIcon>
          <ListItemText
            primary="Report Review"
            onClick={() => menuClicked("reportreview")}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TrackChangesIcon />
          </ListItemIcon>
          <ListItemText primary="Trace" onClick={() => menuClicked("trace")} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText
            primary="Source Control"
            onClick={() => menuClicked("sourcecontrol")}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText
            primary="Instructions"
            onClick={() => menuClicked("instructions")}
          />
        </ListItem>
      </List>
      {/* <Divider /> */}
      {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
    </div>
    // </Router>
  );

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
          <div>
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                  onClick={toggleDrawer(anchor, true)}
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                >
                  <MenuIcon />
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </IconButton>
              </React.Fragment>
            ))}
          </div>
          <Typography type="title" color="inherit" className={classes.flex}>
            {props.titleText}
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
SourceControl_ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SourceControl_ButtonAppBar);

// from https://mpolinowski.github.io/create-react-app-and-material-ui
