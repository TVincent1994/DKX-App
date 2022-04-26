import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
// import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Divider from "@material-ui/core/Divider";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOffOutlined";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import PublishIcon from "@material-ui/icons/Publish";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Switch from "@material-ui/core/Switch";
import { purple } from "@material-ui/core/colors";
import { Dropdown } from "semantic-ui-react";
import Select from "react-select";

const Countries = [
  { label: "Nove Scotia Shooting", value: 355 },
  { label: "Russia", value: 54 },
  { label: "Fires in California", value: 93 },
  { label: "Climate Change", value: 61 },
];

const VeracitySwitch = withStyles({
  switchBase: {
    color: purple[300],
    "&$checked": {
      color: purple[500],
    },
    "&$checkd + $track": {
      backgroundColor: purple[500],
    },
  },
  checkd: {},
  track: {},
})(Switch);

//code from material UI docs
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const initialState = {
  Visibility: false,
  Confidence: false,
  Time: false,
};

function Trace_Header_Buttons(props) {
  // Handle the on/off button for "Report Veracity" switch
  const [state, setState] = React.useState({
    checkedVeracity: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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

  const classes = useStyles();
  return (
    <div className="TraceHeader">
      <div id="TraceDropDown">
        <div className="col-md-6">
          <Select options={Countries} placeholder={"Search For..."} />
        </div>
      </div>

      <FormControl id="VeracitySwitch">
        <FormControlLabel
          value="bottom"
          control={
            <VeracitySwitch
              size="large"
              checked={state.checkedVeracity}
              onChange={handleChange}
              name="checkedVeracity"
            />
          }
          label="Report Veracity"
          labelPlacement="bottom"
        />
      </FormControl>
    </div>
  );
}
Trace_Header_Buttons.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default Trace_Header_Buttons;
