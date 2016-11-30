/**
 * Created by raychen on 2016/10/18.
 */

import React, {Component} from 'react'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router'

import s from './RegisterCard.scss'
import {blueDark, blue, blueLight} from '../../config'
import {darkBlack} from 'material-ui/styles/colors'

class LoginCard extends Component{

    constructor(props){
        super(props);
        this.state = {
        };
    }

    componentDidMount(){

    }

    handleRe(){
        let username = this.refs.myUsername.input.value;
        let email = this.refs.myEmail.input.value;
        let password = this.refs.myPassword.input.value;
        this.props.handleRegister(username, password, email);
    }

    render(){
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
                        hintText="email"
                        fullWidth={true}
                        ref="myEmail"
                    />
                    <TextField
                        inputStyle={{color: darkBlack}}
                        hintText="password"
                        fullWidth={true}
                        type="password"
                        ref="myPassword"
                    />
                    <Link to="/login">
                        <RaisedButton
                            backgroundColor={blueDark}
                            fullWidth={true}
                            label="go to login"
                            className={s.btn}
                            onClick={this.handleRe.bind(this)}
                        />
                    </Link>
                </Paper>
        );
    }
}

export default LoginCard;