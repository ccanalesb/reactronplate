import React from 'react';
import { Carousel } from 'antd';
import { DatePicker, Button } from 'antd';
const { ipcRenderer } = require('electron');

export default class Slider extends React.Component {
    onChange(a, b, c) {
        console.log(a, b, c);
    }
    show_dialog(){
        ipcRenderer.send('show_dialog', {
        greeting: 'Oh Hi mark! :)'
        });
    }
    next(){
        this.slickNext();
    };
    render(){
        return (
        <Carousel afterChange={this.onChange.bind(this)} ref={c => this.slider = c }>
            <div><h3><Button type="primary" size="large" onClick={this.next.bind(this)}>Next</Button></h3></div>
            <div><h3><DatePicker /></h3></div>
            <div><h3><Button type="primary" size="large" onClick={this.show_dialog.bind(this)}>Mostrar dialogo</Button></h3></div>
            <div><h3>4</h3></div>
        </Carousel>
        )
    }
}
