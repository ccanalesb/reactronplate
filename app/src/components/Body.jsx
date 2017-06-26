import React from 'react';
import { Link } from 'react-router-dom'
import { DatePicker } from 'antd';

export default class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <Link to="/hola/:ciao">TO BODY 2</Link>
        <DatePicker />
      </div>
    )
  }
}
