function MiscOptions(props) {
    const {changeCase} = props
    return (
        <div className="optionsSection">
            <button onClick={() => changeCase("upper")}>UPPER ALL</button>
            <button onClick={() => changeCase("lower")}>LOWER ALL</button>
            <button onClick={props.clearAll}>CLEAR ALL</button>
        </div>
    )
}

export default MiscOptions;