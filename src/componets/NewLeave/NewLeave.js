import { useEffect, useState } from "react";
import style from "./NewLeave.module.css";
import OptionService from "../Service/OptionService";
import ApplicationService from "../Service/ApplicationService";
import { authHeader } from "../Service/BaseService";
import api from "../ComponetApi";
import axios from "axios";

const NewLeave = () => {
    const [apply, setApply] = useState({});

    const [userOption, setUserOption] = useState([]);
    const [leaveOption, setLeaveOption] = useState([]);
    const [isClosed, setIsClosed] = useState(true);
    const [file, setFile] = useState();

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
        OptionService.getLeaveTypeOption().then((resp) => {
            const newdata = {
                "id": 0,
                "name": "nil"
            }
            const data = resp.data;
            data.unshift(newdata);
            setLeaveOption(data)
        })
    }, []);


    const fileHandler = (e) => {
        setFile(e.target.files[0]);

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setApply((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        });

        console.log(apply)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const num = apply.reliefOfficerId;
        const num2 = apply.leaveTypeId;
        apply.reliefOfficerId = parseInt(num);
        apply.leaveTypeId = parseInt(num2);


        ApplicationService.applyfirst(apply).then((resp) => {

            console.log(resp)

            if (resp.status === 201) {

                const formData = new FormData();
                formData.append("file", file)
                const config = {
                    headers: {
                        "content-type": "multipart/form-data",
                        authorization: authHeader().authorization,
                    }
                }

                const url = api.leave + `/${resp.data}`
                axios.post(url, formData, config).then((resp) => {
                    console.log(resp);
                }).catch((error) => {
                    console.log(error)
                })
            }
        }).catch((error) => {
            console.log("occured in the first step " + error);
        })



    }


    return (<div>

        {!isClosed &&
            <form className={style.main} onSubmit={handleSubmit} noValidate>
                <div >

                    <div className={style.form__group}>
                        <div className={style.left}>
                            <label>Reason</label>
                        </div>

                        <div className={style.right}>
                            <input type='text'
                                name="reason"
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    <div className={style.form__group}>

                        <div className={style.left}>
                            <label>Leave Type</label>
                        </div>

                        <div className={style.right}>
                            <select name="leaveTypeId"
                                onChange={handleChange}
                                required
                                type='number'>
                                {leaveOption.map((item) => (
                                    <option required type='number' value={parseInt(item.id)}>{item.name} </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className={style.form__group}>
                        <div className={style.left}>
                            <label>Relief Officer</label>
                        </div>

                        <div className={style.right}>
                            <select name="reliefOfficerId"
                                onChange={handleChange}
                                required
                                type='number'>
                                {userOption.map((item) => (
                                    <option required type='number' value={parseInt(item.id)}>{item.name} </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className={style.form__group}>
                        <div className={style.left}>
                            <label>Start Date</label>
                        </div>

                        <div className={style.right}>
                            <input type='date'
                                required
                                name="startDate"
                                onChange={handleChange} />
                        </div>
                    </div>


                    <div className={style.form__group}>
                        <div className={style.left}>
                            <label>Resumption Date</label>
                        </div>

                        <div className={style.right}>
                            <input type='date' name="endDate" required onChange={handleChange} />
                        </div>
                    </div>


                    <div className={style.form__group}>
                        <div className={style.left}>
                            <label>File</label>
                        </div>

                        <div className={style.right}>
                            <input type="file" name="file" required onChange={fileHandler} />
                        </div>

                    </div>

                </div>

                <div className={style.form__group}>
                    <div className={style.btns}>
                        <button onClick={()=>{setIsClosed(!isClosed)}}>Close </button>
                        <button type="submit">Apply</button>
                    </div>
                </div>
            </form>

        }
        { isClosed &&
        <div className={style.btns}>
        <button onClick={()=>{setIsClosed(!isClosed)}}>Open Application </button>
        </div>

        }

    </div>
    );
}
export default NewLeave;