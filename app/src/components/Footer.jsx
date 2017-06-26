import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const logo = require('../images/linentec.png');

export default class Footer2 extends React.Component {
  render() {
    return (
    <Footer style={{ textAlign: 'center' }}>
        @ Todos los derechos reservados
    </Footer>      
    )
  }
}
