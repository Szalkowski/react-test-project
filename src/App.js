import React from 'react';
import {Switch, Route} from 'react-router-dom';
import TopBar from "./sections/top-bar";
import Header from "./sections/header";
import Footer from "./sections/footer";
import Main from "./sections/main";
import Navigation from "./components/navigation";
import './App.scss';

const App = () =>
    <div className='container'>
        <TopBar/>
        <Header/>
        <Navigation/>
        <main>
            <Switch>
                <Route exact path='/' component={Main}/>
            </Switch>
        </main>
        <Footer/>
    </div>

export default App;
