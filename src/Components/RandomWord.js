import React, { Component } from 'react';

class RandomWord extends Component {

    render() {
        return (
            <div>
                {this.props.secret.map((secretLetter, i) => {
                    return (
                        <span key={i} className="letter">
                            {this.props.shouldDisplaySecretLetter(secretLetter.letter, secretLetter.show)}&nbsp;
                        </span>
                    )
                })}
            </div>
        );
    }
}

export default RandomWord;
