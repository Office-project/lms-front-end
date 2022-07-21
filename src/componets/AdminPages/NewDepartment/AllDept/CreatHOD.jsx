import React, { useState, useEffect } from "react";
import AdminServices from "../../../Service/AdminServices";
import OptionService from "../../../Service/OptionService";
import style from "./UpdateHod.module.css"

const CreateHOD = (props) => {
    const [departmentId, setDepartmentId] = useState();
    const [employeeId, setEmployeeId] = useState();
    const [department, setDepartments] = useState([]);
    const [employees, setEmployees] = useState([])
    const [isClosed, setIsClosed] = useState(true)

    useEffect(() => {
        OptionService.getDepartmentOption().then((response) => {

            const newdata = {
                "id": 0,
                "name": "-select a new Dept-"
            }
            const data = response.data;
            data.unshift(newdata);
            setDepartments(data)
        })
    }, [])

    useEffect(() => {
        OptionService.getUserOptionDeptII(departmentId).then((response) => {

            const newdata = {
                "id": 0,
                "name": "-select a user-"
            }
            const data = response.data;
            data.unshift(newdata);
            setEmployees(data)
        })
    }, [departmentId])

    const handleDepartment = (e) => {
        setDepartmentId(e.target.value);
    }

    const handleEmployee = (e) => {
        setEmployeeId(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { departmentId, employeeId }

        console.log(payload)
        AdminServices.createHOD(payload).then((response) => {


            if (response.status === 200) {
                props.onSendMsg("successful");
            } else {
                props.onSendMsg("unsuccessful");
            }
        }).catch((error) => {
            props.onSendMsg("Already exists");
        })
    }

    return (<div>
        {!isClosed &&
            <div>
                <form onSubmit={handleSubmit}>
                    <div className={style.form__group}>
                        <div className={style.left}>
                            <label>Department</label>
                        </div>

                        <div className={style.right}>
                            <select name="departmentId"
                                onChange={handleDepartment}
                                required
                                type='number'>
                                {department.map((item) => (
                                    <option required type='number' value={parseInt(item.id)}>{item.name} </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className={style.form__group}>
                        <div className={style.left}>
                            <label>Employee</label>
                        </div>

                        <div className={style.right}>
                            <select name="employeeId"
                                onChange={handleEmployee}
                                required
                                type='number'>
                                {employees.map((item) => (
                                    <option required type='number' value={parseInt(item.id)}>{item.name} </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className={style.form__group}>
                        <div className={style.space}>
                            <button onClick={() => { setIsClosed(!isClosed) }} className="btn btn-danger">Close </button>
                            <button onSubmit={handleSubmit} className="btn btn-success">Assign HOD</button>
                        </div>
                    </div>

                </form>

            </div>

        }
        {isClosed &&
            <div >
                <button onClick={() => { setIsClosed(!isClosed) }} className="btn btn-success">Assign HOD</button>
            </div>
        }
    </div>)



}
export default CreateHOD;