import React, { Component } from 'react';

import Keyboard from '../Keyboard/Keyboard';
import InputArea from '../InputArea/InputArea';
import OptionsBar from '../OptionsBar/OptionsBar';

class TextEditor extends Component {
    state = {
        textObjects: [],
        language: "en",
        textSize: 12,
        color: "black",
        caps: false,
    }

    Letter = function(char, size, color) {
        this.char = char;
        this.size = size;
        this.color = color;
    }

    addNewLetter = (letter) => {
        console.log(this.state)
        const {textSize, color} = this.state;
        const newLetter = new this.Letter(letter, textSize, color)

        const newState = {...this.state};
        newState.textObjects = [...newState.textObjects, newLetter]
        this.setState(newState);
    }

    render() {
        const {textObjects, language, caps} = this.state;
        return (
            <div className='textEditor'>
                <OptionsBar />
                <InputArea textObjects={textObjects}/>
                <Keyboard language={language} caps={caps} onClick={this.addNewLetter}/>
            </div>
        );
    }
}

export default TextEditor;