import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
// import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import createSpacing from '@material-ui/core/styles/createSpacing';

const styles = theme => ({
    root: {
      width: '800px',
      fullWidth: true ,
      // position: 'fixed',
      // top: 200,
      color: 'primary',
      },
    divider: {
        margin: 10,
        color: 'primary',
    },
  });

  function CreateReport_ReportBody_TextField(props) {
    const classes = props.classes;
    return (
    <div className={classes.root}>
        <Divider  />
      <div className={classes.divider}>
        <TextField
          multiline = {true}
          fullWidth = {true}
          rows = {18}
          color = 'blue'
          placeholder = 'Federal background check leads us to believe the 
          suspect is a local individual, male between the 
          ages of 40-55. Report indicates several offenses 
          in past history and known associates in the 
          greater Halifax area. 
          -
          Interview with local woman believed to be the 
          suspects significant other, she was found near 
          the home residence. Able to provide connection 
          between suspect and crime scene in local 
          neighborhood. Believed to be working alone, but 
          must consider local associates - check in 
          process on family, close friends and places of 
          work.
          _
          Fires were also produced by suspect based on 
          eye witness - supports local fire reports and 
          activity.
          _
          Report of an individual shot by man driving what 
          seemed to be a police car. On-scene officers still 
          taking notes - could be suspect, but unsure of
           connection. Still developing.
          -
          Suspect believed to be in local area still - 
          community has single entrance and that has been 
          locked down by on-scene officers.
          -
          Firearms check indicates suspect does not have 
          a license for weapons, but given crime scene 
          suspect MUST BE TREATED AS EXTREMELY 
          DANGEROUS.
          -
          Police unit issued advisory over Twitter and 
          Facebook alerting local residents to remain inside 
          with doors locked. Alert Ready and APB have not 
          been issued yet - pending further input from on 
          scene team.'
          disabled = {true}
        // variant="contained"
        //   display = 'flex'
          justifyContent = 'center'
        //   color="default" 
        //   className={classes.TextField}
        //   startIcon={<InfoIcon />}
          />
        {/* </TextField> */}
        {/* <Divider  /> */}
      </div>
      <Divider  />
    </div>
    );
  }
  CreateReport_ReportBody_TextField.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(CreateReport_ReportBody_TextField);
       
