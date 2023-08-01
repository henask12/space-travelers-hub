// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RocketsList from "../Rockets";
import MissionsList from "../Missions/MissionComp";

const Navigation = () => {
    return (
        <Router>
            <nav className="bg-white-800 py-4 border border-white-100 rounded-lg shadow-sm">
                <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 2xl:px-32 flex flex-col sm:flex-row justify-between items-center">
                    <Link exact to="/" className="text-gray-600 mr-4 hover:text-gray-300">
                        My Profile
                    </Link>
                    <Link exact to="/rockets" className="text-gray-600 mr-4 hover:text-gray-300">
                        Rockets
                    </Link>
                </div>
            </nav>
            <Routes>
                <Route exact path="/" element={<MissionsList />} />
                <Route exact path="/rockets" element={<RocketsList />} />
            </Routes>
        </Router>
    );
};

export default Navigation;
