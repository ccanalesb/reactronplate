import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd';
import { Card, Button } from 'antd';
import { Layout, Icon } from 'antd';

const student_image = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 596 532"><defs><style>.a,.b{fill:none;stroke:#142625;stroke-width:21px;}.a{stroke-miterlimit:10;}.b{stroke-linejoin:round;}</style></defs><title>icon</title><circle class="a" cx="292.6" cy="115.2" r="68.2"/><line class="a" x1="121.4" y1="325" x2="464.1" y2="325"/><path class="a" d="M172,329S148.6,212,292.8,212,415,329,415,329"/><path class="b" d="M292.1,376s-75-14.1-109.3,8.9l-30.3,87.5s70.7-20.7,139.6,0V376Z"/><path class="b" d="M292,376s75-14.1,109.3,8.9l30.3,87.5s-70.7-20.7-139.6,0V376Z"/></svg>';
const teacher_image = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 596 532"><defs><style>.a{fill:none;stroke:#142625;stroke-miterlimit:10;stroke-width:21px;}</style></defs><title>icon</title><circle class="a" cx="207.4" cy="157.5" r="84.5"/><line class="a" x1="340.4" y1="81.8" x2="561.5" y2="81.8"/><line class="a" x1="340.4" y1="143.2" x2="468.2" y2="143.2"/><path class="a" d="M62.9,461.5H309.7V375.8S459.5,325,510.4,272.3c35.8-37.1-5.5-83.5-42.2-69-112.9,44.5-138.1,67-278.7,72.9C37.4,282.5,62.9,405.2,62.9,461.5Z"/><line class="a" x1="514.2" y1="157.5" x2="494.9" y2="202.6"/></svg>';

const { ipcRenderer } = require('electron');
const { Header, Content, Footer, Sider } = Layout;

export default class Body extends React.Component {
  // click_on_teacher(){
  //     ipcRenderer.send('teacher', {
  //       teacher_id: 'teacher_id'
  //     });
  // }  
  emit_to_server(){
      console.log(socket)
      socket.emit("student");
  }  
  render() {
    return (<Layout>
      <Content className="main-container">
        <Row type="flex" justify="center" align="middle">
          <Col span={16}>
            <h2 className="display2">
              <span className="colored smaller">
                <Icon type="swap-right" />
              </span>
              Bienvenido <br />
              <span className="display1 smaller" style={{paddingLeft: "20pt"}}>
                Señala si eres profesor o alumno
              </span>
            </h2>
              
            <div className="roleselector-content">
              <Row gutter={16}>
                <Col span={12}>
                  <Link to = '/teacherview'>
                    <Card bordered={true} >
                      <div className="custom-image">
                        <img width="100%" src={teacher_image} />
                      </div>
                      <br />
                      <div className="custom-card">
                        <span className="colored">Profesor</span >
                      </div>
                    </Card>
                  </Link>
                </Col>
                <Col span={12}>
                  <Link to = '/quiz'>
                    <Card bordered={true} >
                      <div className="custom-image">
                        <img width="100%" src={student_image} />
                      </div>
                      <br />
                      <div className="custom-card">
                        <span className="colored">Alumno</span >
                      </div>
                    </Card>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        </Content>
    </Layout>)
  }
}
