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
    MostRecent : false,
    Popular : false,
    Type : false 
}

// const [clicked, setClicked] = useState(false);

// const handleClick = () => {
//     setOpen(true);
//   };

  function InformationFeed_OrderButtons (props) {
    const [MostRecent, setMostRecent] = useState(false);
    const [Popular, setPopular] = useState(false);
    const [Type, setType] = useState(false);

    //old code
    // const classes = props.classes;
    //new code
    const classes = useStyles();
    return (
      <div className={classes.root}>
        {/* <Divider fullwidth = {true}/> */}
        <Button variant="outlined" color="primary" className={classes.button}
            onClick={() => setMostRecent(!MostRecent)} variant={MostRecent ? "contained" : "text"}>
        {/*    display = 'flex'
           justifyContent = 'center'          
           startIcon={<NoteAddIcon />} */}
          Most Recent
        </Button>
        <Button variant ="outlined" color="primary" 
            onClick={() => setPopular(!Popular)} variant={Popular ? "contained" : "text"}>
                Popular
                {/* from: https://codesandbox.io/s/gracious-frog-du5s1?file=/src/index.js */}
        </Button>
        <Button variant ="outlined" color="primary"
            onClick={() => setType(!Type)} variant={Type ? "contained" : "text"}>
            Type
        </Button>
      </div>
    );
  }
  InformationFeed_OrderButtons.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(InformationFeed_OrderButtons);
       
