import React from 'react';
import { Row, Col, S } from 'antd';
import { Card } from 'antd';

export default class Grid extends React.Component{
render(){
	return (<div>
		<Row>
			<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col1</Col>
			<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col2</Col>
			<Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col3</Col>
		</Row>
  	</div>)
  }
}
