import React, { useEffect, useState } from "react";
import OptionService from "../../../Service/OptionService";
import AdminServices from "../../../Service/AdminServices";
import style from "./UpdateHod.module.css"

const UpdateHod = (props) => {
    const [empId, setEmpId] = useState();
    const deptId = props.deptId;
    const [userOption, setUserOption] = useState([])
    const [isClosed, setIsClosed] = useState(true);

    useEffect(() => {
        OptionService.getUserOptionDeptII(deptId).then((resp) => {
            const newdata = {
                "id": 0,
                "name": "-select a user-"
            }
            const data = resp.data;
            data.unshift(newdata);
            setUserOption(data)
        })
    }, [])

    const handleChange = (e) => {
        setEmpId(parseInt(e.target.value));
    }

    const handleClick = () => {
        const payLoad = {
            empId: parseInt(empId),
            hodId: props.id
        }

        AdminServices.updateHod(payLoad).then((response) => {
            if (response.status === 200) {
                setIsClosed(true)
                props.onSendMsg("success");
            }
        })

    }


    return (<div>
        {!isClosed &&
            <div>

                <div className={style.form__group}>
                    <div className={style.left}>
                        <label>New HOD</label>
                    </div>

                    <div className={style.right}>
                        <select name="hodId"
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
                    <div className={style.space}>
                        <button onClick={() => { setIsClosed(!isClosed) }} className="btn btn-danger">Close </button>
                        <button onClick={handleClick} className="btn btn-success">Apply</button>
                    </div>
                </div>

            </div>

        }
        {isClosed &&
            <div >
                <button onClick={() => { setIsClosed(!isClosed) }} className="btn btn-success">Open Application </button>
            </div>
        }




    </div>)
}
export default UpdateHod;