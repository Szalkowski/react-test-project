import React from 'react';
import {NavLink} from 'react-router-dom';
import propTypes from 'prop-types';
import {NavElements} from '../mocks/navigation';
import styled from 'styled-components';

const NavigationElements = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 100px;
  width: 100%;
  
  li {
    position: relative;
    width: 25%;
    height: 100%;
    background-color: #E0E0E0;
    &:not(:last-child) {
      margin-right: 20px;
    }
     a {
      position: absolute;
      top: 50%;
      left: 50%;
      color: #000;
      font-size: 1.25rem;
      text-decoration: none;
      text-transform: uppercase;
      transform: translate(-50%,-50%);
      &.active{
        color: #FF0000;
        font-weight: 700;
        &:hover {
        text-decoration: none;
        }
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Links = (element) =>
    <li
        key={element.name}
    >
        <NavLink
            exact
            to={element.slug}
            activeClassName="active"
        >
            {element.name}
        </NavLink>
    </li>;

const Navigation = () =>
    <nav>
        <NavigationElements>
            {NavElements.map(Links)}
        </NavigationElements>
    </nav>;

Links.propTypes = {
    element: propTypes.shape({
        name: propTypes.string.isRequired,
        slug: propTypes.number.isRequired
    }).isRequired
};

export default Navigation;
