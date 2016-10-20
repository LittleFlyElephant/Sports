/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'

import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import Run from 'material-ui/svg-icons/maps/directions-run'
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import History from 'material-ui/svg-icons/action/history';
import Activity from 'material-ui/svg-icons/maps/directions-bike';
import Circle from 'material-ui/svg-icons/action/group-work';
import Friends from 'material-ui/svg-icons/social/group'
import Fans from 'material-ui/svg-icons/action/favorite'

import s from './Sidebar.scss'

class Sidebar extends Component {
    render() {
        return (
            <Paper className={s.paper} zDepth={1}>
                <Menu autoWidth={true}>
                    <MenuItem primaryText="今日运动"
                              focusState="focused"
                              leftIcon={<Run />}
                              rightIcon={<ArrowDropRight />}
                    />

                    <MenuItem primaryText="历史记录"
                              leftIcon={<History />}
                              rightIcon={<ArrowDropRight />}
                    />
                    <MenuItem primaryText="活动管理"
                              leftIcon={<Activity />}
                              rightIcon={<ArrowDropRight />}
                    />
                    <MenuItem primaryText="圈子管理"
                              leftIcon={<Circle />}
                              rightIcon={<ArrowDropRight />}
                    />
                    <MenuItem primaryText="我的好友"
                              leftIcon={<Friends />}
                              rightIcon={<ArrowDropRight />}
                    />
                    <MenuItem primaryText="我的粉丝"
                              leftIcon={<Fans />}
                              rightIcon={<ArrowDropRight />}
                    />
                </Menu>
            </Paper>
        );
    }
}

export default Sidebar