import React, { Component } from 'react';

class Snowman extends Component {
    render() {
        let missedGuesses = this.props.picked.length - this.props.count
        if (missedGuesses < 8) {
            return (
                <div>
                    <img 
                    src={`/Assets/snowman/step_${missedGuesses}.png`} 
                    alt={`snowman_${missedGuesses}`} 
                    width="350"
                    />
                </div>
            );
        }
        else {
            return (
                <div>
                    <img
                    src="https://media.giphy.com/media/6Q3M4BIK0lX44/giphy.gif"
                    alt="you-lose"
                    width="350"
                    style={{ borderRadius: '1em' }}
                    />
                </div>
            )
        }
    }
}

export default Snowman;
