import React from "react";
import headerstyle from "./Header.module.css";
import { IoIosArrowForward } from "react-icons/io";

function Header() {
  return (
    <div className={headerstyle.page_header}>
      <div className={headerstyle.page_header_wrapper}>
        <p>
          Dashboard{" "}
          <span>
            <IoIosArrowForward className="icon" />
          </span>{" "}
          Funding{" "}
          <span>
            <IoIosArrowForward className="icon" />
          </span>{" "}
          Pay with Nerve
        </p>
      </div>
    </div>
  );
}

export default Header;
