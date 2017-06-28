import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Button } from 'antd';
import { InputNumber } from 'antd';
import {Switch, Route, Link} from 'react-router-dom'

export default class StudentSelect extends React.Component {
    render() {
        return (
            <div>
                <Row gutter={8}>
                    <Col span={24}>
                        <h1 className="display2">
                            <span className="colored smaller">
                            <Icon type="swap-right" />
                            </span>
                            ¿Cuál es tu número de lista?
                        </h1>
                    </Col>
                </Row> 
                <Row type="flex" justify="space-around" align="bottom" style={{ marginTop: '4em' }}>
                    <Col span={24} offset={2}>
                        <h2>
                        <InputNumber min={1} max={10} defaultValue={0} onChange={this.props.onChange.bind(this)} size="large" />
                        </h2>
                    </Col>                                                
                </Row>
                <Row type="flex" justify="space-around" align="top" style={{ marginTop: '-2em' }}>                     
                    <Col span={24} offset={2}>
                        {/*<Link to='/quiz'>*/}
                            <Button size="large" type="primary" onClick={this.props.next.bind(this)}>Continuar<Icon type="right" /></Button>
                        {/*</Link>*/}
                    </Col>                        
                </Row>
            </div>    
        )
    }
}
