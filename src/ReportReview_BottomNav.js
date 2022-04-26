import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

//old code
const styles = theme => ({
    root: {
    //   width: '400px',
    //   position: 'fixed',
      bottom: 50,
    //   color: 'red',
      },
  });

  //new declaration from material ui docs
  const useStyles = makeStyles({
    root: {
      width: '100%',
      bottom: 0,
      position: 'fixed'
    },
  });

  function ReportReview_BottomNav(props) {
    // const classes = props.classes;

    //code for setting icon state
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
      <div className={classes.root}>
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Report" icon={<AssignmentIcon />} />
      <BottomNavigationAction label="Analytics" icon={<AssessmentIcon />} />
      <BottomNavigationAction label="Topology" icon={<ScatterPlotIcon />} />
      <BottomNavigationAction label="Trace" icon={<TrackChangesIcon />} />
    </BottomNavigation>

        {/* <Button 
        variant="contained"
        //   display = 'flex'
        //   justifyContent = 'center'
          color="default"
          className={classes.button}
          // startIcon={<NoteAddIcon />}
          >DONE
        </Button> */}
      </div>
    );
  }
  ReportReview_BottomNav.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(ReportReview_BottomNav);
       
