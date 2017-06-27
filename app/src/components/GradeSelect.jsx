import React from 'react';
import { Card, Col, Row } from 'antd';
import StudentsList from './StudentsList.jsx';
import {Switch, Route, Link} from 'react-router-dom'


export default class GradeSelect extends React.Component {
  render() {
    let grades = this.props.data;  
    // console.log(grades[0].students.length)
    return (
        
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
            {grades.map((e, i) =>
                <Col span={8} key={i}>
                    <Link to={`/teacherview/studentlist/${i}`}>
                        <Card title={e.grade} bordered={false}>
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
