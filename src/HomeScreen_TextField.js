import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
// import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
      // width: '400px',
      // position: 'fixed',
      bottom: 500,
      },
  });

  function HomeScreen_TextField(props) {
    const classes = props.classes;
    return (
      <div className={classes.root}>
        <TextField 
          defaultValue = 'Exchange'
          disabled = {true}
        // variant="contained"
        //   display = 'flex'
        //   justifyContent = 'center'
        //   color="default" 
        //   className={classes.TextField}
        //   startIcon={<InfoIcon />}
          >
        </TextField>
      </div>
    );
  }
  HomeScreen_TextField.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(HomeScreen_TextField);
       
