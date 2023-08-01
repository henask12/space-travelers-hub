// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import NavBar from "./Navbar";
import RocketsList from "../Rockets";

const Navigation = () => {
    return (
        <Router>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto">
                    <Link exact to="/" className="text-white mr-4 hover:text-gray-300">
                        My Profile
                    </Link>
                    <Link exact to="/rockets" className="text-white mr-4 hover:text-gray-300">
                        Rockets
                    </Link>
                </div>
            </nav>
            <Routes>
                <Route exact path="/" element={<RocketsList />} />
                <Route exact path="/rockets" element={<RocketsList />} />
            </Routes>
        </Router>
    );
};

export default Navigation;
