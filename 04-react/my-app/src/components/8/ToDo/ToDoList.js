import React, { Children, Component } from 'react';

class ToDoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {text: props.text}
    }

    render() {
        const {text} = this.state
        return (
            <div>{ text }</div>
        );
    }
}

class ToDoList extends Component {
    state = { toDoItems: [] }
    counter = 0

    addItem = () => {
        const item = {
            text: prompt("What is the task?"),
            id: this.counter,
        }
        this.counter++

        const itemArr = [...this.state.toDoItems, item]
        this.setState({ toDoItems: itemArr })
    }

    render() {
        return (
            <div>
                <button onClick={this.addItem}>Add</button>
                {this.state.toDoItems.map(item => <ToDoItem key={item.id} text={item.text}/>)}
            </div>
        );
    }
}

export default ToDoList;
