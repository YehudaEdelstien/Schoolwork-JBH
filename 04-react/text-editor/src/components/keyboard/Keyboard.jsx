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
        <button>CAPS LOCK</button>
        <button>Undo</button>
        <button>Space</button>
        <button>⌫</button>
    </div>
    )
}

function Keyboard (props) {
    const keys = keyboardKeys.english;
    return (
        <div id="keyboard" >
            <KeyRow keys={keys[0]} onClick={props.onClick}/>
            <KeyRow keys={keys[1]} onClick={props.onClick}/>
            <KeyRow keys={keys[2]} onClick={props.onClick}/>
            <BottomKeyRow />
        </div>
    )
}

export default Keyboard;