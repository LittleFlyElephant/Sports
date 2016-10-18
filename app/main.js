//main.js 
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Login from './components/Login/Login'

import Greeter from './tests/Greeter'
import {LikeButton} from './tests/Test'

injectTapEventPlugin();
render((
    <Router history={browserHistory}>
        <Route path="/login" component={Login} />

        <Route path="/greeter" component={Greeter} />
        <Route path="/test" component={LikeButton} />
    </Router>
), document.getElementById('root'));