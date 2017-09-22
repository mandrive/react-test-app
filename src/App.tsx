import * as React from 'react';
import './Styles/app.scss';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Witaj Grzegorzu</h2>
        </div>
        <p className="App-intro">
          To jest React, którego Ty, jako devops, nie ogarniesz! :D
        </p>
      </div>
    );
  }
}

export default App;
