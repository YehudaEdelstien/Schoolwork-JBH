function StudentList(props) {
    let { students } = props;
    students = students.sort((a, b) => a.firstName.localeCompare(b.firstName));

    const tableColumnNames = ["firstName", "lastName", "email",]

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
                    {students.map((student) => {
                        const { firstName, lastName, email, } = student
                        const studentDataArr = [firstName, lastName, email,]
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