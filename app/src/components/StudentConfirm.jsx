import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Button } from 'antd';
import { InputNumber } from 'antd';
import {Switch, Route, Link} from 'react-router-dom'

export default class StudentConfirm extends React.Component {
    render() {
        console.log(this.props.student.student.name)
        return (
            <div>
                <Row gutter={8}>
                    <Col span={24}>
                        <h1 className="display2">
                            <span className="colored smaller">
                            <Icon type="swap-right" />
                            </span>
                            ¿Eres
                            <b> {this.props.student.student.name} </b>
                            ?
                        </h1>
                    </Col>
                </Row> 
                <Row type="flex" justify="space-around" align="bottom">
                    <Col span={24} offset={2}>
                        {/*<h2>
                        <InputNumber min={1} max={10} defaultValue={0}  size="large" />
                        </h2>*/}
                    </Col>                                                
                </Row>
                <Row type="flex" justify="space-around" align="top" style={{ marginTop: '2em' }}>                     
                    <Col span={24} offset={2}>

                        <Button size="large" type="primary" onClick={this.props.confirm.bind(this)} ><Icon type="smile" /> Sí</Button>
                        
                    </Col>                        
                </Row>
                <Row type="flex" justify="space-around" align="bottom" style={{ marginTop: '2em' }}>                     
                    <Col span={24} offset={2}>

                        <Button size="large" type="danger" onClick={this.props.deny.bind(this)}><Icon type="frown" /> No</Button>
                        
                    </Col>                        
                </Row>
            </div>    
        )
    }
}
