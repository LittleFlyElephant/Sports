/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'

import Paper from 'material-ui/Paper'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'

class ItemDetail extends Component{
    render(){
        return (
            <Paper>
                <p>
                    简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍
                </p>
                <Table>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            <TableHeaderColumn>Rank</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Steps</TableHeaderColumn>
                            <TableHeaderColumn>Exp</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={false}
                    >
                        <TableRow>
                            <TableRowColumn>
                                <FlatButton label="5" style={{minWidth: 'none', backgroundColor: "#62b1f0"}} />
                            </TableRowColumn>
                            <TableRowColumn>
                                <Avatar src={require('../../assets/5.jpg')} />
                                <p style={{display: 'inline'}}>Cr</p>
                            </TableRowColumn>
                            <TableRowColumn>20009</TableRowColumn>
                            <TableRowColumn>30+</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>2</TableRowColumn>
                            <TableRowColumn>Randal White</TableRowColumn>
                            <TableRowColumn>Unemployed</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default ItemDetail