import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
// import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import createSpacing from '@material-ui/core/styles/createSpacing';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import { TextareaAutosize } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    //   backgroundColor: theme.palette.background.paper,
    },
    gridList: {
    //   top:400,
      width: 500,
      height: 500,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

  function CreateReport_SelectDataSource_GridList(props) {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Select Datasource(s)</ListSubheader>
            </GridListTile>
            {tileData.map((tile) => (
            <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                    title={tile.title}
                    subtitle={<span>by: {tile.author}</span>}
                    actionIcon={
                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                        <InfoIcon />
                    </IconButton>
                }
                />
            </GridListTile>
            ))}
        </GridList>
    </div>    
    );
  }
  CreateReport_SelectDataSource_GridList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default (CreateReport_SelectDataSource_GridList);
       
