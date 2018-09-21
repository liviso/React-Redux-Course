import React, { Component } from 'react';

class ShowingDate extends Component {
 

    render(){
        console.log("showing-date: "+this.props.pickDate);
        return(<div>
            <input type="date" onChange={this.props.pickDate}/>
        </div>)
    }
}

export default ShowingDate;