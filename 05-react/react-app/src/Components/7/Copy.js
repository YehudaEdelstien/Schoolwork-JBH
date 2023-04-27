import React, { Component } from 'react';

class Copy extends Component {
    state = { textValue: "" }

    updateValue = ({ target }) => {
        this.setState({
            textValue: target.value,
        })
    }

    copyValue = () => {
        navigator.clipboard.writeText(this.state.textValue)
    }

    render() {
        const { textValue } = this.state
        return (
            <div>
                <textarea value={textValue} onChange={this.updateValue}></textarea>
                <button onClick={this.copyValue}>copy</button>
            </div>);
    }
}

export default Copy;