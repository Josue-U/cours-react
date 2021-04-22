import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav_active">
                Accueil
            </NavLink>
            
            <NavLink exact to="about" activeClassName="nav_active">
                About
            </NavLink>
        </div>
    );
};

export default Navigation;