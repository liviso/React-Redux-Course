import React, { Component } from 'react';
import Film from './Film';
class FilmsList extends Component {

    render() {
        return (<div>
            <section onClick={() => this.props.pickFilm(this.props.films[0])}>

                <Film film={this.props.films[0]} />
            </section>




            <section onClick={() => this.props.pickFilm(this.props.films[1])}>
                <div className="card color-card">

                    <img src="/img/posters/2.jpg" alt="Avatar" className="size-card"></img>
                    <div className="container">
                        <p>{this.props.films[1].title}</p>
                        <p>{this.props.films[1].tagline}</p>

                    </div>
                    <h3>Car</h3>
                    <p>Save Money, Live Better</p>
                </div>
            </section>


            <section onClick={() => this.props.pickFilm(this.props.films[2])}>
                <div className="card color-card">

                    <img src="/img/posters/3.jpg" alt="Avatar" className="size-card"></img>
                    <div className="container">
                        <p>{this.props.films[2].id}</p>
                        <p>{this.props.films[2].title}</p>
                        <p>{this.props.films[2].tagline}</p>

                    </div>
                    <h3>Car</h3>
                    <p>Save Money, Live Better</p>
                </div>

            </section>

            <section onClick={() => this.props.pickFilm(this.props.films[3])}>
                <div className="card color-card">

                    <img src="/img/posters/4.jpg" alt="Avatar" className="size-card"></img>
                    <div className="container">
                        <p>{this.props.films[3].title}</p>
                        <p>{this.props.films[3].tagline}</p>

                    </div>
                    <h3>Car</h3>
                    <p>Save Money, Live Better</p>
                </div>
            </section>



        </div>)
    }
}

export default FilmsList;