/**
 * Created by raychen on 2016/10/18.
 */

import React, {Component} from 'react'
import cookie from 'react-cookie'

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar'
import {Link} from 'react-router'

import ActionHome from 'material-ui/svg-icons/action/home'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import s from './Header.scss'
import {white1, blueLight, blueDark} from '../../config'

const iconStyle = {
    color: white1
};
const menuStyle = {
    backgroundColor: blueLight
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 2
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, index, value) {
        this.setState({value: value});
    }

    handleLogout() {
        cookie.remove('user_name');
        cookie.remove('user_id');
        cookie.remove('user_level');
        cookie.remove('user_avatar');
        cookie.remove('user_per');
        window.location.href = '/login';
    }

    handleSetting() {
        window.location.href = '/personal';
    }

    render() {
        let isLogin = this.props.isLogin;
        var avatar = require('../../assets/1.jpg');
        if (isLogin) {
            return (
                <Toolbar className={s.container}>
                    <ToolbarGroup>
                        <Avatar className={s.avatar} src={require('../../assets/8.jpg')}/>
                        <ToolbarTitle className={s.title} text="Sports Mate"/>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <FlatButton
                            hoverColor={blueDark}
                            className={s.btn} label="contact" primary={true}/>
                        <FlatButton
                            hoverColor={blueDark}
                            className={s.btn} label="about" primary={true}/>
                    </ToolbarGroup>
                </Toolbar>
            );
        } else {
            let tbgroup =
                <ToolbarGroup>
                    <Avatar className={s.avatar} src={require('../../assets/8.jpg')}/>
                    <ToolbarTitle className={s.title} text="Sports Mate"/>
                    <Link to="/home" className={s.link}>
                        <FlatButton
                            hoverColor={blueDark}
                            className={s.btn} label="Home" primary={true}/>
                    </Link>
                    <Link to="/activity" className={s.link}>
                        <FlatButton
                            hoverColor={blueDark}
                            className={s.btn} label="Activities" primary={true}/>
                    </Link>
                    <Link to="/circle" className={s.link}>
                        <FlatButton
                            hoverColor={blueDark}
                            className={s.btn} label="Circles" primary={true}/>
                    </Link>
                </ToolbarGroup>;
            if (cookie.load('user_per') > 1)
                tbgroup =
                    <ToolbarGroup>
                        <Avatar className={s.avatar} src={require('../../assets/8.jpg')}/>
                        <ToolbarTitle className={s.title} text="Sports Mate"/>
                    </ToolbarGroup>;
            return (
                <Toolbar className={s.container}>
                    {tbgroup}
                    <ToolbarGroup lastChild={true}>
                        <ToolbarTitle className={s.name} text={cookie.load('user_name')}/>
                        <Avatar src={require("../../assets/"+cookie.load('user_avatar'))}
                                style={{alignSelf: 'center'}}/>
                        <IconMenu
                            iconStyle={iconStyle}
                            menuStyle={menuStyle}
                            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            style={{alignSelf: 'center'}}
                        >
                            <MenuItem primaryText="Settings"
                                      onTouchTap={this.handleSetting.bind(this)}
                            />
                            <MenuItem className={s.menuItem}
                                      primaryText="Logout"
                                      onTouchTap={this.handleLogout.bind(this)}
                            />
                        </IconMenu>
                    </ToolbarGroup>
                </Toolbar>
            );
        }
    }
}

Header.propTypes = {
    isLogin: React.PropTypes.bool
};

export default Header
