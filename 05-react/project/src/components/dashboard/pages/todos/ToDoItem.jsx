export default function ToDoItem({ task, onChange }) {
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