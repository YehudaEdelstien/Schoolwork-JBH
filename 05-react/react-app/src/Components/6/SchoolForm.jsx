import React, { Component } from 'react';

class SchoolForm extends Component {
    state = {
        studentData: {
            firstName: "",
            lastName: "",
            address: "",
            email: "",
        }
    }

    inputFieldData = {
        firstName: { labelText: "First name", type: "text", defaultValue: "", },
        lastName: { labelText: "Last name", type: "text", defaultValue: "", },
        address: { labelText: "Address", type: "text", defaultValue: "", },
        email: { labelText: "Email", type: "email", defaultValue: "", },
    }

    updateValue = ({ target }) => {
        const newStudentData = { ...this.state.studentData};
        const newValue = target.value;
        newStudentData[target.name] = newValue;
        this.setState({ studentData: newStudentData })
    }

    getInputFieldJSXArray = () => {
        const { studentData } = this.state;
        const arr = []

        for (const [key, value] of Object.entries(studentData)) {
            const type = this.inputFieldData[key].type
            arr.push(this.getInputfield(key, value, type));
        }

        return arr;
    }

    getInputfield = (key, value, type) => {
        return (
            <TextField
                key={key}
                type={type}
                name={key}
                value={value}
                labelText={this.inputFieldData[key].labelText}
                updateValue={this.updateValue}
            />
        )
    }

    addNewStudent = (e) => {
        e.preventDefault();

        const {firstName, lastName, address, email} = this.state.studentData;
        fetch("https://629e0de33dda090f3c126d46.mockapi.io/students", {
            method: "POST",
            body: JSON.stringify({name: firstName + " " + lastName, address, email: email}),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        .then(res => {
            this.props.toggleAddStudent();
            if(!res.ok){
                throw new Error ("Couldn't add student!")
            }
        })
        .catch(error => console.error(error))
    }

    
    render() {
        return (
            <form autoComplete="off" onSubmit={this.addNewStudent}>
                <h1>Student Form</h1>
                {this.getInputFieldJSXArray()}
                <button type="submit">Submit</button>
                <button type="button" onClick={this.props.toggleAddStudent}>Cancel</button>
            </form>
        );

    }
}

class TextField extends Component {
    render() {
        let { type, name, value, labelText, updateValue, } = this.props

        return (
            <>
                <label style={{ display: "block" }} htmlFor={name}>
                    {labelText}
                </label>
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={(e) => updateValue(e)}
                    required
                ></input>
                <p style={{ fontWeight: "700" }}>current {labelText} is {value}</p>
            </>
        )
    }
}
export default SchoolForm;