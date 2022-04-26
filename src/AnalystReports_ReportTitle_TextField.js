import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
// import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import createSpacing from '@material-ui/core/styles/createSpacing';

const styles = theme => ({
    root: {
      // width: '400px',
    //   position: 'fixed',
      top: 100,
      },
    divider: {
        margin: 5,
    },
  });

  function AnalystReports_ReportTitle_TextField(props) {
    const classes = props.classes;
    return (
    <div className={classes.root}>
      <div className={classes.divider}>
        <TextField
          multiline = {true}
          fullWidth = {true}
          rows = {2}
          placeholder = 'Nova Scotia Shooting
          Analyst A, 1 hour ago'
          disabled = {true}
        // variant="contained"
        //   display = 'flex'
          justifyContent = 'center'
        //   color="default" 
        //   className={classes.TextField}
        //   startIcon={<InfoIcon />}
          />
        {/* </TextField> */}
        {/* <Divider  /> */}
      </div>
    </div>
    );
  }
  AnalystReports_ReportTitle_TextField.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(AnalystReports_ReportTitle_TextField);
       
