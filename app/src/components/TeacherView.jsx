import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import { DatePicker, Button, Card } from 'antd';
import Slider from './Slider.jsx';
import StudentsList from './StudentsList.jsx';
import GradeSelect from './GradeSelect.jsx';
import {Icon} from 'antd';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { ipcRenderer } = require('electron');

import {sample_students} from '../utils.js';

export default class TeacherView extends React.Component {

  componentDidMount(){
      ipcRenderer.send('teacher', {
        teacher_id: 'teacher_id'
      });
  }  
  render() {
    return (
    <div>
    <Layout>
      <Sider>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" />Alumnos</span>}>
            <Menu.Item key="1"><Link to = '/teacherview/list'>Mostrar lista de alumnos</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="laptop" />Profesor</span>}>
            <Menu.Item key="5">option5</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
          </SubMenu>
        </Menu>           
      </Sider>     
      <Layout>        
      ESTO ES EL PADRE <Link to = '/teacherview/gradeselect'>Lis</Link>
      <Switch>
        {/*<Route path='/teacherview/list' component={StudentsList}/>*/}
        {/*<Route path='/teacherview/gradelist' render={(props) => (
          <StudentsList {...props} data={sample_students}/>
        )}/>        */}
        <Route path='/teacherview/gradeselect' render={(props) => (
          <GradeSelect {...props} data={sample_students}/>
        )}/>        
        <Route path='/teacherview/studentlist/:id' component={StudentsList}/>
      </Switch> 
      <Footer style={{ textAlign: 'center' }}>
        @ Todos los derechos reservados
      </Footer>   
      </Layout> 
    </Layout>
    </div>
    )
  }
}
