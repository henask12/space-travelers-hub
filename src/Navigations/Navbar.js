import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <NavLink exact to="/" activeClassName="underline" className="text-white mr-4 hover:text-gray-300">
                    My Profile
                </NavLink>
                <NavLink exact to="/about" activeClassName="underline" className="text-white mr-4 hover:text-gray-300">
                    Rockets
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;
