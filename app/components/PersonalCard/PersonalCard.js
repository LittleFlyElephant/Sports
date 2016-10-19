/**
 * Created by raychen on 2016/10/19.
 */
import React, {Component} from 'react'

import Badge from 'material-ui/Badge'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class PersonalCard extends Component{
    render(){
        return (
            <Paper>
                <Badge
                    badgeContent={4}
                    primary={true}
                >
                    <Avatar src={require('../../assets/7.jpg')} />
                </Badge>
                <TextField
                    defaultValue="Raychen"
                    fullWidth={true}
                />
                <TextField
                    defaultValue="email: 1395314348@qq.com"
                    fullWidth={true}
                />
                <TextField
                    defaultValue="phone: 18392838992"
                    fullWidth={true}
                />
                <TextField
                    defaultValue="birth"
                    fullWidth={true}
                />
                <RaisedButton label="save" secondary={true} />
            </Paper>
        );
    }
}

export default PersonalCard;