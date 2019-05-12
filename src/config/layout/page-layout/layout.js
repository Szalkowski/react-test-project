import React from 'react';
import propTypes from 'prop-types';
import TopBar from '../../../sections/top-bar/top-bar';
import Header from '../../../sections/header/header';
import Navigation from '../../../components/navigation/navigation';
import Footer from '../../../sections/footer/footer';
import './layout.scss';

const Layout = ({children}) =>
    <div className='container'>
        <TopBar/>
        <Header/>
        <Navigation/>
        <main>
            {children}
        </main>
        <Footer/>
    </div>;

Layout.propTypes = {
    children: propTypes.node
};

export default Layout;
