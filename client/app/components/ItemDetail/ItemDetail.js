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

    renderListItem(){
        let joiners = this.props.joins;
        if (joiners.length > 0){
            let ret = joiners.map(joiner => {
                return (
                    <div className={s.list}>
                        <div className={s.names}>
                            <FlatButton className={s.rank} label={joiner.rank} />
                            <div className={s.avatar}>
                                <Avatar size={30} src={require("../../assets/"+joiner.avatar)}/>
                            </div>
                            <div className={s.name}> {joiner.user} </div>
                        </div>
                        <div className={s.steps}>
                            <p>步数: &nbsp;{joiner.step}</p>
                        </div>
                        <div className={s.energy}>
                            <p>能量: &nbsp;{joiner.energy}k</p>
                        </div>
                        <div className={s.expr}>
                            <p>Exp {joiner.expdiff>0?"+":""}{joiner.expdiff} </p>
                        </div>
                    </div>
                );
            });
            return ret;
        }
    }

    render(){
        return (
            <div className={s.backImg}>
                <Paper className={s.container}>
                    <div className={s.description}>
                        <p>
                            {this.props.des}
                        </p>
                    </div>
                    {this.renderListItem()}
                </Paper>
            </div>
        );
    }
}

export default ItemDetail