import React, { useState } from "react";
import style from "./Dept.css"
import AdminServices from "../../../Service/AdminServices";

const Dept = () => {

    const [dept, setDept] = useState("");
    const [message, setMessage] = useState();

    const handleName = (e) => {
        setDept(e.target.value);
        console.log(dept)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const payLoad = { DepartmentName: dept }
        AdminServices.createDepatment(payLoad).then((response) => {
            if (response.status === 201) {
                setMessage("success");
            }
        }).catch((error) => {
            console.log(error);
            setMessage("unsuccessful")
        });

    }


    return (<div>
        <p>{message}</p>

        <form onSubmit={handleSubmit}>

            <div>
                <label>Department Name</label>
                <input name="DepartmetName" type="text" required onChange={handleName} />
            </div>

            <button type="submit">Create Department</button>

        </form>
    </div>)
}

export default Dept;