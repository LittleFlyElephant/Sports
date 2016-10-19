/**
 * Created by raychen on 2016/10/19.
 */
import React, {Component} from 'react'

import Badge from 'material-ui/Badge'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

class FriendCard extends Component{
    render(){
        return (
            <Paper>
                <Badge
                    badgeContent={4}
                    primary={true}
                >
                    <Avatar src={require('../../assets/7.jpg')} />
                </Badge>
                <div> raychen </div>
                <div>日均步数</div>
                <div>12345</div>
                <RaisedButton label="删除" secondary={true} />
            </Paper>
        );
    }
}

export default FriendCard;