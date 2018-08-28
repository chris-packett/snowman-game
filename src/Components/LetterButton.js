import React, { Component } from 'react';

class LetterButton extends Component {

    addLetterToArray = () => {
        this.props.addLetterHandler(this.props.letter)
    }

    render() {
        if (this.props.picked.includes(this.props.letter)) {
            return (
            <button className="alphabetButton" disabled>
                *
            </button>
            )
        }
        else {
            return (
                <button className="alphabetButton" onClick={this.addLetterToArray}> 
                    {this.props.letter}
                </button>
            )
        }
    }
}

export default LetterButton;
