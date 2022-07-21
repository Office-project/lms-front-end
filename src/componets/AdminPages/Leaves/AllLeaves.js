import React, { useEffect, useState } from "react";
import AdminServices from "../../Service/AdminServices";
import style from "./Emp.module.css"
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import AdHistory from "./AdHistory";


const AllLeaves = () => {
    const [query, setQuery] = useState("");
    const [details, setDetails] = useState([]);
    const Keys = ["relief","start","end","appliedOn","name"];
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPgage, setPostPerPage] = useState(10);
    const [message, setMessage] = useState();

    useEffect(() => {
        AdminServices.getAllLeave().then((resp) => {
            setDetails(resp.data)
        })
    }, [message]);

    const search = (any) => {
        return any.filter((item) => Keys.some(key => item[key].toLowerCase().includes(query)));
    };

    const getMessage = (msg) => {
        setMessage(msg)
    }

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
                <div className="alert alert-success">{message}</div>
                <div className={style.controls__right}>
                    <AiFillCaretLeft onClick={() => {
                        if (currentPage !== 1) {
                            setCurrentPage(currentPage - 1);
                        }
                    }} />
                    <span>{currentPage + " OF " + Math.ceil(filtered.length / postPerPgage)}</span>
                    <AiFillCaretRight
                        onClick={() => {
                            if (currentPage !== Math.ceil(filtered.length / postPerPgage)) {
                                setCurrentPage(currentPage + 1)
                            }
                        }}
                    />
                </div>

            </div>
            <div className={style.table}>
                <AdHistory all={currentPost} />
            </div>


        </div>
    );
}
export default AllLeaves;