import React, { Component } from 'react';
import styles from "./MemeGenerator.module.css"

class MemeGenerator extends Component {
    state = {
        topText: "",
        bottomText: "",
        image: "http://i.imgflip.com/1bij.jpg",
    }

    componentDidMount() {
        const getImages = async () => {
            const memeData = await fetch("https://api.imgflip.com/get_memes").then(res => res.json());
            this.setState({ allMemeImgs: memeData.data.memes });
        }
        getImages();
    }

    updateValue = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }

    changeImage = () => {
        const {allMemeImgs} = this.state;
        const randomIndex = Math.floor(Math.random() * allMemeImgs.length)
        const newImageURL = allMemeImgs[randomIndex].url
        this.setState({
            image: newImageURL,
        })
    }

    render() {
        const { topText, bottomText } = this.state
        return (
            <div>
                <form className={styles.memeForm}>
                    <input
                        type='text'
                        name="topText"
                        value={topText}
                        onChange={this.updateValue}
                        placeholder='Top Text'
                    />
                    <input
                        type='text'
                        name="bottomText"
                        value={bottomText}
                        onChange={this.updateValue}
                        placeholder='Bottom Text'
                    />
                    <button type="button" onClick={this.changeImage}>Gen</button>
                </form>

                <div className={styles.meme}>
                    <img src={this.state.image} alt="meme"/>
                    <h2 className={styles.top}>{this.state.topText}</h2>
                    <h2 className={styles.bottom}>{this.state.bottomText}</h2>
                </div>
            </div>
        );
    }
}
export default MemeGenerator;