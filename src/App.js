import "./App.css";
import customer1 from "./assets/image/customer01.jpg";
import customer2 from "./assets/image/customer02.jpg";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Sidebar = [
    { title: "Brand Name", icon: <SavingsOutlinedIcon /> },
    { title: "Dashboard", icon: <HouseOutlinedIcon /> },
    { title: "Customers", icon: <GroupOutlinedIcon /> },
    { title: "Messages", icon: <MessageOutlinedIcon /> },
    { title: "Help", icon: <QuestionMarkOutlinedIcon /> },
    { title: "Settings", icon: <SettingsIcon /> },
    { title: "Password", icon: <LockOutlinedIcon /> },
    { title: "Sign Out", icon: <ExitToAppOutlinedIcon /> },
];

const cardBox = [
    {
        numbers: "1,504",
        cardName: "Daily Views",
        icon: <VisibilityOutlinedIcon />,
    },
    {
        numbers: "80",
        cardName: "Sales",
        icon: <AddShoppingCartOutlinedIcon />,
    },
    {
        numbers: "284",
        cardName: "Comments",
        icon: <ForumOutlinedIcon />,
    },
    {
        numbers: "$7,842",
        cardName: "Earning",
        icon: <LocalAtmOutlinedIcon />,
    },
];

function App() {
    return (
        // {/* =============== Navigation ================ */}
        <div className="container">
            <div className="navigation">
                <ul>
                    {Sidebar.map((item, index) => (
                        <li key={index}>
                            <a href="#">
                                <span className="icon">{item.icon}</span>
                                <span className="title">{item.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* ========================= Main ==================== */}
            <div className="main">
                <div className="topbar">
                    <div className="toggle">
                        <FormatListBulletedOutlinedIcon />
                    </div>
                    <div className="search">
                        <label>
                            <input type="text" placeholder="Search here" />
                            <SearchOutlinedIcon />
                        </label>
                    </div>
                    <div className="user">
                        <img src={customer1} alt />
                    </div>
                </div>
                {/* ======================= Cards ================== */}
                <div className="cardBox">
                    {cardBox.map((item, index) => (
                        <div className="card" key={index}>
                            <div>
                                <div className="numbers">{item.numbers}</div>
                                <div className="cardName">{item.cardName}</div>
                            </div>
                            <div className="iconBx">{item.icon}</div>
                        </div>
                    ))}
                </div>
                {/* ================ Order Details List ================= */}
                <div className="details">
                    <div className="recentOrders">
                        <div className="cardHeader">
                            <h2>Recent Orders</h2>
                            <a href="#" className="btn">
                                View All
                            </a>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Price</td>
                                    <td>Payment</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Star Refrigerator</td>
                                    <td>$1200</td>
                                    <td>Paid</td>
                                    <td>
                                        <span className="status delivered">
                                            Delivered
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Dell Laptop</td>
                                    <td>$110</td>
                                    <td>Due</td>
                                    <td>
                                        <span className="status pending">
                                            Pending
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Apple Watch</td>
                                    <td>$1200</td>
                                    <td>Paid</td>
                                    <td>
                                        <span className="status return">
                                            Return
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Addidas Shoes</td>
                                    <td>$620</td>
                                    <td>Due</td>
                                    <td>
                                        <span className="status inProgress">
                                            In Progress
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Star Refrigerator</td>
                                    <td>$1200</td>
                                    <td>Paid</td>
                                    <td>
                                        <span className="status delivered">
                                            Delivered
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Dell Laptop</td>
                                    <td>$110</td>
                                    <td>Due</td>
                                    <td>
                                        <span className="status pending">
                                            Pending
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Apple Watch</td>
                                    <td>$1200</td>
                                    <td>Paid</td>
                                    <td>
                                        <span className="status return">
                                            Return
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Addidas Shoes</td>
                                    <td>$620</td>
                                    <td>Due</td>
                                    <td>
                                        <span className="status inProgress">
                                            In Progress
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* ================= New Customers ================ */}
                    <div className="recentCustomers">
                        <div className="cardHeader">
                            <h2>Recent Customers</h2>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td width="60px">
                                        <div className="imgBx">
                                            <img src={customer2} alt />
                                        </div>
                                    </td>
                                    <td>
                                        <h4>
                                            David <br /> <span>Italy</span>
                                        </h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="60px">
                                        <div className="imgBx">
                                            <img src={customer1} alt />
                                        </div>
                                    </td>
                                    <td>
                                        <h4>
                                            Amit <br /> <span>India</span>
                                        </h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="60px">
                                        <div className="imgBx">
                                            <img src={customer2} alt />
                                        </div>
                                    </td>
                                    <td>
                                        <h4>
                                            David <br /> <span>Italy</span>
                                        </h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="60px">
                                        <div className="imgBx">
                                            <img src={customer1} alt />
                                        </div>
                                    </td>
                                    <td>
                                        <h4>
                                            Amit <br /> <span>India</span>
                                        </h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="60px">
                                        <div className="imgBx">
                                            <img src={customer2} alt />
                                        </div>
                                    </td>
                                    <td>
                                        <h4>
                                            David <br /> <span>Italy</span>
                                        </h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="60px">
                                        <div className="imgBx">
                                            <img src={customer1} alt />
                                        </div>
                                    </td>
                                    <td>
                                        <h4>
                                            Amit <br /> <span>India</span>
                                        </h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="60px">
                                        <div className="imgBx">
                                            <img src={customer1} alt />
                                        </div>
                                    </td>
                                    <td>
                                        <h4>
                                            David <br /> <span>Italy</span>
                                        </h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="60px">
                                        <div className="imgBx">
                                            <img src={customer2} alt />
                                        </div>
                                    </td>
                                    <td>
                                        <h4>
                                            Amit <br /> <span>India</span>
                                        </h4>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
