// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component{
    constructor(props){ //this gets it from the parent in ImageSlider.js
        super()

        this.state = {
            secondsLeft: props.initialCount // got props from the constructor, defined/declared/created in the parent 
        }
    }

    render(){
        const boomText = this.state.secondsLeft !== 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : "Boom!" // ternary operator for if/else statements.

        return(
        <h5>{boomText}</h5>
        )
    }
}