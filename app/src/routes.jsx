import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import App from './components/App.jsx';
import Header2 from './components/Header.jsx';
import Footer2 from './components/Footer.jsx';
import Body2 from './components/Body2.jsx';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

export default class Routes extends React.Component{
  	render(){
		return (
			<Router>
				<div className="unselectable">
                    <Header2/>
                    <Content style={{ padding: '0 50px', marginTop: 30 }}>
					<Route exact path="/" component={App}/>
                    <Route exact path="/body2" component={Body2}/>
                    </Content>
                    <Footer2/>
				</div>
			</Router>
		)
  	}
}