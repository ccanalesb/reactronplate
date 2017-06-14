import React from 'react';
import { Link } from 'react-router-dom'
import { DatePicker, Button } from 'antd';
import Slider from './Slider.jsx';
const { ipcRenderer } = require('electron');

export default class Body extends React.Component {
  show_dialog(){
    ipcRenderer.send('show_dialog', {
      greeting: 'Oh Hi mark! :)'
    });
  }
  render() {
    return (
      <div className="body">
        {/*<Link to="${match.url}/:ciao">TO BODY 2</Link>
        <DatePicker />*/}
        <Slider />
        {/*<Button type="primary" size="large" onClick={this.show_dialog.bind(this)}>Mostrar dialogo</Button>*/}
      </div>
    )
  }
}
