import React, { useState } from "react";
import style from "./Location.module.css"
import AdminServices from "../../../Service/AdminServices";

const Location = () => {
    const [location, setLocation] = useState("");
    const [info, setInfo] = useState();
    const [isClosed, setIsClosed] = useState(true);

    const handleChange = (e) => {
        setLocation(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { state: location };

        AdminServices.createLocation(payload).then((response) => {
            if (response.status === 201) {
                setInfo("created");
            }
        }).catch((error) => {
            console.log(error);
            setInfo("Not successful")
        })

    }


    return (<div className={style.main}>
        <p>{info}</p>
        {!isClosed &&
            <form onSubmit={handleSubmit}>

                <div className={style.form__group}>
                    <div className={style.left}>
                        <label>State</label>
                    </div>
                    <div className={style.right}>
                        <input name="state" type="text" required onChange={handleChange} />
                    </div>

                </div>

                <div className={style.form__group}>
                    <div className={style.btns}>
                        <button onClick={() => { setIsClosed(!isClosed) }}>Close </button>
                        <button type="submit">Create Location</button>
                    </div>
                </div>

            </form>
        }
        {isClosed &&
            <div className={style.btns}>
                <button onClick={() => { setIsClosed(!isClosed) }}>Create Location</button>
            </div>

        }

    </div>);
}

export default Location;