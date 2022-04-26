import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
// import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import { Link } from "react-router-dom";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from 'material-ui-icons/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import { positions } from '@material-ui/system';
const styles = (theme) => ({
  root: {
    //width: '600px',
    //height: '40px',
    // position: 'fixed',
    //bottom: 200,
    //justifyContent : 'center',
    //display: 'flex',
    //flex: 1,
  },
});

function HomeScreenButton_Trace(props) {
  const classes = props.classes;
  return (
    <div className="traceButton">
      {/*<Link to="/" style={{textDecoration: 'none'}}></Link>*/}
      <Button
        variant="contained"
        //   display = 'flex'
        //   justifyContent = 'center'
        color="default"
        // width='900px'
        className={classes.button}
        // fullWidth = {true}
        startIcon={<TrackChangesIcon />}
        onClick={props.traceClick}
      >
        Trace
      </Button>
    </div>
  );
}
HomeScreenButton_Trace.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HomeScreenButton_Trace);
