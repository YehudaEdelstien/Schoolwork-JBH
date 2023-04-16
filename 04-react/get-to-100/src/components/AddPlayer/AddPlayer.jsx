function AddPlayer(props) {
    const onButtonClicked = () => {
        let name = prompt("Input a name")
        if (name === null) return;
        props.addPlayer(name);
    }

    return (
        <button className="addPlayer" onClick={onButtonClicked}>+</button>
    );
}

export default AddPlayer;