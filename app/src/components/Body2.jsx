import React from 'react';
import { Link } from 'react-router-dom'
import { DatePicker, Button } from 'antd';
import Slider from './Slider.jsx';


export default class Body2 extends React.Component {

  render() {
    return (
      <div className="body">
        <Slider />
      </div>
    )
  }
}
