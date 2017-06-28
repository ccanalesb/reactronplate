import React from 'react';
import {Link} from 'react-router-dom'
import {Row, Col} from 'antd';
import {Card, Button} from 'antd';
import {Layout, Icon, Tag} from 'antd';

const {ipcRenderer} = require('electron');
const {Header, Content, Footer, Sider} = Layout;

export default class QuizDashboard extends React.Component {

    render() {
        let title = (
            <span className="colored">Estado: <Tag color="cyan">En progreso</Tag></span>
        )
        let extra = (
            <span>Tiempo transcurrido:</span>
        )
        return (
            <Row gutter={8}>
                <Col span={24}>
                    <Card
                        className="full-size"
                        title={title}
                        extra={extra}
                    >
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
            </Row>
        );
    }
}