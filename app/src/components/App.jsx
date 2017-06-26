import React from 'react';
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Body from './Body.jsx';
import Body2 from './Body2.jsx';

import { LocaleProvider } from 'antd';
import esES from 'antd/lib/locale-provider/es_ES';

require('./App.scss')

export default class Main extends React.Component {
  render() {
    return (
      <LocaleProvider locale={esES}>
        <div>
          <Router>
            <div className="unselectable">
                {/*<Route exact path='/body2' component={Body2}/>*/}
                <Route exact path='/' component={Body}/>
            </div>
          </Router>
        </div>
      </LocaleProvider>
    )
  }
}
