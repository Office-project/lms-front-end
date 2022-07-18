import React from "react";

const EmpTable = (props) => {

    function convertDate(arr) {
        const joined = arr.map((num) => num + '').join('-');
        const dateFormat = new Date(joined);
        const year = dateFormat.getFullYear();
        const month = dateFormat.toLocaleString('en-US', { month: 'long' });
        const day = dateFormat.toLocaleString('en-us', { day: '2-digit' })
        const date = day + " " + month + " " + year;
        return date;
    }

    return (<table className="table table-striped container">
        <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Department</th>
                <th scope="col">Location</th>
                <th scope="col">Join Date</th>
                <th scope="col">Role</th>
            </tr>
        </thead>
        <tbody>
            {
                props.all.map((item, index) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                        <td>{item.department}</td>
                        <td>{item.location}</td>
                        <td>{convertDate(item.joinDate)}</td>
                        <td>{item.role}</td>
                    </tr>
                ))
            }
        </tbody>

    </table>)
}

export default EmpTable;