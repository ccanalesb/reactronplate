import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd';
import { Steps, Button, message } from 'antd';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const Step = Steps.Step;

const steps = [{
  title: 'First',
  content: 'First-content',
}, {
  title: 'Second',
  content: 'Second-content',
}, {
  title: 'Last',
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
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              Content
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

//  <div className="quiz-container">
//         <Row type="flex" justify="center" align="middle">
//           <Col span={16}>
//               <div className="steps-content">{steps[this.state.current].content}</div>
//               <div className="steps-action">
//                 {
//                   this.state.current < steps.length - 1
//                   &&
//                   <Button type="primary" onClick={() => this.next()}>Next</Button>
//                 }
//                 {
//                   this.state.current === steps.length - 1
//                   &&
//                   <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
//                 }
//                 {
//                   this.state.current > 0
//                   &&
//                   <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
//                     Previous
//                   </Button>
//                 }
//               </div>
//           </Col>
//         </Row>
//         <Row type="flex" justify="center" align="bottom">
//           <Col span={16}>
//             <Steps current={current}>
//               {steps.map(item => <Step key={item.title} title={item.title} />)}
//             </Steps>    
//           </Col>
//         </Row>
//       </div>