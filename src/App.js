import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.scss';
import TopBar from "./sections/top-bar";
import Header from "./sections/header";
import Footer from "./sections/footer";
import Main from "./sections/main";
import Navigation from "./components/navigation";


class App extends Component {

    render() {
        return (
            <div className='container'>
                <TopBar/>
                <Header/>
                <Navigation />
                <main>
                    <Switch>
                        <Route exact path='/' component={Main}/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default App;
