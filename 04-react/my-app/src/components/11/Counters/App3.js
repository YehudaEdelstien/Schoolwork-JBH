import React, { Component } from 'react';
import Counter from './Counter.jsx'

class App3 extends Component {
    counterAmount = 5;

    Counters() {
        let counters = [];
        for (let i = 1; i <= this.counterAmount; i++) {
            counters.push(<Counter id={i} key={i}/>)
        }
        return counters;
    }

    render() {
        return (
            <div>
                {this.Counters()}
            </div>
        )
    }
}
export default App3