// your Bomb code here!
import React, {Component} from 'react'

class Bomb extends Component{
    state={secondsLeft: this.props.initialCount}
    render(){
        return(
            <div>
                {this.state.secondsLeft !== 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : "Boom!"}
                
            </div>
        )
    }
}

export default Bomb