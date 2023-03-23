function InputArea({textObjects}) {
    return <div id="inputArea">{textObjects.map((letter, index) => {
        const styleObj = {
            fontSize: letter.size, 
            color: letter.color,
            verticalAlign: "text-bottom",
        }
        return <span key={index} style={styleObj}>{letter.char}</span>
    })}</div>
}

export default InputArea;