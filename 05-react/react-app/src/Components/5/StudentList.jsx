import React, { Component } from 'react';

function StudentList(props) {
    let { students } = props;
    console.log(students[0].firstName)
    students = students.sort((a, b) => a.firstName.localeCompare(b.firstName));
    
    const tableColumnNames = ["firstName", "lastName", "age", "address", "homeroomClassNumber", "studentId", "favoriteLunch"]

    return (
        <>
            <h1>Students</h1>
            <table style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        {tableColumnNames.map(rowName => <th style={{ border: "1px solid black" }} key={rowName}>{rowName}</th>)}
                    </tr>
                </thead>

                <tbody>
                {students.map((student, index) => {
                    const { firstName, lastName, age, address, homeroomClassNumber, studentId, favoriteLunch } = student
                    const studentDataArr = [firstName, lastName, age, address, homeroomClassNumber, studentId, favoriteLunch]
                    return (
                        <tr>
                            {studentDataArr.map(data => <td style={{ border: "1px solid black" }}>{data}</td>)}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    );
}

export default StudentList;