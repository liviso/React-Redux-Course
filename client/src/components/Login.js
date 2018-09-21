import React, { Component } from 'react';
import Checkout from './Checkout';
import {inputStyle} from '../style.js'


class Login extends Component{

  login = () => {
    console.log("Login");
  }
    render(){
      return <div>
        <Checkout/>
        <h2>Login</h2>
        <label>Email</label>
        <input  style={inputStyle} type="text"/>
        <label>Password</label> 
        <input style={inputStyle} type="password"/>
        <button onClick={this.login}>Login</button>
      </div>
    }
  }
export default Login;