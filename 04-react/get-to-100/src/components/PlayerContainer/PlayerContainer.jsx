import PlayerButtons from "../PlayerButtons/PlayerButtons";

function PlayerContainer(props) {
    return (
        <div className="player">
            <div>Name: {props.name}</div>
            <div>Number: {props.number}</div>
            <PlayerButtons changeNumber={props.changeNumber} number={props.number} name={props.name}/>
            <div>Moves: {props.score}</div>
            <div>previous Scores</div>
        </div>
    )
}

export default PlayerContainer;