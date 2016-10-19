/**
 * Created by raychen on 2016/10/19.
 */
import React, {Component} from 'react'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'

import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import RankCard from '../../components/RankCard/RankCard'
import GraphCard from '../../components/GraphCard/GraphCard'

import './HomePage.scss'
import '../common.scss'

class HomePage extends Component{
    render(){
        return (
          <MuiThemeProvider>
              <div className="root">
                  <Header isLogin={false} />
                  <div className="container-center">
                      <div className="home-sidebar">
                          <Sidebar />
                      </div>
                      <div className="home-main home-paper">
                          <GraphCard />
                      </div>
                      <div className="home-right">
                          <div className="home-right-container">
                              <RankCard />
                              <RankCard />
                          </div>
                      </div>
                  </div>
              </div>
          </MuiThemeProvider>
        );
    }
}

export default HomePage;