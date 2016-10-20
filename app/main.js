//main.js 
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import Base from './pages/base'

import Greeter from './tests/Greeter'
import {LikeButton} from './tests/Test'

import s from './main.scss'

injectTapEventPlugin();
render((
    <Router history={browserHistory}>
        <Route path="/login" component={LoginPage} />
        <Route path="/home" component={HomePage} />

        <Route path="/greeter" component={Greeter} />
        <Route path="/test" component={LikeButton} />
        <Route path="/base" component={Base} />
    </Router>
), document.getElementById('root'));