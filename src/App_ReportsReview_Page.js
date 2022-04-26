import React, { Component } from "react";
import styles from "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import App_ReportThumbnail from "./App_ReportThumbnail";
import HomeScreen_ButtonAppBar from "./HomePage_ButtonAppBar";
import { typography } from "@material-ui/system";
import { Button, TextField } from "@material-ui/core";
import SourceControl_ButtonAppBar from "./SourceControl_ButtonAppBar";

let userName = localStorage.getItem("username");
let role = localStorage.getItem("role");
let fullName = localStorage.getItem("fullname");

class App_ReportsReview_page extends Component {
  state = {
    reportData: [],
  };

  componentDidMount() {
    fetch(
      "/reportsReview?user=" + this.props.userName + "&role=" + this.props.role
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ reportData: data });
      });
  }

  onSortByClick = (sortBy) => {
    //let sortBy = e.target.value;
    let sortByColumn = localStorage.getItem("SortBy");
    let sortByOrder = localStorage.getItem("sortByOrder");

    console.log("sortBy :" + sortBy + " " + sortByColumn + " values");

    if (sortBy === sortByColumn) {
      if (sortByOrder === "1") {
        sortByOrder = "-1";
      } else {
        sortByOrder = "1";
      }
    } else {
      if (sortBy === "time") {
        sortByColumn = "time";
        sortByOrder = "1";
      } else if (sortBy === "author") {
        sortByColumn = "author";
        sortByOrder = "1";
      } else {
        sortByColumn = "topic";
        sortByOrder = "1";
      }
    }

    localStorage.setItem("SortBy", sortByColumn);
    localStorage.setItem("sortByOrder", sortByOrder);

    console.log("sort By :" + sortByColumn + " " + sortByOrder);

    fetch(
      "/reportsReview?user=" +
        this.props.userName +
        "&role=" +
        this.props.role +
        "&sortBy=" +
        sortByColumn +
        "&order=" +
        sortByOrder
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ reportData: data });
      });
  };

  useStyles = makeStyles((theme) => ({
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

  render() {
    const elements = this.state.reportData;
    const classes = this.useStyles;
    return (
      <div>
        <div>
          <header fullWidth className={styles.header}>
            <SourceControl_ButtonAppBar titleText={"Report Review"} />
          </header>
        </div>
        <div>
          <div className={classes.root}>
            <Grid container spacing={5} alignItems="center">
              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justify="center"
                xs={12}
              >
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <typography>Order By</typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        value="Most Recent"
                        variant="contained"
                        //   display = 'flex'
                        //   justifyContent = 'center'
                        color="default"
                        fullWidth={true}
                        //className={classes.button}
                        onClick={() => this.onSortByClick("time")}
                      >
                        Most Recent
                      </Button>
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        value="Author"
                        variant="contained"
                        //   display = 'flex'
                        //   justifyContent = 'center'
                        color="default"
                        fullWidth={true}
                        //className={classes.button}
                        onClick={() => this.onSortByClick("author")}
                      >
                        Author
                      </Button>
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        value="Topic"
                        variant="contained"
                        //   display = 'flex'
                        //   justifyContent = 'center'
                        color="default"
                        fullWidth={true}
                        //   className={classes.button}
                        onClick={() => this.onSortByClick("topic")}
                      >
                        Topic
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid item>
                    <TextField
                      id="standard-basic"
                      label="What you looking for?"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                container
                spacing={5}
                direction="column"
                alignItems="center"
                justify="center"
                xs={12}
              >
                {/*elements.map((value, index) => (
                  <Grid item xs={12} fullWidth={true}>
                    <App_ReportThumbnail report={value} />
                  </Grid>
                ))*/}

                <App_ReportThumbnail report={elements} />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default App_ReportsReview_page;
