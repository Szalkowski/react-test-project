import React from 'react';
import './loader.scss';

const Loader = () =>
    <div className='loader'>
        <div className='loader__content'>
            <div className="loader__content--spinner">
                <div className="dot1" />
                <div className="dot2" />
            </div>
        </div>
    </div>;

export default Loader;
