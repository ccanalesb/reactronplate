import React from 'react';
import {Link} from 'react-router-dom'
import {Row, Col} from 'antd';
import {Card, Button} from 'antd';
import {Layout, Icon, Tag, Select} from 'antd';
import {secondsToHms} from '../utils.js';
import {Collapse} from 'antd';
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
            status: 'inactive',
            elapsed_time: 0,
            start_time: moment("2017-06-28T00:00"),
            last_restart: moment("2017-06-28T00:00"),
            interval_id: null,
            students : []
        };
        

    }

    componentDidMount() {
        this.setState({interval_id: setInterval(() => this.update_time(), 1000)});
        ipcRenderer.on('send_active_students', (event,data)=>{
            console.log(data)
            this.setState({students : data.students})
            console.log(this.state.students)
        });        
    }

    update_time() {
        this.setState({
            elapsed_time: secondsToHms(moment().diff(this.state.last_restart, 's'))
        });
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    handle_grade_select(value) {
        console.log(value)
        ipcRenderer.send('send_grade', {grade_name: value});
        this.setState({status: 'waiting'})
    }

    start_quiz_click() {
        console.log(this.state.status);
        if (this.state.status == 'waiting') {
            this.setState({status: 'in_progress'})
            ipcRenderer.send('quiz_started',[]);
            console.log("empezando prueba")
            let start_time = moment();
            this.setState({start_time: start_time, last_restart: start_time })
        } else if (this.state.status == 'in_progress') {
            this.setState({status: 'paused'})
        } else if (this.state.status == 'paused') {
            this.setState({status: 'in_progress'})
        }
    }

    render() {
        var grades = [{
            grade: "5to",
            students : [
                {number : 1, name : "Pedro", status: "on"},
                {number : 2, name : "Pablo", status: "off"},
                {number : 3, name : "Marco", status: "on"},
            ]
        }]
        var status_tag = []
        if (this.state.status == 'waiting') {
            status_tag = ['blue', 'En espera']
        } else if (this.state.status == 'inactive') {
            status_tag = ['', 'Inactivo']
        }
        let title = (
            <span className="colored display0">Estado: &nbsp;
                <Tag color={status_tag[0]}>{status_tag[1]}</Tag>
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
                                            placeholder="Seleccione evaluacion"
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
                                            onSelect={(e) => this.handle_grade_select(e)}
                                            placeholder="Seleccione el curso"
                                            style={{
                                            width: 200
                                        }}>
                                            <Option value="5to">5º básico</Option>
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
                                        type={(this.state.status == 'in_progress')
                                        ? 'dashed'
                                        : 'primary'}
                                        icon={(this.state.status == 'in_progress')
                                        ? 'pause'
                                        : 'caret-right'}
                                        className="big-button"
                                        style={{
                                        marginRight: 10
                                    }}
                                        onClick={() => {
                                        this.start_quiz_click()
                                    }}>
                                        {(this.state.status == 'in_progress')
                                            ? 'Pausar evaluación'
                                            : 'Iniciar evaluación'}
                                    </Button>
                                    <Button type="default" icon="close" className="big-button">Finalizar</Button>
                                </div>
                            </Col>
                        </Row>

                    </Card>
                    <Collapse defaultActiveKey={['1']}>
                        <Panel header="En espera" key="1">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="En evaluación" key="2">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="Finalizados" key="3">
                            <p>{text}</p>
                        </Panel>
                        <Panel header={"Conectados: "+this.state.students.length+" alumnos"} key="4">
                            <div
                                style={{
                                    padding: '30px'
                                }}>
                                <Row gutter={16}>
                                    {this.state.students.map((e, i) => <Col
                                        span={8}
                                        key={i}
                                        >
                                        <Card bordered={true}>
                                            <div className="custom-image">
                                                <img width="100%" src={e.snap} />
                                            </div>
                                            <div className="custom-card">
                                                <p>Nombre: {e.student.name}</p>
                                                <p>Nº lista: {e.student.number}</p>
                                            </div>
                                        </Card>
                                    </Col>)}
                                </Row>

                            </div>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
        );
    }
}