import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from 'material-ui-icons/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
import { positions } from '@material-ui/system';
const styles = theme => ({
    root: {
      // width: '400px',
      // position: 'fixed',
      bottom: 100,
      },
  });

  function HomeScreenButton_Instructions(props) {
    const classes = props.classes;
    return (
      <div className={classes.root}>
        <Button variant="contained"
        //   display = 'flex'
        //   justifyContent = 'center'
          color="default" 
          className={classes.button}
          startIcon={<InfoIcon />}
          >Instructions
        </Button>
      </div>
    );
  }
  HomeScreenButton_Instructions.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(HomeScreenButton_Instructions);
       
