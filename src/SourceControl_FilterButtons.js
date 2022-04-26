import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Divider from '@material-ui/core/Divider';

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
    Federal : false,
    Academic : false,
    Media : false 
}

// const [clicked, setClicked] = useState(false);

// const handleClick = () => {
//     setOpen(true);
//   };

  function SourceControl_FilterButtons (props) {
    const [Federal, setFederal] = useState(false);
    const [Academic, setAcademic] = useState(false);
    const [Media, setMedia] = useState(false);

    //old code
    // const classes = props.classes;
    //new code
    const classes = useStyles();
    return (
      <div className={classes.root}>
        {/* <Divider fullwidth = {true}/> */}
        <Button variant='outlined' color="primary" className={classes.button}
            onClick={() => setFederal(!Federal)} variant={Federal ? "contained" : "outlined"}>
        {/*    display = 'flex'
           justifyContent = 'center'          
           startIcon={<NoteAddIcon />} */}
          Federal
        </Button>
        <Button variant ="outlined" color="primary" 
            onClick={() => setAcademic(!Academic)} variant={Academic ? "contained" : "outlined"}>
                Academic
                {/* from: https://codesandbox.io/s/gracious-frog-du5s1?file=/src/index.js */}
        </Button>
        <Button variant ="outlined" color="primary"
            onClick={() => setMedia(!Media)} variant={Media ? "contained" : "outlined"}>
            Media
        </Button>
      </div>
    );
  }
  SourceControl_FilterButtons.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(SourceControl_FilterButtons);
       
