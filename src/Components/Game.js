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

    generateRandomSecretWord () {
        let randomNum = Math.floor(Math.random() * words.length)
        console.log(randomNum)
        let word = words[randomNum]
        console.log(word)
        let letters = word.split('')
        console.log(letters)
        let newSecretWord = this.state.secretWord.slice()

        letters.forEach((letter, i) => {
            const secretLetter = {
                "id": i,
                "letter": letter,
                "show": false
            }
            newSecretWord.push(secretLetter)
            this.setState({
                secretWord: newSecretWord
            })
        })
    }

    updateSecretWord () {
        this.state.secretWord.forEach((secretLetter, i) => {
            if (this.state.pickedLetters.includes(secretLetter.letter)) {
                let newSecretWord = this.state.secretWord.slice()
                newSecretWord[i].show = true
                this.setState({
                    secretWord: newSecretWord
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

    render() {
        return (
            <div>
                <Snowman 
                count={this.state.count}
                />
                <RandomWord 
                picked={this.state.pickedLetters}
                secret={this.state.secretWord}
                />
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
        );
    }
}

export default Game;
