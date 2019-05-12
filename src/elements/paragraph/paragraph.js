import React from 'react';
import propTypes from 'prop-types';
import './paragraph.scss';

const Paragraph = ({text, classNames}) =>
    <p className={`paragraph ${classNames}`} >{text}</p>;

Paragraph.propTypes = {
    text: propTypes.string.isRequired
};

Paragraph.defaultProps = {
    classNames: ''
};

export default Paragraph
