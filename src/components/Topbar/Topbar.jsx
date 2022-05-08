import React from "react";
import "./Topbar.css";
import customer1 from "../../assets/image/customer01.jpg";
function Topbar() {
    return (
        <div className="topbar">
            <div className="user">
                <img src={customer1} alt="Avatar" />
            </div>
        </div>
    );
}

export default Topbar;
