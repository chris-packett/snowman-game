import React, { Component } from 'react';

class RandomWord extends Component {

    shouldDisplaySecretLetter = (letter, show) => {
        if (show) {
            return letter
        }
        else {
            return "_"
        }
    }

    render() {
        return (
            <div>
                {this.props.secret.map((secretLetter, i) => {
                    return (
                        <span key={i} className="letter">
                            {this.shouldDisplaySecretLetter(secretLetter.letter, secretLetter.show)}&nbsp;
                        </span>
                    )
                })}
            </div>
        );
    }
}

export default RandomWord;
