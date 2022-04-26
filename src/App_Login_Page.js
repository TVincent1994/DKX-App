import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ReactDOM from "react-dom";
import App_Supervisor_Home from "./App_Supervisor_Home";
import App_Analyst_Home from "./App_Analyst_Home";
import App_Executive_Home from "./App_Executive_Home";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.accenture.com/">
        Accenture
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export class App_Login_Page extends Component {
  state = {
    username: "",
    password: "",
  };

  loginAction = (e) => {
    e.preventDefault();

    fetch("/login?name=" + this.state.username + "&pwd=" + this.state.password)
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
        } else {
          console.log(
            "Login-form submitted ",
            data[0].user_name + " " + data[0].fullname + " " + data[0].role
          );
          localStorage.setItem("username", data[0].user_name);
          localStorage.setItem("role", data[0].role);
          localStorage.setItem("fullname", data[0].fullname);

          let roleName = data[0].role;
          if (roleName == "Analyst") {
            ReactDOM.render(
              <React.StrictMode>
                <App_Analyst_Home />
              </React.StrictMode>,
              document.getElementById("root")
            );
          } else if (roleName == "Executive") {
            ReactDOM.render(
              <React.StrictMode>
                <App_Executive_Home />
              </React.StrictMode>,
              document.getElementById("root")
            );
          } else if (roleName == "Supervisor") {
            ReactDOM.render(
              <React.StrictMode>
                <App_Supervisor_Home />
              </React.StrictMode>,
              document.getElementById("root")
            );
          }
        }

        //console.log("Login-form submitted");
      })
      .catch((error) => console.log("error: ", error));
  };

  handleUserName = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={this.loginAction}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Login Id"
              name="email"
              autoComplete="email"
              value={this.state.username}
              onChange={this.handleUserName}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handlePassword}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained">
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}
