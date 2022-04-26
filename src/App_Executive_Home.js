import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import { positions } from '@material-ui/system';
// import logo from './logo.svg';
// import './App.css';
// import 'typeface-roboto';
import App_Executive_ReportReview_Page from "./App_Executive_ReportReview_Page";
import ButtonAppBar from "./ButtonAppBar";
import LogOutButton from "./LogOutButton";
import HomeScreenButton_InfoFeed from "./HomeScreenButton_InfoFeed";
import HomeScreenButton_ReportReview from "./HomeScreenButton_ReportReview";
import HomeScreenButton_Trace from "./HomeScreenButton_Trace";
import HomeScreenButton_SourceControl from "./HomeScreenButton_SourceControl";
import HomeScreenButton_Instructions from "./HomeScreenButton_Instructions";
import HomeScreen_TextField from "./HomeScreen_TextField";
import HomeScreen_ButtonAppBar from "./HomePage_ButtonAppBar";
import App_reportsReview_Page from "./App_ReportsReview_Page";
import CreateReport_ButtonAppBar from "./CreateReport_ButtonAppBar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Media from "react-media";
import App_InformationFeed_Page from "./App_InformationFeed_Page";
import App_Executive_Trace_Page from "./App_Executive_Trace_Page";
import App_Executive_SourceControl_Page from "./App_Executive_SourceControl_Page";

// import { Grid } from '@material-ui/core';

var MediaQuery = require("react-responsive");

const message = `A decentralized knowledge management tool`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  buttons: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

//Router & Multipage
class App_Executive_Home extends Component {
  onReportReviewClick = (e) => {
    let userName = localStorage.getItem("username");
    let role = localStorage.getItem("role");
    let fullName = localStorage.getItem("fullname");
    ReactDOM.render(
      <React.StrictMode>
        <App_reportsReview_Page userName={userName} role={role} />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

  onInfofeedClick = (e) => {
    let userName = localStorage.getItem("username");
    let role = localStorage.getItem("role");
    let fullName = localStorage.getItem("fullname");
    ReactDOM.render(
      <React.StrictMode>
        <App_InformationFeed_Page userName={userName} role={role} />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

  onTraceClick = (e) => {
    let userName = localStorage.getItem("username");
    let role = localStorage.getItem("role");
    let fullName = localStorage.getItem("fullname");
    ReactDOM.render(
      <React.StrictMode>
        <App_Executive_Trace_Page userName={userName} role={role} />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

  onSourceControlClick = (e) => {
    let userName = localStorage.getItem("username");
    let role = localStorage.getItem("role");
    let fullName = localStorage.getItem("fullname");
    ReactDOM.render(
      <React.StrictMode>
        <App_Executive_SourceControl_Page userName={userName} role={role} />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };

  render() {
    return (
      <div>
        <div>
          <header className="homeHeader">
            <HomeScreen_ButtonAppBar />
          </header>
        </div>
        <div>
          {/*<Box display='flex' flexdirection = 'column' justifyContent = 'center' >
            <HomeScreen_TextField />
            <HomeScreenButton_InfoFeed />
            <HomeScreenButton_ReportReview />
            <HomeScreenButton_Trace />
            <HomeScreenButton_SourceControl />
            <HomeScreenButton_Instructions />
          </Box> */}
          <Grid
            container
            spacing={5}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item sm>
              <HomeScreen_TextField />
            </Grid>
            <div className="messageText">
              <Grid item xs={12}>
                <Typography>{message}</Typography>
              </Grid>
            </div>
            <Grid item xs={12}>
              <HomeScreenButton_InfoFeed infofeedClick={this.onInfofeedClick} />
            </Grid>
            <Grid item xs={12}>
              <HomeScreenButton_ReportReview
                reportReviewClick={this.onReportReviewClick}
              />
            </Grid>
            <Grid item xs={12}>
              <HomeScreenButton_Trace traceClick={this.onTraceClick} />
            </Grid>
            <Grid item xs={12}>
              <HomeScreenButton_SourceControl
                sourceControlClick={this.onSourceControlClick}
              />
            </Grid>
            <Grid item xs={12}>
              <HomeScreenButton_Instructions />
            </Grid>
          </Grid>
        </div>
        <div>
          <LogOutButton />
        </div>
      </div>
    );
  }
}

export default App_Executive_Home;
