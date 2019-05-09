import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    color: #000;
    font-size: 1.125rem;
    font-weight: 400;
    text-transform: capitalize;
`;

const Paragraph = ({text}) =>
    <Text>{text}</Text>

export default Paragraph
