import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd';
import { Card } from 'antd';
const student_image = require('../images/Student.png');
const teacher_image = require('../images/Teacher.png');


export default class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <Link to = '/quiz'>Quiz</Link>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={6}>
            <Link to = '/body2'>
              <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
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
