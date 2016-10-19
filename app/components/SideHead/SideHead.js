/**
 * Created by raychen on 2016/10/19.
 */
import React, {Component} from 'react'

import Badge from 'material-ui/Badge'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'

class SideHead extends Component{
    render () {
        return (
            <Paper>
                <Badge
                    badgeContent={4}
                    primary={true}
                >
                    <Avatar src={require('../../assets/7.jpg')} />
                </Badge>
                <div> raychen </div>
            </Paper>
        );
    }
}

export default SideHead