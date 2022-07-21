import React, { useEffect, useState } from "react";
import LeaveService from "../Service/LeaveService";
import style from './LeaveTypes.module.css';
import NewLeave from "../NewLeave/NewLeave";

const LeaveTypes = () => {
    const [details, setDetails] = useState([]);
    const [message, setMessage] = useState()


    useEffect(() => {
        LeaveService.getLeaveTypes().then((resp) => {
            setDetails(resp.data)
        })
    }, []);

    const getMessage = (info) => {
        if (info === 200) {
            setMessage("Success");
            console.log(info)
        } else {
            console.log(info);
            setMessage(info);
        }
    }
    return (
        <div className={style.main}>
            <table className="table table-striped container">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Policy</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Status</th>
                        <th scope="col">Apply</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        details.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.duration + " day(s)"}</td>
                                <td>{item.eligible.toString()}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

            <div className={style.notification}>
                <div>
                    <NewLeave onGettingMessage={getMessage} />
                </div>
                {message && (
                    <span className="alert alert-success">{message}</span>
                )}
            </div>





        </div>
    );
}

export default LeaveTypes;