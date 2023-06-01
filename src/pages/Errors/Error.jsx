import React from "react";
import { useRouteError, Link } from "react-router-dom";

function Error() {
    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-200">
            <h1>An error occured</h1>
            <p>{error.statusText || error.message}</p>
            <Link to="/">Back to home</Link>
        </div>
    );
}

export default Error;
