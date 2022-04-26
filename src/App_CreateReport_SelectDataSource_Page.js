import React, { Component } from 'react';
import styles from './App.css';
// import { positions } from '@material-ui/system';
// import logo from './logo.svg';
// import './App.css';
// import 'typeface-roboto';
// import CreateReport_ButtonAppBar from './CreateReport_ButtonAppBar';
import CreateReport_ButtonAppBar_BackArrow from './CreateReport_ButtonAppBar_BackArrow';
import LogOutButton from './LogOutButton';
// import AnalystScreen_CreateReportButton from './AnalystScreen_CreateReportButton';
import CreateReport_FinishButton from './CreateReport_FinishButton';
import CreateReport_ReportTitle_TextField from './CreateReport_ReportTitle_TextField';
import CreateReport_ReportBody_TextField from './CreateReport_ReportBody_TextField';
import CreateReport_SelectDataSource_GridList from './CreateReport_SelectDataSource_GridList';
import Box from '@material-ui/core/Box';
import {BrowserRouter as Router,  Switch,  Route,  Link} from 'react-router-dom';

//ButtonAppBar, LogOutButton & MainScreen Buttons
class App_CreateReport_SelectDataSource_Page extends Component {
  render() {
    return (
      <div>
        <div>
          <header className={styles.header}>
          <CreateReport_ButtonAppBar_BackArrow />
          </header>
          <Box>
              <CreateReport_SelectDataSource_GridList />
            </Box>
        </div>
        <div>
            {/* <Box top='400'>
              <CreateReport_SelectDataSource_GridList />
            </Box> */}
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

export default App_CreateReport_SelectDataSource_Page;
