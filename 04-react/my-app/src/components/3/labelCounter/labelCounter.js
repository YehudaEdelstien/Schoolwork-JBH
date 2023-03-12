import React, {Component} from "react";

export default class LabelCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    increment = () => {
        if (this.state.count >= 10) return;

        this.setState({
            count: this.state.count + 1
        });
    }
    
    decrement = () => {
        if (this.state.count <= -10) return;

        this.setState({
            count: this.state.count - 1
        });
    }

    getColor = () => {
        if (this.state.count > 0) {
            return "green"
        } else if (this.state.count < 0) {
            return "red"
        } else {
            return "black"
        }
    }

    render() {
        return <fieldset style={{width: "fit-content", margin: "5px"}}>
            <button onClick={this.decrement}>-</button>
            <span style={{color: this.getColor()}}> {this.state.count} </span>
            <button onClick={this.increment}>+</button>
        </fieldset>
    }
}