import React from "react";

/* Errors Pages */
import NotFound from "../pages/Errors/NotFound";
import Error from "../pages/Errors/Error";

/* Pages */
import Home from "../pages/Home";

let routes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "*",
        element: <NotFound/>
    }
];

/* Add error element to each route */
routes = routes.map((route) => {
    return {
        ...route,
        errorElement: <Error/>,
    };
});

export default routes;
