import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';

import Employee from './Components/Employee';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Employee/>
      </div>
    );
  }
}

export default App;
