//import * as React from "react";
import React, { Component }  from 'react';
import { Table, Divider, Tag } from 'antd';
import { withFormik } from "formik";

import axios from 'axios';

class Assistance extends Component {
  handleSelectChange = value => {
    this.props.setFieldValue("name", value);
  };

  render() {

    const { editing } = this.state;
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      ...restProps
    } = this.props;

    const dataSource = [{
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
        }, {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street'
        }];

        const columns = [{
        title: 'Número',
        dataIndex: 'number',
        key: 'number',
        
        }, {
        title: 'Colaborador',
        dataIndex: 'employee',
        key: 'employee',
        }, {
        title: 'Hora Entrada',
        dataIndex: 'start_hour',
        key: 'start_hour',
        }, {
        title: 'Hora Entrada Real',
        dataIndex: 'real_start_hour',
        key: 'real_start_hour',
        }, {
        title: 'Hora Salida',
        dataIndex: 'end_hour',
        key: 'end_hour',
        }, {
        title: 'Descripción',
        dataIndex: 'description',
        key: 'description',
       
        }];
    return (
        <form onSubmit={handleSubmit}>
                <Table  
                style={{padding: 15}} inputNumber = {inputNumber}
                bordered
            dataSource={dataSource} columns={columns} />
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

