/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'

import Paper from 'material-ui/Paper'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'

import s from './ItemDetail.scss'

class ItemDetail extends Component{
    render(){
        return (
            <Paper className={s.container}>
                <div className={s.description}>
                    <p>
                        简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍
                    </p>
                </div>
                <div className={s.list}>
                    <div className={s.name}>
                        <FlatButton label="1" />
                    </div>
                    <div className={s.steps}>

                    </div>
                    <div className={s.energy}>

                    </div>
                    <div className={s.expr}>

                    </div>
                </div>
            </Paper>
        );
    }
}

export default ItemDetail