// src/App.js
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyView from "./views/MyView";
import NavBar from "./Navbar";

const Navigation = () => {
    return (
        <Router>
            <NavBar />

            <Switch>
                <Route exact path="/" component={MyView} />
                <Route exact path="/about" component={MyView} />
                {/* Add more Route components for other pages */}
            </Switch>
        </Router>
    );
};

export default Navigation;
