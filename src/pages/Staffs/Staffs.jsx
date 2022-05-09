import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import "./Staffs.css";
const staffs = [
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

function Staff() {
    const [page, setPage] = useState(1);
    return (
        <div className="staffs">
            <div className="staffs__header">
                <h2>Nhân viên</h2>
                <h3>Chi nhánh tân định</h3>
            </div>
            <table className="staffs_list">
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
                    {staffs.map((item, index) => (
                        <tr key={index}>
                            <td className="account">
                                {item.id} <span>{item.email}</span>
                            </td>
                            <td className="name">
                                {item.lastname}
                                <span>{item.firstname}</span>
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
            <div className="staff__pagination">
                <Pagination background="#fff" />
            </div>
        </div>
    );
}

export default Staff;
