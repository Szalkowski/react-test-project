import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.p`
    color: #000;
    font-size: 1.125rem;
    font-weight: 400;
    text-transform: capitalize;
`;

const Paragraph = ({text}) =>
    <Text>{text}</Text>

Paragraph.propTypes = {
    text: propTypes.string.isRequired
};

export default Paragraph
