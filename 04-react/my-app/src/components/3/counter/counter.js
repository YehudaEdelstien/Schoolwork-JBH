import React, {Component} from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {count: this.props.count};
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    reset = () => {
        this.setState({
            count: this.props.count
        });
    }

    render() {
        return <div>
            <p>Counter {this.props.count}</p>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.reset}>Reset</button>
            <div>{this.state.count}</div>
        </div>
    }
}