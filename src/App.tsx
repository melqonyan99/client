import React, { useState,useEffect } from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom'
import './App.css';
import { Provider } from 'react-redux'
import useToken from './helpers/useToken'

import More from './components/More/More'
import About from './components/About/About'
import Home from './components/Home/Home'
import MapComponent from './components/MapComponent/Map'
import Header from './components/Header/Header'
import Login from './Auth/Login/Login'
import Logout from './Auth/LogOut/LogOut'

import Register from './Auth/Register/Register'
import Personal from './Auth/Personal/Personal'
import ForVisit from './components/MostVisit/MostVisit'
import UserProfile from './components/UserProfile/UserProfile'
import axios from 'axios';
import {store} from './helpers/store'
import history from './helpers/history'
import {Father} from './components/Father'


const App: React.FC = () => {
   
    return (
        <>
            <Provider store={store} >
                <Router history={history} >
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/more" component={More} />
                        <Route path='/visit' component={ForVisit}/>
                        <Route path='/location' component={MapComponent} />
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/user' component={UserProfile}/>
                        <Route path='/father' component={Father}/>
                    </Switch>
                </Router>
            </Provider>
        </>
    );
};

export default App;
