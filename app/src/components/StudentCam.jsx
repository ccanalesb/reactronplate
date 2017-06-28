import React from 'react';
import Webcam from 'react-webcam';
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Button } from 'antd';
import { InputNumber } from 'antd';
import {Switch, Route, Link} from 'react-router-dom'

export default class StudentCam extends React.Component {

  render() {
    return (
            <div>
                <Row gutter={8}>
                    <Col span={24}>
                        <h1 className="display2">
                            <span className="colored smaller">
                            <Icon type="swap-right" />
                            </span>
                            Mira la cámara para confirmar tu identidad
                        </h1>
                    </Col>
                </Row> 
                <Row type="flex" justify="space-around" align="bottom" >
                    <Col span={24} offset={12}>
                        <Webcam
                        audio={false}
                        height={450}
                        ref={this.props.setRef.bind(this)}
                        screenshotFormat="image/jpeg"
                        width={450}
                        />                        
                    </Col>                                                
                </Row>
                <Row type="flex" justify="space-around" align="bottom" >                     
                    <Col span={24} offset={24}>
                            <Button onClick={this.props.capture.bind(this)}> <Icon type="camera" /> Sonríe</Button>
                    </Col>                        
                </Row>
            </div>            
    //   <div>
    //     <Webcam
    //       audio={false}
    //       height={350}
    //       ref={this.setRef.bind(this)}
    //       screenshotFormat="image/jpeg"
    //       width={350}
    //     />
    //     <button onClick={this.capture.bind(this)}>Capture photo</button>
    //   </div>
    );
  }
}