/**
 * Created by raychen on 2016/10/18.
 */

import React, {Component} from 'react'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar'

import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 2
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, index, value) {
        console.log('in');
        this.setState({value: value});
    }

    render() {
        return (
            <MuiThemeProvider>
                <Toolbar className="nav">
                    <ToolbarGroup firstChild={true}>
                        <Avatar src={require("../../assets/1.jpg")} />
                    </ToolbarGroup>
                    <ToolbarGroup>

                    </ToolbarGroup>
                </Toolbar>
            </MuiThemeProvider>
        );
    }
}

export default Login
