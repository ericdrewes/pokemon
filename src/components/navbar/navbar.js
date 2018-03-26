import { React, Component } from 'react';
import { NavLink as Link } from 'react-router-dom';

function Navbar() {
    return(
        <div>
            <header className="navHeader">
                <h1 className="app-title">Pokemon</h1>
                <Link to="/"> Pokemon List </Link>
                <Link to="/favorites"> Favorite Pokemon </Link>
            </header>
        </div>
    )
}

export default Navbar;