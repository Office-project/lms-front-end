import React, { useEffect, useState } from "react";
import LeaveService from "../Service/LeaveService";
import style from './LeaveTypeTable.module.css';
import LeaveApplication from "./LeaveApplication";
import { Navigate, useNavigate } from "react-router-dom";

const LeaveTypeTable = () => {
    const [details, setDetails] = useState([]);
    const [message, setMessage] = useState();
    const navigate = useNavigate();

    const getStatus = (bool) => {
        if (bool) {
            return "Eligible"
        } else return "Not Eligible"
    }


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
                                <td>{item.name}</td>
                                <td>{item.duration + " day(s)"}</td>
                                <td>{getStatus(item.eligible)}</td>
                                <td><LeaveApplication type={item.name} typeId={item.id} eligible={item.eligible} /></td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

            {/* <div className={style.notification}>
                <div>
                    <NewLeave onGettingMessage={getMessage} />
                </div>
                {message && (
                    <span className="alert alert-success">{message}</span>
                )}
            </div> */}
        </div>
    );
}

export default LeaveTypeTable;