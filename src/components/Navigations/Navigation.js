// src/App.js
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import RocketsList from '../Rockets';
import MissionsList from '../Missions/MissionComp';
import MyProfilePage from '../Views';

const Navigation = () => (
  <Router>
    <nav className="bg-white-800 py-4 border border-white-100 rounded-lg shadow-sm">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 2xl:px-32 flex justify-between items-center">
        {/* Logo on the left */}
        <a href="#/" className="active flex items-center text-gray-600">
          <div className="nav__logo flex items-center mr-2">
            <img src="logo192.png" alt="Space Travelers Logo" className="h-8 w-8" />
            <h1 className="ml-2 font-bold text-lg">Space Travelers Hub</h1>
          </div>
        </a>

        {/* Links on the right */}
        <div className="flex space-x-4">
          <Link exact="true" to="/" className="text-gray-600 hover:text-black-900 font-bold">
            Rockets
          </Link>
          <Link exact="true" to="/missions" className="text-gray-600 hover:text-black-900 font-bold">
            Missions
          </Link>
          <span>|</span>
          <Link exact="true" to="/profile" className="text-gray-600 hover:text-black-900 font-bold">
            My Profile
          </Link>
        </div>
      </div>
    </nav>

    <Routes>
      <Route exact path="/" element={<RocketsList />} />
      <Route exact path="/missions" element={<MissionsList />} />
      <Route exact path="/profile" element={<MyProfilePage />} />
    </Routes>
  </Router>
);

export default Navigation;
