//import * as React from "react";
import React, { Component }  from 'react';
import { Table, Divider, Tag, Input,TimePicker } from 'antd';
import { withFormik } from "formik";
import moment from 'moment';
import axios from 'axios';

class Assistance extends Component {

  constructor(){
    super();
    this.state={
        employees : []
     }
    }
  handleSelectChange = value => {
    this.props.setFieldValue("name", value);
  };

  
  componentDidMount() {
        
    axios.get('http://localhost:8000/api/assistance/Create')
    .then(json => {
        this.setState({ employees : json.data.employees})
        console.log(json.data.employees)
    })
    .catch(err => {
        console.log(err)
    })
  }


  render() {
    const { handleSubmit,
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      ...restProps
    } = this.props;
    const timePicker = {
      onChange: ( timePicker) => {
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
        const columns = [{
        title: 'Número',
        dataIndex: 'number',
        key: 'number',
        
        }, {
        title: 'Colaborador',
        dataIndex: 'name',
        key:'id'
        }, {
        title: 'Hora Entrada',
        dataIndex: 'start_hour',
        key: 'start_hour',
        }, {
        title: 'Hora Entrada Real',
        dataIndex: 'real_start_hour',
        key: 'real_start_hour',
        render: (value, row, index) => { return <TimePicker  defaultOpenValue={moment('08:30', 'HH:mm')} format={'HH:mm'}/> }
        }, {
        title: 'Hora Salida',
        dataIndex: 'end_hour',
        key: 'end_hour',
        }, {
        title: 'Descripción',
        dataIndex: 'description',
        key: 'description',
        render: (value, row, index) => { return <Input /> }
        }];


    return (
        <form onSubmit={handleSubmit}>
                <Table  style={{padding: 15}}
                dataSource={this.state.employees} columns={columns} />
          <button  type='submit' className='btn'>EnContractTyper</button>
        </form>
        );
    }
}
export default withFormik({
  mapPropsToValues: props => ({ name: "" }),
  handleSubmit: values => {
    axios.post('http://localhost:8000/api/jobType/Store',values)
        .then(res=>console.JobType(res.props));
    console.log(values);
  }
})(Assistance);

