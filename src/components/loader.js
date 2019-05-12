import React from 'react';
import './loader.scss';

const Loader = () =>
    <div className='loader-bg'>
        <div className='loader'>
            <div className="spinner">
                <div className="dot1"></div>
                <div className="dot2"></div>
            </div>
        </div>
    </div>;

export default Loader;
