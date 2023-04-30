import React, { Component } from 'react';
import baseURL from '../api';

import styles from './landingPage.module.css'

export default class LandingPage extends Component {
    state = {loggingIn: false, error: null}

    toggleLogin = () => {
        this.setState(prevState => {
            return {loggingIn: !prevState.loggingIn, error: null}
        })
    }

    register = async (submittedData) => {
        console.log(submittedData)
        try {
            const users = await baseURL.get()
            console.log(users)
        } catch (e){
            this.setState({error: e.message})
        }
    }

    render() {
        const {error} = this.state;
        return (
            <div className={styles.formContainer}>
                <UserDataForm submit={this.register}/>
                {error && <p>Error: {error}</p>}
            </div>
        );
    }
}

class UserDataForm extends Component {
    state = {name: ""}

    updateField = ({target}) => {
        this.setState({[target.name]: target.value})
    }

    submitData = (e) => {
        e.preventDefault()
        this.props.submit(this.state)
    }

    render() {
        const {name} = this.state
        return (
            <form onSubmit={this.submitData}>
                <label htmlFor=""> Name:
                    <input id="name" name="name" minLength={3} maxLength={16} required
                    onChange={this.updateField}
                    value={name}>
                    </input>
                </label>
                <button type={'submit'}>Submit</button>
            </form>
        )
    }
}