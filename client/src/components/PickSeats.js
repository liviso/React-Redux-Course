import React, { Component } from 'react';
import FilmDetails from './FilmDetails';



class PickSeats extends Component{


  goToCheckout = () => {
    console.log("go to checkout");
  }  

  selectSeat = () => {
    console.log("Select seat");
  }
  
  render (){
    const tables = [
      { id:19, theater_id:2, table_number:4, seats:[1, 2, 3, 4] },
      { id:20, theater_id:2, table_number:6, seats:[5, 6] },
      { id:21, theater_id:2, table_number:4, seats:[1, 2, 3] },
      { id:22, theater_id:2, table_number:6, seats:[5] }
    ]
      return <div>
        <FilmDetails/>
        <h2>Where would you like to sit?</h2>
        The life is beautiful.<br/>
        19/Septiembre/2018 - 9:00 pm
        Cinepolis Polanco
        <Table table={tables[0]}/>
        <button onClick={this.goToCheckout}>Checkout</button>
      </div>
    }
  }

export default PickSeats;