import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Affix } from 'antd';
import { Steps, Button, message } from 'antd';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const Step = Steps.Step;

const steps = [{
  title: 'Primera',
  content: 'First-content',
}, {
  title: 'Segunda',
  content: 'Second-content',
}, {
  title: 'Tercera',
  content: 'Last-content',
}];

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
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
  render() {
    const { current } = this.state;
    return (
      <Layout>
      <Content className="quiz-container">
        <Row type="flex" justify="center" align="middle">
          <Col span={16}>
              <h2 className="display2">
                <Icon className="colored" type="swap-right" />
                Pregunta 1
              </h2>
              <div className="steps-content">{steps[this.state.current].content}</div>
              <div className="steps-action">
                {
                  this.state.current < steps.length - 1
                  &&
                  <Button type="primary" onClick={() => this.next()}>Next</Button>
                }
                {
                  this.state.current === steps.length - 1
                  &&
                  <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                }
                {
                  this.state.current > 0
                  &&
                  <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                    Previous
                  </Button>
                }
              </div>
          </Col>
        </Row> 
      </Content>
      <Footer>
        <Affix offsetBottom={0}>
          <Steps progressDot current={current}>
            {steps.map(item => <Step key={item.title} title={item.title} />)}
            {/*<Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />*/}
          </Steps>
        </Affix>

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

