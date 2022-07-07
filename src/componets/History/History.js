import React, { useState, useEffect } from "react";
import LeaveService from "../Service/LeaveService";
import style from "./History.module.css";


const History = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        LeaveService.getLeaveHistory().then((resp) => {
            setHistory(resp.data)
        })
    }, [])

    function convertDate(arr) {
        const joined = arr.map((num) => num + '').join('-');
        const dateFormat = new Date(joined);
        const year = dateFormat.getFullYear();
        const month = dateFormat.toLocaleString('en-US', { month: 'long' });
        const day = dateFormat.toLocaleString('en-us', { day: '2-digit' })
        const date = day + " " + month + " " + year;
        return date;
    }

    return (
        <div className={style.main}>
            <table className="table table-striped container">
                <thead>
                    <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Start</th>
                        <th scope="col">End</th>
                        <th scope="col">Reason For Request</th>
                        <th scope="col">Reason For Decline</th>
                        <th scope="col">Reason For Cancellation</th>
                        <th scope="col">Relief Officer</th>
                        <th scope="col">Applied on</th>
                        <th scope="col">Download</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map((item, index) => (
                            <tr key={index}>
                                <td>{item.type}</td>
                                <td>{item.duration}</td>
                                <td>{convertDate(item.start)}</td>
                                <td>{convertDate(item.end)}</td>
                                <td>{item.reasonForRequest}</td>
                                <td>{item.reasonForDecline}</td>
                                <td>{item.reasonForCancellation}</td>
                                <td>{item.reliefOfficer}</td>
                                <td>{convertDate(item.appliedOn)}</td>
                                <td>{item.download}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

        </div>
    );
}

export default History;