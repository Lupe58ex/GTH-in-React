import React, { Component }  from 'react';
import axios from 'axios';
import {
    Form,  Input, Button,Radio,Select,
  } from 'antd';
import "antd/dist/antd.css";
import '../Styles/Forms.css';

const Option = Select.Option;
class Role extends Component { 
    constructor(){
        super();
        this.onChangeNameLong = this.onChangeNameLong.bind(this);
        this.onChangeNameShort = this.onChangeNameShort.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeLoanEvaluator = this.onChangeLoanEvaluator.bind(this);
        this.onChangeLoanPromoter = this.onChangeLoanPromoter.bind(this);
        this.onChangeAppearsIn = this.onChangeAppearsIn.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            name_long:'',
            name_short:'',
            description:'',
            loan_evaluator:'',
            loan_promoter:'',
            appears_in:''
        }
    }

    onChangeNameLong(e){
        this.setState ({
            name_long: e.target.value,
        })
    }
    onChangeNameShort(e){
        this.setState ({
            name_short: e.target.value,
        })
    }
    onChangeDescription(e){
        this.setState ({
            description: e.target.value,
        })
    }
    onChangeLoanEvaluator(e){
        this.setState ({
            loan_evaluator:e.target.value,
        })
    }
    onChangeLoanPromoter(e){
        this.setState ({
            loan_promoter:e.target.value,
        })
    }    
    onChangeAppearsIn(e){
        this.setState ({
            appears_in:e.target.value,
        })
    }
          
    onSubmit(e)
    {
        e.preventDefault();
        const role = {
            name_long: this.state.name_long,
            name_short: this.state.name_short,
            description: this.state.description,
            loan_evaluator: this.state.loan_evaluator,
            loan_promoter: this.state.loan_promoter,
            appears_in: this.state.appears_in,
        }
        axios.post('http://localhost:8000/api/Role/Store',role)
        .then(res=>console.Role(res.data));
    }
    
    render(){
        return (
            <div className='App'>
                <Form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <Input type='text' className='form-control' id='name_long' placeholder='Nombre largo' value={this.state.name_long} onChange={this.onChangeNameLong}/>
                    <Input type='text' className='form-control' id='name_short' placeholder='Nombre corto' value={this.state.name_short} onChange={this.onChangeNameShort}/>
                    <Input type='text' className='form-control' id='description' placeholder='Descripcion' value={this.state.description} onChange={this.onChangeDescription}/>
                    <Radio className='form-control' id='loan_evaluator' value={this.state.loan_evaluator} onChange={this.onChangeLoanEvaluator}>Es evaluador:</Radio>
                    <Radio className='form-control' id='loan_promoter'  value={this.state.loan_promoter} onChange={this.onChangeLoanPromoter}>Es promotor:</Radio>
                    <Select defaultValue={'E'} placeholder="Por favor escoge" onChange={this.change} value={this.state.value}>
                    <Option value="E">En colaborador</Option>
                    <Option value="X">En experiencia laboral</Option>
                    </Select>
                </div>
                <button  type='submit' className='btn'>Enviar</button>
                </Form>
            </div>
        );
    }
}
export default Role;