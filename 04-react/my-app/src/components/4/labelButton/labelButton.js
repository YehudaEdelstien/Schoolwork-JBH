import React, { Component } from 'react';

class LabelButton extends Component {
    constructor(props) {
        super(props);
        this.arr = props.arr;
        this.count = 0
        this.hideMessageTimeout = null
    }

    state = {
        currentMessage: "",
    }

    changeMessage = () => {
        this.setState({
            currentMessage: this.arr[this.count],
        });
        
        this.incrementCount();
        this.triggerHideMessage();
    }

    incrementCount = () => {
        this.count ++
        if (this.count >= this.props.arr.length) {
            this.count = 0;
        }
    }

    triggerHideMessage = () => {
        clearTimeout(this.hideMessageTimeout);
        this.hideMessageTimeout = setTimeout(() => {
            this.setState({ currentMessage: "" });
        }, 2000)
    }

    render() {
        return (
            <>
                <button onClick={this.changeMessage}>Change Text</button>
                <p>{this.state.currentMessage}</p>
            </>
        );
    }
}

export default LabelButton;