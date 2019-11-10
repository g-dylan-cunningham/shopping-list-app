import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


const FilterLink = ({filter, sorting, important, children }) => {
    return (
        <span>{" "}
            <NavLink
                to={location => ({ ...location, pathname: `/${filter}/${sorting}/${important}` })}
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


const Footer = ({ match }) => {
    const { params: { filter, sorting, important }} = match;
    return (
        <div>
            <div>
                <FilterLink filter='all' sorting={sorting} important={important}>All</FilterLink>
                <FilterLink filter='repeating' sorting={sorting} important={important}>Repeating</FilterLink>
                <FilterLink filter='one-time' sorting={sorting} important={important}>One-Time</FilterLink>
            </div>
            <div>
                <FilterLink filter={filter} sorting='chrono' important={important}>Chronological</FilterLink>
                <FilterLink filter={filter} sorting='alpha' important={important}>Alphabetical</FilterLink>
            </div>
            <div>
                <FilterLink filter={filter} sorting={sorting} important='all'>All</FilterLink>
                <FilterLink filter={filter} sorting={sorting} important='important'>Important</FilterLink>
                <FilterLink filter={filter} sorting={sorting} important='unimportant'>Unimportant</FilterLink>
            </div>
        </div>
    )
}


export default withRouter(Footer);