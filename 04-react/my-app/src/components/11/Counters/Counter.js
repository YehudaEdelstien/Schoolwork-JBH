import React, { Component } from 'react';

class Counter extends Component {
    state = { count: 0 }

    handleCount = (num) => {
        //reset
        if (!num) {
            this.setState({ count: 0 })
        }
        //inc & dec
        this.setState(prev => {
            return { count: prev.count + (num * this.props.id) }
        })
    }
    render() {
        return (
            <div className="counter">
                <h2>Counter #{this.props.id} </h2>
                <h3>-- {this.state.count} --</h3>
                <button onClick={() => this.handleCount(+1)}>INC</button>
                <button onClick={() => this.handleCount(-1)}>DEC</button>
                <button onClick={() => this.handleCount(0)}>RES</button>
            </div>
        );
    }
}

export default Counter;