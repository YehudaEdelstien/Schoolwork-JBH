import React, { Component } from 'react';

import LandingPage from './LandingPage/LandingPage';
import MainPage from './MainPage/MainPage';

import styles from './chatapp.module.css'

class ChatApp extends Component {
    state = { userid: null} 

    setUser = (id) => {
        this.setState({userid: id})
    }

    render() {
        return (
            <div className={styles.chatApp}>
                {!this.state.userid ?
                <LandingPage 
                setUser={this.setUser}/>
                : <MainPage />}
            </div>
        );
    }
}

export default ChatApp;