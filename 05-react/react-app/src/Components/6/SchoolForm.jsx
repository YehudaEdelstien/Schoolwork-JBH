import React, { Component } from 'react';

class SchoolForm extends Component {
    state = {
        studentData: {
            firstName: "",
            lastName: "",
            email: "",
        }
    }

    inputFieldData = {
        firstName: { labelText: "First name", type: "text", defaultValue: "", },
        lastName: { labelText: "Last name", type: "text", defaultValue: "", },
        email: { labelText: "Email", type: "email", defaultValue: "", },
    }

    updateValue = ({ target }) => {
        const newStudentData = { ...this.state.studentData };
        const oldValue = newStudentData[target.name]
        const newValue = typeof oldValue === "string" ? target.value : parseInt(target.value);
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
        this.props.addStudent(this.state.studentData);
        const newStudentData = { ...this.state.studentData };
        for (const key in newStudentData) {
            newStudentData[key] = this.inputFieldData[key].defaultValue;
        }
        this.setState({ studentData: newStudentData });
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.addNewStudent}>
                <h1>Student Form</h1>
                {this.getInputFieldJSXArray()}
                <button>Submit</button>
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