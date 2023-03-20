import React, { Component } from 'react';

class NumKey extends Component {
    render() {
        const {num, onClick} = this.props ; 
        console.log(onClick)
        return <button onClick={()=>onClick(num)}>{num}</button>
    }
}
export default NumKey;