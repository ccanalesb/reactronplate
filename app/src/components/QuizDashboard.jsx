import React from 'react';
import {Link} from 'react-router-dom'
import {Row, Col} from 'antd';
import {Card, Button} from 'antd';
import {Layout, Icon, Tag, Select} from 'antd';
import {secondsToHms} from '../utils.js';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


const {ipcRenderer} = require('electron');
const {Header, Content, Footer, Sider} = Layout;
const Option = Select.Option;

const moment = require('moment');

export default class QuizDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            elapsed_time: 0,
            start_time: moment("2017-06-28T00:00"),
            last_restart: moment("2017-06-28T00:00"),
            interval_id: null
        };

    }

    componentDidMount() {
        this.setState({interval_id: setInterval(() => this.update_time(), 1000)});
    }

    update_time() {
        this.setState({
            elapsed_time: secondsToHms(moment().diff(this.state.last_restart, 's'))
        });
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    render() {
        let title = (
            <span className="colored display0">Estado: &nbsp;
                <Tag color="cyan">En progreso</Tag>
            </span>
        )
        let extra = (
            <span>Tiempo transcurrido: {this.state.elapsed_time}
            </span>
        )
        return (
            <Row gutter={8}>
                <Col span={24}>
                    <Card
                        className="full-size"
                        title={title}
                        extra={extra}
                        onClick={() => this.update_time()}>

                        <Row>
                            <Col span={12}>
                                <Row>
                                    <Col span={8}>
                                        <h3 className="smaller display0">Evaluación:</h3>
                                    </Col>
                                    <Col span={16}>
                                        <Select
                                            defaultValue="test"
                                            style={{
                                            width: 200
                                        }}>
                                            <Option value="test">Evaluación de ejemplo</Option>
                                        </Select>
                                    </Col>
                                </Row>
                                <Row
                                    style={{
                                    marginTop: 20
                                }}>
                                    <Col span={8}>
                                        <h3 className="smaller display0">Curso:</h3>
                                    </Col>
                                    <Col span={16}>
                                        <Select
                                            defaultValue="sexto"
                                            style={{
                                            width: 200
                                        }}>
                                            <Option value="sexto">6º B</Option>
                                        </Select>
                                    </Col>
                                </Row>
                            </Col>
                            <Col
                                span={12}
                                style={{
                                textAlign: 'center'
                            }}>
                                <div>
                                    <Button
                                        type="primary"
                                        icon="pause"
                                        className="big-button"
                                        style={{
                                        marginRight: 10
                                    }}>Pausar</Button>
                                    <Button type="default" icon="close" className="big-button">Finalizar</Button>
                                </div>
                            </Col>
                        </Row>

                    </Card>
                    <Collapse defaultActiveKey={['1']} >
                        <Panel header="En espera" key="1">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="En evaluación" key="2">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="Finalizados" key="3" >
                            <p>{text}</p>
                        </Panel>
                        <Panel header="Conectados" key="4" >
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
        );
    }
}