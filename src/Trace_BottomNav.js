import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AssignmentIcon from "@material-ui/icons/Assignment";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ScatterPlotIcon from "@material-ui/icons/ScatterPlot";
import Divider from "@material-ui/core/Divider";

//old code
const styles = (theme) => ({
  root: {
    width: "100px",
    position: "fixed",
  },
});

//new declaration from material ui docs
const useStyles = makeStyles({
  root: {
    width: "100%",
    bottom: 0,
    position: "fixed",
  },
});

function Trace_BottomNav(props) {
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
        className="TraceBottomNavBar"
      >
        <BottomNavigationAction label="Report" icon={<AssignmentIcon />} />
        <BottomNavigationAction label="Analytics" icon={<AssessmentIcon />} />
        <BottomNavigationAction label="Topology" icon={<ScatterPlotIcon />} />
        <BottomNavigationAction label="Trace" icon={<TrackChangesIcon />} />
      </BottomNavigation>

      {/* <Button 
        variant="contained"
          color="default"
          className={classes.button}
          >DONE
        </Button> */}
    </div>
  );
}
Trace_BottomNav.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Trace_BottomNav);
