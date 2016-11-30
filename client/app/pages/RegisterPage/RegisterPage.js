/**
 * Created by raychen on 2016/10/18.
 */

import React, {Component} from 'react'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import $ from 'jquery'

import Header from '../../components/Header/Header'
import RegisterCard from '../../components/RegisterCard/RegisterCard'

import s from './RegisterPage.scss'

import {myTheme, rootUrl} from '../../config'

class RegisterPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            test: 'test'
        };
    }

    componentDidMount(){

    }

    handleRegister(username, password, email){
        let url = rootUrl+"/register";
        $.post(url,
            {
                username: username,
                password: password,
                email: email
            },
            function(data, status){
                //
            }.bind(this));
    }

    render(){
        return(
            <MuiThemeProvider muiTheme={myTheme}>
                <div className={s.root}>
                    <Header isLogin={true} />
                    <div className={s.container}>
                        <RegisterCard handleRegister={this.handleRegister.bind(this)}/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default RegisterPage