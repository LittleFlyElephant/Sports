/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton'
import Badge from 'material-ui/Badge'
import Avatar from 'material-ui/Avatar'

import s from './CircleCard.scss'

class CircleCard extends Component{

    renderAvatars(avatars){
        let avas = avatars.map(avatar => {
            return (
                <Avatar className={s.avatar} src={require('../../assets/'+avatar)}/>
            );
        });
        return avas;
    }

    render(){
        const badgeInside={
            width: "30px",
            height: "30px"
        };
        let data = this.props.data;

        return (
            <div className={s.backImg}>
                <Card className={s.container}>
                    <CardHeader
                        className={s.head}
                        title={data.title}
                        subtitle={"创建人: "+data.user}
                        avatar={<Badge
                            badgeStyle={badgeInside}
                            className={s.badge}
                            badgeContent={data.level}
                            primary={true}
                        >
                            <Avatar size={60} src={require('../../assets/'+data.avatar)} />
                        </Badge>
                    }
                    />
                    <CardText className={s.content}>
                        &nbsp;&nbsp;&nbsp;&nbsp;{data.description}
                    </CardText>
                    <CardActions className={s.footer}>
                        <div className={s.left}>
                            <div className={s.member} >成员 </div>
                            <div className={s.avatars}>
                                {this.renderAvatars(data.avatars)}
                            </div>
                        </div>
                        <FlatButton className={s.btn} label="加入" primary={true} />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CircleCard;