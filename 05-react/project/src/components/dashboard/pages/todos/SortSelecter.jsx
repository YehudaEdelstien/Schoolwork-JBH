export default function SortSelecter({ sortTodos }) {

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