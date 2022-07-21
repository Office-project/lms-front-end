import React, { useState } from "react";
import style from "./Cascade.module.css"
import modal from "./Modal.module.css"

const Cascade = (props) => {
    const [isClosed, setIsClosed] = useState(true);

    const color = (colo) => {
        if (colo === null) {
            return style.orange;
        } else if (color === true) {
            return style.green;
        } else return style.red;
    }

    return (<div className={style.container}>
        {!isClosed &&
            <div className={modal.modal}>
                <div onClick={() => { setIsClosed(!isClosed) }} className={modal.overlay}></div>
                <div className={modal.modal__content}>
                    <div className={style.flex}>

                        
                        <div className={style.intro}>{props.name}</div>
                        <div className={style.group}>
                        <div className={color(props.reliefApproval)}>{props.relief}</div>
                        <div></div>
                        </div>
                        
                        <div className={color(props.supervisorApproval)}>{props.supervisor}</div>
                        <div className={() => { color(props.hodApproval) }}>{props.hod}</div>
                        <div className={() => { color(props.adminApproval) }}>ADMIN</div>
                        <div className={() => { color(props.decision) }}>Officially Approved</div>
                        
                            <button className="btn btn-danger" onClick={() => { setIsClosed(!isClosed) }}>Close</button>
                        
                    </div>
                </div>

            </div>
        }
        {isClosed &&
            <div>
                <button onClick={() => { setIsClosed(!isClosed) }} className="btn btn-success">Details</button>
            </div>
        }
    </div>)
}
export default Cascade;