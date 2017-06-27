import React from 'react';
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Button } from 'antd';
import { InputNumber } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export default class StudentView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            student_id: 0
        };
    }
    onChange(value) {
        let student_id = this.state.student_id
        student_id = value
        this.setState({student_id : student_id})
    }
    next(){
        socket.emit("student",{student_id: this.state.student_id});
    }
    render() {
        return (
        <Layout>
        <Content className="quiz-container">
            <Row type="flex" justify="center" align="middle">
            <Col span={16}>
                <h2 className="display2">
                    <span className="colored smaller">
                    <Icon type="swap-right" />
                    </span>
                    Ingresa tu número de lista
                </h2>
            </Col>
                <Col span={16}>
                <h2 className="display2">
                    <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange.bind(this)} size="large" />
                </h2>
              <div className="steps-action">
                  <Link to='/quiz'>
                    <Button size="large" type="primary" onClick={this.next.bind(this)}>Continuar<Icon type="right" /></Button>
                  </Link>
              </div>                
                </Col>
            </Row> 

        </Content>
        <Footer>
        </Footer> 
        </Layout>
        )
    }
}
