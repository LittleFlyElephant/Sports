//main.js 
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

import LoginPage from './components/LoginPage/LoginPage'

import Greeter from './tests/Greeter'
import {LikeButton} from './tests/Test'

injectTapEventPlugin();
render((
    <Router history={browserHistory}>
        <Route path="/login" component={LoginPage} />

        <Route path="/greeter" component={Greeter} />
        <Route path="/test" component={LikeButton} />
    </Router>
), document.getElementById('root'));