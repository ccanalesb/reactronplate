import React from 'react';
import { Link } from 'react-router-dom'
import { Table, Icon } from 'antd';

export default class StudentsList extends React.Component {
  render() {
    let students = this.props.students
    const columns = [
    {
      title: 'Numero de lista',
      dataIndex: 'student.number',
      key: 'student.number',
    },       
    {
      title: 'Nombre',
      dataIndex: 'student.name',
      key: 'student.name',
    }, 
    {
      title: 'Respuestas',
      dataIndex: 'ans.length',
      key: 'ans.length',
    }, 
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status',
    }
    ];    
    return (
      <div className="body" >
        <Table columns={columns} dataSource={students} style={{ padding: '30px' }}/>
      </div>
    )
  }
}
