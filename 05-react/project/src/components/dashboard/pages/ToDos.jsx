import React, { useEffect, useState } from 'react';
import baseUrl from '../../baseUrl';

function ToDos({userId}) {
    const [todos, setTodos] = useState();
    const [todoElements, setTodoElements] = useState()

    useEffect(() => {
        getToDos();
    }, [])

    async function getToDos() {
        const toDoData = await baseUrl.get(`todos?userId=${userId}`)
        setTodos(toDoData.data)
        const toDoArray = toDoData.data.map((task, index) => ({...task, index: index}))
        setTodoElements(toDoArray)
    }

    function updateToDo(id) {

    }

    function sortTodos(sortMethod) {
        setTodos((prevTodos) => {
            switch(sortMethod){
                case "id":
                    return prevTodos.toSorted((a, b) => a.id - b.id)
                case "completed":
                    return prevTodos.toSorted((a, b) => Number(a.completed) - Number(b.completed))
                default:
                    return prevTodos;
            }
        })
    }

    return (
        <>
            <h3>TODOS</h3>
            <SortSelect sortTodos={sortTodos}/>
            {todoElements ?
                todoElements.map(task => <ToDoItem task={task} key={task.id} />)
                : <div className='Spinner'></div>}
        </>
    );
}

export default ToDos;

function SortSelect({sortTodos}) {

    function setSelection({target}) {
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

function ToDoItem({ task }) {
    const [completed, setIsCompleted] = useState(task.completed)

    async function onChange() {
        const prevState = completed
        setIsCompleted("changing")
        try {
            await baseUrl.patch(`todos/${task.id}`, { completed: !prevState })
            setIsCompleted(!prevState)
        } catch (e) {
            console.error(e)
            setIsCompleted(prevState)
        }
    }

    return (
        <div>
            <span>{task.index}. </span>
            {task.title}
            {completed !== "changing" ?
                <input type='checkbox' checked={completed} onChange={onChange} />
                : <div className='Spinner Spinner-sml'></div>}
        </div>
    )
}