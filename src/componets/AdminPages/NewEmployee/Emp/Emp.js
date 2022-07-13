import React, { useEffect, useState } from "react";
import AdminServices from "../../../Service/AdminServices";
import style from "./Emp.module.css"
import Employee from "../Employee/Employee";
import EmpTable from "../EmpTable/EmpTable";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai"

const Emp = () => {
    const [query, setQuery] = useState("");
    const [details, setDetails] = useState([]);
    const Keys = ["firstName", "lastName", "email", "gender","location", "department", "role"];
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPgage, setPostPerPage] = useState(10);



    useEffect(() => {
        AdminServices.getStaff().then((resp) => {
            setDetails(resp.data)
        })
    }, []);

    const search = (any) => {
        return any.filter((item) => Keys.some(key => item[key].toLowerCase().includes(query)));
    };

    const indexOfLastPost = currentPage * postPerPgage;
    const indexOfFirstPost = indexOfLastPost - postPerPgage;
    const filtered = search(details);
    const currentPost = filtered.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className={style.main}>


            <div className={style.controls}>
                <div className={style.controls__left}>
                    <input
                        className={style.pp}
                        type="number"
                        value={postPerPgage}
                        onChange={(e) => setPostPerPage(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="search...."
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <div className={style.controls__right}>
                    <AiFillCaretLeft onClick={() => {
                        if (currentPage !== 1) {
                            setCurrentPage(currentPage - 1);
                        }
                    }} />
                    <span>{currentPage+" OF "+Math.ceil(filtered.length / postPerPgage)}</span>
                    <AiFillCaretRight
                        onClick={() => {
                            if (currentPage !== Math.ceil(filtered.length / postPerPgage)) {
                                setCurrentPage(currentPage + 1)
                            }
                        }}
                    />
                </div>

            </div>


            <EmpTable all={currentPost} />

            <div>
                <Employee />
            </div>

        </div>
    );
}

export default Emp;