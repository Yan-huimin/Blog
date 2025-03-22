import React, { Component } from 'react';
import '../CSS/navbar.css';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    state = {  } 
    render() {
        return (
            <React.Fragment>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink 
                        className="nav-link ms-1 link" 
                        aria-current="page" 
                        to="/blog/home"
                        activeclassname="active"
                        >Home</NavLink>
                    </li>
                    <li className="nav-item link">
                        <NavLink 
                        className="nav-link ms-1" 
                        to="/blog/about"
                        activeclassname="active"
                        >About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                        className="nav-link ms-1" 
                        to="/blog/yhm"
                        activeclassname="active"
                        >Share</NavLink>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

export default NavBar;