import React from 'react';
import {Switch, Route} from 'react-router-dom';
import pageNotFound from "./config/404";
import HomePage from "./pages/homepage";
import './App.scss';


const App = () =>
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route component={pageNotFound}/>
    </Switch>;

export default App;
