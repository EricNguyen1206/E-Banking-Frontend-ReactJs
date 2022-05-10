import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <div className="login__body">
                <form action="" className="login__form">
                    <label htmlFor="location">Chọn khu vực</label>
                    <select name="location" id="location" className="location">
                        <option value="Ben Thanh">Bến Thành</option>
                        <option value="Ben Thanh">Tân Định</option>
                    </select>
                    <label htmlFor="name">Tên tài khoản</label>
                    <input type="text" name="name" id="name" className="name" />
                    <label htmlFor="password">Mật khẩu</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="password"
                    />
                    <Link to="/">
                        <button>Đăng nhập</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
