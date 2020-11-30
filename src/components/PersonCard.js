import React, {Component} from 'react';

class PersonCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age: props.age,
        };
        }
        increaseAge = () => {
            this.setState({age: this.state.age +1})
        }
    render(){
        return(
            <>
            <h1>{this.props.lastName}, {this.props.firstName} </h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            <button onClick={this.increaseAge}>Happy Birthday</button>
            </>
        )  
}
    }
  
export default PersonCard;

