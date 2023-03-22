import keys from "./Keys.js";

function Key(props) {
    return <button className="key">{props.letter}</button>
}

function KeyRow(props) {
    return <div className="keyRow">{props.keys.map(key => <Key letter={key}/>)}</div>
}

function Keyboard () {
    return (
        <div id="keyboard">
            <KeyRow keys={keys[0]}/>
            <KeyRow keys={keys[1]}/>
            <KeyRow keys={keys[2]}/>
        </div>
    )
}

export default Keyboard;