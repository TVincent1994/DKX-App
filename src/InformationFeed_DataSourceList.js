import React, { useState, Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
// import Typography from '@material-ui/core/Typography';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import VideocamIcon from "@material-ui/icons/Videocam";
import TwitterIcon from "@material-ui/icons/Twitter";
import AssignmentIcon from "@material-ui/icons/Assignment";

//original code
const styles = (theme) => ({
  root: {
    //   width: '400',
    //   position: 'fixed',
    //   bottom: 50,
    // top: 200,
    width: "100%",
    // maxWidth: '36ch',
    // backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
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

class InformationFeed_DataSourceList extends Component {
  //const [selectedIndex, setSelectedIndex] = useState(1);

  state = {
    datasources: [],
    selectedIndex: 1,
  };

  componentDidMount() {
    fetch("/infoFeed?user=" + this.props.userName + "&role=" + this.props.role)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ datasources: data });
      });
  }

  setSelectedIndex(index) {
    this.setState({ selectedIndex: index });
  }

  handleListItemClick = (event, index) => {
    this.setSelectedIndex(index);
  };

  render() {
    const classes = styles();
    let infoFeedData = this.state.datasources;
    return (
      <List className={classes.root}>
        {infoFeedData.map((value, index) => (
          <>
            <ListItem
              alignItems="flex-start"
              button
              selected={this.state.selectedIndex === 1}
              onClick={(event) => this.handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText
                primary={value.datasource_name}
                secondary={value.Time_Since_Received}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>

      //   <div justifyContent= 'center' style={{ width: 300 }}>

      //   </div>
    );
  }
}
InformationFeed_DataSourceList.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default InformationFeed_DataSourceList;
