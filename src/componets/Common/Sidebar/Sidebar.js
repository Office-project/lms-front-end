import React, { useState } from 'react'
import style from './Sidebar.module.css';
import { Link, useNavigate } from "react-router-dom"
import Images from '../../ComponentImages.js';
import logo from '../../../images/logo.jfif'
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentUser } from "../../Info/actions/user"



function Sidebar() {
    const [show, setShow] = useState(false);
    const [adShow, setAdshow] = useState(false);

    const currentUser = useSelector(state => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();



    const logout = () => {
        dispatch(clearCurrentUser());
        navigate("/")
    }

    const display = () => {
        setShow(!show);
        setAdshow(false);
    }
    return (
        <aside className={style.sidebar} id="sidebar">
            <div>
                <img src={logo} alt='northwest logo' className={style.sidelogo} />
            </div>
            <div className={style.sideTag}>
                <ul>
                    {currentUser?.role === "ADMIN" &&
                        <li className={style.fund}>
                            <Link to="#" className={style.linkimg}>
                                <img src={Images.sided} alt="icon" className={style.Sidebar_icon} />
                                <span>ADMIN</span>
                                <span className={style.btn} onClick={() => { setAdshow(!adShow); setShow(false) }}>{adShow ? <img src={Images.warrowup} alt="a white arrow" /> : <img src={Images.warrowdown} alt="a white arrow" />}</span>
                            </Link>
                        </li>
                    }
                    {adShow &&
                        <div className={style.child}>
                            <Link to="/employee-setup" className={style.linkchild}><li>Employees</li></Link>
                            <Link to="/dept-mgmt" className={style.linkchild}><li>Departments</li></Link>
                            <Link to="/location-mgmt" className={style.linkchild}><li>Locations</li></Link>
                            <Link to="/all-leaves" className={style.linkchild}><li>Leaves</li></Link>
                        </div>
                    }

                    <li className={style.fund}>
                        <Link to="/dashboard" className={style.linkimg}>
                            <img src={Images.sided} alt="icon" className={style.Sidebar_icon} />
                            <span onClick={() => { setAdshow(false); setShow(false) }}>Dashboard</span>
                        </Link>
                    </li>

                    <li className={style.fund}>
                        <Link to="#" className={style.linkimg}>
                            <img src={Images.Inbox} alt="icon" className={style.Sidebar_icon} />
                            <span>Leaves</span>
                            <span className={style.btn} onClick={display}>{show ? <img src={Images.warrowup} alt="a white arrow" /> : <img src={Images.warrowdown} alt="a white arrow" />}</span>
                        </Link>
                    </li>
                    {show &&
                        <div className={style.child}>
                            <Link to="/history" className={style.linkchild}><li>History</li></Link>
                            <Link to="/notice" className={style.linkchild}><li>Notice</li></Link>
                        </div>
                    }

                    {!currentUser && (
                        <li className={style.fund}>
                            <Link to="/" className={style.linkimg}>
                                <img src={Images.Iconr} alt="" className={style.Sidebar_icon} />
                                Login
                            </Link>
                        </li>
                    )}
                    {currentUser && (
                        <li className={style.fund}>
                            <Link to="/" className={style.linkimg} onClick={() => logout()}>
                                <img src={Images.Iconr} alt="" className={style.Sidebar_icon} />
                                <span>Logout</span>
                            </Link>
                        </li>
                    )}


                </ul>
            </div>

        </aside>
    )
}

export default Sidebar

// private String name;
//     private String relief;
//     private Boolean reliefApproval;
//     private String supervisor;
//     private Boolean supervisorApproval;
//     private String hod;
//     private String adminName;
//     private String status;
//     private Boolean hodApproval;
//     private Boolean adminApproval;
//     private Boolean decision;


