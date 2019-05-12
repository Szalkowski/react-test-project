import React from 'react';
import propTypes from 'prop-types';
import './box.scss'

const Box = ({text, classes, children}) =>
    <div className={`box ${classes}`}>
        {children}
    </div>;

Box.propTypes = {
    children: propTypes.node,
    classes: propTypes.string,
};

Box.defaultProps = {
    classes: ''
};
export default Box
