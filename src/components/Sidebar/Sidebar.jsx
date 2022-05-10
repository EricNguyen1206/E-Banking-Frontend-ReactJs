import { Link } from "react-router-dom";
import "./Sidebar.css";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
const sidebar = [
    { title: "Thống kê", icon: <AutoGraphOutlinedIcon />, link: "/" },
    { title: "Khách hàng", icon: <GroupOutlinedIcon />, link: "/customers" },
    { title: "Nhân viên", icon: <ContactMailOutlinedIcon />, link: "/staffs" },
    {
        title: "Tài khoản",
        icon: <AccountCircleOutlinedIcon />,
        link: "/account",
    },
    { title: "Đăng xuất", icon: <ExitToAppOutlinedIcon />, link: "/login" },
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
                            <Link to={item.link}>
                                <span className="icon">{item.icon}</span>
                                <span className="title">{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
