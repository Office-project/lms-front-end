import React from "react";
import NotificationService from "../Service/NotificationService";

const NoticeTable = (props) => {

    function convertDate(arr) {
        console.log(arr)
        console.log(typeof (arr))
        const joined = arr.map((num) => num + '').join('-');
        const dateFormat = new Date(joined);
        const year = dateFormat.getFullYear();
        const month = dateFormat.toLocaleString('en-US', { month: 'long' });
        const day = dateFormat.toLocaleString('en-us', { day: '2-digit' })
        const date = day + " " + month + " " + year;
        return date;
    }

    const handleDownload = (doc) => {
        console.log(doc)
        NotificationService.getDocument(doc);
    }

    return (<table className="table table-striped container">
        <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Reason</th>
                <th scope="col">Position</th>
                <th scope="col">Start Date</th>
                <th scope="col">Resumtion Date</th>
                <th scope="col">Download</th>
                <th scope="col">Approve</th>
                <th scope="col">Decline</th>
            </tr>
        </thead>
        <tbody>
            {
                props.all.map((item, index) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.reason}</td>
                        <td>{item.positon}</td>
                        <td>{convertDate(item.startDate)}</td>
                        <td>{convertDate(item.resumptionDate)}</td>
                        <td><button onClick={handleDownload(item.download)}>Download</button></td>
                        <td><button className="btn btn-success">Approve</button></td>
                        <td><button className="btn btn-danger">Decline</button></td>
                        <td>{item.role}</td>
                    </tr>
                ))
            }
        </tbody>

    </table>)
}

export default NoticeTable;