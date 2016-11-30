/**
 * Created by raychen on 2016/11/3.
 */
import React, {Component} from 'react'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import cookie from 'react-cookie'

import Header from '../../components/Header/Header'
import SideHead from '../../components/SideHead/SideHead'
import Sidebar from '../../components/Sidebar/Sidebar'
import ListHead from '../../components/ListHead/ListHead'
import ListDetail from '../../components/ListDetail/ListDetail'
import AdminItem from '../../components/AdminItem/AdminItem'

import s from './AdminPage.scss'

import {myTheme} from '../../config'

class AdminPage extends Component {

    render(){
        let data = {
            id: 1
        };
        return(
            <MuiThemeProvider muiTheme={myTheme}>
                <div className={s.root}>
                    <Header isLogin={false} isAdmin={true} />
                    <div className={s.commonContainer}>
                        <div className={s.sidebar}>
                            <SideHead
                                avatar={cookie.load('user_avatar')}
                                user={cookie.load('user_name')}
                                level={cookie.load('user_level')}
                            />
                            <Sidebar />
                        </div>
                        <div className={s.container}>
                            <ListHead title="Users" />
                            <ListDetail type={3} btnType={2} data={data}/>
                            <ListDetail type={3} btnType={2} data={data}/>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default AdminPage