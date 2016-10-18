/**
 * Created by raychen on 2016/10/18.
 */

import React, {Component} from 'react'

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton'
import s from 'material-ui/'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 2
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, index, value) {
        console.log('in');
        this.setState({value: value});
    }

    render() {
        return (
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarTitle text="Sports Mate"/>
                </ToolbarGroup>
                <ToolbarGroup>
                    <FlatButton label="contact" primary={true}/>
                    <FlatButton label="about" primary={true}/>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default Header
