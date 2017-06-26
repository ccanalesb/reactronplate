import React from 'react';
import {Link} from 'react-router-dom'
import {Icon} from 'antd';
const logo = require('../images/linentec.png');
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


export default class Header2 extends React.Component {
  render() {
    return (
    <Header className="header">
      <div className="logo">
        <Link to='/'>
          <Icon type="home" />
        </Link>
      </div>

    </Header>
      // <div className="header">
      //   <Link to='/'>
      //     <Icon type="home" />
      //   </Link>
      //   <img src={logo} className="small-image" draggable="false"></img>
      // </div>
    )
  }
}
