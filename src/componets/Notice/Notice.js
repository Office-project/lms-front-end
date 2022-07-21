import React, { useEffect, useState } from "react";
import NotificationService from "../Service/NotificationService";
import style from "./Notice.module.css"
import NoticeTable from "./NoticeTable";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai"

const Notice = () => {
    const [query, setQuery] = useState("");
    const [details, setDetails] = useState([]);
    const Keys = ["reason", "position"];
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPgage, setPostPerPage] = useState(10);
    const [message, setMessage] = useState();

    useEffect(() => {
        NotificationService.getMyNotifications().then((resp) => {
            setDetails(resp.data)
        }).catch((e) => {

        })
    }, [message]);

    const search = (any) => {
        return any.filter((item) => Keys.some(key => item[key].toLowerCase().includes(query)));
    };

    const gettingMessage = (msg) => {
        setMessage(msg);
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

                    {message && (
                        <span className="alert alert-success">{message}</span>
                    )}
                </div>
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
            <div className={style.main__two}>
                <NoticeTable all={currentPost} onGetMessage={gettingMessage} />
            </div>

        </div>
    );
}

export default Notice;