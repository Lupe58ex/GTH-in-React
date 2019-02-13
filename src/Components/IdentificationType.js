import React, { Component }  from 'react';
import axios from 'axios';
import {
    Form,  Input, Button,
  } from 'antd';
import "antd/dist/antd.css";
import '../Styles/Forms.css';

class IdentificationType extends Component { 
    constructor(){
        super();
        this.onChangeName_long = this.onChangeName_long.bind(this);
        this.onChangeName_short = this.onChangeName_short.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            name_long:'',
            name_short:''
        }
    }

    onChangeName_long(e){
        this.setState ({
            name_long: e.target.value,
        })
    }
    onChangeName_short(e){
        this.setState ({
            name_short: e.target.value
        })
    }

    onSubmit(e)
    {
        e.preventDefault();
        const identificationType = {
            name_long: this.state.name_long,
            name_short: this.state.name_short,
        }
        axios.post('http://localhost:8000/api/identificationType/Store',identificationType)
        .then(res=>console.IdentificationType(res.data));
    }
    
    render(){
        return (
            <div className='App'>
                <Form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <Input type='text' className='form-control' id='name_long' placeholder='Nombre largo' value={this.state.name_long} onChange={this.onChangeName_long}/>
                    <Input type='text' className='form-control' id='name_short' placeholder='Nombre corto' value={this.state.name_short} onChange={this.onChangeName_short}/>
                </div>
                <button  type='submit' className='btn'>Enviar</button>
                </Form>
            </div>
        );
    }
}
export default IdentificationType;