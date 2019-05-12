import React from 'react';
import propTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {NavElements} from '../../config/templates/navigation-template';
import './navigation.scss';

const Links = (element) =>
    <li
        className='navigation__element'
        key={element.name}
    >
        <NavLink
            className='navigation__element--link'
            exact
            to={element.slug}
            activeClassName="active"
        >
            {element.name}
        </NavLink>
    </li>;

const Navigation = () =>
    <nav>
        <ul className='navigation'>
            {NavElements.map(Links)}
        </ul>
    </nav>;

Links.propTypes = {
    element: propTypes.shape({
        name: propTypes.string.isRequired,
        slug: propTypes.number.isRequired
    }).isRequired
};

export default Navigation;
