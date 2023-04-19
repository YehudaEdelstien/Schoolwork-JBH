import React, { Component } from 'react';

class ColorChangingBox extends Component {
    state = { currentColor: "red", changesCount: 0 }

    intervalId = null;

    componentDidMount() {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.toggleColor, 1000);
    }

    toggleColor = () => {
        this.setState(prevState => {
            let newColor = prevState.currentColor === "red" ? "green" : "red";
            let newCount = prevState.changesCount >= 5 ? prevState.changesCount : prevState.changesCount + 1;
            return { currentColor: newColor, changesCount: newCount }
        })
    }

    render() {
        const styleObj = {
            height: "300px",
            width: "300px",
            backgroundColor: this.state.currentColor,
            borderRadius: this.state.changesCount >= 5 ? "50%" : "0",
        }
        return (<div style={styleObj}></div>);
    }
}

export default ColorChangingBox;