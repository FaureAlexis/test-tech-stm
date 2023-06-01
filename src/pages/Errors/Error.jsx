import React from "react";
import { useRouteError, Link } from "react-router-dom";

function Error() {
    const error = useRouteError();

    return (
        <div>
            <h1>An error occured</h1>
            <p>{error.statusText || error.message}</p>
            <Link to="/">Back to home</Link>
        </div>
    );
}

export default Error;
