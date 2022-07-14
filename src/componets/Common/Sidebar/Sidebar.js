import React, { useState } from 'react'
import style from './Sidebar.module.css';
import { Link, useNavigate } from "react-router-dom"
import Images from '../../ComponentImages.js';
import logo from '../../../images/logo.jfif'
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentUser } from "../../Info/actions/user"
import useLogout from '../../../Utils/useLogout';


function Sidebar() {
    const [show, setShow] = useState(false);
    const [adShow, setAdshow] = useState(false);

    const currentUser = useSelector(state => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();



    const logout = () => {
        dispatch(clearCurrentUser());
        navigate("/login")

        // useLogout();
    }

    const display = () => {
        setShow(!show);
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
                                <img src={Images.Inbox} alt="icon" className={style.Sidebar_icon} />
                                <span>ADMIN</span>
                                <span className={style.btn} onClick={() => setAdshow(!adShow)}>{adShow ? <img src={Images.warrowup} alt="a white arrow" /> : <img src={Images.warrowdown} alt="a white arrow" />}</span>
                            </Link>
                        </li>
                    }
                    {adShow &&
                        <div className={style.child}>
                            <Link to="employee-setup" className={style.linkchild}><li>Employees</li></Link>
                            <Link to="dept-mgmt" className={style.linkchild}><li>Departments</li></Link>
                            <Link to="location-mgmt" className={style.linkchild}><li>Locations</li></Link>
                            <Link to="leave_mgmt" className={style.linkchild}><li>Leaves</li></Link>
                        </div>
                    }

                    <li className={style.dashboard}>
                        <Link to="/dashboard" className={style.linkimg}>
                            <img src={Images.sided} alt="icon" className={style.Sidebar_icon} />
                            Dashboard
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
                            <Link to="leave_types" className={style.linkchild}><li>My Leaves</li></Link>
                            <Link to="history" className={style.linkchild}><li>History</li></Link>
                            <Link to="notice" className={style.linkchild}><li>Notice</li></Link>
                        </div>
                    }

                    {!currentUser && (
                        <li className={style.dashboard}>
                            <Link to="" className={style.linkimg}>
                                <img src={Images.Iconr} alt="" className={style.Sidebar_icon} />
                                Login
                            </Link>
                        </li>
                    )}
                    {currentUser && (
                        <li className={style.dashboard}>
                            <Link to="" className={style.linkimg} onClick={() => logout()}>
                                <img src={Images.Iconr} alt="" className={style.Sidebar_icon} />
                                Logout
                            </Link>
                        </li>
                    )}


                </ul>
            </div>

        </aside>
    )
}

export default Sidebar


