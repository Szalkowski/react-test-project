import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import pageNotFound from './config/404/404';
import './App.scss';

const App = () =>
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route component={pageNotFound}/>
    </Switch>;

export default App;
