import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Button } from 'antd';
import { InputNumber } from 'antd';
import {Switch, Route, Link} from 'react-router-dom'

export default class StudentFinish extends React.Component {
    render() {
        return (
            <div>
                <Row gutter={8} >
                    <Col span={24} offset={6}>
                        <h1 className="display2">
                            <span className="colored smaller">
                            <Icon type="swap-right" />
                            </span>
                            ¿Desea entregar sus resultados?
                        </h1>
                    </Col>
                </Row> 
                <Row type="flex" justify="space-around" align="bottom" style={{ marginTop: '2em' }}>
                    <Col span={24} push={4} >
                        
                        <h1>
                        Presiona si para confirmar, no para volver a las preguntas
                        </h1>
                        
                    </Col>                                                
                </Row>
                <Row type="flex" justify="space-around" align="bottom" style={{ marginTop: '5em' }}  gutter={48}>                     
                    <Col span={12} push={8}>
                            <Button size="large" type="primary" style={{ fontSize: 20 }} onClick={this.props.finish.bind(this)}><Icon type="smile" /> Sí</Button>
                    </Col>                        
                    <Col span={12} offset={0}>
                            <Button size="large" type="danger" style={{ fontSize: 20 }} onClick={this.props.back.bind(this)}><Icon type="frown" /> No</Button>
                    </Col>                        
                </Row>
            </div>     
        )
    }
}
