/**
 * Created by raychen on 2016/10/19.
 */

import React, {Component} from 'react'

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton'
import Addbox from 'material-ui/svg-icons/content/add-box'
import Search from 'material-ui/svg-icons/action/search'
import TextField from 'material-ui/TextField'

class ListHead extends Component{
    render(){
        return (
            <Toolbar style={{backgroundColor: "#62b1f0"}}>
                <ToolbarGroup>
                    <ToolbarTitle text="Activities"/>
                    <IconButton style={{alignSelf: 'center'}}>
                        <Addbox />
                    </IconButton>
                </ToolbarGroup>
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