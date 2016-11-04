/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'
import Avatar from 'material-ui/Avatar';
import Badge from 'material-ui/Badge'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider';

import s from './RankCard.scss'

const badgeInside={
    padding: "12px 15px"
};

class RankCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let ava1 = require('../../assets/1.jpg');
        let ava2 = require('../../assets/3.jpg');
        let type = this.props.type;
        let title = "Today's Rank";
        let content =
            <div className={s.name}> raychen </div>;
        if (type == "news"){
            title = "Recent Activities";
            content =
                <div className={s.content}>
                    <div>我要去运动</div>
                    <div className={s.subcontent}>发布人: cdn</div>
                </div>
        }
        return (
            <Paper className={s.container}>
                <div className={s.head}>
                    {title}
                </div>
                <Divider />
                <div className={s.item}>
                    <Badge
                        style={badgeInside}
                        badgeContent={1}
                        primary={true}
                    >
                    </Badge>
                    <Avatar className={s.avatar} size={40} src={require('../../assets/7.jpg')}/>
                    {content}
                </div>
                <div className={s.item}>
                    <Badge
                        style={badgeInside}
                        badgeContent={2}
                        primary={true}
                    >
                    </Badge>
                    <Avatar className={s.avatar} size={40} src={require('../../assets/5.jpg')}/>
                    {content}
                </div>
            </Paper>
        );
    }
}

export default RankCard