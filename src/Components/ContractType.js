import React, { Component }  from 'react';
import axios from 'axios';
import {
    Form,  Input, Button,
  } from 'antd';
import "antd/dist/antd.css";
import '../Styles/Forms.css';

class ContractType extends Component { 
    constructor(){
        super();
        this.onChangeNameLong = this.onChangeNameLong.bind(this);
        this.onChangeNameShort = this.onChangeNameShort.bind(this);
        this.onChangeSuggestedDuration = this.onChangeSuggestedDuration.bind(this);
        this.onChangeAppearsIn = this.onChangeAppearsIn.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            name:'',
            short_name:'',
            suggested_duration:'',
            appears_in:''
        }
    }

    onChangeNameLong(e){
        this.setState ({
            name_long: e.target.value
        })
    }
    onChangeNameShort(e){
        this.setState ({
            short_name: e.target.value
        })
    }
    onChangeSuggestedDuration(e){
        this.setState ({
            suggested_duration: e.target.value
        })
    }
    onChangeAppearsIn(e){
        this.setState ({
            appears_in: e.optionSelected.value
        })
    }

    onSubmit(e)
    {
        e.preventDefault();
        const contractType = {
            name_long: this.state.name_long,
            name_short: this.state.name_short,
            suggested_duration: this.state.suggested_duration,
            appears_in: this.state.appears_in,
        }
        axios.post('http://localhost:8000/api/contractType/Store',contractType)
        .then(res=>console.ContractType(res.data));
    }
    
    render(){
        return (
            <div className='App'>
                <Form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <Input type='text' className='form-control' id='name_long' placeholder='Nombre largo' value={this.state.name_long} onChange={this.onChangeNameLong}/>
                    <Input type='text' className='form-control' id='name_short' placeholder='Nombre corto' value={this.state.name_short} onChange={this.onChangeNameShort}/>
                    <Input type='text' className='form-control' id='name_long' placeholder='Nombre largo' value={this.state.name_long} onChange={this.onChangeNameLong}/>
                    <Select defaultValue={'E'} placeholder="Por favor escoge" loadingclassName='form-control' id='appears_in'  value={this.state.appears_in} onChange={this.onChangeAppearsIn}>
                    <Option value="E">En colaborador</Option>
                    <Option value="X">En experiencia laboral</Option>
                    </Select>
                </div>
                <button  type='submit' className='btn'>EnContractTyper</button>
                </Form>
            </div>
        );
    }
}
export default ContractType;