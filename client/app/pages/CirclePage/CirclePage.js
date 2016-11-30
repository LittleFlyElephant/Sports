/**
 * Created by raychen on 2016/10/20.
 */

import React, {Component} from 'react'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import cookie from 'react-cookie'

import Header from '../../components/Header/Header'
import SideHead from '../../components/SideHead/SideHead'
import Sidebar from '../../components/Sidebar/Sidebar'
import ListHead from '../../components/ListHead/ListHead'
import ListDetail from '../../components/ListDetail/ListDetail'
import CircleCard from '../../components/CircleCard/CircleCard'

import s from './CirclePage.scss'
import {myTheme} from '../../config'

class CirclePage extends Component{

    renderCards(){
        let circles = [
            {
                title: 'Cross',
                user: 'raychen',
                level: 12,
                avatar: '1.jpg',
                description: '我们是一个团结友爱的团队,大家一起运动、一起健身,快加入我们吧!:-)',
                avatars: ['3.jpg', '4.jpg', '5.jpg']
            },
            {
                title: 'MatWork',
                user: 'xiao8',
                level: 32,
                avatar: '6.jpg',
                description: '运动与美丽同在~我们队长可是大神哦~来来来,加入我们把~',
                avatars: ['8.jpg', '2.png', '1.jpg']
            },
            {
                title: 'Wings',
                user: 'shadow',
                level: 102,
                avatar: '9.jpg',
                description: '最强战队在此!CN Dota! The Best Dota!',
                avatars: ['4.jpg', '2.png', '5.jpg']
            }
        ];
        if (circles.length > 0) {
            let cards = circles.map(circle => {
                return (
                    <CircleCard data={circle}/>
                );
            });
            return cards;
        }
    }

    render(){
        return (
            <MuiThemeProvider muiTheme={myTheme}>
                <div className={s.root}>
                    <Header isLogin={false} />
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
                            <ListHead title="Circles" />
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

export default CirclePage;