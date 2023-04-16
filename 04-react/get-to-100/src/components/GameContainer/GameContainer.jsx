import React, { Component } from 'react';

import PlayerContainer from '../PlayerContainer/PlayerContainer';

class GameContainer extends Component {
    constructor(props) {
        super(props);

        const startNum = this.getStartingNumber();

        this.state = {
            gameIsRunning: true,
            players: [
                { name: "Abe", number: startNum, score: 0, prevScores: []},
                { name: "Ben", number: startNum, score: 0, prevScores: []}
            ],
        }
    }

    startGame = () => {
        const startNum = this.getStartingNumber();
        const players = [...this.state.players]
        players.forEach(player => {
            player.number = startNum;
            player.score = 0;
        })

        this.setState({
            gameIsRunning: true,
            players: players,
        })
    }

    getStartingNumber = () => {
        return Math.floor(Math.random() * 100);
    }

    changeNumber = (playerName, number) => {
        if (this.state.gameIsRunning === false) return;

        this.setState(prevState => {
            const playersArr = [...prevState.players];
            const index = playersArr.findIndex(obj => obj.name === playerName);
            const newObj = {...playersArr[index]}

            newObj.number = Math.floor(number);
            newObj.score = newObj.score + 1;
            if (number === 100) {
                newObj.prevScores = [...newObj.prevScores];
                newObj.prevScores.push(newObj.score);
            }

            playersArr[index] = newObj;
            return {players: playersArr};
        })

        if (number === 100) {
            this.setState({gameIsRunning: false});
        }
    }

    render() {
        const {players, gameIsRunning} = this.state
        return (
            <>
                <div className="gameContainer">
                {players.map(player => {
                    return <PlayerContainer
                        key={player.name}
                        playerObj={player}
                        changeNumber={this.changeNumber}
                    />
                })}
                </div>
                {!gameIsRunning && <button onClick={this.startGame}>restart!</button>}
            </>
        )
    }
}
export default GameContainer;