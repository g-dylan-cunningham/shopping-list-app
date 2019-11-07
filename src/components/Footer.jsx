import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
           <NavLink to='/'>All</NavLink>{" "}
           <NavLink to='/repeating'>Repeating</NavLink>{" "}
           <NavLink to='/one-time'>One-Time</NavLink>{" "}
        </div>
    )
}

export default Footer;