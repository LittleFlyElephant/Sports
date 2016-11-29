/**
 * Created by raychen on 2016/11/3.
 */
import React, {Component} from 'react'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Header from '../../components/Header/Header'
import AdminItem from '../../components/AdminItem/AdminItem'

import s from './AdminPage.scss'

import {myTheme} from '../../config'

class AdminPage extends Component {

    render(){
        return(
            <MuiThemeProvider muiTheme={myTheme}>
                <div className={s.root}>
                    <Header isLogin={false} isAdmin={true} />
                    <div className={s.container}>
                        <AdminItem type="user" />
                        <AdminItem type="activity" />
                        <AdminItem type="circle" />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default AdminPage