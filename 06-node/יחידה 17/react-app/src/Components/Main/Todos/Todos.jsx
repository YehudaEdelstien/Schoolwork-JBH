import { useEffect, useState } from "react";
import axios from "axios";

export default function Todos( {userName} ) {
    const [todoArray, setTodoArray] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const {data} = await axios.get(`http://localhost:4000/api/todos?userName=${userName}`)
            setTodoArray(data);
        }
        fetchData();
    }, [userName])

    async function updateTodo(index, state) {
        const id = todoArray[index].id;
        const {data} = await axios.patch(`http://localhost:4000/api/todos?id=${id}&value=${state}`);
        const newArr = [...todoArray];
        newArr[index].done = state;
        console.log(data)
        setTodoArray(newArr)
    }   
    
    return (
        <article>
            <h2>Todos</h2>
            {todoArray.length === 0?
            <div aria-busy='true'></div>
            :todoArray.map((item, index) => {
                return <TodoItem todo={item.todo} isDone={item.done} key={index} index={index} updateTodo={updateTodo}/>
            })}
        </article>
    )
}

function TodoItem({todo, index, isDone, updateTodo}) {
    async function onChangeTodoState() {
        await updateTodo(index, !isDone);
    }

    console.log(index +" " +isDone);

    return(
        <div>
            <input type="checkbox" checked={isDone} onChange={onChangeTodoState}/>
            <span>{todo}</span>
        </div>
    )
}