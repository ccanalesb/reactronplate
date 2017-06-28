import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import { DatePicker, Button, Card } from 'antd';
import Slider from './Slider.jsx';
import StudentsList from './StudentsList.jsx';
import GradeSelect from './GradeSelect.jsx';
import QuizDashboard from './QuizDashboard.jsx';
import { Icon } from 'antd';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { ipcRenderer } = require('electron');

import { sample_students } from '../utils.js';

export default class TeacherView extends React.Component {

  componentDidMount() {
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
              defaultOpenKeys={['sub_home']}
              style={{ height: '100%', borderRight: 0 }}
              theme="light"
            >
              <SubMenu key="sub_home" title={<span><Icon type="home" />Inicio</span>}>
                <Menu.Item key="1">Sesión de evaluación</Menu.Item>
                <Menu.Item key="2">Listado de evaluaciones</Menu.Item>
              </SubMenu>
              <SubMenu key="sub_class" title={<span><Icon type="user" />Cursos</span>}>
                <Menu.Item key="3"><Link to='/teacherview/gradeselect'>Mostrar lista de alumnos</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub_profile" title={<span><Icon type="laptop" />Profesor</span>}>
                <Menu.Item key="4">Seguridad</Menu.Item>
              </SubMenu>

            </Menu>
          </Sider>
          <Layout>
            {/*ESTO ES EL PADRE <Link to = '/teacherview/gradeselect'>Lis</Link>*/}
            <Content className="teacherview-content">
              <Switch>
                <Route path='/teacherview' component={QuizDashboard} />
                <Route path='/teacherview/gradeselect' render={(props) => (
                  <GradeSelect {...props} data={sample_students} />
                )} />
                <Route path='/teacherview/studentlist/:id' component={StudentsList} />
              </Switch>
            </Content>
            {/*<Footer style={{ textAlign: 'center' }}>
        @ Todos los derechos reservados
      </Footer>   */}
          </Layout>
        </Layout>
      </div>
    )
  }
}
