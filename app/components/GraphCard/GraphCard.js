/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'

import Paper from 'material-ui/Paper'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton'

import ReactEcharts from 'echarts-for-react'

import s from './GraphCard.scss'

const opt = {
    title: { text: '今日运动情况' },
    tooltip: {},
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};

class GraphCard extends Component{
    render(){
        return (
            <Paper className={s.container}>
                <Card>
                    <CardMedia>
                        <div>
                            <ReactEcharts
                                option={opt}
                                style={{height: '350px', width: '100%'}}
                                 />
                        </div>
                    </CardMedia>
                    <CardText>
                        <Table>
                            <TableBody
                                displayRowCheckbox={false}
                            >
                                <TableRow key={1}>
                                    <TableRowColumn>{"今日步数"}</TableRowColumn>
                                    <TableRowColumn>{"1000"}</TableRowColumn>
                                    <TableRowColumn>{"统计"}</TableRowColumn>
                                    <TableRowColumn>{"10000"}</TableRowColumn>
                                </TableRow>
                                <TableRow key={2}>
                                    <TableRowColumn>{"今日步数"}</TableRowColumn>
                                    <TableRowColumn>{"1000"}</TableRowColumn>
                                    <TableRowColumn>{"统计"}</TableRowColumn>
                                    <TableRowColumn>{"10000"}</TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardText>
                </Card>
            </Paper>
        );
    }
}

export default GraphCard;