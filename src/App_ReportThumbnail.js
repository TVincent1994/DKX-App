import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { typography } from "@material-ui/system";
import ButtonBase from "@material-ui/core/ButtonBase";
import ReportIcon from "@material-ui/icons/Report";
import { List, ListItem } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import App_Executive_ReportReview_Page from "./App_Executive_ReportReview_Page";
import AssignmentIcon from "@material-ui/icons/Assignment";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  buttons: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

class App_ReportThumbnail extends Component {
  useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    buttons: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  onReportClick(id) {
    ReactDOM.render(
      <React.StrictMode>
        <App_Executive_ReportReview_Page />
      </React.StrictMode>,
      document.getElementById("root")
    );
  }

  render() {
    const classes = this.useStyles;
    const reportElements = this.props.report;
    return (
      <List className={classes.root}>
        {reportElements.map((value, index) => (
          <>
            <ListItem
              alignItems="flex-start"
              button
              onClick={(event) => this.onReportClick(this.props.report._id)}
            >
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText
                primary={value.report_title}
                secondary={value.topic}
              />
              <ListItemText
                primary={"Veracity score " + value.veracity_score}
                secondary={value.last_refreshed}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    );
  }
}

export default App_ReportThumbnail;
