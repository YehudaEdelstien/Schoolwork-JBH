import React, { useEffect, useState } from 'react';
import baseUrl from '../../../baseUrl';

import ToDoItem from './ToDoItem';
import SortSelecter from './SortSelecter';

function ToDos({ userId }) {
    const [todos, setTodos] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        async function getToDos() {
            try {
                const toDoData = await baseUrl.get(`users/${userId}/todos`)
                const toDoArray = toDoData.data.map((task, index) => ({ ...task, index: index }))
                setTodos(toDoArray)
            } catch (e) {
                console.error(e);
                setError("Could not get Tasks. Please refresh the page and try again.")
            }
        }

        getToDos();
    }, [userId])


    async function updateToDo(elemntObj) {
        const indexToChange = todos.indexOf(elemntObj);
        const prevCompletionState = elemntObj.completed;

        setState({ ...elemntObj, completed: "changing" });

        try {
            await baseUrl.patch(`todos/${elemntObj.id}`, { completed: !prevCompletionState })
            setState({ ...elemntObj, completed: !prevCompletionState })
        } catch (e) {
            setError("Could not update task. Please refresh the page and try again.")
            setState({ ...elemntObj, completed: prevCompletionState })
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
                case "random":
                    return shuffledArray(prevTodos);
                default:
                    return prevTodos;
            }
        })
    }

    function shuffledArray(array) { // durstenfeld shuffle
        let newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            // get a random element
            const j = Math.floor(Math.random() * (i + 1));
            // put it at the end of the array, it won't change again because the range shrinks every loop.
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    return (
        <>
            <h2>TODOS</h2>

            {error && <div style={{ color: "red" }}>{error}</div>}

            <SortSelecter sortTodos={sortTodos} />
            {todos ?
                todos.map(task => <ToDoItem task={task} key={task.id} onChange={updateToDo} />)
                : <div className='Spinner'></div>
            }
        </>
    );
}

export default ToDos;