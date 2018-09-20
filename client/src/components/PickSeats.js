import React, { Component } from 'react';
import FilmDetails from './FilmDetails';

class PickSeats extends Component{
    render (){
      return <div>
        <FilmDetails/>
        <h2>Where would you like to sit?</h2>
        The life is beautiful.<br/>
        19/Septiembre/2018 - 9:00 pm
        Cinepolis Polanco
        <table>
          <tbody>
          <tr>
            <td>A1</td>
            <td>A2</td>
            <td>A3</td>
            <td>A4</td>
          </tr>
          <tr>
            <td>B1</td>
            <td>B2</td>
            <td>B3</td>
            <td>B4</td>
          </tr>
          <tr>
            <td>C1</td>
            <td>C2</td>
            <td>C3</td>
            <td>C4</td>
          </tr>
          <tr>
            <td>D1</td>
            <td>D2</td>
            <td>D3</td>
            <td>D4</td>
          </tr>
          </tbody>
        </table>
        <button>Checkout</button>
      </div>
    }
  }

export default PickSeats;