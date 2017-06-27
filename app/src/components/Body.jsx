import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd';
import { Card, Button } from 'antd';
const student_image = require('../images/Student.png');
const teacher_image = require('../images/Teacher.png');

const { ipcRenderer } = require('electron');


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
    return (
      <div className="body">
        <Link to = '/quiz'>Quiz</Link>
        <div><h3><Button type="primary" size="large" onClick={this.emit_to_server.bind(this)}>Emit</Button></h3></div>        
        <Row type="flex" justify="space-around" align="middle">
          <Col span={6}>
            <Link to = '/teacherview'>
              <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                {/*<div className="custom-image" onClick={this.click_on_teacher.bind(this)}>*/}
                <div className="custom-image">
                  <img alt="example" width="100%" src={teacher_image} />
                </div>
                <div className="custom-card">
                  <h1> Profesor </h1>
                </div>
              </Card>            
            </Link>
          </Col>
          <Col span={6}>
            <Link to = '/body2'>
              <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img alt="example" width="100%" src={student_image} />
                </div>
                <div className="custom-card">
                  <h1> Alumno </h1>
                </div>
              </Card>
            </Link>
          </Col>
          
        </Row>

      </div>
    )
  }
}
