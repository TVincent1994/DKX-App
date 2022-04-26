import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
// import { positions } from '@material-ui/system';
// import AppBar from 'material-ui/AppBar';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from 'material-ui-icons/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
const styles = theme => ({
  root: {
    width: '100%',
    // alignSelf: 'stretch',
    position: 'fixed',
    // top: 0,
    justifyContent: 'center',
    // left: 0,
    bottom: 0,
    color: 'red',
    // textalign: 'left'
    },
    flex: {
        flex: 1,
        justifyContent: 'center',
      },
});

function LogOutButton(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <Button 
      variant = 'contained' 
      fullWidth = {true} 
      color = 'white' 
      left = {50}
    //   position="static"
      >
          Log Out
      </Button>
    </div>
  );
}
LogOutButton.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LogOutButton);
