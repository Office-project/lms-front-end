import React, { useEffect, useState } from "react";
import Location from "../Location/Location";
import AdminServices from "../../../Service/AdminServices";
import style from "./AllLocation.module.css"

const AllLocation = () => {
    const [locationList, setLocationList] = useState([]);

    useEffect(() => {
        AdminServices.getAllLocation().then((response) => {
            setLocationList(response.data)
            console.log(response.data)
        })
    }, [])


    return (<div className={style.main}>
        <div>
            <Location />
        </div>

        <div>

            <table>
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

        <div>End</div>

    </div>)
}

export default AllLocation;