import React, { Component } from 'react';

class Counter extends Component {

    // constructor(){
    //     super();
    //     this.handleIncrement=this.handleIncrement.bind(this);
    //     //this binds the handleIncrement to this object, 
    //     //so when this is called in the method, it is not undefined
    // }
    handleIncrement=() =>{//this arrow function replaces the constructor
        this.setState({count: this.state.count+1}); //you need to setState to change the state
        console.log("button was clicked!", this.state.count);
        //obj.method(); always returns obj reference
        //function(); if strict mode is enabled, this is undefined
    }
    state = {
        count:0,
     };
     style={
        fontSize: 15,
     }
    render() { 
        return (<div>
            <span styles={this.style}>{"You have pressed the button " + this.formatCount()+" times."} 
            </span>
        <button onClick= {this.handleIncrement}>
            Click
            </button>
        </div>
        );//jsx elements should have one parent element
    }
    formatCount(){
        return (this.state.count === 0 ? 'zero' : this.state.count);
    }
}
 
export default Counter;