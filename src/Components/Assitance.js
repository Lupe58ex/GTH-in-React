//import * as React from "react";
import React, { Component }  from 'react';
import { Table, Divider, Tag, InputNumber,TimePicker } from 'antd';
import { withFormik } from "formik";

import axios from 'axios';

class Assistance extends Component {
  handleSelectChange = value => {
    this.props.setFieldValue("name", value);
  };

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
    const dataSource = [{
        number: '1',
        employee: 'Mike',
        start_hour: 32,
        real_start_hour: '11:50',
        end_hour: '',
        description:''
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
        render: () => { return <timePicker /> }
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
                <Table  style={{padding: 15}}
                dataSource={dataSource} columns={columns} />
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

