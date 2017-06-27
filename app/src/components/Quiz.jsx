import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Affix, Alert } from 'antd';
import { Steps, Button, message, Card } from 'antd';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {sample_questions, QuestionUtils} from '../utils.js';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const Step = Steps.Step;

const steps = sample_questions;

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      ans: {}
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  doAnswer(question_uid,answer_uid){
    let ans = this.state.ans;
    let answer_array = ans.hasOwnProperty(question_uid)?ans[question_uid]:[];
    if(answer_array.indexOf(answer_uid)<0){
      answer_array.push(answer_uid);
    }else{
      answer_array.splice(answer_array.indexOf(answer_uid),1)
    }
    ans[question_uid] = answer_array;
    this.setState({ans})
    console.log(this.state);
  }
  render() {
    const { current } = this.state;
    return (
      <Layout>
      <Content className="quiz-container">
        <Row type="flex" justify="center" align="middle">
          <Col span={16}>
              <h2 className="display2">
                <span className="colored smaller">
                  {this.state.current+1}
                  <Icon type="swap-right" />
                </span>
                {steps[this.state.current].question}
                <img src={steps[this.state.current].image} />
              </h2>
              {QuestionUtils.get_right_answers_number(steps[this.state.current])>1?
                <Alert message="Se pueden seleccionar varias opciones" className="colored" type="info" />
              :""}
              <div className="steps-content">
                <Row gutter={16}>
                  
                  {steps[this.state.current].answers.map((item, idx) => 
                    <Col span={8} key={item.uid}>
                      <Card 
                        bordered={true} 
                        onClick={(e) => this.doAnswer(steps[this.state.current].uid,item.uid)}
                        className={(this.state.ans.hasOwnProperty(steps[this.state.current].uid)?this.state.ans[steps[this.state.current].uid]:[]).indexOf(item.uid)<0?"":"selected"}
                      >
                        {item.hasOwnProperty('image')?
                          <div className="custom-image">
                            <img alt="example" width="100%" src={item.image} />
                          </div>
                        :""}
                        {item.hasOwnProperty('content')?
                          <div className="custom-card">
                            <h3>{item.content}</h3>
                          </div>
                        :""}
                      </Card>
                    </Col>
                  )}
                </Row>
                {/*{steps[this.state.current].content}*/}
              </div>
              <div className="steps-action">
                {
                  this.state.current < steps.length - 1
                  &&
                  <Button size="large" type="primary" onClick={() => this.next()}>Continuar<Icon type="right" /></Button>
                }
                {
                  this.state.current === steps.length - 1
                  &&
                  <Button size="large" type="primary" onClick={() => message.success('Processing complete!')}>Terminar prueba</Button>
                }
                {
                  this.state.current > 0
                  &&
                  <Button size="large" style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                    Pregunta anterior
                  </Button>
                }
              </div>
          </Col>
        </Row> 
      </Content>
      <Footer className="quiz-progress">
        
          <Steps progressDot current={current}>
            {steps.map((item,index) => <Step key={index} title={"Pregunta "+(index+1)} />)}
            {/*<Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />*/}
          </Steps>
        

        {/*<Row type="flex" justify="center" align="bottom">
          <Col span={16}>
            <Steps current={current}>
              {steps.map(item => <Step key={item.title} title={item.title} />)}
            </Steps>    
          </Col>
        </Row>  */}
      </Footer> 
      </Layout>
    )
  }
}

