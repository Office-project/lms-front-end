import React, { useEffect, useState } from "react";
import Dept from "../Dept/Dept";
import style from "./AllDept.module.css"
import AdminServices from "../../../Service/AdminServices";

const AllDept = () => {
    const [dept, setDept] = useState([]);

    useEffect(() => {
        AdminServices.getAllDepartment().then((response) => {
            setDept(response.data)
        })
    }, [])


    return (<div className={style.main}>
        <table className="table table-striped container">
            <thead>
                <th>id</th>
                <th>Department Name</th>
            </thead>
            <tbody>
                {
                    dept.map((item, index) => (
                        <tr key={index}>
                            <td>{item.deptId}</td>
                            <td>{item.departmentName}</td>
                        </tr>
                    ))
                }

            </tbody>

        </table>

        <div>
            <Dept />
        </div>

    </div>)
}
export default AllDept;