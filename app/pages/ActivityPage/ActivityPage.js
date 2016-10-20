/**
 * Created by raychen on 2016/10/20.
 */

import React, {Component} from 'react'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import s from './ActivityPage.scss'

class ActivityPage extends Component{
    render(){
        return (
            <MuiThemeProvider>
                <div className={s.root}>
                    
                </div>
            </MuiThemeProvider>
        );
    }
}

export default ActivityPage;