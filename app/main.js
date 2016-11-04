//main.js 
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

import AdminPage from './pages/AdminPage/AdminPage'
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import HistoryPage from './pages/HistoryPage/HistoryPage'
import ActivityPage from './pages/ActivityPage/ActivityPage'
import CirclePage from './pages/CirclePage/CirclePage'
import FriendsPage from './pages/FriendsPage/FriendsPage'
import PersonalPage from './pages/PersonalPage/PersonalPage'
import ActivityDetailPage from './pages/ActivityDetailPage/ActivityDetailPage'
import CircleDetailPage from './pages/CircleDetailPage/CircleDetailPage'
import FriendDetailPage from './pages/FriendDetailPage/FriendDetailPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import NewsPage from './pages/NewsPage/NewsPage'
import Base from './pages/base'

import Greeter from './tests/Greeter'
import {LikeButton} from './tests/Test'

import s from './main.scss'

injectTapEventPlugin();
render((
    <Router history={browserHistory}>
        <Route path="/login" component={LoginPage}/>
        <Route path="/register" component={RegisterPage}/>

        <Route path="/admin" component={AdminPage} />

        <Route path="/home" component={HomePage}/>
        <Route path="/friends" component={FriendsPage} />
        <Route path="/friend-detail" component={FriendDetailPage} />
        <Route path="/fans" component={FriendsPage} />
        <Route path="/history" component={HistoryPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/activity" component={ActivityPage}/>
        <Route path="/activity-detail" component={ActivityDetailPage} />
        <Route path="/circle" component={CirclePage}/>
        <Route path="/circle-detail" component={CircleDetailPage} />
        <Route path="/personal" component={PersonalPage} />

        <Route path="/greeter" component={Greeter}/>
        <Route path="/test" component={LikeButton}/>
        <Route path="/base" component={Base}/>
    </Router>
), document.getElementById('root'));