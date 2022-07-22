import React from "react";
import fileDownload from "js-file-download";
import Accept from "./Accept";
import Decline from "./Decline"
import Cascade from "../Common/Cascade/Cascade";

import NotificationService from "../Service/NotificationService";

const NoticeTable = (props) => {

    function convertDate(arr) {
        const joined = arr.map((num) => num + '').join('-');
        const dateFormat = new Date(joined);
        const year = dateFormat.getFullYear();
        const month = dateFormat.toLocaleString('en-US', { month: 'long' });
        const day = dateFormat.toLocaleString('en-us', { day: '2-digit' })
        const date = day + " " + month + " " + year;
        return date;
    }

    const handleDownload = (doc) => {
        NotificationService.getDocument(doc).then((response) => {
            fileDownload(response.data, doc)
        })
    }

    const getMessage = (message) => {
        props.onGetMessage(message)
    }

    return (
        <div className="table-resonsive">
            <table className="table table-striped container">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Position</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">Resumtion Date</th>
                        <th scope="col">Download</th>
                        <th scope="col">Approve</th>
                        <th scope="col">Decline</th>
                        <th scope="col">Break Down</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.all.map((item, index) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.reason}</td>
                                <td>{item.position}</td>
                                <td>{convertDate(item.startDate)}</td>
                                <td>{convertDate(item.resumptionDate)}</td>
                                <td><button className="btn btn-warning" onClick={() => handleDownload(item.document)}>Download</button></td>
                                <td><Accept position={item.position} id={item.id} onSendMessage={getMessage} /></td>
                                <td><Decline position={item.position} id={item.id} onSendMessage={getMessage} /></td>
                                <td><Cascade
                                    name={item.name}
                                    relief={item.relief}
                                    reliefApproval={item.reliefApproval}
                                    supervisor={item.supervisor}
                                    supervisorApproval={item.supervisorApproval}
                                    hod={item.hod}
                                    hodApproval={item.hodApproval}
                                    admin={item.adminName}
                                    adminApproval={item.adminApproval}
                                    status={item.status}
                                /></td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>)
}

export default NoticeTable;