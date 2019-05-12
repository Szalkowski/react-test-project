import React from 'react';
import Box from "../components/box";
import styled from 'styled-components';

const SplitBox = styled.div`
  display: flex;
  justify-content: center;
  min-height: 400px;
  margin-bottom: 20px;
  .half-horizontal {
    width: calc(50% - 10px);
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;


const Main = ({aboutText}) =>
    <SplitBox>
        <div className='half-horizontal'>
            <Box classes='about' text={aboutText}/>
        </div>
        <div className='half-horizontal'>
            <Box classes='half-vertical' text='quick links'/>
            <Box classes='half-vertical' text='quick links'/>
        </div>
    </SplitBox>

export default Main;
