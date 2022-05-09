import React from "react";
const users = [
    {
        id: "NV01",
        email: "email1@gmail.com",
        lastname: "Dảk Bủh",
        firstname: "Lmao",
        address: "123 Bình thạnh, Hồ Chí Minh",
        gender: "Nam",
        phone: "0123123123",
        status: "Hoạt động",
    },
    {
        id: "NV01",
        email: "email1@gmail.com",
        lastname: "Dảk Bủh",
        firstname: "Lmao",
        address: "123 Bình thạnh, Hồ Chí Minh",
        gender: "Nam",
        phone: "0123123123",
        status: "Hoạt động",
    },
    {
        id: "NV01",
        email: "email1@gmail.com",
        lastname: "Dảk Bủh",
        firstname: "Lmao",
        address: "123 Bình thạnh, Hồ Chí Minh",
        gender: "Nam",
        phone: "0123123123",
        status: "Hoạt động",
    },
    {
        id: "NV01",
        email: "email1@gmail.com",
        lastname: "Dảk Bủh",
        firstname: "Lmao",
        address: "123 Bình thạnh, Hồ Chí Minh",
        gender: "Nam",
        phone: "0123123123",
        status: "Hoạt động",
    },
    {
        id: "NV01",
        email: "email1@gmail.com",
        lastname: "Dảk Bủh",
        firstname: "Lmao",
        address: "123 Bình thạnh, Hồ Chí Minh",
        gender: "Nam",
        phone: "0123123123",
        status: "Hoạt động",
    },
    {
        id: "NV01",
        email: "email1@gmail.com",
        lastname: "Dảk Bủh",
        firstname: "Lmao",
        address: "123 Bình thạnh, Hồ Chí Minh",
        gender: "Nam",
        phone: "0123123123",
        status: "Hoạt động",
    },
    {
        id: "NV01",
        email: "email1@gmail.com",
        lastname: "Dảk Bủh",
        firstname: "Lmao",
        address: "123 Bình thạnh, Hồ Chí Minh",
        gender: "Nam",
        phone: "0123123123",
        status: "Hoạt động",
    },
];

function User() {
    return (
        <div className="users">
            <div className="cardHeader">
                <h2>Khách hàng</h2>
                <a href="#" className="btn">
                    View All
                </a>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Tài khoản</td>
                        <td>Họ tên</td>
                        <td>Địa chỉ</td>
                        <td>Giới tính</td>
                        <td>Số điên thoại</td>
                        <td>Trạng thái</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, index) => (
                        <tr key={index}>
                            <td>
                                {item.id}{" "}
                                <span className="email">{item.email}</span>
                            </td>

                            <td>
                                {item.lastname}
                                <span className="firstname">
                                    {item.firstname}
                                </span>
                            </td>
                            <td>{item.address}</td>
                            <td>
                                <span className={`gender ${item.gender}`}>
                                    {item.gender}
                                </span>
                            </td>
                            <td>{item.phone}</td>
                            <td>
                                <span className={`status ${item.status}`}>
                                    {item.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default User;
