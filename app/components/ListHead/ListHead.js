/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton'
import Addbox from 'material-ui/svg-icons/content/add-box'
import Search from 'material-ui/svg-icons/action/search'
import TextField from 'material-ui/TextField'

import s from './ListHead.scss'

class ListHead extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let group1 =
            <ToolbarGroup>
                <ToolbarTitle text="Activities"/>
                <IconButton style={{alignSelf: 'center'}}>
                    <Addbox />
                </IconButton>
            </ToolbarGroup>;
        if (this.props.type == "circle") {
            group1 =
                <ToolbarGroup>
                    <ToolbarTitle text="Circles"/>
                </ToolbarGroup>;
        }else if (this.props.type == "friends"){
            group1 =
                <ToolbarGroup>
                    <ToolbarTitle text="Friends"/>
                </ToolbarGroup>;
        }
        return (
            <Toolbar className={s.container}>
                {group1}
                <ToolbarGroup>
                    <TextField
                        hintText="search"
                        style={{width: '200px'}}
                    />
                    <IconButton style={{alignSelf: 'center'}}>
                        <Search />
                    </IconButton>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default ListHead;