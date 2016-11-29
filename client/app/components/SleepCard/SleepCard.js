/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'

import Paper from 'material-ui/Paper'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'

import ReactEcharts from 'echarts-for-react'

import s from './SleepCard.scss'

class StepCard extends Component {
    render() {
        return (
            <Paper className={s.container}>
                <div className={s.left}>
                    <div className={s.title}> 睡眠 </div>
                    <Divider />
                    <div className={s.info}>
                        <div className={s.info_left}>
                            <div>昨天睡眠</div>
                            <div>昨日入睡</div>
                            <div>今日醒来</div>
                        </div>
                        <div className={s.info_right}>

                        </div>
                    </div>
                </div>
                <div className={s.graph}>

                </div>
            </Paper>
        );
    }
}

export default StepCard;