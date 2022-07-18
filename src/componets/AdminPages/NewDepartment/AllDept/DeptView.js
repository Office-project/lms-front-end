import React, { useState } from "react";
import style from "./DeptView.module.css"
import AllDept from "./AllDept";
import Hod from "./Hod";

const DeptView = () => {
    const [message, setMessage] = useState();

    return (<div className={style.main}>
        {message && <p>{message}</p>}
        <div className={style.flex}>
            <AllDept />
            <Hod />
        </div>
    </div>)
}
export default DeptView;