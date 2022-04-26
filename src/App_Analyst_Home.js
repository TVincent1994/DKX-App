import React, { Component } from 'react';
import styles from './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import { positions } from '@material-ui/system';
// import logo from './logo.svg';
// import './App.css';
// import 'typeface-roboto';
import ButtonAppBar from './ButtonAppBar';
import LogOutButton from './LogOutButton';
import HomeScreenButton_InfoFeed from './HomeScreenButton_InfoFeed';
import HomeScreenButton_CreateReport from './HomeScreenButton_CreateReport';
import HomeScreenButton_Trace from './HomeScreenButton_Trace';
import HomeScreenButton_Instructions from './HomeScreenButton_Instructions';
import HomeScreen_TextField from './HomeScreen_TextField';
import HomeScreen_ButtonAppBar from './HomePage_ButtonAppBar';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router,  Switch,  Route,  Link} from 'react-router-dom';

const message = `A decentralized knowledge management tool`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  buttons: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100px',
    display: 'flex',
    flex: 1
  },
}));

//Router & Multipage
class App_Analyst_Home extends Component {
  render() {
    return (
      <div>
        <div>
          <header className={styles.header}>
          {/* <ButtonAppBar /> */}
          <HomeScreen_ButtonAppBar/>
          </header>
        </div>
        <div fullWidth = {true}>
          {/* <Box display='flex' flexdirection = 'column' justifyContent = 'center' >
            <HomeScreen_TextField />
            <HomeScreenButton_InfoFeed />
            <HomeScreenButton_CreateReport />
            <HomeScreenButton_Trace />
            <HomeScreenButton_Instructions />
          </Box> */}
          <Grid container spacing = {5} direction = 'column' alignItems ='center' justify = 'center' alignContent='stretch'>
              <Grid item xs={12}>
                  <HomeScreen_TextField />
              </Grid>
              <div className="messageText">
                <Grid item xs={12}>
                    <Typography>{message}</Typography>   
                </Grid>
              </div>
              <Grid item ={12}>
                  <HomeScreenButton_InfoFeed />
              </Grid>
              <Grid item xs={12}>
                  <HomeScreenButton_CreateReport />
              </Grid>
              <Grid item xs={12}>
                  <HomeScreenButton_Trace />
              </Grid>
              <Grid item xs={12}>
                  <HomeScreenButton_Instructions />
              </Grid>
          </Grid>
        </div>
        <div>
          <LogOutButton />
        </div>
      </div>
    );
  }
}




//ButtonAppBar, LogOutButton & MainScreen Buttons
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <div>
//           <header className={styles.header}>
//           {/* <ButtonAppBar /> */}
//           </header>
//         </div>
//         <div>
//           <Box display='flex' flexdirection = 'column' justifyContent = 'center' >
//             <MainScreen_TextField />
//             <MainScreenButton_InfoFeed />
//             <MainScreenButton_CreateReport />
//             <MainScreenButton_Trace />
//             <MainScreenButton_Instructions />
//           </Box>
//         </div>
//         <div>
//           <LogOutButton />
//         </div>
//       </div>
//     );
//   }
// }


//original create react app
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//ButtonAppBar
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <header className={styles.header}>
//           <ButtonAppBar />
//         </header>
//       </div>
//     );
//   }
// }


//LogOutButton
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <header className={styles.header}>
//           <LogOutButton />
//         </header>
//       </div>
//     );
//   }
// }


// //ButtonAppBar & LogOutButton
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <header className={styles.header}>
//           <ButtonAppBar />
//           <LogOutButton />
//         </header>
//       </div>
//     );
//   }
// }




// //ButtonAppBar, LogOutButton & MainScreenButton
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <div>
//           <header className={styles.header}>
//           <ButtonAppBar />
//           </header>
//         </div>
//         <div>
//           <Box display='flex' justifyContent = 'center'>
//             <MainScreenButton_InfoFeed />
//           </Box>
//         </div>
//         <div>
//           <LogOutButton />
//         </div>
//       </div>
//     );
//   }
// }


export default App_Analyst_Home;
