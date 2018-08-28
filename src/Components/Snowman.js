import React, { Component } from 'react';

class Snowman extends Component {
    render() {
        let counterVal = 0
        for (let i = 0; i < this.props.secret.length; i++) {
            if (this.props.secret[i].show) {
                counterVal++
            }
        }
        return (
            <div>
                <img src={`/Assets/snowman/step_${counterVal}.png`} alt={`snowman_${counterVal}`} width="400"/>
            </div>
        );
    }
}

export default Snowman;
