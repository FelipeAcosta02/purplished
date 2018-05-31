import React from 'react';
import ReactDOM from 'react-dom';
import "global/UI/global.scss"

import App from 'app/App';
import registerServiceWorker from 'registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
