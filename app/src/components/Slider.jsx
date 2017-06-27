import React from 'react';
import { Carousel } from 'antd';
import { DatePicker, Button } from 'antd';
import { Input } from 'antd';
import { Row, Col } from 'antd';

const { ipcRenderer } = require('electron');

export default class Slider extends React.Component {
    constructor(props){
    super(props);
        this.state = 
        { 
            current_slider : 0,
            input_values : {}
        };
    }
    onChange(a) {
        let current_slider = this.state.current_slider
        current_slider = a;
        this.setState({current_slider : current_slider})
    }
    show_dialog(){
        ipcRenderer.send('show_dialog', {
        greeting: 'Oh Hi mark! :)'
        });
    }
    componentDidMount(){
        socket.emit("student");
    }
    next(event){
        console.log(event.target.value)
        console.log(this.slider.props.children)
        console.log(this.slider.refs.slick.innerSlider.slickNext());
        event = null

    };  
    onChangevalue(e){
        
        console.log(e.target.value)
    }  
    change_value(e){
        console.log(e.target.value)
    }
    render(){

        return (
        <Carousel afterChange={this.onChange.bind(this)} ref={c => this.slider = c } >
            
            <div>
                <Row>
                    <Col span={12} offset={6}>
                        Primero:
                        <Input placeholder="192" onPressEnter={this.next.bind(this)} onChange={this.change_value.bind(this)} id="primero" />
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col span={12} offset={6}>
                        Segundo:
                        <Input placeholder="168" onPressEnter={this.next.bind(this)} onChange={this.change_value.bind(this)} />
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col span={12} offset={6}>
                        Tercero:
                        <Input placeholder="0" onPressEnter={this.next.bind(this)} onChange={this.change_value.bind(this)} />
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col span={12} offset={6}>
                        Cuarto:
                        <Input placeholder="1" onPressEnter={this.next.bind(this)} onChange={this.change_value.bind(this)} />
                    </Col>
                </Row>
            </div>

                    
            {/*<div><h3><Button type="primary" size="large" onClick={this.next.bind(this)}>Next</Button></h3></div>
            <div><h3><DatePicker /></h3></div>
            <div><h3><Button type="primary" size="large" onClick={this.show_dialog.bind(this)}>Mostrar dialogo</Button></h3></div>*/}
            {/*<div><h3>4</h3></div>*/}
        </Carousel>
        )
    }
}