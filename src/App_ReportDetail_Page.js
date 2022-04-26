import React, { Component } from "react";
import styles from "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import App_ReportThumbnail from "./App_ReportThumbnail";
import HomeScreen_ButtonAppBar from "./HomePage_ButtonAppBar";
import { typography } from "@material-ui/system";
import { Button, TextField } from "@material-ui/core";

let userName = localStorage.getItem("username");
let role = localStorage.getItem("role");
let fullName = localStorage.getItem("fullname");

class App_ReportDetail_page extends Component {
  state = {
    reportData: [],
  };

  componentDidMount() {}

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
            <HomeScreen_ButtonAppBar />
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
                    <Grid item>
                      <typography>Order By</typography>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        //   display = 'flex'
                        //   justifyContent = 'center'
                        color="default"
                        // width='900px'
                        className={classes.button}
                      >
                        Most Recent
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        //   display = 'flex'
                        //   justifyContent = 'center'
                        color="default"
                        // width='900px'
                        className={classes.button}
                      >
                        Author
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        //   display = 'flex'
                        //   justifyContent = 'center'
                        color="default"
                        // width='900px'
                        className={classes.button}
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
                <Paper>This is big report paper</Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default App_ReportsReview_page;
