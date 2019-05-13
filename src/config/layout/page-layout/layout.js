import React from 'react';
import propTypes from 'prop-types';
import {LoaderContext} from '../../../components/loader/loading-context';
import TopBar from '../../../sections/top-bar/top-bar';
import Header from '../../../sections/header/header';
import Navigation from '../../../components/navigation/navigation';
import Footer from '../../../sections/footer/footer';
import Loader from '../../../components/loader/loader';
import './layout.scss';

const Layout = ({children}) => {
    const {Consumer} = LoaderContext;
    return (
        <Consumer>
            {loader =>
                loader
                    ? <Loader/>
                    : <div className='container'>
                        <TopBar/>
                        <Header/>
                        <Navigation/>
                        <main>
                            {children}
                        </main>
                        <Footer/>
                    </div>
            }
        </Consumer>
    );
};
Layout.propTypes = {
    children: propTypes.node
};

export default Layout;
