/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'

import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {yellow600} from 'material-ui/styles/colors'

class ListDetail extends Component{
    render(){
        return (
            <Paper className="flex">
                <div className="flex-1" style={{alignSelf: 'center', textAlign: 'center'}}>
                    <Avatar src={require('../../assets/1.jpg')} />
                </div>
                <div className="flex-col flex-2" style={{alignSelf: 'center'}}>
                    <div className="flex-1" style={{fontSize: '20px'}}>我要去运动</div>
                    <div className="flex-1" style={{fontSize: '10px'}}>发布人:raychen</div>
                </div>
                <IconButton className="flex-1" style={{alignSelf: 'center'}}>
                    <EditorInsertChart />
                </IconButton>
                <div className="flex-col flex-1" style={{alignSelf: 'center', alignItems: 'center'}}>
                    <div className="flex-1" style={{fontSize: '15px'}}>赏金</div>
                    <div className="flex-1" style={{fontSize: '15px'}}>$20</div>
                </div>
                <div className="flex-col flex-2" style={{alignSelf: 'center', alignItems: 'center'}}>
                    <div className="flex-1" style={{fontSize: '15px'}}>时间</div>
                    <div className="flex-1" style={{fontSize: '15px'}}>2016-02-02 13:00</div>
                </div>
                <div className="flex-1" style={{alignSelf: 'center', textAlign: 'center'}}>
                    <FlatButton label="5" style={{minWidth: 'none', backgroundColor: "#62b1f0"}} />
                </div>
                <div className="flex-1" style={{alignSelf: 'center', alignItems: 'center'}}>
                    <FlatButton label="参加" style={{minWidth: 'none'}} />
                </div>
            </Paper>
        );
    }
}

export default ListDetail;