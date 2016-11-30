/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'

import Paper from 'material-ui/Paper'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'

import ReactEcharts from 'echarts-for-react'

import s from './StepCard.scss'

const opt = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['cr', 'cdn', 'muen', 'canhai', 'zai']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'cr',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'cdn',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'muen',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'canhai',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'zai',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
/*


*/

class StepCard extends Component {
    render() {
        return (
            <Paper className={s.container}>
                <div className={s.left}>
                    <div className={s.title}> 今日步数 </div>
                    <Divider />
                    <div className={s.info}>
                        <div className={s.info_left}>
                            <div>今日</div>
                            <div>能量</div>
                            <div>排名</div>
                        </div>
                        <div className={s.info_right}>
                            <div>{this.props.step}</div>
                            <div>{this.props.energy}k</div>
                            <div>{this.props.rank}</div>
                        </div>
                    </div>
                </div>
                <div className={s.graph}>
                    <ReactEcharts
                        option={opt}
                        style={{height: '250px', width: '100%'}}
                    />
                </div>
            </Paper>
        );
    }
}

export default StepCard;