/**
 * Created by raychen on 2016/10/20.
 */

import React, {Component} from 'react'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Header from '../../components/Header/Header'
import SideHead from '../../components/SideHead/SideHead'
import Sidebar from '../../components/Sidebar/Sidebar'
import ListHead from '../../components/ListHead/ListHead'
import ListDetail from '../../components/ListDetail/ListDetail'

import s from './ActivityPage.scss'

class ActivityPage extends Component{
    render(){
        return (
            <MuiThemeProvider>
                <div className={s.root}>
                    <Header isLogin={false} />
                    <div className={s.commonContainer}>
                        <div className={s.sidebar}>
                            <SideHead />
                            <Sidebar />
                        </div>
                        <div className={s.main}>
                            <ListHead type="activity" />
                            <ListDetail />
                            <ListDetail />
                            <ListDetail />
                            <ListDetail />
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default ActivityPage;