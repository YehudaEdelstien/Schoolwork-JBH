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
        firstName: { labelText: "First name", type: "text", defaultValue: "",},
        lastName: { labelText: "Last name", type: "text", defaultValue: "",},
        email: { labelText: "Email", type: "text", defaultValue: "",},
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
        switch (type) {
            case "text":
                return (
                    <TextField
                        key={key}
                        name={key}
                        value={value}
                        labelText={this.inputFieldData[key].labelText}
                        updateValue={this.updateValue}
                    />
                )
            case "radio":
                return (
                    <RadioField
                        key={key}
                        name={key}
                        value={value}
                        labelText={this.inputFieldData[key].labelText}
                        options={this.inputFieldData[key].options}
                        updateValue={this.updateValue}
                    />
                )
            default:
                return (<div></div>)
        }
    }

    addNewStudent = (e) => {
        e.preventDefault();
        this.props.addStudent(this.state.studentData);
        const newStudentData = {...this.state.studentData};
        for (const key in newStudentData) {
            newStudentData[key] = this.inputFieldData[key].defaultValue;
        }
        this.setState({studentData: newStudentData});
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
        let { name, value, labelText, updateValue, } = this.props

        return (
            <>
                <label style={{ display: "block" }} htmlFor={name}>
                    <h3>{labelText}</h3>
                </label>
                <input
                    id={name}
                    name={name}
                    value={value}
                    onChange={(e) => updateValue(e)}
                    required
                ></input>
                <div style={{fontWeight: "700"}}>current {labelText} is {value}</div>
            </>
        )
    }
}

class RadioField extends Component {
    render() {
        const { name, value, labelText, updateValue, options } = this.props

        console.log()

        return (
            <>
                <h3>{name}</h3>
                {options.map((opt) => {
                    return (
                        <label style={{ display: "block" }} htmlFor={opt} key={opt}>
                            <input
                                type='radio'
                                id={opt}
                                name={name}
                                value={opt}
                                checked={opt === value ? true : false}
                                onChange={(e) => updateValue(e)}
                                required
                            ></input>
                            {opt}
                        </label>
                    )
                })}
                <div style={{fontWeight: "800"}}>current {labelText} is {value}</div>
            </>
        )
    }
}

export default SchoolForm;