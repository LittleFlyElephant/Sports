/**
 * Created by raychen on 2016/10/18.
 */

import React, {Component} from 'react'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router'

import s from './LoginCard.scss'
import {blueDark, blue, blueLight} from '../../config'
import {darkBlack} from 'material-ui/styles/colors'

class LoginCard extends Component {

    constructor(props){
        super(props);
    }

    handleClick(){
        let username = this.refs.myUsername.input.value;
        let password = this.refs.myPassword.input.value;
        this.props.handleLogin(username, password);
    }

    render() {
        return (
            <Paper className={s.card} zDepth={2}>
                <TextField
                    inputStyle={{color: darkBlack}}
                    hintText="username"
                    fullWidth={true}
                    ref="myUsername"
                />
                <TextField
                    inputStyle={{color: darkBlack}}
                    hintText="password"
                    fullWidth={true}
                    type="password"
                    ref="myPassword"
                />
                <RaisedButton
                    backgroundColor={blueDark}
                    fullWidth={true}
                    label="login"
                    className={s.btn}
                    onClick={this.handleClick.bind(this)}
                />
                <Link to="/register">
                    <RaisedButton
                        backgroundColor={blueLight}
                        fullWidth={true}
                        label="sign up"
                        className={s.btn}
                    />
                </Link>
            </Paper>
        );
    }
}

export default LoginCard;