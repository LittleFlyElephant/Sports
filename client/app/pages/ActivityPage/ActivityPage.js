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

import s from './ActivityPage.scss'
import {myTheme, getMuiTheme} from '../../config'

class ActivityPage extends Component{

    renderListItems() {
        const listdata = [
            {
                id: 1,
                avatar: '1.jpg',
                time: '2016-11-12 14:00',
                title: '我要去运动,一起啊',
                user: 'cr1',
                userNums: 3,
                price: "￥"+10
            },
            {
                id: 2,
                avatar: '6.jpg',
                time: '2016-11-17 19:00',
                title: '跑步',
                user: 'cr3',
                userNums: 1,
                price: "￥"+14
            },
            {
                id: 3,
                avatar: '3.jpg',
                time: '2016-11-15',
                title: '散布',
                user: 'cccdn',
                userNums: 5,
                price: "￥"+0
            }
        ];
        if (listdata.length > 0) {
            let listItems = listdata.map(listItem => {
                return (
                    <ListDetail type={1}
                                data={listItem} handleDetail={this.handleDetail.bind(this)}
                                btnType={0}
                    />
                )
            });
            return listItems
        } else {
            return;
        }
    };

    handleDetail(id){
        window.location.href="/activity-detail?id="+id;
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
                            <ListHead title="Activities" />
                            {this.renderListItems()}
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default ActivityPage;