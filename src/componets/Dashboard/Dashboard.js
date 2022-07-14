import React from "react";
import style from './Dashboard.module.css'
import { AiOutlineBank } from "react-icons/ai";
import { AiOutlineEnvironment } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { useSelector } from 'react-redux';
import Password from "../Password/Password";



const Dashboard = () => {

    const currentUser = useSelector((state) => state.user);
    const joined = currentUser.joinDate.map((num) => num + '').join('-');
    const dateFormat = new Date(joined);

    const year = dateFormat.getFullYear();
    const month = dateFormat.toLocaleString('en-US', { month: 'long' });
    const day = dateFormat.toLocaleString('en-us', { day: '2-digit' })
    const date = day + " " + month + " " + year;

    return (<div className={style.dashboard}>
        <div className={style.profile}>
            <div className={style.circle}>
                <p>{currentUser.initail}</p>
            </div>
            <p>{currentUser.firstName + " " + currentUser.lastName}</p>

        </div>


        <div className={style.major}>
            <div className={style.primary}>

                <div className={style.details}>
                    <div className={style.icon}>
                        <AiOutlineBank />
                    </div>

                    <div className={style.detail}>
                        <p className={style.info__title}>Department</p>
                        <p className={style.info__body}>{currentUser.department}</p>
                    </div>
                </div>

                <div className={style.details}>
                    <div className={style.icon}>
                        <AiOutlineEnvironment />
                    </div>

                    <div className={style.detail}>
                        <p className={style.info__title}>Location</p>
                        <p className={style.info__body}>{currentUser.location}</p>
                    </div>
                </div>

                <div className={style.details}>
                    <div className={style.icon}>
                        <AiOutlineEye />
                    </div>

                    <div className={style.detail}>
                        <p className={style.info__title}>Supervisor</p>
                        <p className={style.info__body}>{currentUser.supervisor}</p>
                    </div>
                </div>

                <div className={style.details}>
                    <div className={style.icon}>
                        <AiOutlineCalendar />
                    </div>

                    <div className={style.detail}>
                        <p className={style.info__title}>Date Joined</p>

                        <p className={style.info__body}>{date}</p>
                    </div>
                </div>

            </div>
            <div className={style.secondary}>
                <Password />
            </div>
        </div>





    </div>)
}

export default Dashboard;