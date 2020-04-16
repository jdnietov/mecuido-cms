import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Firebase, { FirebaseContext } from './services/firebase';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={Firebase} >
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);