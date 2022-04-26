import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
// import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
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
    // bottom: 300,
    color: "red",
  },
});

function HomeScreenButton_ReportReview(props) {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      {/*<Link to="/App_Executive_ReportReview_Page" style={{textDecoration: 'none'}}></Link>*/}
      <Button
        variant="contained"
        //   display = 'flex'
        //   justifyContent = 'center'
        color="default"
        className={classes.button}
        startIcon={<LibraryAddCheckIcon />}
        onClick={props.reportReviewClick}
      >
        Report Review
      </Button>
    </div>
  );
}
HomeScreenButton_ReportReview.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HomeScreenButton_ReportReview);
