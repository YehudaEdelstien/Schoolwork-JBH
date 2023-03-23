import React, { Component } from 'react';

import Keyboard from '../Keyboard/Keyboard';
import InputArea from '../InputArea/InputArea';
import OptionsBar from '../OptionsBar/OptionsBar';

class TextEditor extends Component {
    constructor(props) {
        super(props)
        this.history = [];
    }
    state = {
        textObjects: [],
        language: "en",
        textSize: 18,
        color: "black",
        caps: false,
    }

    Letter = function(char, size, color) {
        this.char = char;
        this.size = size;
        this.color = color;
    }

    addNewLetter = (letter) => {
        this.history.push(this.state.textObjects);
        const {textSize, color} = this.state;
        const newLetter = new this.Letter(letter, textSize, color)

        this.setState(prevState => {
            const newState = {...prevState};
            const newTextObjects = [...newState.textObjects, newLetter]
            return {textObjects: newTextObjects}
        })
    }

    removeLetter = () => {
        this.history.push(this.state.textObjects);

        this.setState(prevState => {
            const newState = {...prevState};
            const newTextObjects = newState.textObjects.slice(0, -1)
            return {textObjects: newTextObjects}
        })
    }

    undoLast = () => {
        if (this.history.length <= 0) {
            return;
        }
        const newTextObjects = this.history.pop();
        this.setState({textObjects: newTextObjects});
    }

    changeSetting = (setting, value) => {
        const newState = {...this.state};
        newState[setting] = value;
        this.setState(newState);
    }

    render() {
        const {textObjects, language, textSize, color, caps,} = this.state;
        return (
            <div className='textEditor'>
                <OptionsBar 
                    changeSetting={this.changeSetting}
                    color={color}
                    textSize={textSize}
                    language={language}
                />
                <InputArea textObjects={textObjects}/>
                <Keyboard 
                    language={language} 
                    caps={caps} 
                    addLetter={this.addNewLetter} 
                    removeLetter={this.removeLetter}
                    undoLast={this.undoLast}
                    changeSetting={this.changeSetting} 
                />
            </div>
        );
    }
}

export default TextEditor;