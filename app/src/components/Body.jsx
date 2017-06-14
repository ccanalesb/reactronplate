import React from 'react'; 	
import { Link } from 'react-router-dom'
import { DatePicker } from 'antd';
import Grid from './Grid.jsx';

export default class Body extends React.Component {
  render() {
  	console.log("hola ")
    return (
      <div>
        <Link to="${match.url}/:ciao">TO BODY 2</Link>
        <DatePicker />
        <br></br>
        <Grid />	

      </div>
    )
  }
}
