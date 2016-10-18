/**
 * Created by raychen on 2016/10/18.
 */

import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Header from '../Header/Header'
import LoginCard from '../LoginCard/LoginCard'



class LoginPage extends Component {

    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <Header />
                    <LoginCard />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default LoginPage