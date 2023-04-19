import React, { Component } from 'react';

export default class BoxContainer extends Component {
    render() { 
        return (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center" , height: "100vh"}}>
                <Box size="100px" />
                <Box size="200px" />
                <Box size="300px" />
            </div>
        );
    }
}
 
class Box extends Component {
    state = { display: "none" } 

    componentDidMount() {
        console.log("Mounted")
        setTimeout(this.displayBox, 1000)
    }

    displayBox = () => {
        console.log("diplay")
        this.setState({display: "block"})
        setTimeout(this.hideBox, 4000)
    }

    hideBox = () => {
        this.setState({display: "none"})
    }

    render() { 
        return (<div style={{
            width: this.props.size,
            height: this.props.size,
            backgroundColor: "black",
            display: this.state.display,
        }}></div>);
    }
}