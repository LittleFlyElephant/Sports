/**
 * Created by raychen on 2016/10/18.
 */

import React, {Component} from 'react'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import style from './LoginCard.scss'

class LoginCard extends Component{

    render(){
        return (
                <Paper className={style.card} zDepth={2}>
                    <TextField
                        hintText="username"
                        fullWidth={true}
                    />
                    <TextField
                        hintText="password"
                        fullWidth={true}
                        type="password"
                    />
                    <RaisedButton
                        fullWidth={true}
                        label="login"
                        primary={true}
                        className={style.btn}
                    />
                    <RaisedButton
                        fullWidth={true}
                        label="sign up"
                        className={style.btn}
                    />
                </Paper>
        );
    }
}

export default LoginCard;