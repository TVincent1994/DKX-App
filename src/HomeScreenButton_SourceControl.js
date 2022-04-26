import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
// import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import BuildIcon from "@material-ui/icons/Build";
import { Link } from "react-router-dom";
// import NoteAddIcon from '@material-ui/icons/NoteAdd';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from 'material-ui-icons/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import { positions } from '@material-ui/system';
const styles = (theme) => ({
  root: {
    //   width: '400px',
    // position: 'fixed',
    // bottom: 250,
    color: "red",
  },
});

function HomeScreenButton_SourceControl(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      {/*<Link to="/App_Executive_SourceControl_Page" style={{textDecoration: 'none'}}></Link>*/}
      <Button
        variant="contained"
        //   display = 'flex'
        //   justifyContent = 'center'
        color="default"
        className={classes.button}
        startIcon={<BuildIcon />}
        onClick={props.sourceControlClick}
      >
        Source Control
      </Button>
    </div>
  );
}
HomeScreenButton_SourceControl.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HomeScreenButton_SourceControl);
