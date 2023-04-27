import React, { Component } from 'react';

import StudentList from './StudentList';
import SchoolForm from './SchoolForm';

class SchoolApp extends Component {
    state = {
        addingStudent: false
    }

    toggleAddStudent = () => {
        this.setState({addingStudent: !this.state.addingStudent})
    }

    render() {
        return (
            <>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yegor256/tacit@gh-pages/tacit-css-1.5.5.min.css" />

                {!this.state.addingStudent && <StudentList students={this.state.students} toggleAddStudent={this.toggleAddStudent}/>}
                {this.state.addingStudent && <SchoolForm addStudent={this.addStudent} toggleAddStudent={this.toggleAddStudent}/>}
            </>
        );
    }
}

export default SchoolApp;