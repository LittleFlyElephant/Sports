/**
 * Created by raychen on 2016/11/3.
 */
import React, {Component} from 'react'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Header from '../../components/Header/Header'
import SideHead from '../../components/SideHead/SideHead'
import Sidebar from '../../components/Sidebar/Sidebar'
import RankCard from '../../components/RankCard/RankCard'
import StepCard from '../../components/StepCard/StepCard'
import SleepCard from '../../components/SleepCard/SleepCard'

import s from './HistoryPage.scss'
import {myTheme} from '../../config'

class HistoryPage extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={myTheme}>
                <div className={s.root}>
                    <Header isLogin={false}/>
                    <div className={s.commonContainer}>
                        <div className={s.sidebar}>
                            <SideHead />
                            <Sidebar />
                        </div>
                        <div className={s.main}>
                            <StepCard />
                            <SleepCard />
                        </div>
                        <div className={s.right}>
                            <RankCard type="rank" />
                            <RankCard type="rank" />
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default HistoryPage;