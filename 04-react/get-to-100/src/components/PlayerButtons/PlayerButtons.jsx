function PlayerButtons(props) {
    return (
        <div>
            <button onClick={() => props.changeNumber(props.name, props.number + 1)}>+ 1</button>
            <button onClick={() => props.changeNumber(props.name, props.number - 1)}>- 1</button>
            <button onClick={() => props.changeNumber(props.name, props.number * 2)}>* 2</button>
            <button onClick={() => props.changeNumber(props.name, props.number / 2)}>/ 2</button>
        </div>
    );
}

export default PlayerButtons;
