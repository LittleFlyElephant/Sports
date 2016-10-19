/**
 * Created by raychen on 2016/10/18.
 */

import React, {Component} from 'react'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Header from '../../components/Header/Header'
import LoginCard from '../../components/LoginCard/LoginCard'

import '../common.scss'

class LoginPage extends Component {

    render(){
        return(
            <MuiThemeProvider>
                <div className="root">
                    <Header isLogin={true} />
                    <div className="container">
                        <LoginCard />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default LoginPage