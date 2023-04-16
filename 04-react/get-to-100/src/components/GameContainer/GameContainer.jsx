import React, { Component } from 'react';

import PlayerContainer from '../PlayerContainer/PlayerContainer';
import AddPlayer from '../AddPlayer/AddPlayer';

class GameContainer extends Component {
    state = {
        gameIsRunning: false,
        players: [
            { name: "Abe", number: "x", score: 0, prevScores: [] },
            { name: "Ben", number: "x", score: 0, prevScores: [] }
        ],
    }

    addPlayer = (name) => {
        this.setState(prevState => {
            const playersArr = [...prevState.players];
            playersArr.push({name: name, number: "x", score: 0, prevScores: []})
            return{players: playersArr};
        })
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
            const newObj = { ...playersArr[index] }

            newObj.number = Math.floor(number);
            newObj.score = newObj.score + 1;
            if (number === 100) {
                newObj.prevScores = [...newObj.prevScores];
                newObj.prevScores.push(newObj.score);
            }

            playersArr[index] = newObj;
            return { players: playersArr };
        })

        if (number === 100) {
            this.setState({ gameIsRunning: false });
        }
    }

    render() {
        const { players, gameIsRunning } = this.state
        return (
            <>
                <div className="gameContainer">
                    {players.map((player, index) => {
                        return <PlayerContainer
                            key={index}
                            playerObj={player}
                            gameIsRunning={gameIsRunning}
                            changeNumber={this.changeNumber}
                        />
                    })}
                    {!gameIsRunning && <AddPlayer 
                        players={players}
                        addPlayer={this.addPlayer}
                    />}
                </div>
                {!gameIsRunning && <button onClick={this.startGame}>Start new game!</button>}
            </>
        )
    }
}
export default GameContainer;