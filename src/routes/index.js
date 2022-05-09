import React from "react";
const Home = React.lazy(() => import("../pages/Home/Home"));
const Staffs = React.lazy(() => import("../pages/Staffs/Staffs"));

const routeHome = [
    {
        exact: true,
        path: "/",
        element: <Home />,
    },
];
const routeStaffs = [
    {
        exact: false,
        path: "/staffs",
        element: <Staffs />,
    },
];
export { routeHome, routeStaffs };
