import React from "react";
import Dept from "../Dept/Dept";
import style from "./AllDept.css"

const AllDept = () => {


    return (<div className={style.main}>

        <div className={style.main}>
            <Dept />
        </div>

        <table>
            <thead>
                <th>id</th>
                <th>Department Name</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Human Resources</td>
                </tr>

            </tbody>

        </table>



    </div>)
}
export default AllDept;