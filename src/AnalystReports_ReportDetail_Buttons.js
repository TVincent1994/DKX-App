import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOffOutlined';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PublishIcon from '@material-ui/icons/Publish';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';

//original code
const styles = theme => ({
    root: {
    //   width: '400px',
    //   position: 'fixed',
    //   bottom: 50,
    // top: 200,
      color: 'red',
      },
  });


  //code from material UI docs
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const initialState = {
    Visibility : false,
    Confidence : false,
    Time : false 
}

// const [clicked, setClicked] = useState(false);

// const handleClick = () => {
//     setOpen(true);
//   };

  function AnalystReports_ReportDetail_Buttons (props) {
    const [Visibility, setVisibility] = useState(false);
    const [Confidence, setConfidence] = useState(false);
    const [Time, setTime] = useState(false);
//above is to change the icons, below is for the PDF dialog
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
      const handleClose = () => {
      setOpen(false);
    };

    //old code
    // const classes = props.classes;
    //new code
    const classes = useStyles();
    return (
      <div className={classes.root}>
        {/* <Divider fullwidth = {true}/> */}
        <Tooltip title='Source Vision'>
            {/* <IconButton color="primary" className={classes.button} */}
                {/* onClick={() => setVisibility(!Visibility)} variant={MostRecent ? "contained" : "text"}> */}
            <IconButton color="primary" className={classes.button} onClick={() => setVisibility(!Visibility)}>
            {/*    display = 'flex'
            justifyContent = 'center'          
            startIcon={<NoteAddIcon />} */}
                {Visibility ? <VisibilityIcon/> : <VisibilityOffIcon/>}
            </IconButton>
        </Tooltip>
        <Tooltip title='High Confidence'>
            <IconButton color="primary" onClick={() => setConfidence(!Confidence)}>
                {Confidence ? <StarIcon/> : <StarBorderIcon/>}
                {/* from: https://codesandbox.io/s/gracious-frog-du5s1?file=/src/index.js */}
            </IconButton>
        </Tooltip>
        <Tooltip title='Timestamps'>
            <IconButton color="primary" onClick={() => setTime(!Time)}>
                {Time ? <WatchLaterIcon/> : <QueryBuilderIcon/>}
            </IconButton>
        </Tooltip>
        <Tooltip title='Export to PDF'>
            <IconButton color='primary' onClick = {handleClickOpen}>
                <PublishIcon />
            </IconButton>
        </Tooltip>
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{'Export the Report to PDF?'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You will be taken to the print preview, where you can print the document or cancel the job.
            </DialogContentText>
          </DialogContent> 
          <DialogActions display = 'flex' showCloseIcon = {true}>
            <Button display ='flex' onClick={handleClose} color="secondary" justifyContent = 'left' >
              Cancel
            </Button>
            <div style={{flex: '1 0 0'}} />
            <Button onClick={handleClose} color="primary" autoFocus >
              Continue{/* onClick={this.nestedbuttonclick} showCloseIcon = {true} */}
            </Button>
          </DialogActions>
        </Dialog>
        <Divider/>
      </div>
    );
  }
  AnalystReports_ReportDetail_Buttons.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(AnalystReports_ReportDetail_Buttons);
       
