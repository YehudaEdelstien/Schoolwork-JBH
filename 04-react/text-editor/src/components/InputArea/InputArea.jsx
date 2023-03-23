function InputArea({textObjects}) {
    return <div id="inputArea">{textObjects.map((letter, index) => {
        return <span key={index} style={{fontSize: letter.size, color: letter.color}}>{letter.char}</span>
    })}</div>
}

export default InputArea;