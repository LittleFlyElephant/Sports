/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'

import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import Run from 'material-ui/svg-icons/maps/directions-run'
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

import './Sidebar.scss'

class Sidebar extends Component {
    render() {
        return (
            <Paper className="side-paper" zDepth={1}>
                <Menu autoWidth={true}>
                    <MenuItem primaryText="今日运动"
                              leftIcon={<Run />}
                              rightIcon={<ArrowDropRight />}
                    />

                    <MenuItem primaryText="历史记录"
                    />
                    <MenuItem primaryText="活动管理" />
                    <MenuItem primaryText="圈子管理" />
                    <MenuItem primaryText="我的好友" />
                    <MenuItem primaryText="我的粉丝" />
                </Menu>
            </Paper>
        );
    }
}

export default Sidebar