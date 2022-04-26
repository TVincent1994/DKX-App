import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
// import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Link } from "react-router-dom";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from 'material-ui-icons/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import { positions } from '@material-ui/system';
const styles = (theme) => ({
  root: {
    // width: '400px',
    // position: 'fixed',
    // bottom: 400,
    color: "red",
  },
});

function HomeScreenButton_InfoFeed(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      {/*<Link to="/App_InformationFeed_Page" style={{textDecoration: 'none'}}></Link>   */}
      <Button
        variant="contained"
        //   display = 'flex'
        //   justifyContent = 'center'
        color="default"
        className={classes.button}
        startIcon={<DashboardIcon />}
        onClick={props.infofeedClick}
      >
        Information Feed
      </Button>
    </div>
  );
}
HomeScreenButton_InfoFeed.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HomeScreenButton_InfoFeed);

// const useStyles = makeStyles((theme) => ({
//     button: {
//     //   margin: theme.spacing(1),
//     // color: 'red'
//     },
//     root: {
//     // right: 0,
//     left: 0,
//     bottom:0,
//     // width: '3600px',
//     // alignSelf: 'stretch',
//     // position: 'fixed',
//       },
//     flex: {
//     flex: 1,
//     // justifycontent: 'center'
//     },
//   }));

// export default function MainScreenButton() {
//     const classes = useStyles();
//       return (
//       <div>
//         <Button
//           variant="contained"
//           color="default"
//           className={classes.button}
//           startIcon={<DashboardIcon />}
//           >
//               Information Feed
//         </Button>
//         </div>
//     );
// }
