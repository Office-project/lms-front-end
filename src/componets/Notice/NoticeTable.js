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
                        {/* private String document;
                        private String reason;
                        private String position;
                        private LocalDate startDate;
                        private LocalDate resumptionDate;
                        private String name;
                        private String relief;
                        private Boolean reliefApproval;
                        private String supervisor;
                        private Boolean supervisorApproval;
                        private String hod;
                        private Boolean hodApproval;
                        private Boolean adminApproval;
                        private Boolean decision; */}
                        <th scope="col">Name</th>
                        <th scope="col">Reason</th>
                        <th scope="col">Position</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">Resumtion Date</th>
                        <th scope="col">Download</th>
                        <th scope="col">Approve</th>
                        <th scope="col">Decline</th>
                        <th scope="col">Details</th>

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
                                    supervisor={item.supervisor}
                                    hod={item.hod}
                                    decision={item.decision}
                                    reliefApproval={item.reliefApproval}
                                    supervisorApproval={item.supervisorApproval}
                                    hodApproval={item.hodApproval}
                                    adminApproval={item.adminApproval}
                                /></td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>)
}

export default NoticeTable;