import React, { useEffect, useState } from "react";
import Location from "../Location/Location";
import AdminServices from "../../../Service/AdminServices";
import style from "./AllLocation.module.css"

const AllLocation = () => {
    const [locationList, setLocationList] = useState([]);
    const [message, setMessage] = useState();

    useEffect(() => {
        AdminServices.getAllLocation().then((response) => {
            setLocationList(response.data)
        })
    }, [message])

    const getMsg = (msg) => {
        setMessage(msg);
    }


    return (<div className={style.main}>

        <div>

            <table className="table table-striped container">
                <thead>
                    <th>#</th>
                    <th>State</th>
                </thead>

                <tbody>
                    {
                        locationList.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>

        <div>
            <Location onSendMsg={getMsg} />
        </div>

    </div>)
}

export default AllLocation;