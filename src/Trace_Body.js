import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
// import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import createSpacing from "@material-ui/core/styles/createSpacing";

const styles = (theme) => ({
  root: {
    width: "90%",
    height: "100%",
    fullWidth: true,
    color: "primary",
  },
  divider: {
    margin: 10,
    color: "primary",
  },
});

function Trace_Body(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <Divider />
      <div className="TraceBody">
        <div id="TraceBodyContainer">Trace Place Holder</div>
      </div>
      <Divider />
    </div>
  );
}
Trace_Body.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Trace_Body);
