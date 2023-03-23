function SizeButton(props) {
    const {size} = props;

    const styleObj = {
        border: props.textSize === size ? "2px solid green" : "revert",
    };

    return (
        <>
            <button onClick={() => props.changeSetting("textSize", size)} style={styleObj}>{size}</button>
        </>
    );
}

function SizeOptions(props) {
    return (
        <div className="optionsSection">
            <div style={{width: "100%"}}>Size:</div>
            <SizeButton {...props} size={12}/>
            <SizeButton {...props} size={18}/>
            <SizeButton {...props} size={24}/>
            <SizeButton {...props} size={30}/>
        </div>
    )
}

export default SizeOptions;