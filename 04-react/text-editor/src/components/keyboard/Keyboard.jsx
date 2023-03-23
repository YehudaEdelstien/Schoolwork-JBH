import keyboardKeys from "./Keys";

function Key(props) {
    return <button className="key" onClick={() => props.onClick(props.letter)}>{props.letter}</button>
}

function KeyRow(props) {
    return <div className="keyRow">{props.keys.map(key => <Key key={key} letter={key} onClick={props.onClick}/>)}</div>
}

function BottomKeyRow(props) {
    return (
    <div className="keyRow">
        <button onClick={() => props.changeSetting("caps", !props.caps)}>CAPS LOCK</button>
        <button onClick={() => props.addLetter("\u00A0")} style={{width:"150px"}}>Space</button>
        <button onClick={props.undoLast}>Undo</button>
        <button onClick={props.removeLetter}>⌫</button>
    </div>
    )
}

function Keyboard (props) {
    const keys = (() => {
        if(props.caps === true) {
            const arr = keyboardKeys.en.map(letterArr => {
                return letterArr.map(char => char.toUpperCase());
            })
            return arr;
        } else {
            return keyboardKeys[props.language]
        }
    })()
    return (
        <div id="keyboard" >
            <KeyRow keys={keys[0]} onClick={props.addLetter}/>
            <KeyRow keys={keys[1]} onClick={props.addLetter}/>
            <KeyRow keys={keys[2]} onClick={props.addLetter}/>
            <BottomKeyRow 
                changeSetting={props.changeSetting} 
                caps={props.caps} 
                addLetter={props.addLetter}
                removeLetter={props.removeLetter}
                undoLast={props.undoLast}
            />
        </div>
    )
}

export default Keyboard;