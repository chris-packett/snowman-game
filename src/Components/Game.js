import React, { Component } from 'react';
import Snowman from './Snowman'
import RandomWord from './RandomWord'
import LetterButton from './LetterButton'
import words from '../Data/words.json'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickedLetters: [],
            secretWord: [],
            count: 0
        }
    }

    componentDidMount() {
        this.generateRandomSecretWord()
    }

    generateRandomSecretWord = () => {
        let randomNum = Math.floor(Math.random() * words.length)
        let word = words[randomNum]
        console.log(word)
        let letters = word.split('')
        let newSecretWord = this.state.secretWord.slice()

        letters.forEach((letter, i) => {
            const secretLetter = {
                "id": i,
                "letter": letter,
                "show": false,
                "excludeFromCount": false
            }
            newSecretWord.push(secretLetter)
        })
        this.setState({
            secretWord: newSecretWord
        })
    }

    updateSecretWord = () => {
        this.state.secretWord.forEach((secretLetter, i) => {
            if (this.state.pickedLetters.includes(secretLetter.letter) && secretLetter.excludeFromCount === false) {
                let newSecretWord = this.state.secretWord.slice()
                newSecretWord[i].show = true
                newSecretWord[i].excludeFromCount = true
                this.setState({
                    secretWord: newSecretWord,
                    count: this.state.count + 1
                })
            }
        })
    }

    addLetterToPickedLetters = (letter) => {
        let newPickedLetters = this.state.pickedLetters.slice()
        newPickedLetters.push(letter)
        this.setState({
            pickedLetters: newPickedLetters
        }, () => this.updateSecretWord())
    }

    playAgain = () => {
        this.setState({
            pickedLetters: [],
            secretWord: [], 
            count: 0
        }, this.generateRandomSecretWord)
    }

    render() {
        return (
            <div className="game">
                <Snowman 
                count={this.state.count}
                picked={this.state.pickedLetters}
                />
                <RandomWord 
                secret={this.state.secretWord}
                />
                <div className="alphabetButtons">
                    {ALPHABET.map((letter, i) => {
                        return (
                        <LetterButton 
                        key={i}
                        letter={letter}
                        picked={this.state.pickedLetters} 
                        addLetterHandler={this.addLetterToPickedLetters} 
                        />
                        )
                    })}
                </div>
                <button onClick={this.playAgain}>Play Again</button>
            </div>
        );
    }
}

export default Game;
