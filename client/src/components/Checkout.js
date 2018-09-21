import React, { Component } from 'react';
import PickSeats from './PickSeats';

class Checkout extends Component{



  checkout = () => {
    console.log("Checking out");
  }
    render (){
      return <div>
        <PickSeats/>
        <h2>Checkout</h2>
        <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
          </tr>
          <tr>
            <td>Popcorn</td>
            <td>10</td>
            <td>1</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Subtotal</td>
          </tr>
          <tr>
            <td>Tax</td>
          </tr>
          <tr>
            <td>Total</td>
          </tr>
          </tbody>
        </table>
        <button onClick={this.checkout}>Purchase</button>
        <a href="">Keep shopping</a>
      </div>
    }
  }
export default Checkout;