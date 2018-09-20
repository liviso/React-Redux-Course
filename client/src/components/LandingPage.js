import React, { Component } from 'react';
import films from '../films.json';
import '../App.css';
class LandingPage extends Component{
 
    render(){
     
      console.log("films are: ",films);
      return <div>
        <h1>What do you want to see?</h1>
        <input type="date"/>
        <section className="filmsList">
        <section className="film">
    
        <div className="card color-card">
        
        <img src="/img/posters/1.jpg" alt="Avatar" className="size-card"></img>
          <div className="container">
          <p>{films[0].title}</p>
          <p>{films[0].tagline}</p>
          
          </div>
          <h3>Car</h3>
          <p>Save Money, Live Better</p>
        </div>

         <div className="card color-card">
        
        <img src="/img/posters/2.jpg" alt="Avatar" className="size-card"></img>
          <div className="container">
          <p>{films[1].title}</p>
          <p>{films[1].tagline}</p>
          
          </div>
          <h3>Car</h3>
          <p>Save Money, Live Better</p>
        </div>
       
        <div className="card color-card">
        
        <img src="/img/posters/3.jpg" alt="Avatar" className="size-card"></img>
          <div className="container">
          <p>{films[2].id}</p>
          <p>{films[2].title}</p>
          <p>{films[2].tagline}</p>
          
          </div>
          <h3>Car</h3>
          <p>Save Money, Live Better</p>
        </div>
       
        <div className="card color-card">
        
        <img src="/img/posters/4.jpg" alt="Avatar" className="size-card"></img>
          <div className="container">
          <p>{films[3].title}</p>
          <p>{films[3].tagline}</p>
          
          </div>
          <h3>Car</h3>
          <p>Save Money, Live Better</p>
        </div>
       
       
        </section>
        </section>
        </div>
    }
    }

export default LandingPage;