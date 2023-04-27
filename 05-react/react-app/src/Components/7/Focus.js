import React, { Component } from 'react';

class Focus extends Component {
    state = {}

    inputRef = React.createRef()

    componentDidMount() {
        const focusedElement = this.inputRef.current
        focusedElement.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.inputRef}></input>
            </div>);
    }
}

export default Focus;