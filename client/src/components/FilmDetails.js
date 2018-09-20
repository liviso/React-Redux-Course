import React, { Component } from 'react';
import LandingPage from './LandingPage';

class FilmDetails extends Component{
    render (){
      return <div>  <LandingPage />
        <h2>The life is beautiful.</h2>
        <p>Nothing is neccesary than the unnecesary.</p>
        <ul>
          <li>9:00 pm</li>
          <li>11:00 pm </li>
        </ul>
      </div>
    }
  }
export default FilmDetails;