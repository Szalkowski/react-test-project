import React from 'react';
import Box from '../../components/box/box';
import Paragraph from '../../elements/paragraph/paragraph';

const TopBar = () =>
    <Box classes='box__top-bar'>
        <Paragraph classNames='capitalize' text='company logo and slogan' />
    </Box>;

export default TopBar;
