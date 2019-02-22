//import * as React from "react";
import React, { Component }  from 'react';
import { Select } from "antd";
import { withFormik } from "formik";

import axios from 'axios';

class Area extends Component {
  handleSelectChange = value => {
    this.props.setFieldValue("name", value);
  };

  render() {
    const { handleSubmit, values } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Select
          name="name"
          value={values.name}
          style={{ width: 120 }}
          onChange={this.handleSelectChange}>
          <Select.Option value="male">male</Select.Option>
          <Select.Option value="female">female</Select.Option>
        </Select>
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
})(Area);

