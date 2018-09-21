import React, { Component } from 'react';
import films from '../films.json';
import '../App.css';
import ShowingDate from './ShowingDate';
import FilmsList from './FilmsList';
class LandingPage extends Component{

 chooseFilm = (film) => {
    console.log("on chooseFilm", film);
  }
  
  chooseDate = (e) => {
    console.log("on chooseDate", e);
  }
 
    render(){
     
      console.log("films are: ",films);
      return <div>
        <h1>What do you want to see?</h1>
        <ShowingDate pickDate={e =>this.chooseDate(e.target.value)}/>
        <section className="filmsList">
        <FilmsList films={films} pickFilm={this.chooseFilm}/>
       
   
       
        </section>
        </div>
    }
    }

export default LandingPage;