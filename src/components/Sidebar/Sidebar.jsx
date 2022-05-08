import React from "react";
import "./Sidebar.css";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
const sidebar = [
    { title: "Thống kê", icon: <AutoGraphOutlinedIcon /> },
    { title: "Khách hàng", icon: <GroupOutlinedIcon /> },
    { title: "Nhân viên", icon: <ContactMailOutlinedIcon /> },
    { title: "Tài khoản", icon: <AccountCircleOutlinedIcon /> },
    { title: "Đăng xuất", icon: <ExitToAppOutlinedIcon /> },
];
function Sidebar({ toggleNav, setToggleNav }) {
    const handleToggleNav = () => {
        setToggleNav(!toggleNav);
    };
    return (
        <>
            {/* =============== Navigation ================ */}
            <div className={`navigation ${toggleNav ? "active" : ""}`}>
                <div className="toggle">
                    <div className="toggle__icon" onClick={handleToggleNav}>
                        <FormatListBulletedOutlinedIcon />
                    </div>
                </div>
                <ul>
                    {sidebar.map((item, index) => (
                        <li key={index}>
                            <a href="#">
                                <span className="icon">{item.icon}</span>
                                <span className="title">{item.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
