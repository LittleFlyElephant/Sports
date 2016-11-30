/**
 * Created by raychen on 2016/10/20.
 */

import React, {Component} from 'react'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import cookie from 'react-cookie'

import Header from '../../components/Header/Header'
import SideHead from '../../components/SideHead/SideHead'
import Sidebar from '../../components/Sidebar/Sidebar'
import ListDetail from '../../components/ListDetail/ListDetail'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

import s from './ActivityDetailPage.scss'
import {myTheme} from '../../config'

class ActivityDetailPage extends Component{

    constructor(props){
        super(props);
        this.state={
            description: "000",
            joiners: [
                {
                    rank: 1,
                    avatar: '3.jpg',
                    user: 'cdn',
                    step: 4092,
                    energy: 90,
                    expdiff: -30
                },
                {
                    rank: 2,
                    avatar: '1.jpg',
                    user: 'ccccd',
                    step: 14092,
                    energy: 340,
                    expdiff: 34
                }
            ]
        };
    }

    componentDidMount(){
        console.log(this.props.location.query);
    }

    handleDetail(id){
    }

    render(){
        const listdata =
            {
                id: 1,
                avatar: '1.jpg',
                time: '2016-11-12 14:00',
                title: '我要去运动,一起啊',
                user: 'cr1',
                userNums: 3,
                price: "￥"+10
            };
        let btnType = 1;
        if (cookie.load('user_per')>1) btnType = 2;
        else if (listdata.user == cookie.load('user_name')) btnType = 2;
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
                            <ListDetail type={1}
                                        data={listdata} handleDetail={this.handleDetail.bind(this)}
                                        btnType={btnType}
                            />
                            <ItemDetail des={this.state.description} joins={this.state.joiners}/>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default ActivityDetailPage;