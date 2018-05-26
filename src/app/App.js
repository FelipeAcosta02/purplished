import React from 'react';
import Routes from './routes'
import { AppLayout } from 'global/UI'

class App extends React.Component {
  
  render() {
    return (
      <div style={{textAlign: 'center', display: 'flex'}}>
          <Routes />
      </div>
    );
  }
}

export default App;
