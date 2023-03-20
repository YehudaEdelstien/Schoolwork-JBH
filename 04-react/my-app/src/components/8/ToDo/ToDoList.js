import React, {Component } from 'react';

class ToDoItem extends Component {
    render() {
        let {text} = this.props

        return (
            <div>
                { text } <br/>
                <button>✔️</button>
            </div>
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
            isDone: false,
        }

        this.counter++

        this.setState((prevState) => {
            return {
                toDoItems: [...prevState.toDoItems, item]
            }
        })
    }

    setIsDone = (index) => {
        const item = this.getItem(index);
        item.isDone = !item.isDone;
    }

    getItem = (index) => {
        const itemArr = [...this.state.toDoItems]
        return {...itemArr[index]}
    }

    setItem = (item, index) => {
        const itemArr = [...this.state.toDoItems]
        itemArr[index] = item;
        this.setState(itemArr)
    }

    render() {
        return (
            <div>
                <button onClick={this.addItem}>Add</button>
                <ul>
                {this.state.toDoItems.map((item, index) => <li><ToDoItem key={item.id} index={index} text={item.text} isDone={item.isDone} setIsDone={this.setIsDone}/></li>)}
                </ul>
            </div>
        );
    }
}

export default ToDoList;
