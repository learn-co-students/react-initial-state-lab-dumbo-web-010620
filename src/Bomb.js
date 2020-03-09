import React from 'react';
import ReactDOM from 'react-dom';
// your Bomb code here!

export default class Bomb extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { secondsLeft : this.props.initialCount}
    }
    
    render() {
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
        return (
            <div>{message}</div>

        )
    }
}