import React, { Component } from 'react';

class Snowman extends Component {
    render() {
        return (
            <div>
                <img 
                src={`/Assets/snowman/step_${this.props.count}.png`} 
                alt={`snowman_${this.props.count}`} width="400"
                />
            </div>
        );
    }
}

export default Snowman;
