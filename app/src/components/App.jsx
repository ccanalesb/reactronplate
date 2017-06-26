import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import Body from './Body.jsx';
import Body2 from './Body2.jsx';
import Quiz from './Quiz.jsx';

import { LocaleProvider } from 'antd';
import esES from 'antd/lib/locale-provider/es_ES';

require('./App.scss')

export default class App extends React.Component {
  render() {
    return (
      <LocaleProvider locale={esES}>
        <div>
          <Switch>
            <Route exact path='/' component={Body}/>
            <Route path='/hola/:ciao' component={Body2}/>
          </Switch>
        </div>
      </LocaleProvider>
    )
  }
}
