import React, { useState, useEffect } from "react";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import AdminServices from "../../../Service/AdminServices";
import UpdateHod from "./UpdateHOD";
import CreateHOD from "./CreatHOD";

const Hod = () => {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState();


    useEffect(() => {
        AdminServices.getHODs().then((response) => {
            setData(response.data)
        })
    }, [message])

    const getMessage = (msg) => {
        setMessage(msg)
    }

    return (<div>
        <table className="table table-striped container">
            <thead>
                <th scope="col">Department</th>
                <th scope="col">HOD name</th>
                <th scope="col">Change HOD</th>
            </thead>
            <tbody>
                {
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.department}</td>
                            <td>{item.employee}</td>
                            <td>{<UpdateHod
                                id={item.id}
                                deptId={item.deptId}
                                onSendMsg={getMessage}
                            />}</td>
                        </tr>
                    ))
                }

            </tbody>

        </table>

        <CreateHOD onSendMsg={getMessage} />
    </div>)

}
export default Hod;