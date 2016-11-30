/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import {Link} from 'react-router'

import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {yellow600} from 'material-ui/styles/colors'

import s from './ListDetail.scss'

class ListDetail extends Component {
    constructor(props) {
        super(props);
    }

    handleJoin(){

    }

    handleDelete(){

    }

    handleClick(){
        let value = this.refs.myBtn.props.value;
        this.props.handleDetail(value);
    }

    render() {
        let type = this.props.type;
        let data = this.props.data;
        let btnType = this.props.btnType;
        let btn = null;
        if (btnType == 1){// join
            btn =
                <FlatButton label="参加"
                            className={s.btn}
                            primary={true}
                            ref="myBtn"
                            onClick={this.handleJoin.bind(this)}
                            value={data.id}
                />
        } else if (btnType == 2){ // delete
            btn =
                <FlatButton label="移除"
                            className={s.btn}
                            secondary={true}
                            ref="myBtn"
                            onClick={this.handleDelete.bind(this)}
                            value={data.id}
                />
        } else if (btnType == 0){
            btn =
                <FlatButton label="详情"
                            className={s.btn}
                            primary={true}
                            ref="myBtn"
                            onClick={this.handleClick.bind(this)}
                            value={data.id}
                />;
        }
        switch (type) {
            case 1: //activity

                return (
                    <Paper className={s.container}>
                        <div className={s.avatar}>
                            <Avatar src={require("../../assets/"+data.avatar)}/>
                        </div>
                        <div className={s.title}>
                            <div className={s.single}>{data.title}</div>
                            <div className={s.single}>发布人:{data.user}</div>
                        </div>
                        <IconButton className={s.type}>
                            <EditorInsertChart />
                        </IconButton>
                        <div className={s.money}>
                            <div className={s.single}>参与人数</div>
                            <div className={s.single}>{data.userNums}</div>
                        </div>
                        <div className={s.time}>
                            <div className={s.single}>时间</div>
                            <div className={s.single}>{data.time}</div>
                        </div>
                        <div className={s.people}>
                            <FlatButton label={data.price} className={s.btn}/>
                        </div>
                        <div className={s.joinIn}>
                            {btn}
                        </div>
                    </Paper>
                );
            case 2: //dynamic
                return (
                    <Paper className={s.container}>
                        <div className={s.avatar}>
                            <Avatar src={require('../../assets/1.jpg')}/>
                        </div>
                        <div className={s.name}>
                            raychen
                        </div>
                        <IconButton className={s.type}>
                            <EditorInsertChart />
                        </IconButton>
                        <div className={s.content}>
                            参加了活动: 我要去跑步
                        </div>
                        <div className={s.time}>
                            <div className={s.single}>3 minutes ago</div>
                        </div>
                    </Paper>
                );
            case 3: //user
                return (
                    <Paper className={s.container}>
                        <div className={s.avatar}>
                            <Avatar src={require("../../assets/1.jpg")}/>
                        </div>
                        <div className={s.name}>
                            raychen
                        </div>
                        <div className={s.level}>
                            <div className={s.single}>Lv.23</div>
                        </div>
                        <div className={s.email}>
                            <div className={s.single}>1395314348@qq.com</div>
                        </div>
                        <div className={s.people}>
                            <FlatButton label={1} className={s.btn}/>
                        </div>
                        <div className={s.joinIn}>
                            <FlatButton label="移除"
                                        className={s.btn}
                                        secondary={true}
                                        ref="myBtn"
                            />
                        </div>
                    </Paper>
                )
        }

    }
}

export default ListDetail;