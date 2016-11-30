/**
 * Created by raychen on 2016/10/20.
 */

import React, {Component} from 'react'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import $ from 'jquery'
import cookie from 'react-cookie'

import Header from '../../components/Header/Header'
import SideHead from '../../components/SideHead/SideHead'
import Sidebar from '../../components/Sidebar/Sidebar'
import ListHead from '../../components/ListHead/ListHead'
import FriendCard from '../../components/FriendCard/FriendCard'

import s from './FriendsPage.scss'
import {myTheme} from '../../config'

class FriendsPage extends Component {

    renderCards() {
        let friends = [
            {
                level: 1,
                user: 'cr',
                step: 3409,
                avatar: '4.jpg'
            },
            {
                level: 34,
                user: 'cdr',
                step: 13409,
                avatar: '3.jpg'
            },
            {
                level: 12,
                user: 'cddc',
                step: 16409,
                avatar: '7.jpg'
            }
        ];
        if (friends.length > 0) {
            let cards = friends.map(friend => {
                return (
                    <FriendCard data={friend}/>
                );
            });
            return cards;
        }
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={myTheme}>
                <div className={s.root}>
                    <Header isLogin={false}/>
                    <div className={s.commonContainer}>
                        <div className={s.sidebar}>
                            <SideHead
                                avatar={cookie.load('user_avatar')}
                                user={cookie.load('user_name')}
                                level={cookie.load('user_level')}
                            />
                            <Sidebar />
                        </div>
                        <div className={s.main}>
                            <ListHead title="Friends"/>
                            <div className={s.cards}>
                                {this.renderCards()}
                            </div>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default FriendsPage;