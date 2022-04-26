import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Divider from '@material-ui/core/Divider';

//original code
const styles = theme => ({
    root: {
    //   width: '400',
    //   position: 'fixed',
    //   bottom: 50,
    // top: 200,
      color: 'blue',

      },
  });

  //code from material UI docs
// const useStyles = makeStyles((theme) => ({
// root: {
//     '& > *': {
//     margin: theme.spacing(1),
//     },
// },
// }));

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
];

  function SourceControl_AutocompleteSearch (props) {

    const classes = styles();
    return (
      <div justifyContent= 'center' style={{ width: 300 }}>
      <Autocomplete
        id="search-report"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params} label="Search Source Organizations" margin="normal" variant="outlined" />
        )}
      />
      <Divider />
      </div>
    );
  }
  SourceControl_AutocompleteSearch.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(SourceControl_AutocompleteSearch);
       
