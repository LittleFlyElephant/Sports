/**
 * Created by raychen on 2016/10/20.
 */

import React, {Component} from 'react'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import cookie from 'react-cookie'

import Header from '../../components/Header/Header'
import SideHead from '../../components/SideHead/SideHead'
import Sidebar from '../../components/Sidebar/Sidebar'
import ListHead from '../../components/ListHead/ListHead'
import ListDetail from '../../components/ListDetail/ListDetail'

import s from './NewsPage.scss'
import {myTheme} from '../../config'

class ActivityPage extends Component{
    render(){
        return (
            <MuiThemeProvider muiTheme={myTheme}>
                <div className={s.root}>
                    <Header isLogin={false} />
                    <div className={s.commonContainer}>
                        <div className={s.sidebar}>
                            <SideHead
                                avatar={cookie.load('user_avatar')}
                                user={cookie.load('user_name')}
                                level={cookie.load('user_level')}
                            />
                            <Sidebar />
                        </div>
                        <div className={s.main}>
                            <ListHead title="News" />
                            <ListDetail type={2} />
                            <ListDetail type={2} />
                            <ListDetail type={2} />
                            <ListDetail type={2} />
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default ActivityPage;/**
 * Created by raychen on 2016/11/3.
 */
