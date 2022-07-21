import React, { useState, useEffect } from "react";
import LeaveService from "../Service/LeaveService";
import style from "./History.module.css";
import Cascade from "../Common/Cascade/Cascade";
import NotificationService from "../Service/NotificationService";
import fileDownload from "js-file-download";


const History = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        LeaveService.getLeaveHistory().then((resp) => {
            setHistory(resp.data)
        })
    }, [])
    const handleDownload = (doc) => {
        NotificationService.getDocument(doc).then((response) => {
            fileDownload(response.data, doc)
        })
    }


    return (
        <div className={style.main}>
            <table className="table table-striped container">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Start</th>
                        <th scope="col">End</th>
                        <th scope="col">Reason For Request</th>
                        <th scope="col">Reason For Decline</th>
                        <th scope="col">Relief Officer</th>
                        <th scope="col">Applied on</th>
                        <th scope="col">Download</th>
                        <th scope="col">Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td >{item.type}</td>
                                <td>{item.duration}</td>
                                <td>{item.start}</td>
                                <td>{item.end}</td>
                                <td>{item.reasonForRequest}</td>
                                <td>{item.reasonForDecline}</td>
                                <td>{item.reliefOfficer}</td>
                                <td>{item.appliedOn}</td>
                                <td><button className="btn btn-warning" onClick={() => handleDownload(item.download)}>Download</button></td>
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

        </div>
    );
}

export default History;