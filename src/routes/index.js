import React from "react";
const Home = React.lazy(() => import("../pages/Home/Home"));
const Staffs = React.lazy(() => import("../pages/Staffs/Staffs"));
const Users = React.lazy(() => import("../pages/Customers/Customers"));
const Login = React.lazy(() => import("../pages/Login/Login"));
const Account = React.lazy(() => import("../pages/Account/Account"));

const routeHome = [
    {
        exact: true,
        path: "/",
        element: <Home />,
    },
    {
        exact: false,
        path: "/staffs",
        element: <Staffs />,
    },
    {
        exact: false,
        path: "/customers",
        element: <Users />,
    },
    {
        exact: false,
        path: "/account",
        element: <Account />,
    },
];

const routeAuth = [
    {
        exac: true,
        path: "/login",
        element: <Login />,
    },
];
export { routeHome, routeAuth };
