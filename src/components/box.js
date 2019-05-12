import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from "../elements/paragraph";

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  height: 100%;
  background-color: #E0E0E0;
  
  &.top-bar {
    height: 150px;
  }
  
  &.header, &.footer {
    height: 240px;
  }
  &.about {
    padding: 10px 15px;
  }
  &.half-vertical {
    max-height: calc(50% - 10px);
  }
  &.footer {
    margin-bottom: 0;
  }
`;

const Box = ({text, classes}) =>
    <ContentBox className={classes}>
        <Paragraph text={text}/>
    </ContentBox>

Box.propTypes = {
    text: propTypes.string.isRequired,
    classes: propTypes.string,
};

propTypes.default = {
    classes: ''
};
export default Box
