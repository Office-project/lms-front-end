import react, { useState } from "react";
import style from "./Password.module.css"
import PasswordService from "../Service/PasswordService";

const Password = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isDisabled, setIsDisableld] = useState(true);
    const [message, setMessage] = useState();
    const [isClosed, setIsClosed] = useState(true);

    const handleOldPassword = (e) => {
        setOldPassword(e.target.value);
    }
    const handleNewPassword = (e) => {
        setNewPassword(e.target.value);
        if (e.target.value == confirmPassword) {
            setIsDisableld(false)
        } else {
            setIsDisableld(true)
        }

        if (e.target.value == "") setIsDisableld(true);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);

        if (e.target.value == newPassword) {
            setIsDisableld(false)
        } else {
            setIsDisableld(true)
        }
        if (e.target.value == "") setIsDisableld(true);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            oldPassword, newPassword, confirmPassword
        }

        

        PasswordService.changePassword(payload).then((response) => {
            console.log(response)
            
        })

    }

    return (<div className={style.main}>
        <p>{message}</p>
        {!isClosed &&
            <form onSubmit={handleSubmit}>
                <div>
                    <legend>Old Password</legend>
                    <input
                        required
                        name="oldPassword"
                        onChange={handleOldPassword}
                    />
                </div>

                <div>
                    <legend>New Password</legend>
                    <input
                        required
                        name="newPassword"
                        onChange={handleNewPassword}
                    />
                </div>
                <div>
                    <legend>Confirm Password</legend>
                    <input
                        required
                        name="confirmPassword"
                        onChange={handleConfirmPassword}
                    />
                </div>


                <div className={style.form__group}>
                    <div className={style.btns}>
                        <button onClick={() => { setIsClosed(!isClosed) }}>Close </button>
                        <button type="submit" disabled={isDisabled}>Change Password</button>
                    </div>
                </div>

            </form>
        }
        {isClosed &&
            <div className={style.btns}>
                <button onClick={() => { setIsClosed(!isClosed) }}>Change Password </button>
            </div>

        }

    </div>)
}

export default Password