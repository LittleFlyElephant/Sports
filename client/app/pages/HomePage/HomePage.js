/**
 * Created by raychen on 2016/10/19.
 */
import React, {Component} from 'react'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import $ from 'jquery'
import cookie from 'react-cookie'

import Header from '../../components/Header/Header'
import SideHead from '../../components/SideHead/SideHead'
import Sidebar from '../../components/Sidebar/Sidebar'
import RankCard from '../../components/RankCard/RankCard'
import StepCard from '../../components/StepCard/StepCard'
import SleepCard from '../../components/SleepCard/SleepCard'

import s from './HomePage.scss'
import {myTheme, rootUrl, SUCCESS} from '../../config'

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rankData : [],
            newsData : [],
            todayStep : 0,
            todayEnergy: 1000,
            todaySleep: 8.5,
            todayRank: 3
        };
    }

    componentDidMount(){
        //fake data
        const f_rankdata = [
            {
                number: 1,
                avatar: '3.jpg',
                username: 'test1'
            },
            {
                number: 2,
                avatar: '4.jpg',
                username: 'test2'
            },
            {
                number: 3,
                avatar: '5.jpg',
                username: 'test3'
            }
        ];
        const f_newsdata = [
            {
                number: 1,
                title: 'first title',
                avatar: '5.jpg',
                username: 'test1'
            },
            {
                number: 2,
                title: 'second title',
                avatar: '4.jpg',
                username: 'test2'
            },
            {
                number: 3,
                title: 'Hi',
                avatar: '3.jpg',
                username: 'test3'
            }
        ];
        this.setState({
            rankData: f_rankdata,
            newsData: f_newsdata
        });

        let user_name = cookie.load('user_name');
        let url_history = rootUrl+"/user/history/"+user_name;
        $.get(url_history,
            function(res, status){
                if (res.result == SUCCESS){
                    this.setState({
                        todayStep: res.content.total_step
                    });
                }
            }.bind(this));
    }

    render() {
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
                            <StepCard
                                step={this.state.todayStep}
                                energy={this.state.todayEnergy}
                                rank={this.state.todayRank}
                            />
                            <SleepCard time={this.state.todaySleep} />
                        </div>
                        <div className={s.right}>
                            <RankCard type="rank"
                                      data={this.state.rankData}
                                      title="Today's Rank"
                            />
                            <RankCard type="news"
                                      data={this.state.newsData}
                                      title="Recent activities"
                            />
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default HomePage;