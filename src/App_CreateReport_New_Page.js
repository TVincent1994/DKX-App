import React, { Component } from 'react';
import styles from './App.css';
// import { positions } from '@material-ui/system';
// import logo from './logo.svg';
// import './App.css';
// import 'typeface-roboto';
import CreateReport_ButtonAppBar from './CreateReport_ButtonAppBar';
import LogOutButton from './LogOutButton';
// import AnalystScreen_CreateReportButton from './AnalystScreen_CreateReportButton';
import CreateReport_FinishButton from './CreateReport_FinishButton';
import CreateReport_ReportTitle_TextField from './CreateReport_ReportTitle_TextField';
import CreateReport_ReportBody_TextField from './CreateReport_ReportBody_TextField';
import CreateReport_DefineReport from './CreateReport_DefineReport';
import Box from '@material-ui/core/Box';
import {BrowserRouter as Router,  Switch,  Route,  Link} from 'react-router-dom';

//ButtonAppBar, LogOutButton & MainScreen Buttons
class App_CreateReport_New_Page extends Component {
  render() {
    return (
      <div>
        <div>
          <header className={styles.header}>
          <CreateReport_ButtonAppBar />
          </header>
        </div>

        <div>
            <CreateReport_DefineReport />
        </div>
        <div>
          <Box display='flex' flexdirection = 'column' justifyContent = 'center' >
            <CreateReport_FinishButton />
          </Box>
        </div>
      </div>
    );
  }
}

export default App_CreateReport_New_Page;
