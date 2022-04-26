import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
    root: {
    //   width: '400px',
      position: 'fixed',
      bottom: 50,
      color: 'red',
      margin: 10,
      },
  });


  function AnalystScreen_CreateReportButton(props) {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const classes = props.classes;
    return (
      <div className={classes.root}>
        {/* <Divider fullwidth = {true}/> */}
        <Button onClick = {handleClickOpen}
        variant="contained"
        //   display = 'flex'
        //   justifyContent = 'center'
          color="default"
          className={classes.button}
          // startIcon={<NoteAddIcon />}
        >SUBMIT REPORT
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{"Submit report to your Supervisor?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Submission will be finalized upon submission and cannot be reversed.
            </DialogContentText>
          </DialogContent> 
          <DialogActions display = 'flex'showCloseIcon = {true}>
            <Button display ='flex' onClick={handleClose} color="secondary" justifyContent = 'left' >
              Cancel
            </Button>
            <div style={{flex: '1 0 0'}} />
            <Button onClick={handleClose} color="primary" autoFocus >
              Submit{/* onClick={this.nestedbuttonclick} showCloseIcon = {true} */}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  AnalystScreen_CreateReportButton.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(AnalystScreen_CreateReportButton);
       
