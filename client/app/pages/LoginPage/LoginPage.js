/**
 * Created by raychen on 2016/10/18.
 */

import React, {Component} from 'react'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import $ from 'jquery'
import cookie from 'react-cookie'

import Header from '../../components/Header/Header'
import LoginCard from '../../components/LoginCard/LoginCard'

import s from './LoginPage.scss'

import {myTheme, rootUrl, SUCCESS} from '../../config'

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            test: 'test'
        };
    }

    handleLogin(username, password){
        let url = rootUrl+"/login";
        $.post(url,
            {
                username: username,
                password: password
            },
            function(res, status){
                if (res.result == SUCCESS){
                    cookie.save('user_name', username);
                    cookie.save('user_id', res.id);
                    cookie.save('user_level', res.level);
                    cookie.save('user_avatar', res.avatar);
                    cookie.save('user_per', res.permission);
                    if (res.permission > 1){
                        window.location.href = '/admin';
                    }
                    else window.location.href = '/home';
                }
                console.log(res.msg);
            }.bind(this));
    }

    render(){
        return(
            <MuiThemeProvider muiTheme={myTheme}>
                <div className={s.root}>
                    <Header isLogin={true} />
                    <div className={s.container}>
                        <LoginCard handleLogin={this.handleLogin.bind(this)}/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default LoginPage