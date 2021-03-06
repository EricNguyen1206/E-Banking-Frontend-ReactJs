import "./App.css";
import HomeTemplate from "./templates/HomeTemplate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routeHome, routeAuth } from "./routes";
import { Suspense } from "react";
function App() {
    const renderLayoutHome = (routes) => {
        if (routes && routes.length > 0) {
            return routes.map((item, index) => {
                return (
                    <Route
                        key={index}
                        exact={item.exact}
                        path={item.path}
                        element={<HomeTemplate>{item.element}</HomeTemplate>}
                    />
                );
            });
        }
    };

    const renderLayoutAuth = (routes) => {
        if (routes && routes.length > 0) {
            return routes.map((item, index) => {
                return (
                    <Route
                        key={index}
                        exact={item.exact}
                        path={item.path}
                        element={item.element}
                    />
                );
            });
        }
    };

    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>{renderLayoutHome(routeHome)}</Routes>
                <Routes>{renderLayoutAuth(routeAuth)}</Routes>
            </Suspense>
        </Router>
    );
}

export default App;
