import React, { useEffect, useState } from "react";
import LeaveService from "../Service/LeaveService";
import style from './LeaveTypes.module.css';
import NewLeave from "../NewLeave/NewLeave";

const LeaveTypes = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        LeaveService.getLeaveTypes().then((resp) => {
            setDetails(resp.data)
        })
    }, []);

    return (
        <div className={style.main}>
            <table className="table table-striped container">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Policy</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Over 1 year</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        details.map((item, index) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.duration + " day(s)"}</td>
                                <td>{item.eligible.toString()}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

            <div>
                <NewLeave />
            </div>



        </div>
    );
}

export default LeaveTypes;