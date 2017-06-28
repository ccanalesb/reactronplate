import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Button } from 'antd';
import { InputNumber } from 'antd';
import {Switch, Route, Link} from 'react-router-dom'

export default class StudentWait extends React.Component {

  render() {
    return (
            <div>
                <Row gutter={8} >
                    <Col span={24} offset={7}>
                        <h1 className="display2">
                            <span className="colored smaller">
                            <Icon type="swap-right" />
                            </span>
                            Estás listo para empezar
                        </h1>
                    </Col>
                </Row> 
                <Row type="flex" justify="space-around" align="bottom" style={{ marginTop: '2em' }}>
                    <Col span={24} offset={7} >
                        
                        <h1>
                        Sólo falta esperar a que el profesor de inicio al diagnóstico
                        </h1>
                        
                    </Col>                                                
                </Row>
                <Row type="flex" justify="space-around" align="bottom" style={{ marginTop: '5em' }}>                     
                    <Col span={24} offset={20}>
                            <Icon type="sync" spin={true} style={{ fontSize: 200, color: '#08c' }}/>
                    </Col>                        
                </Row>
            </div>            
    );
  }
}