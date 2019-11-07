import React from 'react';
import { NavLink } from 'react-router-dom';


const FilterLink = ({filter, children}) => (
    <NavLink
        to={filter}
        activeStyle={{
            textDecoration: 'none',
            color: 'black'
        }}
    >
        {children}
    </NavLink>
)

const Footer = () => {
    return (
        <div>
           <FilterLink filter='all' >All</FilterLink>
           <FilterLink filter='repeating'>Repeating</FilterLink>
           <FilterLink filter='one-time'>One-Time</FilterLink>
        </div>
    )
}

export default Footer;