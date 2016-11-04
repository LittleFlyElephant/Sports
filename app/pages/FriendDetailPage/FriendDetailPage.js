/**
 * Created by raychen on 2016/11/3.
 */

import React, {Component} from 'react'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Header from '../../components/Header/Header'
import SideHead from '../../components/SideHead/SideHead'
import Sidebar from '../../components/Sidebar/Sidebar'
import ListDetail from '../../components/ListDetail/ListDetail'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

import s from './FriendDetailPage.scss'
import {myTheme} from '../../config'

class FriendDetailPage extends Component{
    render(){
        return (
            <MuiThemeProvider muiTheme={myTheme}>
                <div className={s.root}>
                    <Header isLogin={false} />
                    <div className={s.commonContainer}>
                        <div className={s.sidebar}>
                            <SideHead />
                            <Sidebar />
                        </div>
                        <div className={s.main}>
                            <ListDetail type={1} />
                            <ItemDetail />
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default FriendDetailPage;