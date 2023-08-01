import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <Link exact to="/" activeClassName="underline" className="text-white mr-4 hover:text-gray-300">
                    My Profile
                </Link>
                <Link exact to="/rockets" activeClassName="underline" className="text-white mr-4 hover:text-gray-300">
                    Rockets
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
