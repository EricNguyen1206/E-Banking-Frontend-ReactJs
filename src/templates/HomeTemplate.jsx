import { useState } from "react";
import { Topbar, Sidebar } from "../components";
import "./HomeTemplate.css";

const LayoutHome = (props) => {
    const [toggleNav, setToggleNav] = useState(false);
    return (
        <div className="container">
            <Sidebar toggleNav={toggleNav} setToggleNav={setToggleNav} />
            {/* ========================= Main ==================== */}
            <div className={`main ${toggleNav ? "active" : ""}`}>
                <Topbar />
                {props?.children}
            </div>
        </div>
    );
};

const HomeTemplate = (props) => {
    return <LayoutHome>{props?.children}</LayoutHome>;
};

export default HomeTemplate;
