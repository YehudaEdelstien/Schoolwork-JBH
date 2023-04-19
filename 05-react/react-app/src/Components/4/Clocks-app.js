import React, { Component } from 'react';

import Clock from './Clock';

class ClockApp extends Component {
    state = { changeChildrenIntervals: false } 

    componentDidUpdate () {
        if (this.state.changeChildrenIntervals) {
            this.setState({changeChildrenIntervals: false})
        }
    }

    changeChildren = (change) => {
        this.setState({changeChildrenIntervals: change})
    }

    render() { 
        return (
        <div style={{fontSize: "20px", fontWeight: "700", lineHeight: "40px"}}>
            All Clocks
            <div>
                <button onClick={() => this.changeChildren("reset")}>Reset All Intervals</button>
                <button onClick={() => this.changeChildren("double")}>Double All Intervals</button>
                <button onClick={() => this.changeChildren("random")}>Randomize All Intervals</button>
            </div>
            <hr/>
            <Clock location="JLM" timeZone="Asia/Jerusalem" change={this.state.changeChildrenIntervals}/>
            <Clock location="LON" timeZone="Europe/London" change={this.state.changeChildrenIntervals}/>
            <Clock location="NYC" timeZone="America/New_York" change={this.state.changeChildrenIntervals}/>
        </div>
        );
    }
}
 
export default ClockApp;