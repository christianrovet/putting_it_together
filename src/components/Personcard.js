import React, { Component } from 'react';

class Personcard extends Component{
    constructor(props) {
        super(props);
        this.state = {click: props.age}
    }
    addYear = () => {
        this.setState({click: this.state.click + 1})
    }
    render(){
        return(
            <div>
                <h2>{this.props.last_name}, {this.props.first_name}</h2>
                <p>Age : {this.state.click}</p>
                <p>Hair Color : {this.props.hair_color}</p>
                <button onClick={this.addYear}>Birthday button for {this.props.first_name} {this.props.last_name}</button>
            </div>
        );
    }
}

export default Personcard;