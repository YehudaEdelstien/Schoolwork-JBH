import React, { useEffect, useState } from 'react';
import baseUrl from '../../baseUrl';

function ToDos({ userId }) {
    const [todos, setTodos] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        getToDos();

        async function getToDos() {
            const toDoData = await baseUrl.get(`todos?userId=${userId}`)
            const toDoArray = toDoData.data.map((task, index) => ({ ...task, index: index }))
            setTodos(toDoArray)
        }
    }, [userId])


    async function updateToDo(elemntObj) {
        const indexToChange = todos.indexOf(elemntObj);
        const prevCompletionState = elemntObj.completed;

        setState({...elemntObj, completed: "changing"});

        try {
            await baseUrl.patch(`todos/${elemntObj.id}`, { completed: !prevCompletionState })
            setState({...elemntObj, completed: !prevCompletionState})
        } catch (e) {
            setError("Could not update task. Please refresh the page and try again.")
            setState({...elemntObj, completed: prevCompletionState})
        }

        function setState(obj) {
            setTodos(prev => {
                const newState = [...prev];
                prev[indexToChange] = obj;
                return newState;
            })
        }
    }

    function sortTodos(sortMethod) {
        setTodos((prevTodos) => {
            switch (sortMethod) {
                case "id":
                    return prevTodos.toSorted((a, b) => a.id - b.id);
                case "completed":
                    return prevTodos.toSorted((a, b) => Number(a.completed) - Number(b.completed));
                case "name":
                    return prevTodos.toSorted((a, b) => a.title.localeCompare(b.title));
                default:
                    return prevTodos;
            }
        })
    }

    return (
        <>
            <h3>TODOS</h3>
            {error && <div style={{color: "red"}}>{error}</div>}
            <SortSelect sortTodos={sortTodos} />
            {todos ?
                todos.map(task => <ToDoItem task={task} key={task.id} onChange={updateToDo}/>)
                : <div className='Spinner'></div>}
        </>
    );
}

export default ToDos;

function SortSelect({ sortTodos }) {

    function setSelection({ target }) {
        console.log(target.value)
        sortTodos(target.value)
    }

    return (
        <div>
            <label htmlFor="sortMethod">Sort by</label>
            <select name="sortMethod" id="sortMethod" onChange={setSelection}>
                <option value="id">Id</option>
                <option value="completed">Completed</option>
                <option value="name">Task name</option>
                <option value="random">Random</option>
            </select>
        </div>
    )
}

function ToDoItem({ task, onChange }) {
    return (
        <div>
            <span>{task.index + 1}. </span>
            {task.title}
            {task.completed !== "changing" ?
                <input type='checkbox' checked={task.completed} onChange={() => onChange(task)} />
                : <div className='Spinner Spinner-sml'></div>}
        </div>
    )
}