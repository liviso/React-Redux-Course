import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="color-letter">
          <ul>
            <a href=""><li className="color-letter">Home</li></a>
            <a href=""><li className="color-letter">About</li></a>
            <a href=""><li className="color-letter">Login</li></a>
            <a href=""><li className="color-letter">Checkout</li></a>
          </ul>
         
          </div>
          <h1 className="App-title">Dinner and a Movie</h1>
         
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
       
        <Login/>
      </div>
    );
  }
}

export default App;
