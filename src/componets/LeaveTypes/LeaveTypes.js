import React, { useEffect, useState } from "react";
import LeaveService from "../Service/LeaveService";
import style from './LeaveTypes.module.css'

const LeaveTypes = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        LeaveService.getLeaveTypes().then((resp) => {
            setDetails(resp.data)
        
        })
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Policy</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Over 1 year</th>
                        <th scope="col">Apply</th>
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
                                <td><button>Apply</button></td>

                            </tr>
                        ))
                    }
                </tbody>

            </table>

        </div>
    );
}

export default LeaveTypes;