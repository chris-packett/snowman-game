## Requirements: 

- [ ] Select a random word from the words.json file, then display a word length's number of underscores.
    - [ ] Generate a random number with Math.random()
    - [ ] Use the random number to pick a word from the words.json array.
    - [ ] Create a secret word array of secret letter objects.
    - [ ] Render the secret word in the RandomWord component. 
- [ ] Display a list of letters, A through Z as clickable buttons. 
    - [ ] Create a button component, LetterButton.
    - [ ] Create alphabet array.
    - [ ] Render each button with its respective letter of the alphabet.
- [ ] When the player guesses a letter (clicks the button):
    - [ ] Have an onClick event that pushes the letter to a pickedLetters array.
    - [ ] The button becomes disabled, as it has already been guessed.
    - [ ] All instances of that letter are revealed at their corresponding positions in the word.
    - [ ] Display the snowman image that corresponds with the number of letters revealed in the word.

## Components: 

- [ ] App.js (Will house the BrowserRouter)
- [ ] Game.js (Will house the game logic)
- [ ] Snowman.js (Will display the Snowman)
- [ ] RandomWord.js (Will display the randomly generated word)
- [ ] LetterButton.js (Will display the each letter button)


## Data Structures: 

- [ ] Creating secret word array of secret letter objects: 

```
import words from 'words.json'

let randomNum = Math.floor(Math.random() * words.length)
let word = words[randomNum]
let letters = word.split('')
let secretWord = []

letters.map((letter, j) => {
    const secretLetter = {
        "letter": letter
        "show": false
    }
    secretWord.push(secretLetter)
})
```

- [ ] Example of secret word array:

```
secretWord = [
    "0": {
        "letter": "t"
        "show": false
    },
    "1": {
        "letter": "h"
        "show": false
    },
    "2": {
        "letter": "e"
        "show": false
    }
]
```

- [ ] Displaying secret word with appropriate character

```
for (let i = 0; i < secretWord.length; i++) {
    if (secretWord[i].show === false) {
        return <span>_</span>
    }
    else {
        return <span>{secretWord[i].letter}</span>
    }
}
```

- [ ] Creating buttons from alphabet array using the LetterButton component

```
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

ALPHABET.map((letter, i) => {
    return (
    <LetterButton 
    key={i}
    letter={letter}
    picked={this.state.pickedLetters} 
    addLetterHandler={this.addLetterToPickedLetters} 
    />
    )
})
```

- [ ] Creating the LetterButton component

```
if (this.props.picked.includes(this.props.letter)) {
    return <span></span>
}
else {
    return (
        <button onClick={() => this.props.addLetterHandler(this.props.letter)}>
            {this.displayButton
        </button>
    )
}
```

- [ ] Creating pickedLetters array from LetterButton onClick event. 

```
this.state.pickedLetters = []

addLetterToPickedLetters = (letter) => {
    let newPickedLetters = this.state.pickedLetters.slice()
    newPickedLetters.push(letter)
    this.setState({
        pickedLetters: newPickedLetters
    })
}
```

