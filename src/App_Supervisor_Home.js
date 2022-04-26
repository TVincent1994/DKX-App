import React, { Component } from "react";
import styles from "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import { positions } from '@material-ui/system';
// import logo from './logo.svg';
// import './App.css';
// import 'typeface-roboto';
import ButtonAppBar from "./ButtonAppBar";
import LogOutButton from "./LogOutButton";
import HomeScreenButton_InfoFeed from "./HomeScreenButton_InfoFeed";
import HomeScreenButton_ReportReview from "./HomeScreenButton_ReportReview";
import HomeScreenButton_CreateReport from "./HomeScreenButton_CreateReport";
import HomeScreenButton_Trace from "./HomeScreenButton_Trace";
import HomeScreenButton_Instructions from "./HomeScreenButton_Instructions";
import HomeScreen_TextField from "./HomeScreen_TextField";
import HomeScreen_ButtonAppBar from "./HomePage_ButtonAppBar";
import HomeScreenButton_AnalystReports from "./HomeScreenButton_AnalystReports";
import HomeScreenButton_SupervisorReport from "./HomeScreenButton_SupervisorReport";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Supervisor_AnalystReports_ButtonAppBar from "./Supervisor_AnalystReports_ButtonAppBar";

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

const message = `A decentralized knowledge management tool`;

//Router & Multipage
class App_Supervisor_Home extends Component {
  viewReports = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <div>
          <header className={styles.header}>
            {/* <ButtonAppBar /> */}
            <HomeScreen_ButtonAppBar />
          </header>
        </div>
        <div>
          {/* <Box display='flex' flexdirection = 'column' justifyContent = 'center' >
            <HomeScreen_TextField />
            <HomeScreenButton_InfoFeed />
            <HomeScreenButton_CreateReport />
            <HomeScreenButton_Trace />
            <HomeScreenButton_Instructions />
          </Box> */}
          <Grid
            container
            spacing={5}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item xs={12}>
              <HomeScreen_TextField />
            </Grid>
            <div className="messageText">
              <Grid item xs={12}>
                <Typography>{message}</Typography>
              </Grid>
            </div>
            <Grid item xs={12}>
              <HomeScreenButton_InfoFeed />
            </Grid>
            <Grid item xs={12}>
              <HomeScreenButton_AnalystReports />
            </Grid>
            <Grid item xs={12}>
              <HomeScreenButton_SupervisorReport />
            </Grid>
            <Grid item xs={12}>
              <HomeScreenButton_Trace />
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

export default App_Supervisor_Home;
