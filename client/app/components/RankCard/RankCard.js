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

    renderRankItems() {
        let flowData = this.props.data;
        if (flowData.length > 0) {
            let flowItems = flowData.map(flowItem => {
                switch(this.props.type) {
                    case 'rank':
                        return (
                            <div className={s.item}>
                                <Badge
                                    style={badgeInside}
                                    badgeContent={flowItem.number}
                                    primary={true}
                                >
                                </Badge>
                                <Avatar className={s.avatar} size={40} src={require("../../assets/"+flowItem.avatar)}/>
                                <div className={s.name}> {flowItem.username} </div>
                            </div>
                        );
                    case 'news':
                        return (
                            <div className={s.item}>
                                <Badge
                                    style={badgeInside}
                                    badgeContent={flowItem.number}
                                    primary={true}
                                >
                                </Badge>
                                <Avatar className={s.avatar} size={40} src={require("../../assets/"+flowItem.avatar)}/>
                                <div className={s.content}>
                                    <div>{flowItem.title}</div>
                                    <div className={s.subcontent}>发布人: {flowItem.username}</div>
                                </div>
                            </div>
                        );
                    default:
                        return;
                }
            });
            return flowItems
        } else {
            return;
        }
    };

    render() {
        let title = this.props.title;
        return (
            <Paper className={s.container}>
                <div className={s.head}>
                    {title}
                </div>
                <Divider />
                {this.renderRankItems()}
            </Paper>
        );
    }
}

export default RankCard