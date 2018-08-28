import React, { Component } from 'react';

class Snowman extends Component {
    render() {
        let missedGuesses = this.props.picked.length - this.props.count
        return (
            <div>
                <img 
                src={`/Assets/snowman/step_${missedGuesses}.png`} 
                alt={`snowman_${missedGuesses}`} width="400"
                />
            </div>
        );
    }
}

export default Snowman;
