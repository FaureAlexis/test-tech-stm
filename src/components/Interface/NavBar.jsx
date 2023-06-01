import React from "react";
import { Link } from "react-router-dom";

const NavItems = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "/about",
        name: "About"
    },
    {
        path: "/contact",
        name: "Contact"
    }
];
//use tailwindcss to style the navbar
function NavBar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Magic The Gathering</span>
            </div>
            <div className="flex items-center flex-grow-0">
                {NavItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default NavBar;
