import styles from "./Keyboard.module.css"

function Key(props) {
    return <div className={styles.key}>{props.letter}</div>
}

function Keyboard () {
    return (
        <div>
            <Key letter="A"/>
        </div>
    )
}

export default Keyboard;