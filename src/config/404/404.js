import React from 'react';
import {Link} from 'react-router-dom';
import './404.scss';

const pageBg = require('../../assets/img/404.svg');
const rocket = require('../../assets/img/rocket.svg');
const earth = require('../../assets/img/earth.svg');
const moon = require('../../assets/img/moon.svg');
const astronaut = require('../../assets/img/astronaut.svg');

const pageNotFound = () =>
    <div className="not-found">
        <div className="not-found__content">
            <div className="not-found__content--central-body">
                <img className="image-404" src={pageBg} width="300px" alt='404'/>
                <Link to="/" className="btn-go-home">GO BACK HOME</Link>
            </div>
            <div className="not-found__content--objects">
                <img className="object_rocket" src={rocket} width="40px" alt='rocket'/>
                <div className="earth-moon">
                    <img className="object_earth" src={earth} width="100px" alt='earth'/>
                    <img className="object_moon" src={moon} width="80px" alt='moon'/>
                </div>
                <div className="box_astronaut">
                    <img className="object_astronaut" src={astronaut} width="140px" alt='astronaut'/>
                </div>
            </div>
            <div className="not-found__content--glowing_stars">
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
            </div>
        </div>
    </div>;

export default pageNotFound;
