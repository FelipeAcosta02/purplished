import 'regenerator-runtime/runtime'; //Support for react-pdf 
import React from 'react';
import ReactDOM from 'react-dom';


import App from 'app/App';
import registerServiceWorker from 'registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
