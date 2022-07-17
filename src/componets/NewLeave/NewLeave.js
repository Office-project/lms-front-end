import { useEffect, useState } from "react";
import style from "./NewLeave.module.css";
import OptionService from "../Service/OptionService";
import ApplicationService from "../Service/ApplicationService";
import { authHeader } from "../Service/BaseService";
import api from "../ComponetApi";
import axios from "axios";

const NewLeave = (props) => {
    const [apply, setApply] = useState({});


    const [userOption, setUserOption] = useState([]);
    const [leaveOption, setLeaveOption] = useState([]);
    const [isClosed, setIsClosed] = useState(true);
    const [file, setFile] = useState();

    function minDate() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }

        today = yyyy + '-' + mm + '-' + dd;
        return today;
    }

    useEffect(() => {
        OptionService.getUserOptionDept().then((resp) => {
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
                    if (resp.status === 200) {
                        props.onGettingMessage(200)
                    } else {
                        props.onGettingMessage(500)
                    }
                }).catch((error) => {
                    console.log(error)

                    props.onGettingMessage(500)
                })
            }
        }).catch((error) => {
            console.log("occured in the first step " + error);

        })



    }


    return (<div>

        {!isClosed &&
            <form className={style.main} onSubmit={handleSubmit} >
                <div >

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
                                min={minDate()}
                                required
                                name="startDate"
                                onChange={handleChange} />
                        </div>
                    </div>


                    <div className={style.form__group}>
                        <div className={style.left}>
                            <label>Handover Note</label>
                        </div>

                        <div className={style.right}>
                            <input type="file" name="file" required onChange={fileHandler} accept=".doc, .docx, .pdf" />
                        </div>

                    </div>

                </div>

                <div className={style.form__group}>
                    <div className={style.space}>
                        <button onClick={() => { setIsClosed(!isClosed) }} className="btn btn-danger">Close </button>
                        <button type="submit" className="btn btn-success">Apply</button>
                    </div>
                </div>
            </form>

        }
        {isClosed &&
            <div >
                <button onClick={() => { setIsClosed(!isClosed) }} className="btn btn-success">Open Application </button>
            </div>

        }

    </div>
    );
}
export default NewLeave;