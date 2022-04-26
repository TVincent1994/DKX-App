import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
// import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import createSpacing from '@material-ui/core/styles/createSpacing';
import GridList from '@material-ui/core/GridList'
import { TextareaAutosize } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const styles = theme => ({
    root: {
      // width: '400px',
      position: 'fixed',
      top: 100,
      justifyContent: 'space-around'
      },
      textField: {
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
        // width: '25ch',
      },
      gridList: {
        width: 500,
        height: 500,
        // spacing: 10,
        // cellHeight: 10,
      },
  });

  function CreateReport_DefineReport(props) {
    const classes = props.classes;
    return (
    <div className={classes.root}>
        <Container>
         {/* <GridList className={classes.gridList} cols={1}> */}
             {/* {tileData.map((tile) => ( */}
             {/* <GridListTile key={tile.img} cols={tile.cols || 1}> */}
                {/* <img src={tile.img} alt={tile.title} /> */}
              {/* </GridListTile> */}
         {/* ) */}
        <TextField
          id="standard-full-width"
          label="Title"
          style={{ margin: 20 }}
          placeholder="Enter Title Here"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Sub-Title"
          style={{ margin: 20 }}
          placeholder="Enter Sub-Title Here"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Permissions"
          style={{ margin: 20 }}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Label"
          style={{ margin: 20 }}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Label"
          style={{ margin: 20 }}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </Container>
        </div>
        // )}
    
    );
  }
  CreateReport_DefineReport.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(CreateReport_DefineReport);
       
