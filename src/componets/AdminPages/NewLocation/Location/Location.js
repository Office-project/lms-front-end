import React, { useState } from "react";
import style from "./Location.module.css"
import AdminServices from "../../../Service/AdminServices";

const Location = () => {
    const [location, setLocation] = useState("");
    const [info, setInfo] = useState();

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


    return (<div>
        <p>{info}</p>
        <form onSubmit={handleSubmit}>
            <label>State</label>
            <input name="state" type="text" required onChange={handleChange} />

            <div>
                <button onSubmit={handleSubmit}>submit</button>
            </div>
        </form>

    </div>);
}

export default Location;