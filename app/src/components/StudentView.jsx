import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Button } from 'antd';
import { InputNumber } from 'antd';
import {Switch, Route, Link} from 'react-router-dom'
const { Header, Content, Footer, Sider } = Layout;
import StudentSelect from './StudentSelect.jsx'
import StudentConfirm from './StudentConfirm.jsx'
import StudentCam from './StudentCam.jsx'
import StudentWait from './StudentWait.jsx'
import Quiz from './Quiz.jsx'

export default class StudentView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            student_id: 0,
            current : 0
        };
        socket.on('check_student', function (data) {
            if( ((Object.keys(data)).length)){
                let current = this.state.current
                let student = data
                current = 1
                this.setState({current:current , student:student})
            }
            else{
                console.log("no toy")
            }
        }.bind(this));        
        socket.on('snap_saved', function (data) {
            let current = this.state.current
            current = 3
            this.setState({current:current })            
        }.bind(this));

        socket.on('quiz_started', function (data) {
            console.log("EMPEZO LA WEA")
            let current = this.state.current
            if(current == 3){
                current = 4
            }
            console.log(current)
            this.setState({current:current })            
        }.bind(this));          
        
        socket.on('already_saved', function(data){
            alert("Ya está conectado, vuelva a intentarlo")
            this.props.history.push("/");
        }.bind(this))
        // socket.on("check_student", data => {
        //     console.log(data)     
        // });        
    }
    onChange(value) {
        let student_id = this.state.student_id
        student_id = value
        this.setState({student_id : student_id})
    }
    next(){
        socket.emit("student",{student_id: this.state.student_id});
    }
    confirm(){
        let current = this.state.current
        current = 2
        this.setState({ current:current })        
    }
    deny(){
        this.props.history.push("/");
    }
    setRef(webcam){
        this.webcam = webcam;
    }
    capture(){
        const imageSrc = this.webcam.getScreenshot();
        let student = this.state.student
        student.snap = imageSrc
        this.setState({student:student})
        socket.emit("student_snap",student);
    };    
    getAnswer(answer){
        console.log(answer)
        let student = this.state.student
        student.ans = answer
        socket.emit("send_ans",student); 
        this.setState({student:student})       
    }
    render() {
        let components = [
            (<div >
                <StudentSelect 
                    onChange = {this.onChange.bind(this)} 
                    next={this.next.bind(this)}
                />
            </div>),
            (<div >
                <StudentConfirm 
                    student = {this.state.student} 
                    confirm={this.confirm.bind(this)}
                    deny={this.deny.bind(this)}
                />
            </div>),
            (<div >
                <StudentCam 
                    setRef = {this.setRef.bind(this)}
                    capture = {this.capture.bind(this)}
                />
            </div>),
            (<div >
                <StudentWait
                    setRef = {this.setRef.bind(this)}
                    capture = {this.capture.bind(this)}
                />
            </div>)
        ]

        let comp = this.state.current!=4?(
            <div>
                <Layout>
                <Content className="main-container">
                    <Row type="flex" justify="center" align="middle">
                    <Col span={16}>              
                            {components[this.state.current]}
                    </Col>
                    </Row>
                    </Content>
                </Layout>            
            </div>    
        ):(<Quiz getAnswer={this.getAnswer.bind(this)}/>)

        return comp
    }
}
