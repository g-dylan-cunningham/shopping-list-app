import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


const FilterLink = ({filter, sorting, children }) => {
    return (
        <span>{" "}
            <NavLink
                to={location => ({ ...location, pathname: `/${filter}/${sorting}` })}
                activeStyle={{
                    textDecoration: 'none',
                    color: 'black'
                }}
                replace={true}
            >   
                {children}
            </NavLink>
        </span>
    )
}


const Footer = ({match, location}) => {
    const { params: { filter, sorting }} = match;
    return (
        <div>
            <div>
                <FilterLink filter='all' sorting={sorting}>All</FilterLink>
                <FilterLink filter='repeating' sorting={sorting}>Repeating</FilterLink>
                <FilterLink filter='one-time' sorting={sorting}>One-Time</FilterLink>
            </div>
            <div>
                <FilterLink filter={filter} sorting='chrono'>Chronological</FilterLink>
                <FilterLink filter={filter} sorting='sorted'>Sorted</FilterLink>
            </div>
        </div>
    )
}


export default withRouter(Footer);