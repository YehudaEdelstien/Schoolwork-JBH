import React, { Component } from 'react';

class Clock extends Component {
    state = {
        time: new Date().toLocaleTimeString("en-US", { timeZone: this.props.timeZone }),
        updateInterval: 1,
    }

    currentTimeoutId = null;

    componentDidMount() {
        this.updateTime();
    }

    componentDidUpdate() {
        const change = this.props.change;
        switch (change) {
            case "reset":
                this.changeInterval(1);
                break;
            case "double":
                this.changeInterval(this.state.updateInterval * 2)
                break;
            case "random":
                this.changeInterval(Math.floor(Math.random() * 100) + 1)
                break;
            default:
                break;
        }
    }

    componentWillUnmount() {
        clearTimeout(this.currentTimeoutId);
    }

    updateTime = (interval) => {
        clearInterval(this.currentTimeoutId)
        this.setState({ time: new Date().toLocaleTimeString("en-US", { timeZone: this.props.timeZone }) });
        this.currentTimeoutId = setTimeout(this.updateTime, interval || this.state.updateInterval * 1000);
    }

    changeInterval = (newInterval) => {
        if (newInterval < this.state.updateInterval) {
            this.updateTime(newInterval);
        }
        this.setState({ updateInterval: newInterval });
    }

    
    render() {
        const {location} = this.props
        return (
            <div>
                {location} ===&gt; Update Interval = {this.state.updateInterval} <br/>
                The time is {this.state.time} <br/>
                <div>
                    <button onClick={() => this.changeInterval(1)}>Reset My Interval</button>
                    <button onClick={() => this.changeInterval(this.state.updateInterval * 2)}>Double My Interval</button>
                    <button onClick={this.updateTime}>Update Me Now</button>
                </div>
                <hr/>
            </div>
            
        );
    }
}

export default Clock;