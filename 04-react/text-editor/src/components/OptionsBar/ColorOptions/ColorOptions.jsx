function ColorButton(props) {
    const {color, localColor} = props;

    const styleObj = {
        backgroundColor: localColor,
        border: localColor === color ? "2px solid gold" : "revert",
    };

    return (
        <>
            <button onClick={() => props.changeSetting("color", localColor)} style={styleObj}></button>
        </>
    );
}

function ColorOptions(props) {
    return (
        <div className="optionsSection">
            <span>Colors:</span>
            <ColorButton {...props} localColor={"black"}/>
            <ColorButton {...props} localColor={"red"}/>
            <ColorButton {...props} localColor={"green"}/>
            <ColorButton {...props} localColor={"blue"}/>
        </div>
    )
}

export default ColorOptions;