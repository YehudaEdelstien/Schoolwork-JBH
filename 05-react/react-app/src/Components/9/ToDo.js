import React, { useState } from 'react';

function ToDo() {
    const [tasks, setTasks] = useState([
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
    ])

    const updateItem = (index) => {
        setTasks(prev => {
            const newArr = [...prev]
            newArr[index] = {
                ...prev[index], 
                completed: !prev[index].completed}
            return newArr;
        })
    }

    return (
        <div>
            {tasks.map((element, index) => {
                return <ToDoItem
                    key={element.name}
                    name={element.name}
                    value={element.completed}
                    onClick={updateItem}
                    index={index}
                />
            })}
        </div>
    );
}

function ToDoItem({ name, value, index, onClick }) {
    return (
        <div>
            <label htmlFor={name}>
                {value ? name : <del>{name}</del>}
            </label>
            <button id={name} onClick={() => {onClick(index)}}>
                {value ? <>&#x2713;</> : <>&#x2717;</>}
            </button>
        </div>
    )
}

export default ToDo;