import React, { Component } from 'react';

import StudentList from './StudentList';
import SchoolForm from './SchoolForm';

class SchoolApp extends Component {
    state = {
        students: [{
            firstName: "Rad",
            lastName: "Dude",
            age: 12,
            address: "places",
            homeroomClassNumber: 0,
            studentId: "qwerty",
            favoriteLunch: "Corn Shnitzel"
        }]
    }

    addStudent = (studentObj) => {
        console.log(studentObj)
        this.setState(prevState => {
            const studentArr = [...prevState.students]
            studentArr.push(studentObj);
            return { students: studentArr };
        })
    }

    render() {
        return (
            <>
                <StudentList students={this.state.students} />
                <SchoolForm addStudent={this.addStudent} />
            </>
        );
    }
}

export default SchoolApp;