import React, { useState } from "react";
import style from "./Dept.module.css"
import AdminServices from "../../../Service/AdminServices";

const Dept = () => {

    const [dept, setDept] = useState("");
    const [message, setMessage] = useState();
    const [isClosed, setIsClosed] = useState(true);

    const handleName = (e) => {
        setDept(e.target.value);
        console.log(dept)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const payLoad = { departmentName: dept }
        AdminServices.createDepatment(payLoad).then((response) => {
            if (response.status === 201) {
                setMessage("success");
            } else {
                setMessage("Not Eligible")
            }
        }).catch((error) => {
            console.log(error);
            setMessage("unsuccessful")
        });

    }


    return (<div>
        <p>{message}</p>
        {!isClosed &&
            <form className={style.main} onSubmit={handleSubmit}>

                <div className={style.form__group}>
                    <div className={style.left}>
                        <label>Department Name</label>
                    </div>


                    <div className={style.right}>
                        <input name="DepartmetName" type="text" required onChange={handleName} />
                    </div>

                </div>


                <div className={style.form__group}>
                    <div className={style.btns}>
                        <button onClick={() => { setIsClosed(!isClosed) }}>Close </button>
                        <button type="submit">Create Department</button>
                    </div>
                </div>

            </form>
        }
        {isClosed &&
            <div className={style.btns}>
                <button onClick={() => { setIsClosed(!isClosed) }}>Create Department </button>
            </div>
        }
    </div>)
}

export default Dept;