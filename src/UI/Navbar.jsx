import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-links">
                <Link className="link" to="/home">Все котики</Link>
                <Link className="link" to="/favourite">Любимые котики</Link>

            </div>
            
        </div>
    );
};

export default Navbar;