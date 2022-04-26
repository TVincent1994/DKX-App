import React, { Component } from "react";
import styles from "./App.css";
// import { positions } from '@material-ui/system';
// import logo from './logo.svg';
// import './App.css';
// import 'typeface-roboto';
import CreateReport_ButtonAppBar from "./CreateReport_ButtonAppBar";
import LogOutButton from "./LogOutButton";
import AnalystScreen_CreateReportButton from "./AnalystScreen_CreateReportButton";
import CreateReport_ReportTitle_TextField from "./CreateReport_ReportTitle_TextField";
import CreateReport_ReportBody_TextField from "./CreateReport_ReportBody_TextField";
import InformationFeed_ButtonAppBar from "./InformationFeed_ButtonAppBar";
import InformationFeed_OrderButtons from "./InformationFeed_OrderButtons";
// import InformationFeed_AutocompleteSearch from './InformationFeed_AutocompleteSearch';
import InformationFeed_DataSourceList from "./InformationFeed_DataSourceList";
import SourceControl_ButtonAppBar from "./SourceControl_ButtonAppBar";
import SourceControl_FilterButtons from "./SourceControl_FilterButtons";
import SourceControl_AutocompleteSearch from "./SourceControl_AutocompleteSearch";
import SourceControl_SourceTable from "./SourceControl_SourceTable";
// import MainScreenButton_CreateReport from './MainScreenButton_CreateReport';
// import MainScreenButton_Trace from './MainScreenButton_Trace';
// import MainScreenButton_Instructions from './MainScreenButton_Instructions';
// import MainScreen_TextField from './MainScreen_TextField';
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AnalystReports_ReportDetail_Buttons from "./AnalystReports_ReportDetail_Buttons";
import ReportReview_BottomNav from "./ReportReview_BottomNav";

//ButtonAppBar, LogOutButton & MainScreen Buttons
class App_Executive_ReportReview_Page extends Component {
  render() {
    return (
      <div>
        <div>
          <header className={styles.header}>
            <SourceControl_ButtonAppBar titleText={"Source Control"} />
          </header>
        </div>
        <div>
          <Box display="flex" justifyContent="center">
            <SourceControl_FilterButtons />
          </Box>
        </div>
        <div>
          <Box display="flex" justifyContent="center">
            <SourceControl_AutocompleteSearch />
          </Box>
        </div>
        <div>
          <Box display="flex" justifyContent="center">
            <SourceControl_SourceTable />
          </Box>
        </div>
        {/* <Divider variant = 'middle' /> */}
        {/* <div>
          <Box display='flex' flexdirection = 'column' justifyContent = 'center'>
            <ReportReview_BottomNav />
          </Box>
        </div> */}
        {/* <div> */}
        {/* <Box display='flex' flexdirection = 'column' justifyContent = 'center' > */}
        {/* <MainScreen_TextField />
            <MainScreenButton_InfoFeed />
            <MainScreenButton_CreateReport />
            <MainScreenButton_Trace />
            <MainScreenButton_Instructions /> */}
        {/* <AnalystScreen_CreateReportButton /> */}
        {/* </Box> */}
        {/* </div> */}
      </div>
    );
  }
}

export default App_Executive_ReportReview_Page;
