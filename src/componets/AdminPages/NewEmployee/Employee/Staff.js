import style from "./Employee.module.css"
import React, { useState } from "react";

const Staff = () => {
    const [isClosed, setIsClosed] = useState(true);
    const [message, setMessage] = useState("");
    return (
        <div>
            <p>{message}</p>
            {/* onSubmit={handleSubmit} */}

            {!isClosed &&
                <form className={style.main} >
                    <div >


                        <div className={style.form__group}>
                            <div className={style.left}>
                                <label>First Name</label>
                            </div>

                            <div className={style.right}>
                                <input type='text'
                                    required
                                    name="firstName"
                                // onChange={handleChange}
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
                                // onChange={handleChange}
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
                                // onChange={handleChange}
                                />
                            </div>

                        </div>

                        <div className={style.form__group}>

                            <div className={style.left}>
                                <label>Gender</label>
                            </div>

                            <div className={style.right}>
                                <select name="gender"
                                    // onChange={handleChange}
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
                                // onChange={handleChange}
                                >
                                    <option type='text' value="ADMIN">Admin</option>
                                    <option type='text' value="STAFF">Staff</option>

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
                                // onChange={handleChange} 
                                />
                            </div>
                        </div>

                        {/* <div className={style.form__group}>

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
                        </div> */}

                        {/* <div className={style.form__group}>

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
                        </div> */}


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
export default Staff;