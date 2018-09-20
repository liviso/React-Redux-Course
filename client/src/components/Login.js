import React, { Component } from 'react';
import Checkout from './Checkout';
class Login extends Component{
    render(){
      return <div>
        <Checkout/>
        <h2>Login</h2>
        <label>Email</label>
        <input type="text"/>
        <label>Password</label> 
        <input type="password"/>
      </div>
    }
  }
export default Login;