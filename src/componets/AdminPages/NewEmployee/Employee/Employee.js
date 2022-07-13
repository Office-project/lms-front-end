import React, { useState, useEffect } from "react";
import style from "./Employee.module.css"
import OptionService from "../../../Service/OptionService";
import AdminServices from "../../../Service/AdminServices";

const Employee = () => {
    const [apply, setApply] = useState({ gender: "MALE", role: "STAFF" });
    const [dept, setDept] = useState([]);
    const [locale, setLocale] = useState([]);
    const [message, setMessage] = useState("");
    const [isClosed, setIsClosed] = useState(true);
    const [userOption, setUserOption] = useState([]);

    useEffect(() => {
        OptionService.getUserOption().then((resp) => {
            const newdata = {
                "id": 0,
                "name": "nil"
            }
            const data = resp.data;
            data.unshift(newdata);
            setUserOption(data)
        })
    }, []);

    useEffect(() => {
        OptionService.getDepartmentOption().then((resp) => {
            const newdata = {
                "id": 0,
                "name": "--nil--"
            }
            const data = resp.data;
            data.unshift(newdata);
            setDept(data)
        })
    }, []);

    useEffect(() => {
        OptionService.getLocationOption().then((resp) => {
            const newdata = {
                "id": 0,
                "name": "--nil--"
            }
            const data = resp.data;
            data.unshift(newdata);
            setLocale(data)
        })
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setApply((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const num = apply.departmentID;
        const num2 = apply.locationId;
        const num3 = apply.personalSupervisorId;

        apply.departmentID = parseInt(num);
        apply.locationId = parseInt(num2);
        apply.personalSupervisorId = parseInt(num3);

        console.log(apply);


        AdminServices.createStaff(apply).then((response) => {
            if (response.status === 201) {
                setMessage("success")
            } else {
                setMessage("unsuccessful")
            }

        }).catch((error) => {
            console.log(error);
            setMessage("Not successful")
        })

    }

    return (
        <div>
            <p>{message}</p>
            {!isClosed &&
                <form className={style.main} onSubmit={handleSubmit}>
                    <div >


                        <div className={style.form__group}>
                            <div className={style.left}>
                                <label>First Name</label>
                            </div>

                            <div className={style.right}>
                                <input type='text'
                                    required
                                    name="firstName"
                                    onChange={handleChange}
                                />
                            </div>

                        </div>

                        <div className={style.form__group}>
                            <div className={style.left}>
                                <label>Last Name</label>
                            </div>

                            <div className={style.right}>
                                <input type='text'
                                    name="lastName"
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                        </div>

                        <div className={style.form__group}>
                            <div className={style.left}>
                                <label>Email</label>
                            </div>

                            <div className={style.right}>
                                <input type='text'
                                    name="email"
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                        </div>

                        <div className={style.form__group}>
                            <div className={style.left}>
                                <label>Gender</label>
                            </div>

                            <div className={style.right}>
                                <select name="gender"
                                    onChange={handleChange}
                                    required
                                >
                                    <option type='text' value="MALE">Male </option>
                                    <option type='text' value="FEMALE">Female </option>

                                </select>
                            </div>

                        </div>

                        <div className={style.form__group}>
                            <div className={style.left}>
                                <label>Role</label>
                            </div>

                            <div className={style.right}>
                                <select name="role"
                                    required
                                    onChange={handleChange}
                                >

                                    <option type='text' value="STAFF">Staff</option>
                                    <option type='text' value="ADMIN">Admin</option>

                                </select>
                            </div>

                        </div>

                        <div className={style.form__group}>
                            <div className={style.left}>
                                <label>Join Date</label>
                            </div>

                            <div className={style.right}>
                                <input type='date'
                                    required
                                    name="joinDate"
                                    onChange={handleChange} />
                            </div>
                        </div>

                        <div className={style.form__group}>

                            <div className={style.left}>
                                <label>Location</label>
                            </div>

                            <div className={style.right}>
                                <select name="locationId"
                                    onChange={handleChange}
                                    required
                                    type='number'>
                                    {locale.map((item) => (
                                        <option key={item.id} required type='number' value={parseInt(item.id)}>{item.name} </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className={style.form__group}>
                            <div className={style.left}>
                                <label>Relief Officer</label>
                            </div>

                            <div className={style.right}>
                                <select name="personalSupervisorId"
                                    onChange={handleChange}
                                    type='number'>
                                    {userOption.map((item) => (
                                        <option required type='number' value={parseInt(item.id)}>{item.name} </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className={style.form__group}>

                            <div className={style.left}>
                                <label>Department</label>
                            </div>

                            <div className={style.right}>
                                <select name="departmentID"
                                    onChange={handleChange}
                                    required
                                    type='number'>
                                    {dept.map((item) => (
                                        <option key={item.id} required type='number' value={parseInt(item.id)}>{item.name} </option>
                                    ))}
                                </select>
                            </div>
                        </div>


                    </div>

                    <div className={style.form__group}>
                        <div className={style.btns}>
                            <button onClick={() => { setIsClosed(!isClosed) }}>Close </button>
                            <button type="submit">Apply</button>
                        </div>
                    </div>
                </form>

            }
            {isClosed &&
                <div className={style.btns}>
                    <button onClick={() => { setIsClosed(!isClosed) }}>Create Employee </button>
                </div>

            }

        </div>

    );
}
export default Employee;