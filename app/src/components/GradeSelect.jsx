import React from 'react';
import { Card, Col, Row } from 'antd';
import StudentsList from './StudentsList.jsx';
import {Switch, Route, Link} from 'react-router-dom'

const { ipcRenderer } = require('electron');

export default class GradeSelect extends React.Component {
  click_on_card(grade){
      ipcRenderer.send('send_grade', {
        grade_name: grade
      });
  }        
  render() {
    let grades = this.props.data;  
    // console.log(grades[0].students.length)
  
    return (
        
        <div style={{ padding: '30px' }}>
            <Row gutter={16}>
            {grades.map((e, i) =>
                <Col span={8} key={i} onClick={this.click_on_card.bind(this,e.grade)}>
                    <Link to={`/teacherview/studentlist/${i}`}>
                        <Card title={e.grade} bordered={true} >
                            <p>Alumnos: {e.students.length}</p>             
                        </Card>
                    </Link>        
                </Col>            
            )}                      
            </Row>
          
        </div>
    )
  }
}
