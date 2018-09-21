import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import '../node_modules/material-design-lite/material.min.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
          
          
          <ul className="mdlMenu">
            <a href=""><li className="mdlMenuItem">Home</li></a>
            <a href=""><li className="mdlMenuItem">About</li></a>
            <a href=""><li className="mdlMenuItem">Login</li></a>
            <a href=""><li className="mdlMenuItem">Checkout</li></a>
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
