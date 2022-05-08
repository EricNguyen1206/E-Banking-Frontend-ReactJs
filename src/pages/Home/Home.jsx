import React from "react";
import customer1 from "../../assets/image/customer01.jpg";
import customer2 from "../../assets/image/customer02.jpg";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
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

const customers = [
    { avt: customer1, name: "Amit", contries: "India" },
    { avt: customer2, name: "Amit", contries: "India" },
    { avt: customer1, name: "Amit", contries: "India" },
    { avt: customer2, name: "Amit", contries: "India" },
    { avt: customer1, name: "Amit", contries: "India" },
    { avt: customer2, name: "Amit", contries: "India" },
    { avt: customer1, name: "Amit", contries: "India" },
    { avt: customer2, name: "Amit", contries: "India" },
];

const order = [
    {
        name: "Star Refrigerator",
        price: "$1200",
        payment: "Paid",
        status: "pending",
    },
    {
        name: "Star Refrigerator",
        price: "$1200",
        payment: "Paid",
        status: "delivered",
    },
    {
        name: "Star Refrigerator",
        price: "$1200",
        payment: "Paid",
        status: "return",
    },
    {
        name: "Star Refrigerator",
        price: "$1200",
        payment: "Paid",
        status: "delivered",
    },
    {
        name: "Star Refrigerator",
        price: "$1200",
        payment: "Paid",
        status: "delivered",
    },
    {
        name: "Star Refrigerator",
        price: "$1200",
        payment: "Paid",
        status: "inProgress",
    },
    {
        name: "Star Refrigerator",
        price: "$1200",
        payment: "Paid",
        status: "delivered",
    },
];
function Home() {
    return (
        <>
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
                            {order.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.payment}</td>
                                    <td>
                                        <span
                                            className={`status ${item.status}`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
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
                            {customers.map((item, index) => (
                                <tr key={index}>
                                    <td width="60px">
                                        <div className="imgBx">
                                            <img src={item.avt} alt />
                                        </div>
                                    </td>
                                    <td>
                                        <h4>
                                            {item.name} <br />{" "}
                                            <span>{item.contries}</span>
                                        </h4>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Home;
