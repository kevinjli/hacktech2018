import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SaveExercisePage from './SaveExercisePage';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open+Sans:100,300,400,700', 'sans-serif']
  }
});

ReactDOM.render(<SaveExercisePage />, document.getElementById('root'));
registerServiceWorker();
