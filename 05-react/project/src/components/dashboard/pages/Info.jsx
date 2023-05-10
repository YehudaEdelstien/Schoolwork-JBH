function Info({userData}) {
    return (
        <div>
            <h3>Info</h3>
            <div>Full name: {userData.name}</div>
            <div>Phone: {userData.phone}</div>
            <div>Company: {userData.company.name}</div>
            <div>Email: {userData.email}</div>
        </div>
    );
}

export default Info;