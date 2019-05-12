import React from 'react';
import Box from '../../components/box/box';
import Paragraph from '../../elements/paragraph/paragraph';
import './main.scss';

const Main = ({aboutText}) =>
    <div className='split-box'>
        <div className='split-box__half--horizontal'>
            <Box classes='box__about'>
                <Paragraph text={aboutText}/>
            </Box>
        </div>
        <div className='split-box__half--horizontal'>
            <Box classes='box__half--vertical'>
                <Paragraph classNames='capitalize' text='quick links' />
            </Box>
            <Box classes='box__half--vertical' text='quick links'>
                <Paragraph classNames='capitalize' text='quick links' />
            </Box>
        </div>
    </div>;

export default Main;
