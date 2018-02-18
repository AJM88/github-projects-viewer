# Github Repository view - Frontend Test

Project develop as a technical test.

Demo: http://github-repo-viewer.alvarojimenezmartin.com/

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Quick Overview

To run the project locally. Firts install dependencies:
### `npm install` or `yarn install`

And then start local server:
### `npm start` or `yarn start`

Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

The page will automatically reload if you make changes to the code.

### `npm test` or `yarn test`
Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

### `npm run build` or `yarn build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
By default, it also [includes a service worker](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app) so that your app loads from local cache on future visits.

Your app is ready to be deployed.

## Posible Improvements

Following there are few extra functionalities I have in mind to improve the project, and have not been implemented due to lack of time or because it will have extend the time innecessary for the purpouse of the test.

### Extra features
 - Add Repositories filters on the sidebar (Partial name, Dates, Number of watchers, languages, etc.)
 - Change sorting property, default by number of watchers.
 - Include more information during the project fetch. (Files, readme, issues, PR, branches, commits, etc.)
 
### Code improvements
 - Make design responsive to adapt to mobiles or small screens.
 - Filter information stored on redux state queried from Github API to reduce it only to the relevant information and reduce memory used on the browser.
 - Add more detailed Unit Tests. Right now only checks that components renders fine but not the specific content based on props, reducers or api calls.
