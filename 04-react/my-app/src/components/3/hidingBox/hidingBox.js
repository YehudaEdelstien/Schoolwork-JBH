import React, { Component } from "react";
import styles from "./hidingBox.module.css"

console.log(styles);

export default class HidingBox extends Component {
    constructor(props) {
        super(props);
        this.state = {boxIsActive: true};
    }

    toggleBox = () => {
        this.setState({boxIsActive: !this.state.boxIsActive})
    }

    render() {
        return <div className={styles.container}>
            <button onClick={this.toggleBox}>Show/Hide</button>
            <div className={this.state.boxIsActive ? styles.box : styles.box + " " + styles.hidden}></div>
        </div>
    }
}