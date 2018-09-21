import React, { Component } from 'react';

class Film extends Component {
    render() {
        return (
          
            <div className="card color-card">

                <img src={this.props.film.poster_path} alt={this.props.film.title} className="size-card"></img>
                <div className="container">
                    <p>{this.props.film.title}</p>
                    <p>{this.props.film.tagline}</p>

                </div>
                <h3>Car</h3>
                <p>Save Money, Live Better</p>
            </div>
        )
    }
}

export default Film;