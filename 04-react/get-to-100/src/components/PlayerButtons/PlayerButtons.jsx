function PlayerButtons(props) {
    console.log(props);
    const {changeNumber, name, number} = props
    return (
        <div>
            <button onClick={() => changeNumber(name, number + 1)}>+ 1</button>
            <button onClick={() => changeNumber(name, number - 1)}>- 1</button>
            <button onClick={() => changeNumber(name, number * 2)}>* 2</button>
            <button onClick={() => changeNumber(name, number / 2)}>/ 2</button>
        </div>
    );
}

export default PlayerButtons;
