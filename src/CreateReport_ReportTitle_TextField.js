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
      // position: 'fixed',
      top: 100,
      },
    divider: {
        margin: 5,
    },
  });

  function CreateReport_ReportTitle_TextField(props) {
    const classes = props.classes;
    return (
    <div className={classes.root}>
      <div className={classes.divider}>
        <TextField
          multiline = {true}
          fullWidth = {true}
          rows = {2}
          placeholder = 'Nova Scotia Shooting Summary'
          disabled = {true}
          // variant="contained"
        //   display = 'flex'
          justifyContent = 'center'
          color="red" 
        //   className={classes.TextField}
        //   startIcon={<InfoIcon />}
          />
        {/* </TextField> */}
        <Divider  />
      </div>
    </div>
    );
  }
  CreateReport_ReportTitle_TextField.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(CreateReport_ReportTitle_TextField);
       
