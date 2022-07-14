import style from "./Decline.module.css"
import React, { useState } from "react"
import NotificationService from "../Service/NotificationService"
const Decline = (props) => {
    const [message, setMessage] = useState("");
    const id = props.id;
    const position = props.position;

    const [show, setShow] = useState(false);

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { message }

        NotificationService.decline(position, id, payload).then((response) => {

            if (response.status === 200) {
                props.onSendMessage("Leave is Cancelled")
            } else {
                props.onSendMessage("Problem with cancelling leave")
            }
        }).catch((error) => {
            props.onSendMessage("Problem with cancelling leave")

        })

        setShow(!show)
    }

    return (<div>
        {
            show &&
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div>
                    <legend>Reason</legend>
                </div>
                <div>
                    <input
                        required
                        type="text"
                        placeholder="Reason for Cancellation"
                        onChange={(e) => { handleMessage(e) }}
                    />
                </div>
                <div>
                    <button className="btn btn-success" onClick={() => { setShow(!show) }}>return</button>
                    <button className="btn btn-danger" type="submit">cancel</button>
                </div>


            </form>
        }
        {
            !show &&
            <button className="btn btn-danger" onClick={() => { setShow(!show) }}>Decline</button>
        }



    </div>)
}

export default Decline;