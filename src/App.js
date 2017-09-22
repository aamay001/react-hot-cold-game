import React, { Component } from 'react';
import Game from './components/game'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="hc-game-container">
        <h1 className="hc-game-title">the Hot & Cold game</h1>
        <Game />
      </div>
    );
  }
}

export default App;
