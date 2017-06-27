import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import Body from './Body.jsx';
import Body2 from './Body2.jsx';
import CustomHeader from './Header.jsx';
import CustomFooter from './Footer.jsx';
import Quiz from './Quiz.jsx';

import { LocaleProvider } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import esES from 'antd/lib/locale-provider/es_ES';
const { Header, Content, Footer } = Layout;

import io from 'socket.io-client'

require('./App.less')

// var socket = io();
var socket = io("http://localhost:8081");
// var socket = io.connect(document.location.protocol+'//'+document.location.host);
window.socket = socket;

export default class App extends React.Component {
  constructor(){
    super();
    socket.on('connection')    
  }  
  render() {
    return (
      <LocaleProvider locale={esES}>
        <div>
          {/*<CustomHeader/>*/}
          {/*<Content style={{ padding: '0 50px', marginTop: 30 }}>*/}
            <Switch>
              <Route exact path='/' component={Body}/>
              <Route path='/body2' component={Body2}/>
              <Route path='/quiz' component={Quiz}/>
            </Switch>
          {/*</Content>*/}
          {/*<CustomFooter/>*/}


        </div>
      </LocaleProvider>
    )
  }
}
