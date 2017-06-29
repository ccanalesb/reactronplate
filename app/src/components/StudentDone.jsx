import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Button } from 'antd';
import { InputNumber } from 'antd';
import {Switch, Route, Link} from 'react-router-dom'

export default class StudentDone extends React.Component {

    componentDidMount() {
        this.props.send_final_student()
    }

  render() {
    return (
            <div>
                <Row gutter={8} >
                    <Col span={24} offset={6}>
                        <h1 className="display2">
                            <span className="colored smaller">
                            <Icon type="swap-right" />
                            </span>
                            Tus respuestas han sido enviadas
                        </h1>
                    </Col>
                </Row> 
                <Row type="flex" justify="space-around" align="bottom" style={{ marginTop: '2em' }}>
                    <Col span={24} offset={3} >
                        
                        <h1>
                        Espera que tus compañeros terminen de responder, y luego tendrás tus resultados
                        </h1>
                        
                    </Col>                                                
                </Row>
                <Row type="flex" justify="space-around" align="bottom" style={{ marginTop: '5em' }}>                     
                    <Col span={24} offset={20}>
                            <Icon type="check" style={{ fontSize: 200, color: '#08c' }}/>
                    </Col>                        
                </Row>
            </div>            
    );
  }
}