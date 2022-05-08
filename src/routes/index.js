import React from "react";
const Home = React.lazy(() => import("../pages/Home/Home"));

const routeHome = [
    {
        exact: true,
        path: "/",
        element: <Home />,
    },
];

export { routeHome };
