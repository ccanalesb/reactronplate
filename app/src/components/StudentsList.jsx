import React from 'react';
import { Link } from 'react-router-dom'
import { Table, Icon } from 'antd';
import { sample_students } from '../utils.js';

export default class StudentsList extends React.Component {
  render() {
    let grade_id = parseInt(this.props.match.params.id,10)
    let students = sample_students[grade_id].students;
    const columns = [{
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Numero de lista',
      dataIndex: 'number',
      key: 'number',
    }, {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
    }];    
    return (
      <div className="body" >
        <Table columns={columns} dataSource={students} style={{ padding: '30px' }}/>
      </div>
    )
  }
}
