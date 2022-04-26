## Project Overview

This project aims to create a functioning Proof of Concept to articulate the benefits of a knowledge management system that employs a decentralized ledger. As it is a PoC, the initial phase of the project is to create a product that is for demo purposes only. The intention is for the application acquire the look and feel for prospective clients to interact with, but limit the functioning parts of the application to only what is necessary to provide a live demonstration.

Keeping this in mind, the team decided to choose a Mongo-Express-React-Node (MERN) stack to keep the solution lightweight while providing a flexible and strong enough framework to build up to a PoC and beyond. The current demo intention is to access the application using mobile devices via the web browser (no IOS or Android specifcation yet). 

Much of the application requirements are subject to change based on direction from the product owners, but the team has a well-grounded idea of what the demo needs to be able to do and how it should look. The feature backlog, data model and other technical and functional documents can be found in the associated Teams page.


## DKX Application Overview

The demo vision currently consists of Analysts (3), Supervisor (1), Executive (1) and an Admin / Facilitator (1). The general workflow begins with a report created by an Analyst based on data sources made available to them. This report collects a variety of metadata and is passed up the chain to the Supervisor and the Executive. The onus is on the Supervisor to collect the reports from the Analysts and aggregate into a communication for the Executive. The novelty of the application will allow users to know where the information was originally sourced from, who contributed it, the level of confidence associated with it etc. and this will manifest itself in the Executive view.

For the purposes of the demo, the expectation is for most of the data to be initialized to allow the facilitaors to guide the users through scenarios to demonstrate the capabilities and value of the application. 



## Project Development & Deployment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The only modification to the node_module file has been the integration of the material-ui resources. However, the node_modules file has not been uploaded here for storage.

**Material-UI Resources**
The below accounts for the dependent installs to support the material-ui React components and features used thus far. Within the kx-app project directory:

`npm install @material-ui/core`

`npm install @material-ui/icons`

`npm install @material-ui/lab`

`npm install @material-ui/styles`

`npm install @material-ui/system`

`npm install react-router-dom`

The dependencies can also be run with yarn for the same components using:

`yarn add`

**Note the steps below are what I use to run the application**

The rest, which uses yarn, is provided by Create React App and should still work well to deploy the app.

Navigate to the project directory (kx-app in this example) using:

### `cd kx-app`

Run the app on your local machine using localhost:3000 in a browser of your choice with :

### `npm start`

The current approach mocked up the various application pages seperately from one another, requiring 
a user to select them one at a time to launch and review.

Navigate to the index.js file. Here the user can select which page to render to the local host. As the index.js file is not included in the repo, users will have to import the .js files they wish to view and include them within the render() command.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



