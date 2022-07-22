import React, { useState } from "react";
import style from "./Cascade.module.css"
import modal from "./Modal.module.css"

const Cascade = (props) => {
    const [isClosed, setIsClosed] = useState(true);

    return (<div className={style.container}>
        {!isClosed &&
            <div className={modal.modal}>
                <div onClick={() => { setIsClosed(!isClosed) }} className={modal.overlay}></div>
                <div className={modal.modal__content}>
                    <div>
                        <div>
                            <p className={style.header}>{props.name}</p>
                            <p className={style.sub}>Approval Table</p>
                        </div>

                        <table className="table table-striped container">
                            <thead>
                                <tr>
                                    <th scope="col">Delegate</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Accept/Approve</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Relief Officer</td>
                                    <td>{props.relief}</td>
                                    <td>{props.reliefApproval ? props.reliefApproval.toString() : "pending"}</td>
                                </tr>
                                <tr>
                                    <td>supervisor</td>
                                    <td>{props.supervisor}</td>
                                    <td>{props.supervisorApproval ? props.supervisorApproval.toString() : "pending"}</td>
                                </tr>
                                <tr>
                                    <td>HOD</td>
                                    <td>{props.hod}</td>
                                    <td>{props.hodApproval ? props.hodApproval.toString() : "pending"}</td>
                                </tr>
                                <tr>
                                    <td>Admin</td>
                                    <td>{props.admin}</td>
                                    <td>{props.adminApproval ? props.adminApproval.toString(): "pending"}</td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td colSpan={2}>{props.status}</td>
                                </tr>


                            </tbody>


                        </table>





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