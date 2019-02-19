import React, { Component } from 'react';
import './App.scss';

import HomePage from './Components/Pages/HomePage';

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: 'CleverDistraction'
    }
  }

  render() {
    return (
      <div className="App">
        <HomePage title={this.state.title} />
      </div>
    );
  }
}

export default App;
