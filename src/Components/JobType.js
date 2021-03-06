import React, { Component }  from 'react';
import axios from 'axios';
import {
    Form,  Input, Button,
  } from 'antd';
import "antd/dist/antd.css";
import '../Styles/Forms.css';

class JobType extends Component { 
    constructor(){
        super();
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            name:''
        }
    }

    onChangeName(e){
        this.setState ({
            name: e.target.value
        })
    }

    onSubmit(e)
    {
        e.preventDefault();
        const jobType = {
            name: this.state.name
        }
        axios.post('http://localhost:8000/api/jobType/Store',jobType)
        .then(res=>console.JobType(res.data));
    }
    
    render(){
        return (
            <div className='App'>
                <Form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <Input 
                    type='text' 
                    className='form-control' 
                    id='name' 
                    placeholder='name'
                    value={this.state.name}
                    onChange={this.onChangeName}
                    />
                </div>
                <button  type='submit' className='btn'>Enviar</button>
                </Form>
            </div>
        );
    }
}
export default JobType;