/**
 * Created by raychen on 2016/10/18.
 */

import React, {Component} from 'react'

import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'

import './LoginCard.scss'

class LoginCard extends Component{

    render(){
        return (
            <div className="container">
                <Paper className="card" zDepth={2}>
                    <TextField hintText="username" />
                    <TextField hintText="password" type="password" />
                </Paper>
            </div>
        );
    }
}

export default LoginCard;