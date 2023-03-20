import React, { Component } from 'react';
import NumKey from "./NumKey.js";


class App extends Component {

    state = { val: 0 }

    getKeys = () => {
        const arr = Array(10)
        arr.fill(1)
        return arr.map((v, i) => <NumKey num={i} key={i} onClick={this.addNumToVal} />)
    }

    addNumToVal = (num) => {
        this.setState(s => ({ val: s.val + num }))
    }

    render() {
        return (
            <>
                <h2>Your Number is {this.state.val}</h2>
                <div style={{display: "grid", gridTemplateColumns: "50px 50px 50px"}}>
                {this.getKeys()}
                </div>
            </>
        );
    }
}

export default App;