/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge'
import Avatar from 'material-ui/Avatar'

class CircleCard extends Component{
    render(){
        return (
            <Card>
                <CardHeader
                    title="Cross"
                    subtitle="创建人:raychen"
                    avatar={<Badge
                            badgeContent={4}
                            primary={true}
                        >
                            <Avatar src={require('../../assets/7.jpg')} />
                        </Badge>
                    }
                />
                <CardText>
                    这是一段介绍的文字，我们是一个和
                    和谐的团队，我们有一个厉害的队长，
                    天天带大家运动。
                </CardText>
                <CardActions>
                    <div>成员 </div>
                    <Avatar src={require('../../assets/9.jpg')}/>
                    <Avatar src={require('../../assets/8.jpg')}/>
                    <FlatButton label="加入" />
                </CardActions>
            </Card>
        );
    }
}

export default CircleCard;