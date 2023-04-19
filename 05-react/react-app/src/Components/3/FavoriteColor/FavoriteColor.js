import React, { Component } from 'react';

class FavoriteColor extends Component {
    state = { favoriteColor: "CornflowerBlue", colorWasUpdated: false }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: "Chocolate", colorWasUpdated: true })
        }, 1000)
    }

    componentDidUpdate() {
        if (this.state.colorWasUpdated){
            this.setState(prevState => {
                return {updatedFavoriteColor: prevState.favoriteColor, colorWasUpdated: false,}
            })
        }
    }

    render() {
        const { favoriteColor, updatedFavoriteColor } = this.state
        return (
            <div>
                <h1 style={{ color: favoriteColor }}>My favorite color is Cornflower Blue</h1>
                {updatedFavoriteColor && <h2 style={{ color: favoriteColor }}>The updated favorite color is {updatedFavoriteColor}</h2>}
            </div>
        );
    }
}

export default FavoriteColor;