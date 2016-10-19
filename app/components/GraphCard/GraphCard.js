/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'

import Paper from 'material-ui/Paper'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton'

class GraphCard extends Component{
    render(){
        return (
            <Paper>
                <Card>
                    <CardMedia
                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                    >
                        <img src={require('../../assets/4.jpg')} />
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