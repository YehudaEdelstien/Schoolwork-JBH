import React, { Component } from 'react';

class StudentList extends Component {

    state = { students: [] }

    componentDidMount() {
        this.getStudentsFromServer()
    }

    getStudentsFromServer = async () => {
        const studentsArr = await fetch("https://629e0de33dda090f3c126d46.mockapi.io/students").then(res => res.json())
        studentsArr.sort((a, b) => a.name.localeCompare(b.name));
        this.setState({
            students: studentsArr,
        })
    }

    deleteStudentData = async ({ target }) => {
        try {
            const deleteRequest = await fetch("https://629e0de33dda090f3c126d46.mockapi.io/students/" + target.value, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
            if (!deleteRequest.ok){
                throw new Error("Couldn't erase student!")
            }
            this.getStudentsFromServer();
        } catch (e){
            console.error(e);
        }
    }

    render() {
        let { students } = this.state;

        return (
            <>
                <h1>Students</h1>
                <StudentTable students={students} deleteStudentData={this.deleteStudentData} />

                <button onClick={this.props.toggleAddStudent}>Add student</button>
            </>
        );

    }
}

function StudentTable(props) {
    const { students, deleteStudentData } = props;

    const tableColumnNames = ["name", "address", "email", "delete"]

    return (
        <>
            <table>
                <thead>
                    <tr>
                        {tableColumnNames.map(rowName => <th key={rowName}>{rowName}</th>)}
                    </tr>
                </thead>

                <tbody>
                    {students.map((student, index) => {
                        const { name, address, email, id, } = student;
                        const studentDataArr = [name, address, email,]
                        return (
                            <tr key={id}>
                                {studentDataArr.map((data, index) => <td key={id + " " + index}>{data}</td>)}
                                <td>
                                    <button onClick={deleteStudentData} value={id}>X</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default StudentList;