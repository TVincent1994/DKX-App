import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import App_Anayst_Home from './App_Analyst_Home';
import App_CreateReport_Page from './App_CreateReport_Page';
import App_CreateReport_SelectDataSource_Page from './App_CreateReport_SelectDataSource_Page';
import App_Executive_Home from './App_Executive_Home';
import App_InformationFeed_Page from './App_InformationFeed_Page';
import App_Executive_ReportReview_Page from './App_Executive_ReportReview_Page';
import App_Executive_SourceControl_Page from './App_Executive_SourceControl_Page';
import App_Supervisor_Home from './App_Supervisor_Home';
import App_Supervisor_AnalystReports_Page from './App_Supervisor_AnalystReports_Page';
import HomeScreenButton_Trace from './HomeScreenButton_Trace';
import HomeScreenButton_InfoFeed from './HomeScreenButton_InfoFeed';
import tileData from './tileData';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components';
import {App_Login_Page } from './App_Login_Page';
//import Routes from './Routes';


ReactDOM.render(
  <React.StrictMode>
    <App_Login_Page/>,
  </React.StrictMode>,

  // ANAYST HOME
  //<BrowserRouter>
  //  <Switch>
  //    <Route exact path="/" component={App_Anayst_Home} />  
  //    <Route exact path="/App_InformationFeed_Page" component={App_InformationFeed_Page}/>
  //    <Route exact path="/App_CreateReport_Page" component={App_CreateReport_Page}/>
  //  </Switch>
  //</BrowserRouter>,

  // SUPERVISOR HOME
  //<BrowserRouter>
  //  <Switch>
  //    <Route exact path="/" component={App_Supervisor_Home} />  
  //    <Route exact path="/App_InformationFeed_Page" component={App_InformationFeed_Page}/>
  //    <Route exact path="/App_Supervisor_AnalystReports_Page" component={App_Supervisor_AnalystReports_Page}/>
  //    <Route exact path="/App_CreateReport_Page" component={App_CreateReport_Page}/>
  //  </Switch>
  //</BrowserRouter>,

  // EXECUTIVE HOME
  //<BrowserRouter>
  //  <Switch>
  //    <Route exact path="/" component={App_Executive_Home}/>
  //    <Route exact path="/App_InformationFeed_Page" component={App_InformationFeed_Page}/>
  //    <Route exact path="/App_Executive_ReportReview_Page" component={App_Executive_ReportReview_Page}/>
  //    <Route exact path="/App_Executive_SourceControl_Page" component={App_Executive_SourceControl_Page}/>
  //  </Switch>
  //</BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
