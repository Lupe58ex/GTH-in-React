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
        this.onChangeNameLong = this.onChangeNameLong.bind(this);
        this.onChangeNameShort = this.onChangeNameShort.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            name_long:'',
            name_short:'',
        }
    }

    onChangeNameLong(e){
        this.setState ({
            name_long: e.target.value,
        })
    }
    onChangeNameShort(e){
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
                <Input type='text' className='form-control' id='name_long' placeholder='Nombre largo' value={this.state.name_long} onChange={this.onChangeNameLong}/>
                <Input type='text' className='form-control' id='name_short' placeholder='Nombre corto' value={this.state.name_short} onChange={this.onChangeNameShort}/>
                
                <button  type='submit' className='btn'>Enviar</button>
                </Form>
            </div>
        );
    }
}
export default IdentificationType;