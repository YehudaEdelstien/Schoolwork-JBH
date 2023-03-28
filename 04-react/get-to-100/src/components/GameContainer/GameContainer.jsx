import React, { Component } from 'react';

import PlayerContainer from '../PlayerContainer/PlayerContainer';

class GameContainer extends Component {
    state = {
        players: [
            { name: "Abe", number: 50, score: 0 },
            { name: "Ben", number: 50, score: 0 }
        ],
    }

    getStartingNumber = () => {
        return Math.floor(Math.random() * 100);
    }

    changeNumber = (playerName, number) => {
        this.setState(prevState => {
            const playersArr = [...prevState.players];
            const index = playersArr.findIndex(obj => obj.name === playerName);
            const newObj = {...playersArr[index]}
            newObj.number = Math.floor(number);
            newObj.score = newObj.score + 1;
            playersArr[index] = newObj;
            return {players: playersArr};
        })
    }

    render() {
        return (
            <div className="gameContainer">
                {this.state.players.map(player => {
                    return <PlayerContainer
                        key={player.name}
                        name={player.name}
                        number={player.number}
                        score={player.score}
                        changeNumber={this.changeNumber}
                    />
                })}
            </div>
        )
    }
}
export default GameContainer;