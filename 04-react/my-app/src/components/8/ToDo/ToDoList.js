import React, {Component } from 'react';

class ToDoItem extends Component {
    render() {
        let {index, text, isDone, setValue} = this.props

        return (
            <div>
                { text } <br/>
                <button onClick={() => setValue(index, "isDone")}>✔️</button>
                {isDone && "DONE!"}
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

    setValue = (index, value) => {
        const item = this.getItem(index);
        item[value] = !item[value];
        this.setItem(item, index)
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
                
                {this.state.toDoItems.map((item, index) => {
                    return <ToDoItem 
                        key={item.id} 
                        index={index} 
                        text={item.text} 
                        isDone={item.isDone} 
                        setValue={this.setValue}/>
                    })}
            </div>
        );
    }
}

export default ToDoList;
