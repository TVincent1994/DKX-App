import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
    //   width: '400px',
      position: 'fixed',
      bottom: 50,
      color: 'red',
      },
  });

  function CreateReport_DoneButton(props) {
    const classes = props.classes;
    return (
      <div className={classes.root}>
        <Divider fullwidth = {true}/>
        <Button 
        variant="contained"
        //   display = 'flex'
        //   justifyContent = 'center'
          color="default"
          className={classes.button}
          // startIcon={<NoteAddIcon />}
          >DONE
        </Button>
      </div>
    );
  }
  CreateReport_DoneButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(CreateReport_DoneButton);
       
