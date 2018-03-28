import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Amplify from 'aws-amplify';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './global.css';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: process.env.REACT_APP_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_APP_CLIENT_ID,
  },
  Storage: {
    region: process.env.REACT_APP_REGION,
    bucket: process.env.REACT_APP_S3_BUCKET,
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
  API: {
    endpoints: [
      {
        name: 'notes',
        endpoint: process.env.REACT_APP_API_URL,
        region: process.env.REACT_APP_REGION,
      },
    ],
  },
});

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root')
);

registerServiceWorker();
