import PlayerButtons from "../PlayerButtons/PlayerButtons";

function PlayerContainer(props) {
    const { name, number, score, prevScores,} = props.playerObj
    return (
        <div className="player">
            <div>Name: {name}</div>
            {props.gameIsRunning ?
                <><div>Number: {number}</div>
                    <PlayerButtons changeNumber={props.changeNumber} number={number} name={name} />
                    <div>Moves: {score}</div></> : 
                <button onClick={() => props.removePlayer(name)}>Remove Player</button>
            }
            <div>Scores: {prevScores.toString()}</div>
        </div>
    )
}

export default PlayerContainer;